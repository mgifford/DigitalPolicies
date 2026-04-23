---
layout: domain-full
title: "Web Sustainability — Model Policy"
description: "Model policy language for a greener web — addressing software design, device longevity, hosting choices, and how digital services reduce their material footprint."
domain: web-sustainability
---

# Web Sustainability — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-04
> **Related domains:** [Data Centers & Environmental Sustainability](../../data-centers/full-model/), [Right to Repair & E-Waste](../../right-to-repair/full-model/), [Digital Accessibility](../../accessibility/full-model/), [Open Source in Government](../../open-source-in-government/full-model/)
> **Key sources:** W3C Web Sustainability Guidelines (WSG 1.0, 2023; Draft Note 2025), EU Ecodesign Regulation, GRI Digital Sustainability Standards (draft), ISO/IEC 14001 Environmental Management

---

## Overview

The internet's carbon footprint is approximately equivalent to aviation — around 3.7% of global greenhouse gas emissions and rising. Unlike aviation, this footprint is almost entirely invisible. No emissions label appears when you load a bloated web page. No carbon counter ticks when a public authority procures an inefficient web platform. No landfill is visible when governments buy software that forces hardware replacement every three years.

Web sustainability is the practice of designing, building, and operating digital products and services in ways that minimise environmental impact, respect planetary boundaries, and align with social equity. It is not an obscure technical concern: the aggregate effect of poor design decisions across billions of web pages, unnecessary JavaScript dependencies, unoptimised images, and planned software obsolescence is measurable in power station output.

The W3C Web Sustainability Guidelines (WSG), published as a Draft Note in 2025, provide 93 guidelines and 232 success criteria across four categories — User Experience Design, Web Development, Hosting Infrastructure, and Business Strategy. They are structured analogously to WCAG, which became a worldwide policy standard. WSG is now at a comparable early adoption stage.

This model policy translates WSG principles and related environmental obligations into enforceable policy language for governments and public sector bodies.

### The Core Tension

**We want modern, efficient, capable digital public services — but "efficient" cannot mean efficient only in terms of speed and cost to the operator. Efficiency that externalises energy waste, hardware obsolescence, and carbon emissions onto the environment is not efficiency. It is subsidy extraction from the planet.**

### Scope

- [x] National government (procurement standards, reporting mandates)
- [x] Regional / state / provincial government (procurement, vendor requirements)
- [x] Municipal / local government (public digital services, local procurement)
- [x] Public sector procurement (all ICT purchasing, digital service contracts)
- [ ] Private sector (aspirational / reporting only at this stage)

---

## Pillar 1: Principles

### Foundational Values

**1. The web has a material footprint**
Every HTTP request, every megabyte transferred, every script executed on a user's device consumes electricity. That electricity has a carbon cost. Poor code is not just a quality problem — it is an environmental one. Policy must treat digital services as having material environmental impact, and require measurement, disclosure, and improvement accordingly.

**2. Sustainable design and accessible design are the same thing**
Semantic HTML, minimal dependencies, plain language, low data transfer, progressive enhancement, system fonts, and efficient media — these are the practices of both good accessibility and good sustainability. The organisations achieving WCAG 2.2 AA conformance are, in most cases, also producing more sustainable digital services. Policy should treat these as unified requirements, not separate silos.

**3. Longevity is sustainability**
Software that forces hardware replacement after 3–5 years creates e-waste, embodied carbon, and material waste at scale. Public procurement that selects software requiring the latest browser or operating system versions, or that ceases support prematurely, is an environmental decision as much as a technical one. Software longevity — support for older hardware and operating systems, long security maintenance windows — is a form of environmental protection.

**4. Procurement is where sustainability is won or lost**
Governments cannot achieve sustainable digital services if they procure from vendors who do not meet sustainability standards. As with accessibility, the moment of procurement is the most powerful point of intervention. Sustainability requirements must be mandatory and verifiable before contract award, not advisory guidelines evaluated after deployment.

**5. Green hosting is a verifiable, achievable standard**
Hosting providers with verifiable renewable energy use, low Power Usage Effectiveness (PUE) ratios, and water efficiency commitments exist and are increasingly price-competitive. Procurement preference for green hosting is achievable within existing frameworks and does not require new technical standards — only the will to ask.

