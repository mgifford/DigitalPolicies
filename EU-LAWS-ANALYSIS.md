# EU Digital Laws — What to Adopt, What to Improve, What to Avoid

> A policy intelligence document for the Open Digital Policies project.
> Drawing primarily on EFF, EDRi, FSFE, and civil society critiques.
> Last updated: 2026-04-04

---

## Purpose

The European Union has produced the world's most comprehensive body of digital regulation. Much of it is genuinely worth adopting elsewhere — particularly in jurisdictions with weaker protections. But uncritical adoption is a mistake. Several EU laws have real flaws, and some are actively contested by the same civil society organisations that helped push for them.

This document maps the major EU digital laws against three questions:

1. **What's worth adopting elsewhere as-is, or near-to?**
2. **What's the right idea but needs improvement — and what did communities say is missing or wrong?**
3. **What is being framed as protection but functions as harm — and should be actively resisted?**

This document feeds directly into the Open Digital Policies model library. Where a law should be adopted or improved, this analysis informs the model language in the relevant policy domain files.

---

## The Laws

### 1. General Data Protection Regulation (GDPR)

**What it does:** The most comprehensive privacy law ever enacted at scale. Establishes core rights: access, rectification, erasure, portability, objection, and the right not to be subject to purely automated decisions. Requires data minimisation, purpose limitation, and consent to be freely given, specific, and revocable. Applies to any organisation handling EU residents' data, regardless of where the organisation is based.

**EFF's assessment:** "The GDPR is the most comprehensive model for privacy legislation around the world." EFF has consistently defended the GDPR against weakening.

---

#### ✅ What to Adopt

The **rights architecture** of the GDPR is the clearest achievement and the most directly exportable:

- **Right of access** — individuals can request all personal data held about them
- **Right to erasure ("right to be forgotten")** — within defined scope, data must be deleted on request
- **Data portability** — your data must be exportable in machine-readable format
- **Consent requirements** — consent must be specific, informed, freely given, and as easy to withdraw as to give
- **Data minimisation** — only collect what you actually need
- **Privacy by design and by default** — privacy must be built in, not bolted on; the default must be the most privacy-protective option
- **Legitimate interest balancing test** — use of personal data requires a genuine interest that is not overridden by individual rights
- **Data Protection Impact Assessments (DPIAs)** — required before processing that is likely to result in high risk to individuals

**Model language note:** These rights form the backbone of the ODP Smart Cities & Privacy and Algorithmic Accountability policy models. Any jurisdiction adopting smart city technology, AI procurement, or data sharing frameworks should start with GDPR-equivalent rights.

---

#### ⚠️ What to Improve

**The enforcement problem.** The GDPR's single biggest failure is enforcement. The Irish Data Protection Commission became the de facto lead regulator for most major tech platforms because of where those companies are headquartered in the EU. Ireland's enforcement was slow, under-resourced, and frequently criticised as captured by industry. A decade after GDPR, Meta, Google, and Amazon continue to operate largely unchanged.

**What communities said is missing:**
- Independent, adequately funded enforcement bodies — not regulators that compete for corporate headquarters
- Class action rights for privacy violations — individual complaint mechanisms are too slow and expensive for ordinary people
- Real penalties proportional to harm — not just proportional to revenue
- Civil society standing to bring complaints on behalf of affected groups

**Improved model language for ODP:**
> The right to privacy in digital systems must be accompanied by accessible enforcement. Model provisions should include: (a) a dedicated, independently funded privacy regulator with no conflicts of interest with the entities it regulates; (b) standing for civil society organisations to bring complaints on behalf of affected communities; (c) minimum investigation timelines with binding deadlines; and (d) penalties that account for harm to individuals, not only percentage of revenue.

---

#### 🚨 What to Resist — Digital Omnibus Proposals (2025)

The European Commission's 2025 "Digital Omnibus" package proposed to substantially weaken the GDPR, framed as "simplification." 127+ civil society organisations called it "the biggest rollback of digital rights in EU history." Key proposals (several partially walked back after public pressure):

- **Redefine "personal data"** to allow companies to treat data as non-personal if *they* cannot identify the person — even if others can. This would gut protections for pseudonymised data.
- **Expand "legitimate interest" for AI** to allow posts, photos, and voice recordings to be used for AI training without consent. This would retroactively legitimise mass scraping that violated GDPR as written.
- **"Motive tests" for data access requests** — allowing companies to refuse access requests if they suspect the request is motivated by a dispute. This would make the right of access theoretical in practice.
- **Sensitive data in training sets** — allow retention of sensitive categories (health, religion, political views) in AI training sets whenever removal would be "disproportionate effort."

