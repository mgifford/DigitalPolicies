---
title: "Algorithmic Accountability — Model Policy"
description: "Model policy language establishing independent bias auditing, individual rights to challenge automated decisions, and meaningful human review of algorithms."
---
# Algorithmic Accountability — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-04
> **Maintainers:** Open Digital Policies community
> **Related domains:** [AI Adoption & Governance](../../ai-adoption/full-model/), [Digital Accessibility](../../accessibility/full-model/), [Children & Technology](../../children-technology/full-model/)

---

## Overview

Algorithms and automated systems make or substantially influence decisions about employment, housing, credit, insurance, social benefits, criminal justice, and content access. These decisions affect people's fundamental rights and life chances. Yet most algorithmic decision-making is invisible to the people it affects, unaudited for bias or accuracy, and protected from scrutiny by claims of trade secrecy. This policy model establishes standards for transparency, independent auditing, individual rights, and meaningful redress — applicable to both public sector and private sector algorithmic decision-making that affects fundamental interests.

### The Core Tension

We want the efficiency and consistency that algorithmic systems can provide — without encoding historical discrimination at scale, without removing the human judgment that fairness often requires, and without creating a world where the most consequential decisions in people's lives are made by systems they can neither see nor challenge.

### Scope

This policy model is designed to apply at the level of: *(select all that apply)*

- [x] Municipal / local government
- [x] Regional / state / provincial government
- [x] National government
- [x] Public sector procurement (any level)
- [x] Regulated industry
- [ ] Other: ___________

*Note: Unlike most ODP policy models, Algorithmic Accountability explicitly covers private sector operators in regulated industries (employment, credit, insurance, housing) because the harms these systems cause are equivalent regardless of whether the operator is public or private.*

---

## Pillar 1: Principles

### Foundational Values

**1. People Are Not Data Points**
Reducing a person to a score — a risk score, a creditworthiness score, a hirability score — and making consequential decisions on that basis without human judgment is a category error, not just a governance failure. Algorithmic systems may process relevant information efficiently, but the decision about what to do with that information, especially when it affects someone's life, must involve genuine human judgment — not rubber-stamping of algorithmic outputs.

**2. Discrimination Does Not Become Acceptable When Automated**
Discriminatory outcomes are illegal whether produced by a biased human or a biased algorithm. A system that disproportionately denies employment, credit, housing, or public benefits to members of protected groups is discriminatory regardless of whether the discrimination was intended, whether it is encoded in the model, or whether the operator was unaware. Algorithmic discrimination requires the same accountability as other forms of discrimination.

**3. The Right to Know You Are Being Scored**
People have the right to know when algorithmic systems are being used to make or influence decisions about them, what data those systems are using, and what the significant factors in the output were. Opacity is not a legitimate business interest when the interests at stake include employment, housing, credit, and liberty.

**4. The Right to Challenge**
A right to explanation without a right to challenge is incomplete. People must be able to contest algorithmic decisions, have them reviewed by a human being with authority to reach a different conclusion, and have that review take place in a reasonable time.

**5. Accountability Cannot Hide Behind Trade Secrets**
Trade secret protection for algorithm source code is legitimate where it protects genuine IP. It is not legitimate when it prevents affected people from understanding or challenging decisions made about them, prevents regulators from auditing for discrimination, or functions as a blanket shield against any scrutiny whatsoever. The code itself may be protected; evidence of discriminatory outcomes is not a trade secret.

**6. Auditing Is a Public Obligation, Not a Private Option**
Self-certification and voluntary audits have not produced meaningful accountability. Independent, mandatory audits — with published results — are required for algorithmic systems that affect fundamental rights. Operators choose the auditor; they do not choose the methodology or the publication requirement.

**7. Those Most Affected Should Shape the Standards**
Communities that have historically faced discrimination — through credit redlining, discriminatory hiring, over-policing, or exclusion from housing — are the communities that bear the highest risk of algorithmic harm. Their expertise and lived experience must inform audit methodologies, oversight governance, and complaint processes.

