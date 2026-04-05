---
---
# Digital Public Infrastructure — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-05
> **Maintainers:** Open Digital Policies community
> **Related domains:** [Open Source in Government](../open-source-in-government/full-model/), [Digital Sovereignty](../digital-sovereignty/full-model/), [Digital Accessibility](../accessibility/full-model/), [AI Adoption](../ai-adoption/full-model/)
> **Key sources:** UNDP/ITU Digital Public Infrastructure Framework, 50-in-5 Campaign, World Bank DPI Assessment, India's India Stack, Estonia's X-Road

---

## Overview

Digital public infrastructure (DPI) — the foundational digital systems that enable governments, economies, and societies to function — is the digital equivalent of roads, water systems, and electrical grids. Just as physical infrastructure enables economic activity, social participation, and access to public services, DPI enables digital participation, financial inclusion, healthcare access, and civic engagement.

DPI typically includes three foundational layers: digital identity systems (enabling people to prove who they are); payment systems (enabling value transfer); and data exchange infrastructure (enabling secure sharing of information between institutions and individuals). These three layers, well-designed, can enable universal access to financial services, healthcare, and government benefits. Poorly designed or governed, they can enable mass surveillance, exclusion of marginalised communities, and permanent dependency on a handful of private actors whose interests are not aligned with the public.

The 50-in-5 campaign — bringing together the UNDP, UNICEF, the Bill & Melinda Gates Foundation, and governments — aims to help 50 countries develop DPI within five years. The promise is universal inclusion and dramatically reduced costs for public service delivery. The risk is that poorly governed DPI becomes an infrastructure of control rather than an infrastructure of empowerment.

This model policy establishes the governance requirements for trustworthy DPI: open standards, public governance, privacy by design, universal accessibility, democratic accountability, and genuine exit rights.

### The Core Tension

We want digital infrastructure that enables everyone to access essential services — financial, governmental, healthcare — without creating surveillance systems that can be turned against the populations they serve, and without replacing one set of proprietary dependencies (on commercial platforms) with another (on DPI monopolies or vendor lock-in).

### Scope

- [x] Municipal / local government (where deploying DPI)
- [x] Regional / state / provincial government
- [x] National government (primary audience)
- [x] Public sector procurement
- [ ] Regulated industry
- [ ] Other: ___________

---

## Pillar 1: Principles

### Foundational Values

**1. DPI Is Public Goods Infrastructure — Not a Government Product**
Digital public infrastructure is conceptually more similar to roads than to government websites. Roads are publicly owned, publicly governed, and available to all — but private actors build cars and drive on them. DPI should enable a whole ecosystem of public and private services, rather than being the government's proprietary system for delivering government services. This distinction matters: good DPI enables innovation; proprietary government platforms create dependency.

**2. Open Standards Enable Interoperability and Exit**
DPI built on proprietary standards creates exactly the same vendor dependency problems that DPI is supposed to solve. Open standards — openly governed, with multiple independent implementations — ensure that DPI can be built, maintained, and replaced by multiple actors. Exit rights depend on open standards; open standards without open governance are insufficient.

**3. Privacy by Design, Not Privacy by Promise**
DPI that collects and centralises data about every economic transaction, healthcare interaction, and government service use creates unprecedented surveillance potential. Privacy must be designed into DPI architecture — through data minimisation, decentralisation, consent mechanisms, and technical controls that prevent mission creep — not addressed as an afterthought through policies that can be changed.

**4. Universal Accessibility Is the Point**
DPI that does not reach the populations most in need of inclusion has failed in its core purpose. Universal accessibility means: accessible to people with disabilities; available in local languages; usable without smartphones (through feature phone or in-person equivalents); and available regardless of income. DPI that serves 80% of the population while excluding the most marginalised 20% is not universal public infrastructure.

**5. Democratic Accountability Requires Democratic Governance**
DPI affects everyone. Its governance must be accountable to everyone — through transparent oversight bodies, public reporting, civil society participation, and democratic control over major design decisions. DPI governed solely by technical experts, finance ministries, or international donors is not democratically accountable, however technically excellent.

