# Contributing to Open Digital Policies

Thank you for helping build this resource. Good policy language is a public good — and making it genuinely useful requires many kinds of contribution, not just legal or technical writing.

This document explains how to contribute, regardless of your background.

---

## What Contributions Are Needed

### High priority at any time

- **Real-world examples** — If you know of a jurisdiction (city, region, country) that has enacted language similar to anything in this repository, we want to document it. These are the most valuable contributions.
- **Gap identification** — Every policy model has a Gaps section. If you can see something missing or underdeveloped, opening an Issue is a meaningful contribution even without a proposed fix.
- **Plain language review** — Are the principles sections actually understandable to a community member with no legal or technical background? If not, flag it.
- **Translation** — See the `/translations` directory and the Translation section below.
- **Global South examples** — Nearly all current real-world examples come from Europe and North America. Contributions documenting relevant policy from Africa, Asia, Latin America, and the Pacific are especially valuable.

### How to contribute

There are three pathways depending on your comfort with GitHub:

**If you're comfortable with GitHub:**
1. Fork the repository
2. Make your changes in a branch
3. Submit a Pull Request with a clear description of what you changed and why
4. All substantive changes go through a minimum 14-day public comment period before merging

**If you're less comfortable with GitHub:**
1. Open an Issue describing the contribution you want to make
2. A maintainer will help convert it into a pull request

**If you'd rather not use GitHub at all:**
- Email contributions to [maintainer contact — to be added]
- Or use the web submission form at [to be added]

---

## Types of Contribution in Detail

### Adding a real-world example

Every policy model has a **Real-World Examples** section. To add an entry:

1. Find the relevant policy model in `/policies/[domain]/full-model.md`
2. Add your entry under **Real-World Examples** using this format:

```markdown
### [Jurisdiction Name] — [Country]
**Enacted/Proposed:** [Year]
**Type:** [Legislation / Executive order / Policy / Guidance]
**Link:** [URL — must be a stable, linkable source]
**Summary:** [2–4 sentences. What did this jurisdiction do? How does it compare to the model language? What results are known?]
```

3. Order entries from most to least comprehensive
4. Include the link — unsourced examples will not be merged
5. Open a Pull Request with the title: `Add [Jurisdiction] example to [Domain] policy`

### Improving model language

Model language (in blockquotes) is the most consequential content in this repository. Changes to it require:

1. Open an Issue first, describing the problem with the current language and what you propose
2. Allow at least 7 days for discussion before submitting a Pull Request
3. In your PR, include:
   - The current language
   - Your proposed replacement
   - Rationale: what does the change fix or improve?
   - At least one real-world precedent or expert source supporting the change
4. All model language changes require a 14-day public comment period before merging

### Opening or addressing a policy domain

To propose a new policy domain:
1. Open an Issue with the label `new-domain`
2. Describe: what is the domain, why does it matter, what is the core tension, and what real-world policy examples already exist?
3. If the proposal gains community support, copy the POLICY_TEMPLATE.md and begin drafting

To begin drafting a model for a domain listed as "In development":
1. Comment on the relevant Issue to signal you're working on it (prevents duplication)
2. Use POLICY_TEMPLATE.md as your starting point
3. The four-pillar structure (Principles → Standards → Implementation → Governance) is required

### Flagging a gap

Open an Issue with the label `gap` and describe:
- Which policy model the gap is in
- What's missing
- Why it matters
- Whether you are able to help address it or are flagging it for others

### Plain language review

Policy language must be understandable to community members who are not lawyers or technologists. To flag a section that is unclear:
1. Open an Issue with the label `plain-language`
2. Quote the unclear section
3. Describe who might struggle with it and why
4. Suggest simpler alternatives if you have them

---

## Translation

Translations make this resource accessible beyond English-speaking communities and are among the most impactful contributions possible.

**To translate a policy model:**
1. Create a directory at `/translations/[language-code]/policies/[domain]/`
   - Use ISO 639-1 two-letter language codes (e.g., `fr` for French, `es` for Spanish, `pt` for Portuguese)
2. Copy the English source file into your directory
3. Translate, preserving all markdown formatting, headings, and blockquote structure
4. Add a header to the translated file noting the source version and translation date:
   ```
   > *Translation of version [X.X], dated [YYYY-MM-DD]. Translated by [name/handle]. For the authoritative English source, see [link].*
   ```
5. Submit a Pull Request — translation PRs are reviewed by a maintainer plus at least one community reviewer who speaks the target language

**Translation notes:**
- Model legislative language (in blockquotes) should be translated for sense and usability in the target-language legal context, not word-for-word
- Legal terms that don't have direct equivalents should be transliterated with a bracketed explanation
- Real-world examples from the target language's jurisdiction may be added alongside translated global examples

---

## Editorial Standards

All contributions must meet these standards to be merged:

**Sourcing:** Every real-world example must include a stable, linkable source. Wikipedia is acceptable as a secondary source but not as a primary source for enacted legislation. Government websites, official gazettes, and peer-reviewed publications are preferred.

**Neutrality on implementation:** This repository does not advocate for specific political parties, governments, or vendors. It presents model language and real-world examples. Contributors should write in a way that serves readers across the political spectrum who share the guiding values.

**Equity and environmental framing:** Every policy model includes Equity Considerations and Environmental Considerations sections. Contributions that affect these sections must maintain and strengthen this framing.

**Accessibility of the documentation itself:** All documentation should be written in plain language wherever possible, use proper heading structure, and avoid unexplained acronyms. Accessibility of this repository's content is a requirement, not a courtesy.

**No AI-generated content without human review:** Contributors using AI tools to draft contributions are responsible for verifying accuracy, citations, and quality. AI-generated contributions that contain fabricated citations or inaccurate summaries will be rejected.

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By contributing, you agree to uphold it.

In summary: be constructive, be honest about your expertise and affiliations, and treat contributors and community members with respect. Disagreements about policy substance are welcome; personal attacks are not.

---

## Recognising Contributions

Contributors are recognised in:
- The changelog of the policy model they contributed to
- The repository's Contributors list
- Translation credits in translated documents

If you contribute on behalf of an organisation and would like the organisation credited, note this in your Pull Request.

---

## Questions?

Open an Issue with the label `question`, or contact the maintainers at [to be added].

---

*This document is itself open to improvement — if something here is unclear or missing, open an Issue.*