### Equity Considerations

- **Black, Indigenous, and other racialised communities** — Predictive risk scoring in criminal justice, insurance pricing, and mortgage lending have well-documented racially disparate impacts. Algorithmic systems trained on historical data reproduce and in some cases amplify these patterns. Race-neutral algorithms can produce racially discriminatory outcomes through proxy variables.
- **Women and non-binary people** — Hiring algorithms trained on historical hiring data reproduce historical gender exclusions. AI tools used to screen video interviews have been shown to correlate non-binary presentation with lower scores.
- **People with disabilities** — Automated screening often disadvantages people whose communication style, appearance, or physical movements differ from the training data baseline. Hiring, benefits, and educational algorithms frequently penalise disability-related differences.
- **People in poverty** — Credit and insurance algorithms that use postcode, purchasing patterns, or social network data as proxies effectively penalise poverty. Rent-scoring algorithms in the housing market have produced automated exclusion of low-income applicants.
- **Immigrants and non-citizens** — Algorithmic screening in border control, benefits eligibility, and employment disproportionately affects immigrants, who have fewer legal remedies than citizens in many jurisdictions.
- **Young people** — Algorithmic profiling in educational settings and social media creates lasting records that can affect life chances without meaningful consent or review rights.

### Environmental Considerations

The environmental footprint of algorithmic decision-making is primarily in model training (a one-time cost) and inference (ongoing at scale). Large-scale algorithmic decision-making run as cloud services requires data center infrastructure subject to the standards in the [Data Centers model](../../data-centers/full-model/). Algorithmic accountability policy should not inadvertently incentivise more compute-intensive approaches when simpler, more interpretable models would serve accountability goals as well.

---

## Pillar 2: Standards

### Mandatory Standards

> **Standard 1: Disclosure to Affected Individuals**
> Any operator using an automated or algorithmic system to make or substantially assist in making a decision affecting an individual's employment, housing, credit, insurance, access to benefits, educational placement, or access to public services must disclose:
>
> (a) That an algorithmic system was used in the decision;
>
> (b) The general purpose and logic of the system — what type of outcome it predicts or scores and on what basis;
>
> (c) The significant data inputs or factors that most influenced the outcome for this individual;
>
> (d) The right to request human review and the process for doing so;
>
> (e) The right to submit a complaint to the designated oversight body.
>
> Disclosure must be provided in plain language, at or before the time the decision is communicated, without requiring the individual to specifically request it.

*Rationale: NYC Local Law 144 (2023) requires notification to candidates before use of automated employment decision tools. Illinois AIEA (2020) requires pre-interview notification and explanation of AI video interview analysis. GDPR Articles 13–15 require disclosure of automated decision-making. This model standardises and strengthens these disclosure requirements across decision types, and makes disclosure proactive rather than requiring individuals to ask.*

*Reference: NYC Local Law 144; Illinois AIEA (820 ILCS 42); GDPR Articles 13–15, 22*

---

> **Standard 2: Right to Human Review**
> Any individual who has been subject to a decision substantially assisted by an algorithmic system, in the domains covered by Standard 1, has the right to:
>
> (a) Request that the decision be reviewed by a human being with authority to reach a different conclusion;
>
> (b) Have that review completed within 30 days of the request;
>
> (c) Receive a written explanation of the outcome of the human review, including the reasons for any departure from or confirmation of the automated outcome;
>
> (d) Submit additional information relevant to the decision before the human review is completed.
>
> Operators must not design human review processes in which the reviewer has no practical ability to override the algorithmic output, or where review is completed so quickly as to preclude genuine consideration.

*Rationale: The "human-in-the-loop" requirement has been widely adopted but widely circumvented — reviewers who process hundreds of algorithmic outputs per hour are not exercising genuine judgment. This model language targets the circumvention problem by requiring that reviewers have actual authority, actual time, and a written output.*

