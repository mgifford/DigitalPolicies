---
---
# AI Adoption & Governance — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-13
> **Maintainers:** Open Digital Policies community
> **Related domains:** [Algorithmic Accountability](../../algorithmic-accountability/full-model/), [Data Centers](../../data-centers/full-model/), [Open Source in Government](../../open-source-in-government/full-model/), [Digital Sovereignty](../../digital-sovereignty/full-model/)

---

## Overview

Governments and public institutions are adopting AI systems across healthcare, social services, justice, employment, and public administration. Done well, AI can improve service quality and reduce costs. Done poorly — or without accountability — it can perpetuate discrimination at scale, undermine due process, erode public trust, and create dependency on a handful of private vendors whose objectives are not aligned with the public interest. This policy model establishes the conditions under which public sector AI adoption is legitimate: transparent, assessed for risk and impact, subject to meaningful human oversight, and contestable by affected people.

### The Core Tension

We want AI to improve public services — without surrendering the right to fair, explainable decisions to opaque systems, without concentrating critical public functions in proprietary platforms we cannot audit or exit, and without the energy and environmental cost of AI deployment exceeding its benefit.

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

**1. Public AI Must Serve the Public Interest**
AI systems used by governments are not neutral tools — they encode choices about who matters, what counts as evidence, and which errors are acceptable. Every AI system adopted by a public body must have a clear, documented public benefit. The question "does this make government more efficient?" is insufficient; the right question is "does this make government better for the people it serves?"

**2. Human Dignity and Due Process Are Non-Negotiable**
Decisions that affect people's access to benefits, housing, employment, healthcare, education, immigration status, or liberty require procedural fairness — notice, reasons, and the right to challenge. No AI system may be used to circumvent these requirements. The burden of demonstrating that an AI-assisted process preserves due process falls on the procuring body, not the affected person.

**3. Proportionality: Risk Must Match Scrutiny**
Low-risk AI uses (chatbots answering FAQs, document summarisation for internal staff) require different scrutiny than high-risk uses (scoring benefits eligibility, predicting recidivism, screening job applications). Policy must be calibrated to risk, not applied uniformly — but calibration requires rigorous risk classification, not self-certification.

**4. Transparency to Affected People**
People affected by AI-assisted decisions have the right to know: that AI was used; what it was used for; what the significant factors in the decision were; and how to challenge the outcome. Transparency to regulators is necessary but not sufficient — the people most affected must be able to understand and contest what was done to them.

**5. Accountability Cannot Be Outsourced**
When a government body uses an AI system built by a private vendor, accountability for outcomes remains with the public body. "The algorithm decided" is not a legally or ethically acceptable answer. Procurement structures must ensure that accountability cannot be laundered through vendor relationships.

**6. Environmental Cost Is a Factor in AI Adoption Decisions**
Training and operating large AI models requires significant energy and water. Adopting AI without accounting for its environmental footprint is not a neutral choice. AI adoption decisions must include an assessment of operational energy and water consumption and must not proceed where environmental cost is disproportionate to public benefit.

**7. No Prohibited Uses, Regardless of Efficiency Arguments**
Some AI applications are incompatible with human rights and should not be adopted regardless of claimed benefits: mass biometric surveillance in public spaces; systems designed to predict crime based on group membership; social scoring systems; emotion recognition in employment or education; and systems that exploit vulnerabilities for behavioural manipulation. These prohibitions are not subject to cost-benefit analysis.

### Equity Considerations

- **Historically marginalised communities** — AI systems trained on historical data reproduce historical discrimination. Communities that have faced discrimination in housing, employment, criminal justice, and social services face the highest risk of being harmed by predictive and scoring systems. Impact assessment must specifically address this.
- **People with disabilities** — AI systems are often inaccessible by design: facial recognition fails on non-normative presentations; natural language systems fail for people who communicate differently; automated phone systems may exclude people who cannot speak. Accessibility is a requirement for public AI systems, not an afterthought.
- **Older adults and people with low digital literacy** — Automation of public services that previously involved human contact removes access for people who cannot navigate digital interfaces. Fully human alternatives must be preserved alongside any AI-assisted channel.
- **Global South populations** — AI systems developed and tested in high-income country contexts may perform poorly or harmfully when applied to different demographic groups. Where AI systems are deployed by development institutions or exported internationally, performance validation in the target context is required.
- **Public sector workers** — AI adoption in government affects the workers who deliver public services. Procurement must include worker consultation and must not be used primarily to reduce headcount in ways that harm service quality.

### Environmental Considerations

AI model training is among the most energy-intensive computing tasks. Inference (running a deployed model) varies enormously by model size and architecture — a small, purpose-specific model may use a fraction of the energy of a general-purpose large language model. AI adoption policy must require disclosure of operational energy consumption, preference for energy-efficient model selection, and integration with data center energy policy (see [Data Centers model](../../data-centers/full-model/)).

---

## Pillar 2: Standards

### Mandatory Standards

