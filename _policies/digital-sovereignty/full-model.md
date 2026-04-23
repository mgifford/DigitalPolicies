---
layout: domain-full
title: "Digital Sovereignty — Model Policy"
description: "Model policy language ensuring communities can understand, audit, and exit the digital systems they depend on — making dependency transparent, voluntary, and reversible."
domain: digital-sovereignty
---

# Digital Sovereignty — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-04
> **Related domains:** [Open Source in Government](../../open-source-in-government/full-model/), [Data Centers & Environmental Sustainability](../../data-centers/full-model/), [AI Adoption & Governance](../../ai-adoption/full-model/), [Algorithmic Accountability](../../algorithmic-accountability/full-model/)
> **Key sources:** EU Cyber Resilience Act, EU Data Act (2024), EU Cloud Rules (EUCS), FSFE "Public Money, Public Code", French Loi pour une République Numérique, German IT-Sicherheitsgesetz, UNDP Digital Public Infrastructure framework

---

## Overview

Digital sovereignty is the capacity of a community — a city, a region, a nation — to understand, govern, and if necessary exit the digital systems on which it depends. It is not digital isolationism. It is not a call to build national internets behind firewalls or to exclude foreign technology. It is the recognition that unexamined dependency is vulnerability, and that democratic accountability requires that communities can ask — and get honest answers to — three questions about any digital system they rely on:

**Who controls it? What does it do with our data? Can we leave?**

Governments that cannot answer these questions about their core digital infrastructure — their cloud providers, their identity systems, their citizen-facing services — are not governing; they are outsourcing governance. Municipalities that lock their public data into proprietary formats controlled by a single vendor are one contract cancellation away from losing access to their own records. Countries that have ceded control of their payment infrastructure, communications networks, and public health systems to unaccountable global platforms have a sovereignty problem regardless of what their constitutions say.

This is not a theoretical concern. In 2021, a major cloud provider's outage took down emergency services in multiple European countries. In 2022, proprietary software dependencies meant that several public authorities could not access their own records during a vendor dispute. In 2024, US policy changes created risk for European governments relying on US-hosted services for core infrastructure. Digital sovereignty is a practical resilience question as much as a political one.

This policy model addresses the structural conditions of digital sovereignty: what governments must control, what they must be able to inspect, what they must be able to exit, and what communities must be able to participate in governing.

### The Core Tension

**We want the capability, scale, and convenience of global digital platforms — but not at the cost of accountability, resilience, or the ability of democratic institutions to function independently of decisions made in other jurisdictions. Dependency that is voluntary, transparent, and reversible is acceptable. Dependency that is opaque, locked-in, and unexamined is a governance failure.**

### Scope

- [x] National government (infrastructure sovereignty, data sovereignty, strategic ICT)
- [x] Regional / state / provincial government (cloud and vendor policy, data localisation)
- [x] Municipal / local government (open standards, exit rights, community data governance)
- [x] Public sector procurement (interoperability, open standards, lock-in prevention)
- [ ] Private sector (data portability obligations — addressed in EU Data Act; referenced here)

---

## Pillar 1: Principles

### Foundational Values

**1. Dependency must be transparent**
A government that does not know which of its critical functions depend on a single vendor, a foreign jurisdiction, or a closed proprietary standard is not in a position to govern those functions. Transparency about dependency is the prerequisite for sovereignty. This means maintaining current, accurate inventories of digital dependencies — cloud providers, software vendors, data formats, identity systems — and making strategic dependency risk assessable.

**2. Open standards as a condition of sovereignty**
No government or community can be sovereign over data it cannot read without a specific vendor's software. Open, documented file formats and communication protocols are the technical foundation of sovereignty. Proprietary formats are not merely inconvenient — they are structural lock-in, transferring practical control of public data to private vendors. Open standards must be the default for all public digital infrastructure, with proprietary alternatives requiring documented justification.

**3. The right to exit is the test of sovereignty**
A community that cannot exit a digital system without catastrophic disruption is not sovereign over that system. The right to exit — to switch providers, to migrate data, to run infrastructure independently — must be a design requirement, not an afterthought. Contracts must include exit rights; systems must support data portability; formats must be open. Where these conditions are not met, the procurement decision is a sovereignty transfer.