---

> **Standard 3: Mandatory Independent Bias Audit**
> Operators deploying algorithmic systems in covered domains (Standard 1) must commission an independent bias audit:
>
> (a) Before initial deployment of a new system;
>
> (b) Within 24 months of initial deployment and every 24 months thereafter;
>
> (c) Within 90 days of any material change to the system, its training data, or the population it is applied to;
>
> (d) Within 90 days of receiving a credible complaint alleging discriminatory outcomes.
>
> The audit must:
>
> (i) Be conducted by an independent third party with no financial interest in the system's continued deployment;
>
> (ii) Test for disparate impact across at minimum: race/ethnicity, sex/gender, age (where legally relevant), disability status, and any other protected characteristics defined in applicable anti-discrimination law;
>
> (iii) Use a defined, published methodology — auditors must disclose their methodology in the published report;
>
> (iv) Be published in full, not summarised by the operator, within 60 days of completion;
>
> (v) Include the auditor's recommendations and the operator's response to each recommendation.

*Rationale: NYC Local Law 144 requires annual independent bias audits for automated employment decision tools, with public disclosure — the most directly enforceable bias audit requirement enacted anywhere. Colorado SB21-169 requires insurance companies to test their algorithmic systems for unfair discrimination and submit compliance reports. This model generalises those requirements across covered domains and adds the methodology disclosure requirement that has been criticised as absent from NYC's framework.*

*Reference: NYC Local Law 144 (enforcement effective July 2023); Colorado SB21-169 (initial compliance report December 2024); [NYC DCWP guidance](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page)*

---

> **Standard 4: Data Minimisation and Proxy Prohibition**
> Algorithmic systems in covered domains must not:
>
> (a) Use postcode, neighbourhood, or geographic unit as an input variable where doing so produces a disparate impact on protected groups and the variable lacks documented predictive validity independent of its proxy relationship to protected characteristics;
>
> (b) Use social network data, purchasing patterns, or online behaviour as inputs in employment, housing, credit, or insurance decisions where these function as proxies for protected characteristics;
>
> (c) Use data collected from or about the individual for purposes other than the purpose disclosed at the time of collection, without fresh consent.
>
> Operators must document their analysis of proxy risks for each input variable used in covered systems and provide this documentation to auditors.

*Rationale: Algorithmic discrimination through proxy variables is the primary mechanism by which facially neutral systems produce discriminatory outcomes. Postcode is the most common proxy for race and class in credit, insurance, and employment. The prohibition on undisclosed data repurposing reflects the data minimisation principle of GDPR and the consent requirements of privacy law.*

---

> **Standard 5: Prohibition on High-Risk Unreviewed Automated Decisions**
> No final decision in the following categories may be made by an automated system without human review and written approval: (a) denial of employment for roles that a person has applied to specifically; (b) denial of housing, mortgage, or rental applications; (c) denial or reduction of social benefits, disability accommodations, or healthcare access; (d) decisions with legal effects in criminal or civil justice proceedings; (e) educational placement or exclusion decisions affecting children.

*Rationale: Canada's Directive on Automated Decision-Making Level IV requirement — that final decisions must be made by a human — is extended here to private sector contexts in high-stakes domains. These are the domains where algorithmic error has the most severe and least reversible consequences.*

---

### Aspirational Standards

> **Aspirational Standard 1: Algorithmic Register**
> Jurisdictions should establish a public register of algorithmic systems used in covered domains by operators above a defined size threshold, modelled on the EU AI Act's database of high-risk AI systems. The register should include the system's purpose, covered population, audit status, and known bias findings.

---

> **Aspirational Standard 2: Shared Audit Infrastructure**
> Regulators should develop and publish standardised audit methodologies for common algorithmic uses (hiring, credit, housing) so that audits across different operators are comparable. Without standardised methodology, published audits cannot be compared, and auditors have no common baseline — as has been the case under NYC Local Law 144 since 2023.

