# Web Sustainability — Policy Domain Overview

> **Status:** `Emerging — policy framework not yet formalised in legislation`
> **Last updated:** 2026-04-04
> **Related domains:** [Data Centers](../data-centers/), [Right to Repair & E-Waste](../right-to-repair/), [Digital Accessibility](../accessibility/)
> **Key source:** W3C Web Sustainability Guidelines (WSG 1.0, 2023; Draft Note 2025)

---

## What This Domain Is

Web sustainability is the practice of designing, building, and operating digital products and services in ways that minimise environmental impact, respect planetary boundaries, and align with social equity. It is an emerging policy domain: no jurisdiction has yet enacted comprehensive legislation specifically on web sustainability, but the W3C's Web Sustainability Guidelines (WSG) provide the most rigorous technical foundation currently available.

This domain sits at the intersection of three existing policy areas:
- **Data centers** (infrastructure energy and water)
- **Right to repair and e-waste** (hardware lifecycle)
- **Digital accessibility** (sustainable design is accessible design)

A full policy model for web sustainability is in development. This README documents the domain's scope, the W3C WSG as the primary reference, and the policy levers most ready for adoption.

---

## The W3C Web Sustainability Guidelines (WSG)

The WSG, published as a W3C Draft Note in 2025, provides 92 guidelines and 254 success criteria across four categories:

**1. User Experience Design** — sustainable UX reduces unnecessary data transfer, avoids dark patterns that cause re-visits, designs for efficiency and clarity. Overlaps significantly with accessibility design principles.

**2. Web Development** — efficient code, minimal dependencies, avoiding JavaScript bloat, using system fonts, optimising images and media. Clean code is low-footprint code.

**3. Infrastructure** — hosting choices, CDN usage, green hosting providers, minimising server requests. The infrastructure choices of individual organisations aggregate to significant grid impact.

**4. Business and Product Strategy** — sustainable product lifecycles, avoiding planned obsolescence of software, open standards preference, long-term maintainability.

The WSG is structured similarly to WCAG — with conformance levels and measurable criteria — making it a plausible basis for future policy mandates, in the same way WCAG became a policy standard.

---

## Policy Levers Available Now

While comprehensive web sustainability legislation is not yet enacted, several policy tools are available:

**Procurement preference for green hosting.** Governments can require that public digital services use hosting providers with certified renewable energy use, low PUE ratios, and water efficiency commitments. This is achievable within existing procurement frameworks.

**Carbon reporting for public digital services.** Governments can require that public websites and apps report their estimated carbon footprint (using tools like the Website Carbon Calculator or CO2.js methodology). This creates transparency and market pressure without requiring technical mandates.

**WSG alignment as a procurement signal.** Procurement criteria for digital services can ask vendors to demonstrate WSG alignment alongside WCAG conformance — treating web sustainability as a quality criterion, even before it is a legal requirement.

**Integration with accessibility requirements.** Accessible design and sustainable design share significant technical ground. Requiring accessible design (semantic HTML, clean structure, reduced JavaScript dependency, plain text alternatives) also reduces digital carbon footprint. Treating them as complementary requirements in procurement makes both more achievable.

**Software longevity requirements.** Requiring that publicly procured software be maintainable, documented, and not dependent on vendor-specific infrastructure directly addresses the software side of digital sustainability. This aligns with the Cyber Resilience Act's lifetime support requirements and right to repair principles.

---

## Why This Hasn't Been Legislated Yet

Several factors have delayed web sustainability legislation:

- **Measurement is not standardised.** Unlike building energy performance (kWh/m²) or vehicle emissions (g CO2/km), there is no single accepted metric for website carbon footprint. Multiple methodologies exist; results vary significantly.
- **Attribution is complex.** A website's carbon footprint depends on the user's device, their network, the CDN, the server — attribution across this chain is genuinely difficult.
- **Industry resistance.** Major digital platforms have significant interest in avoiding mandatory sustainability reporting for their services.
- **Political priority.** Web sustainability has not yet reached the political salience of data center energy policy, despite the aggregate impact of inefficient web design being substantial.

---

## What to Watch

- **W3C WSG finalisation** — The Draft Note status means WSG is not yet a formal W3C Recommendation. When it achieves Recommendation status, it becomes a much stronger basis for policy reference (comparable to WCAG).
- **EU Ecodesign Regulation extension to software** — The European Commission is considering extending ecodesign principles to software products. If enacted, this would be the first mandatory sustainability requirement for digital products beyond hardware.
- **GRI digital sustainability reporting** — The Global Reporting Initiative (GRI) is developing digital sustainability reporting standards that would require organisations to disclose their digital carbon footprint as part of broader ESG reporting.
- **Digital Sustainability Alliance** — Industry-led initiatives are developing certification schemes for sustainable web practices. These may become procurement reference points before regulation arrives.

---

## Full Policy Model

A full four-pillar policy model for web sustainability is planned for a future version of this repository. Contributors with expertise in digital carbon measurement, green hosting policy, and software lifecycle policy are especially welcome.

Open an Issue to contribute to this domain.