> **Standard 1: Prohibited AI Applications**
> The following AI applications are prohibited for use by public bodies and in publicly-funded services, regardless of claimed benefits, efficiency gains, or vendor representations:
>
> (a) Real-time remote biometric identification (facial recognition, gait recognition, voice identification) in publicly accessible spaces, except for the investigation of serious crimes with prior judicial authorisation and subject to strict time and geographic limits;
>
> (b) Social scoring systems that evaluate or classify individuals based on their social behaviour, personal characteristics, or predicted future behaviour for the purpose of determining access to public services, benefits, or rights;
>
> (c) Emotion recognition systems in employment, education, or any context affecting individual rights or access to services;
>
> (d) Systems that manipulate individuals through subliminal techniques, or that exploit known vulnerabilities (including age, disability, financial precarity, or emotional state) to influence behaviour;
>
> (e) Predictive policing systems that target individuals or groups based on predicted future offending rather than specific evidence of past conduct;
>
> (f) Systems that deduce protected characteristics (race, religion, sexual orientation, political opinion, health status) from proxy variables for the purpose of differential treatment;
>
> (g) AI systems configured to deny being artificial intelligence when sincerely asked by a user, or to simulate the identity of a specific named human official or employee.

*Rationale: These prohibitions are drawn directly from EU AI Act Article 5 (prohibited AI practices, effective February 2025). They represent the international consensus of what is incompatible with human dignity and fundamental rights. The list is not exhaustive — new prohibited applications may be added through the review process as technology and evidence evolve.*