---

### Standards Cross-Reference

| Standard Referenced | Body | Version | Notes |
|---|---|---|---|
| NYC Local Law 144 | New York City | 2021/2023 | Bias audit template for employment AEDT |
| Colorado SB21-169 | Colorado Legislature | 2021 | Insurance algorithm testing and reporting |
| Illinois AIEA | Illinois Legislature | 2020 | Video interview disclosure requirements |
| GDPR | EU | 2016/679 | Right not to be subject to automated decisions; disclosure |
| EU AI Act | European Parliament | 2024/1689 | High-risk AI obligations in employment, credit, justice |
| Canada AIA | Treasury Board Secretariat | 2019 | Impact assessment methodology |

---

## Pillar 3: Implementation

### Procurement Requirements

> **Procurement Clause A: Vendor Audit Obligations**
> Any operator procuring an algorithmic system for use in covered domains must contractually require the vendor to: (a) provide access to training data documentation and model performance data across demographic subgroups; (b) cooperate with independent audits commissioned by the operator or regulator; (c) notify the operator within 30 days of becoming aware of bias findings, material performance degradation, or data breaches affecting the system; (d) not claim trade secret protection as grounds to refuse cooperation with a regulatory audit.

---

> **Procurement Clause B: Explainability Requirement**
> Operators must not procure algorithmic systems that are incapable of providing factor-level explanations for individual decisions. "The model is too complex to explain" is not acceptable for systems used in covered domains. Operators must require vendors to demonstrate explainability capability before procurement.

---

### Transition and Timeline

| Milestone | Timeframe from adoption | Notes |
|---|---|---|
| Disclosure requirement in force | 6 months | Applies to all new decisions; existing systems have additional 12 months |
| Human review right in force | 6 months | |
| Bias audit required for new system deployments | 6 months | |
| Bias audit required for existing high-risk systems | 18 months | |
| Bias audit required for all covered systems | 30 months | |
| Proxy prohibition guidance published | 6 months | Guidance on data inputs and documented predictive validity |

### Reporting and Transparency

> **Transparency Requirement**
> Operators must publish annually: (a) a list of algorithmic systems in use in covered domains; (b) links to all current bias audit reports; (c) the number of human review requests received and the outcomes; (d) the number of complaints received relating to algorithmic decisions and their resolution; (e) any material changes made to algorithmic systems in response to audit findings. For operators above a defined size threshold, this report must be submitted to the oversight body as well as published publicly.

### Enforcement

> **Enforcement Clause**
> The designated oversight body may: (a) require operators to produce audit reports, training data documentation, and model performance data; (b) commission independent audits at operator expense where the oversight body has reason to believe published audits are inadequate; (c) require the suspension of any system found to be producing discriminatory outcomes pending remediation; (d) impose penalties scaled to operator revenue for each violation of disclosure, audit, or human review requirements; (e) grant civil society organisations standing to bring enforcement complaints on behalf of affected communities, without requiring a named individual complainant.
>
> Individual complainants may bring claims before the oversight body or the courts; the standard of proof is disparate impact — the complainant need not demonstrate discriminatory intent.

*Notes on enforcement: NYC Local Law 144's penalty structure ($500–$1,500 per day per violation) has produced some compliance but is insufficient for large employers. Scaling penalties to operator revenue (as in GDPR) provides a stronger deterrent. Civil society standing removes the barrier that individual complainants often cannot identify themselves as affected without the disclosure rights the policy creates.*

---

## Pillar 4: Governance

### Oversight Body

> **Oversight Clause**
> An Algorithmic Accountability Office, or designated regulatory body with equivalent powers, shall oversee compliance. The body must have expertise in: machine learning and statistical auditing; employment, credit, housing, and insurance law; human rights and discrimination law; and accessibility. The body must be independent of the executive and of operators of covered algorithmic systems. Governing board members may not have financial relationships with operators subject to the body's oversight.