**6. DPI Is Not a Substitute for Rights**
Digital identity systems do not create rights — they are means of accessing rights that must exist independently. DPI must not be designed so that lacking digital identity means being excluded from healthcare, education, food assistance, or other rights. Robust non-digital alternatives must be preserved.

**7. International Funding Must Not Import Governance Deficits**
Much DPI is built with international development funding from institutions with their own governance standards, timelines, and interests. These may not align with the rights and interests of the populations the DPI will serve. International funding for DPI must come with governance standards that prioritise the rights of end users, not just deployment metrics.

### Equity Considerations

- **People without smartphones** — An estimated 3 billion people globally lack smartphone access. DPI that requires smartphones for identity verification, payment, or service access excludes them. Feature phone (USSD) and in-person channel parity is essential.
- **Women** — In many contexts, women have lower rates of document ownership, formal financial account access, and digital literacy. DPI can accelerate inclusion of women — or replicate existing exclusions at scale. Gender equity must be a primary design requirement.
- **People with disabilities** — DPI must be accessible by design from day one. Retrofitting accessibility into DPI systems is expensive and often incomplete. See [Digital Accessibility model](../accessibility/full-model/).
- **Rural and remote populations** — DPI requiring high-speed internet connectivity does not serve populations in areas with poor connectivity. Offline-capable design, agent networks, and connectivity investment must accompany DPI deployment.
- **Migrants and stateless people** — People without formal documentation from a nation-state are often excluded from digital identity systems by design. DPI governance must address this exclusion explicitly.
- **Indigenous communities** — Digital identity and data exchange systems may intersect with indigenous data sovereignty frameworks. UNDRIP (UN Declaration on the Rights of Indigenous Peoples) and indigenous data sovereignty principles must inform DPI governance in contexts with significant indigenous populations.

### Environmental Considerations

At national scale, DPI operates on infrastructure with significant energy and hardware footprints. DPI design must account for: operational energy efficiency; hardware longevity (avoiding unnecessary upgrade cycles in terminal devices); and the energy intensity of identity and authentication systems. Centralised data systems require data center governance aligned with the [Data Centers model](../data-centers/full-model/).

---

## Pillar 2: Standards

### Mandatory Standards

> **Standard 1: Open Standards Requirement**
> All DPI components — identity systems, payment rails, data exchange platforms, and their interfaces — shall be:
>
> (a) Built on openly published technical standards that are governed through open, multi-stakeholder processes;
>
> (b) Implemented in ways that allow multiple independent operators to provide compliant services using the same standards;
>
> (c) Documented in sufficient detail that an independent technical team could build a compatible implementation from the public documentation alone;
>
> (d) Free of mandatory proprietary components in the critical path — proprietary extensions and services may be offered, but the core infrastructure must not require them;
>
> (e) Subject to a published interoperability profile that enables third-party services to integrate without requiring the permission of the DPI operator.

*Rationale: India's Unified Payments Interface (UPI) operates on open standards with hundreds of competing payment applications. Estonia's X-Road data exchange layer is open source with multiple independent implementations. These demonstrate that open standards DPI can achieve both scale and interoperability. By contrast, national ID systems built on a single vendor's proprietary platform (a common pattern in international development) create permanent dependency.*

---

> **Standard 2: Privacy Architecture Requirements**
> DPI shall be designed with privacy protection built into its architecture:
>
> (a) **Minimisation**: The identity layer shall not transmit more information than necessary to authenticate the claim being made. A system verifying age should confirm age, not disclose date of birth. A system verifying residency should confirm residency, not disclose address.
>
> (b) **Consent and control**: Where DPI systems share personal data between institutions, individuals must be able to view what data has been shared, with whom, and for what purpose, through a personal data dashboard or equivalent mechanism.
>
> (c) **Purpose limitation**: Data flows within DPI must be technically constrained to their stated purposes — not merely governed by policy that can be changed. Data collected for identity authentication must not be accessible for law enforcement surveillance without judicial authorisation.
>
> (d) **Decentralisation where feasible**: Where technical design can distribute rather than centralise personal data, this is preferred. A centralised database linking all identity events, transactions, and benefit claims to individual identifiers is a surveillance infrastructure, not just a service infrastructure.
>
> (e) **Auditability**: All data access within DPI systems must be logged, with logs available to individuals for review and to the oversight body for audit.

