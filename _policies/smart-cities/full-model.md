---
---
# Smart Cities & Privacy — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-05
> **Maintainers:** Open Digital Policies community
> **Related domains:** [Digital Accessibility](../accessibility/full-model/), [AI Adoption](../ai-adoption/full-model/), [Algorithmic Accountability](../algorithmic-accountability/full-model/), [Digital Sovereignty](../digital-sovereignty/full-model/)

---

## Overview

"Smart city" technology — cameras, environmental sensors, connected street furniture, facial recognition, predictive policing tools, mobility tracking, and automated infrastructure management — is being deployed in cities worldwide, often faster than governance frameworks can respond. The technology can genuinely improve public services, reduce energy consumption, and make streets safer. It can also enable mass surveillance at a scale and intimacy previously impossible, often with minimal democratic deliberation, weak data protections, and no meaningful community consent.

The defining challenge of smart city governance is not whether to use technology, but under what conditions. Communities have a right to understand what data is being collected about them in public spaces, who has access to it, how long it is kept, what decisions it informs, and how they can challenge those decisions. Surveillance infrastructure built for one purpose — traffic management, say — routinely expands to other uses. Purpose limitation and community consent are not obstacles to smart city innovation; they are the conditions that make it trustworthy.

### The Core Tension

We want cities that work better — with less energy, safer streets, faster emergency response, more efficient transit — without creating surveillance infrastructure that undermines the right to move freely through public space without being tracked, scored, or profiled.

### Scope

- [x] Municipal / local government
- [x] Regional / state / provincial government
- [ ] National government (may adopt as framework for municipal guidance)
- [x] Public sector procurement
- [ ] Regulated industry
- [ ] Other: ___________

---

## Pillar 1: Principles

### Foundational Values

**1. Public Space Is Not a Surveillance Zone**
The ability to move through public space without being tracked, identified, or profiled is fundamental to freedom of movement, freedom of assembly, and freedom of expression. Smart city technology must not convert public space into a panopticon. The default is the least intrusive means of achieving a legitimate public goal.

**2. Data Minimisation as Design Requirement**
Smart city systems must collect the minimum data necessary to achieve their stated purpose. Aggregated, anonymised, or ephemeral data is preferable to individual-level, identified, or persistent data. Systems that cannot achieve their purpose without collecting personal data must justify that necessity — not assume it.

**3. Purpose Limitation Is Not Optional**
Data collected for traffic management may not be repurposed for law enforcement. Data collected for environmental monitoring may not be combined with facial recognition databases. Purpose limitation must be enforced technically (through architecture) and legally (through procurement contracts), not just stated in policy.

**4. Community Consent Is a Prerequisite, Not an Afterthought**
Communities should not discover surveillance infrastructure after it has been installed. Meaningful community engagement — including with communities most likely to be harmed by surveillance — must occur before deployment. Engagement is not notification; it requires genuine deliberation and the possibility that the community says no.

**5. Proportionality: The Benefit Must Be Real and the Data Must Be Necessary**
Smart city deployments must demonstrate that the claimed benefit is real, that data collection is necessary to achieve it, and that less intrusive alternatives were genuinely considered. "Improving efficiency" is not a sufficient justification for collecting biometric or location data about residents.

**6. Special Scrutiny for Biometric and Location Data**
Biometric data (facial geometry, gait, voice) and persistent location data are inherently sensitive. They reveal identity, social connections, religious practice, political affiliation, and intimate relationships. Their collection requires heightened justification, strict purpose limitation, and should be presumptively prohibited in the absence of a compelling public interest that cannot be achieved otherwise.

**7. Accessibility and Equity Must Be Built In**
Smart city technology frequently fails disabled people, older adults, and low-income residents — or is deployed first in affluent neighbourhoods while disadvantaged communities bear the environmental sensors but not the services. Equity impact assessment must precede deployment.

### Equity Considerations

- **Communities of colour** — Facial recognition has documented higher error rates for people with darker skin tones; predictive policing systems encode historical patterns of over-policing. Communities of colour bear disproportionate risk from surveillance technology and deserve explicit protection.
- **Migrants and undocumented residents** — Smart city data can become a tool for immigration enforcement beyond its stated purpose. Communities with undocumented residents require particular attention to purpose limitation and data-sharing restrictions.
- **People with disabilities** — Smart city technology may exclude disabled people through inaccessible interfaces or may surveil them more intensively through accessibility-related infrastructure. Accessibility must be a core design requirement.
- **Low-income communities** — Smart city pilots are frequently conducted in low-income communities without their meaningful consent, treating residents as subjects rather than beneficiaries.
- **Activists and journalists** — Location tracking and facial recognition can chill the exercise of rights to protest, assembly, and press freedom even without targeted enforcement.

