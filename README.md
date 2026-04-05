# Open Digital Policies (ODP)

[![Build & Deploy](https://github.com/mgifford/DigitalPolicies/actions/workflows/pages.yml/badge.svg)](https://github.com/mgifford/DigitalPolicies/actions/workflows/pages.yml)
[![Accessibility](https://github.com/mgifford/DigitalPolicies/actions/workflows/axe.yml/badge.svg)](https://github.com/mgifford/DigitalPolicies/actions/workflows/axe.yml)
[![Link Check](https://github.com/mgifford/DigitalPolicies/actions/workflows/links.yml/badge.svg)](https://github.com/mgifford/DigitalPolicies/actions/workflows/links.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

> **Live site:** [mgifford.github.io/DigitalPolicies](https://mgifford.github.io/DigitalPolicies/)

A living library of model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.

ODP provides openly licensed, community-maintained model policy language that anyone can adopt, adapt, and improve. It is inspired by the [Open Climate Resilience Policies](https://ocrap.net/) project and applies the same philosophy to the digital domain.

---

## The Core Idea

Digital technology shapes our energy systems, our privacy, our access to public services, and our relationship with government. Most digital policy is written behind closed doors in language inaccessible to the communities most affected.

**ODP makes good policy language a public good.**

We want AI — but not at the cost of clean water and reliable electricity.
We want smart cities — but not at the cost of our privacy.
We want innovation — but we want to do so safely.

---

## Policy Domains

Each domain follows a four-pillar structure: **Principles → Standards → Implementation → Governance**.

### Ready to use (Draft)

| Domain | Model Policy |
|---|---|
| [Who Pays for AI's Power Bill?](https://mgifford.github.io/DigitalPolicies/domains/data-centers/) — Data Centers & Environmental Sustainability | [Full model](https://mgifford.github.io/DigitalPolicies/domains/data-centers/full-model/) |
| [Digital Services That Work for Everyone](https://mgifford.github.io/DigitalPolicies/domains/accessibility/) — Digital Accessibility & Inclusion | [Full model](https://mgifford.github.io/DigitalPolicies/domains/accessibility/full-model/) |
| [You Own It. You Should Be Able to Fix It.](https://mgifford.github.io/DigitalPolicies/domains/right-to-repair/) — Right to Repair, Interoperability & E-Waste | [Full model](https://mgifford.github.io/DigitalPolicies/domains/right-to-repair/full-model/) |
| [Public Money, Public Code](https://mgifford.github.io/DigitalPolicies/domains/open-source-in-government/) — Open Source in Government | [Full model](https://mgifford.github.io/DigitalPolicies/domains/open-source-in-government/full-model/) |
| [AI That Works For You, Not On You](https://mgifford.github.io/DigitalPolicies/domains/ai-adoption/) — AI Adoption & Governance | [Full model](https://mgifford.github.io/DigitalPolicies/domains/ai-adoption/full-model/) |
| [Who's Holding the Algorithm Accountable?](https://mgifford.github.io/DigitalPolicies/domains/algorithmic-accountability/) — Algorithmic Accountability | [Full model](https://mgifford.github.io/DigitalPolicies/domains/algorithmic-accountability/full-model/) |
| [A Greener Web](https://mgifford.github.io/DigitalPolicies/domains/web-sustainability/) — Web Sustainability | [Full model](https://mgifford.github.io/DigitalPolicies/domains/web-sustainability/full-model/) |
| [Whose Internet Is It?](https://mgifford.github.io/DigitalPolicies/domains/digital-sovereignty/) — Digital Sovereignty | [Full model](https://mgifford.github.io/DigitalPolicies/domains/digital-sovereignty/full-model/) |

### In development

| Domain | Notes |
|---|---|
| Digital Public Infrastructure | Framework planned |
| Smart Cities & Privacy | Framework planned |
| Children & Technology | Framework planned |
| Freedom of Expression & Content Governance | Framework planned |

---

## Features

- **8 full policy models** — four-pillar structure (Principles → Standards → Implementation → Governance) with worked examples, real-world adoptions, and glossaries
- **Real-world adoption tracker** — jurisdictions putting model language into practice, across 6 domains
- **Policy prompt builders** — [Advocate Prompt Builder](https://mgifford.github.io/DigitalPolicies/tools/advocate/) and [Policy Pro Prompt Builder](https://mgifford.github.io/DigitalPolicies/tools/policy-pro/) for taking model language into any AI tool
- **Client-side search** — full-text search powered by [Lunr.js](https://lunrjs.com/), no server required
- **Dark mode** — system preference detection with manual toggle; anti-FOUC
- **WCAG 2.2 AA** — automated axe-core testing in CI; skip links, focus rings, ARIA throughout
- **Zero broken links** — htmlproofer (internal) and lychee (external) in CI
- **Sustainable by design** — system fonts, minimal JavaScript, no web fonts, no tracking

---

## Tools

| Tool | Purpose |
|---|---|
| [Advocate Prompt Builder](https://mgifford.github.io/DigitalPolicies/tools/advocate/) | Letters to elected officials, public testimony, talking points |
| [Policy Pro Prompt Builder](https://mgifford.github.io/DigitalPolicies/tools/policy-pro/) | Policy memo drafting, legislative gap analysis, regulatory drafting |

Both tools generate prompts — grounded in model policy language — that you can take to Claude, ChatGPT, or any AI assistant you already use. No account needed.

---

## How to Contribute

Contributions of all kinds are welcome. The most useful things you can do:

**Add a real-world adoption** — open a Pull Request with a jurisdiction that has enacted similar language. See `adoptions/index.html` for the format.

**Improve model language** — open an Issue describing the problem, then a PR with proposed changes and rationale. All substantive changes go through a minimum 14-day public comment period before merging.

**Draft a new domain** — use `POLICY_TEMPLATE.md` as a starting point. The four in-development domains (Smart Cities, Children & Technology, Digital Public Infrastructure, Freedom of Expression) are the priority.

**Flag a gap** — open an Issue with the label `gap`.

**Translate** — see the `/translations` directory (planned for a future release).

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution guide.

---

## Supporting Documents

| Document | Purpose |
|---|---|
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contribution guide — how to propose changes, the review process |
| [FRAMEWORK.md](FRAMEWORK.md) | Project vision, structure, and governance |
| [POLICY_TEMPLATE.md](POLICY_TEMPLATE.md) | Blank four-pillar template for new policy models |
| [EU-LAWS-ANALYSIS.md](EU-LAWS-ANALYSIS.md) | EU digital laws assessed: what to adopt, improve, or resist |
| [INTERNATIONAL-EXAMPLES.md](INTERNATIONAL-EXAMPLES.md) | France, Estonia, EU, and global examples worth learning from |
| [TAXONOMY.md](TAXONOMY.md) | Plain-language public-facing names for each domain |

---

## Tech Stack

The site is a Jekyll 4 static site hosted on GitHub Pages. It uses no web fonts, no analytics, no tracking, and no external runtime dependencies except Lunr.js for search. Three CI workflows run on every push:

- **Build & Deploy** (`pages.yml`) — Jekyll build + htmlproofer internal link check + GitHub Pages deploy
- **Accessibility** (`axe.yml`) — axe-core WCAG 2.2 AA checks across all 15 pages
- **Link Check** (`links.yml`) — lychee external link scan, weekly + on content change; auto-creates GitHub issues for broken links

---

## Guiding Values

- **People before infrastructure** — technology serves human needs, not the reverse
- **Planet as a stakeholder** — digital infrastructure has a material footprint
- **Sovereignty by default** — communities should be able to understand, audit, and exit the digital systems they depend on
- **Openness as a public good** — open standards, open source, and open data enable democratic accountability
- **Access is a right** — digital public services must work for everyone
- **Safety and innovation together** — the false choice between them is a lobbying strategy

---

## License

All policy models and documentation in this repository are published under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt this material for any purpose, including commercial use, provided you give appropriate credit.

Code (HTML, CSS, JavaScript, Jekyll templates) is published under the [MIT License](LICENSE).

---

*This project is maintained by [Mike Gifford](https://github.com/mgifford) and contributors, drawing on the work of EFF, EDRi, FSFE, and the global digital rights community.*