*Reference: EU AI Act Regulation (EU) 2024/1689, Article 5; [artificialintelligenceact.eu](https://artificialintelligenceact.eu/article/5/)*

---

> **Standard 2: Mandatory Algorithmic Impact Assessment (AIA)**
> Before deploying any AI system that makes or substantially assists in making decisions affecting individuals, a public body must complete an Algorithmic Impact Assessment. The AIA must:
>
> (a) Classify the system by impact level (Level I–IV) based on the nature of the decision, the population affected, the reversibility of errors, and the availability of human alternatives;
>
> (b) For Level II systems and above: be reviewed by an independent party with relevant technical and equity expertise before deployment;
>
> (c) For Level III systems and above: be subject to a public comment period of not less than 30 days and require written approval from the designated oversight body;
>
> (d) For Level IV systems: require that final decisions be made by a human being, with the AI system serving only in an advisory capacity; and require external peer review and published summary;
>
> (e) Be updated and re-submitted whenever the system, its training data, or its operational context changes materially;
>
> (f) For any AI system that generates natural language outputs visible to members of the public or used in official government communications: include vendor-provided documentation of (i) adversarial prompt testing for harmful and misleading outputs, (ii) factual reliability evaluation relative to the intended use case, and (iii) bias evaluation of generated content across protected characteristics. This documentation must appear in the vendor's tender response alongside materials required under Standard 4(a).

*Rationale: Canada's Directive on Automated Decision-Making (2019) is the most developed national implementation of tiered AI impact assessment for government. Its four-level impact framework with proportionate mitigation requirements provides a tested model. The 65-question AIA questionnaire developed by the Treasury Board Secretariat demonstrates that this level of assessment is operationally feasible.*

*Reference: [Canada Directive on Automated Decision-Making](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592); [Canada AIA Tool](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html)*

---

> **Standard 3: Transparency to Affected Individuals**
> Where an AI system is used to make or substantially assist in making a decision affecting an individual, the individual must be:
>
> (a) Informed before or at the time of the decision that AI was used, in plain language they can understand;
>
> (b) Provided, upon request, with a meaningful explanation of the significant factors that influenced the decision — not merely a statement that AI was used;
>
> (c) Given information about how to challenge or seek review of the decision;
>
> (d) Able to request a decision made or reviewed by a human being, without penalty or unexplained delay;
>
> (e) Where the public body uses an AI system that interacts with members of the public through a conversational interface (chatbot, virtual assistant, or similar): informed at the outset of each interaction that they are communicating with an AI system, not a human. AI-generated written communications issued under the name of a public official, public body, or public service must include a prominent disclosure that the content was produced with AI assistance. Public bodies must not deploy conversational AI systems configured to deny being AI when sincerely asked, nor configure AI to present itself as a named human employee or official.
>
> These rights apply regardless of whether the AI system is proprietary. Vendors may not contract away the public body's obligation to provide explanations to affected individuals.

*Rationale: GDPR Article 22 establishes a right not to be subject to solely automated decisions with legal or significant effects, and Articles 13–15 require disclosure of the "logic involved." The EU AI Act extends transparency obligations to high-risk AI. In practice, the right to explanation has been weakly enforced; this model language makes the obligation explicit and vendor-proof.*

*Reference: GDPR Articles 13–15, 22; EU AI Act Articles 13, 86*

---

> **Standard 4: Procurement Restrictions**
> When procuring AI systems, public bodies must ensure:
>
> (a) The AI system's performance data, bias testing results, and training data documentation are available to the procuring body — not merely a vendor's summary of those results;
>
> (b) The contract includes the right for the public body to commission independent audits of the system's performance and fairness;
>
> (c) Contractual lock-in that prevents the body from switching to alternative AI systems or reverting to non-AI processes is prohibited;
>
> (d) The AI system is assessed against accessibility requirements (WCAG 2.2 AA minimum for any user-facing component) before procurement;
>
> (e) The operational energy consumption of the deployed system is disclosed by the vendor, and this information is considered in procurement evaluation;
>
> (f) The AI system does not originate from a vendor: (i) subject to export controls relating to surveillance or censorship technology in any relevant jurisdiction; (ii) with documented supply relationships providing surveillance AI capabilities to governments sanctioned by the procuring jurisdiction for human rights violations; or (iii) whose contractual terms would require transfer of operational data to a foreign government authority without judicial process. The procuring body must certify compliance with this sub-clause in the procurement record.

*Rationale: Public bodies are at a structural disadvantage in AI procurement — vendors have far more information about their systems than buyers. Performance data, audit rights, and exit rights are minimum safeguards against procurement capture. The energy disclosure requirement integrates AI governance with environmental policy.*

---

> **Standard 5: AI Use Registry**
> All public bodies subject to this policy must maintain and publish a registry of AI systems in operational use. The registry must include, for each system:
>
> (a) Name and description of the system and its purpose;
>
> (b) The vendor (if any) and whether the system is proprietary or open source;
>
> (c) The decisions or processes it is used in, and the population affected;
>
> (d) The impact level classification under Standard 2;
>
> (e) Date of deployment and date of most recent AIA;
>
> (f) Whether public comment was sought and a summary of responses;
>
> (g) Operational energy consumption (where disclosed by vendor or measurable);
>
> (h) For systems at Impact Level II or above: a link to, or reproduction of, a structured vendor risk disclosure covering — (i) intended use cases and uses the system is not designed for; (ii) known failure modes and performance degradation conditions; (iii) error rates disaggregated by demographic subgroup where available; (iv) training data sources and known gaps; (v) any third-party red-teaming or adversarial evaluation completed. The oversight body must publish a standard template for this disclosure within six months of policy adoption. Vendors that refuse to provide this disclosure are ineligible for Level II or above contracts.
>
> The registry must be machine-readable and updated within 30 days of any material change.

*Rationale: New Zealand's Algorithm Charter (2020) establishes a commitment to transparency about government algorithm use but lacks enforcement and has produced inconsistent results. Seattle's Responsible AI Program (2025) includes a commitment to publicly available documentation of city AI system usage. A mandatory registry with standardised fields addresses both the commitment and the consistency gap.*

*Reference: [New Zealand Algorithm Charter](https://data.govt.nz/toolkit/data-ethics/government-algorithm-transparency-and-accountability/algorithm-charter/); [Seattle Responsible AI Program](https://www.seattle.gov/tech/data-privacy/the-citys-responsible-use-of-artificial-intelligence)*

---

### Aspirational Standards

> **Aspirational Standard 1: Preference for Open and Auditable AI**
> Where AI systems are procured for use in high-impact decisions, public bodies should prefer systems whose model weights, training data documentation, and evaluation results are openly published, or where independent code audit is contractually guaranteed. Where a proprietary system is selected for high-impact use, the procurement justification must explain why no auditable alternative was available.

*Rationale: "Open" AI systems are not automatically safer or fairer — open weights do not guarantee explainability or fairness. But they enable independent scrutiny that proprietary systems categorically prevent. For decisions that affect people's rights, independent scrutiny is a minimum requirement of legitimacy.*

---

> **Aspirational Standard 2: Shared AI Infrastructure**
> Jurisdictions should explore shared, interoperable AI infrastructure for common government functions (document processing, translation, accessibility tooling, question-answering over public information) rather than each jurisdiction procuring separately. Shared infrastructure reduces costs, enables shared governance, and avoids vendor capture through coordination.

*Rationale: The Digital Public Infrastructure model (see [Digital Public Infrastructure domain](../../digital-public-infrastructure/full-model/)) applies directly to government AI. Common functions do not need to be solved independently by every municipality.*

---

> **Aspirational Standard 3: Regulatory Sandbox for Evidence-Based AI Governance**
> Jurisdictions should consider establishing a time-limited regulatory sandbox — administered by the AI oversight body — that allows controlled real-world deployment of AI systems under temporary waivers of specified regulations, subject to mandatory oversight, reporting, and safety constraints. The sandbox must: (a) assign liability and insurance obligations before deployment, not after; (b) restrict participation to specific use cases and workflows, not to AI as a category; (c) require systematic data collection on failures, successes, and unintended effects; (d) feed findings into the AIA methodology, prohibited-uses list, and impact level classification on a defined schedule; and (e) publish all findings publicly within 12 months of each sandbox cycle. Participation in the sandbox must not be used to obtain permanent exemptions from the standards in this policy; all sandbox participants are subject to full policy requirements upon expiry of the sandbox period.

*Rationale: Three existing models together describe the full institutional architecture for evidence-based AI governance. Utah's Artificial Intelligence Policy Act (2024) provides the most operationally specific AI sandbox to date — use-case waivers, upfront liability assignment, mandatory data collection, feedback into permanent rulemaking; this is the deployment layer. Canada's Centre for Regulatory Innovation (CRI, est. 2018) provides the meta-regulatory capability layer: building regulators' institutional capacity to experiment across domains, with shared toolkits and cross-department collaboration mechanisms; more scalable than Utah but less focused on specific AI deployments. The FDA's Centers of Excellence in Regulatory Science and Innovation (CERSI) programme provides a third pattern — the methodology generation layer: government funds university-based researchers to work on regulator-defined unresolved questions, with outputs explicitly designed to become standards and guidance rather than academic papers. Applied to AI governance, a CERSI-equivalent would have the oversight body commission academic partners to build the pre-certification methodology, AIA questionnaire updates, and audit standards that the oversight body cannot develop alone. The three layers are complementary: Utah (what a sandbox looks like operationally); CRI (how to build shared regulatory capability); CERSI (how to generate the methodology that both require). Key design principles for the sandbox: liability assigned upfront; waivers use-case specific, not categorical; findings public; sandbox produces governance improvements, not permanent exemptions.*

---

> **Aspirational Standard 4: International Governance Coordination**
> The oversight body should seek participation in international AI governance coordination forums and maintain formal information-sharing relationships with equivalent oversight bodies in at least three other jurisdictions. The oversight body should contribute to, and adopt where appropriate, internationally coordinated standards for high-risk AI categories, vendor risk disclosure formats (Standard 5(h)), and audit methodologies. Participation in such forums must not create obligations to defer to any foreign regulatory body or to weaken the protections established by this policy.

*Rationale: CHT Principle 6 identifies coordinated international limits as essential to preventing AI from being used to surveil, manipulate, and destabilise across borders. Within the existing government scope this translates to institutional coordination rather than regulatory harmonisation — preserving local sovereignty while enabling shared learning and joint standard-setting.*

---

### Standards Cross-Reference

| Standard Referenced | Body | Version | Notes |
|---|---|---|---|
| EU AI Act | European Parliament | 2024/1689 | Prohibited uses; high-risk obligations; transparency rights |
| Canada Directive on Automated Decision-Making | Treasury Board Secretariat | 2019 (current) | AIA framework; impact levels; human oversight requirements |
| GDPR | EU | 2016/679 | Right to explanation; automated decision rights |
| WCAG | W3C | 2.2 | Accessibility requirement for user-facing AI components |
| ISO/IEC 42001 | ISO | 2023 | AI management system standard — aspirational |
| NIST AI RMF | NIST | 1.0 (2023) | AI risk management framework — useful for AIA methodology |
| Utah Artificial Intelligence Policy Act | Utah Legislature | 2024 (SB 149) | Regulatory sandbox model; evidence-based rulemaking; upfront liability assignment |
| CHT AI Doc & Liability Framework | Center for Humane Technology | 2024 | Duty of care principles; AI Data Sheet concept; products liability approach for AI |
| Centre for Regulatory Innovation (CRI) | Treasury Board of Canada Secretariat | Est. 2018 | Meta-regulatory support unit; Regulators' Experimentation Toolkit; sandbox capability infrastructure |
| FDA CERSI Programme | FDA / partner universities (UCSF/Stanford, JHU, UMd, Yale/Mayo, Triangle) | Ongoing | Academic-regulatory partnership model; problem-driven research → standards and guidance; AI/ML medical device frameworks |
| FAS — Who Governs Government AI? | Federation of American Scientists | 2025 | Implementation gap analysis; cross-agency variance; workforce capacity as governance prerequisite |

---

## Pillar 3: Implementation

### Procurement Requirements

> **Procurement Clause A: AIA Before Procurement**
> No contract for an AI system at Impact Level II or above may be executed without a completed AIA. The AIA must be published alongside the procurement record. Vendors must provide, as part of their tender response, documentation of bias testing, performance metrics across demographic subgroups, and known failure modes.

---

> **Procurement Clause B: Human Alternative Preservation**
> Where a public service is being partially or fully automated using AI, the procurement must include provision for maintaining a human-staffed alternative for people who cannot or choose not to use the automated channel. The cost of preserving human alternatives must be included in the total cost comparison when evaluating AI procurement.

---

> **Procurement Clause C: Vendor Accountability**
> AI procurement contracts must include: (a) performance targets and demographic fairness metrics with defined consequences for underperformance; (b) the right for the public body to commission independent audits without vendor consent; (c) a requirement that the vendor notify the public body within 30 days of becoming aware of any material error, bias finding, or security vulnerability in the deployed system; (d) no indemnification clause that transfers liability for discriminatory outcomes from the vendor to the public body.

---

> **Procurement Clause D: Worker Consultation**
> Before executing a contract for an AI system that would substantially automate, reduce, or restructure tasks currently performed by public sector employees, the procuring body must conduct documented consultation with recognised labour organisations representing affected workers. Consultation must occur before the AIA is finalised and must address: (a) the nature and scope of anticipated changes to roles and responsibilities; (b) retraining, redeployment, or other workforce transition commitments; (c) how productivity gains will be allocated between service improvement and workforce impact. A summary of consultation outcomes must be published as part of the AIA.

---

### Small Jurisdiction Implementation

> **Proportionality Clause**
> A jurisdiction that lacks the internal technical capacity to conduct a full independent AIA may use a streamlined process for Level I and Level II systems, provided it: (a) uses the centralised pre-certification list published by the oversight body, covering AI systems that have been pre-assessed against this policy's standards; (b) documents in the procurement record why full independent assessment is not feasible; and (c) accepts that pre-certification does not exempt the jurisdiction from the transparency, registry, and worker consultation requirements. Small jurisdictions remain subject to the full AIA requirement for Level III and Level IV systems without exception. The oversight body must publish an initial list of pre-assessed common AI systems within 12 months of policy adoption, and update it at least annually.

*Rationale: The AIA process requires technical capacity that small municipalities cannot realistically sustain independently. Shared pre-certification infrastructure allows smaller jurisdictions to benefit from this policy framework without being effectively locked out of AI procurement. The model draws on the CHT principle that regulatory protections should be proportionate to deployer scale, adapted here for jurisdictional scale. Full protections for high-risk systems (Level III–IV) are preserved regardless of size.*

---

### Transition and Timeline

| Milestone | Timeframe from adoption | Notes |
|---|---|---|
| Prohibited applications register published | 3 months | Document any existing systems that may need decommissioning |
| AIA procedure published | 3 months | Based on Canada's AIA tool as starting point |
| AI Use Registry launched | 6 months | Begin with systems already in use |
| AIA mandatory for all new AI procurements | 6 months | |
| AIA required for existing Level III–IV systems | 12 months | Retrospective assessment |
| AIA required for all existing Level I–II systems | 24 months | |
| Full registry compliance | 24 months | |

### Reporting and Transparency

> **Transparency Requirement**
> All public bodies must publish an annual AI governance report covering: (a) the AI Use Registry as of the report date; (b) AIAs completed during the year, with links; (c) any prohibited-use findings and how they were resolved; (d) complaints received relating to AI-assisted decisions, and outcomes; (e) independent audits commissioned or completed; (f) estimated operational energy consumption of AI systems in use; (g) accessibility assessment outcomes for user-facing AI systems. The report must include a plain-language summary accessible to members of the public.

### Enforcement

> **Enforcement Clause**
> The designated oversight body may: (a) audit any public body's AI Use Registry and AIA compliance; (b) require immediate suspension of any AI system found to be in a prohibited category or to have produced discriminatory outcomes, pending remediation; (c) impose administrative penalties for failure to complete AIAs, failure to maintain the registry, or failure to provide explanations to affected individuals; (d) receive complaints from affected individuals and civil society organisations. Complainants do not need to demonstrate personal harm — systemic concerns can be raised by representative organisations.

*Notes on enforcement: The EU AI Act's enforcement architecture relies heavily on national market surveillance authorities and the European AI Office. The Canadian Directive's enforcement is limited — no penalties for non-compliance have been imposed. This model strengthens enforcement by giving the oversight body powers to require suspension and to receive complaints without requiring individual standing.*

---

## Pillar 4: Governance

### Oversight Body

> **Oversight Clause**
> An AI oversight body, independent of executive government and of AI vendors, shall be designated or established. The body must have: technical expertise in AI systems, machine learning, and software auditing; legal expertise in human rights, administrative law, and discrimination law; and community liaison capacity to receive and investigate complaints from affected individuals and communities. The body must not include current employees or directors of AI vendors as voting members, and must not accept funding from AI vendors.

### Community Representation

> **Participation Clause**
> The oversight body must establish a community advisory panel with reserved seats for: civil society organisations working with communities most affected by government AI (including benefit recipients, justice-involved people, and migrants); disability advocacy organisations; labour organisations representing public sector workers; privacy and digital rights advocates; and researchers in AI fairness and accountability. The panel must be consulted before any revision to the prohibited applications list, the AIA methodology, or the impact level classification system.

### Audit and Review

> **Audit Clause**
> The oversight body must commission independent technical audits of at least 10% of Level III and IV AI systems in government use annually, selected through a risk-based process. Audit scope must include demographic fairness analysis, error rate analysis, and assessment of whether human oversight is meaningful in practice. Audit results must be published in full.

> **Review Clause**
> This policy shall be reviewed every two years. Given the pace of AI development, a two-year cycle (shorter than the standard three to five years) is required to remain effective. The review must include an assessment of whether the prohibited applications list requires updating, whether new categories of AI use require additional safeguards, and whether enforcement mechanisms have produced measurable change. The review must include a minimum 60-day public comment period.

---

## Real-World Examples

### European Union — EU AI Act
**Enacted:** 2024 (Regulation (EU) 2024/1689); prohibited uses effective February 2025; high-risk obligations effective August 2026
**Type:** EU Regulation (directly binding in all member states)
**Link:** https://artificialintelligenceact.eu
**Summary:** The world's first comprehensive AI regulatory framework. Uses a risk-based tiering system: banned AI (Article 5); high-risk AI subject to strict obligations (Annexes II–III); limited-risk AI requiring transparency; minimal-risk AI with voluntary codes. Prohibited uses include real-time biometric ID in public spaces, social scoring, emotion recognition in workplaces and schools, and predictive policing. High-risk categories include AI in employment, credit, education, justice, and critical infrastructure. Community critique: enforcement is delegated to 27 national authorities with varying capacity; SME exemptions may create loopholes; general-purpose AI obligations were weakened during negotiation.

---

### Canada — Directive on Automated Decision-Making + Centre for Regulatory Innovation
**Enacted:** 2019 (Directive, original); updated 2023. CRI established 2018.
**Type:** Treasury Board Directive (binding on federal government) + federal meta-regulatory coordination unit
**Links:** https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592 | https://www.canada.ca/en/treasury-board-secretariat/services/regulatory-affairs/centre-regulatory-innovation.html
**Summary — Directive on Automated Decision-Making:** Requires federal institutions to complete an Algorithmic Impact Assessment before deploying automated decision systems. Scores impact level I–IV across 65 risk questions; maps mitigation requirements to impact level from the proportionate requirements in Appendix C. Level IV decisions must be made by a human. Peer review required at Level III–IV. AIA results must be published. Considered the most detailed and operationalised government AI governance framework globally. Community critique: weak enforcement — no financial penalties have been imposed for non-compliance; "automated decision system" definition may exclude AI systems that "assist" rather than "decide"; limited to federal institutions only.

**Summary — Centre for Regulatory Innovation (CRI):** A federal coordination unit inside Treasury Board, created in 2018 to modernise regulation in the face of technological change. The CRI is not itself a regulator — it is a meta-regulatory support function. Its three core tools are: (1) regulatory experimentation — time-limited trials to generate evidence before permanent regulation is written; (2) regulatory sandboxes — controlled environments with temporary flexibility from existing rules; (3) toolkits and capacity funding — the Regulators' Experimentation Toolkit, cross-department collaboration mechanisms, and pilot project funding. The CRI model is conceptually identical to Utah's AI sandbox but operates at the level of regulator capability rather than specific AI deployments. **What makes it distinct from Utah:** Canada invests in process and institutional capability — building regulators' capacity to experiment — rather than just running individual pilots. This makes the model more scalable but also less focused. **Limitations:** the CRI operates across all regulatory domains, not AI specifically; it produces process improvements and guidance, not enforceable AI governance outcomes; and adoption across departments has been uneven. For AI governance, the CRI provides the institutional scaffolding that a dedicated AI sandbox (per Aspirational Standard 3) would need — it does not substitute for one.

---

### United States — Executive Orders, OMB Implementation, and the FDA CERSI Model
**Enacted:** EO 14110 (Biden, October 2023, revoked January 2025); OMB M-24-10 (Biden); OMB M-25-21 (Trump, 2025)
**Type:** Executive Orders + OMB Memoranda (federal agencies only; no statutory force) + FDA academic partnership programme
**Links:** https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence | https://www.fda.gov/science-research/advancing-regulatory-science/cersi-collaborative-research-projects

**Summary — EO 14110 and OMB frameworks:** EO 14110 required 50+ federal agencies to take 100+ specific actions including AI safety evaluations, Chief AI Officer appointments, and workforce development. Its revocation in January 2025 (before many provisions were implemented) demonstrates the fragility of executive-order-based governance — statutory frameworks are more durable. The Biden OMB M-24-10 established separate categories for "rights-impacting AI" and "safety-impacting AI" with proactive discrimination prevention, continuous monitoring, mandatory opt-outs, and defined independent Chief AI Officer review. The Trump OMB M-25-21 consolidated these into a single "high-impact AI" category, shifted from proactive to reactive safeguards, and replaced mandatory opt-outs with flexible remedies. The policy oscillation between administrations illustrates why AI governance must be statutory and not dependent on executive discretion.

**Summary — Implementation gap evidence (FAS, 2025):** The Federation of American Scientists analysed cross-agency implementation of federal AI governance requirements and found fewer than 40% of mandated actions were verifiably implemented. Implementation varied dramatically by agency resource level: well-funded agencies with centralised AI structures (e.g., DHS) documented inventories and established governance procedures; resource-constrained agencies serving vulnerable populations (e.g., justice-involved, benefits) were still developing foundational procedures. The 2025 dissolution of entire federal AI teams (GSA's 18F, DHS AI Corps) following workforce reductions compounded the capacity gap. Key finding: only 44% of Americans trust their government to regulate AI effectively, versus 72–89% in peer nations. The FAS analysis demonstrates that policy text without implementation capacity produces a governance fiction — the enforcement and small-jurisdiction provisions in this model are directly designed to address this failure mode.

**Summary — FDA CERSI (Centers of Excellence in Regulatory Science and Innovation):** A structured academic-regulatory partnership programme in which the FDA funds university-based research centres to work on FDA-defined regulatory science problems. Current partners include UCSF/Stanford, University of Maryland, Johns Hopkins, Yale/Mayo Clinic, and Triangle CERSI (NC). Research outputs are explicitly designed to become FDA guidance documents, standards, and policy — not academic papers filed in journals. AI/digital health work includes post-market monitoring frameworks for AI/ML medical devices, algorithmic change protocols for software-as-a-medical-device, and digital biomarker standards. The model is distinctive: funding is tied to regulator-defined problems, not researcher-initiated inquiry, creating deliberate knowledge flow from academic rigour into regulatory standards. Applied to AI governance broadly (not just medical devices), this pattern — government defines the unresolved methodological questions; universities build the evidence base; outputs become standards — is directly applicable to building the pre-certification methodology the Small Jurisdiction Proportionality Clause requires.

---

### New Zealand — Algorithm Charter for Aotearoa New Zealand
**Enacted:** 2020
**Type:** Voluntary charter (government agencies sign up to six commitments)
**Link:** https://data.govt.nz/toolkit/data-ethics/government-algorithm-transparency-and-accountability/algorithm-charter/
**Summary:** Agencies that sign the charter commit to maintaining lists of significant algorithms, explaining algorithmic decisions, consulting communities, protecting privacy, having human review processes, and participating in peer review. Valuable for its plain-language framing and whole-of-government approach. Significant weakness: signing is voluntary, enforcement is absent, and implementation has been inconsistent. The charter demonstrates that voluntary frameworks produce uneven compliance without enforcement mechanisms.

---

### Seattle — Responsible AI Program
**Enacted:** 2023 (initial policy); 2025 (Responsible AI Plan)
**Type:** City policy and programme
**Link:** https://www.seattle.gov/tech/data-privacy/the-citys-responsible-use-of-artificial-intelligence
**Summary:** Seattle was among the first cities globally to issue generative AI guidance (Fall 2023) and subsequently developed a full Responsible AI Plan in 2025 with equity at its centre. Active pilots in permit processing, housing production, public safety, and customer service. Commitment to public documentation of city AI use. Provides a replicable municipal model — particularly valuable because municipal AI governance is underspecified globally compared to national frameworks.

---

### Utah — Artificial Intelligence Policy Act and Regulatory Sandbox
**Enacted:** 2024
**Type:** State legislation + dedicated regulator (Office of AI Policy)
**Link:** https://le.utah.gov/~2024/bills/static/SB0149.html
**Summary:** Utah established a dedicated AI regulatory sandbox allowing companies to operate under temporary waivers of licensing, scope-of-practice, and other regulations — but only within a controlled environment with mandatory oversight, reporting, and safety constraints. The Office of AI Policy assigns liability upfront before deployment and often requires insurance covering AI outputs, resolving the "who is responsible if AI fails?" paralysis common in AI regulation. The sandbox operates on use-case and workflow specificity rather than regulating "AI" as a category — low-risk prescription renewals via AI were permitted under supervision. Findings from sandbox deployments feed back into permanent rulemaking. **What makes it genuinely innovative:** evidence-based rulemaking (rules written from observed operational data rather than hypothetical risk); institutionalised experimentation inside government; liability integration into the framework at the design stage; and fast iteration without waiting for legislative cycles. **Real limitations:** each sandbox requires bespoke agreements and is not scalable as-is; regulators choose who receives exemptions, creating favouritism risk; administrative overhead remains significant; the sandbox is temporary by design — it produces insights, not permanent governance. The Utah model is a pilot, not a complete regulatory system, but its core pattern — controlled testing environment → regulatory flexibility → mandatory data collection → permanent rulemaking — is transferable to digital public infrastructure, accessibility automation, procurement reform, and other domains.

---

### Maryland — Legi-Assist (Maryland State Innovation Team)
**Enacted:** 2025
**Type:** Open-source state government AI tool (operational deployment)
**Links:** https://github.com/Maryland-State-Innovation-Team/Legi-Assist | https://apolitical.co/en/articles/legi-assist-how-marylands-innovation-team-modernized-legislative-tracking-and-review
**Summary:** The Maryland State Innovation Team developed and open-sourced Legi-Assist, an automated toolkit that uses large language models to collect, process, and analyse legislation from the Maryland General Assembly. The pipeline runs nightly, syncing the latest bill texts, adopted amendments, and fiscal notes directly from the MGA website; LLMs then generate plain-language summaries and fiscal impact analyses — specifically handling the strikethroughs and amendment formatting that defeat conventional text processing. A core feature is agency relevance scoring: every introduced bill is evaluated against descriptions of each state agency so staff can filter relevant legislation without reading the full session corpus. The tool is open-sourced under a permissive licence and supports multiple LLM providers (Google Gemini, OpenAI GPT, or locally-run Ollama models), meaning agencies can operate it without sharing legislative data with any external service. **What makes it a useful model:** it operationalises several AI governance principles simultaneously — transparency through open-sourcing the code; auditability through public version control and logged pipeline runs; human oversight preserved (the tool summarises and scores, but humans decide); flexible AI provider allowing data-sovereignty choices; and deployment in a low-stakes assistive context before expanding to higher-risk uses. **Limitations:** the tool is an internal efficiency aid and does not yet include a public-facing AI use registry entry, an Algorithmic Impact Assessment, or a formal published governance policy — illustrating the gap between practical AI deployment and documented governance compliance that this model's Standard 1 (AI Use Registry) and Standard 2 (AIA) are designed to close.

---

## Gaps and Known Weaknesses

- **Generative AI is partially addressed** — Standard 2(f) now requires pre-deployment testing documentation for LLM-based systems used in public communications, and Standard 3(e) requires disclosure in conversational AI contexts. However, hallucination risks in AI-generated legal or administrative documents, and AI-assisted public consultations, require further specification.
- **Agentic AI is not addressed** — Autonomous AI agents that take actions (not just produce outputs) require additional governance frameworks around decision chains, audit trails, and the assignment of accountability across multi-agent systems. The AIA framework assumes a system with identifiable discrete outputs; agentic systems produce chains of actions that may not be traceable to a single decision point.
- **Environmental cost methodology** — Pillar 1's prohibition on adoption where "environmental cost is disproportionate to public benefit" is not yet operationalised. A methodology for comparing AI energy cost to service value is needed.
- **Private sector AI affecting public rights** — This model applies to public bodies. Private sector AI used in employment, credit, housing, and other areas affecting fundamental rights falls outside scope. The Algorithmic Accountability model addresses some of this gap but a fuller treatment is needed.
- **International and exported AI** — Standard 4(f) now restricts procurement from vendors with sanctioned-government supply relationships; Aspirational Standard 3 establishes an international coordination mandate for the oversight body. However, development assistance organisations and international institutions that deploy AI in Global South contexts often apply lower governance standards than they would domestically — this gap is noted but not addressed.
- **Small jurisdiction capacity** — The Proportionality Clause in the Implementation section creates a pre-certification pathway for Level I–II systems. The oversight body must still build and maintain the pre-certification list, and the resourcing for this is not specified.
- **AI identity and anthropomorphism in ongoing service contexts** — Standard 3(e) now requires disclosure at the outset of conversational AI interactions and prohibits AI configured to deny being AI. However, AI used in advisory, therapeutic, or companion contexts — where the relationship develops over time rather than a single session — may require stronger protections, particularly for vulnerable users. This is noted but not addressed.
- **Worker impact operationalisation** — Procurement Clause D now requires pre-AIA worker consultation. However, no AIA methodology currently includes a worker impact dimension as a scored factor. The impact level classification (Level I–IV) does not account for workforce disruption — a system with minimal individual decision impact could still cause substantial workforce harm. A workforce impact dimension should be added to the AIA questionnaire.
- **Vendor risk disclosure standardisation** — Standard 5(h) now requires a structured vendor risk disclosure for Level II+ systems and requires the oversight body to publish a standard template. Until the template is published, procuring bodies must apply the disclosure criteria as written. Comparability across procurements will be limited until a shared template is in place.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| [Algorithmic Accountability](../../algorithmic-accountability/full-model/) | AI Adoption sets the governance framework; Algorithmic Accountability provides the enforcement and audit mechanisms for specific high-impact use cases |
| [Data Centers](../../data-centers/full-model/) | AI compute requires energy; AI adoption decisions must account for energy and water cost |
| [Digital Accessibility](../../accessibility/full-model/) | AI-assisted public services must meet accessibility standards; AI tools should not create new access barriers |
| [Open Source in Government](../../open-source-in-government/full-model/) | Open and auditable AI systems are preferable for government use; procurement restrictions apply similarly |
| [Digital Sovereignty](../../digital-sovereignty/full-model/) | AI systems from a small number of global vendors create sovereignty risks analogous to other forms of digital dependency |
| [Children & Technology](../../children-technology/full-model/) | AI systems used in educational contexts or affecting children require the heightened protections of that domain |

---

## Glossary

**Automated Decision System (ADS):** A computational process that makes or substantially assists in making decisions affecting individuals' rights, interests, or well-being. May include machine learning models, rule-based systems, or combinations.

**Algorithmic Impact Assessment (AIA):** A structured pre-deployment process for evaluating the risks and potential harms of an automated decision system, resulting in an impact level classification and proportionate mitigation requirements.

**Impact Level (I–IV):** A classification of an ADS's potential harm, from Level I (low impact, fully automated acceptable) to Level IV (very high impact, human decision required). Based on Canada's Directive on Automated Decision-Making tiering system.

**High-Risk AI System:** Under the EU AI Act, an AI system classified as high-risk because it poses significant risks to health, safety, or fundamental rights. Includes AI in employment, education, credit, justice, critical infrastructure, and law enforcement.

**Prohibited AI Application:** An AI use that is incompatible with human rights and must not be adopted regardless of efficiency arguments. Drawn from EU AI Act Article 5.

**AI Use Registry:** A mandatory public list of all AI systems in operational use by a public body, with standardised metadata including system purpose, impact level, vendor, and energy consumption.

---

## Contributing to This Policy Model

This model is maintained in the open. Priority contribution needs:

- **Generative AI provisions** — Model language specifically addressing LLM risks in government (hallucination, confidentiality, copyright, content generation)
- **Agentic AI provisions** — Model language for autonomous AI agent systems
- **Environmental cost methodology** — A practical approach to assessing whether AI's energy cost is proportionate to its benefit
- **Global South examples** — AI governance experience from African, Asian, and Latin American jurisdictions
- **Small jurisdiction implementation guidance** — How can municipalities with limited technical capacity implement the AIA requirement?

All substantive changes go through a minimum 14-day public comment period before merging.

---

## Changelog

| Version | Date | Summary of changes |
|---|---|---|
| 0.1 | 2026-04-04 | Initial draft — four pillars, real-world examples from EU, Canada, US, New Zealand, Seattle |
| 0.4 | 2026-04-13 | Add FDA CERSI as third institutional pattern in Aspirational Standard 3 rationale (methodology generation layer alongside Utah/CRI); expand US real-world example to cover OMB M-24-10/M-25-21 implementation gap (FAS 2025 findings) and FDA CERSI programme; add CERSI and FAS to Standards Cross-Reference |
| 0.3 | 2026-04-13 | Add Canada CRI as real-world example alongside Directive on Automated Decision-Making; update Aspirational Standard 3 rationale to position Utah + CRI as complementary sandbox models; add CRI to Standards Cross-Reference |
| 0.2 | 2026-04-13 | CHT review: added Standard 1(g) (AI impersonation prohibition), Standard 2(f) (generative AI pre-deployment testing), Standard 3(e) (AI identity disclosure in conversational contexts), Standard 4(f) (international procurement restriction), Standard 5(h) (structured vendor risk disclosure), Procurement Clause D (worker consultation), Small Jurisdiction Proportionality Clause, Aspirational Standards 3–4 (regulatory sandbox; international coordination); added Utah sandbox and CHT as real-world examples and Standards Cross-Reference entries; updated Gaps section to reflect partial gap closures and add three new documented gaps (agentic AI in AIA, worker impact in AIA scoring, vendor disclosure standardisation timeline) |

---

*This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.*
