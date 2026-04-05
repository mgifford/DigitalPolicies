# Open Source in Government — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-04
> **Maintainers:** Open Digital Policies community
> **Related domains:** Digital Sovereignty (coming soon), [Digital Accessibility](../accessibility/full-model/), [Algorithmic Accountability](../algorithmic-accountability/full-model/), Digital Public Infrastructure (coming soon)

---

## Overview

When governments commission or purchase software using public money, the resulting code belongs to the public. Yet most publicly-funded software is never released, never reused, and often creates permanent dependency on a single vendor. This policy model establishes the principle that **public money should produce public code** — software funded by taxpayers should be available for all taxpayers to use, inspect, improve, and share. It provides enforceable standards for open source adoption, procurement reform, code release obligations, and the sustainable funding of shared digital infrastructure.

### The Core Tension

We want governments to benefit from modern software tools and shared digital infrastructure — without surrendering sovereignty to a handful of proprietary vendors, without paying for the same solutions dozens of times across different agencies, and without creating systems that citizens cannot audit or trust.

### Scope

This policy model is designed to apply at the level of: *(select all that apply)*

- [x] Municipal / local government
- [x] Regional / state / provincial government
- [x] National government
- [x] Public sector procurement (any level)
- [ ] Regulated industry
- [ ] Other: ___________

---

## Pillar 1: Principles

### Foundational Values

**1. Public Money, Public Code**
Software developed with public funds for public use is a public good. It should be available under a free and open source licence for anyone to use, study, modify, and share. Keeping publicly-funded code proprietary means taxpayers pay twice — once to build it, and again for every jurisdiction that builds the same thing independently.

**2. Sovereignty by Default**
Governments that depend on proprietary systems from a small number of vendors surrender their ability to change providers, audit what the system does, adapt it to local needs, or continue operating if a vendor exits the market. Open source is a prerequisite for genuine technological sovereignty. This applies especially to critical infrastructure — electoral systems, benefits administration, health records, and public safety systems.

**3. Interoperability as a Public Obligation**
Public digital services must be able to communicate with each other and with citizen-facing tools, regardless of which vendor built them. Vendor lock-in achieved through proprietary data formats, interfaces, or file formats is a failure of public governance, not a technical inevitability.

**4. Security Through Transparency**
Open source software can be independently audited by security researchers, academics, and civil society. The argument that proprietary software is more secure because its code is hidden ("security through obscurity") is not supported by evidence and forecloses independent verification. Critical public systems should be auditable.

**5. Contribution, Not Just Consumption**
Governments should be participants in the open source ecosystem, not just consumers of it. When public bodies use open source software, they benefit from community labour. They have a corresponding obligation to contribute improvements back — in code, documentation, translations, and bug reports.

**6. Sustainable Infrastructure Requires Sustained Investment**
Open source software is not free to maintain. The Sovereign Tech Fund model demonstrates that governments can and should invest in the maintenance of open source components that underpin critical public services. "Free as in cost" is not the same as "maintained for free."

**7. Accessibility and Inclusion by Design**
Open source procurement must not become a barrier to participation. Small jurisdictions, under-resourced agencies, and Global South governments must be able to access and benefit from shared open source solutions without requiring specialist capacity that only well-resourced actors possess.

### Equity Considerations

- **Small and rural municipalities** — Large proprietary vendors disproportionately serve large urban clients; small jurisdictions often end up with worse systems at higher per-capita cost. Shared open source infrastructure reduces this disparity.
- **Global South governments** — Proprietary software licensing costs represent a significant proportion of ICT budgets in lower-income countries. Open source reduces licensing costs and enables local adaptation, but Global South governments often lack the capacity to navigate open source procurement without support. Digital Public Goods frameworks (UNDP, DPGA, UNICEF) are partially addressing this.
- **Disabled users** — Government software procured without accessibility requirements, often through opaque proprietary procurement, has historically produced inaccessible services. Open source software subject to public scrutiny is more likely to surface accessibility failures. See [Digital Accessibility model](../accessibility/full-model/).
- **Workers and public sector unions** — Open source adoption that creates new technical dependencies without training and workforce investment can harm workers. Policy must include capacity-building obligations.
- **Civil society and journalists** — Proprietary government software cannot be independently audited. Open code enables investigative journalism, academic research, and civil society oversight of government systems.

