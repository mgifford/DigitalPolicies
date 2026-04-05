# Digital Accessibility & Inclusion — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-04
> **Related domains:** Smart Cities & Privacy (coming soon), [AI Adoption](../ai-adoption/full-model/), [Algorithmic Accountability](../algorithmic-accountability/full-model/)
> **Key sources:** EU Web Accessibility Directive (WAD), EU European Accessibility Act (EAA), US Section 508, US ADA Title II, W3C WCAG, EN 301 549

---

## Overview

Digital public services must work for everyone. This is not a technical nicety — it is a civil rights requirement. When governments and publicly funded organisations deploy inaccessible digital systems, they exclude disabled people, older adults, people with low digital literacy, and those using assistive technologies from participating in public life.

Despite decades of legal frameworks — Section 508 in the US (1998), the EU Web Accessibility Directive (2016), and now the EU European Accessibility Act (June 2025) — compliance remains deeply inadequate. The 2025 US governmentwide assessment found only 23% of top-visited federal websites fully conforming to Section 508. EU data shows over 80% of websites contain accessibility errors. This is not a technical problem; it is a governance and procurement failure.

### The Core Tension

**We want modern, efficient digital public services — but efficiency that excludes 15-20% of the population (WHO estimate of people living with disability) is not efficiency. Accessibility built in from the start costs a fraction of retrofitting. Accessibility as afterthought is the most expensive option.**

### Scope

- [x] Municipal / local government (public-facing digital services)
- [x] Regional / state / provincial government
- [x] National government
- [x] Public sector procurement (ICT purchasing, contracts, vendors)
- [x] Regulated industries providing services of public importance (banking, transport, telecoms, e-commerce — per EAA)

---

## Pillar 1: Principles

### Foundational Values

**1. Access is a right, not a feature**
Accessibility is not an optional enhancement or a feature to be added "when there's time." It is a fundamental rights requirement. Inaccessible digital public services are a form of discrimination. Policy language must reflect this — not as aspiration, but as enforceable obligation.

**2. Nothing about us without us**
People with disabilities must be involved in the design, procurement, testing, and governance of digital systems intended to serve them. Accessibility checklists run by non-disabled technicians are insufficient. Participatory design and user testing with disabled people are the standard.

**3. Procurement is where accessibility is won or lost**
The vast majority of accessibility failures occur because inaccessible products were purchased. The 2025 US Section 508 Assessment found that 46% of agencies never or only sometimes verify accessibility of ICT they have procured — accepting deliverables without testing. Accessibility requirements must be mandatory, verifiable, and evaluated before contract award.

**4. Automated testing is necessary but not sufficient**
Automated tools catch approximately 30-40% of accessibility issues. The rest require manual testing and testing with real users of assistive technologies. Policy requiring only automated testing compliance is providing a false baseline.

**5. Accessibility and security must not trade off**
Accessibility and security are often incorrectly framed as in tension — particularly around authentication. Multi-factor authentication methods, CAPTCHA systems, and session timeouts create real accessibility barriers. Policy must require that security mechanisms are themselves accessible, not exempt from accessibility obligations.

**6. Maintenance is part of accessibility**
An accessible website at launch becomes inaccessible over time through content additions, third-party integrations, and system updates. Accessibility must be an ongoing operational commitment, not a one-time certification event.

**7. Language, literacy, and plain language are part of accessibility**
Technical WCAG conformance without clear, plain language still excludes people with cognitive disabilities and low literacy. Accessibility standards must be understood broadly to include content usability, not only technical markup compliance.

### Equity Considerations