### Environmental Considerations

Smart city sensor networks, compute infrastructure, and data storage have material energy and hardware footprints. Connected streetlights and adaptive traffic signals can reduce energy consumption — but server infrastructure, always-on sensors, and AI processing can offset those gains. Smart city procurements must include lifecycle energy assessment, hardware longevity requirements, and e-waste obligations. See [Data Centers model](../data-centers/full-model/).

---

## Pillar 2: Standards

### Mandatory Standards

> **Standard 1: Prohibited Smart City Applications**
> The following smart city applications are prohibited regardless of claimed efficiency or safety benefits:
>
> (a) Continuous real-time facial recognition or biometric identification in publicly accessible spaces, except for the investigation of specific serious crimes with prior judicial authorisation, strict time and geographic limits, and mandatory reporting to the oversight body;
>
> (b) Persistent tracking of individuals' movements through public space without their knowledge or meaningful consent (including aggregated tracking that can be de-anonymised);
>
> (c) Social scoring or behaviour prediction systems that affect access to public spaces, services, or rights;
>
> (d) Emotion recognition in public spaces for any purpose;
>
> (e) Predictive policing systems that generate individual or area-level crime predictions used to determine police deployment or individual stops;
>
> (f) Automated licence plate recognition data shared with non-law-enforcement agencies or retained for more than [30] days without judicial authorisation;
>
> (g) Data sharing from city systems with federal immigration enforcement agencies without judicial process.

*Rationale: EU AI Act Article 5 prohibits (a), (c), (d), and forms of (e). San Francisco, Oakland, Boston, and other US cities have enacted facial recognition bans for city departments. Portland OR enacted the most comprehensive local facial recognition ban in the US (2020), covering both city agencies and private entities in public accommodations. NYC Local Law 144 (2021) addresses automated employment tools. The prohibited list above draws on these enacted models.*