**4. Public infrastructure requires public governance**
Digital systems that have become de facto public infrastructure — identity systems, payment rails, essential communications platforms — require governance mechanisms that include democratic accountability, civil society oversight, and user rights. The fact that infrastructure is operated by a private entity does not reduce the public's legitimate interest in its governance.

**5. Sovereignty is not isolationism**
Digital sovereignty does not mean closed borders for data or technology. It means that cross-border data flows, foreign technology adoption, and global platform use are governed by explicit, democratic decisions rather than by default and inertia. International cooperation, shared infrastructure, and global standards are compatible with sovereignty when they are chosen rather than inherited.

**6. Communities are the appropriate unit of sovereignty**
Sovereignty in the digital domain is not only a national question. Municipalities have digital sovereignty interests in their permitting systems, their citizen data, their planning records. Indigenous communities have sovereignty interests in data about their lands, their members, and their cultural heritage. Sovereignty frameworks must be scalable from community to national level.

**7. Resilience and sovereignty reinforce each other**
Systems built for sovereignty — with open standards, exit rights, distributed infrastructure, and documented dependencies — are also more resilient to outages, vendor failures, and geopolitical disruption. Sovereignty is not merely a political value; it is an operational requirement for reliable public services.

**8. Human rights travel with data**
When a government's data about its citizens is held in a jurisdiction with different legal standards — weaker privacy protections, different rights frameworks, opaque law enforcement access — those citizens' rights may not travel with their data. Data sovereignty questions are human rights questions.

### Equity Considerations

- **Smaller and lower-income jurisdictions** face the greatest structural barriers to digital sovereignty: they have less bargaining power with large vendors, fewer resources to develop independent infrastructure, and stronger economic incentives to accept lock-in that reduces short-term costs. Sovereignty frameworks must include regional cooperation mechanisms and shared infrastructure options that make sovereignty achievable at smaller scales.
- **Indigenous communities** have specific sovereignty interests in data about their members, lands, languages, and cultural heritage. The principle of Indigenous Data Sovereignty — that Indigenous communities should govern data about themselves — is an application of the broader sovereignty framework with additional rights foundations in UN human rights frameworks.
- **People without technical expertise** — the majority of citizens — cannot assess digital sovereignty conditions themselves. Sovereignty governance must include mechanisms for independent civil society and technical expert oversight that can hold governments accountable on behalf of citizens who lack the capacity to do so directly.
- **Future generations** inherit the lock-in decisions made today. A government that signs a 10-year proprietary cloud contract without exit provisions in 2025 is constraining the choices of a government elected in 2030.

### Geopolitical Considerations

Digital sovereignty is not an abstract principle — it has concrete geopolitical dimensions. The concentration of global cloud infrastructure in a small number of US-based companies (AWS, Microsoft Azure, Google Cloud control approximately 65% of global cloud market share) creates structural dependency for governments outside the US. Legal frameworks including the US CLOUD Act create potential obligations for US-based providers to share data with US law enforcement regardless of where the data is physically stored. The EU's Digital Markets Act, Data Act, and proposed European Cloud Certification Scheme (EUCS) are responses to this structural dependency. This policy model is designed to be applicable regardless of jurisdiction and is not directed against any particular country or provider.

---

## Pillar 2: Standards

### Mandatory Standards

> **Digital Dependency Inventory**
> Within 18 months of this policy taking effect, all government departments and agencies shall maintain a current Digital Dependency Inventory documenting: (a) all cloud services used, including provider identity, data center jurisdiction(s), and contract expiry; (b) all proprietary software in use for core functions, including vendor, version, and data format used; (c) all critical systems where a single vendor provides both the software and the data hosting; (d) all systems where data cannot be exported in a documented open format; and (e) all systems where the authority lacks administrative access to its own data. The inventory shall be reviewed and updated annually. A summary version (excluding security-sensitive details) shall be published and made publicly available.

*Rationale:* Most public authorities do not know the full extent of their digital dependencies. Without an inventory, strategic sovereignty planning is impossible. The requirement for a published summary version creates public accountability and enables civil society scrutiny of strategic dependency risks. The specific categories (single-vendor stacks, locked formats, administrative access) identify the highest-risk dependency configurations.