*Rationale: India's Aadhaar system — the world's largest biometric identity system — has been criticised for enabling surveillance, exclusion of people whose biometrics are not reliably read, and linkage of data across government and private systems beyond initial scope. These failures are largely architectural; the governance requirements here are designed to prevent them.*

---

> **Standard 3: Mandatory Non-Digital Alternatives**
> Where DPI enables access to government services, financial services, or healthcare, a fully functional non-digital alternative must be maintained:
>
> (a) The non-digital alternative must provide the same access to the same services — not a degraded or delayed version;
>
> (b) The non-digital alternative must be available in all areas where the digital service is available;
>
> (c) Uptake of the digital channel is not a permissible justification for reducing the capacity or quality of the non-digital alternative;
>
> (d) People who choose the non-digital alternative must not be required to justify that choice.

*Rationale: India's Aadhaar-linked benefit distribution system has been documented to exclude poor and marginalised people whose biometrics cannot be read, leading to deaths from denial of food rations. Mandatory non-digital alternatives prevent this category of harm. The principle that digital is not the only path to essential services is fundamental to trustworthy DPI.*

---

> **Standard 4: Democratic Oversight of DPI Architecture**
> Material changes to DPI architecture — including changes to data models, interoperability profiles, governance structures, and major security design decisions — shall:
>
> (a) Be subject to a minimum [60]-day public consultation period before implementation;
>
> (b) Require approval from an independent oversight body with technical expertise and civil society representation;
>
> (c) Be accompanied by a privacy impact assessment and an equity impact assessment;
>
> (d) Be communicated in plain language to affected communities, not only to technical specialists;
>
> (e) For changes affecting fundamental rights (biometric requirements, law enforcement access protocols, data retention policies): require legislative approval.

---

> **Standard 5: Procurement and Vendor Independence**
> DPI procurement shall:
>
> (a) Prioritise open source implementations where they provide equivalent functionality;
>
> (b) Prohibit contracts that grant any single vendor sole rights to operate, maintain, or extend core DPI components;
>
> (c) Require that source code for custom-developed DPI components be owned by the government, not the vendor;
>
> (d) Include documented exit plans — technical procedures for migrating from any vendor without service interruption — as a mandatory procurement requirement;
>
> (e) Disclose all subcontractors and subprocessors with access to DPI data;
>
> (f) Prohibit DPI data from being transferred to vendor systems for purposes other than service delivery without explicit governmental authorisation.

*Reference: [Open Source in Government model](../open-source-in-government/full-model/); [Digital Sovereignty model](../digital-sovereignty/full-model/)*

---

> **Standard 6: Accessibility and Inclusion Requirements**
> DPI shall meet the following minimum accessibility and inclusion requirements:
>
> (a) All user-facing interfaces must conform to WCAG 2.2 AA;
>
> (b) Services must be available in all official languages of the jurisdiction and, where practicable, in widely spoken minority languages;
>
> (c) Services must be available through non-smartphone channels (USSD, IVR, or in-person agent networks) in areas where smartphone penetration is below [50%];
>
> (d) Biometric-based identity must not be the sole means of accessing essential services — document-based and knowledge-based alternatives must be available;
>
> (e) An equity impact assessment shall be conducted before deployment and annually thereafter, assessing uptake and exclusion rates by gender, disability, income level, language, and rural/urban location.

*Reference: [Digital Accessibility model](../accessibility/full-model/)*

---

### Aspirational Standards

> **Aspirational Standard 1: Data Sovereignty for Citizens**
> Citizens should have a right to a complete, machine-readable export of all personal data held about them in DPI systems — across identity, payment, health, and benefit systems — in a format that enables portability to other services. The EU GDPR right to data portability provides the legal framework; the DPI architecture must make it technically possible.

