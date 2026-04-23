---
title: "Freedom of Expression & Content Governance — Model Policy"
description: "Model policy language that honestly surfaces the trade-offs between harm prevention and free expression in platform content moderation."
---
# Freedom of Expression & Content Governance — Model Policy

> **Status:** `Draft`
> **Last updated:** 2026-04-05
> **Maintainers:** Open Digital Policies community
> **Related domains:** [Children & Technology](../../children-technology/full-model/), [Algorithmic Accountability](../../algorithmic-accountability/full-model/), [AI Adoption](../../ai-adoption/full-model/), [Digital Sovereignty](../../digital-sovereignty/full-model/)
> **Key sources:** EU Digital Services Act (DSA), UN Special Rapporteur on Freedom of Expression, Santa Clara Principles, ICCPR Article 19, EU Audiovisual Media Services Directive

---

## Overview

Online content governance is one of the most contested domains in digital policy — and one of the most consequential. The decisions made by a handful of large platforms about what speech is permitted, amplified, or suppressed shape public discourse for billions of people. Those decisions are made largely without democratic oversight, with limited transparency, subject to legal pressure from governments with divergent interests, and optimised for engagement rather than public good.

Done poorly in one direction, content governance enables harm: harassment, disinformation, terrorist content, child sexual abuse material, incitement to violence against minorities, and coordinated manipulation. Done poorly in the other direction, it enables censorship: silencing journalists, human rights defenders, political dissidents, sex workers, LGBTQ+ communities, and minority groups who find that their speech is systematically removed while dominant groups face fewer restrictions.

This policy model does not resolve these tensions — they are genuine and involve real trade-offs between values that cannot be fully reconciled. Instead, it surfaces the options clearly, establishes the procedural requirements for legitimate content governance (transparency, consistency, accountability, appeal rights), and identifies the structural problems that procedural requirements alone cannot solve.

### The Core Tension

We want digital public spaces where people can speak, organise, create, and access information freely — without those spaces being captured by harassment, disinformation, and coordinated manipulation. Both failures — too little moderation and too much — cause real harm to real people. Policy must navigate between them without pretending the tension doesn't exist.

### Scope

- [ ] Municipal / local government
- [x] Regional / state / provincial government
- [x] National government
- [ ] Public sector procurement
- [x] Regulated online platforms (particularly large or dominant platforms)
- [x] State-owned or publicly funded media

**Important note on government speech restrictions:** This model is primarily about platform governance. Governments restricting speech through law face additional constitutional constraints (First Amendment in the US, Article 10 of the ECHR, ICCPR Article 19) that limit what this policy model can recommend directly. Government-imposed speech restrictions are evaluated against the three-part ICCPR test: (1) prescribed by law; (2) pursuing a legitimate aim; (3) necessary and proportionate.

---

## Pillar 1: Principles

### Foundational Values

**1. Freedom of Expression Is a Fundamental Right — Not an Absolute One**
ICCPR Article 19 protects the right to freedom of opinion and expression, including the right to receive and impart information. ICCPR Article 20 requires states to prohibit advocacy of national, racial, or religious hatred that constitutes incitement to discrimination, hostility, or violence. These two provisions exist in tension deliberately. International human rights law does not treat freedom of expression as absolute; it treats it as a fundamental right that may be limited only to protect other fundamental rights, under strict proportionality requirements.

**2. Content Moderation Is Governance, Not Neutrality**
There is no neutral platform. Every decision about what content to allow, amplify, reduce, or remove is a governance decision with distributional effects. Platforms that claim neutrality are making a governance choice — the choice to apply the existing distribution of power, which tends to benefit dominant groups and harm marginalised ones. The question is not whether to make governance decisions, but by whom, under what rules, with what accountability.

**3. Transparency Is the Minimum Requirement for Legitimate Governance**
Users have a right to know: what rules apply to content on the platform; how those rules are applied; why specific content was removed or restricted; and how to appeal. Without transparency, content governance is arbitrary. Transparency does not make content governance legitimate by itself — but opacity makes it illegitimate by definition.

**4. Consistent Enforcement Is as Important as the Rules**
Rules that are applied inconsistently — more strictly against minority languages, political dissidents, or LGBTQ+ speech than against majority speech — are not neutral, however neutrally worded. Enforcement consistency must be measured and published. Disparate enforcement against protected groups is discriminatory.