- **People with disabilities** (estimated 15-20% of population globally, WHO) — primary beneficiaries and the group most consistently excluded by inaccessible digital services. Include people with visual, hearing, motor, cognitive, and neurological disabilities.
- **Older adults** — disproportionately affected by both disability and digital exclusion; often the heaviest users of public services.
- **People using non-mainstream devices or connections** — low-bandwidth users, mobile-only users, users with older hardware. Accessibility standards overlap significantly with low-bandwidth and device-agnostic design.
- **People with English as an additional language** — plain language and multilingual requirements overlap with cognitive accessibility.
- **People in rural and remote areas** — connectivity constraints intersect with accessibility when applications require high-bandwidth or modern browser features.

### Environmental Considerations

Accessible design is generally more sustainable digital design. Semantic HTML, clean code, reduced reliance on JavaScript for basic functionality, and plain text alternatives are all characteristics of both accessible and low-footprint web design. The [Sustainable Web Design](https://sustainablewebdesign.org) movement and accessibility share significant common ground.

---

## Pillar 2: Standards

### Mandatory Standards

> **WCAG 2.2 Level AA as the Baseline**
> All digital services, websites, mobile applications, and information and communication technology (ICT) operated or procured by public bodies shall conform to the Web Content Accessibility Guidelines (WCAG) version 2.2, Level AA, as published by the World Wide Web Consortium (W3C). Where a newer version of WCAG is published and adopted as a harmonised standard, conformance to that version supersedes this requirement within [24] months of publication. Conformance shall be documented in a publicly accessible accessibility statement updated at least annually.

*Rationale:* WCAG 2.2 is the current W3C standard (September 2023), adding nine new success criteria over WCAG 2.1 — particularly strengthening protections for users with cognitive and motor disabilities. The EU EAA and WAD currently reference WCAG 2.1 via EN 301 549; 2.2 is the more current baseline. WCAG 3.0 is in development and not yet ready for adoption.

*Reference:* [WCAG 2.2 (W3C)](https://www.w3.org/TR/WCAG22/); [EN 301 549 v3 (ETSI)](https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility); [EU Web Accessibility Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016L2102); [EU European Accessibility Act](https://ec.europa.eu/social/main.jsp?catId=1202)

---

> **EN 301 549 for ICT Products and Services**
> All ICT products and services procured by public bodies — including hardware, software, documents, and multimedia — shall conform to the harmonised European Standard EN 301 549, current version. Where EN 301 549 references WCAG, the conformance requirement follows the WCAG version specified in this policy. For non-EU jurisdictions, equivalent technical standards providing the same or greater protection shall be specified in procurement documentation.

*Rationale:* EN 301 549 is the EU harmonised standard that covers the full range of ICT — not just websites. It incorporates WCAG for web content but adds requirements for hardware, documents, video, telephony, and other ICT types. It is functionally equivalent to the US Section 508 standards (both are derived from the same source). Using EN 301 549 or equivalent gives procurement teams a single, comprehensive technical standard.

*Reference:* [ETSI EN 301 549](https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility); [US Section 508 standards cross-reference](https://www.section508.gov/manage/laws-and-policies/)

---

> **Mandatory Accessibility Statement**
> All public digital services shall publish an accessibility statement that includes: (a) conformance status (fully conformant, partially conformant, or non-conformant) against the applicable standard; (b) known barriers and remediation timelines for each; (c) date of most recent audit and method used (automated, manual, or user testing); (d) a feedback mechanism for users to report accessibility barriers; and (e) contact details for the responsible accessibility officer. Statements shall be updated at least annually and whenever significant changes are made to the service. The statement itself must be accessible.

*Rationale:* The EU WAD requires accessibility statements in this form; the model above mirrors WAD's structure and adds the audit method disclosure (important for quality assessment) and the remediation timeline requirement. Without public statements, there is no baseline for accountability.

---

> **Accessibility in Procurement as a Mandatory Pass/Fail Criterion**
> No contract for the supply of ICT products or services to a public body shall be awarded unless the vendor provides: (a) a Voluntary Product Accessibility Template (VPAT / Accessibility Conformance Report) or equivalent, verified against the required standard; (b) evidence of accessibility testing using both automated tools and manual evaluation with assistive technologies; (c) a remediation commitment for any identified barriers, with binding timelines and financial penalties for non-delivery; and (d) written commitment to maintain accessibility conformance for the duration of the contract. Procurement officers shall verify accessibility documentation before contract award. Contracts shall include termination rights for persistent accessibility failures.

*Rationale:* The #1 finding of the US Section 508 2025 Assessment is that agencies are accepting contract deliverables without testing whether they meet contractual accessibility requirements. 46% of agencies "sometimes or never" verify delivery. This provision makes verification mandatory and gives agencies contractual remedy when vendors deliver inaccessible products.

*Reference:* [GSA Section 508 Assessment 2025](https://www.section508.gov/manage/section-508-assessment/2025/); [VPAT/ACR templates (ITI)](https://www.itic.org/policy/accessibility/vpat)

---

> **Real User Testing Requirement**
> Accessibility testing for any ICT procured or operated by a public body that serves more than [10,000] users annually, or that provides access to significant public services (benefits, licensing, voting, health, justice), shall include testing with people who use assistive technologies. Automated-only testing reports shall not be accepted as full conformance evidence for these services. At least [two] distinct user testing sessions with participants using different assistive technologies shall be documented annually.

*Rationale:* The EU WAD monitoring guidance distinguishes between in-depth and simplified monitoring — simplified monitoring uses automated tools and some manual checks; in-depth monitoring includes user testing. The WAD requires in-depth monitoring of a sample of sites. This provision makes user testing mandatory for high-impact services rather than sample-based. Automated testing catches at most 30-40% of accessibility issues.

---

> **Accessible Authentication**
> Authentication mechanisms used for public digital services shall not require users to: (a) complete a CAPTCHA that relies solely on visual image recognition without an accessible alternative; (b) use time-limited one-time passwords without option for extended time; or (c) perform tasks that require fine motor control without alternatives. Where multi-factor authentication is required, at least one factor shall be accessible to users of all assistive technologies. This requirement applies regardless of whether the authentication system is built in-house or provided by a third party.

*Rationale:* WCAG 2.2 added SC 3.3.7 (Redundant Entry) and SC 3.3.8 (Accessible Authentication) specifically to address authentication barriers. Many public services use third-party authentication systems that were not procured with accessibility requirements and create significant barriers, particularly for users with visual or motor impairments.

---

> **Plain Language as Part of Accessibility**
> All public digital communications — including policy documents, service instructions, application forms, error messages, and legal notices — shall use plain language principles: short sentences, active voice, common vocabulary, and clear structure. Documents shall be tested against an appropriate readability standard (e.g., [UK: Plain English Campaign; US: Federal Plain Language Guidelines; EU: Clarity International]) and shall achieve a reading age accessible to the general public (Flesch-Kincaid Grade 8 or equivalent). This does not remove the requirement for technical accuracy in legal documents, but where technical language is unavoidable, a plain language summary must accompany it.

---

### Aspirational Standards

> **WCAG 2.2 Level AAA for High-Impact Services**
> Services providing access to health information, emergency services, benefits, voting, and legal aid should aim for WCAG 2.2 Level AAA where technically feasible. Level AAA should not be required across the board (many Level AAA criteria are not achievable for all content types), but the highest-stakes services should strive for the most inclusive standard possible.

---

> **Proactive Monitoring and Public Dashboard**
> Jurisdictions with large numbers of public digital services should establish a central accessibility monitoring programme with publicly available results — including which services are tested, when, and with what results. Modelled on the UK GDS accessibility monitoring programme and planned EU monitoring frameworks.

---

> **Accessibility in AI and Automated Systems**
> AI-generated content, chatbots, and automated decision interfaces used in public services shall meet the same accessibility standards as non-AI content. AI systems shall not reduce accessibility of services by replacing accessible human-operated alternatives without providing an equally accessible automated interface.

---

### Standards Cross-Reference

| Standard | Body | Version | Notes |
|---|---|---|---|
| WCAG | W3C | 2.2 (2023) | Web content baseline |
| EN 301 549 | ETSI | v3.2.1 (2021); v4.1 in development | EU harmonised ICT standard |
| Section 508 | US Access Board | 2017 | US federal requirement |
| ADA Title II | US DOJ | 2024 rule | WCAG 2.1 AA for US state/local gov |
| EU WAD | EU | 2016/2102 | Public sector websites and apps |
| EU EAA | EU | 2019/882 | Private sector, in force June 2025 |
| ISO 30071-1 | ISO | 2019 | Accessibility in product development |

---

## Pillar 3: Implementation

### Procurement Requirements

> **Accessibility Procurement Clause**
> The following shall be included in all solicitations for ICT products and services:
> "Accessibility conformance: The vendor shall demonstrate conformance of all deliverables with [WCAG 2.2 AA / EN 301 549 current version / Section 508] prior to contract award by providing: (1) an Accessibility Conformance Report (ACR/VPAT) completed against the applicable standard within the previous [12] months; (2) methodology documentation including assistive technologies tested and testing personnel qualifications; (3) a remediation plan for any identified non-conformances with binding completion dates. Failure to achieve and maintain conformance throughout the contract term shall constitute a material breach. The agency reserves the right to require independent verification of claimed conformance at the vendor's expense."

---

### Transition and Timeline

| Milestone | Timeframe from policy adoption |
|---|---|
| Accessibility statement published for all public services | 6 months |
| Accessibility audit of top 20 most-used public services | 12 months |
| WCAG 2.2 AA required in all new procurement | Immediate |
| Section 508 / EN 301 549 conformance required in all new ICT | Immediate |
| Existing high-priority services: full conformance | 24 months |
| Existing lower-priority services: full conformance | 48 months |
| Real user testing programme established | 18 months |
| Central monitoring dashboard launched | 36 months |

### Reporting and Transparency

> **Annual Accessibility Report**
> Public bodies shall publish an annual accessibility report covering: (a) number of public-facing digital services and their conformance status; (b) number and nature of accessibility complaints received and resolved; (c) ICT procurement contracts awarded with accessibility conformance documentation; (d) accessibility training completed by procurement and development staff; (e) budget allocated to accessibility remediation; and (f) plan for the coming year. Reports shall be publicly accessible and machine-readable.

### Enforcement

> **Enforcement and Complaint Mechanism**
> Any person may submit a complaint about an inaccessible public digital service to [designated enforcement body]. Complaints shall be acknowledged within [10] days and resolved within [90] days. If the complaint is upheld, the public body shall provide: (a) an accessible alternative immediately; (b) a remediation plan within [30] days; and (c) confirmation of full remediation within [12] months. Persistent non-compliance shall be subject to administrative penalties and public reporting.

> **Civil Society Standing**
> Disability organisations and civil society groups shall have standing to bring accessibility enforcement complaints on behalf of affected individuals, without requiring named complainants. This addresses the practical barrier that many disabled people are not in a position to bring individual complaints.

---

## Pillar 4: Governance

### Oversight Body

> **Senior Accessibility Officer**
> Each public body with responsibility for digital services shall designate a Senior Accessibility Officer at a level with authority to direct procurement and product decisions. The role shall have a direct reporting line to the head of the organisation and shall not be subordinate to IT procurement or communications functions whose compliance they are responsible for auditing.

> **Designated Enforcement Authority**
> [National / regional regulatory body] shall be designated as the enforcement authority for this policy. The authority shall: publish annual monitoring reports; investigate complaints; issue binding compliance notices; and have power to impose administrative penalties for persistent non-compliance. The authority shall consult with disability organisations in setting enforcement priorities.

### Community Representation

> **Disability Advisory Panel**
> Any public body operating digital services at scale shall establish or participate in a Disability Advisory Panel that includes: (a) people with a range of disabilities who use assistive technologies in their daily lives; (b) representatives of disability organisations; and (c) accessibility professionals. The panel shall have the right to: review accessibility statements and audit results; make recommendations on remediation priorities; and submit formal observations on proposed procurements. Panel members shall be compensated for their time.

### Audit and Review

> **Independent Accessibility Audit**
> High-priority public digital services shall undergo independent accessibility audit by a qualified third party at least every [two] years. Audit methodology shall include automated testing, manual evaluation, and user testing with disabled participants. Audit reports shall be published in full.

> **Policy Review**
> This policy shall be reviewed every [three] years to assess alignment with current WCAG versions, emerging technologies, and gaps identified through the complaint and monitoring process.

---

## Real-World Examples

### EU Web Accessibility Directive (WAD) — European Union
**In force:** 2016 (Directive 2016/2102), national transposition by 2018
**Covers:** Public sector websites and mobile applications
**Standard required:** EN 301 549 (incorporates WCAG 2.1 AA)
**Key features:** Mandatory accessibility statements; monitoring and reporting by member states; feedback mechanism for users; EC publishes comparative reporting
**What's worked:** Created a consistent legal baseline across 27 member states; standardised accessibility statements; EU monitoring data now available
**Critique:** Enforcement has been uneven; some member states late to transpose; monitoring methodology relies heavily on automated testing; the WAD does not cover most private sector services

---

### EU European Accessibility Act (EAA) — European Union
**In force:** June 28, 2025 (with some national variation in enforcement start)
**Covers:** Private sector products and services including: e-commerce, banking, e-books, computers, phones, ATMs, ticketing machines, TV equipment, digital TV services, e-government services
**Standard:** Functional accessibility requirements; EN 301 549 used as presumptive technical standard
**Key features:** First EU law to impose accessibility requirements on the private sector at scale; covers product design, not just web content; harmonised across member states
**Critique:** Enforcement is member state-led, creating uneven implementation; harmonised standard (EN 301 549 v4) delayed (expected Q3 2026 Official Journal publication); many companies still non-compliant; some member states started infringement proceedings for failing to transpose correctly

---

### Section 508 — United States Federal Government
**In force:** 1998 (amended 2017)
**Covers:** Federal agencies' ICT — websites, software, hardware, multimedia, documents
**Standard:** WCAG 2.0 AA (2017 refresh); note: not yet updated to WCAG 2.1 or 2.2
**Key features:** Applies to procurement and direct development; requires vendors to provide ACR/VPAT; US Access Board develops and maintains technical standards
**What the 2025 assessment found:**
- Only **23%** of top-visited public federal websites fully conform
- Only **16 of 212 agencies** (27%) require mandatory Section 508 training
- **46%** of agencies sometimes or never verify accessibility of ICT they procure
- Conformance average: **1.96 out of 5**
- Acquisition/procurement remains the #1 implementation gap
**Lesson for model policy:** Legal requirement without enforcement, mandatory training, and procurement verification produces ~25% conformance after 27 years. Enforcement and procurement are not optional.

---

### UK GDS Accessibility Monitoring — United Kingdom
**In force:** 2018 (Public Sector Bodies Accessibility Regulations)
**Covers:** Public sector websites and apps
**Standard:** WCAG 2.1 AA
**Key features:** Government Digital Service (GDS) conducts regular monitoring of public sector websites; publishes results publicly; technical guidance is extensive and freely available
**What's worked:** GDS's public monitoring dashboard creates reputational accountability; detailed technical guidance reduces compliance ambiguity; strong culture of accessibility within the civil service digital community
**Critique:** Enforcement actions have been rare; monitoring focuses on technical conformance but limited user testing; private sector remains largely unregulated

---

### Colorado HB21-1110 — United States (State)
**Enacted:** 2021
**Covers:** State agencies and local government entities including K-12 institutions
**Standard:** WCAG 2.1 AA
**Distinctive feature:** Makes failure to meet the standard a **civil rights violation** — giving individuals and organisations standing to bring civil rights complaints, not just administrative complaints
**Why this matters:** Most accessibility laws create administrative obligations. Colorado's approach creates civil rights standing, which is materially stronger and aligns with the ADA's underlying civil rights framework.

---

## Gaps and Known Weaknesses

- **WCAG 3.0 transition** — WCAG 3.0 is under development and will introduce a fundamentally different conformance model (outcome-based rather than criterion-based). This model policy will need significant revision when WCAG 3.0 is finalised.
- **Cognitive and neurological accessibility** — Current WCAG standards are weakest in addressing cognitive accessibility. Plain language and the COGA (Cognitive Accessibility Guidance) supplemental documents address some of this gap but are not yet normative requirements.
- **AI-generated content** — The accessibility of AI-generated content (images, text, video) is an emerging area not yet fully addressed by WCAG or EN 301 549. AI image generation, for example, rarely produces adequate alt text or structured information.
- **Third-party components** — Many accessibility failures come from third-party scripts, widgets, and embedded content (maps, video players, payment forms) that organisations have limited control over. Model language for third-party accessibility responsibility needs further development.
- **Global South context** — This model draws heavily on EU and US frameworks. Jurisdictions without established regulatory infrastructure face different implementation challenges. UNCRPD Article 9 on accessibility provides international normative grounding, but capacity support is needed.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| AI Adoption | AI systems in public services must be accessible; AI-generated content needs accessibility standards |
| Smart Cities & Privacy | Smart city interfaces (kiosks, apps) must meet same accessibility standards as other public digital services |
| Algorithmic Accountability | Explainability of automated decisions must be accessible — not just technically available |
| Open Source in Government | Open source civic tech must include accessibility in its contribution standards |
| Children & Technology | Age-appropriate design must include cognitive and motor accessibility for children with disabilities |

---

## Glossary

**WCAG (Web Content Accessibility Guidelines):** Technical standard published by the W3C specifying how to make web content accessible to people with disabilities. Current version: 2.2 (2023). Organised into four principles (Perceivable, Operable, Understandable, Robust) and three levels (A, AA, AAA).

**EN 301 549:** Harmonised European Standard for ICT accessibility. Covers hardware, software, websites, documents, and multimedia. Developed by ETSI. Used as the technical reference for the EU WAD and EAA.

**ACR/VPAT (Accessibility Conformance Report / Voluntary Product Accessibility Template):** A document, typically provided by a vendor, that maps a product's features against accessibility standard requirements and notes conformance level for each. Required for US federal procurement.

**Assistive Technology:** Hardware or software that enables people with disabilities to use digital systems — including screen readers (e.g., JAWS, NVDA, VoiceOver), magnification software, switch access devices, alternative pointing devices, and voice recognition systems.

**Section 508:** Section 508 of the Rehabilitation Act (US), as amended in 2017. Requires US federal agencies' ICT to be accessible. The ICT accessibility standards are developed by the US Access Board.

**WAD (Web Accessibility Directive):** EU Directive 2016/2102 requiring public sector websites and mobile applications in EU member states to meet EN 301 549 (WCAG 2.1 AA). In force since 2018.

**EAA (European Accessibility Act):** EU Directive 2019/882, in force June 2025, requiring accessibility of a broad range of private sector products and services across the EU. First EU law to extend accessibility requirements to the private sector at scale.

**Plain Language:** Writing that is clear, concise, and appropriate to the audience's reading level. Not a technical writing style — a communication principle. Required under the US Plain Writing Act for federal agencies.

---

## Changelog

| Version | Date | Summary |
|---|---|---|
| 0.1 | 2026-04-04 | Initial draft, drawing on WAD, EAA, Section 508 2025 assessment, WCAG 2.2 |