**6. Carbon transparency enables market accountability**
When public digital services are required to publish their estimated carbon footprint, market pressure and public accountability follow. Transparency is the minimum intervention — it costs very little and creates the information environment in which further improvement becomes possible. Opaque services cannot be improved.

**7. Avoiding dark patterns is a sustainability act**
Web design that uses dark patterns — infinite scroll, autoplay video, forced re-engagement notifications, unnecessary page reloads, manipulative cookie consent flows — causes more data transfer, more device computation, and more user time wasted. Eliminating dark patterns improves sustainability, accessibility, and user dignity simultaneously.

**8. Open source and open standards reduce long-term environmental cost**
Proprietary software ecosystems require redundant development, create vendor lock-in that prevents efficiency improvements, and often force hardware upgrades to maintain compatibility. Open source software, reusable public code, and open standards reduce duplicate infrastructure, extend hardware life, and allow communities to maintain and improve their own digital infrastructure.

### Equity Considerations

- **Users on older devices and slow connections** — inefficient web design is experienced most severely by people with limited bandwidth, older devices, and mobile-only internet access. These users are disproportionately lower-income, rural, and in the Global South. Sustainable web design is more equitable web design.
- **Communities hosting data center infrastructure** — the sustainability of digital services depends on the sustainability of the infrastructure behind them. Rural and lower-income communities frequently host data centers bearing environmental costs. Web sustainability policy and data center policy are linked.
- **Future generations** — the accumulating embodied carbon in hardware, the energy consumed by inefficient software, and the growing e-waste stream are environmental debts borne by people who do not yet exist and had no voice in the decisions that created them.

### Environmental Considerations

The internet's material footprint is distributed across user devices (approximately 52% of ICT energy use), networks (24%), and data centers (24%). Web sustainability addresses the design and development decisions that determine how efficiently this infrastructure is used. A well-optimised public website may be an order of magnitude more energy-efficient than a poorly optimised equivalent. At the scale of national government — hundreds of public websites, millions of daily visits — this difference is substantial.

---

## Pillar 2: Standards

### Mandatory Standards

> **Green Hosting Requirement**
> All new contracts for hosting of public-facing digital services shall require that the hosting provider: (a) operates data centers with a Power Usage Effectiveness (PUE) ratio of 1.4 or below, with a target of 1.2 by the third year of the contract; (b) provides verifiable documentation of renewable energy sourcing, including additionality documentation where Renewable Energy Certificates (RECs) are used; (c) discloses annual water consumption for cooling and participates in the Water Usage Effectiveness (WUE) reporting standard; and (d) has a published hardware lifecycle and responsible end-of-life policy. Hosting contracts shall not be renewed where providers cannot demonstrate progress against these requirements.

*Rationale:* Green hosting is the single highest-leverage intervention available in public sector web sustainability. Hosting choices determine the baseline carbon intensity of every public digital service. The market for green hosting exists; procurement inertia, not lack of options, is the primary barrier. The PUE 1.4 threshold is achievable by most modern providers; 1.2 reflects best practice and is a direction signal, not an immediate mandate. Additionality documentation is required because REC purchases from existing capacity do not reduce grid emissions; only new renewable capacity does.