> **Aspirational Standard 2: Federated and Interoperable DPI**
> Countries should be able to achieve interoperability between their DPI systems — so that cross-border payments, identity verification, and data exchange can occur without requiring users to establish separate identity credentials in each jurisdiction. The EU Digital Identity Wallet (eIDAS 2.0) and the SADC Regional Payment System provide reference models.

---

### Standards Cross-Reference

| Standard | Body | Notes |
|---|---|---|
| UNDP/ITU DPI Framework | UNDP / ITU | 2023; foundational framework for DPI governance |
| 50-in-5 Campaign Principles | 50-in-5 | Deployment principles; governance requirements |
| World Bank DPI Assessment Framework | World Bank | 2023; assessment criteria for DPI quality |
| eIDAS 2.0 | EU | 2024; EU Digital Identity Wallet |
| India Stack (UPI, Aadhaar, DPDP) | Government of India | Largest deployment; useful as both model and cautionary tale |
| Estonia X-Road | Government of Estonia | Open source data exchange reference implementation |
| GDPR | EU | 2016/679; data protection framework applicable to DPI |
| UNDRIP | UN | Indigenous peoples' rights; indigenous data sovereignty |

---

## Pillar 3: Implementation

### Phased Deployment Approach

> **Deployment Sequencing**
> DPI should be deployed in phases with governance infrastructure preceding population-scale deployment:
>
> **Phase 1 (6–12 months pre-deployment):** Establish oversight body; publish open standards; conduct equity and privacy impact assessments; develop non-digital alternatives; establish data protection legislation.
>
> **Phase 2 (Pilot, 12–24 months):** Deploy in limited geographic areas with intensive monitoring; evaluate equity outcomes; iterate on accessibility and inclusion; publish findings publicly.
>
> **Phase 3 (National scale-up):** Deploy nationally with ongoing equity monitoring; ensure non-digital alternatives scale with digital deployment; establish complaint and redress mechanisms.

### Procurement Requirements

> **DPI Procurement Clause**
> All DPI procurement shall include: (a) open source preference; (b) government IP ownership; (c) exit plan as deliverable; (d) privacy impact assessment as deliverable; (e) equity impact assessment as deliverable; (f) vendor data access restrictions; (g) accessibility conformance certification; (h) five-year minimum support obligation.

### Reporting and Transparency

> **Annual DPI State Report**
> The DPI governance body shall publish an annual report covering: (a) uptake rates by demographic group; (b) exclusion rates and causes; (c) complaints received and outcomes; (d) data breach incidents; (e) law enforcement and government agency access to DPI data; (f) interoperability status; (g) vendor and open source balance; (h) energy consumption; (i) planned changes to architecture or governance.

### Enforcement

> **Enforcement Clause**
> The DPI oversight body may: (a) audit compliance with open standards and vendor independence requirements; (b) commission independent security and privacy audits; (c) require remediation of exclusion issues identified in equity assessments; (d) receive complaints from individuals and civil society; (e) order correction of systemic failures; (f) refer data protection violations to the relevant data protection authority.

---

## Pillar 4: Governance

### Oversight Body

> **DPI Governance Board**
> A DPI Governance Board shall be established with: technical expertise in identity systems, payment systems, and data infrastructure; legal expertise in data protection, administrative law, and human rights; civil society representation including organisations working with marginalised communities; and independence from the DPI operating body. The Board shall: approve major architecture changes; review annual reports; commission independent audits; and report to the legislature.

### Community Representation

> **Inclusion and Equity Advisory Panel**
> The Governance Board shall be supported by an Inclusion and Equity Advisory Panel with reserved seats for: disability rights organisations; women's rights organisations; organisations representing linguistic minorities; rural community representatives; migrant and refugee advocacy organisations; and independent technical experts. The Panel shall review equity impact assessments and have standing to request Board review of exclusion findings.

### Audit and Review

> **Triennial Independent Review**
> Every three years, the DPI governance framework shall be subject to independent review covering: whether the open standards requirement is being met; whether privacy architecture requirements are technically enforced; whether equity outcomes are improving; whether the oversight body is functioning effectively; and whether the non-digital alternative requirement is being fulfilled. Reviews shall be public and include community consultation.