**ODP principle:** Any "simplification" of privacy law that narrows individual rights or expands corporate permissions should be presumed to serve industry interests, not people. Burden reduction for compliant actors is legitimate; rights erosion dressed as burden reduction is not.

---

### 2. Digital Markets Act (DMA)

**What it does:** Designates large digital platforms as "gatekeepers" (currently Alphabet/Google, Amazon, Apple, Meta, Microsoft, ByteDance) and imposes mandatory interoperability, anti-steering, data portability, and fair access requirements. The DMA's messaging interoperability clause allows any messaging service to demand that designated gatekeepers open their APIs to enable cross-platform communication.

---

#### ✅ What to Adopt

**Interoperability as a right, not a request.** The DMA establishes that dominant platforms must provide interoperability — users of one messaging service can communicate with users of another. This breaks the "network effect moat" that locks users into dominant platforms.

**Data portability with teeth.** The DMA goes further than GDPR's portability right by requiring real-time, continuous data access through APIs — not just periodic exports. Users can authorise third parties to continuously access their data, enabling genuine portability of social graphs, preferences, and history.

**No self-preferencing.** Gatekeepers cannot rank their own products and services more favourably than competitors in search or comparison tools.

**App store freedom.** Gatekeepers must allow alternative app stores and alternative payment systems. Users can sideload apps without being warned they are "unsafe."

**Model language note for ODP:** These provisions belong in the ODP Digital Sovereignty and Right to Repair & Interoperability policy models. The interoperability-as-default principle — not just interoperability-on-request — is especially important and should be a baseline for any jurisdiction regulating digital platforms.

---

#### ⚠️ What to Improve

**Gatekeepers only.** The DMA's thresholds are set very high (€7.5 billion annual revenue, 10,000 business users, 45 million end users per month). This means companies that are dominant in specific sectors or smaller markets — but not globally — escape regulation entirely. FSFE argues this is a fundamental weakness: "smaller companies can also exercise gatekeeping power, locking users and businesses into proprietary ecosystems."

**Interoperability by design, not by request.** FSFE's core critique: the DMA creates a request-based interoperability process where companies like Apple control the timing, scope, and conditions of access without external audit or appeal. The principle should be **interoperability by design** — open, transparent, and not subject to gatekeeper discretion.

**What communities said is missing:**
- Device neutrality — the right to install any software on your own device (particularly important for phones and routers)
- Open source first — public procurement of interoperability-compliant products should prefer free/open source implementations
- No discrimination against open source projects — Apple's compliance process has disadvantaged free software projects by imposing financial and administrative requirements incompatible with volunteer-led development
- Coverage of device manufacturers and ISPs, not just app platforms

**Improved model language for ODP:**
> Interoperability should be a design requirement, not a compliance process. Any jurisdiction adopting interoperability requirements should specify: (a) that compliant APIs must be published under open standards, documented publicly, and available without financial preconditions; (b) that open source implementations of interoperability interfaces must be accepted on equal terms with commercial implementations; (c) that device owners have the right to install any software on hardware they own; and (d) that a public, independent appeals mechanism exists for developers whose interoperability requests are denied or delayed.

---

### 3. Digital Services Act (DSA)

**What it does:** Imposes transparency, accountability, and systemic risk assessment requirements on online platforms. Larger platforms (Very Large Online Platforms, or VLOPs) face additional obligations including independent audits, algorithmic transparency, data access for researchers, and annual risk assessments for "systemic risks." Users gain the right to opt out of algorithmic content recommendation, to flag illegal content, and to appeal moderation decisions.

---

#### ✅ What to Adopt

**Systemic risk assessment.** VLOPs must assess and mitigate risks their systems pose to public health, civic discourse, election integrity, and fundamental rights. This is a genuinely novel regulatory concept — platforms are responsible not just for individual content violations but for the aggregate effects of their design choices.

**Algorithmic opt-out.** Users must be able to opt out of personalised algorithmic recommendation and receive content in chronological or other non-personalised order. This is simple, important, and exportable everywhere.

