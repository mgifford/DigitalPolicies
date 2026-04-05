# Open Digital Policies (ODP) — Project Framework

> A living repository of model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.

---

## Vision

Digital technology shapes every layer of modern life: our energy systems, our privacy, our access to public services, our economic participation, and our relationship with government. Yet most digital policy is written behind closed doors, in language inaccessible to the communities most affected by it.

**Open Digital Policies (ODP)** is a community-maintained library of model policy language that communities, municipalities, and governments can adopt, adapt, and advocate for. It is modelled on the [Open Climate Resilience Policies (OCRP)](https://ocrap.net) framework and shares its core belief: that good policy language should be a public good, openly available, versioned, and improvable by anyone.

---

## Guiding Values

These values inform every policy model in this repository. They are non-negotiable starting points, not aspirations.

**People before infrastructure.** Technology serves human needs — not the reverse. Every policy model asks: who benefits, who bears the costs, and who was not consulted?

**Planet as a stakeholder.** Digital infrastructure has a material footprint — energy, water, rare earth materials, e-waste. Policies must account for these impacts.

**Sovereignty by default.** Communities and governments should be able to understand, audit, and exit the digital systems they depend on. Vendor lock-in is a governance failure.

**Openness as a public good.** Open standards, open source software, and open data reduce dependency, increase competition, and enable democratic accountability.

**Access is a right.** Digital services built with public money or serving public functions must be accessible to everyone, including people with disabilities, older adults, and those with low digital literacy.

**Safety and innovation together.** The false choice between safety and innovation is a lobbying strategy. Good policy makes both possible.

---

## How This Repository Works

This project is inspired by and structurally mirrors OCRP, with improvements designed for the digital policy context.

### Repository Structure

```
/
├── FRAMEWORK.md              ← This document: project vision, structure, and governance
├── POLICY_TEMPLATE.md        ← Reusable template for all policy models
├── CONTRIBUTING.md           ← How to add, improve, or translate a policy model
├── GLOSSARY.md               ← Shared definitions to prevent jargon drift
│
├── policies/
│   ├── data-centers/
│   │   ├── README.md         ← Policy model overview and summary
│   │   ├── full-model.md     ← Complete four-pillar policy model
│   │   └── examples/         ← Real-world examples by jurisdiction
│   ├── ai-adoption/
│   ├── open-source/
│   ├── digital-sovereignty/
│   ├── smart-cities-privacy/
│   ├── accessibility/
│   ├── right-to-repair/
│   └── algorithmic-accountability/
│
├── adoptions/
│   └── tracker.md            ← Known adoptions of model language, by jurisdiction
│
└── translations/
    └── [language-code]/      ← Community-contributed translations
```

---

## The Four-Pillar Policy Model

Every policy model in this repository follows the same four-pillar structure, directly mirroring OCRP's approach. This consistency means that readers — whether a community organizer or a city solicitor — always know where to look for the type of content they need.

### Pillar 1: Principles
**The "why."** Core values, rights-based rationale, and equity considerations that underpin the policy. This section makes explicit what a jurisdiction is committing to, not just technically, but philosophically. It is the section most useful for advocacy and public consultation.

### Pillar 2: Standards
**The "what."** Measurable, specific, and technically grounded requirements. Where possible, these reference or align with established international standards (WCAG, ISO, NIST, GDPR, etc.) rather than reinventing them. Standards sections should be precise enough to be enforceable.

### Pillar 3: Implementation
**The "how."** Procurement requirements, transition timelines, reporting obligations, enforcement mechanisms, and tools for compliance. This pillar translates principles and standards into operational reality.

### Pillar 4: Governance
**The "who."** Accountability structures, oversight bodies, community representation requirements, audit processes, and mechanisms for ongoing revision. Good governance ensures the policy remains living and responsive.

---

## Improvements Over OCRP

ODP builds on OCRP's framework with several additions suited to the digital policy context:

| Feature | OCRP | ODP |
|---|---|---|
| Four-pillar structure | ✓ | ✓ |
| GitHub-backed markdown | ✓ | ✓ |
| Real-world examples | ✓ | ✓ |
| Equity framing | ✓ | ✓ |
| Policy template | – | ✓ |
| Adoption tracker | – | ✓ |
| Glossary | – | ✓ |
| Multilingual translations | – | ✓ |
| Contributing guide | – | ✓ |
| Impact / sustainability framing | – | ✓ |
| Accessibility standards built in | – | ✓ |
| Cross-domain dependency mapping | – | ✓ |

---

## Policy Domains

The initial set of policy domains reflects the most urgent gaps in current digital governance. Each is designed to address real trade-offs explicitly — not paper over them.

### 🏭 Data Centers & Environmental Sustainability
*We want AI, but not at the cost of clean water and reliable electricity.*

Data centers are the physical infrastructure of the digital economy. They consume significant water for cooling and electricity for operation — increasingly competing with communities for scarce resources. Sensible policy ensures that the benefits of data infrastructure are shared with, not extracted from, host communities.

**Key tensions addressed:** energy consumption vs. economic development; corporate autonomy vs. community right to know; renewable claims vs. additionality.

---

### 🤖 AI Adoption & Governance
*We want to adopt AI, but want to do so safely.*

AI systems are increasingly embedded in public services, hiring, healthcare, and criminal justice. Without clear policy frameworks, communities bear the risks while vendors capture the benefits. Model language in this domain addresses procurement, impact assessment, transparency, and the rights of people affected by automated decisions.

**Key tensions addressed:** efficiency vs. due process; innovation speed vs. safety; proprietary systems vs. public accountability.

---

### 🔓 Open Source in Government
*Open source reduces dependency, enables local expertise, and keeps public money in public hands.*

Governments at every level spend public money on software that is then owned by private vendors. Open source mandates and preferences can redirect that investment toward systems communities can inspect, maintain, and adapt. This domain also addresses the sustainability of open source projects that governments rely on.

**Key tensions addressed:** upfront costs vs. long-term sovereignty; procurement inertia vs. policy intent; using open source vs. sustaining open source.

---

### 🌐 Digital Sovereignty
*Communities and governments should control the digital systems they depend on.*

Digital sovereignty encompasses data localization, exit rights, interoperability requirements, and community control over critical digital infrastructure. It is not about building walls — it is about ensuring that dependency relationships are visible, voluntary, and reversible.

**Key tensions addressed:** global platforms vs. local control; convenience vs. lock-in risk; investment attraction vs. technology independence.

---

### 🏙️ Smart Cities & Privacy
*We want smart cities, but not at the cost of our privacy.*

"Smart city" technology — sensors, cameras, connected infrastructure — can improve services and reduce waste. It can also enable mass surveillance, discriminatory targeting, and permanent data collection from public spaces without meaningful consent. This domain provides model language for procurement limits, data minimization, and community consent mechanisms.

**Key tensions addressed:** service efficiency vs. civil liberties; security vs. surveillance; public benefit vs. private data extraction.

---

### ♿ Digital Accessibility & Inclusion
*Digital public services must work for everyone.*

Accessibility is not a feature to be added later — it is a precondition for digital equity. This domain covers WCAG compliance mandates, procurement requirements for accessible technology, digital literacy support, and inclusion of people with disabilities in technology design and governance.

**Key tensions addressed:** cost of compliance vs. cost of exclusion; procurement speed vs. accessibility review; innovation vs. standardization.

---

### 🔧 Right to Repair & Interoperability
*You should be able to fix what you own and move your data where you want it.*

Software-enabled locks prevent repair, waste hardware, and concentrate power in the hands of manufacturers. Interoperability requirements prevent vendor lock-in at the systemic level. This domain draws on Canada's C-244, the EU Right to Repair Directive, and emerging data portability frameworks.

**Key tensions addressed:** IP protection vs. consumer rights; proprietary standards vs. open ecosystems; hardware longevity vs. forced obsolescence.

---

### 📊 Algorithmic Accountability
*Automated decisions affecting people's lives must be explainable and contestable.*

Algorithms increasingly determine access to housing, credit, social services, and parole. Without accountability requirements, these systems can perpetuate discrimination invisibly and at scale. This domain covers impact assessment requirements, transparency mandates, audit rights, and the right to human review.

**Key tensions addressed:** operational efficiency vs. due process; trade secrets vs. public accountability; speed vs. fairness.

---

### 👧 Children & Technology
*Children are not small adults. The digital environment must be designed around their best interests, not their exploitability.*

Children and young people are among the most affected populations in the digital economy — targets of manipulation, surveillance, and algorithmic amplification of harmful content — yet they have the least power to protect themselves. This domain draws on the UN Convention on the Rights of the Child, age-appropriate design codes (UK, California, Maryland), COPPA 2.0, and the Kids Online Safety Act. It addresses data collection limits, dark patterns targeting minors, age-appropriate defaults, and the right of young people to participate in governance of the digital systems that shape their lives.

**Key tensions addressed:** platform revenue models vs. child safety; parental control vs. children's autonomy; innovation speed vs. design-time harm prevention; age verification vs. privacy.

*Real-world policy landscape:* This is an area of rapid legislative activity. COPPA 2.0 passed the U.S. Senate 91–3 in July 2024 and extends protections to ages 13–16. The UK Age-Appropriate Design Code (Children's Code) is the most comprehensive enacted framework globally. UNICEF's 2025 working paper on "Best Interests of the Child in the Digital Environment" and the UN Global Digital Compact (2024) provide international normative grounding.

---

### 🗣️ Freedom of Expression & Content Governance
*Open discourse is essential to democracy — but openness is not the same as lawlessness, and platforms are not neutral infrastructure.*

This is one of the most contested domains in digital policy, and one where model language remains genuinely underdeveloped. The tension is real: content moderation done poorly enables harm; content moderation done poorly in the other direction enables censorship. Good policy must navigate this with humility and specificity rather than pretending the tension doesn't exist.

This domain covers platform transparency requirements, algorithmic amplification accountability, the rights of users to contest moderation decisions, due process protections, and the distinction between illegal content and merely unwanted content. It draws on the EU Digital Services Act, the Santa Clara Principles, and emerging municipal and state-level approaches.

**Key tensions addressed:** harm prevention vs. free expression; private platform rules vs. public accountability; national law vs. global platforms; automation speed vs. human review; user safety vs. user autonomy.

*Note on current state:* Unlike some domains in this repository, there is no clear model framework that commands broad consensus. The EU's Digital Services Act is the most comprehensive regulatory framework enacted, but its implications for expression rights remain contested. This domain should be approached as an active area of policy development where the repository's role is to surface options and trade-offs rather than prescribe solutions.

---

## What "Model Language" Means

Policy models in this repository are not off-the-shelf ordinances to be adopted verbatim. They are:

- **Starting points** — carefully researched, grounded in real examples, ready to adapt
- **Educational tools** — structured to explain *why* each provision matters
- **Advocacy resources** — written so that community members can understand and champion them
- **Living documents** — open to improvement, translation, and local adaptation via pull request

Each model includes:
- Suggested legislative/policy language (in blockquotes)
- Rationale for each provision
- Real-world examples from jurisdictions that have enacted similar language
- Known variations and trade-offs
- Cross-references to related policy domains

---

## Governance of This Repository

### Who Can Contribute
Anyone. Contributions are welcome from community advocates, legal practitioners, government staff, researchers, and affected communities. Technical GitHub fluency is not required — see CONTRIBUTING.md for non-technical contribution pathways.

### How Changes Are Made
1. **Proposals** are opened as GitHub Issues or via the web submission form
2. **Drafts** are submitted as Pull Requests with rationale
3. **Review** happens in the open, with a minimum 14-day public comment period for substantive changes
4. **Decisions** are made by the editorial collective, documented in the PR thread
5. **Translations** follow the same process in the relevant language community

### Editorial Standards
- Model language must be grounded in existing enacted or proposed legislation
- All real-world examples must be cited and linkable
- Equity and environmental impact considerations are required in every model
- Accessibility of the documentation itself is a requirement (plain language, heading structure, alt text for any images)

### What This Repository Is Not
- **A lobbying organization.** The repository is neutral as to which specific policies communities should adopt; it provides options, not mandates.
- **A legal service.** Model language requires adaptation by qualified legal practitioners before formal adoption.
- **Complete.** This is a starting point. The most important policies are the ones your community needs that aren't here yet.

---

## Getting Started

**As an advocate:** Start with the policy domain most relevant to your community. Read the Principles section. Share it. Start a conversation.

**As a government staff member:** Look at the Standards and Implementation sections. Cross-reference with your existing procurement or legislative language.

**As a developer:** Fork the repository. Read CONTRIBUTING.md. Add a real-world example, fix a broken link, or propose a new policy domain.

**As a researcher:** The adoptions tracker and cross-domain dependency maps are designed for you. Contributions of evidence and citations are especially valuable.

---

## Related Projects & Inspirations

- [Open Climate Resilience Policies (OCRP)](https://ocrap.net) — the direct structural inspiration for this project
- [Cities4Forests](https://cities4forests.com) — urban forest policy framework underpinning OCRP
- [Digital Public Goods Alliance](https://digitalpublicgoods.net) — registry of open source digital public goods
- [Foundation for Public Code](https://publiccode.net) — standards for public code and policy-as-code
- [Open Government Partnership](https://www.opengovpartnership.org) — government transparency and participation frameworks
- [Electronic Frontier Foundation](https://eff.org) — digital rights policy advocacy and model legislation
- [Algorithm Watch](https://algorithmwatch.org) — algorithmic accountability research and advocacy
- [Repair.org](https://repair.org) — right to repair legislation tracker
- [W3C WAI](https://www.w3.org/WAI/policies/) — global web accessibility laws and policies tracker

---

*This framework document is itself open for improvement. If something is missing, wrong, or could be clearer — open an issue or submit a pull request.*