---

> **Open Standards Requirement**
> All new public digital infrastructure and procured software shall use open, documented, non-proprietary file formats and communication protocols for: (a) any data that may need to be migrated or transferred between systems; (b) any data that may need to be accessed by third parties (including the public, regulators, or audit bodies); (c) any interface that other public systems will connect to; and (d) any document, record, or database intended for long-term retention. "Open standard" means a standard that: is publicly documented without cost; can be implemented by any party without royalty or discriminatory licensing; has a governance process that is not controlled by a single commercial entity; and is maintained and versioned in a publicly accessible process. Proprietary formats may be used as secondary formats for operational convenience but may not be the sole format for any of the categories above.

*Rationale:* Open standards are the technical foundation of exit rights and long-term sovereignty. A government's records in PDF/A, ODF, or open geodata formats can be read with multiple tools and maintained indefinitely. Records in proprietary formats — .docx without XML clarity, binary GIS formats, proprietary database schemas — are readable only with the vendor's software. This is not hypothetical: public authorities have lost access to their own records following vendor disputes, software discontinuation, and migration failures.

*Reference:* [UK Open Standards Principles](https://www.gov.uk/government/publications/open-standards-principles): the UK government's longstanding policy requiring open standards for government technology. [France Référentiel Général d'Interopérabilité (RGI)](https://www.numerique.gouv.fr/): France's comprehensive interoperability framework requiring open standards in public administration.

---

> **Exit Rights in Contracts**
> All contracts for cloud services, software-as-a-service, and digital infrastructure shall include: (a) a documented exit plan prepared by the vendor before contract commencement and updated annually; (b) a data portability commitment requiring the vendor to provide all of the authority's data in an open, documented format within 90 days of contract termination or notice; (c) a transition assistance commitment requiring the vendor to support migration to a successor system for a minimum of 12 months following contract termination; (d) a prohibition on contractual terms that increase cost or complexity of exit (e.g., egress fees, format conversion fees, notice periods exceeding 6 months); and (e) a commitment that all data will be securely deleted from vendor systems within 90 days of confirmed data export. Contracts that do not include these terms shall require documented justification approved by a senior official with digital strategy responsibility.

*Rationale:* Exit rights exist to convert dependency from permanent to voluntary. The specific provisions address the four most common lock-in mechanisms: data in inaccessible formats, lack of transition support, contractual exit penalties, and absence of data deletion confirmation. The "documented justification" mechanism for non-compliant contracts creates accountability without prohibiting all proprietary systems — recognising that some capabilities are only available through proprietary providers at present — while requiring a deliberate and reviewed decision rather than inadvertent lock-in.

---

> **Source Code Access for Critical Systems**
> For any software system classified as critical public infrastructure under this policy, the procuring authority shall: (a) either hold an escrow arrangement for the full source code with a trusted third party; or (b) require that the software be released under an open source licence; or (c) develop equivalent in-house capability. "Critical public infrastructure" for the purposes of this provision includes: identity and authentication systems; emergency services dispatch and coordination systems; social benefit calculation and payment systems; and electoral management systems. Escrow arrangements shall provide the authority with the right to access and modify source code in the event of vendor insolvency, contract termination, or material failure to perform.

*Rationale:* For the most critical government functions, source code escrow or open licensing is not merely a procurement preference — it is an operational necessity. A government that cannot access the source code of its emergency dispatch system when the vendor fails is in a dangerous position. This provision is designed to be practical: it does not require open source for all government software, only for the subset of systems where proprietary dependency creates unacceptable operational and sovereignty risk.

*Reference:* [Cabinet Office UK — source code escrow guidance](https://www.gov.uk/guidance/source-code-escrow): guidance on when and how to use escrow arrangements. [Barcelona Digital Sovereignty initiative](https://ajuntament.barcelona.cat/digital/en/): pioneering municipal digital sovereignty with open source preference.

---

> **Data Residency and Jurisdiction Transparency**
> All cloud and data services used for personal data about residents shall: (a) clearly document the jurisdiction(s) in which data is stored and processed; (b) confirm whether any data is subject to access obligations under the laws of non-EU/non-[jurisdiction] states; (c) provide legally binding commitments regarding law enforcement access requests — specifically, notifying the authority of any access request it is legally permitted to disclose before complying, and logging all access requests it is not permitted to disclose; and (d) confirm that no data will be transferred to a jurisdiction without equivalent data protection standards without prior written consent of the authority. Authorities shall publish an annual summary of any foreign law enforcement access requests received by their cloud providers.

*Rationale:* Citizens have a right to know when data about them held by public authorities is subject to legal access by foreign governments. The US CLOUD Act (2018) requires US-based companies to provide data to US law enforcement authorities even when the data is stored in the EU. The EU-US Data Privacy Framework provides some protections, but its legal durability has been challenged. The annual access request summary creates public accountability that is currently absent from most jurisdictions.

---

### Recommended Standards

> **Digital Sovereignty Impact Assessment**
> Before adopting any new digital system for core public functions, public authorities should conduct a Digital Sovereignty Impact Assessment (DSIA) evaluating: the dependency profile of the proposed system (vendor concentration, jurisdiction, open vs. proprietary); the exit cost and timeline if the system is adopted; the existence of equivalent open source or locally controlled alternatives; and the strategic dependency risk at the jurisdictional level (e.g., if this system, combined with existing systems, creates unacceptable concentration with a single vendor or jurisdiction). DSIAs should be proportionate to system scale and risk.

---

> **Community Data Governance**
> Public authorities should establish community data governance mechanisms for datasets that are collected from and about communities — including traffic data, air quality data, land use data, and social services data. Community data governance should include: community representation in decisions about data sharing and use; rights for communities to access data about their area; and prohibitions on commercial use of community data without community benefit arrangements.

---

> **Federated Identity over Centralised Identity**
> Where governments develop or procure digital identity systems, federated architectures (where users control their credentials and no single entity holds complete identity records) should be preferred over centralised architectures (where a single government or commercial entity holds complete identity records). Identity systems should be interoperable with open identity standards (e.g., W3C Decentralised Identifiers, OpenID Connect) and should not require citizens to share identity data with commercial entities as a condition of accessing public services.

---

## Pillar 3: Implementation

### Regulatory and Administrative Requirements

**Digital Sovereignty Strategy**
Within 24 months of this policy taking effect, the government shall publish a Digital Sovereignty Strategy addressing: a baseline assessment of current strategic dependencies; priority domains for sovereignty improvement over a 5-year horizon; a shared infrastructure programme for capabilities where individual agencies duplicating investment is inefficient; resources allocated to sovereignty-improving investments; and an open source adoption target for core government systems.

**Competent Authority**
A designated authority (the [Digital Sovereignty Office] or equivalent function within a central digital government body) shall be responsible for: maintaining the national Digital Dependency Inventory; developing and updating the open standards list; approving exceptions to exit rights requirements; conducting annual sovereignty risk assessments; and publishing the annual Digital Sovereignty Report.

**Phased Implementation Timeline**

| Phase | Requirement | Timeline |
|---|---|---|
| Phase 1 | Digital Dependency Inventory — critical systems | Within 12 months |
| Phase 1 | Open standards requirement for all new procurement | Immediately upon enactment |
| Phase 1 | Exit rights provisions — all new contracts | Immediately upon enactment |
| Phase 2 | Digital Dependency Inventory — full scope | Within 24 months |
| Phase 2 | Source code escrow/access for critical systems | Within 24 months |
| Phase 2 | Data residency and jurisdiction transparency — all personal data systems | Within 24 months |
| Phase 2 | Digital Sovereignty Strategy published | Within 24 months |
| Phase 3 | Digital Sovereignty Impact Assessment for major new systems | Within 36 months |
| Phase 3 | Existing contracts reviewed and renegotiated for exit rights | Within 48 months |
| Ongoing | Annual Digital Sovereignty Report published | Annually from Year 2 |

**Shared Infrastructure Programme**
The government shall invest in shared sovereignty-compatible infrastructure available to all public authorities, including: a shared open source code repository and reuse catalogue; shared green-hosting arrangements that meet the open standards and exit rights requirements; shared identity services built on open standards; and shared open geospatial data infrastructure. Shared infrastructure investments shall be proportionate to the sovereignty and cost benefits of reducing duplicated proprietary dependency.

### Capacity Building

Within 18 months of enactment, the competent authority shall publish: (a) a Digital Sovereignty Procurement Checklist for procurement officers; (b) training materials on open standards assessment for technical staff; (c) a template DSIA for departments to adapt; and (d) an open source maturity model for government organisations.

---

## Pillar 4: Governance

### Enforcement

**Procurement Compliance**
The competent authority shall have standing to review any major digital procurement for compliance with open standards and exit rights requirements before contract award. Contracts exceeding [X] in value shall require a sovereignty compliance sign-off from the competent authority. Contracts awarded without required exit provisions shall be reported to the relevant oversight body.

**Annual Sovereignty Assessment**
The competent authority shall publish an annual Digital Sovereignty Report assessing: the national strategic dependency risk profile; progress against the Digital Sovereignty Strategy; compliance with open standards and exit rights requirements across departments; any sovereignty incidents (outages, vendor disputes, access failures) in the preceding year; and recommended policy updates.

**Civil Society Oversight**
The competent authority shall maintain a Digital Sovereignty Advisory Panel including: civil society organisations with digital rights expertise; technical experts from academia and independent research institutions; representatives from local and regional government; and a consumer or citizen representative. The panel shall meet quarterly and provide annual public advice on sovereign digital policy.

**Parliamentary / Legislative Oversight**
Departments shall report to the relevant parliamentary or legislative committee annually on: the status of their Digital Dependency Inventory; any new strategic dependencies acquired in the preceding year; any breaches of open standards or exit rights requirements; and progress against sovereign infrastructure targets.

### International Cooperation

**Mutual Recognition of Open Standards**
The government shall actively work in international forums (ISO, W3C, IETF, UN bodies) to promote open standards that advance digital sovereignty for all jurisdictions, including developing countries where dependency on proprietary infrastructure is acute.

**Shared Infrastructure with Allies**
Bilateral and multilateral arrangements for shared sovereign digital infrastructure — common open source platforms, shared identity interoperability, joint procurement of green hosting meeting sovereignty standards — are consistent with and encouraged by this policy.

**Global South Solidarity**
Digital sovereignty policy for wealthy jurisdictions must acknowledge that the structural dependency problem is most acute in lower-income countries that have less bargaining power with global platforms, less technical capacity to develop alternatives, and fewer resources to manage transitions. International digital sovereignty policy should include support for capacity building, open source investment, and shared infrastructure accessible to lower-income jurisdictions.

---

## Worked Examples

### Example A: City Government Cloud Migration

A city government is renewing its core ICT infrastructure contract. Under this policy:

- **Dependency audit:** The city's Digital Dependency Inventory reveals that all citizen records, permitting data, and financial records are in a single vendor's proprietary cloud, with data in vendor-specific formats and no documented export capability.
- **Procurement decision:** The new contract requires: all data to be exportable in open formats (PostgreSQL dump, GeoJSON, CSV); a 12-month transition assistance commitment; no egress fees for data export; annual data portability testing. The city accepts a higher year-one cost for a supplier meeting these terms.
- **Outcome:** The city retains genuine exit rights. Two years later, when the vendor is acquired and prices increase 40%, the city migrates to a competing green hosting provider within six months using its documented export format.

### Example B: National Identity System

A national government is considering a digital identity system. Under this policy:

- **DSIA:** A Digital Sovereignty Impact Assessment evaluates three architectures: a centralised national database, a federated design using W3C DIDs, and a hybrid. The DSIA finds that the centralised model creates unacceptable single points of failure and foreign jurisdiction risk if hosted on US infrastructure.
- **Architecture decision:** The government selects the federated design, hosted on national green infrastructure, with an open source codebase released under EUPL (European Union Public Licence).
- **Outcome:** Citizens control their own credentials, no single entity holds complete identity records, and the system is inspectable by civil society.

---

## Real-World Examples

| Jurisdiction | Measure | Status |
|---|---|---|
| European Union | EU Data Act (2024) — data portability rights, switching rights for cloud services | Enacted |
| European Union | EU Cyber Resilience Act (2024) — open source, supply chain security | Enacted |
| France | Loi pour une République Numérique (2016) — open source preference for public sector | Enacted |
| Germany | Sovereign Tech Fund — government investment in open source digital infrastructure | Active |
| Barcelona, Spain | Barcelona Digital Sovereignty initiative — open source-first municipal ICT | Active |
| Estonia | X-Road open data exchange layer — sovereign, federated national digital infrastructure | Operational |
| European Union | European Cloud Certification Scheme (EUCS) — sovereignty-aware cloud certification | In development |
| Switzerland | Open Source Software obligation for federal administration (2024) | Enacted |
| India | Digital Public Infrastructure (DPI) framework — open stack national digital infrastructure | Operational |

---

## Gaps and Known Weaknesses

- **The definition of sovereignty is contested** — Digital sovereignty means different things to different actors: protecting citizen data from foreign access, reducing vendor dependency, building national technology champions, or asserting state control over information flows (including repressive censorship). This model aligns with the first two meanings; it does not endorse the latter two. The contested nature of the term requires careful use.
- **Global cloud consolidation** — The hyperscaler market (AWS, Azure, Google Cloud) is highly consolidated. Requiring data residency in a national cloud when national cloud alternatives do not exist forces a choice between sovereignty and operational capability. Sovereign cloud alternatives (Gaia-X, regional providers) are developing but not yet competitive in all service categories.
- **Open source is not automatically sovereign** — Open source software whose development is controlled by a single US-based foundation or company creates a different but real form of dependency. True sovereignty requires influence over governance, not just access to code.
- **Small states face structural disadvantages** — The sovereignty tools available to the EU (market scale, regulatory power, Gaia-X) are not available to small states. Shared regional sovereignty frameworks are underdeveloped.
- **Supply chain sovereignty** — Even fully open source software running on nationally owned servers depends on hardware supply chains dominated by a handful of manufacturers. Hardware-level sovereignty is beyond the scope of this model but is a genuine gap.
- **Indigenous data sovereignty** — The sovereignty frameworks developed by and for indigenous communities (CARE Principles, OCAP, Te Mana Raraunga) are separate from state digital sovereignty frameworks but often in tension with them. This model does not adequately address that relationship.

---

## Glossary

**Data portability:** The right to receive and transfer one's data in a machine-readable, open format.

**Digital dependency:** Reliance on a specific vendor, technology, or jurisdiction for a critical government function.

**Egress fee:** A charge levied by cloud providers for transferring data out of their service — a common lock-in mechanism.

**Federated architecture:** A design where control and data are distributed across multiple actors rather than held centrally by a single entity.

**Lock-in:** A condition where switching from a vendor or system is disproportionately costly or complex, in practice removing exit as a viable option.

**Open standard:** A technical standard that is publicly documented, royalty-free to implement, and governed without single-entity control.

**Source code escrow:** An arrangement where a third party holds source code with the right to release it to a customer under specified conditions.

**Sovereignty incident:** An event where dependency on a specific vendor, jurisdiction, or technology prevented a government from governing a critical function independently.

**Strategic dependency:** A dependency on a single vendor, format, or jurisdiction for a function sufficiently critical that its loss or disruption would materially impair government operations.

**US CLOUD Act:** US legislation (2018) requiring US-based companies to provide data to US law enforcement authorities, potentially regardless of where the data is stored.

---

## Contributing to This Domain

This policy model is a living document. Contributions especially welcome from people with expertise in:

- Open standards governance and implementation
- Cloud computing law and cross-border data transfer
- Indigenous Data Sovereignty
- Digital public infrastructure design
- National cybersecurity and sovereignty strategy
- Open source government policy
- International digital governance

Open an [Issue](https://github.com/mgifford/DigitalPolicies/issues) to propose changes or additions. See [CONTRIBUTING.md](https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md) for the contribution process.

---

*This policy model is published under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt this material for any purpose, including commercial use, provided you give appropriate credit.*
