---
title: "Right to Repair, Interoperability & E-Waste — Model Policy"
description: "Model policy language closing software loopholes that prevent repair, requiring spare parts and repair documentation, and holding producers responsible for e-waste."
---
# Right to Repair & Interoperability — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-04
> **Related domains:** [Data Centers & Environmental Sustainability](../../data-centers/full-model/), [Digital Sovereignty](../../digital-sovereignty/full-model/), [Open Source in Government](../../open-source-in-government/full-model/), [Algorithmic Accountability](../../algorithmic-accountability/full-model/)
> **Key sources:** EU Right to Repair Directive (2024), Canada Bill C-244 (2024), US Right to Repair state laws, EU Digital Markets Act (interoperability), FSFE Device Neutrality, EFF analysis

---

## Overview

The software in your phone, your tractor, your medical device, your car, and your server determines whether you can repair it, who can repair it, and whether you will be forced to buy a replacement when it breaks. Software-enabled locks — restrictions built into digital systems to prevent independent repair, modification, or interoperability — have transformed ownership into a temporary licence, concentrated maintenance markets in the hands of manufacturers, and created enormous volumes of unnecessary electronic waste.

Right to repair and interoperability are two sides of the same principle: **you should be able to fix what you own and move your data where you want it.** These are not technical preferences — they are essential conditions for digital sovereignty, consumer protection, and environmental sustainability.

### The Core Tension

**We want reliable, secure, and innovative digital products — but manufacturers' use of software locks to prevent independent repair and interoperability is not about security or innovation. It is about maintaining captive revenue streams at the expense of consumers, independent repair businesses, and the planet.**

### Scope

- [x] Municipal / local government (procurement policy, local repair ecosystem support)
- [x] Regional / state / provincial government (consumer protection, repair legislation)
- [x] National government (product regulation, IP exceptions, interoperability mandates)
- [x] Public sector procurement (hardware longevity, repairability requirements)

---

## Pillar 1: Principles

### Foundational Values

**1. Ownership is meaningful or it is nothing**
Purchasing a product should convey the right to use, modify, repair, and resell it. When software enables manufacturers to control what happens to a product after sale — through licence terms, digital locks, or denial of repair information — ownership has been hollowed out. Policy must restore meaningful ownership as the baseline.

**2. The right to repair is an environmental right**
Electronic waste is among the fastest-growing waste streams globally. Hardware that cannot be repaired must be replaced prematurely, consuming resources and generating waste. The right to repair is a climate policy as much as a consumer policy. Repairability must be treated as an environmental design requirement.

**3. Independent repair is a labour right**
Right to repair protections support independent repair businesses — disproportionately small, local enterprises — against market capture by manufacturer-controlled repair networks. The concentration of repair in authorised networks is a competition and labour issue.

**4. Interoperability is the infrastructure of a competitive market**
When digital systems cannot communicate across vendor boundaries, vendor lock-in is the result. Interoperability requirements — the obligation to publish and maintain open interfaces — are a precondition for meaningful competition, consumer choice, and data portability. Interoperability should be designed in, not negotiated case by case.

**5. Open source as the reference implementation**
Open standards for repair and interoperability should have open source reference implementations — demonstrating that the standard is achievable without proprietary dependencies and giving smaller vendors a starting point for compliance.

**6. Security cannot be a pretext for anti-competitive restriction**
"Security" is frequently invoked to justify software locks and interoperability restrictions that serve commercial rather than security purposes. Genuine security requirements should be specified, documented, and independently auditable. Blanket security claims that prevent repair or third-party software installation should be scrutinised.

### Equity Considerations

- **Low-income consumers** are most harmed by repair restrictions — unable to afford manufacturer repair costs, they are forced to buy replacements or go without. Right to repair is a poverty issue.
- **Rural and remote communities** often lack access to authorised repair networks. Independent repair access is particularly important where manufacturer-authorised repair is geographically unavailable.
- **Agricultural communities** — farmers' inability to repair GPS-enabled machinery during planting and harvest windows due to software locks has well-documented economic impacts. Agricultural right to repair is one of the most vivid illustrations of the problem.
- **Small businesses** — independent repair shops, healthcare device technicians, school IT staff — all face competitive disadvantage when manufacturers deny access to parts, tools, and repair information.
- **People with disabilities** — assistive technology is expensive, often only available through limited suppliers, and frequently impossible to repair independently. Right to repair for assistive technology is an accessibility issue.