### Community Representation

> **Participation Clause**
> The oversight body must establish a stakeholder advisory council with seats reserved for: organisations representing workers in sectors where employment algorithms are used; community groups representing communities with documented histories of algorithmic discrimination; civil liberties and privacy advocacy organisations; disability justice organisations; consumer protection advocates; and academic researchers in algorithmic fairness. The council must be consulted before any revision to audit methodology standards, covered domain definitions, or enforcement penalty scales.

*Equity note: Employment, credit, and criminal justice algorithms have disproportionately harmed Black, Indigenous, and other racialised communities. These communities must have meaningful representation in the governance of accountability systems, not only as complainants.*

### Audit and Review

> **Audit Clause**
> The oversight body must conduct annual meta-audits of the independent audits published by operators, assessing: whether audit methodologies meet the minimum standard; whether published audits show evidence of auditor capture (conflicts of interest); and whether findings are being acted upon. Meta-audit results must be published and used to strengthen the mandatory methodology standard.

> **Review Clause**
> This policy shall be reviewed every two years, given the pace of AI and algorithmic system development. The review must include assessment of: whether the covered domains remain appropriate; whether the audit methodology standard requires updating; whether enforcement has produced measurable reduction in discriminatory outcomes. The review must include a 60-day public comment period with targeted outreach to affected communities.

---

## Real-World Examples

### New York City — Local Law 144 (Automated Employment Decision Tools)
**Enacted:** 2021; enforcement effective July 5, 2023
**Type:** City law
**Link:** https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
**Summary:** Employers and employment agencies using automated tools to screen applicants or assess employees for promotion must commission annual independent bias audits, publish results, and provide candidates at least 10 business days' notice that such a tool is used. Penalties of $500–$1,500 per day per violation, enforced by the Department of Consumer and Worker Protection. The first enacted bias audit mandate anywhere. Community critique: the methodology for bias audits is not standardised, making published audits incomparable; the "independent third party" requirement lacks accreditation standards; small employers may lack resources to comply; the law does not address tools that score candidates but stop short of formally filtering them out.

---

### Colorado — SB21-169 (Insurance Algorithms)
**Enacted:** Signed July 2021; first compliance reports due December 2024
**Type:** State law
**Link:** https://doi.colorado.gov/for-consumers/sb21-169-protecting-consumers-from-unfair-discrimination-in-insurance-practices
**Summary:** Colorado insurers using external consumer data and algorithms must demonstrate they test their systems to ensure no unfair discrimination against protected groups including race, religion, sex, sexual orientation, and disability. Requires written governance policies, vendor documentation, ongoing monitoring, and annual compliance reports to the Division of Insurance. Broader in scope than NYC LL144 — applies to insurance across lines (auto, home, life, health) and requires ongoing monitoring not just periodic audits. Community critique: compliance reporting began in December 2024; too early to assess effectiveness; methodology for testing is not standardised.

---

### Illinois — Artificial Intelligence Video Interview Act (AIEA)
**Enacted:** January 2020
**Type:** State law
**Link:** https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4015
**Summary:** Employers using AI to analyse video interviews must notify applicants before the interview, explain how AI analysis works, describe what characteristics the AI evaluates, and obtain consent. Applicants who do not consent cannot have AI used to analyse their interview. Upon request, employers must delete video recordings and instruct any third parties in possession of the recordings to delete them within 30 days. First enacted AI transparency requirement specifically targeting hiring algorithms, and notable for requiring informed consent rather than just disclosure. Weakness: does not require bias auditing or publication of aggregate results.

---

### Canada — Algorithmic Impact Assessment Framework
**Enacted:** 2019 (mandatory for federal government)
**Type:** Treasury Board Directive
**Link:** https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html
**Summary:** Federal institutions must complete a structured AIA before deploying automated decision systems. The AIA tool asks 65 risk questions and 41 mitigation questions, producing an impact score and a set of required mitigations proportionate to impact level. Impact Level IV requires human decision-making. AIA results must be published. Provides the most structured and transparent assessment methodology available for government AI. Community critique: enforcement is weak; the questionnaire can be gamed; "automated decision system" definition has gaps; federal only.