**5. Meaningful Appeal Rights Are Not Optional**
Users whose content is removed or accounts are restricted have a right to know why, and a right to a genuine appeal to a human decision-maker. Automated moderation at scale makes errors; appeals are the mechanism for correcting them. An appeal process that does not actually change outcomes is not a meaningful appeal.

**6. Algorithmic Amplification Is Part of Content Governance**
What platforms amplify is as consequential as what they remove. An algorithm that prioritises outrage-inducing content, that boosts misinformation because it generates engagement, or that systematically suppresses minority speech is engaging in content governance through amplification. This is not a neutral technical choice; it is a content governance decision with political and social effects.

**7. The Global User Base Is Not Uniform**
Content governance policies developed for one cultural and political context often fail when applied globally. What constitutes hate speech, defamation, or incitement varies by legal system and cultural context. Platforms serving billions of users across hundreds of legal systems cannot apply a single standard uniformly without causing harm in some of those contexts — but must maintain standards that protect human rights universally.

### Equity Considerations

- **Minority language communities** — Content moderation systems are far better developed for English than for any other language. Harmful content in minority languages is frequently under-moderated; minority language users' legitimate content is frequently over-moderated due to poor language detection.
- **LGBTQ+ communities** — Documented evidence across platforms shows systematic over-moderation of LGBTQ+ content, particularly content by queer women and transgender people, relative to equivalent heterosexual content. Policies must explicitly address and measure this disparity.
- **Journalists and human rights defenders** — Coordinated harassment campaigns target journalists (particularly women journalists and journalists of colour) with mass-reporting designed to trigger automated removal. Platforms must have systems to detect and resist coordinated inauthentic reporting.
- **Sex workers** — US FOSTA-SESTA (2018) created legal liability for platform hosting of content related to sex work, leading platforms to remove content that provided safety information and community for sex workers. Content moderation that is over-broad in this domain creates real safety harm.
- **Political dissidents and activists** — Governments routinely pressure platforms to remove content by dissidents, journalists, and activists. Platforms must have transparent and robust procedures for resisting unlawful government removal requests.

### Environmental Considerations

AI-powered content moderation at scale consumes significant compute resources. Platforms should include environmental cost in content moderation system design decisions, favouring energy-efficient approaches where equally effective. See [Data Centers model](../../data-centers/full-model/) and [AI Adoption model](../../ai-adoption/full-model/).

---

## Pillar 2: Standards

### Mandatory Standards

> **Standard 1: Transparent Community Standards and Terms of Service**
> Platforms shall publish clear, accessible, and specific community standards that describe:
>
> (a) What categories of content are prohibited, with sufficient specificity that users can understand what is and is not permitted;
>
> (b) What categories of content are restricted (available to some users but not others, or reduced in algorithmic distribution) and under what conditions;
>
> (c) How rules are applied to different categories of content and different types of users (public figures, verified accounts, news organisations, etc.);
>
> (d) The consequences of violations (removal, account suspension, permanent ban, demotion) and the criteria applied;
>
> (e) The legal orders and government requests to which the platform is subject.
>
> Community standards must be available in all languages in which the platform provides service. Vague prohibitions on "harmful" content without further specification are not compliant.

*Rationale: Santa Clara Principles (2018, 2021) establish transparency as the minimum baseline for platform content governance. EU DSA Article 14 requires clear and specific terms of service. Both are minimum standards; this model's language is consistent with DSA requirements.*