*Reference: EU AI Act Article 5; [San Francisco Ordinance 103-19](https://sfbos.org/sites/default/files/o0103-19.pdf); [Portland OR Ordinance 190114](https://www.portland.gov/sites/default/files/2020/190114.pdf); [ACLU Smart Cities Principles](https://www.aclu.org/report/dawn-robot-surveillance)*

---

> **Standard 2: Smart City Data Inventory and Register**
> Prior to deploying any smart city technology, the procuring body must publish a Smart City Data Register entry that includes:
>
> (a) The technology type, vendor, and system description;
>
> (b) The specific data collected, including whether it is biometric, location-based, or individually identifiable;
>
> (c) The stated purpose and the specific public benefit to be achieved;
>
> (d) The legal basis for data collection;
>
> (e) Data retention period and deletion schedule;
>
> (f) Access controls: who within the city may access the data, and under what conditions;
>
> (g) Data sharing: a list of external agencies or bodies with any access to the data, including the legal basis for sharing;
>
> (h) A plain-language community summary accessible to residents without technical or legal background.
>
> The register must be updated within 30 days of any material change and must be publicly accessible online.

*Rationale: Seattle's Surveillance Ordinance (CB 119501, 2017) requires a Surveillance Impact Report before acquiring surveillance technology and annual reviews. Nashville, Nashville, Durham, and Nashville have similar ordinances. The register requirement here extends to all smart city data collection, not just technologies classified as "surveillance."*

*Reference: [Seattle Surveillance Ordinance](https://seattle.legistar.com/LegislationDetail.aspx?ID=3330606); [ACLU Community Control Over Police Surveillance (CCOPS) model ordinance](https://www.aclu.org/legislative-model-government-surveillance)*

---

> **Standard 3: Mandatory Community Engagement Before Deployment**
> Before deploying smart city technology that collects personal, location, or biometric data, the procuring body must:
>
> (a) Conduct a minimum [60]-day public comment period with accessible materials in the primary languages of the affected community;
>
> (b) Hold at least [two] public hearings — including at least one in the affected neighbourhood during evening hours accessible to working residents;
>
> (c) Conduct targeted engagement with communities most likely to be disproportionately affected;
>
> (d) Publish a community engagement summary and explain how input was considered in the decision;
>
> (e) For biometric or persistent location data systems: require explicit [council / board / assembly] approval, not delegated procurement authority.

---

> **Standard 4: Data Retention and Deletion**
> Smart city systems shall implement technical controls enforcing the following retention limits:
>
> (a) Environmental and aggregated data (traffic counts, air quality, pedestrian density): [5] years maximum;
>
> (b) Individually identifiable location data: [72] hours unless subject to active investigation with documented basis;
>
> (c) Biometric data: [24] hours unless subject to active investigation with prior judicial authorisation;
>
> (d) Incident-related data (emergency response, reported crime): [3] years maximum;
>
> (e) All data must be deleted within the applicable period with cryptographic verification of deletion available to the oversight body upon request.

---

> **Standard 5: Procurement Requirements**
> Smart city technology procurement shall require:
>
> (a) The vendor to disclose all data flows, including to the vendor's own systems, cloud infrastructure, and third parties;
>
> (b) No data collected by city-procured technology may be accessed, retained, or analysed by the vendor without specific authorisation by the city and disclosure in the Data Register;
>
> (c) Source code for systems making automated decisions about individuals must be available for audit by the city's technical oversight body;
>
> (d) Contracts must include a right to audit and a right to terminate without penalty if the system is found to violate this policy;
>
> (e) Lifecycle energy consumption and hardware end-of-life obligations must be specified.

---

### Aspirational Standards

> **Aspirational Standard 1: Community Data Trusts**
> Cities should explore governance models under which smart city data is held in a community data trust — a legal structure ensuring that the data is governed in the community's interest, with elected or selected trustees, and that the data may only be used for purposes approved by the trust. Barcelona's City Data Exchange and Amsterdam's data governance work provide reference models.

> **Aspirational Standard 2: Open Source Smart City Infrastructure**
> Where cities develop or commission custom smart city software, they should release it as open source to enable peer city reuse, independent audit, and community scrutiny. See [Open Source in Government model](../open-source-in-government/full-model/).

---

### Standards Cross-Reference

| Standard | Body | Version | Notes |
|---|---|---|---|
| EU AI Act | European Parliament | 2024/1689 | Prohibited biometric uses |
| GDPR | EU | 2016/679 | Data minimisation, purpose limitation, retention |
| EU Data Governance Act | EU | 2022/868 | Data sharing, data altruism, public data spaces |
| Seattle Surveillance Ordinance | City of Seattle | 2017 | Surveillance Impact Report model |
| ACLU CCOPS Model | ACLU | 2021 | Community control over surveillance technology |
| UN Special Rapporteur on Privacy | UN HRC | 2019, 2021 | Biometric surveillance and privacy in public space |

---

## Pillar 3: Implementation

### Procurement Requirements

> **Procurement Clause A: Privacy Impact Assessment**
> A Privacy Impact Assessment (PIA) shall be completed and published before any smart city technology procurement. The PIA must assess risks under GDPR (or equivalent), identify data minimisation measures, document purpose limitation controls, and identify residual risks. The PIA must be reviewed by the designated privacy authority before procurement.

> **Procurement Clause B: Algorithmic Accountability Integration**
> Any smart city system that makes automated recommendations or decisions affecting individuals must comply with the [Algorithmic Accountability full model](../algorithmic-accountability/full-model/) in addition to this policy.

> **Procurement Clause C: Accessibility Requirement**
> All resident-facing smart city interfaces — kiosks, apps, signage — must conform to WCAG 2.2 AA. This requirement applies to the full user journey, not only the digital interface. See [Digital Accessibility model](../accessibility/full-model/).

---

### Transition and Timeline

| Milestone | Timeframe from adoption |
|---|---|
| Smart City Data Register established | 3 months |
| Audit of existing smart city deployments against prohibited applications list | 6 months |
| Community engagement protocol published | 3 months |
| All existing systems registered and compliant with data retention requirements | 18 months |
| Prohibited systems decommissioned or replaced | 24 months |
| Independent audit of Register completeness | Annual |

### Enforcement

> **Enforcement Clause**
> The designated privacy or oversight body may: (a) inspect smart city deployments for Register completeness and accuracy; (b) order suspension of any system found to be in a prohibited category or operating outside its registered purposes; (c) impose administrative penalties for failure to register, false declarations, or prohibited data sharing; (d) receive complaints from residents, civil society, and journalists. Whistleblower protection applies to city employees who report non-compliant deployments.

---

## Pillar 4: Governance

### Oversight Body

> **Privacy and Surveillance Oversight Board**
> The city shall establish or designate an independent Privacy and Surveillance Oversight Board with: technical expertise in data systems and surveillance technology; legal expertise in privacy, civil rights, and administrative law; and community representation including organisations representing communities most affected by surveillance. The Board must approve all biometric data collection and must review the Smart City Data Register annually. Board members shall not hold financial interests in smart city vendors.

### Community Representation

> **Community Advisory Committee**
> The Oversight Board shall be supported by a Community Advisory Committee with reserved seats for: civil liberties organisations; disability advocacy groups; representatives from communities of colour; immigrant and refugee advocacy organisations; housing and tenant rights groups; and neighbourhood associations from areas with high smart city deployment density. The Committee shall have standing to initiate reviews of registered systems and to refer potential violations to the Board.

### Audit and Review

> **Annual Independent Audit**
> The Oversight Board shall commission an independent technical audit of the Smart City Data Register annually, verifying that: all deployed systems are registered; data retention is enforced technically; data sharing matches Register declarations; and no prohibited systems are in operation. Audit results shall be published.

> **Policy Review**
> This policy shall be reviewed every [two] years given the pace of technology change. Reviews must include assessment of whether prohibited applications list requires updating, whether new data types require additional protection, and whether enforcement has produced measurable change.

---

## Real-World Examples

### San Francisco — Surveillance Technology Ordinance
**Enacted:** 2019 (Ordinance 103-19)
**Type:** City ordinance
**Link:** https://sfbos.org/sites/default/files/o0103-19.pdf
**Summary:** Requires Board of Supervisors approval for any city agency to acquire surveillance technology. Created the first US city ban on facial recognition by city agencies. Subsequent amendments extended the framework. San Francisco's approach — requiring legislative approval for each acquisition — is the strongest democratic check model available at city level. Community critique: loophole for technologies acquired by police through federal programs; enforcement capacity limited.

---

### Portland, Oregon — Facial Recognition Bans
**Enacted:** 2020 (two ordinances)
**Type:** City ordinances
**Summary:** Portland enacted two facial recognition ordinances: one banning city agency use (modelled on San Francisco), and a second banning private entity use of facial recognition in public accommodations — the most comprehensive local prohibition in the US. The private entity ban is notable: it extends beyond government to retailers, landlords, and employers operating in public spaces. Community critique: enforcement of the private entity ban is difficult without a dedicated enforcement body.

---

### Amsterdam — Responsible Sensing Lab
**Active:** 2019–present
**Type:** Municipal programme
**Link:** https://www.amsterdam.nl/en/policy/digitization/responsible-sensing-lab/
**Summary:** Amsterdam's Responsible Sensing Lab works with neighbourhoods to map sensor deployments, develop community consent processes, and publish open data from sensors. The city maintains a public register of sensors in the city — a practical model for the Data Register requirement above. Amsterdam's approach to community co-design (not just consultation) represents the participation standard this policy aims for.

---

### Toronto — Sidewalk Labs Waterfront Withdrawal (Cautionary Example)
**Timeline:** 2017–2020
**Summary:** Alphabet subsidiary Sidewalk Labs proposed a "smart city from the internet up" on Toronto's waterfront, offering significant investment in exchange for data rights over a major urban development. After three years of community opposition — centred on data governance, privacy, and the transfer of public planning authority to a private corporation — the project was cancelled in May 2020 citing "unprecedented economic uncertainty" (though community opposition was a major factor). The Toronto case is the defining cautionary example of what happens when smart city development prioritises corporate data interests over community governance. The [Sidewalk Toronto Data Governance Proposal](https://sidewalktoronto.ca/) and the work of the [Waterfront Toronto Digital Strategy Advisory Panel](https://www.waterfrontoronto.ca/our-work/transforming-our-waterfront/quayside/digital-strategy) provide detailed reference material.

---

### Barcelona — Superblocks and Data Sovereignty
**Active:** 2016–present
**Type:** Municipal programme
**Summary:** Barcelona's Superblocks programme redesigns streets for pedestrians and cyclists using sensor data for monitoring. Critically, Barcelona's Digital City Plan (2016) established city data sovereignty principles — the city retains data ownership, vendors cannot resell city data, and open standards are required. Barcelona also pioneered the use of distributed data infrastructure (FIWARE) to avoid vendor lock-in. Barcelona's approach demonstrates that smart city benefits can be achieved alongside strong data sovereignty.

*Reference: [Barcelona Digital City Plan](https://ajuntament.barcelona.cat/digital/en/digital-innovation/data-driven-city-management/data-sovereignty)*

---

## Gaps and Known Weaknesses

- **IoT device security** — Smart city infrastructure is frequently targeted by cyberattacks; insecure IoT devices create vulnerabilities not just for data, but for physical infrastructure. This model does not address cybersecurity requirements for smart city hardware.
- **Private smart city developments** — Many "smart city" deployments occur on private land (commercial developments, residential estates) outside the reach of city procurement policy. The Portland private entity ban model provides a partial response.
- **Aggregation risk** — Data that is individually harmless (e.g., foot traffic counts) can be combined across sources to re-identify individuals. The model addresses this in purpose limitation and retention requirements, but technical enforcement of aggregation limits is not yet standard practice.
- **Legacy systems** — Many cities have existing surveillance infrastructure deployed before this framework. The transition timeline requirement addresses this, but decommissioning entrenched systems faces significant political and contractual obstacles.
- **National preemption** — In some jurisdictions, national governments may preempt local smart city governance. This is particularly relevant where national security or policing arguments are used to override local data minimisation rules.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| [AI Adoption](../ai-adoption/full-model/) | Smart city AI systems (predictive policing, traffic AI) must comply with AI Adoption governance requirements |
| [Algorithmic Accountability](../algorithmic-accountability/full-model/) | Automated smart city decision systems require bias auditing and individual rights to challenge |
| [Digital Accessibility](../accessibility/full-model/) | All resident-facing smart city interfaces must meet accessibility standards |
| [Digital Sovereignty](../digital-sovereignty/full-model/) | Smart city data sovereignty, vendor lock-in, and exit rights follow the Digital Sovereignty model |
| [Open Source in Government](../open-source-in-government/full-model/) | Open source smart city software enables community audit and peer city reuse |

---

## Glossary

**Smart City Technology:** Any technology deployed by or on behalf of a city government that collects data from public spaces or about residents' use of public services, including cameras, environmental sensors, connected street furniture, automated vehicle systems, and data analytics platforms.

**Biometric Data:** Data derived from individuals' physical characteristics — facial geometry, gait patterns, voice prints, iris patterns — that uniquely identifies them. Treated as a special category of sensitive data under GDPR and this policy.

**Surveillance Technology:** Any technology that observes, monitors, or tracks individuals in public or semi-public spaces. May include facial recognition, ALPR, CCTV with analytics, mobile device tracking, drone surveillance, and sensor networks.

**Purpose Limitation:** The data protection principle that data collected for one stated purpose may not be used for a different purpose. A foundational principle of GDPR (Article 5(1)(b)) and this policy.

**Data Minimisation:** The principle that only the minimum data necessary to achieve a stated purpose should be collected. A core principle of privacy-by-design and GDPR (Article 5(1)(c)).

**Community Data Trust:** A legal structure under which a defined community (neighbourhood, city, affected population) holds governance rights over data collected about them, through trustees accountable to that community.

**Smart City Data Register:** The public inventory of all smart city technology deployments required by this policy, including data types, purposes, retention periods, and access controls.

---

## Contributing to This Policy Model

This model is maintained in the open. Priority contribution needs:

- **Cybersecurity requirements** for smart city hardware and IoT devices
- **Private land coverage** — model language extending smart city data governance to private developments open to the public
- **Aggregation risk technical standards** — how to enforce purpose limitation when data combination creates new risks
- **Global South examples** — smart city governance from African, Asian, and Latin American contexts where deployment is accelerating fastest

Open an [Issue](https://github.com/mgifford/DigitalPolicies/issues) to propose changes or additions. See [CONTRIBUTING.md](https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md) for the contribution process.

All substantive changes go through a minimum 14-day public comment period before merging.

---

## Changelog

| Version | Date | Summary of changes |
|---|---|---|
| 0.1 | 2026-04-05 | Initial draft — four pillars, real-world examples from San Francisco, Portland, Amsterdam, Toronto, Barcelona |

---

*This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.*
