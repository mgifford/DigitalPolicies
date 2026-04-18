---
---
# Data Centers & Environmental Sustainability — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-04
> **Related domains:** [AI Adoption](../../ai-adoption/full-model/), [Digital Sovereignty](../../digital-sovereignty/full-model/), [Open Source in Government](../../open-source-in-government/full-model/)

---

## Overview

Data centers are the physical infrastructure of the digital economy. Every search, every AI query, every streamed video, every cloud backup requires electricity and, in most facilities, large volumes of water for cooling. Global data center electricity consumption is projected to double or triple by 2030, driven primarily by AI workloads. In some countries, data centers already consume more electricity than all residential use combined.

This growth is not inherently bad — but without policy frameworks, the costs fall on communities (through strained grids, stressed watersheds, and landscape disruption) while benefits flow primarily to distant shareholders. Host communities are often the last to know and the least consulted.

### The Core Tension

**We want the economic and social benefits of digital infrastructure — but not at the cost of clean water, reliable electricity for existing residents, or the ability of communities to shape what gets built in their midst.**

### Scope

This policy model is designed to apply at the level of:

- [x] Municipal / local government (zoning, permitting, community benefit)
- [x] Regional / state / provincial government (grid impact, water rights, reporting)
- [x] National government (efficiency standards, renewable mandates, strategic siting)
- [x] Public sector procurement (government data center standards)

---

## Pillar 1: Principles

### Foundational Values

**1. Community benefit, not extraction**
Data centers built in a community should benefit that community — through employment, tax contribution, energy access, and shared infrastructure — not merely extract resources (water, electricity, land) for distant corporate benefit. Siting decisions must involve genuine community consent, not just regulatory compliance.

**2. Transparency about material footprint**
The environmental costs of data infrastructure — electricity, water, land, embodied carbon in hardware — must be measured, disclosed, and accounted for in the same way that industrial emissions are. "Digital" does not mean "clean."

**3. Additionality in renewable energy claims**
A data center operator claiming to run on "100% renewable energy" through Renewable Energy Certificates (RECs) purchased from existing capacity is not reducing grid emissions. Policies must distinguish between genuine additionality (new renewable generation added to the grid) and paper certificates that do not reduce real-world fossil fuel use.

**4. Water as a shared resource**
Water used for cooling is water unavailable to agriculture, ecosystems, and community water systems. In water-stressed regions, this trade-off requires explicit public deliberation — not just permits granted by individual agencies.

**5. Grid resilience for existing users**
Data center load growth must not compromise grid reliability for existing residential and commercial users. Large load additions require transparent grid impact assessments before approval.

**6. Hardware longevity and e-waste**
The environmental impact of data infrastructure extends beyond operation to manufacturing and disposal. Policies should incentivize hardware longevity, right to repair for server equipment, and responsible e-waste management.

**7. Democratic siting**
Communities have a right to participate meaningfully in decisions about large-scale digital infrastructure in their midst — before projects are approved, not after ground is broken.

### Equity Considerations

- **Low-income and Indigenous communities** are frequently targeted for data center siting because land is cheaper and local governments are more desperate for economic development. They bear environmental burdens while tax abatements reduce fiscal benefit. Community benefit agreements must address this asymmetry.
- **Agricultural communities** in water-stressed regions face direct competition for water resources. Policy must require water impact assessment that includes effects on farming and food security.
- **Workers** in data centers are often employed through staffing agencies with limited benefits. Community benefit requirements should address employment quality, not just job quantity.

### Environmental Considerations

Current global data center electricity consumption is estimated at 200–250 TWh/year (2024), with projections of 500–1,000 TWh by 2030 under AI-intensive growth scenarios. Water consumption is less well measured but significant: a large hyperscale data center may use millions of litres of water per day. Hardware manufacturing accounts for significant embodied carbon — often larger than operational emissions over the equipment lifetime.

---

## Pillar 2: Standards

### Mandatory Standards

> **Baseline Transparency Requirement (Pre-Permit)**
> No permit for a new data center or major expansion shall be approved until the operator has published a Community Impact Disclosure covering: (a) projected annual electricity consumption (kWh) and peak electrical demand (MW); (b) projected annual water consumption (litres) by cooling method; (c) planned energy sources and any renewable energy claims with supporting additionality documentation; (d) planned hardware procurement and end-of-life disposition strategy; (e) projected job creation by wage band and employment type (direct vs. contracted); and (f) any planned onsite generation. This disclosure shall be published in plain language, made available in languages spoken by at least 5% of the host community's population, and posted in a publicly accessible location for a minimum 60-day public comment period before permit decision.