---

### European Union — EU AI Act (High-Risk AI Obligations)
**Enacted:** 2024 (Regulation (EU) 2024/1689); high-risk obligations effective August 2026
**Type:** EU Regulation
**Link:** https://artificialintelligenceact.eu/annex/3/
**Summary:** Employment, recruitment, and worker management AI systems are classified as high-risk under Annex III and subject to strict obligations: risk assessment and management; technical documentation; transparency to affected individuals; human oversight; accuracy and robustness requirements; and registration in an EU database. Credit scoring and justice administration AI are similarly classified. Transparency obligations include informing individuals that AI was used and the right to request an explanation. Most comprehensive sectoral scope of any enacted framework. Community critique: compliance timelines (2026–2027) lag the deployment of the systems being regulated; self-certification for some high-risk categories; enforcement depends on 27 national market surveillance authorities.

---

### Santa Clara Principles on Content Moderation
**Established:** 2018; Version 2.0 released 2021
**Type:** Civil society standards (endorsed by major platforms)
**Link:** https://santaclaraprinciples.org/
**Summary:** Sets expectations for transparency and accountability in user-generated content moderation by platforms. Core demands: publish comprehensive numbers on moderation actions; provide clear notice to affected users; offer robust appeals processes. Version 2.0 added more granular standards for large platforms and extended to address government requests for content removal. Demonstrates the civil society standard-setting model where community organisations define expectations that regulators and platforms subsequently adopt. Weakness: endorsement is voluntary; no enforcement mechanism.

---

## Gaps and Known Weaknesses

- **Audit methodology standardisation** — The most significant practical weakness across all enacted bias audit requirements is the absence of standardised methodology. Auditors produce results that cannot be compared across operators or over time. Developing a published minimum methodology standard is the highest-priority gap in this model.
- **Credit and insurance algorithms are severely underregulated** — NYC LL144 covers only employment. Colorado SB21-169 covers only insurance. Credit scoring algorithms — which affect housing, auto purchase, and financial inclusion — have no mandatory audit requirement in most jurisdictions. This gap is significant.
- **Criminal justice algorithms** — Predictive policing, recidivism scoring (COMPAS and similar tools), and bail decision algorithms affect liberty and are largely excluded from existing accountability frameworks. This is a critical and underserved domain.
- **Who audits the auditors** — No jurisdiction has established auditor accreditation or oversight. Audit quality is unverifiable; conflicts of interest are possible. A meta-audit requirement (as proposed in Pillar 4) is one partial remedy, but formal auditor standards are needed.
- **Global South** — Algorithmic accountability legislation is almost entirely a North American and European phenomenon. High-stakes algorithmic systems are deployed in Global South contexts, often by international organisations and development banks, with no accountability framework.
- **Intersectionality** — Most bias audit requirements test protected characteristics independently. Systems can produce discriminatory outcomes specifically for people at the intersection of multiple characteristics (e.g. Black women, disabled immigrants) that are invisible to single-axis analysis. Intersectional testing methodology needs development.
- **Data access for researchers** — Meaningful algorithmic accountability requires independent researchers to be able to audit platform and operator systems, replicate claimed audit results, and study systemic effects across populations. Access to the data needed for such research is almost entirely controlled by operators. The EU Digital Services Act's vetted researcher access provisions (Article 40) represent the most significant enacted step toward research data access, but the framework is limited to very large platforms and to content-related data rather than algorithmic decision data. No equivalent exists in North America. Research-grade access to algorithmic decision data — with appropriate privacy protections — is a prerequisite for meaningful independent accountability.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| [AI Adoption & Governance](../../ai-adoption/full-model/) | AI Adoption sets the framework; Algorithmic Accountability provides sector-specific enforcement and audit standards |
| [Digital Accessibility](../../accessibility/full-model/) | Algorithmic systems that affect disabled people must meet accessibility standards and must not discriminate on the basis of disability-related presentation |
| [Children & Technology](../../children-technology/full-model/) | Algorithmic systems used in educational settings require the heightened protections of that domain |
| [Data Centers](../../data-centers/full-model/) | Large-scale algorithmic processing requires energy-efficient infrastructure |
| [Freedom of Expression](../../freedom-of-expression/full-model/) | Content moderation algorithms are a key application of algorithmic accountability standards |
| [Platform Work & Algorithmic Labour Rights](../../platform-work/full-model/) | Algorithmic management systems used in platform work are covered by this domain's bias audit standards; the Platform Work domain addresses worker-specific rights |
| [Surveillance Pricing & Consumer Data Rights](../../surveillance-pricing/full-model/) | Algorithmic pricing systems require bias audit and disparate impact testing consistent with the standards in this domain |
| [Platform Liability & Systemic Accountability](../../platform-liability/full-model/) | Platform recommendation systems are algorithmic decision systems requiring the transparency and audit standards established here; the EU Digital Services Act establishes research data access and algorithmic transparency obligations for large platforms that complement this model |