**Data access for researchers.** VLOPs must provide data access to vetted independent researchers. This is essential for civil society oversight — without data, independent assessment of platform effects is impossible.

**Trusted flagger system.** Designated civil society organisations can submit content notices with higher priority than ordinary users — this gives human rights and child safety organisations a more effective reporting channel without giving governments direct censorship power.

**Notice and action.** Platforms must acknowledge and act on notices of illegal content within defined timeframes, with a reasoned explanation.

**Right to appeal content moderation decisions.** Users can challenge moderation decisions through an internal mechanism, and through certified out-of-court dispute settlement bodies.

---

#### ⚠️ What to Improve

**The enforcement model is political.** The European Commission enforces DSA obligations for VLOPs directly — national regulators enforce for smaller platforms. This creates a two-tier system where the most important cases go through a political institution that is subject to diplomatic pressure. The Commission's enforcement pace has been criticised as slow and selective.

**Expression risk cuts both ways.** The DSA's focus on "systemic risks" could be used by governments to pressure platforms to remove political speech they dislike, framed as risk mitigation. EFF warned that "a highly politicised co-regulatory model of enforcement" creates risks to expression. The DSA includes free expression safeguards, but these are weaker than the risk-assessment requirements.

**What communities said is missing:**
- Clear, specific definitions of what counts as a "systemic risk" — vagueness creates space for regulatory capture
- Stronger protections for political and minority speech in the risk-mitigation obligations
- Real transparency on the audit process — current audits are not fully public
- User empowerment in governance — no mechanism for users to participate in setting the terms of platform governance

**Improved model language for ODP:**
> Platforms should be required to assess and mitigate the systemic harms their design choices create. But systemic risk assessment frameworks must include: (a) independent oversight of what counts as a "systemic risk," separate from the enforcement body; (b) explicit protections ensuring that risk mitigation does not require removal of lawful political, minority, or dissenting expression; (c) public disclosure of audit methodologies and findings, not just conclusions; and (d) community representation in the bodies that define risk categories and evaluate platform compliance.

---

### 4. EU AI Act

**What it does:** A risk-based framework that prohibits certain AI uses entirely, imposes strict requirements on "high-risk" AI systems, and requires transparency for AI systems interacting with humans. Prohibited uses include real-time biometric identification in public spaces, social scoring, and manipulation of behaviour exploiting psychological vulnerabilities. High-risk categories include AI used in hiring, credit scoring, healthcare, law enforcement, and education.

---

#### ✅ What to Adopt

**Absolute prohibitions.** The AI Act's list of prohibited AI practices is the most exportable element. These are not "high risk that requires management" — they are things that simply should not be done:
- **Real-time biometric identification in public spaces** for law enforcement (with narrow exceptions)
- **Emotion recognition** in workplaces and educational institutions
- **Social scoring** — ranking individuals by government based on behaviour
- **Manipulation** using subliminal techniques or exploiting vulnerabilities
- **Scraping facial images** from the internet or CCTV to build or expand recognition databases

**High-risk AI requirements.** Deployers of high-risk AI must: conduct conformity assessments; maintain logs; register systems in a public EU database; ensure human oversight; and provide users with meaningful information about the system's purpose and limitations.

**Transparency for AI interactions.** People must be told when they are interacting with an AI system (except in obvious contexts like spam filters). AI-generated content must be marked.

**Fundamental rights impact assessment.** Public bodies deploying high-risk AI must complete a fundamental rights impact assessment before deployment.

**Model language note for ODP:** The absolute prohibitions belong in every AI adoption policy model as a floor. The fundamental rights impact assessment requirement is especially strong — it should be adopted in any public sector AI procurement framework, and the ODP AI Adoption model should make it mandatory.

---

#### ⚠️ What to Improve

**The audit gap — no meaningful independent oversight.** The AI Act's biggest civil society critique is that there is no independent audit ecosystem. Academic researchers found that without data access for external auditors, "document audits have little expressiveness — they have to reverse engineer the whole system's functioning without knowledge or verification that the documents are accurate." Civil society cannot verify what companies self-report.

**Risk classification is self-reported.** Companies largely determine their own risk category. There is no independent pre-market verification that a company's classification is correct — only post-market enforcement.

**High-risk AI in justice, benefits, and migration.** The Act's treatment of AI in immigration and social benefit administration received strong criticism. These are among the highest-stakes applications — errors have severe consequences for individuals who often have the least access to legal recourse.