*Reference:* [EU Energy Efficiency Directive (2023)](https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en): requires PUE ≤ 1.5 for new EU data centers by 2025, ≤ 1.2 by 2030. [The Green Web Foundation](https://www.thegreenwebfoundation.org/): provides a verified directory of green hosting providers.

---

> **Digital Carbon Reporting for Public Services**
> All public digital services receiving [X] or more unique visitors per month shall publish an annual Digital Carbon Report including: (a) estimated annual carbon footprint of the service (gCO2e per page view and total), calculated using a published, open methodology; (b) hosting carbon intensity (gCO2e/kWh of the hosting provider's reported or estimated grid mix); (c) page weight statistics (median page size in kilobytes, median transfer volume per session); (d) year-on-year comparison; and (e) improvement targets for the following year. Reports shall be published on the service's own website and submitted to a central public register maintained by [designated authority].

*Rationale:* What gets measured gets managed. There is currently no systematic requirement for public sector organisations to measure or disclose the carbon cost of their digital services. Several methodologies exist (Website Carbon Calculator, CO2.js, Sustainable Web Design model); this provision requires use of a published open methodology without mandating a specific one, recognising that measurement standards are still evolving. The visitor threshold focuses reporting requirements on higher-impact services first.

*Reference:* [Sustainable Web Design model (Wholegrain Digital / Mightybytes)](https://sustainablewebdesign.org/): open methodology for estimating website carbon. [CO2.js (The Green Web Foundation)](https://www.thegreenwebfoundation.org/co2-js/): open source library for website carbon calculation.

---

> **Page Weight and Performance Baseline**
> All public-facing digital services shall achieve: (a) a median page weight of no greater than 1 MB (uncompressed) for informational pages; (b) a median page weight of no greater than 2 MB for interactive services; (c) a Core Web Vitals score of "Good" (Largest Contentful Paint ≤ 2.5s, Cumulative Layout Shift ≤ 0.1, Interaction to Next Paint ≤ 200ms) at the 75th percentile on mobile devices; and (d) full functionality without JavaScript enabled for informational pages (progressive enhancement). Services failing to meet these thresholds shall publish an improvement plan within 90 days of assessment.

*Rationale:* Page weight is the single most actionable metric for web sustainability. The average web page has grown from approximately 500 KB in 2012 to over 2.5 MB in 2024, driven primarily by JavaScript frameworks, unoptimised images, and third-party tracking scripts — none of which are necessary for public information services. A 1 MB limit for informational pages is achievable with standard HTML and CSS; it does not prohibit rich functionality but requires deliberate design decisions. Core Web Vitals are Google's standardised performance indicators that proxy for user experience quality and, indirectly, energy efficiency.

*Reference:* [HTTP Archive Web Almanac](https://almanac.httparchive.org/): annual data on page weight and web performance across millions of sites. [W3C WSG 5.18 — Minify Your HTML/CSS/JS](https://w3c.github.io/sustyweb/#minify-your-html-css-js).

---

> **Software Longevity Requirement**
> All publicly procured software shall: (a) support the current and two immediately preceding major versions of common operating systems (Windows, macOS, major Linux distributions) and browsers (Chrome, Firefox, Safari, Edge) at the time of procurement; (b) provide a minimum 5-year security maintenance commitment from the date of deployment, with maintenance releases provided at no additional cost; (c) not enforce artificial hardware upgrade requirements through software-only mechanisms (e.g., OS version checks that can be removed without functional impact); and (d) be documented sufficiently for the procuring authority or an independent maintainer to continue maintenance if the vendor ceases support. Contracts shall include termination rights where vendors do not honour longevity commitments.

*Rationale:* Software that requires hardware upgrades creates e-waste and embodied carbon that dwarfs the operational carbon of running that hardware. Microsoft's Windows 11 hardware requirements, for example, rendered hundreds of millions of otherwise functional devices obsolete. Public sector procurement — at scale — has leverage to demand longevity that individual consumers do not. The 5-year maintenance requirement aligns with the EU Cyber Resilience Act's lifetime support obligations.

*Reference:* [EU Cyber Resilience Act (2024)](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act): introduces mandatory security support lifetime requirements for connected products. [Right to Repair coalition evidence on planned obsolescence](https://repair.eu/).

---

> **Web Sustainability Guidelines (WSG) Alignment in Procurement**
> All procurement of digital services with a contract value exceeding [X] shall require vendors to provide a WSG Alignment Statement describing: (a) which W3C Web Sustainability Guidelines apply to the service; (b) the vendor's current conformance level against applicable guidelines; and (c) a roadmap for addressing any identified gaps within the contract period. The WSG Alignment Statement shall be a contractual deliverable, subject to audit. Procurement evaluation shall include WSG alignment as a scored quality criterion.

*Rationale:* The W3C Web Sustainability Guidelines are the most comprehensive and technically rigorous framework for web sustainability currently available. They are structured analogously to WCAG — with guidelines, success criteria, and conformance levels — making them directly usable as procurement criteria. Requiring a vendor WSG Alignment Statement creates accountability without mandating full conformance immediately; the roadmap requirement creates a trajectory toward improvement. This mirrors the approach taken with accessibility (VPAT / ACR statements) that has driven consistent accessibility improvement in procured software.

*Reference:* [W3C Web Sustainability Guidelines (WSG 1.0)](https://w3c.github.io/sustyweb/): the primary technical reference for this provision.

---

### Recommended Standards

> **System Font Preference**
> Digital services procured or developed by public authorities should use system font stacks (fonts installed on the user's operating system) as the default typeface choice, reserving custom web fonts for cases where brand or legal requirements specifically require them and where the typographic benefit is proportionate to the additional data transfer. Where web fonts are used, variable font formats should be preferred over separate weight files, and font subsets limited to character sets required by the service.

*Rationale:* Custom web fonts add 100–500 KB per page view and require additional DNS lookups and connections. System fonts — the default fonts available on user devices — are zero transfer-cost and render immediately. Most public information services have no genuine typographic requirement that overrides this efficiency argument. The EU and several national governments have adopted system font policies for public websites.

---

> **Dark Pattern Prohibition**
> Public digital services shall not employ dark patterns that cause unnecessary data transfer or user re-engagement, including: autoplay video or audio content; infinite scroll on informational pages; push notification prompts that cannot be permanently declined; cookie consent mechanisms that make refusal more difficult than acceptance; or automatic session extension without user consent. User interface flows shall be designed to allow task completion with the minimum number of page loads and interactions.

*Rationale:* Dark patterns — design choices that manipulate rather than assist users — cause measurable increases in data consumption, device computation, and user time expenditure. They are also, in most jurisdictions where they have been assessed, illegal under consumer protection law. Their prohibition for public services is a sustainability measure, an accessibility measure, and a democratic accountability measure simultaneously. The EU Digital Services Act and Digital Markets Act both address dark patterns.

---

> **Third-Party Script Minimisation**
> Public digital services shall minimise third-party scripts (analytics, advertising, social media widgets, chat tools, A/B testing frameworks) to those strictly necessary for core service delivery. Each third-party script shall be documented in the service's privacy policy with its purpose and data processing basis. Privacy-respecting analytics alternatives that do not require third-party network connections (e.g., self-hosted or cookieless solutions) shall be preferred over tracking-based alternatives.

*Rationale:* Third-party scripts are among the largest sources of page weight, privacy leakage, and performance degradation on public websites. A typical commercial news website loads 50–100 third-party scripts; a well-designed public service loads zero to five. Each script introduces additional DNS lookups, HTTP connections, JavaScript execution, and often unseen tracking. Requiring justification and documentation for each third-party script forces the discipline of minimisation.

---

## Pillar 3: Implementation

### Regulatory and Administrative Requirements

**Competent Authority**
A designated government authority (the [Digital Sustainability Office] or equivalent function within an existing digital/procurement body) shall be responsible for: maintaining the central Digital Carbon Register; setting and updating the approved carbon calculation methodology list; auditing compliance with green hosting and WSG requirements; receiving and publishing annual Digital Carbon Reports; and publishing an annual National Digital Sustainability Report summarising sector-wide progress.

**Phased Implementation Timeline**

| Phase | Requirement | Timeline |
|---|---|---|
| Phase 1 | All new hosting contracts to include green hosting requirements | Within 12 months of policy enactment |
| Phase 1 | All services >10,000 monthly visitors to publish first Digital Carbon Report | Within 18 months |
| Phase 2 | Page weight and Core Web Vitals baselines assessed for all top-50 public services | Within 24 months |
| Phase 2 | WSG Alignment Statement required for all new procurement >£/€/$ [X] | Within 24 months |
| Phase 3 | Software longevity requirements apply to all renewals | Within 36 months |
| Phase 3 | WSG alignment scoring in all procurement above minimum threshold | Within 36 months |
| Ongoing | Annual Digital Carbon Reports published and submitted | Annually from Phase 1 |

**Training and Capacity Building**
Within 18 months of policy enactment, the competent authority shall publish: (a) a Digital Sustainability Procurement Guide for procurement officers; (b) a Web Sustainability Self-Assessment tool for in-house development teams; (c) training materials for inclusion in civil service digital skills programmes; and (d) a model WSG Alignment Statement template for vendor use.

### Technical Standards

**Approved Carbon Calculation Methodologies**
The competent authority shall maintain a list of approved open methodologies for website carbon calculation. Initial approved methodologies shall include: the Sustainable Web Design (SWD) model; the CO2.js system-level model; and any successor W3C-endorsed methodology. Methodologies requiring proprietary tools or non-disclosable inputs shall not be approved.

**Green Hosting Verification**
Hosting providers claiming green credentials shall provide documentation from: (a) a recognised independent renewable energy auditor; (b) a recognised green hosting certification scheme (e.g., The Green Web Foundation verified provider registry, Green Hosting Certification); or (c) ISO 14001 certification with specific renewable energy coverage. Self-reported claims without third-party verification shall not satisfy the green hosting requirement.

**Measurement and Monitoring**
Services subject to Digital Carbon Reporting shall measure: page weight using synthetic monitoring (Lighthouse or equivalent); transfer volume using real user monitoring or server log analysis; Core Web Vitals using CrUX (Chrome User Experience Report) data or equivalent; and hosting carbon intensity using the hosting provider's published or Grid Mix Average figure for their data center location.

---

## Pillar 4: Governance

### Enforcement

**Regulatory Oversight**
The competent authority shall have powers to: request evidence of compliance with green hosting, page weight, and WSG alignment requirements; conduct independent audits of services subject to Digital Carbon Reporting; issue compliance notices requiring remediation within 90 days; and publish a compliance league table of assessed public services annually.

**Procurement Enforcement**
Contracts awarded under this policy shall include: sustainability KPIs as contractual obligations (not advisory targets); audit rights allowing the procuring authority to verify hosting credentials and WSG alignment documentation; step-in rights where a vendor fails to meet longevity commitments within the contract period; and termination rights where material non-compliance is not remediated within 90 days of notice.

**Civil Society Participation**
Any civil society organisation or member of the public may submit a complaint to the competent authority alleging non-compliance with Digital Carbon Reporting requirements or green hosting obligations. The authority shall respond to complaints within 60 days and publish a summary of complaints received and resolved annually.

### Review and Improvement

**Methodology Review**
The approved carbon calculation methodology list shall be reviewed annually to reflect: advances in measurement science; changes in the W3C WSG status (including any transition from Draft Note to Recommendation); and improvements in hosting provider data availability. Revised methodology guidance shall be accompanied by a 6-month transition period to allow services to update their reporting.

**Standards Escalation**
The page weight thresholds and PUE requirements in this policy shall be reviewed every 3 years. Where best-practice data demonstrates that tighter standards are achievable without disproportionate cost, the competent authority shall publish revised thresholds for a 6-month public consultation before adoption.

**Annual Reporting**
The competent authority shall publish annually: (a) an aggregated analysis of Digital Carbon Reports submitted; (b) a sector-wide progress report against policy targets; (c) a summary of audit findings and compliance notices issued; (d) case studies of exemplary and poor-practice services; and (e) recommended updates to implementation guidance.

---

## Worked Examples

### Example A: National Government Website Redesign

A national government redesigns its primary citizen information portal. Under this policy:

- **Procurement phase:** The commissioning authority requires vendors to submit a WSG Alignment Statement as part of the tender response, scored at 15% of the quality evaluation. The winning vendor documents 67 of 93 WSG guidelines as applicable and achieves full conformance on 52.
- **Hosting:** The new contract requires the hosting provider to supply PUE and renewable energy documentation before go-live. The provider (a green hosting certified supplier) supplies ISO 14001 certification and a verified renewable energy agreement.
- **Baseline reporting:** The portal (>1M monthly visitors) publishes its first Digital Carbon Report within 18 months of policy enactment: median page weight 420 KB, estimated 0.08 gCO2e per page view, total annual estimate 4.7 tonnes CO2e.
- **Year-3 target:** The report includes a commitment to reduce median page weight to 350 KB and page view carbon to 0.06 gCO2e by redesigning image delivery and eliminating two unused third-party analytics scripts.

### Example B: Municipal Website Procurement

A city of 200,000 people procures a new website platform. The contract is below the WSG Alignment Statement threshold. Under this policy:

- **Hosting:** Green hosting requirement applies. The city chooses a regional hosting provider with PUE 1.3 and documented renewable energy purchasing.
- **Software longevity:** The contract requires 5-year security maintenance from the platform vendor, with documented support for the two preceding major browser versions.
- **Page weight:** The procurement brief specifies a maximum median page weight of 1 MB and Core Web Vitals "Good" threshold for mobile.
- **Reporting:** The city's website receives 80,000 monthly visitors — below the 10,000-threshold only if the policy scales thresholds. (If the threshold is 10,000, it is above; they must publish a Digital Carbon Report.)

---

## Real-World Examples

No jurisdiction has yet enacted comprehensive web sustainability legislation. The following represent the leading edge of practice:

| Jurisdiction | Measure | Status |
|---|---|---|
| France | REEN Act (2021) — requires major streaming services to report digital environmental impact | Enacted |
| European Union | EU Energy Efficiency Directive — PUE requirements for data centers | Enacted (2023) |
| Netherlands | National ICT climate covenant — voluntary carbon commitments from public sector ICT | Voluntary |
| UK | Government Digital Service — GDS sustainability guidance for gov.uk services | Guidance only |
| European Union | Ecodesign for Sustainable Products Regulation — extension to software under consultation | Proposed |
| W3C | Web Sustainability Guidelines (WSG 1.0) | Draft Note (2025) |

---

## Gaps and Known Weaknesses

- **No binding standard yet** — No jurisdiction has enacted comprehensive web sustainability legislation. All current frameworks are voluntary, guidance-only, or sector-specific. The W3C WSG is a Draft Note, not a Recommendation — it has not yet gone through the full W3C standards process.
- **Measurement methodology not yet standardised** — Multiple competing methodologies exist (Sustainable Web Design model, CO2.js, Scope 3 IT emissions) and produce different estimates for the same service. Policy cannot mandate a specific methodology without risking obsolescence; yet without a common methodology, cross-service comparison is difficult.
- **Embodied carbon is largely unaddressed** — The carbon cost of manufacturing devices, servers, and network hardware (embodied carbon) often exceeds operational carbon over a product's lifetime. This policy focuses primarily on operational energy and software longevity; a fuller treatment of embodied carbon requires supply chain disclosure standards not yet available.
- **Third-party script accountability gap** — Public digital services embed third-party scripts (analytics, maps, video players) whose carbon footprint is outside the procuring authority's direct control. The third-party minimisation standard addresses this partially but does not resolve accountability for third-party emissions.
- **Private sector coverage** — This model applies to public sector digital services. Private sector websites and applications — which account for the majority of web traffic — are outside scope. A fuller treatment would address private sector obligations, particularly for high-traffic commercial services.
- **AI-generated content footprint** — The growing use of AI for content generation, image creation, and on-page AI assistants introduces new energy costs not yet addressed by existing web sustainability frameworks.

---

## Glossary

**Carbon intensity (gCO2e/kWh):** The grams of CO2 equivalent emitted per kilowatt-hour of electricity, varying by grid and energy source.

**Core Web Vitals:** Google's standardised metrics for web performance: Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).

**Dark pattern:** A user interface design choice that manipulates users into actions against their interests.

**Page weight:** The total size (in kilobytes) of all resources downloaded to render a web page.

**PUE (Power Usage Effectiveness):** The ratio of total data center energy to IT equipment energy. Lower is better; 1.0 is theoretical perfection.

**Progressive enhancement:** A design approach that builds a functional baseline in plain HTML/CSS, layering JavaScript enhancement only where genuinely useful.

**REC (Renewable Energy Certificate):** A market instrument representing one MWh of renewable electricity generation. RECs without additionality do not reduce grid emissions.

**System font stack:** A set of typefaces installed on the user's device, requiring no additional download.

**W3C WSG:** W3C Web Sustainability Guidelines — the primary technical reference framework for this policy domain.

**WUE (Water Usage Effectiveness):** The ratio of data center water consumption to IT equipment energy use. Lower is better.

---

## Contributing to This Domain

This policy model is a living document. Contributions especially welcome from people with expertise in:

- Digital carbon measurement methodology
- Green hosting procurement and certification
- Software lifecycle policy and ecodesign regulation
- National or subnational sustainability reporting frameworks
- W3C WSG implementation in government contexts

Open an [Issue](https://github.com/mgifford/DigitalPolicies/issues) to propose changes or additions. See [CONTRIBUTING.md](https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md) for the contribution process.

---

*This policy model is published under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt this material for any purpose, including commercial use, provided you give appropriate credit.*