---

## Glossary

**Automated Employment Decision Tool (AEDT):** Under NYC Local Law 144, a machine learning or AI tool used to substantially assist or replace discretionary decision-making in screening job applicants or assessing employees for promotion. The term used specifically in New York's framework.

**Bias Audit:** An independent assessment of an algorithmic system for evidence of disparate impact across protected groups. Must be conducted by a party independent of the operator, using a defined methodology, with results published.

**Disparate Impact:** A legal doctrine holding that a facially neutral policy or practice can be discriminatory if it disproportionately disadvantages a protected group, regardless of intent. The standard against which bias audits measure algorithmic systems.

**Human-in-the-Loop:** A design requirement that a human reviews algorithmic outputs before they become final decisions. Meaningful human-in-the-loop review requires that the reviewer has time, information, and actual authority to reach a different conclusion. Nominal review — rubber-stamping — does not satisfy this requirement.

**Proxy Variable:** A data input that correlates strongly with a protected characteristic (race, sex, disability) without directly measuring it. Postcode is a common proxy for race and class. Using proxy variables can produce discriminatory outcomes even in systems that do not use protected characteristics directly.

**Trade Secret:** Confidential business information that provides competitive advantage and is protected from disclosure. Relevant in algorithmic accountability because vendors frequently claim trade secret protection to prevent audits. The algorithm code itself may be a trade secret; evidence of discriminatory outcomes is not.

---

## Contributing to This Policy Model

Priority contribution needs for this model:

- **Audit methodology standard** — A draft minimum methodology for bias audits in employment, credit, and insurance contexts
- **Criminal justice algorithms** — Model language specifically addressing predictive policing and recidivism scoring
- **Intersectional testing guidance** — Methodology for testing algorithmic fairness at the intersection of multiple protected characteristics
- **Global South examples** — Algorithmic accountability frameworks or advocacy from African, Asian, and Latin American jurisdictions
- **Auditor accreditation proposal** — A draft framework for auditor standards and oversight

All substantive changes go through a minimum 14-day public comment period before merging.

---

## Changelog

| Version | Date | Summary of changes |
|---|---|---|
| 0.1 | 2026-04-04 | Initial draft — four pillars, real-world examples from NYC, Colorado, Illinois, Canada, EU, Santa Clara Principles |
| 0.2 | 2026-04-18 | Added cross-domain dependencies to Platform Work, Surveillance Pricing, and Platform Liability domains |
| 0.3 | 2026-04-18 | Updated Platform Liability cross-domain dependency to reference EU DSA researcher access; added data access for researchers as identified gap |

---

*This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.*