### Environmental Considerations

The average smartphone is replaced every 2.5–3 years. The average laptop every 4–5 years. Most of this hardware is functional but unrepairable due to software restrictions, unavailability of parts, or lack of access to repair tools and manuals. Extending average device lifetimes by 1–2 years would substantially reduce the carbon and resource footprint of consumer electronics. The European Environment Agency estimates that extending product lifetimes is one of the highest-impact strategies for reducing ICT's environmental footprint.

---

## Pillar 2: Standards

### Mandatory Standards

> **Right to Access Repair Information**
> Manufacturers of products with digital elements sold or operated within this jurisdiction shall make available to product owners, independent repair professionals, and third parties: (a) repair manuals and service documentation sufficient to enable maintenance and repair; (b) diagnostic software and tools at fair and reasonable cost; (c) original equipment manufacturer (OEM) parts or equivalent, at fair and reasonable prices; and (d) software updates addressing defects and security vulnerabilities, for the expected useful lifetime of the product or a minimum of [5] years, whichever is longer. This information shall be available on commercially reasonable terms that do not discriminate between authorised and independent repair professionals.

*Rationale:* Access to repair information, tools, and parts is the foundation of the right to repair. The EU Right to Repair Directive (2024) and Canada's Bill C-244 establish this principle in legislation. The 5-year minimum aligns with the EU Cyber Resilience Act lifetime support requirement.