### Environmental Considerations

Proprietary software lock-in drives unnecessary hardware refresh cycles, as vendors bundle obsolescence into licensing models. Open source software is significantly more likely to support older hardware and longer device lifetimes, reducing e-waste. Shared open source infrastructure also reduces the duplicate energy expenditure of each agency running separate instances of equivalent systems. See [Right to Repair](../right-to-repair/full-model/) and [Data Centers](../data-centers/full-model/) for complementary standards.

---

## Pillar 2: Standards

### Mandatory Standards

> **Standard 1: Open Source by Default for Publicly-Funded Custom Software**
> Any software custom-developed, commissioned, or substantially funded by a public body using public funds must be released under an approved open source licence within 60 days of deployment, unless a documented exemption applies. Exemptions are limited to: (a) software that would directly expose security vulnerabilities if released; (b) software containing personal data that cannot be separated from the codebase; or (c) software subject to binding third-party intellectual property constraints that predate this policy. All exemptions must be documented, time-limited, and subject to public disclosure of the exemption itself (if not its grounds).

*Rationale: The FSFE's "Public Money? Public Code!" campaign documents that across Europe, governments repeatedly fund development of nearly identical software solutions in parallel, producing waste estimated in the billions of euros. France's Digital Republic Act (Loi no. 2016-1321, 2016) established source code produced by public administrations as public documents subject to open access. The principle is now well-established in law; the gap is enforcement.*