*Reference: [Santa Clara Principles 2.0](https://santaclaraprinciples.org); [EU DSA Articles 14–15](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package)*

---

> **Standard 2: Notification and Meaningful Appeal Rights**
> When a platform removes, restricts, demotes, or otherwise takes action against a user's content or account, the platform shall:
>
> (a) Notify the user promptly, explaining which specific rule was violated and what the specific content at issue was;
>
> (b) Provide the user with a meaningful opportunity to appeal the decision within [14] days of notification;
>
> (c) Ensure that appeals for content removal or account suspension are reviewed by a human decision-maker with authority to reverse the decision;
>
> (d) Notify the user of the appeal outcome and provide reasons;
>
> (e) Complete appeal review within [30] days for content removal and [60] days for account suspension;
>
> (f) For appeals where the original decision was automated: the appeal must be reviewed by a human.
>
> Users who believe their content was removed based on protected characteristics (race, religion, gender, sexual orientation, political opinion) shall have a specific mechanism to raise this concern.

*Rationale: Santa Clara Principles Standard 3. EU DSA Article 17 requires specific statement of reasons for content moderation decisions. DSA Article 20 requires an internal complaint-handling system accessible free of charge. Meaningful human appeal is absent from most platform systems at scale — the standards here set a minimum floor.*

---

> **Standard 3: Transparency Reporting**
> Platforms with [1 million] or more monthly active users in the jurisdiction shall publish transparency reports at least every [six] months that include:
>
> (a) Total volume of content removed, by category of violation, with breakdown by whether removal was automated or human-reviewed;
>
> (b) Error rate estimates for automated removals (based on appeal reversals) by content category;
>
> (c) Number of appeals received and outcomes (upheld / overturned / pending);
>
> (d) Government and law enforcement requests received, by jurisdiction, and compliance rates;
>
> (e) Court orders requiring content removal or user data disclosure, by jurisdiction;
>
> (f) Changes to content policies during the reporting period;
>
> (g) Enforcement data disaggregated by language and, where measurable, by content category and demographic characteristics of affected users.
>
> Reports shall be machine-readable and published in a standardised format enabling cross-platform comparison.

*Rationale: Transparency reporting by platforms is voluntary at scale but provides the only available data on enforcement patterns. The DSA requires very large online platforms to publish annual transparency reports. Meta, Google, Twitter/X, and others publish voluntary transparency reports of varying quality and comparability. Standardised mandatory reporting is necessary for meaningful accountability.*

---

> **Standard 4: Algorithmic Transparency and Recommender System Disclosure**
> Platforms that use algorithmic recommender systems to determine what content users see shall:
>
> (a) Publish a plain-language explanation of the significant factors used by recommender systems to determine content distribution, including what signals are used and how they are weighted;
>
> (b) Offer users at least one option for content feeds not based on engagement-optimised algorithmic recommendation (e.g., chronological feed, topic-based feed);
>
> (c) Disclose in real-time where content has been algorithmically boosted or reduced in distribution compared to an unranked feed;
>
> (d) Conduct and publish annual assessments of whether recommender systems systematically amplify or suppress content based on the political view, religion, race, gender, or sexual orientation of the content creator;
>
> (e) Apply the [Algorithmic Accountability framework](../../algorithmic-accountability/full-model/) to recommender systems used in platforms with significant public discourse impact.

*Rationale: EU DSA Article 27 requires very large platforms to offer at least one recommender system not based on profiling. The research evidence on algorithmic amplification of harmful content (including the Facebook Files and Twitter internal research published by Elon Musk) demonstrates that recommender systems have systematic effects on public discourse that platforms have been slow to acknowledge or address.*

---

> **Standard 5: Government Request Transparency and Due Process**
> Platforms shall:
>
> (a) Publish all legally permissible information about government requests to remove content or restrict accounts, in their transparency reports;
>
> (b) Notify users whose content is subject to a government removal request before complying, where legally permissible, so users can seek legal remedy;
>
> (c) Refuse to comply with government removal requests that lack a legal basis under international human rights standards, even where such requests come with implied or explicit threats;
>
> (d) Apply the Manila Principles on Intermediary Liability as a framework for evaluating government requests;
>
> (e) Publish annual reports on emergency content removal requests (those outside normal legal process) by jurisdiction, and their basis.

*Rationale: The Manila Principles on Intermediary Liability (2015) provide a human rights framework for evaluating government content removal requests. Platforms regularly receive unlawful requests from governments; the standards here establish a floor for principled resistance and transparency.*

*Reference: [Manila Principles on Intermediary Liability](https://manilaprinciples.org)*

---

### Aspirational Standards

> **Aspirational Standard 1: Independent Oversight Body**
> Very large platforms should submit to independent oversight of their content governance practices — through a self-regulatory body, an independent audit body, or a statutory regulator — with authority to review systemic enforcement data and require remediation. The EU DSA's Very Large Online Platform (VLOP) oversight model provides the most developed existing framework.

> **Aspirational Standard 2: Cross-Platform Interoperability**
> Dominant platforms should provide API access and interoperability to enable users to access content across platform boundaries, reducing dependency on any single platform's governance decisions. The EU Digital Markets Act (DMA) establishes interoperability requirements for gatekeepers. Interoperability is a structural remedy for platform dominance that complements content governance requirements.

> **Aspirational Standard 3: Community Governance for Platform Rules**
> Platforms should explore genuine community participation in developing and revising content rules — going beyond advisory processes to mechanisms where affected communities have real input into the rules that govern their speech. Wikipedia's community governance model, despite its limitations, demonstrates that large-scale community rule-making is possible.

---

### Standards Cross-Reference

| Standard | Body | Notes |
|---|---|---|
| EU Digital Services Act (DSA) | EU | 2022/2065; comprehensive platform governance framework |
| ICCPR Article 19 | UN | Freedom of expression; three-part test for restrictions |
| ICCPR Article 20 | UN | Prohibition on incitement to hatred |
| Santa Clara Principles 2.0 | Multi-stakeholder | Transparency, notice, appeal standards for content moderation |
| Manila Principles | Multi-stakeholder | Intermediary liability; government request evaluation |
| EU Audiovisual Media Services Directive (AVMSD) | EU | 2018; video sharing platforms; minor protection; hate speech |
| UN Special Rapporteur on Freedom of Expression | UN HRC | Annual reports; platform governance guidance |

---

## Pillar 3: Implementation

### Platform Categorisation

> **Tiered Obligations by Platform Size**
> Content governance obligations should be calibrated to platform size and systemic risk — recognising that small platforms cannot bear the same compliance burden as platforms with a billion users, while very large platforms have far greater capacity to cause systemic harm. A minimum three-tier approach:
>
> **Tier 1 (micro platforms: under 100,000 monthly active users):** Basic terms of service; complaint mechanism; no detailed reporting required.
>
> **Tier 2 (medium platforms: 100,000–10 million monthly active users):** Full Standards 1–3; annual transparency reporting.
>
> **Tier 3 (large platforms: over 10 million monthly active users):** Full Standards 1–5; semi-annual transparency reporting; algorithmic audit; independent oversight.

### Transition and Timeline

| Milestone | Timeframe from adoption |
|---|---|
| Transparent community standards published by all Tier 2–3 platforms | 6 months |
| Notification and appeal requirements operational | 12 months |
| Standardised transparency reports published | 12 months |
| Algorithmic disclosure requirements operational | 18 months |
| First independent audits of very large platforms | 24 months |

### Enforcement

> **Enforcement Clause**
> The designated regulatory body may: (a) require platforms to produce transparency reports and enforcement data; (b) conduct audits of content governance systems; (c) require remediation of systemic enforcement disparities; (d) impose administrative penalties for failure to provide appeal mechanisms or publish transparency reports; (e) receive complaints from users, civil society, and journalists. Penalties for very large platforms shall be proportionate to global turnover, not domestic revenue, to deter regulatory arbitrage.

---

## Pillar 4: Governance

### Oversight Body

> **Content Governance Regulator**
> The designated body shall have: expertise in free expression, human rights, platform technology, and content moderation; an independent board not subject to government direction on individual content decisions; authority to conduct confidential access audits of platform moderation systems (beyond published transparency reports); and power to require transparency reporting in standardised formats. The body shall explicitly not have authority to require removal of specific content — its mandate is procedural and systemic, not editorial.

### Community Representation

> **Multi-Stakeholder Advisory Council**
> The oversight body shall be advised by a multi-stakeholder council including: civil liberties and press freedom organisations; academic researchers in platform governance and computational social science; representatives of marginalised communities subject to both hate speech and over-moderation; legal experts in international human rights law; and platform representatives (in a non-voting capacity). The council shall hold public meetings and publish meeting records.

### Audit and Review

> **Annual Systemic Risk Report**
> The regulatory body shall publish an annual systemic risk report assessing: the state of content governance across regulated platforms; systemic enforcement disparities identified through transparency reports and audits; government content removal request trends; and specific harms (hate speech, disinformation, harassment) not adequately addressed by existing content governance frameworks.

> **Policy Review**
> This policy shall be reviewed every [two] years, given the rapid evolution of both platform technology and the harms it mediates. Reviews must include public consultation and direct engagement with communities experiencing both over-moderation and under-moderation.

---

## Real-World Examples

### European Union — Digital Services Act (DSA)
**In force:** February 2024 (for all platforms); August 2023 (for Very Large Online Platforms)
**Regulator:** European Commission (VLOPs); national Digital Services Coordinators
**Link:** https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package
**Summary:** The most comprehensive statutory platform governance framework globally. Requires all platforms to: have terms of service; provide notice and appeal for content removal; cooperate with trusted flaggers; publish transparency reports. Very large platforms (over 45 million EU users) additionally must: publish recommender system explanations; offer non-profiling-based feeds; conduct annual systemic risk assessments; submit to independent audits; share data with researchers. The Commission has opened formal proceedings against X (Twitter), TikTok, and Meta. Community critique: risk assessment methodology is not standardised; the largest platforms have significant capacity to manage regulatory relationships; enforcement against non-EU companies requires cooperation.

---

### Germany — Network Enforcement Act (NetzDG)
**Enacted:** 2017 (amended 2020, 2021)
**Regulator:** Federal Office of Justice
**Link:** https://www.gesetze-im-internet.de/netzdg/BJNR335210017.html
**Summary:** Requires platforms with over 2 million registered users in Germany to remove "manifestly unlawful" content within 24 hours of a valid complaint, and all unlawful content within 7 days. Significant fines for systematic failure. NetzDG was the first national platform regulation of this type globally and has been widely debated. Community critique: the 24-hour deadline incentivises over-removal to avoid fines; the law pushes platforms toward more conservative moderation of borderline content; it does not address algorithmic amplification; and it has been cited by governments in Ethiopia, Russia, and Singapore as a model for legislation that critics say enables censorship.

---

### United States — Section 230 (Communications Decency Act)
**Enacted:** 1996
**Link:** https://www.law.cornell.edu/uscode/text/47/230
**Summary:** Section 230 provides immunity to online platforms for third-party content and for good-faith moderation decisions. The immunity has enabled the growth of internet platforms by removing legal liability for hosting user content, and has enabled platforms to moderate without legal risk. It has also been criticised for insulating platforms from accountability for harms their systems cause. Section 230 reform is among the most contested digital policy debates in the US — proposals range from narrowing immunity to full repeal. The current text, enabling both platform growth and moderation flexibility, remains the operative US framework. It is not a model to be exported — it is context-specific to the US constitutional framework — but it illustrates how intermediary liability shapes platform behaviour.

---

### Council of Europe — Recommendation on Content Moderation
**Published:** 2022 (CM/Rec(2022)16)
**Link:** https://rm.coe.int/recommendation-cm-rec-2022-16-of-the-committee-of-ministers-to-member-st/1680a8a67a
**Summary:** The Council of Europe's Recommendation on content moderation in online environments sets out human rights-compliant principles for platform content governance, drawing on Article 10 ECHR and Article 8 (privacy). It explicitly addresses the need for transparency, appeal rights, independent oversight, and the human rights impact of algorithmic systems. Unlike the DSA, the Recommendation is non-binding — it provides normative guidance rather than enforceable standards. It is notable for its explicit integration of the human rights framework with platform governance requirements.

---

### Meta — Oversight Board
**Established:** 2020
**Link:** https://www.oversightboard.com
**Summary:** Meta's Oversight Board is an independent body with authority to make binding decisions on individual content removal cases referred to it by users or Meta. Members are appointed through an independent process. The Board has overturned Meta decisions, including its initial decision to suspend Donald Trump's accounts. Community critique: the Board only reviews a tiny fraction of moderation decisions; it cannot address systemic algorithmic amplification; it was established by Meta and its funding comes from Meta; and its authority is limited to the cases it chooses to hear. Supporters argue it demonstrates that independent oversight of individual content decisions is operationally possible. It is a prototype, not a solution.

---

## Gaps and Known Weaknesses

- **Disinformation and coordinated inauthentic behaviour** — This model focuses on content that is unlawful or violates platform rules. Disinformation — false content that is not unlawful — is addressed incompletely. The DSA's systemic risk assessment requirements partially address this; a fuller treatment is needed.
- **End-to-end encrypted communications** — Content moderation frameworks are designed for public speech. Private encrypted communications are largely outside their reach. The tension between privacy (which end-to-end encryption protects) and safety (which it may hinder) in the context of child sexual abuse material and terrorist content is the most contested active debate in content governance.
- **AI-generated content** — Large-scale production of synthetic content (text, images, video) is making content volume-based governance strategies increasingly unscalable. Provenance standards (such as the C2PA content credentials standard) are emerging but not yet widely implemented.
- **Fragmentation risk** — Different national content governance requirements risk fragmenting the global internet into national segments with different speech rules, enabling authoritarian governments to use "content governance" as cover for censorship while claiming compliance with a global norm.
- **Small platform capacity** — Content governance requirements designed for large platforms impose disproportionate compliance costs on small platforms with limited resources. Tiered approaches reduce but do not eliminate this problem.

---

## Cross-Domain Dependencies

| Related Domain | Relationship |
|---|---|
| [Children & Technology](../../children-technology/full-model/) | Content governance for minors requires heightened protections; age differentiation in content rules |
| [Algorithmic Accountability](../../algorithmic-accountability/full-model/) | Recommender systems are content governance mechanisms and require algorithmic accountability |
| [AI Adoption](../../ai-adoption/full-model/) | AI-powered content moderation must meet AI adoption governance standards; AI-generated content requires provenance standards |
| [Digital Sovereignty](../../digital-sovereignty/full-model/) | Platform concentration creates sovereignty risks; exit rights and interoperability are structural remedies |

---

## Glossary

**Content Moderation:** The practice of reviewing, removing, restricting, or labelling user-generated content on platforms according to community standards and applicable law.

**Automated Content Moderation:** Use of machine learning systems to detect and act on content at scale, without human review of individual decisions. Subject to significant error rates and systematic biases.

**Trusted Flaggers:** Entities designated by platforms or regulators as having expertise in identifying specific categories of harmful content (e.g., hate speech, terrorist content, child sexual abuse material) and whose reports are given priority review.

**Very Large Online Platform (VLOP):** Under the EU DSA, a platform or search engine with 45 million or more average monthly active users in the EU. Subject to the most stringent DSA obligations.

**Section 230:** Section 230 of the US Communications Decency Act (1996). Provides immunity to online platforms for third-party content and for good-faith moderation. The legal foundation of the modern internet platform ecosystem.

**ICCPR Article 19:** International Covenant on Civil and Political Rights, Article 19. Protects freedom of expression. Permits restrictions that are: (1) provided by law; (2) pursuing a legitimate aim; (3) necessary and proportionate.

**Recommender System:** An algorithmic system that selects, ranks, and serves content to users based on signals including their past behaviour, content characteristics, and platform objectives. The primary mechanism through which platforms determine what speech is amplified.

**Dark Pattern:** Design choices that manipulate users into actions against their interests. In content governance, includes designs that make reporting difficult, that hide appeal mechanisms, or that make it harder to find accurate information.

---

## Contributing to This Policy Model

This is among the most contested domains in digital policy. This model tries to surface the genuine tensions honestly — it is not a final answer. Priority contribution needs:

- **Disinformation governance** — model language for addressing coordinated disinformation without enabling censorship
- **AI-generated content provenance** — policy framework for synthetic content labelling and authentication
- **Global South examples** — content governance from African, Asian, and Latin American contexts where platform governance intersects with political repression
- **Encrypted messaging** — model language on the limits of content governance in end-to-end encrypted environments
- **Platform interoperability** — model language drawing on DMA experience with gatekeeper interoperability requirements

Open an [Issue](https://github.com/mgifford/DigitalPolicies/issues) to propose changes or additions. See [CONTRIBUTING.md](https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md) for the contribution process.

All substantive changes go through a minimum 14-day public comment period before merging.

---

## Changelog

| Version | Date | Summary of changes |
|---|---|---|
| 0.1 | 2026-04-05 | Initial draft — four pillars, real-world examples from EU, Germany, US, Council of Europe, Meta Oversight Board |

---

*This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.*