*Rationale:* Communities cannot evaluate the impact of digital infrastructure they cannot measure. Transparency at the pre-permit stage — not just post-construction reporting — is the only mechanism that gives communities genuine leverage. Current practice in most jurisdictions involves little or no pre-approval disclosure; data center developers often negotiate with economic development agencies in private before communities are aware of a project.

*Reference:* [Ireland's Data Centre Planning Guidelines (2022)](https://www.gov.ie/en/publication/): Ireland's national framework includes impact assessment requirements at the planning stage. [Virginia SB 1398 (2024)](https://lis.virginia.gov): community impact transparency requirements tied to tax incentives.

---

> **Ongoing Operational Transparency**
> All data centers operating within this jurisdiction exceeding [X] MW of IT load shall publish quarterly operational reports including: (a) actual electricity consumption and PUE ratio for the quarter; (b) actual water consumption and WUE ratio; (c) renewable energy sourcing documentation; (d) grid events (any instances where onsite generation was activated); and (e) any material changes to operations. Quarterly reports shall be machine-readable and published under an open data license. Annual summaries shall be submitted to [designated authority] and published in a central registry accessible without registration.

*Rationale:* Annual reporting is too infrequent to allow meaningful community oversight. Quarterly reporting — in machine-readable formats — allows researchers, journalists, local governments, and community members to monitor trends and identify problems in near-real-time. The open data requirement ensures that aggregated analysis across facilities is possible.

---

> **No Onsite Fossil Fuel Generation**
> No data center operating within this jurisdiction shall install, operate, or contract for onsite fossil fuel generation capacity, including diesel generators, natural gas turbines, or any internal combustion generation technology, for the purpose of meeting routine or peak operational load. Emergency backup generation for life-safety purposes (e.g., maintaining cooling to prevent hardware damage during grid outages) is permitted under the following conditions: (a) backup generation capacity shall not exceed [X]% of IT load; (b) backup generators shall run no more than [72] hours per year in aggregate outside of testing; (c) testing shall be reported quarterly; and (d) operators shall develop and publish a transition plan to battery storage or other non-fossil backup within [5] years of this policy taking effect.

*Rationale:* "Backup" gas turbines and diesel generators have been used by several major data center operators as de facto peaking generation — running frequently during high electricity prices or grid stress events, effectively functioning as private power plants burning fossil fuel while the operator claims to run on renewable energy. This loophole has been documented in Virginia, Ireland, and the Netherlands. The provision above closes it by limiting backup operation to genuine emergency use only and requiring a transition away from fossil backup entirely.

*Reference:* [Virginia SCC data center generator controversy (2022–2024)](https://www.scc.virginia.gov): multiple operators ran diesel and gas generators for extended periods, contributing to local air quality violations. [Greenpeace report on data center backup generation](https://www.greenpeace.org).

---

> **Power Usage Effectiveness (PUE) Limit**
> Any new data center or major expansion requiring a building permit or environmental review shall achieve a Power Usage Effectiveness (PUE) ratio of no greater than 1.2 within 24 months of commencing operation. Existing data centers shall disclose their current PUE ratio annually and achieve 1.4 or below within 36 months of this policy taking effect.

*Rationale:* PUE measures the ratio of total facility energy to IT equipment energy. A PUE of 1.0 is theoretically perfect; older facilities may have PUE of 1.5–2.0 or higher. The 1.2 threshold reflects best-in-class practice and is achievable with current technology. The EU Energy Efficiency Directive sets a 1.2 target for new data centers by 2030; this model policy is more immediate.

*Reference:* [EU Energy Efficiency Directive (2023/1791)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023L1791); [EU Code of Conduct for Data Centre Energy Efficiency](https://e3p.jrc.ec.europa.eu/publications/2023-eu-code-conduct-data-centre-energy-efficiency-best-practice-guidelines)

---

> **Water Usage Effectiveness (WUE) Disclosure and Limits**
> Any data center operating or seeking permits within this jurisdiction shall measure and publicly disclose its annual Water Usage Effectiveness (WUE) ratio and total water consumption in litres per year. New data centers in water-stressed areas (as defined by [applicable water scarcity index]) shall demonstrate that water consumption does not exceed [X] litres per kWh of IT equipment energy, or shall use closed-loop or air-cooling systems that minimize freshwater withdrawal.

*Rationale:* Water consumption is a critical and underregulated aspect of data center impact. WUE (litres of water per kWh of IT energy) is the standard metric. Leading operators achieve WUE below 0.5 L/kWh; many existing facilities are above 2 L/kWh. Water stress classification can draw on existing national or international indices (e.g., World Resources Institute Aqueduct).

*Reference:* [UNEP Sustainable Procurement Guidelines for Data Centres (2023)](https://www.unep.org/resources/toolkits-manuals-and-guides/sustainable-procurement-guidelines-data-centres-and-servers); [Green Grid WUE metric](https://www.thegreengrid.org)

---

> **Renewable Energy Additionality Requirement**
> Claims of renewable energy use by data centers operating within this jurisdiction shall be substantiated by documentation demonstrating additionality: that the renewable generation claimed was newly commissioned within the same grid balancing area and within 12 months of the period of claimed use. Renewable Energy Certificates (RECs) or similar instruments that do not meet the additionality standard shall not be counted toward renewable energy targets under this policy.

*Rationale:* RECs allow operators to claim renewable use without changing actual grid emissions. The "24/7 carbon-free energy" framework, adopted by Google and Microsoft and codified in some European procurement standards, requires time-matched and location-matched renewable energy — a much stronger standard. This model language adopts the additionality principle without requiring full 24/7 matching immediately, providing a realistic transition path.

*Reference:* [Google 24/7 Carbon-Free Energy](https://sustainability.google/operating-sustainably/); [RE100 criteria](https://www.there100.org); [EU Taxonomy delegated act on data centers](https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en)

---

> **Community Benefit Agreement (CBA) Requirement**
> Any data center facility exceeding [X] MW of planned IT load requiring municipal or regional permitting shall enter into a Community Benefit Agreement with the host municipality and a community representative body prior to permit approval. The CBA shall address at minimum: (a) local employment commitments including wage floors and benefits; (b) a community investment fund of no less than [Y]% of annual revenue; (c) public disclosure of energy and water consumption; (d) end-of-life hardware disposition; and (e) mechanisms for community-initiated review if environmental commitments are not met.

*Rationale:* CBAs are an established tool for ensuring that major infrastructure projects share benefits with host communities. They require negotiation before approval, giving communities meaningful leverage. The MW threshold and percentage figures should be calibrated to local context.

*Reference:* [Metropolitan Washington Council of Governments data center CBA framework](https://www.mwcog.org); [Amazon HQ2 community benefit precedents]

---

> **Grid Impact Assessment**
> Any proposed data center or expansion adding more than [X] MW of electrical load shall submit a grid impact assessment to the relevant grid operator and planning authority prior to permit approval. The assessment shall evaluate effects on grid reliability, transmission capacity, existing rate structures for residential users, and local air quality from any fossil generation required to serve incremental load.

*Rationale:* Large data centers can stress local grid infrastructure and trigger fossil generation to meet demand. Transparent assessment before approval allows communities and grid operators to plan appropriately and require mitigation.

---

### Aspirational Standards

> **Hardware Longevity and Circular Economy** *(mandatory for facilities receiving public subsidies)*
> All data centers receiving public tax incentives, subsidies, grants, or operating on publicly owned land shall: (a) commit to minimum server hardware in-service periods of no less than [5] years from date of deployment, with documented justification required for any early retirement; (b) publish an annual Hardware Lifecycle Report covering total units deployed, retired, refurbished or resold, donated, and disposed of, with disposal method for each category; (c) contract only with certified electronics recyclers for hardware disposal — certification to be verified annually; (d) achieve zero landfill disposal for all IT equipment within [24] months of this policy taking effect; and (e) give priority to certified refurbishment organisations, educational institutions, and non-profit community organisations when disposing of functional used hardware.

For all other data centers, the above requirements are strongly recommended and shall be reported on voluntarily in the operational transparency disclosures.

*Rationale:* Server hardware carries significant embodied carbon — the emissions from manufacturing often exceed operational emissions over the equipment's lifetime. Extending useful server life from 3–4 years (typical industry norm) to 5+ years reduces embodied carbon substantially. More importantly, massive volumes of perfectly functional servers are discarded purely because a newer model is available, while communities and public institutions lack access to affordable computing hardware. The refurbishment and donation provisions address both the environmental and equity dimensions of this failure. This is listed as aspirational because it goes beyond current regulatory requirements in most jurisdictions — but it is achievable with standard procurement and contracting practice, and should be made mandatory for facilities receiving public support.

*Reference:* [EU Ecodesign Regulation for servers (in development)](https://ec.europa.eu/info/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/ecodesign/products-and-packaging_en): EU is developing minimum durability and recyclability standards for server hardware. [iFixit Right to Repair for data centers](https://www.ifixit.com): framework for server repairability.

---

> **Open Infrastructure and Interoperability**
> Publicly funded data infrastructure should use open hardware standards and open software stacks wherever technically feasible, to reduce vendor lock-in and enable community oversight. Operators of public cloud infrastructure should publish interoperability APIs under open license.

---

### Standards Cross-Reference

| Standard Referenced | Body | Version | Notes |
|---|---|---|---|
| PUE metric | Green Grid / ISO | ISO 30134-2 | Mandatory disclosure |
| WUE metric | Green Grid | — | Mandatory disclosure |
| EU Energy Efficiency Directive | European Union | 2023/1791 | Target alignment |
| EU Code of Conduct for Data Centres | JRC / E3P | 2023 | Best practice alignment |
| UNEP Procurement Guidelines | UNEP | 2023 | Procurement reference |
| ISO 14001 | ISO | 2015 | Environmental management aspirational |
| EU Taxonomy — data centers | European Commission | 2021 | Technical screening criteria |

---

## Pillar 3: Implementation

### Procurement Requirements

> **Public Sector Data Center Procurement Clause**
> When procuring data center services, co-location, or cloud infrastructure services, public bodies shall require vendors to: (a) disclose PUE and WUE ratios for facilities serving the contract; (b) demonstrate renewable energy coverage meeting the additionality standard defined in this policy; (c) provide evidence of compliance with applicable environmental reporting requirements; and (d) certify that no subcontractors involved in hardware manufacturing or disposal are subject to active violations of international environmental or labour standards.

---

### Transition and Timeline

| Milestone | Timeframe from policy adoption |
|---|---|
| PUE and WUE disclosure begins (all facilities) | 6 months |
| Grid impact assessment required for new permits | Immediate |
| CBA required for large new facilities | Immediate |
| PUE ≤ 1.4 required for existing facilities | 36 months |
| PUE ≤ 1.2 required for new facilities | 24 months from opening |
| Renewable additionality reporting begins | 12 months |
| Full aspirational standards review | 48 months |

### Reporting and Transparency

> **Annual Environmental Disclosure**
> All data centers operating within this jurisdiction exceeding [X] MW of IT load shall publish an annual Environmental Performance Report no later than [March 31] of the following year. The report shall be publicly accessible on the operator's website and filed with [designated regulatory body]. It shall include: (a) total electricity consumption (kWh); (b) PUE ratio (annual average and peak); (c) total water consumption and WUE ratio; (d) renewable energy sourcing with additionality documentation; (e) hardware refresh and disposal volumes; (f) scope 1, 2, and 3 greenhouse gas emissions; and (g) status of Community Benefit Agreement commitments.

### Enforcement

> **Enforcement and Penalties**
> Failure to submit required environmental disclosures within 30 days of the required date shall result in an administrative penalty of [X per day]. Material misrepresentation in disclosures shall be subject to penalties of up to [Y% of annual revenue]. Any person may file a complaint with [designated body] regarding an operator's compliance with this policy. Complaints shall be acknowledged within 10 days and resolved within 90 days. Enforcement decisions shall be published.

---

## Pillar 4: Governance

### Oversight Body

> **Designated Oversight Authority**
> Responsibility for administering this policy shall vest in [existing environmental/planning authority or new designated body]. The authority shall have power to: request additional information from operators; conduct site inspections; issue compliance notices; impose administrative penalties; and publish annual compliance reports covering all regulated facilities.

### Community Representation

> **Community Advisory Committee**
> Any municipality hosting one or more data centers exceeding [X] MW shall establish a Community Data Center Advisory Committee. Membership shall include: (a) at minimum two representatives from communities directly adjacent to data center facilities; (b) one representative from the local environmental or conservation sector; (c) one representative from the local labour sector; and (d) one representative nominated by the local Indigenous governing body, where applicable. The Committee shall have access to all required disclosures, the right to request additional information from operators, and the right to submit formal recommendations to the oversight authority. Committee meetings shall be open to the public.

### Audit and Review

> **Independent Audit**
> Data centers reporting PUE or WUE figures under this policy shall submit to independent third-party verification of those figures at least every three years. Verification shall be conducted by a qualified body and the verification report shall be publicly disclosed.

> **Policy Review**
> This policy shall be reviewed every three years by the oversight authority in consultation with the Community Advisory Committee. The review shall assess whether efficiency standards remain aligned with best available technology, whether equity and environmental commitments are being met, and whether the policy scope should be expanded. Review findings shall be published.

---

## Real-World Examples

### Ireland — National Data Center Policy (2022)
**Enacted/Proposed:** 2022
**Type:** National planning and energy policy
**Link:** [EirGrid Data Centre Strategy](https://www.eirgrid.ie)
**Summary:** Ireland became a cautionary tale in data center policy: by 2022, data centers consumed nearly 18% of national electricity, and grid operator EirGrid imposed a de facto moratorium on new connections in the Dublin region due to grid capacity constraints. The government's response — a policy paper requiring new data centers to demonstrate grid benefit rather than merely grid impact — is one of the most advanced in the world. Ireland's experience demonstrates what happens without upstream policy: communities lose grid reliability, and governments lose leverage.

---

### Germany — Renewable Energy Mandate for Data Centers (2023)
**Enacted/Proposed:** 2023
**Type:** National legislation (Energy Efficiency Act)
**Link:** [German Energy Efficiency Act (EnEfG)](https://www.gesetze-im-internet.de/enefg/)
**Summary:** Germany's Energy Efficiency Act requires new data centers to source 50% renewable energy from 2024, rising to 100% by 2027. It also establishes PUE requirements (1.2 for new data centers from 2026) and mandates waste heat recovery where technically feasible. This is the strongest national-level enacted standard globally as of 2025 and is the primary reference for Pillar 2 standards in this model.

---

### Virginia, USA — Data Center Tax Incentive Reform
**Enacted/Proposed:** 2022–2024 (ongoing)
**Type:** State legislation
**Link:** [Virginia data center incentive legislation](https://lis.virginia.gov)
**Summary:** Virginia hosts more data centers than any other state, largely due to long-standing tax incentives. A coalition of community groups, environmental organizations, and utility advocates has pushed for reform, including tying tax incentives to renewable energy commitments and community benefit agreements. The debate in Virginia is an important model for how incentive reform can be used as a policy lever even where direct regulation is politically difficult.

---

### European Union — EU Code of Conduct for Data Centres
**Enacted/Proposed:** 2008, updated annually
**Type:** Voluntary industry code (EU Joint Research Centre)
**Link:** [EU Code of Conduct for Data Centres](https://e3p.jrc.ec.europa.eu/communities/data-centres-code-conduct)
**Summary:** The EU Code of Conduct is a voluntary best practice framework that has been the basis for many of the standards codified in the EU Energy Efficiency Directive. Signatories commit to annual energy efficiency reporting and improvement. While voluntary, it provides a well-documented set of technical standards that this model policy references and in some cases makes mandatory.

---

### Amsterdam, Netherlands — Moratorium on New Data Centers
**Enacted/Proposed:** 2019–2022
**Type:** Municipal planning decision
**Link:** [Amsterdam data center moratorium reporting](https://www.amsterdam.nl)
**Summary:** Amsterdam declared a moratorium on new data centers in 2019 due to grid capacity constraints and land use competition. This was one of the first municipal-level assertions of community control over data center siting and has influenced subsequent policy in the Netherlands and beyond. The moratorium was eventually lifted with new conditions, but demonstrated that municipalities can and should use planning powers to shape digital infrastructure development.

---

### European Union — Corporate Sustainability Reporting Directive (CSRD)
**Enacted:** 2022 (Directive 2022/2464); first reports filed 2024 (large companies) with phased rollout to 2028
**Type:** EU Directive
**Link:** https://ec.europa.eu/info/business-economy-euro/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en
**Summary:** The CSRD requires large companies operating in the EU to report on their environmental, social, and governance (ESG) impacts under a standardised framework (European Sustainability Reporting Standards, ESRS). For digital infrastructure operators, this includes disclosure of energy consumption, carbon emissions (Scope 1, 2, and 3 where material), water use, and transition plans. The ESRS E1 standard on climate change requires disclosure of absolute energy consumption disaggregated by source (renewable vs. non-renewable) — directly applicable to data center operators. Compared to voluntary schemes, CSRD mandates external assurance of sustainability disclosures, closing the self-reporting verification gap. Limitation: applies to companies with 500+ employees and either €150M+ turnover or balance sheet above €20M in the EU; smaller operators are phased in from 2026–2028 and micro-enterprises may be excluded. Does not mandate efficiency targets or renewable energy thresholds — it is a disclosure requirement, not a performance standard.

---

## Gaps and Known Weaknesses

- **Scope 3 emissions accounting** — Hardware manufacturing (particularly semiconductors) is a major source of embodied carbon, but supply chain complexity makes this very difficult to measure and enforce at a local or national level. This model does not yet include enforceable scope 3 requirements beyond the hardware lifecycle provisions.
- **AI workload intensity** — This model does not distinguish between data center uses. AI training workloads are vastly more energy-intensive than general cloud hosting. Future revisions should consider whether AI-specific facilities require additional standards, including compute-per-watt efficiency requirements.
- **Water stress calibration** — The model refers to water stress indices but does not specify one. Jurisdictions need to select the appropriate index for their geographic context (e.g., WRI Aqueduct, national drought classifications).
- **Global South representation** — Real-world examples here are almost entirely from Europe and North America. Data center development in Southeast Asia, Latin America, and Africa is growing rapidly and faces different regulatory contexts — particularly around grid reliability and water access.
- **Community benefit enforcement** — CBAs are only as strong as their enforcement mechanisms. Model language for CBA enforcement beyond regulatory compliance is underdeveloped. Third-party monitoring and community-initiated audit rights need further development.
- **Battery storage transition for backup** — The no-fossil-generation clause requires a transition to battery or alternative backup, but does not specify standards for battery safety, environmental impact of battery manufacturing, or end-of-life battery disposal. This is a gap requiring a future revision.
- **Transparency verification** — The model requires disclosure but does not yet include strong verification requirements for reported PUE/WUE figures outside the audit clause. Self-reported figures from data centers have been found to be inaccurate in several documented cases.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| AI Adoption & Governance | AI workloads are primary drivers of data center growth; AI policy must address compute footprint |
| Open Source in Government | Open source software stacks reduce vendor lock-in in data center infrastructure |
| Digital Sovereignty | Community-controlled data infrastructure requires siting and operational sovereignty |
| Right to Repair & Interoperability | Server hardware longevity and right to repair reduce hardware-related environmental impact |

---

## Glossary

**PUE (Power Usage Effectiveness):** The ratio of total data center energy consumption to IT equipment energy consumption. A PUE of 1.0 is theoretically perfect; lower is better.

**WUE (Water Usage Effectiveness):** The ratio of water used for data center cooling (in litres) to IT equipment energy (in kWh). Lower is better.

**Additionality:** In the context of renewable energy, the principle that claimed renewable energy consumption must come from newly constructed generation sources, not existing capacity. Prevents "paper" renewable claims that do not reduce grid emissions.

**Community Benefit Agreement (CBA):** A legally binding contract between a developer and a community (typically represented by a coalition of local organizations) that establishes specific commitments in exchange for community support or non-opposition to a project.

**Hyperscale data center:** A very large data center (typically >10,000 servers and >5 MW of IT load) operated by a major cloud or technology company. Examples include facilities operated by Amazon (AWS), Microsoft (Azure), and Google (GCP).

**IT load:** The electrical power consumed by IT equipment (servers, storage, networking) within a data center, as distinct from cooling, lighting, and other facility loads.

---

## Contributing to This Policy Model

- **Add a real-world example:** Open a Pull Request adding a new entry to the Real-World Examples section with a citation — particularly examples from the Global South
- **Improve model language:** Open an Issue describing the problem, then submit a PR with proposed changes and rationale
- **Address a gap:** See the Gaps section — scope 3 accounting and AI-specific standards are the highest priorities

---

## Changelog

| Version | Date | Summary |
|---|---|---|
| 0.1 | 2026-04-04 | Initial draft |
| 0.2 | 2026-04-18 | Added EU Corporate Sustainability Reporting Directive (CSRD) as real-world example |