*Reference: [FSFE Public Money? Public Code! campaign](https://fsfe.org/activities/publiccode/publiccode.en.html); France Loi no. 2016-1321, Article 16; [Foundation for Public Code — Standard for Public Code](https://standard.publiccode.net/)*

---

> **Standard 2: Approved Licence List**
> Public bodies may only release publicly-funded software under licences from an approved list maintained by the national or supra-national open source oversight body. The approved list must include, at minimum, all licences approved by the Open Source Initiative (OSI) and identified as "popular and widely used." Public bodies must apply the most permissive licence compatible with the software's purpose and security requirements. Proprietary relicensing of publicly-funded software is prohibited.

*Rationale: France's Decree No. 2017-638 (implementing Loi 2016-1321) established a state-approved licence list precisely to avoid proliferation of incompatible custom government licences. The European Commission's Open Source Strategy similarly restricts the EC to approved licences. Without an approved list, jurisdictions produce fragmented, incompatible releases that cannot be combined or reused.*

*Reference: France Décret no. 2017-638 du 27 avril 2017; [EU EC Open Source Software Strategy](https://commission.europa.eu/about/departments-and-executive-agencies/digital-services/open-source-software-strategy_en)*

---

> **Standard 3: Machine-Readable Metadata (publiccode.yml)**
> All publicly-funded open source software repositories must include a `publiccode.yml` metadata file conforming to the current version of the publiccode.yml standard. This file must include, at minimum: software name, description in all official languages of the jurisdiction, licence, version, supported platforms, contact for maintenance, and accessibility statement. Repositories must be registered in the jurisdiction's public software catalogue within 30 days of initial release.

*Rationale: publiccode.yml was developed under Italy's Developers Italia programme and has since become the reference standard for the EU Open Source Solutions Catalogue launched in 2025. Without machine-readable metadata, software catalogues are manually maintained, quickly become outdated, and cannot support automated discovery and reuse. Italy's mandatory adoption of publiccode.yml since 2020 demonstrates that this requirement is implementable.*

*Reference: [publiccode.yml standard](https://github.com/publiccodeyml/publiccode.yml); [EU OSS Catalogue / Interoperable Europe Portal](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/publiccodeyml-standard)*

---

> **Standard 4: Open Source Preference in Procurement**
> When procuring software, public bodies must assess available open source alternatives before procuring proprietary solutions. Where a functionally equivalent open source solution exists that meets the jurisdiction's requirements, the open source solution must be preferred. Where a proprietary solution is selected, the procuring body must document: (a) which open source alternatives were assessed; (b) why they were found inadequate; and (c) what steps the body will take to contribute to closing that gap, if applicable. This assessment must be published as part of the procurement record.

*Rationale: An "open source preference" or "open source first" policy — as established by the UK Government Digital Service, the European Commission's Open Source Strategy, and multiple national policies — does not prohibit proprietary procurement but makes the burden of justification explicit. It also provides a feedback loop: when open source alternatives are systematically found inadequate in a given category, this signals where investment is needed.*

*Reference: UK Government Service Standard; EC Open Source Strategy 2020–2023; [UNDP open source guidance for public practitioners](https://www.undp.org/trinidad-and-tobago/blog/open-source-software-public-practitioners)*

---

> **Standard 5: Prohibition on Proprietary Lock-in Clauses**
> Public procurement contracts for software and digital services must not contain clauses that: (a) restrict the jurisdiction's ability to migrate to alternative solutions; (b) impose proprietary data formats that prevent data portability; (c) prohibit reverse engineering for interoperability purposes; or (d) contractually prevent the jurisdiction from adopting open source alternatives in future. Exit plans, including data portability and migration support, must be contractually required for all software contracts with a value above [threshold to be set by jurisdiction].

*Rationale: Vendor lock-in is not achieved only through technical means — it is frequently embedded in contract terms. The EU Interoperable Europe Act (Articles 4 and 8) establishes code sharing and interoperability obligations; DMA Article 6 addresses interoperability for gatekeepers; but government procurement contracts routinely include terms that are never scrutinised against these principles.*

*Reference: [EU Interoperable Europe Act](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/interoperable-europe-act-and-open-source-community); EU Digital Markets Act; FSFE [Interoperability by design](https://fsfe.org/news/2023/news-20230323-02.en.html)*

---

### Aspirational Standards

> **Aspirational Standard 1: Open Source Programme Office (OSPO)**
> Any public body with an annual ICT spend exceeding [threshold] or with more than [threshold] employees shall establish or designate an Open Source Programme Office (OSPO) responsible for: managing open source licence compliance; maintaining the jurisdiction's software catalogue; assessing open source alternatives in procurement; coordinating contributions back to upstream projects; and providing open source guidance to staff.

*Rationale: OSPOs are an established model in both the private sector and, increasingly, government. The European Commission established its OSPO in 2020. The TODO Group and OSPO Alliance have documented OSPO implementation frameworks. UN Open Source Week 2026 includes a dedicated track on OSPOs for public interest objectives (25 June 2026). Without a dedicated function, open source obligations tend to be diffused, untracked, and unenforced.*

---

> **Aspirational Standard 2: Sustained Infrastructure Investment**
> [Jurisdiction] shall establish a recurring fund for investment in open source components that underpin critical public digital services, modelled on Germany's Sovereign Tech Agency. The fund shall prioritise: security maintenance of widely-used open source libraries; accessibility improvements in open source software used in government services; and reducing technical debt in shared government open source components.

*Rationale: The German Sovereign Tech Fund invested over €23.5 million in 60+ open source projects through 2024, growing to a projected €17 million annual budget by 2025. The EU is developing an EU Sovereign Tech Fund to complement national efforts. The Heartbleed vulnerability (2014) demonstrated that critical internet infrastructure maintained by volunteers without dedicated funding is a systemic risk. Government dependency on open source without corresponding investment is free-riding on community labour.*

*Reference: [Sovereign Tech Agency](https://www.sovereign.tech/); [EU Sovereign Tech Fund](https://en.wikipedia.org/wiki/EU_Sovereign_Tech_Fund)*

---

> **Aspirational Standard 3: Digital Public Goods Alignment**
> Software developed by public bodies that may be useful to other jurisdictions — particularly Global South governments — should be assessed against the Digital Public Goods Standard and, where appropriate, registered with the Digital Public Goods Alliance. International development assistance that includes software components should require open source release under the DPG Standard as a funding condition.

*Rationale: The UNDP's Digital Public Goods framework, the DPGA, and UNICEF's work on digital public infrastructure establish a recognised pathway for government software to become a global common good. UN Open Source Week 2026 includes a Digital Public Infrastructure Day (24 June) specifically addressing this opportunity.*

*Reference: [UN Digital Public Goods](https://www.un.org/digital-emerging-technologies/content/digital-public-goods); [UNICEF DPG Toolkit](https://unicef.github.io/publicgoods-toolkit/); [Foundation for Public Code projects](https://projects.publiccode.net/)*

---

### Standards Cross-Reference

| Standard Referenced | Body | Version | Notes |
|---|---|---|---|
| Open Source Initiative approved licences | OSI | Current | Minimum baseline for approved licence list |
| publiccode.yml | publiccodeyml community / EU | Current | Mandatory metadata for all public software releases |
| Standard for Public Code | Foundation for Public Code | Current | Comprehensive implementation guidance |
| Digital Public Goods Standard | DPGA / UNICEF | 1.1+ | For software intended for international reuse |
| EU Interoperable Europe Act | European Parliament | 2024 | Interoperability and code-sharing obligations |
| REUSE specification | FSFE | 3.x | Machine-readable licence and copyright information in repositories |

---

## Pillar 3: Implementation

### Procurement Requirements

> **Procurement Clause A: Open Source Assessment Requirement**
> All solicitations for software development, software licensing, or digital services with an estimated value exceeding [threshold] must include a documented open source alternatives assessment as part of the procurement justification. The assessment must be published alongside the final procurement decision. RFP/tender documents must not include technical specifications that are inherently met only by a specific proprietary product.

*Rationale: Specification-writing that "accidentally" describes only one product is a well-documented procurement failure mode. Making the alternatives assessment public creates accountability.*

---

> **Procurement Clause B: Source Code Escrow and Release**
> Where a public body procures custom-developed software from a third party and an exemption from Standard 1 (open source release) applies, the contract must include: (a) mandatory source code escrow with a neutral third party; (b) an automatic release trigger that causes the escrowed code to be published under an approved open source licence if the vendor becomes insolvent, exits the market, or materially breaches the contract; and (c) full data portability rights including documentation of all data schemas, APIs, and export formats.

*Rationale: Escrow is an established risk-management tool. The automatic release trigger extends it to serve the public interest, not just business continuity.*

---

> **Procurement Clause C: Contribution-Back Requirement**
> Where a public body modifies or extends existing open source software in the course of a publicly-funded project, the resulting modifications must be contributed back to the upstream project within 90 days of deployment, or published as a clearly-documented fork if the upstream project declines to accept them, under the same or a compatible open source licence.

*Rationale: Contribution-back is both an ethical obligation (the jurisdiction benefited from prior community labour) and a practical one (modifications that are not upstreamed become maintenance burdens). The FSFE and Foundation for Public Code both identify contribution-back as a key obligation of responsible public sector open source use.*

---

### Transition and Timeline

| Milestone | Timeframe from adoption | Notes |
|---|---|---|
| Open source procurement assessment procedure published | 3 months | Applies to all new procurements from this date |
| Approved licence list published | 3 months | Based on OSI approved list |
| Software catalogue launched | 6 months | Can begin with existing known open source software |
| publiccode.yml required for all new releases | 6 months | Existing releases have 18 months to comply |
| Open source alternatives assessment mandatory in all qualifying procurement | 12 months | |
| OSPO established (large bodies) | 18 months | |
| Full compliance — all existing publicly-funded software either released or exemption documented | 36 months | |

### Reporting and Transparency

> **Transparency Requirement**
> All public bodies subject to this policy must publish an annual open source report covering: (a) software released under open source licences during the year, with links to repositories and publiccode.yml files; (b) open source alternatives assessments completed, with procurement outcomes; (c) exemptions claimed, including category of exemption and anticipated resolution date; (d) contributions made to upstream open source projects (code, documentation, translations, bug reports); (e) open source software used in critical public services; and (f) spending on open source support, maintenance, and training. The report must be published in machine-readable open data format as well as a plain-language public summary.

### Enforcement

> **Enforcement Clause**
> The designated oversight body may: (a) audit compliance with open source release obligations and procurement assessment requirements; (b) issue compliance notices requiring corrective action within 90 days; (c) impose administrative penalties for repeated non-compliance, scaled to the procuring body's ICT budget; (d) publish a public compliance register showing each body's status. Civil society organisations with demonstrated interest in open government may lodge compliance complaints with the oversight body without requiring a named individual complainant. Whistleblower protections apply to public sector employees who report non-compliance in good faith.

*Notes on enforcement: Procurement reform tends to fail when it creates paperwork requirements without creating accountability for outcomes. The compliance register creates reputational incentives. The civil society complaint right (drawing from the accessibility enforcement model) means that non-compliance does not depend on individual complainants with standing.*

---

## Pillar 4: Governance

### Oversight Body

> **Oversight Clause**
> Responsibility for oversight of this policy shall be assigned to [national / supra-national digital authority or designated body]. The oversight body must include staff with expertise in: open source software development and licensing; public procurement law; digital security; and accessibility. The oversight body must be independent of entities with financial interests in proprietary software procurement outcomes. Its governing board must include representatives of civil society, academia, and the open source community who are not affiliated with commercial vendors.

*Notes: The EU's Interoperable Europe Board (established under the Interoperable Europe Act) provides a partial model for cross-jurisdictional governance. Germany's Sovereign Tech Agency demonstrates that government-funded open source investment can operate with technical independence.*

### Community Representation

> **Participation Clause**
> The oversight body must establish a multi-stakeholder advisory council with seats reserved for: open source community representatives (selected by open source civil society organisations, not appointed by government); accessibility advocates; privacy and civil liberties organisations; representatives of small and medium-sized jurisdictions; Global South government representatives (for supra-national implementations); and public sector worker unions. The advisory council must be consulted before any revision to the approved licence list, the exemption criteria, or the reporting requirements. Its recommendations must be published and, if not adopted, the oversight body must publish written reasons.

*Equity note: Open source governance has historically been dominated by technically skilled contributors from wealthy countries. Deliberately including Global South and disability-focused representation corrects a structural gap.*

### Audit and Review

> **Audit Clause**
> The oversight body must commission an independent technical audit of the software catalogue and compliance records at least every two years. The audit must assess: completeness of the catalogue (are known publicly-funded projects missing?); quality of publiccode.yml metadata; exemption validity; and contribution-back activity. The audit must be conducted by an auditor with no commercial interest in the outcome and the full audit report must be published.

> **Review Clause**
> This policy shall be reviewed every three years from the date of adoption. The review must assess: whether the approved licence list reflects current best practice; whether the publiccode.yml standard version referenced remains current; whether exemption categories remain appropriate; and whether enforcement mechanisms have produced measurable compliance improvement. The review process must include a minimum 60-day public comment period before any amendments are finalised.

---

## Real-World Examples

### France — Digital Republic Act (Loi pour une République Numérique)
**Enacted:** 2016 (Loi no. 2016-1321 of 7 October 2016); implementing Decree no. 2017-638 of 27 April 2017
**Type:** National legislation
**Link:** https://www.legifrance.gouv.fr/loi/id/JORFTEXT000033202746
**Summary:** Article 16 of France's Digital Republic Act classified source code produced by public administrations as administrative documents — meaning they are public records subject to access and reuse rights. The 2017 decree established a state-approved licence list. The SILL (Socle Interministériel des Logiciels Libres), maintained since 2012, lists free software recommended across French government. `code.gouv.fr` now serves as France's public government code repository. The law stops short of mandating open source use but establishes open source preference and public release obligations. Community critique: the preference has not translated into strong procurement reform; proprietary procurement continues to dominate.

---

### Italy — Developers Italia and publiccode.yml
**Enacted:** publiccode.yml made mandatory for public software: 2020
**Type:** National digital administration guidelines (AgID)
**Link:** https://developers.italia.it/en/reuse/publication.html
**Summary:** Italy's digital agency (AgID) made publiccode.yml mandatory for all public software, enabling automatic population of the national software catalogue at developers.italia.it. This is the most rigorous national implementation of machine-readable government software metadata anywhere in the world, and the model that the EU OSS Catalogue adopted when it launched in 2025. The Developers Italia community also built a crawler that discovers and indexes government repositories automatically.

---

### Germany — Sovereign Tech Agency
**Established:** Fund 2022; Agency formally established 2024
**Type:** Government-funded public agency
**Link:** https://www.sovereign.tech/
**Summary:** Germany's Sovereign Tech Agency invests in the maintenance and security of open source components that underpin German and European digital infrastructure. By late 2024 it had invested approximately €23.5 million in over 60 projects, including components of the internet's core infrastructure that are maintained by volunteers with no institutional backing. The budget was projected to grow to €17 million annually by 2025. The "Germany Stack" initiative extends this to building a sovereign, European-compatible digital infrastructure for all levels of German government. This is the most significant government programme for sustaining open source infrastructure anywhere.

---

### EU — Interoperable Europe Act and EC Open Source Strategy
**Enacted:** Interoperable Europe Act — 2024 (came into force); EC Open Source Strategy — 2020, updated
**Type:** EU Regulation; EC internal strategy
**Link:** https://interoperable-europe.ec.europa.eu; https://commission.europa.eu/about/departments-and-executive-agencies/digital-services/open-source-software-strategy_en
**Summary:** The Interoperable Europe Act (Articles 4 and 8) establishes code-sharing obligations between EU public sector bodies and mandates an EU Open Source Solutions Catalogue using publiccode.yml as its reference standard (launched 2025). The European Commission's own Open Source Strategy commits the Commission to using and contributing to open source software, restricts the Commission to approved licences, and established the Commission's Open Source Programme Office (EC-OSPO) in 2020. The FSFE has noted that the Interoperable Europe Act's interoperability approach remains request-based rather than designed-in; a stronger version would require interoperability by design from the outset.

---

### United Kingdom — Government Service Standard and alphagov
**Type:** Government digital standards and practice
**Link:** https://www.gov.uk/service-manual/service-standard; https://github.com/alphagov
**Summary:** The UK Government Digital Service established a culture of open by default for government digital services, publishing most of its platform code openly on GitHub under alphagov. The Government Service Standard does not mandate open source release, but GDS practice has normalised public code for central government digital services. The GOV.UK Notify, Pay, and Forms platforms are all open source and have been adopted by other governments.

---

### United Nations — Digital Public Goods Framework
**Established:** Digital Public Goods Alliance (DPGA) — 2019; UN Open Source Week — 2025 inaugural, 2026 second edition
**Type:** International framework / UN policy
**Link:** https://www.un.org/digital-emerging-technologies/content/digital-public-goods; https://www.unopensource.org/
**Summary:** The UN's Digital Public Goods Standard defines open source software, data, AI models, and content as "digital public goods" when they advance the SDGs and meet openness, privacy, and security requirements. Over 100 digital public goods are now registered with the DPGA. UN Open Source Week 2026 (22–26 June, UN HQ New York) includes a Digital Public Infrastructure Day focused on how governments can build on DPGs. The framework is particularly significant for Global South governments, for whom licensing cost elimination is a major driver.

---

## Gaps and Known Weaknesses

- **Enforcement across federated systems** — In federal states (US, Germany, Canada, Australia), open source policy at the national level does not bind sub-national governments, which handle much of the day-to-day software procurement. Model language is needed that works at state/provincial/municipal level.
- **Security tension with the EU Cyber Resilience Act** — The CRA's liability framework creates compliance uncertainty for open source components used in government software. The definition of "commercial activity" and the treatment of public sector open source releases needs clarification. This gap could inadvertently discourage government open source release.
- **AI-generated code and open source obligations** — Code generated using AI tools may have uncertain intellectual property status. The model does not yet address how AI-assisted development interacts with open source release obligations. This is an emerging area requiring legal analysis.
- **Global South capacity gap** — The model assumes governments have sufficient technical capacity to assess open source alternatives and maintain publiccode.yml catalogues. This assumption fails for many lower-income governments. Capacity-building and technical assistance obligations are underspecified.
- **Definition of "publicly-funded"** — The model does not fully address mixed-funding situations: software funded 30% by government grant, 70% by private investment; or open source projects that receive government support but are not government-commissioned. Definitional clarity is needed.
- **Contribution-back in practice** — While Standard 3 establishes a contribution-back obligation, enforcement is very difficult. No jurisdiction has found a compelling mechanism for verifying that modifications have been submitted upstream. This gap is acknowledged but unresolved.
- **No Global South real-world examples yet** — All examples are from Europe, UK, or the UN. Rwanda, India (with its Digital India Programme), and several Latin American jurisdictions have relevant experience that needs to be incorporated.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| Digital Sovereignty (coming soon) | Open source is a primary mechanism for digital sovereignty; the two models should be read together |
| [Digital Accessibility](../accessibility/full-model/) | Procurement reform applies to both; open source does not guarantee accessibility, and accessibility requirements must be explicit in open source as in proprietary procurement |
| [Algorithmic Accountability](../algorithmic-accountability/full-model/) | Open source release of AI/algorithmic systems used in government decisions is a transparency mechanism; but open weights ≠ explainability |
| [Data Centers](../data-centers/full-model/) | Open source software tends to support hardware longevity; software longevity policies complement hardware longevity policies |
| [Right to Repair](../right-to-repair/full-model/) | Software repairability (ability to maintain, modify, and extend) is the software analogue of hardware repairability; the prohibition on parts pairing has a direct software equivalent in device-locked firmware |
| Digital Public Infrastructure (coming soon) | DPI is built on open source; the two models define complementary obligations for governments building shared digital infrastructure |

---

## Glossary

**Open Source Software (OSS):** Software released under a licence that, at minimum, grants users the rights to use, study, modify, and distribute the software and modified versions. The Open Source Initiative (OSI) maintains the authoritative definition and approved licence list.

**Free Software:** Functionally equivalent to open source software in most policy contexts; the preferred term in FSFE's framework, emphasising freedom rather than access to source code. "Free" refers to freedom, not price.

**publiccode.yml:** A YAML metadata file placed in a software repository that describes the software in a machine-readable way, enabling automated discovery and cataloguing. Mandatory for public software in Italy; adopted as the EU OSS Catalogue standard.

**OSPO (Open Source Programme Office):** An organisational unit responsible for managing an institution's open source activity — compliance, contribution, cataloguing, and policy.

**Digital Public Good (DPG):** Open source software, data, AI models, standards, or content that adheres to privacy and other applicable laws and best practices, does no harm, and helps attain the SDGs. Defined and registered by the Digital Public Goods Alliance.

**Vendor lock-in:** A situation where a customer depends on a specific vendor's product or service in a way that makes switching difficult or costly, often because of proprietary data formats, interfaces, or contractual terms.

**SILL (Socle Interministériel des Logiciels Libres):** The French government's interdepartmental free software reference list, recommending specific open source software versions for use across government.

**Sovereign Tech Fund / Sovereign Tech Agency:** Germany's government-funded body that invests in the maintenance and security of open source components critical to digital infrastructure.

**Contribution-back:** The practice of submitting improvements made to open source software back to the upstream project, so that the wider community benefits from the modifications.

---

## Contributing to This Policy Model

This model is maintained in the open. To contribute:

- **Add a real-world example:** Open a Pull Request adding a new entry to the Real-World Examples section with a citation — Global South examples especially needed
- **Improve model language:** Open an Issue describing the problem, then submit a PR with proposed changes and rationale
- **Address a gap:** The Gaps section identifies where model language is still underdeveloped — these are prioritised contribution opportunities
- **Translate:** See the `/translations` directory and CONTRIBUTING.md
- **Flag a gap:** Open an Issue with the label `gap`

All substantive changes go through a minimum 14-day public comment period before merging.

This model is particularly relevant to **UN Open Source Week 2026** (22–26 June, UN HQ New York) and the Digital Public Infrastructure Day (24 June) — contributions that strengthen the DPI/DPG connection and address Global South implementation are especially welcome ahead of that event.

---

## Changelog

| Version | Date | Summary of changes |
|---|---|---|
| 0.1 | 2026-04-04 | Initial draft — four pillars, real-world examples from France, Italy, Germany, EU, UK, UN |

---

*This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.*
