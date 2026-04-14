# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/digital-sovereignty/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/digital-sovereignty/full-model/ [light]:

[CRITICAL] label: Ensure every form element has a label
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 385

- Array []
+ Array [
+   Object {
+     "description": "Ensure every form element has a label",
+     "help": "Form elements must have labels",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/label?application=playwright",
+     "id": "label",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\" checked=\"checked\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".task-list-item:nth-child(1) > input",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\" checked=\"checked\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".task-list-item:nth-child(2) > input",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\" checked=\"checked\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".task-list-item:nth-child(3) > input",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\" checked=\"checked\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".task-list-item:nth-child(4) > input",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-placeholder",
+             "impact": "critical",
+             "message": "Element has no placeholder attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element has no placeholder attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".task-list-item:nth-child(5) > input",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.n",
+       "TTv5",
+       "TT5.c",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.1.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "Open Digital Policies — home" [ref=e5] [cursor=pointer]:
        - /url: /
        - text: ODP
        - generic [ref=e6]: Open Digital Policies
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Explore Policies" [ref=e9] [cursor=pointer]:
            - /url: /domains/
        - listitem [ref=e10]:
          - link "About" [ref=e11] [cursor=pointer]:
            - /url: /about/
        - listitem [ref=e12]:
          - link "Adoptions" [ref=e13] [cursor=pointer]:
            - /url: /adoptions/
        - listitem [ref=e14]:
          - link "Tools" [ref=e15] [cursor=pointer]:
            - /url: /tools/
        - listitem [ref=e16]:
          - link "GitHub repository (opens in new window)" [ref=e17] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies
            - text: GitHub ↗
      - generic [ref=e18]:
        - link "Search" [ref=e19] [cursor=pointer]:
          - /url: /search/
          - img [ref=e20]
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img
  - main [ref=e24]:
    - generic [ref=e26]:
      - link "← All policy domains" [ref=e27] [cursor=pointer]:
        - /url: /domains/
      - paragraph [ref=e28]: Policy model
      - heading "Whose Internet Is It?" [level=1] [ref=e29]
      - paragraph [ref=e30]: Digital Sovereignty
      - generic [ref=e31]:
        - generic [ref=e32]: Draft
        - generic [ref=e33]: "Four-pillar model: Principles → Standards → Implementation → Governance"
    - generic [ref=e34]:
      - navigation "Policy sections" [ref=e35]:
        - paragraph [ref=e36]: On this page
        - list [ref=e37]:
          - listitem [ref=e38]:
            - link "Principles — the why" [ref=e39] [cursor=pointer]:
              - /url: "#pillar-1-principles"
          - listitem [ref=e40]:
            - link "Standards — the what" [ref=e41] [cursor=pointer]:
              - /url: "#pillar-2-standards"
          - listitem [ref=e42]:
            - link "Implementation — the how" [ref=e43] [cursor=pointer]:
              - /url: "#pillar-3-implementation"
          - listitem [ref=e44]:
            - link "Governance — the who" [ref=e45] [cursor=pointer]:
              - /url: "#pillar-4-governance"
          - listitem [ref=e46]:
            - link "Real-world examples" [ref=e47] [cursor=pointer]:
              - /url: "#real-world-examples"
          - listitem [ref=e48]:
            - link "Gaps" [ref=e49] [cursor=pointer]:
              - /url: "#gaps-and-known-weaknesses"
      - generic [ref=e50]:
        - heading "Digital Sovereignty — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-04
            - strong [ref=e57]: "Related domains:"
            - link "Open Source in Government" [ref=e58] [cursor=pointer]:
              - /url: ../../open-source-in-government/full-model/
            - text: ","
            - link "Data Centers & Environmental Sustainability" [ref=e59] [cursor=pointer]:
              - /url: ../../data-centers/full-model/
            - text: ","
            - link "AI Adoption & Governance" [ref=e60] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - text: ","
            - link "Algorithmic Accountability" [ref=e61] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - strong [ref=e62]: "Key sources:"
            - text: EU Cyber Resilience Act, EU Data Act (2024), EU Cloud Rules (EUCS), FSFE “Public Money, Public Code”, French Loi pour une République Numérique, German IT-Sicherheitsgesetz, UNDP Digital Public Infrastructure framework
        - separator [ref=e63]
        - heading "Overview" [level=2] [ref=e64]
        - paragraph [ref=e65]: "Digital sovereignty is the capacity of a community — a city, a region, a nation — to understand, govern, and if necessary exit the digital systems on which it depends. It is not digital isolationism. It is not a call to build national internets behind firewalls or to exclude foreign technology. It is the recognition that unexamined dependency is vulnerability, and that democratic accountability requires that communities can ask — and get honest answers to — three questions about any digital system they rely on:"
        - paragraph [ref=e66]:
          - strong [ref=e67]: Who controls it? What does it do with our data? Can we leave?
        - paragraph [ref=e68]: Governments that cannot answer these questions about their core digital infrastructure — their cloud providers, their identity systems, their citizen-facing services — are not governing; they are outsourcing governance. Municipalities that lock their public data into proprietary formats controlled by a single vendor are one contract cancellation away from losing access to their own records. Countries that have ceded control of their payment infrastructure, communications networks, and public health systems to unaccountable global platforms have a sovereignty problem regardless of what their constitutions say.
        - paragraph [ref=e69]: This is not a theoretical concern. In 2021, a major cloud provider’s outage took down emergency services in multiple European countries. In 2022, proprietary software dependencies meant that several public authorities could not access their own records during a vendor dispute. In 2024, US policy changes created risk for European governments relying on US-hosted services for core infrastructure. Digital sovereignty is a practical resilience question as much as a political one.
        - paragraph [ref=e70]: "This policy model addresses the structural conditions of digital sovereignty: what governments must control, what they must be able to inspect, what they must be able to exit, and what communities must be able to participate in governing."
        - heading "The Core Tension" [level=3] [ref=e71]
        - paragraph [ref=e72]:
          - strong [ref=e73]: We want the capability, scale, and convenience of global digital platforms — but not at the cost of accountability, resilience, or the ability of democratic institutions to function independently of decisions made in other jurisdictions. Dependency that is voluntary, transparent, and reversible is acceptable. Dependency that is opaque, locked-in, and unexamined is a governance failure.
        - heading "Scope" [level=3] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - checkbox [checked] [disabled] [ref=e77]
            - text: National government (infrastructure sovereignty, data sovereignty, strategic ICT)
          - listitem [ref=e78]:
            - checkbox [checked] [disabled] [ref=e79]
            - text: Regional / state / provincial government (cloud and vendor policy, data localisation)
          - listitem [ref=e80]:
            - checkbox [checked] [disabled] [ref=e81]
            - text: Municipal / local government (open standards, exit rights, community data governance)
          - listitem [ref=e82]:
            - checkbox [checked] [disabled] [ref=e83]
            - text: Public sector procurement (interoperability, open standards, lock-in prevention)
          - listitem [ref=e84]:
            - checkbox [disabled] [ref=e85]
            - text: Private sector (data portability obligations — addressed in EU Data Act; referenced here)
        - separator [ref=e86]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e87]'
        - heading "Foundational Values" [level=3] [ref=e88]
        - paragraph [ref=e89]:
          - strong [ref=e90]: 1. Dependency must be transparent
          - text: A government that does not know which of its critical functions depend on a single vendor, a foreign jurisdiction, or a closed proprietary standard is not in a position to govern those functions. Transparency about dependency is the prerequisite for sovereignty. This means maintaining current, accurate inventories of digital dependencies — cloud providers, software vendors, data formats, identity systems — and making strategic dependency risk assessable.
        - paragraph [ref=e91]:
          - strong [ref=e92]: 2. Open standards as a condition of sovereignty
          - text: No government or community can be sovereign over data it cannot read without a specific vendor’s software. Open, documented file formats and communication protocols are the technical foundation of sovereignty. Proprietary formats are not merely inconvenient — they are structural lock-in, transferring practical control of public data to private vendors. Open standards must be the default for all public digital infrastructure, with proprietary alternatives requiring documented justification.
        - paragraph [ref=e93]:
          - strong [ref=e94]: 3. The right to exit is the test of sovereignty
          - text: A community that cannot exit a digital system without catastrophic disruption is not sovereign over that system. The right to exit — to switch providers, to migrate data, to run infrastructure independently — must be a design requirement, not an afterthought. Contracts must include exit rights; systems must support data portability; formats must be open. Where these conditions are not met, the procurement decision is a sovereignty transfer.
        - paragraph [ref=e95]:
          - strong [ref=e96]: 4. Public infrastructure requires public governance
          - text: Digital systems that have become de facto public infrastructure — identity systems, payment rails, essential communications platforms — require governance mechanisms that include democratic accountability, civil society oversight, and user rights. The fact that infrastructure is operated by a private entity does not reduce the public’s legitimate interest in its governance.
        - paragraph [ref=e97]:
          - strong [ref=e98]: 5. Sovereignty is not isolationism
          - text: Digital sovereignty does not mean closed borders for data or technology. It means that cross-border data flows, foreign technology adoption, and global platform use are governed by explicit, democratic decisions rather than by default and inertia. International cooperation, shared infrastructure, and global standards are compatible with sovereignty when they are chosen rather than inherited.
        - paragraph [ref=e99]:
          - strong [ref=e100]: 6. Communities are the appropriate unit of sovereignty
          - text: Sovereignty in the digital domain is not only a national question. Municipalities have digital sovereignty interests in their permitting systems, their citizen data, their planning records. Indigenous communities have sovereignty interests in data about their lands, their members, and their cultural heritage. Sovereignty frameworks must be scalable from community to national level.
        - paragraph [ref=e101]:
          - strong [ref=e102]: 7. Resilience and sovereignty reinforce each other
          - text: Systems built for sovereignty — with open standards, exit rights, distributed infrastructure, and documented dependencies — are also more resilient to outages, vendor failures, and geopolitical disruption. Sovereignty is not merely a political value; it is an operational requirement for reliable public services.
        - paragraph [ref=e103]:
          - strong [ref=e104]: 8. Human rights travel with data
          - text: When a government’s data about its citizens is held in a jurisdiction with different legal standards — weaker privacy protections, different rights frameworks, opaque law enforcement access — those citizens’ rights may not travel with their data. Data sovereignty questions are human rights questions.
        - heading "Equity Considerations" [level=3] [ref=e105]
        - list [ref=e106]:
          - listitem [ref=e107]:
            - strong [ref=e108]: Smaller and lower-income jurisdictions
            - text: "face the greatest structural barriers to digital sovereignty: they have less bargaining power with large vendors, fewer resources to develop independent infrastructure, and stronger economic incentives to accept lock-in that reduces short-term costs. Sovereignty frameworks must include regional cooperation mechanisms and shared infrastructure options that make sovereignty achievable at smaller scales."
          - listitem [ref=e109]:
            - strong [ref=e110]: Indigenous communities
            - text: have specific sovereignty interests in data about their members, lands, languages, and cultural heritage. The principle of Indigenous Data Sovereignty — that Indigenous communities should govern data about themselves — is an application of the broader sovereignty framework with additional rights foundations in UN human rights frameworks.
          - listitem [ref=e111]:
            - strong [ref=e112]: People without technical expertise
            - text: — the majority of citizens — cannot assess digital sovereignty conditions themselves. Sovereignty governance must include mechanisms for independent civil society and technical expert oversight that can hold governments accountable on behalf of citizens who lack the capacity to do so directly.
          - listitem [ref=e113]:
            - strong [ref=e114]: Future generations
            - text: inherit the lock-in decisions made today. A government that signs a 10-year proprietary cloud contract without exit provisions in 2025 is constraining the choices of a government elected in 2030.
        - heading "Geopolitical Considerations" [level=3] [ref=e115]
        - paragraph [ref=e116]: Digital sovereignty is not an abstract principle — it has concrete geopolitical dimensions. The concentration of global cloud infrastructure in a small number of US-based companies (AWS, Microsoft Azure, Google Cloud control approximately 65% of global cloud market share) creates structural dependency for governments outside the US. Legal frameworks including the US CLOUD Act create potential obligations for US-based providers to share data with US law enforcement regardless of where the data is physically stored. The EU’s Digital Markets Act, Data Act, and proposed European Cloud Certification Scheme (EUCS) are responses to this structural dependency. This policy model is designed to be applicable regardless of jurisdiction and is not directed against any particular country or provider.
        - separator [ref=e117]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e118]'
        - heading "Mandatory Standards" [level=3] [ref=e119]
        - blockquote [ref=e120]:
          - paragraph [ref=e121]:
            - strong [ref=e122]: Digital Dependency Inventory
            - text: "Within 18 months of this policy taking effect, all government departments and agencies shall maintain a current Digital Dependency Inventory documenting: (a) all cloud services used, including provider identity, data center jurisdiction(s), and contract expiry; (b) all proprietary software in use for core functions, including vendor, version, and data format used; (c) all critical systems where a single vendor provides both the software and the data hosting; (d) all systems where data cannot be exported in a documented open format; and (e) all systems where the authority lacks administrative access to its own data. The inventory shall be reviewed and updated annually. A summary version (excluding security-sensitive details) shall be published and made publicly available."
        - paragraph [ref=e123]:
          - emphasis [ref=e124]: "Rationale:"
          - text: Most public authorities do not know the full extent of their digital dependencies. Without an inventory, strategic sovereignty planning is impossible. The requirement for a published summary version creates public accountability and enables civil society scrutiny of strategic dependency risks. The specific categories (single-vendor stacks, locked formats, administrative access) identify the highest-risk dependency configurations.
        - separator [ref=e125]
        - blockquote [ref=e126]:
          - paragraph [ref=e127]:
            - strong [ref=e128]: Open Standards Requirement
            - text: "All new public digital infrastructure and procured software shall use open, documented, non-proprietary file formats and communication protocols for: (a) any data that may need to be migrated or transferred between systems; (b) any data that may need to be accessed by third parties (including the public, regulators, or audit bodies); (c) any interface that other public systems will connect to; and (d) any document, record, or database intended for long-term retention. “Open standard” means a standard that: is publicly documented without cost; can be implemented by any party without royalty or discriminatory licensing; has a governance process that is not controlled by a single commercial entity; and is maintained and versioned in a publicly accessible process. Proprietary formats may be used as secondary formats for operational convenience but may not be the sole format for any of the categories above."
        - paragraph [ref=e129]:
          - emphasis [ref=e130]: "Rationale:"
          - text: "Open standards are the technical foundation of exit rights and long-term sovereignty. A government’s records in PDF/A, ODF, or open geodata formats can be read with multiple tools and maintained indefinitely. Records in proprietary formats — .docx without XML clarity, binary GIS formats, proprietary database schemas — are readable only with the vendor’s software. This is not hypothetical: public authorities have lost access to their own records following vendor disputes, software discontinuation, and migration failures."
        - paragraph [ref=e131]:
          - emphasis [ref=e132]: "Reference:"
          - link "UK Open Standards Principles" [ref=e133] [cursor=pointer]:
            - /url: https://www.gov.uk/government/publications/open-standards-principles
          - text: ": the UK government’s longstanding policy requiring open standards for government technology."
          - link "France Référentiel Général d’Interopérabilité (RGI)" [ref=e134] [cursor=pointer]:
            - /url: https://www.numerique.gouv.fr/
          - text: ": France’s comprehensive interoperability framework requiring open standards in public administration."
        - separator [ref=e135]
        - blockquote [ref=e136]:
          - paragraph [ref=e137]:
            - strong [ref=e138]: Exit Rights in Contracts
            - text: "All contracts for cloud services, software-as-a-service, and digital infrastructure shall include: (a) a documented exit plan prepared by the vendor before contract commencement and updated annually; (b) a data portability commitment requiring the vendor to provide all of the authority’s data in an open, documented format within 90 days of contract termination or notice; (c) a transition assistance commitment requiring the vendor to support migration to a successor system for a minimum of 12 months following contract termination; (d) a prohibition on contractual terms that increase cost or complexity of exit (e.g., egress fees, format conversion fees, notice periods exceeding 6 months); and (e) a commitment that all data will be securely deleted from vendor systems within 90 days of confirmed data export. Contracts that do not include these terms shall require documented justification approved by a senior official with digital strategy responsibility."
        - paragraph [ref=e139]:
          - emphasis [ref=e140]: "Rationale:"
          - text: "Exit rights exist to convert dependency from permanent to voluntary. The specific provisions address the four most common lock-in mechanisms: data in inaccessible formats, lack of transition support, contractual exit penalties, and absence of data deletion confirmation. The “documented justification” mechanism for non-compliant contracts creates accountability without prohibiting all proprietary systems — recognising that some capabilities are only available through proprietary providers at present — while requiring a deliberate and reviewed decision rather than inadvertent lock-in."
        - separator [ref=e141]
        - blockquote [ref=e142]:
          - paragraph [ref=e143]:
            - strong [ref=e144]: Source Code Access for Critical Systems
            - text: "For any software system classified as critical public infrastructure under this policy, the procuring authority shall: (a) either hold an escrow arrangement for the full source code with a trusted third party; or (b) require that the software be released under an open source licence; or (c) develop equivalent in-house capability. “Critical public infrastructure” for the purposes of this provision includes: identity and authentication systems; emergency services dispatch and coordination systems; social benefit calculation and payment systems; and electoral management systems. Escrow arrangements shall provide the authority with the right to access and modify source code in the event of vendor insolvency, contract termination, or material failure to perform."
        - paragraph [ref=e145]:
          - emphasis [ref=e146]: "Rationale:"
          - text: "For the most critical government functions, source code escrow or open licensing is not merely a procurement preference — it is an operational necessity. A government that cannot access the source code of its emergency dispatch system when the vendor fails is in a dangerous position. This provision is designed to be practical: it does not require open source for all government software, only for the subset of systems where proprietary dependency creates unacceptable operational and sovereignty risk."
        - paragraph [ref=e147]:
          - emphasis [ref=e148]: "Reference:"
          - link "Cabinet Office UK — source code escrow guidance" [ref=e149] [cursor=pointer]:
            - /url: https://www.gov.uk/guidance/source-code-escrow
          - text: ": guidance on when and how to use escrow arrangements."
          - link "Barcelona Digital Sovereignty initiative" [ref=e150] [cursor=pointer]:
            - /url: https://ajuntament.barcelona.cat/digital/en/
          - text: ": pioneering municipal digital sovereignty with open source preference."
        - separator [ref=e151]
        - blockquote [ref=e152]:
          - paragraph [ref=e153]:
            - strong [ref=e154]: Data Residency and Jurisdiction Transparency
            - text: "All cloud and data services used for personal data about residents shall: (a) clearly document the jurisdiction(s) in which data is stored and processed; (b) confirm whether any data is subject to access obligations under the laws of non-EU/non-[jurisdiction] states; (c) provide legally binding commitments regarding law enforcement access requests — specifically, notifying the authority of any access request it is legally permitted to disclose before complying, and logging all access requests it is not permitted to disclose; and (d) confirm that no data will be transferred to a jurisdiction without equivalent data protection standards without prior written consent of the authority. Authorities shall publish an annual summary of any foreign law enforcement access requests received by their cloud providers."
        - paragraph [ref=e155]:
          - emphasis [ref=e156]: "Rationale:"
          - text: Citizens have a right to know when data about them held by public authorities is subject to legal access by foreign governments. The US CLOUD Act (2018) requires US-based companies to provide data to US law enforcement authorities even when the data is stored in the EU. The EU-US Data Privacy Framework provides some protections, but its legal durability has been challenged. The annual access request summary creates public accountability that is currently absent from most jurisdictions.
        - separator [ref=e157]
        - heading "Recommended Standards" [level=3] [ref=e158]
        - blockquote [ref=e159]:
          - paragraph [ref=e160]:
            - strong [ref=e161]: Digital Sovereignty Impact Assessment
            - text: "Before adopting any new digital system for core public functions, public authorities should conduct a Digital Sovereignty Impact Assessment (DSIA) evaluating: the dependency profile of the proposed system (vendor concentration, jurisdiction, open vs. proprietary); the exit cost and timeline if the system is adopted; the existence of equivalent open source or locally controlled alternatives; and the strategic dependency risk at the jurisdictional level (e.g., if this system, combined with existing systems, creates unacceptable concentration with a single vendor or jurisdiction). DSIAs should be proportionate to system scale and risk."
        - separator [ref=e162]
        - blockquote [ref=e163]:
          - paragraph [ref=e164]:
            - strong [ref=e165]: Community Data Governance
            - text: "Public authorities should establish community data governance mechanisms for datasets that are collected from and about communities — including traffic data, air quality data, land use data, and social services data. Community data governance should include: community representation in decisions about data sharing and use; rights for communities to access data about their area; and prohibitions on commercial use of community data without community benefit arrangements."
        - separator [ref=e166]
        - blockquote [ref=e167]:
          - paragraph [ref=e168]:
            - strong [ref=e169]: Federated Identity over Centralised Identity
            - text: Where governments develop or procure digital identity systems, federated architectures (where users control their credentials and no single entity holds complete identity records) should be preferred over centralised architectures (where a single government or commercial entity holds complete identity records). Identity systems should be interoperable with open identity standards (e.g., W3C Decentralised Identifiers, OpenID Connect) and should not require citizens to share identity data with commercial entities as a condition of accessing public services.
        - separator [ref=e170]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e171]'
        - heading "Regulatory and Administrative Requirements" [level=3] [ref=e172]
        - paragraph [ref=e173]:
          - strong [ref=e174]: Digital Sovereignty Strategy
          - text: "Within 24 months of this policy taking effect, the government shall publish a Digital Sovereignty Strategy addressing: a baseline assessment of current strategic dependencies; priority domains for sovereignty improvement over a 5-year horizon; a shared infrastructure programme for capabilities where individual agencies duplicating investment is inefficient; resources allocated to sovereignty-improving investments; and an open source adoption target for core government systems."
        - paragraph [ref=e175]:
          - strong [ref=e176]: Competent Authority
          - text: "A designated authority (the [Digital Sovereignty Office] or equivalent function within a central digital government body) shall be responsible for: maintaining the national Digital Dependency Inventory; developing and updating the open standards list; approving exceptions to exit rights requirements; conducting annual sovereignty risk assessments; and publishing the annual Digital Sovereignty Report."
        - paragraph [ref=e177]:
          - strong [ref=e178]: Phased Implementation Timeline
        - table [ref=e179]:
          - rowgroup [ref=e180]:
            - row "Phase Requirement Timeline" [ref=e181]:
              - columnheader "Phase" [ref=e182]
              - columnheader "Requirement" [ref=e183]
              - columnheader "Timeline" [ref=e184]
          - rowgroup [ref=e185]:
            - row "Phase 1 Digital Dependency Inventory — critical systems Within 12 months" [ref=e186]:
              - cell "Phase 1" [ref=e187]
              - cell "Digital Dependency Inventory — critical systems" [ref=e188]
              - cell "Within 12 months" [ref=e189]
            - row "Phase 1 Open standards requirement for all new procurement Immediately upon enactment" [ref=e190]:
              - cell "Phase 1" [ref=e191]
              - cell "Open standards requirement for all new procurement" [ref=e192]
              - cell "Immediately upon enactment" [ref=e193]
            - row "Phase 1 Exit rights provisions — all new contracts Immediately upon enactment" [ref=e194]:
              - cell "Phase 1" [ref=e195]
              - cell "Exit rights provisions — all new contracts" [ref=e196]
              - cell "Immediately upon enactment" [ref=e197]
            - row "Phase 2 Digital Dependency Inventory — full scope Within 24 months" [ref=e198]:
              - cell "Phase 2" [ref=e199]
              - cell "Digital Dependency Inventory — full scope" [ref=e200]
              - cell "Within 24 months" [ref=e201]
            - row "Phase 2 Source code escrow/access for critical systems Within 24 months" [ref=e202]:
              - cell "Phase 2" [ref=e203]
              - cell "Source code escrow/access for critical systems" [ref=e204]
              - cell "Within 24 months" [ref=e205]
            - row "Phase 2 Data residency and jurisdiction transparency — all personal data systems Within 24 months" [ref=e206]:
              - cell "Phase 2" [ref=e207]
              - cell "Data residency and jurisdiction transparency — all personal data systems" [ref=e208]
              - cell "Within 24 months" [ref=e209]
            - row "Phase 2 Digital Sovereignty Strategy published Within 24 months" [ref=e210]:
              - cell "Phase 2" [ref=e211]
              - cell "Digital Sovereignty Strategy published" [ref=e212]
              - cell "Within 24 months" [ref=e213]
            - row "Phase 3 Digital Sovereignty Impact Assessment for major new systems Within 36 months" [ref=e214]:
              - cell "Phase 3" [ref=e215]
              - cell "Digital Sovereignty Impact Assessment for major new systems" [ref=e216]
              - cell "Within 36 months" [ref=e217]
            - row "Phase 3 Existing contracts reviewed and renegotiated for exit rights Within 48 months" [ref=e218]:
              - cell "Phase 3" [ref=e219]
              - cell "Existing contracts reviewed and renegotiated for exit rights" [ref=e220]
              - cell "Within 48 months" [ref=e221]
            - row "Ongoing Annual Digital Sovereignty Report published Annually from Year 2" [ref=e222]:
              - cell "Ongoing" [ref=e223]
              - cell "Annual Digital Sovereignty Report published" [ref=e224]
              - cell "Annually from Year 2" [ref=e225]
        - paragraph [ref=e226]:
          - strong [ref=e227]: Shared Infrastructure Programme
          - text: "The government shall invest in shared sovereignty-compatible infrastructure available to all public authorities, including: a shared open source code repository and reuse catalogue; shared green-hosting arrangements that meet the open standards and exit rights requirements; shared identity services built on open standards; and shared open geospatial data infrastructure. Shared infrastructure investments shall be proportionate to the sovereignty and cost benefits of reducing duplicated proprietary dependency."
        - heading "Capacity Building" [level=3] [ref=e228]
        - paragraph [ref=e229]: "Within 18 months of enactment, the competent authority shall publish: (a) a Digital Sovereignty Procurement Checklist for procurement officers; (b) training materials on open standards assessment for technical staff; (c) a template DSIA for departments to adapt; and (d) an open source maturity model for government organisations."
        - separator [ref=e230]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e231]'
        - heading "Enforcement" [level=3] [ref=e232]
        - paragraph [ref=e233]:
          - strong [ref=e234]: Procurement Compliance
          - text: The competent authority shall have standing to review any major digital procurement for compliance with open standards and exit rights requirements before contract award. Contracts exceeding [X] in value shall require a sovereignty compliance sign-off from the competent authority. Contracts awarded without required exit provisions shall be reported to the relevant oversight body.
        - paragraph [ref=e235]:
          - strong [ref=e236]: Annual Sovereignty Assessment
          - text: "The competent authority shall publish an annual Digital Sovereignty Report assessing: the national strategic dependency risk profile; progress against the Digital Sovereignty Strategy; compliance with open standards and exit rights requirements across departments; any sovereignty incidents (outages, vendor disputes, access failures) in the preceding year; and recommended policy updates."
        - paragraph [ref=e237]:
          - strong [ref=e238]: Civil Society Oversight
          - text: "The competent authority shall maintain a Digital Sovereignty Advisory Panel including: civil society organisations with digital rights expertise; technical experts from academia and independent research institutions; representatives from local and regional government; and a consumer or citizen representative. The panel shall meet quarterly and provide annual public advice on sovereign digital policy."
        - paragraph [ref=e239]:
          - strong [ref=e240]: Parliamentary / Legislative Oversight
          - text: "Departments shall report to the relevant parliamentary or legislative committee annually on: the status of their Digital Dependency Inventory; any new strategic dependencies acquired in the preceding year; any breaches of open standards or exit rights requirements; and progress against sovereign infrastructure targets."
        - heading "International Cooperation" [level=3] [ref=e241]
        - paragraph [ref=e242]:
          - strong [ref=e243]: Mutual Recognition of Open Standards
          - text: The government shall actively work in international forums (ISO, W3C, IETF, UN bodies) to promote open standards that advance digital sovereignty for all jurisdictions, including developing countries where dependency on proprietary infrastructure is acute.
        - paragraph [ref=e244]:
          - strong [ref=e245]: Shared Infrastructure with Allies
          - text: Bilateral and multilateral arrangements for shared sovereign digital infrastructure — common open source platforms, shared identity interoperability, joint procurement of green hosting meeting sovereignty standards — are consistent with and encouraged by this policy.
        - paragraph [ref=e246]:
          - strong [ref=e247]: Global South Solidarity
          - text: Digital sovereignty policy for wealthy jurisdictions must acknowledge that the structural dependency problem is most acute in lower-income countries that have less bargaining power with global platforms, less technical capacity to develop alternatives, and fewer resources to manage transitions. International digital sovereignty policy should include support for capacity building, open source investment, and shared infrastructure accessible to lower-income jurisdictions.
        - separator [ref=e248]
        - heading "Worked Examples" [level=2] [ref=e249]
        - 'heading "Example A: City Government Cloud Migration" [level=3] [ref=e250]'
        - paragraph [ref=e251]: "A city government is renewing its core ICT infrastructure contract. Under this policy:"
        - list [ref=e252]:
          - listitem [ref=e253]:
            - strong [ref=e254]: "Dependency audit:"
            - text: The city’s Digital Dependency Inventory reveals that all citizen records, permitting data, and financial records are in a single vendor’s proprietary cloud, with data in vendor-specific formats and no documented export capability.
          - listitem [ref=e255]:
            - strong [ref=e256]: "Procurement decision:"
            - text: "The new contract requires: all data to be exportable in open formats (PostgreSQL dump, GeoJSON, CSV); a 12-month transition assistance commitment; no egress fees for data export; annual data portability testing. The city accepts a higher year-one cost for a supplier meeting these terms."
          - listitem [ref=e257]:
            - strong [ref=e258]: "Outcome:"
            - text: The city retains genuine exit rights. Two years later, when the vendor is acquired and prices increase 40%, the city migrates to a competing green hosting provider within six months using its documented export format.
        - 'heading "Example B: National Identity System" [level=3] [ref=e259]'
        - paragraph [ref=e260]: "A national government is considering a digital identity system. Under this policy:"
        - list [ref=e261]:
          - listitem [ref=e262]:
            - strong [ref=e263]: "DSIA:"
            - text: "A Digital Sovereignty Impact Assessment evaluates three architectures: a centralised national database, a federated design using W3C DIDs, and a hybrid. The DSIA finds that the centralised model creates unacceptable single points of failure and foreign jurisdiction risk if hosted on US infrastructure."
          - listitem [ref=e264]:
            - strong [ref=e265]: "Architecture decision:"
            - text: The government selects the federated design, hosted on national green infrastructure, with an open source codebase released under EUPL (European Union Public Licence).
          - listitem [ref=e266]:
            - strong [ref=e267]: "Outcome:"
            - text: Citizens control their own credentials, no single entity holds complete identity records, and the system is inspectable by civil society.
        - separator [ref=e268]
        - heading "Real-World Examples" [level=2] [ref=e269]
        - table [ref=e270]:
          - rowgroup [ref=e271]:
            - row "Jurisdiction Measure Status" [ref=e272]:
              - columnheader "Jurisdiction" [ref=e273]
              - columnheader "Measure" [ref=e274]
              - columnheader "Status" [ref=e275]
          - rowgroup [ref=e276]:
            - row "European Union EU Data Act (2024) — data portability rights, switching rights for cloud services Enacted" [ref=e277]:
              - cell "European Union" [ref=e278]
              - cell "EU Data Act (2024) — data portability rights, switching rights for cloud services" [ref=e279]
              - cell "Enacted" [ref=e280]
            - row "European Union EU Cyber Resilience Act (2024) — open source, supply chain security Enacted" [ref=e281]:
              - cell "European Union" [ref=e282]
              - cell "EU Cyber Resilience Act (2024) — open source, supply chain security" [ref=e283]
              - cell "Enacted" [ref=e284]
            - row "France Loi pour une République Numérique (2016) — open source preference for public sector Enacted" [ref=e285]:
              - cell "France" [ref=e286]
              - cell "Loi pour une République Numérique (2016) — open source preference for public sector" [ref=e287]
              - cell "Enacted" [ref=e288]
            - row "Germany Sovereign Tech Fund — government investment in open source digital infrastructure Active" [ref=e289]:
              - cell "Germany" [ref=e290]
              - cell "Sovereign Tech Fund — government investment in open source digital infrastructure" [ref=e291]
              - cell "Active" [ref=e292]
            - row "Barcelona, Spain Barcelona Digital Sovereignty initiative — open source-first municipal ICT Active" [ref=e293]:
              - cell "Barcelona, Spain" [ref=e294]
              - cell "Barcelona Digital Sovereignty initiative — open source-first municipal ICT" [ref=e295]
              - cell "Active" [ref=e296]
            - row "Estonia X-Road open data exchange layer — sovereign, federated national digital infrastructure Operational" [ref=e297]:
              - cell "Estonia" [ref=e298]
              - cell "X-Road open data exchange layer — sovereign, federated national digital infrastructure" [ref=e299]
              - cell "Operational" [ref=e300]
            - row "European Union European Cloud Certification Scheme (EUCS) — sovereignty-aware cloud certification In development" [ref=e301]:
              - cell "European Union" [ref=e302]
              - cell "European Cloud Certification Scheme (EUCS) — sovereignty-aware cloud certification" [ref=e303]
              - cell "In development" [ref=e304]
            - row "Switzerland Open Source Software obligation for federal administration (2024) Enacted" [ref=e305]:
              - cell "Switzerland" [ref=e306]
              - cell "Open Source Software obligation for federal administration (2024)" [ref=e307]
              - cell "Enacted" [ref=e308]
            - row "India Digital Public Infrastructure (DPI) framework — open stack national digital infrastructure Operational" [ref=e309]:
              - cell "India" [ref=e310]
              - cell "Digital Public Infrastructure (DPI) framework — open stack national digital infrastructure" [ref=e311]
              - cell "Operational" [ref=e312]
        - separator [ref=e313]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e314]
        - list [ref=e315]:
          - listitem [ref=e316]:
            - strong [ref=e317]: The definition of sovereignty is contested
            - text: "— Digital sovereignty means different things to different actors: protecting citizen data from foreign access, reducing vendor dependency, building national technology champions, or asserting state control over information flows (including repressive censorship). This model aligns with the first two meanings; it does not endorse the latter two. The contested nature of the term requires careful use."
          - listitem [ref=e318]:
            - strong [ref=e319]: Global cloud consolidation
            - text: — The hyperscaler market (AWS, Azure, Google Cloud) is highly consolidated. Requiring data residency in a national cloud when national cloud alternatives do not exist forces a choice between sovereignty and operational capability. Sovereign cloud alternatives (Gaia-X, regional providers) are developing but not yet competitive in all service categories.
          - listitem [ref=e320]:
            - strong [ref=e321]: Open source is not automatically sovereign
            - text: — Open source software whose development is controlled by a single US-based foundation or company creates a different but real form of dependency. True sovereignty requires influence over governance, not just access to code.
          - listitem [ref=e322]:
            - strong [ref=e323]: Small states face structural disadvantages
            - text: — The sovereignty tools available to the EU (market scale, regulatory power, Gaia-X) are not available to small states. Shared regional sovereignty frameworks are underdeveloped.
          - listitem [ref=e324]:
            - strong [ref=e325]: Supply chain sovereignty
            - text: — Even fully open source software running on nationally owned servers depends on hardware supply chains dominated by a handful of manufacturers. Hardware-level sovereignty is beyond the scope of this model but is a genuine gap.
          - listitem [ref=e326]:
            - strong [ref=e327]: Indigenous data sovereignty
            - text: — The sovereignty frameworks developed by and for indigenous communities (CARE Principles, OCAP, Te Mana Raraunga) are separate from state digital sovereignty frameworks but often in tension with them. This model does not adequately address that relationship.
        - separator [ref=e328]
        - heading "Glossary" [level=2] [ref=e329]
        - paragraph [ref=e330]:
          - strong [ref=e331]: "Data portability:"
          - text: The right to receive and transfer one’s data in a machine-readable, open format.
        - paragraph [ref=e332]:
          - strong [ref=e333]: "Digital dependency:"
          - text: Reliance on a specific vendor, technology, or jurisdiction for a critical government function.
        - paragraph [ref=e334]:
          - strong [ref=e335]: "Egress fee:"
          - text: A charge levied by cloud providers for transferring data out of their service — a common lock-in mechanism.
        - paragraph [ref=e336]:
          - strong [ref=e337]: "Federated architecture:"
          - text: A design where control and data are distributed across multiple actors rather than held centrally by a single entity.
        - paragraph [ref=e338]:
          - strong [ref=e339]: "Lock-in:"
          - text: A condition where switching from a vendor or system is disproportionately costly or complex, in practice removing exit as a viable option.
        - paragraph [ref=e340]:
          - strong [ref=e341]: "Open standard:"
          - text: A technical standard that is publicly documented, royalty-free to implement, and governed without single-entity control.
        - paragraph [ref=e342]:
          - strong [ref=e343]: "Source code escrow:"
          - text: An arrangement where a third party holds source code with the right to release it to a customer under specified conditions.
        - paragraph [ref=e344]:
          - strong [ref=e345]: "Sovereignty incident:"
          - text: An event where dependency on a specific vendor, jurisdiction, or technology prevented a government from governing a critical function independently.
        - paragraph [ref=e346]:
          - strong [ref=e347]: "Strategic dependency:"
          - text: A dependency on a single vendor, format, or jurisdiction for a function sufficiently critical that its loss or disruption would materially impair government operations.
        - paragraph [ref=e348]:
          - strong [ref=e349]: "US CLOUD Act:"
          - text: US legislation (2018) requiring US-based companies to provide data to US law enforcement authorities, potentially regardless of where the data is stored.
        - separator [ref=e350]
        - heading "Contributing to This Domain" [level=2] [ref=e351]
        - paragraph [ref=e352]: "This policy model is a living document. Contributions especially welcome from people with expertise in:"
        - list [ref=e353]:
          - listitem [ref=e354]: Open standards governance and implementation
          - listitem [ref=e355]: Cloud computing law and cross-border data transfer
          - listitem [ref=e356]: Indigenous Data Sovereignty
          - listitem [ref=e357]: Digital public infrastructure design
          - listitem [ref=e358]: National cybersecurity and sovereignty strategy
          - listitem [ref=e359]: Open source government policy
          - listitem [ref=e360]: International digital governance
        - paragraph [ref=e361]:
          - text: Open an
          - link "Issue" [ref=e362] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/issues
          - text: to propose changes or additions. See
          - link "CONTRIBUTING.md" [ref=e363] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - text: for the contribution process.
        - separator [ref=e364]
        - paragraph [ref=e365]:
          - emphasis [ref=e366]:
            - text: This policy model is published under
            - link "Creative Commons Attribution 4.0 International (CC BY 4.0)" [ref=e367] [cursor=pointer]:
              - /url: https://creativecommons.org/licenses/by/4.0/
            - text: . You are free to share and adapt this material for any purpose, including commercial use, provided you give appropriate credit.
      - link "✏️ Edit this policy on GitHub" [ref=e368] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/digital-sovereignty/full-model.md
  - contentinfo [ref=e369]:
    - generic [ref=e370]:
      - generic [ref=e371]:
        - heading "Open Digital Policies" [level=3] [ref=e372]
        - paragraph [ref=e373]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e374]:
        - heading "Policy Domains" [level=3] [ref=e375]
        - list [ref=e376]:
          - listitem [ref=e377]:
            - link "Who Pays for AI's Power Bill?" [ref=e378] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e379]:
            - link "Digital Services That Work for Everyone" [ref=e380] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e381]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e382] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e383]:
            - link "Public Money, Public Code" [ref=e384] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e385]:
            - link "AI That Works For You, Not On You" [ref=e386] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e387]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e388] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e389]:
            - link "A Greener Web" [ref=e390] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e391]:
            - link "Your City Is Watching You" [ref=e392] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e393]:
            - link "Whose Internet Is It?" [ref=e394] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e395]:
            - link "Technology That's Safe for Kids" [ref=e396] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e397]:
            - link "Who Decides What You Can Say Online?" [ref=e398] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e399]:
            - link "Digital Infrastructure for Everyone" [ref=e400] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e401]:
        - heading "Resources" [level=3] [ref=e402]
        - list [ref=e403]:
          - listitem [ref=e404]:
            - link "Explore all domains" [ref=e405] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e406]:
            - link "Adoptions tracker" [ref=e407] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e408]:
            - link "Search" [ref=e409] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e410]:
            - link "About this project" [ref=e411] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e412]:
            - link "How to contribute" [ref=e413] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e414]:
            - link "Glossary" [ref=e415] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e416]:
        - heading "Community" [level=3] [ref=e417]
        - list [ref=e418]:
          - listitem [ref=e419]:
            - link "GitHub repository" [ref=e420] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e421]:
            - link "Open an issue" [ref=e422] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e423]:
            - link "Propose a domain" [ref=e424] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e425]:
            - link "Report an adoption" [ref=e426] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e427]:
      - generic [ref=e428]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e429] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e430]:
        - text: Maintained by
        - link "the ODP community" [ref=e431] [cursor=pointer]:
          - /url: https://github.com/mgifford/DigitalPolicies
        - text: .