**What communities said is missing:**
- Mandatory civil society data access rights for systems used in high-risk public applications
- Independent, pre-deployment conformity assessment for the highest-risk categories (not self-certification)
- A right for affected individuals to demand a meaningful human review of any automated decision affecting their fundamental rights — not just access to an explanation
- Real standing for civil society organisations to bring enforcement actions on behalf of affected communities
- The Act's 2025 rollback under the "Digital Omnibus" framing would have delayed high-risk AI obligations — communities successfully resisted this but the pressure continues

**Improved model language for ODP:**
> Any jurisdiction adopting AI governance policy should go beyond the AI Act's self-certification model for public sector deployments. Mandatory provisions should include: (a) independent pre-deployment technical audit for AI systems used in hiring, social benefits, housing, immigration, criminal justice, and healthcare; (b) a right to meaningful human review — not just explanation — for any automated decision with significant impact on an individual; (c) mandatory data access for vetted civil society researchers to audit deployed systems; (d) standing for civil society organisations to bring enforcement actions; and (e) the absolute prohibitions from the AI Act as a baseline floor that cannot be waived.

---

### 5. EU Cyber Resilience Act (CRA)

**What it does:** Imposes cybersecurity requirements on products with digital elements sold in the EU — hardware and software. Manufacturers must assess security risk, patch vulnerabilities for the expected product lifetime, and report actively exploited vulnerabilities to ENISA within 24 hours.

---

#### ✅ What to Adopt

**Lifetime security support requirements.** The CRA requires manufacturers to support products for their "expected lifetime" — a direct challenge to the practice of abandoning software support after a few years while hardware is still in use. This is one of the most practically important consumer protection provisions in recent EU digital law.

**Vulnerability disclosure timelines.** The 24-hour notification requirement for actively exploited vulnerabilities is strong and exportable. It prevents the dangerous practice of sitting on known vulnerabilities.

**Default security requirements.** Products must be secure by default, shipped without known vulnerabilities, and with unnecessary ports and services disabled.

---

#### ⚠️ What to Improve

**The open source community was nearly collateral damage.** The original CRA draft would have applied full liability to individual open source developers for free software — a catastrophic outcome for community-developed software that underpins critical infrastructure globally. After sustained pushback from the Linux Foundation, Apache Foundation, OpenSSF, and many others, the final text exempts non-commercial open source developers and creates a lighter-touch "open source steward" category.

But the exemption has fuzzy edges. The line between "commercial activity" (subject to the CRA) and "not commercial activity" (exempt) is unclear for foundations that accept grants and donations. A maintainer whose project is used by Fortune 500 companies, who accepts $500/year in GitHub Sponsors, may fall within scope. This uncertainty is chilling.

**What communities said is missing:**
- Clear, bright-line definitions of commercial versus non-commercial open source activity
- Explicit protection for individual volunteer maintainers whose software is incorporated into commercial products without their involvement
- A "safe harbour" for open source stewards who cannot reasonably know about all downstream uses of their code
- Funding mechanisms to help open source stewards comply — the CRA's obligations (security policies, vulnerability reporting, documentation) have real costs

**Improved model language for ODP:**
> Any jurisdiction adopting software security requirements should explicitly protect the open source ecosystem on which digital infrastructure depends. Provisions should include: (a) a clear statutory exemption for individual volunteer developers and non-commercial open source projects; (b) a "downstream commercial benefit" rule that assigns compliance obligations to the commercial entity incorporating open source code, not the volunteer who wrote it; (c) public investment in open source security infrastructure (analogous to highway maintenance) proportional to public reliance on community-maintained software; and (d) vulnerability reporting systems that are accessible and safe for individual contributors to use without legal risk.

---

### 6. Chat Control / CSAM Regulation (Contested)

**What it does (proposed):** The EU Child Sexual Abuse Material (CSAM) regulation, known informally as "Chat Control," would require online communication platforms to scan for CSAM — including in private, encrypted messages. The most controversial version would require client-side scanning (on your device, before messages are encrypted), effectively breaking end-to-end encryption for everyone.

---

#### ✅ What to Adopt (the goals, not the method)

The underlying goals — protecting children from sexual exploitation online, enabling law enforcement to identify and remove CSAM — are legitimate and important. The challenge is that the proposed mechanism is technically incapable of achieving the stated goal safely.