---

## Real-World Examples

### India — India Stack (Aadhaar, UPI, ABHA)
**Active:** 2009–present (Aadhaar); 2016–present (UPI)
**Links:** https://indiastack.org; https://www.npci.org.in
**Summary:** India's DPI stack is the world's largest and most developed. Aadhaar is a biometric identity system with over 1.3 billion enrolled. UPI is an open payment protocol processing billions of transactions monthly, with hundreds of competing apps. ABHA is a health identity and records system. India Stack demonstrates that DPI can achieve enormous scale and financial inclusion outcomes. The cautionary elements are equally important: Aadhaar has been used to deny food rations to rural poor; biometric failures have excluded disabled people; surveillance concerns led to Supreme Court scrutiny; and the system has expanded far beyond its original scope. The lessons — both positive and cautionary — make India Stack the essential reference case.

---

### Estonia — X-Road and e-Governance
**Active:** 2001–present (X-Road); continuous development
**Link:** https://x-road.global
**Summary:** Estonia's X-Road is an open source data exchange layer enabling secure, logged data sharing between government and private sector databases. Used for healthcare, tax, identity, and dozens of other services. Estonia's approach — maximum digital service delivery, with strong privacy protections and citizen data dashboards — demonstrates that DPI can be both comprehensive and privacy-respecting. X-Road has been adopted by Finland, Iceland, and other countries. The Estonian model is the reference for privacy-by-design DPI at national scale.

---

### Brazil — Pix Instant Payment System
**Active:** 2020–present
**Operator:** Banco Central do Brasil
**Link:** https://www.bcb.gov.br/estabilidadefinanceira/pix
**Summary:** Brazil's Pix is an open, interoperable instant payment system operated by the central bank. Within three years of launch, it became the most used payment method in Brazil, with over 140 million individual users and 14 million business users. Open API design enabled hundreds of fintech apps to build on Pix. The system was operated by the public sector (central bank) from the start, ensuring that network effects accrued to the public rather than to private payment operators. Pix demonstrates that public sector operation of DPI can achieve competitive and inclusive outcomes without privatising essential infrastructure.

---

### Kenya — M-Pesa (Cautionary Example)
**Active:** 2007–present
**Operator:** Safaricom (privately owned)
**Summary:** M-Pesa — mobile money originally developed with DFID funding — became the most successful financial inclusion story in the developing world, enabling millions of unbanked Kenyans to access financial services. It is also a cautionary example: M-Pesa is privately operated by Safaricom (owned by Vodafone), meaning that the essential financial infrastructure for millions of people is governed by a private company with commercial incentives. M-Pesa's success demonstrates what DPI can achieve; its governance structure illustrates why public governance matters. The key question is not only "does it work?" but "who governs it and in whose interest?"

---

### EU — European Digital Identity Wallet (eIDAS 2.0)
**Legislative basis:** eIDAS 2.0 Regulation (2024/1183)
**Timeline:** Member states required to offer wallets by 2026
**Link:** https://digital-strategy.ec.europa.eu/en/policies/eudi-wallet
**Summary:** The EU's European Digital Identity Wallet will allow EU citizens to use a mobile wallet to prove their identity and share credentials (such as driving licences, educational qualifications, and professional certifications) across the EU without sharing more data than necessary. The wallet design explicitly incorporates selective disclosure — proving an attribute without revealing the underlying data. This is the most privacy-protective large-scale identity DPI design currently being implemented. Implementation and governance details are still evolving.

---

## Gaps and Known Weaknesses