*Reference:* [EU Right to Repair Directive (2024/1799)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L1799); [Canada Bill C-244 (Royal Assent 2024)](https://www.parl.ca/DocumentViewer/en/44-1/bill/C-244/royal-assent); [EU Ecodesign Regulation spare parts requirements]

---

> **Software Repair Exception**
> It shall not be a violation of copyright, software licence terms, or anti-circumvention provisions for a product owner or a repair professional acting on their behalf to: (a) access, circumvent, or modify software controls for the purpose of diagnosing, maintaining, or repairing a product the owner lawfully owns; (b) install software updates, patches, or firmware necessary for repair; and (c) bypass digital locks that prevent access to hardware the owner owns, where such access is necessary for repair or maintenance. This exception applies to the product owner and persons they authorise, and does not extend to reproduction or redistribution of proprietary software.

*Rationale:* Canada's C-244 established this as the first national right-to-repair copyright exception, directly addressing the use of copyright law to prevent repair. The EU Right to Repair Directive similarly addresses software-based repair restrictions. This exception is essential because without it, the practical right to repair is frustrated even where manufacturers are required to provide information and parts.

---

> **No Software-Enabled Parts Pairing Restrictions**
> Manufacturers shall not use software mechanisms — including serialisation, parts pairing, or remote validation — to prevent or impair the function of a product when a genuine or equivalent third-party part is installed for repair purposes. Software may alert users that a third-party part has been installed, but may not disable, degrade, or restrict product function solely because a part was not supplied by the manufacturer.

*Rationale:* Parts pairing is the use of software to tie specific components to specific devices — meaning that even if you obtain the correct physical part, the device software prevents it from working unless it was supplied and "paired" by the manufacturer. This has been documented in iPhones (face ID, batteries), farm equipment, medical devices, and vehicles. The EU's Right to Repair Directive addresses this; several US states have enacted specific anti-parts-pairing provisions.

---

> **Interoperability by Design**
> Digital services, platforms, and applications that serve more than [X] users in this jurisdiction, or that are designated as essential digital infrastructure, shall provide documented, publicly accessible application programming interfaces (APIs) that enable: (a) users to export their data in a standard, machine-readable format at any time; (b) third-party applications to read and write user data with user consent; and (c) interoperation with comparable services from other providers. APIs shall be published under open standards, shall not impose discriminatory financial terms on open source implementations, and shall be maintained for a minimum of [24] months after any breaking change with at least [12] months notice of deprecation.

*Rationale:* This is the "interoperability by design" principle advocated by FSFE and embedded (imperfectly) in the EU Digital Markets Act. The DMA's approach has been criticised because it creates a request-based process controlled by the gatekeeper. This provision establishes the obligation proactively, without requiring an individual request, and explicitly protects open source implementations.

*Reference:* [EU Digital Markets Act (DMA)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R1925); [FSFE Device Neutrality](https://fsfe.org/activities/deviceneutrality/); [EFF on interoperability](https://www.eff.org/deeplinks/2024/01/what-competition-reform-could-look-like)

---

> **Device Neutrality**
> Device owners shall have the right to install any lawful software on hardware they own, including: (a) alternative operating systems; (b) alternative application stores; (c) applications not distributed through the manufacturer's official channel; and (d) security and privacy tools of their choice. Manufacturers may not use technical or legal means to prevent software installation on owned devices. Manufacturers may warn users of security implications of software from unverified sources, but may not block installation or impose financial penalties for exercising this right.

*Rationale:* Device neutrality — the right to full software control over your own hardware — is a concept advanced by FSFE and partially implemented in the EU DMA for designated gatekeeper platforms. Extending this to all hardware, not just gatekeeper platforms, is the more ambitious and comprehensive position. This is aspirational in many jurisdictions but should be the policy goal.

---

> **Repairability Scores in Public Procurement**
> Public bodies procuring hardware shall require vendors to provide a repairability score based on a standardised assessment covering: (a) availability of spare parts and documentation; (b) software repair exceptions; (c) disassembly difficulty; (d) anti-repair software restrictions; and (e) manufacturer's parts pairing policy. Procurement shall give preferential weight to products with higher repairability scores. Products scoring below a minimum threshold shall not be eligible for procurement.

*Rationale:* France introduced a mandatory "repairability index" (indice de réparabilité) in 2021, later evolving into a "durability index" (indice de durabilité). This is the first legally mandated product repairability scoring system. It gives consumers and public buyers comparable information about repairability and creates market incentives for more repairable design.

*Reference:* [France Repairability Index](https://www.indicereparabilite.fr/en/)

---

### Aspirational Standards

> **Extended Producer Responsibility for End-of-Life**
> Manufacturers who sell products in this jurisdiction should bear responsibility for end-of-life collection, refurbishment, and recycling. Products that are unrepairable due to design choices should face higher producer responsibility levies than products with high repairability scores.

---

### Standards Cross-Reference

| Law / Standard | Jurisdiction | Year | Notes |
|---|---|---|---|
| Right to Repair Directive (2024/1799) | EU | 2024 | Consumer products focus |
| Bill C-244 | Canada | 2024 | Copyright repair exception |
| Digital Markets Act (DMA) | EU | 2022 | Interoperability for gatekeepers |
| France Repairability/Durability Index | France | 2021/2024 | Consumer scoring |
| EU Ecodesign Regulation | EU | Ongoing | Spare parts, lifetime requirements |
| EU Cyber Resilience Act | EU | 2024 | 5-year software support |

---

## Pillar 3: Implementation

### Procurement Requirements

> **Repairability and Longevity Procurement Clause**
> All solicitations for hardware products shall include: (a) a minimum [5]-year commitment for spare parts availability and repair documentation; (b) disclosure of the product's repairability score or equivalent; (c) disclosure of any software-based repair restrictions, including parts pairing; (d) commitment that software updates will not introduce new repair restrictions during the contracted support period; and (e) disclosure of the manufacturer's policy on third-party repair. Vendors shall certify these commitments in writing. Non-disclosure shall be grounds for disqualification.

---

### Transition and Timeline

| Milestone | Timeframe from policy adoption |
|---|---|
| Repairability disclosure required in new procurement | Immediate |
| Software repair exception in effect | Immediate (requires IP law amendment) |
| Parts pairing prohibition for newly sold products | 12 months |
| API interoperability requirements for large platforms | 18 months |
| Device neutrality requirements for consumer devices | 24 months |
| Repairability scoring published for consumer devices | 24 months |
| Full implementation review | 36 months |

### Reporting and Transparency

> **Annual Repairability Report**
> Each manufacturer selling more than [X] units annually in this jurisdiction shall publish an annual Repairability Report covering: (a) parts availability and pricing; (b) documentation availability; (c) proportion of devices repaired vs. replaced under warranty; (d) end-of-life collection and recycling volumes; and (e) any changes to software repair restrictions in the reporting period.

---

## Pillar 4: Governance

### Oversight Body

> **Designated Enforcement Authority**
> The [consumer protection agency / competition authority] shall be designated as the primary enforcement body for this policy. It shall have authority to: investigate complaints from consumers and independent repair professionals; issue compliance notices; impose financial penalties; and publish annual enforcement reports.

### Community Representation

> **Right to Repair Advisory Panel**
> The oversight authority shall establish an advisory panel including: (a) independent repair businesses; (b) consumer organisations; (c) environmental organisations; (d) agricultural sector representatives; (e) assistive technology users and disability organisations; and (f) open source software community representatives. The panel shall advise on enforcement priorities, emerging evasion techniques, and policy gaps.

### Audit and Review

> **Policy Review**
> This policy shall be reviewed every [two] years, with particular attention to: software evasion techniques that circumvent repair rights (e.g., new forms of parts pairing); emerging product categories not covered; and alignment with EU Right to Repair Directive and international developments.

---

## Real-World Examples

### EU Right to Repair Directive (2024/1799)
**Enacted:** May 2024
**Covers:** Consumer products including smartphones, laptops, tablets, and white goods
**Key provisions:** Manufacturers must offer repair; independent repair cannot be more expensive than replacement under warranty; spare parts and manuals must be available; member states must set up repair information platforms
**What's genuinely good:** First EU-wide mandate that manufacturers offer repair as an alternative to replacement; repair platform creates transparency
**Critique:** Covers a limited product list — many categories (vehicles, farm equipment, medical devices, professional equipment) are excluded; does not directly address software-enabled repair restrictions as comprehensively as Canada's C-244

---

### Canada Bill C-244
**Royal Assent:** November 2024
**What it does:** Creates a copyright exception specifically for repair — removing the legal barrier that manufacturers used to prevent software circumvention for repair purposes
**Why it matters:** The first national-level copyright repair exception. Before C-244, circumventing digital locks even to repair your own property was a potential copyright violation in Canada
**Limitation:** C-244 addresses the copyright barrier but does not mandate that manufacturers provide parts, tools, or documentation

---

### France Repairability Index (Indice de réparabilité)
**In force:** 2021 (repairability); evolving to durability index
**Covers:** Consumer electronics including smartphones, laptops, TVs, washing machines
**What it does:** Manufacturers must display a repairability score (0–10) based on documentation availability, disassembly ease, spare parts availability, and software repair support
**Impact:** Created market pressure for more repairable design; France had highest European uptake of repair services in 2023
**What's worked:** Consumer awareness improved; some manufacturers improved repairability to achieve higher scores
**Critique:** Scoring is self-reported; limited independent verification; does not cover all product categories

---

### EU Digital Markets Act — Interoperability (2022)
**In force:** 2022/2024 (enforcement)
**Covers:** Designated gatekeeper platforms (Alphabet, Apple, Meta, Microsoft, Amazon, ByteDance)
**Key provision:** Messaging interoperability — any messaging service can demand interoperability from designated gatekeepers
**What's working:** Apple and Meta have begun implementing messaging interoperability
**Critique per civil society:** Request-based model gives gatekeepers control over implementation; Apple's process has been opaque and delayed open source projects; FSFE argues this should be "by design" not "by request"

---

### Right to Repair for Farm Equipment — US States
**Multiple states 2023–2025** (Colorado, Minnesota, New York, California)
**Covers:** Agricultural equipment
**Context:** John Deere's software restrictions prevented farmers from repairing GPS-enabled equipment during planting seasons — a well-documented cause of farm productivity loss
**Model:** Minnesota's 2023 law is considered the strongest US state right to repair law for agricultural equipment; requires manufacturers to provide diagnostic tools, parts, manuals
**Significance:** Agricultural right to repair demonstrates the human consequences of software locks most vividly and has broad bipartisan political support

---

## E-Waste: The End of the Repair Failure Chain

When repair fails — when products cannot be fixed, parts are unavailable, or software locks prevent servicing — hardware becomes waste. E-waste is not a separate issue from right to repair: it is what happens when repair policy fails, at global scale.

### The Scale

The world generated 62 million tonnes of e-waste in 2022 — an 82% increase since 2010. Less than 22% was formally collected and recycled. In least developed countries, formal e-waste collection is under 0.2%.

### The Justice Dimension

E-waste from wealthy countries is systematically exported to the Global South. Ghana and Nigeria alone received 77% of England and Wales's e-waste exports in 2019. Agbogbloshie in Ghana processes approximately 215,000 tonnes of e-waste annually — much of it imported. In many receiving countries, informal workers (disproportionately women and children) dismantle e-waste by hand or burn it in open pits to extract metals, exposing themselves to lead, mercury, cadmium, and other toxins.

This is not merely a recycling problem — it is a form of environmental injustice that right to repair directly addresses: extending product lifetimes reduces the volume of waste at source, before it enters any disposal chain.

### Key Policy Frameworks

> **Extended Producer Responsibility (EPR) Requirement**
> Manufacturers selling products in this jurisdiction shall be financially responsible for the collection, safe processing, and recycling of their products at end of life. EPR schemes shall: (a) be financed by producers, not taxpayers; (b) require certified, environmentally sound processing — not transfer of waste to unregulated exporters; (c) give priority to refurbishment and reuse before recycling; (d) comply with Basel Convention requirements on transboundary e-waste movement; and (e) publish annual reports on volumes collected, processed, refurbished, and recycled, with disposition destination for each stream.

*Rationale:* The EU WEEE Directive (Waste Electrical and Electronic Equipment, 2002/amended 2012) established EPR for electronics in Europe. The Basel Convention's 2022 amendments, in force January 2025, now require prior written consent for international shipments of e-waste — the first time non-hazardous e-waste is controlled under the Convention. EPR without Basel compliance allows manufacturers to meet paper targets by exporting waste to countries with weaker capacity.

> **Prohibition on Disguised E-Waste Export**
> The export of used electronics shall be subject to the prior written consent requirements of the Basel Convention. Products exported as "used" shall be accompanied by documentation demonstrating functional testing and economic value. Inspections at export points shall verify that exported electronics are functional, not waste misclassified for evasion of export controls. Violations shall carry financial penalties sufficient to remove any economic incentive for non-compliance.

> **Repairability as an E-Waste Prevention Strategy**
> Public bodies and EPR schemes shall track and report: (a) the proportion of end-of-life products that were repaired or refurbished versus recycled or disposed of; (b) average product lifetime at end-of-life collection; and (c) barriers to repair identified at end-of-life. This data shall inform future repairability requirements and EPR levy structures.

### Global South Equity Note

Policies addressing e-waste must not simply shift harm — they must reduce it. Restrictions on e-waste export are necessary but not sufficient if they do not address: (a) the volume of waste generated in wealthy countries; (b) the capacity needs of developing countries to manage e-waste they do generate domestically; and (c) the economic models that make informal e-waste processing the only viable livelihood for workers in receiving countries. Right to repair, by reducing waste at source, is among the most effective upstream e-waste policies available.

---

## Gaps and Known Weaknesses

- **Medical devices** — Right to repair for medical devices (insulin pumps, ventilators, hearing aids) is complicated by legitimate safety concerns. The interplay between repair rights and medical device safety regulation needs dedicated model language.
- **Vehicles** — Software-controlled vehicles are not fully covered by most existing right to repair frameworks. The EU Right to Repair Directive excludes vehicles; US laws have had limited success here.
- **Proprietary formats as a repair barrier** — Even where legal repair rights exist, proprietary file formats and calibration databases prevent practical repair. Model language on format openness as a repair requirement is underdeveloped.
- **Interoperability for non-gatekeeper platforms** — The DMA's interoperability requirements only apply to designated gatekeepers. Smaller platforms operating in specific sectors can still impose lock-in. Sector-specific interoperability requirements (health data, government services, banking) need separate model language.

---

## Worked Examples

### Example A: Municipal Device Procurement

A city government procures 2,000 laptops for staff over a 4-year refresh cycle. Under this policy:

- **Procurement phase:** The city's tender requires vendors to provide: a repairability score for each model bid; disclosure of any parts-pairing restrictions; a 5-year spare parts availability commitment; and confirmation that software updates will not introduce new repair restrictions.
- **Evaluation:** Two vendors respond. One offers devices with iFixit repairability scores of 7/10 and 8/10 respectively, no parts pairing, and 6-year parts availability. The other offers 4/10 and 5/10 scores with parts pairing on batteries and screens. The first vendor wins on quality criteria despite a 4% higher unit cost.
- **Outcome:** Over four years, the city repairs rather than replaces 340 devices that would previously have been written off. Estimated saving: €180,000. Estimated e-waste avoided: 680 kg.

### Example B: Agricultural Right to Repair Complaint

A farming cooperative in a remote region operates 24 GPS-enabled tractors from a single manufacturer. Their nearest authorised repair dealer is 200km away. Under this policy:

- **Complaint:** During spring planting, three tractors develop a software fault that prevents GPS operation. The authorised dealer cannot attend for 11 days. An independent agricultural engineer can fix the fault but needs diagnostic software.
- **Enforcement:** The cooperative files a complaint with the designated enforcement authority. The authority issues an urgent compliance notice requiring the manufacturer to provide diagnostic access within 48 hours.
- **Outcome:** The independent engineer diagnoses and resolves the fault within 6 hours of gaining diagnostic access. The manufacturer faces a €15,000 fine for the repair access denial and is added to the authority's published compliance watchlist.

### Example C: Messaging Interoperability for a Public Service Platform

A regional government has developed a citizen engagement platform used by 400,000 residents. A community organisation wants to integrate it with their open source case management system to reduce re-entry of data. Under this policy:

- **API requirement:** The platform's developer (a contracted vendor) is required to provide a documented, publicly accessible API under the interoperability provision.
- **Community benefit:** The community organisation integrates their system within 3 months, eliminating duplicate data entry for 1,200 case workers.
- **Outcome:** The API is adopted by six other organisations. The vendor, initially resistant, finds that the open API becomes a selling point in other jurisdictions.

---

## Glossary

**Anti-circumvention:** Legal provisions that prohibit bypassing digital locks (DRM), sometimes invoked to prevent legitimate repair.

**Authorised repair network:** Repair providers officially approved by the manufacturer, often the only channel with access to parts, tools, and diagnostic software.

**Basel Convention:** An international treaty (1989) controlling transboundary movement of hazardous wastes; 2022 amendments extended coverage to e-waste.

**Calibration lock:** A software mechanism that requires manufacturer-supplied tools to recalibrate a component after replacement, preventing independent repair even when parts are available.

**Device neutrality:** The right of device owners to install any lawful software on hardware they own, including alternative operating systems and application stores.

**DRM (Digital Rights Management):** Technical protection measures applied to digital content or software, sometimes used to prevent repair or modification.

**E-waste:** Electronic waste — discarded electronic equipment including devices, cables, and components.

**EPR (Extended Producer Responsibility):** A policy approach that makes manufacturers financially responsible for end-of-life collection and recycling.

**Firmware:** Low-level software embedded in hardware that controls basic device functions.

**Gatekeeper:** Under the EU Digital Markets Act, a company designated as controlling a core platform service that must comply with interoperability and other obligations.

**Indice de réparabilité:** France's mandatory repairability index, scoring consumer electronics 0–10.

**Interoperability:** The ability of different systems and software to communicate and work together.

**Parts pairing:** A software mechanism that ties specific hardware components to specific devices, preventing third-party parts from functioning correctly.

**Right to repair:** The legal right of product owners to repair, have repaired, and access tools and documentation for repair of products they own.

**WEEE Directive:** EU Waste Electrical and Electronic Equipment Directive — establishes producer responsibility for electronics recycling.

---

## Contributing to This Domain

This policy model is a living document. The known gaps (medical devices, vehicles, proprietary calibration databases, non-gatekeeper platform interoperability) are priorities for development. Contributions especially welcome from people with expertise in:

- Medical device regulation and right to repair
- Agricultural technology and farm equipment law
- Automotive software and OBD (on-board diagnostics) access
- EU Digital Markets Act implementation
- EPR schemes and e-waste policy
- Consumer protection law
- Open source software and interoperability standards

Open an [Issue](https://github.com/mgifford/DigitalPolicies/issues) to propose changes or additions. See [CONTRIBUTING.md](https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md) for the contribution process.

---

*This policy model is published under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt this material for any purpose, including commercial use, provided you give appropriate credit.*

---

## Changelog

| Version | Date | Summary |
|---|---|---|
| 0.2 | 2026-04-04 | Added worked examples, glossary, contributing section; updated Digital Sovereignty link |
| 0.1 | 2026-04-04 | Initial draft |