What *is* worth adopting from the broader child protection framework:
- Mandatory reporting by platforms when they encounter known CSAM (using hashing of known materials, without scanning private communications)
- Rapid removal requirements for reported CSAM
- Law enforcement cooperation requirements without requiring mass surveillance of the general public
- Investment in non-surveillance alternatives: education, support services, survivor-centred approaches

---

#### 🚨 What to Resist — and Why This Matters for ODP

Chat Control represents the clearest example of a law with a good stated purpose but deeply harmful mechanism. Key reasons it should not be adopted:

**Breaking encryption breaks security for everyone.** There is no technical way to scan encrypted messages for illegal content without either (a) breaking encryption for everyone, or (b) implementing client-side scanning, which is functionally equivalent to having malware on every user's device. The European Parliament's own study concluded that "there is currently no technological way to detect CSAM without unacceptably high error rates."

**False positives at scale are catastrophic.** At EU scale, even a 0.1% error rate would generate hundreds of thousands of false reports daily — overwhelming law enforcement and flagging innocent people's private communications.

**Surveillance infrastructure, once built, is repurposed.** History shows consistently that surveillance capabilities built for one stated purpose are eventually used for others. The metadata retention infrastructure built for counter-terrorism has been used for minor crimes, tax enforcement, and civil disputes.

**The revised 2025 proposal removed mandatory scanning but added age verification.** Under sustained public pressure, the Commission walked back the mandatory encryption-breaking requirement — but the revised text introduces mandatory age verification for messaging apps, which has its own serious privacy implications (requiring identity documentation to use private communication tools).

**ODP principle for Children & Technology policy model:** Protecting children online is a genuine and serious goal. Policies must evaluate mechanisms, not just intentions. No mechanism that requires breaking end-to-end encryption, creating new mass identity databases, or building surveillance infrastructure can be justified by child safety rationales — these approaches harm children and adults alike, and have poor records of actually reducing abuse.

---

### 7. EU Metadata Retention (Proposed / Contested)

**What it does (proposed):** The European Commission is developing a harmonised metadata retention mandate — requiring telecommunications providers to store records of who communicated with whom, for how long, from where, and when — for law enforcement access.

---

#### 🚨 What to Resist

The European Court of Justice has ruled **multiple times** that general and indiscriminate metadata retention is incompatible with EU fundamental rights. The EU Commission is now attempting to re-introduce such mandates in response to law enforcement lobbying, using national security framing.

**Why this matters for ODP:**

Metadata is not "just" data about communications. EFF has documented extensively that metadata can reveal: political affiliation, religious practice, medical conditions, relationship status, sexual orientation, financial situation, and location patterns — often more accurately than content data. "We kill people based on metadata" was the phrase used by former NSA director Michael Hayden, illustrating the intelligence value — and the danger — of metadata at scale.

**The right model:** Targeted, court-ordered data preservation for specific investigations (the "quick freeze" model), not blanket retention across the entire population. Every court that has examined general data retention at the EU level has struck it down. The right policy is to adopt the court's reasoning as positive model language, not to keep trying to re-legislate what courts have repeatedly found unconstitutional.

---

## Summary Table

| EU Law | Adopt | Improve | Resist |
|---|---|---|---|
| **GDPR** | Rights architecture, privacy by design, consent, DPIAs | Enforcement independence, class action, civil society standing | Digital Omnibus weakening proposals |
| **Digital Markets Act** | Interoperability rights, data portability, app store freedom | "By design" not "by request," extend to smaller gatekeepers, device neutrality | — |
| **Digital Services Act** | Risk assessment, algorithmic opt-out, researcher data access, appeal rights | Independent enforcement, expression protections, community governance | — |
| **EU AI Act** | Absolute prohibitions, high-risk requirements, FRIA, transparency | Civil society audit rights, pre-deployment assessment, human review right | Digital Omnibus delays and weakening |
| **Cyber Resilience Act** | Lifetime security support, vulnerability disclosure | Clear open source exemptions, downstream liability, public funding | Original scope that would have harmed volunteer developers |
| **Chat Control (CSAM Regulation)** | Reporting of known CSAM, rapid removal | — | Mass scanning, client-side scanning, mandatory age verification for messaging |
| **Metadata Retention** | Targeted quick-freeze orders | — | General and indiscriminate retention mandates |

---

## Cross-Cutting Lessons for ODP Model Language

Several themes emerge consistently across civil society critiques of EU digital law:

**1. Enforcement is as important as rights.** GDPR has excellent rights but weak enforcement. A policy model that establishes rights without credible, funded, independent enforcement mechanisms is providing false assurance.

**2. Self-certification fails for high-stakes systems.** Wherever companies determine their own compliance category, assess their own risk, and report their own outcomes, the framework is inadequate for high-risk applications. Independent audit rights are essential.

**3. "Simplification" is often deregulation in disguise.** Proposals to reduce compliance burden frequently weaken the substantive protections that were the point. ODP model language should include provisions that explicitly protect against rollback through administrative simplification processes.

**4. Good purposes can produce bad mechanisms.** Chat Control is the starkest example. Policy evaluation must assess mechanisms, not just intentions. "For the children" or "for national security" does not make a surveillance mechanism safe or effective.

**5. Open source must be explicitly protected.** Default application of commercial software regulation to community-developed open source is a category error. Every policy domain in ODP should explicitly address how model language applies (or doesn't apply) to open source software and volunteer developers.

**6. Communities need standing, not just representation.** Consultation processes that include civil society are better than nothing. Standing — the legal right to bring enforcement actions on behalf of affected communities — is categorically better than consultation. ODP model language should include standing rights wherever possible.

**7. Encryption is non-negotiable.** Any policy mechanism that requires weakening, bypassing, or breaking end-to-end encryption should be rejected regardless of the stated purpose. Secure communications are foundational infrastructure for democratic society.

---

## Sources

- [EFF EU Policy page](https://www.eff.org/issues/eu-policy)
- [EFF: A Fundamental-Rights Centered EU Digital Policy (2024–2029)](https://www.eff.org/deeplinks/2024/12/fundamental-rights-centered-eu-digital-policy-effs-recommendations-2024-2029)
- [EFF: EU Tech Regulation—Good Intentions, Unclear Consequences (2024 in Review)](https://www.eff.org/deeplinks/2024/12/eu-tech-regulation-good-intentions-unclear-consequences-2024-year-review)
- [EFF: Chat Control (2025)](https://www.eff.org/deeplinks/2025/12/after-years-controversy-eus-chat-control-nears-its-final-hurdle-what-know)
- [EFF: Don't Resurrect Illegal Data Retention Mandates (2025)](https://www.eff.org/deeplinks/2025/06/eff-european-commission-dont-resurrect-illegal-data-retention-mandates)
- [EFF Statement on DSA and DMA](https://www.eff.org/press/releases/eff-statement-eu-parliaments-formal-approval-digital-services-act-and-digital-markets)
- [EDRi: Digital Omnibus analysis](https://edri.org/our-work/reopening-gdpr-and-eprivacy-through-the-digital-omnibus-a-risky-path-for-eu-digital-rights/)
- [EDRi: Why the Digital Omnibus puts GDPR and ePrivacy at risk](https://edri.org/our-work/why-the-digital-omnibus-puts-gdpr-and-eprivacy-at-risk/)
- [127 civil society organisations: Stop the Digital Omnibus](https://peoplevsbig.tech/the-eu-must-uphold-hard-won-protections-for-digital-human-rights/)
- [FSFE: Digital Markets Act](https://fsfe.org/activities/dma/dma.en.html)
- [FSFE: Interoperability by design](https://fsfe.org/news/2025/news-20250924-01.en.html)
- [OpenSSF: EU Cyber Resilience Act and Open Source](https://openssf.org/public-policy/eu-cyber-resilience-act/)
- [Linux Foundation: Understanding the Cyber Resilience Act](https://www.linuxfoundation.org/blog/understanding-the-cyber-resilience-act)
- [European Court of Human Rights: Weakening Encryption Violates Fundamental Rights (2024)](https://www.eff.org/deeplinks/2024/03/european-court-human-rights-confirms-undermining-encryption-violates-fundamental)
- [EU AI Act and algorithmic discrimination (European Parliament)](https://www.europarl.europa.eu/thinktank/en/document/EPRS_ATA(2025)769509)
- [Addressing the regulatory gap in AI civil society auditing (Springer, 2024)](https://link.springer.com/article/10.1007/s43681-024-00595-3)
- [EU Digital Markets Act: What it's delivered so far (TechPolicy.Press)](https://www.techpolicy.press/what-europes-digital-markets-act-has-delivered-so-far-and-what-comes-next/)