- **Mission creep and scope expansion** — DPI systems designed for one purpose routinely expand to others. Aadhaar, designed for benefit delivery, was progressively linked to bank accounts, mobile phones, tax returns, and voter registrations. Technical architecture that prevents scope expansion is more reliable than policy commitments.
- **Biometric exclusion** — Fingerprint and iris-based biometrics fail at elevated rates for agricultural workers, older adults, and people with certain disabilities. DPI that relies primarily on biometrics for identity will systematically exclude these groups.
- **The inclusion-surveillance tension** — The most capable DPI — the kind that enables universal financial inclusion and seamless service delivery — is also the most capable surveillance infrastructure. The design choices that maximise inclusion often maximise surveillance potential. This tension is structural, not resolvable through policy alone.
- **International development funding incentives** — Donors measure DPI success through deployment metrics (number of IDs issued, transactions processed) rather than governance quality or exclusion rates. This creates incentives to deploy quickly rather than well.
- **State capacity** — Strong DPI governance requires significant state capacity — technical expertise, regulatory authority, and enforcement resources. Many of the countries that most need DPI have the least capacity to govern it well. Technical assistance that builds governance capacity alongside DPI systems is essential.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| [Open Source in Government](../open-source-in-government/full-model/) | DPI should prefer open source; open standards requirement aligns with OS preference |
| [Digital Sovereignty](../digital-sovereignty/full-model/) | DPI vendor independence, exit rights, and open standards are sovereignty requirements |
| [Digital Accessibility](../accessibility/full-model/) | DPI user interfaces must meet accessibility standards; non-digital alternatives preserve inclusion |
| [AI Adoption](../ai-adoption/full-model/) | AI in DPI (fraud detection, eligibility scoring) requires AI governance framework |
| [Algorithmic Accountability](../algorithmic-accountability/full-model/) | Automated decisions in benefit delivery via DPI require accountability mechanisms |
| [Smart Cities & Privacy](../smart-cities/full-model/) | City-level DPI deployments must align with smart city data governance |

---

## Glossary

**Digital Public Infrastructure (DPI):** The foundational digital systems — primarily identity, payment, and data exchange — that enable governments, economies, and societies to function digitally. Conceptually analogous to physical public infrastructure (roads, water, electricity).

**Digital Identity System:** A system enabling individuals to prove their identity digitally. May be document-based, knowledge-based, biometric, or cryptographic. Examples: Aadhaar (India), eIDAS (EU), digital driving licences.

**Payment Rail:** The technical infrastructure enabling value transfer between parties. Examples: SWIFT (international), UPI (India), Pix (Brazil), SEPA (EU).

**Data Exchange Layer:** Infrastructure enabling secure, logged data sharing between institutions and individuals. Examples: Estonia's X-Road, India's DigiLocker, GDPR-compliant data portability APIs.

**Open Standard:** A technical specification that is publicly available, developed through an open process, and free from proprietary restrictions that would prevent independent implementation.

**Selective Disclosure:** A privacy-preserving identity technique enabling proof of an attribute (e.g., "over 18") without revealing the underlying data (e.g., date of birth). A core design principle of the EU Digital Identity Wallet.

**50-in-5 Campaign:** A joint initiative (UNDP, UNICEF, Gates Foundation, and others) aimed at helping 50 countries build and deploy DPI within five years, with governance standards emphasising inclusion and rights.

**India Stack:** The collective term for India's DPI components: Aadhaar (biometric identity), UPI (payment), ABHA (health identity), DigiLocker (document storage), and associated open APIs.

---

## Contributing to This Policy Model

This model is maintained in the open. Priority contribution needs:

- **Biometric alternative standards** — practical requirements for non-biometric identity alternatives within DPI systems
- **Global South governance examples** — DPI governance from African, Asian, and Latin American contexts beyond India and Kenya
- **Indigenous data sovereignty integration** — how DPI governance frameworks can respect and incorporate indigenous data sovereignty principles
- **Cross-border DPI interoperability** — model language for bilateral and multilateral DPI interoperability agreements
- **Environmental lifecycle assessment** — methodology for assessing the environmental footprint of national-scale DPI deployment

Open an [Issue](https://github.com/mgifford/DigitalPolicies/issues) to propose changes or additions. See [CONTRIBUTING.md](https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md) for the contribution process.

All substantive changes go through a minimum 14-day public comment period before merging.

---

## Changelog

| Version | Date | Summary of changes |
|---|---|---|
| 0.1 | 2026-04-05 | Initial draft — four pillars, real-world examples from India, Estonia, Brazil, Kenya, EU |

---

*This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.*