```

# Test source

```ts
  2   |  * Full accessibility matrix test — Playwright + axe-core
  3   |  *
  4   |  * Covers every page of the site across light and dark color schemes.
  5   |  * The project (desktop / mobile) is selected at the Playwright level via
  6   |  * `--project`; the color scheme is controlled here via the A11Y_THEME
  7   |  * environment variable so that CI can run all four combinations in a matrix.
  8   |  *
  9   |  * Usage:
  10  |  *   A11Y_THEME=light  npx playwright test --project=desktop
  11  |  *   A11Y_THEME=dark   npx playwright test --project=desktop
  12  |  *   A11Y_THEME=light  npx playwright test --project=mobile
  13  |  *   A11Y_THEME=dark   npx playwright test --project=mobile
  14  |  *
  15  |  * Local quick-check (desktop, light):
  16  |  *   BASE_URL=http://localhost:4000 npx playwright test --project=desktop
  17  |  */
  18  | 
  19  | import { test, expect } from '@playwright/test';
  20  | import AxeBuilder from '@axe-core/playwright';
  21  | 
  22  | // ---------------------------------------------------------------------------
  23  | // Configuration
  24  | // ---------------------------------------------------------------------------
  25  | 
  26  | const THEME = (process.env.A11Y_THEME || 'light') as 'light' | 'dark';
  27  | 
  28  | const PAGES = [
  29  |   '/',
  30  |   '/domains/',
  31  |   '/domains/data-centers/full-model/',
  32  |   '/domains/accessibility/full-model/',
  33  |   '/domains/ai-adoption/full-model/',
  34  |   '/domains/algorithmic-accountability/full-model/',
  35  |   '/domains/open-source-in-government/full-model/',
  36  |   '/domains/web-sustainability/full-model/',
  37  |   '/domains/digital-sovereignty/full-model/',
  38  |   '/domains/smart-cities/full-model/',
  39  |   '/domains/children-technology/full-model/',
  40  |   '/domains/freedom-of-expression/full-model/',
  41  |   '/domains/digital-public-infrastructure/full-model/',
  42  |   '/about/',
  43  |   '/adoptions/',
  44  |   '/search/',
  45  |   '/tools/',
  46  |   '/tools/advocate/',
  47  |   '/tools/policy-pro/',
  48  | ];
  49  | 
  50  | const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
  51  | 
  52  | // ---------------------------------------------------------------------------
  53  | // Helpers
  54  | // ---------------------------------------------------------------------------
  55  | 
  56  | /**
  57  |  * Format axe violations into a readable string for test failure messages.
  58  |  */
  59  | function formatViolations(violations: Awaited<ReturnType<AxeBuilder['analyze']>>['violations']): string {
  60  |   if (violations.length === 0) return '';
  61  |   return violations
  62  |     .map(v => {
  63  |       const nodeList = v.nodes
  64  |         .slice(0, 3)
  65  |         .map(n => `    • ${n.html}`)
  66  |         .join('\n');
  67  |       return `[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}\n${nodeList}`;
  68  |     })
  69  |     .join('\n\n');
  70  | }
  71  | 
  72  | // ---------------------------------------------------------------------------
  73  | // Tests — one test per page, loop defined at module level so Playwright
  74  | // can report each page as a distinct test case.
  75  | // ---------------------------------------------------------------------------
  76  | 
  77  | for (const path of PAGES) {
  78  |   test(`${THEME} | ${path}`, async ({ page, isMobile }) => {
  79  |     // Use Playwright's emulateMedia — more reliable than --force-dark-mode
  80  |     // because it targets the prefers-color-scheme media query directly.
  81  |     await page.emulateMedia({ colorScheme: THEME });
  82  | 
  83  |     await page.goto(path, { waitUntil: 'networkidle' });
  84  | 
  85  |     // If mobile, open the nav menu so axe can also audit it in its open state.
  86  |     // The site uses #nav-toggle (see _includes/nav.html).
  87  |     const navToggle = page.locator('#nav-toggle');
  88  |     if (isMobile && await navToggle.isVisible()) {
  89  |       await navToggle.click();
  90  |       // Give the menu animation a moment to settle.
  91  |       await page.waitForTimeout(300);
  92  |     }
  93  | 
  94  |     const results = await new AxeBuilder({ page })
  95  |       .withTags(WCAG_TAGS)
  96  |       .analyze();
  97  | 
  98  |     const message = results.violations.length > 0
  99  |       ? `\n\nAxe found ${results.violations.length} violation(s) on ${path} [${THEME}]:\n\n${formatViolations(results.violations)}`
  100 |       : '';
  101 | 
> 102 |     expect(results.violations, message).toEqual([]);
      |                                         ^ Error: 
  103 |   });
  104 | }
  105 | 
```