#!/usr/bin/env python3
"""
Pre-push validator for Open Digital Policies.

Catches the classes of errors that htmlproofer and lychee detect,
without requiring a full Jekyll build. Run before committing:

    python3 scripts/validate.py

Exit code 0 = all clear. Exit code 1 = errors found.
"""

import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
POLICIES_DIR = ROOT / "_policies"
LAYOUTS_DIR = ROOT / "_layouts"

# Headings that domain-full.html layout links to via nav anchors
REQUIRED_HEADINGS = [
    ("## Pillar 1: Principles", "#pillar-1-principles"),
    ("## Pillar 2: Standards", "#pillar-2-standards"),
    ("## Pillar 3: Implementation", "#pillar-3-implementation"),
    ("## Pillar 4: Governance", "#pillar-4-governance"),
    ("## Real-World Examples", "#real-world-examples"),
    ("## Gaps and Known Weaknesses", "#gaps-and-known-weaknesses"),
]

errors = []
warnings = []


def check_policy_files():
    files = sorted(POLICIES_DIR.rglob("full-model.md"))
    if not files:
        errors.append("No full-model.md files found under _policies/")
        return

    for fpath in files:
        domain = fpath.parent.name
        content = fpath.read_text()

        # 1. Single-level cross-domain relative links (should be ../../)
        bad = re.findall(r'\]\(\.\./([a-z][a-z-]+/)', content)
        if bad:
            errors.append(f"{domain}: broken cross-domain link(s) using '../' — should be '../../': {bad}")

        # 2. Required headings for layout nav
        for heading, anchor in REQUIRED_HEADINGS:
            if heading not in content:
                errors.append(f"{domain}: missing '{heading}' (layout nav links to {anchor})")

        # 3. Relative CONTRIBUTING.md links (must be absolute GitHub URL)
        if re.search(r'\]\(\.\./.*CONTRIBUTING', content):
            errors.append(f"{domain}: has relative CONTRIBUTING.md link — use full GitHub URL")

        # 4. Leftover (coming soon) placeholder
        if "(coming soon)" in content:
            warnings.append(f"{domain}: still has '(coming soon)' placeholder text")

        # 5. Empty front matter check (policy files should have --- ---)
        if not content.startswith("---"):
            warnings.append(f"{domain}: missing front matter (expected '---' at top)")


def check_domains_yml():
    yml_path = ROOT / "_data" / "domains.yml"
    if not yml_path.exists():
        errors.append("_data/domains.yml not found")
        return

    content = yml_path.read_text()

    # Every draft domain should have a full_model path
    in_draft = False
    current_id = ""
    for line in content.splitlines():
        if line.startswith("- id:"):
            current_id = line.split(":", 1)[1].strip()
        if "status: draft" in line:
            in_draft = True
        if in_draft and "full_model:" in line:
            val = line.split(":", 1)[1].strip()
            if not val:
                errors.append(f"domains.yml: '{current_id}' is draft but has no full_model path")
            in_draft = False


def check_layout_nav_anchors():
    """Verify the nav anchors in domain-full.html match what we require."""
    layout = LAYOUTS_DIR / "domain-full.html"
    if not layout.exists():
        warnings.append("_layouts/domain-full.html not found — skipping nav anchor check")
        return

    content = layout.read_text()
    for _, anchor in REQUIRED_HEADINGS:
        if anchor not in content:
            warnings.append(f"domain-full.html nav does not link to '{anchor}' — "
                            f"REQUIRED_HEADINGS in this script may be out of date")


def main():
    print("Open Digital Policies — pre-push validator")
    print("=" * 50)

    check_policy_files()
    check_domains_yml()
    check_layout_nav_anchors()

    policy_count = len(list(POLICIES_DIR.rglob("full-model.md")))
    print(f"Checked {policy_count} full-model.md files\n")

    if errors:
        print(f"ERRORS ({len(errors)}) — fix before pushing:")
        for e in errors:
            print(f"  ❌  {e}")
    else:
        print("✅  No errors")

    if warnings:
        print(f"\nWARNINGS ({len(warnings)}):")
        for w in warnings:
            print(f"  ⚠️   {w}")
    else:
        print("✅  No warnings")

    if errors:
        print("\nFailed.")
        sys.exit(1)
    else:
        print("\nAll checks passed.")
        sys.exit(0)


if __name__ == "__main__":
    main()
