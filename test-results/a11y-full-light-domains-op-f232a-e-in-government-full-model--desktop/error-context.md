# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/open-source-in-government/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/open-source-in-government/full-model/ [light]:

[CRITICAL] label: Ensure every form element has a label
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 457

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
+           ".task-list-item:nth-child(6) > input",
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
      - heading "Public Money, Public Code" [level=1] [ref=e29]
      - paragraph [ref=e30]: Open Source in Government
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
        - heading "Open Source in Government — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-04
            - strong [ref=e57]: "Maintainers:"
            - text: Open Digital Policies community
            - strong [ref=e58]: "Related domains:"
            - link "Digital Sovereignty" [ref=e59] [cursor=pointer]:
              - /url: ../../digital-sovereignty/full-model/
            - text: ","
            - link "Digital Accessibility" [ref=e60] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: ","
            - link "Algorithmic Accountability" [ref=e61] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: ","
            - link "Digital Public Infrastructure" [ref=e62] [cursor=pointer]:
              - /url: ../../digital-public-infrastructure/full-model/
        - separator [ref=e63]
        - heading "Overview" [level=2] [ref=e64]
        - paragraph [ref=e65]:
          - text: When governments commission or purchase software using public money, the resulting code belongs to the public. Yet most publicly-funded software is never released, never reused, and often creates permanent dependency on a single vendor. This policy model establishes the principle that
          - strong [ref=e66]: public money should produce public code
          - text: — software funded by taxpayers should be available for all taxpayers to use, inspect, improve, and share. It provides enforceable standards for open source adoption, procurement reform, code release obligations, and the sustainable funding of shared digital infrastructure.
        - heading "The Core Tension" [level=3] [ref=e67]
        - paragraph [ref=e68]: We want governments to benefit from modern software tools and shared digital infrastructure — without surrendering sovereignty to a handful of proprietary vendors, without paying for the same solutions dozens of times across different agencies, and without creating systems that citizens cannot audit or trust.
        - heading "Scope" [level=3] [ref=e69]
        - paragraph [ref=e70]:
          - text: "This policy model is designed to apply at the level of:"
          - emphasis [ref=e71]: (select all that apply)
        - list [ref=e72]:
          - listitem [ref=e73]:
            - checkbox [checked] [disabled] [ref=e74]
            - text: Municipal / local government
          - listitem [ref=e75]:
            - checkbox [checked] [disabled] [ref=e76]
            - text: Regional / state / provincial government
          - listitem [ref=e77]:
            - checkbox [checked] [disabled] [ref=e78]
            - text: National government
          - listitem [ref=e79]:
            - checkbox [checked] [disabled] [ref=e80]
            - text: Public sector procurement (any level)
          - listitem [ref=e81]:
            - checkbox [disabled] [ref=e82]
            - text: Regulated industry
          - listitem [ref=e83]:
            - checkbox [disabled] [ref=e84]
            - text: "Other:"
            - strong [ref=e85]: __
            - text: _____
        - separator [ref=e86]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e87]'
        - heading "Foundational Values" [level=3] [ref=e88]
        - paragraph [ref=e89]:
          - strong [ref=e90]: 1. Public Money, Public Code
          - text: Software developed with public funds for public use is a public good. It should be available under a free and open source licence for anyone to use, study, modify, and share. Keeping publicly-funded code proprietary means taxpayers pay twice — once to build it, and again for every jurisdiction that builds the same thing independently.
        - paragraph [ref=e91]:
          - strong [ref=e92]: 2. Sovereignty by Default
          - text: Governments that depend on proprietary systems from a small number of vendors surrender their ability to change providers, audit what the system does, adapt it to local needs, or continue operating if a vendor exits the market. Open source is a prerequisite for genuine technological sovereignty. This applies especially to critical infrastructure — electoral systems, benefits administration, health records, and public safety systems.
        - paragraph [ref=e93]:
          - strong [ref=e94]: 3. Interoperability as a Public Obligation
          - text: Public digital services must be able to communicate with each other and with citizen-facing tools, regardless of which vendor built them. Vendor lock-in achieved through proprietary data formats, interfaces, or file formats is a failure of public governance, not a technical inevitability.
        - paragraph [ref=e95]:
          - strong [ref=e96]: 4. Security Through Transparency
          - text: Open source software can be independently audited by security researchers, academics, and civil society. The argument that proprietary software is more secure because its code is hidden (“security through obscurity”) is not supported by evidence and forecloses independent verification. Critical public systems should be auditable.
        - paragraph [ref=e97]:
          - strong [ref=e98]: 5. Contribution, Not Just Consumption
          - text: Governments should be participants in the open source ecosystem, not just consumers of it. When public bodies use open source software, they benefit from community labour. They have a corresponding obligation to contribute improvements back — in code, documentation, translations, and bug reports.
        - paragraph [ref=e99]:
          - strong [ref=e100]: 6. Sustainable Infrastructure Requires Sustained Investment
          - text: Open source software is not free to maintain. The Sovereign Tech Fund model demonstrates that governments can and should invest in the maintenance of open source components that underpin critical public services. “Free as in cost” is not the same as “maintained for free.”
        - paragraph [ref=e101]:
          - strong [ref=e102]: 7. Accessibility and Inclusion by Design
          - text: Open source procurement must not become a barrier to participation. Small jurisdictions, under-resourced agencies, and Global South governments must be able to access and benefit from shared open source solutions without requiring specialist capacity that only well-resourced actors possess.
        - heading "Equity Considerations" [level=3] [ref=e103]
        - list [ref=e104]:
          - listitem [ref=e105]:
            - strong [ref=e106]: Small and rural municipalities
            - text: — Large proprietary vendors disproportionately serve large urban clients; small jurisdictions often end up with worse systems at higher per-capita cost. Shared open source infrastructure reduces this disparity.
          - listitem [ref=e107]:
            - strong [ref=e108]: Global South governments
            - text: — Proprietary software licensing costs represent a significant proportion of ICT budgets in lower-income countries. Open source reduces licensing costs and enables local adaptation, but Global South governments often lack the capacity to navigate open source procurement without support. Digital Public Goods frameworks (UNDP, DPGA, UNICEF) are partially addressing this.
          - listitem [ref=e109]:
            - strong [ref=e110]: Disabled users
            - text: — Government software procured without accessibility requirements, often through opaque proprietary procurement, has historically produced inaccessible services. Open source software subject to public scrutiny is more likely to surface accessibility failures. See
            - link "Digital Accessibility model" [ref=e111] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: .
          - listitem [ref=e112]:
            - strong [ref=e113]: Workers and public sector unions
            - text: — Open source adoption that creates new technical dependencies without training and workforce investment can harm workers. Policy must include capacity-building obligations.
          - listitem [ref=e114]:
            - strong [ref=e115]: Civil society and journalists
            - text: — Proprietary government software cannot be independently audited. Open code enables investigative journalism, academic research, and civil society oversight of government systems.
        - heading "Environmental Considerations" [level=3] [ref=e116]
        - paragraph [ref=e117]:
          - text: Proprietary software lock-in drives unnecessary hardware refresh cycles, as vendors bundle obsolescence into licensing models. Open source software is significantly more likely to support older hardware and longer device lifetimes, reducing e-waste. Shared open source infrastructure also reduces the duplicate energy expenditure of each agency running separate instances of equivalent systems. See
          - link "Right to Repair" [ref=e118] [cursor=pointer]:
            - /url: ../../right-to-repair/full-model/
          - text: and
          - link "Data Centers" [ref=e119] [cursor=pointer]:
            - /url: ../../data-centers/full-model/
          - text: for complementary standards.
        - separator [ref=e120]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e121]'
        - heading "Mandatory Standards" [level=3] [ref=e122]
        - blockquote [ref=e123]:
          - paragraph [ref=e124]:
            - strong [ref=e125]: "Standard 1: Open Source by Default for Publicly-Funded Custom Software"
            - text: "Any software custom-developed, commissioned, or substantially funded by a public body using public funds must be released under an approved open source licence within 60 days of deployment, unless a documented exemption applies. Exemptions are limited to: (a) software that would directly expose security vulnerabilities if released; (b) software containing personal data that cannot be separated from the codebase; or (c) software subject to binding third-party intellectual property constraints that predate this policy. All exemptions must be documented, time-limited, and subject to public disclosure of the exemption itself (if not its grounds)."
        - paragraph [ref=e126]:
          - emphasis [ref=e127]: "Rationale: The FSFE’s “Public Money? Public Code!” campaign documents that across Europe, governments repeatedly fund development of nearly identical software solutions in parallel, producing waste estimated in the billions of euros. France’s Digital Republic Act (Loi no. 2016-1321, 2016) established source code produced by public administrations as public documents subject to open access. The principle is now well-established in law; the gap is enforcement."
        - paragraph [ref=e128]:
          - emphasis [ref=e129]:
            - text: "Reference:"
            - link "FSFE Public Money? Public Code! campaign" [ref=e130] [cursor=pointer]:
              - /url: https://fsfe.org/activities/publiccode/publiccode.en.html
            - text: ; France Loi no. 2016-1321, Article 16;
            - link "Foundation for Public Code — Standard for Public Code" [ref=e131] [cursor=pointer]:
              - /url: https://standard.publiccode.net/
        - separator [ref=e132]
        - blockquote [ref=e133]:
          - paragraph [ref=e134]:
            - strong [ref=e135]: "Standard 2: Approved Licence List"
            - text: Public bodies may only release publicly-funded software under licences from an approved list maintained by the national or supra-national open source oversight body. The approved list must include, at minimum, all licences approved by the Open Source Initiative (OSI) and identified as “popular and widely used.” Public bodies must apply the most permissive licence compatible with the software’s purpose and security requirements. Proprietary relicensing of publicly-funded software is prohibited.
        - paragraph [ref=e136]:
          - emphasis [ref=e137]: "Rationale: France’s Decree No. 2017-638 (implementing Loi 2016-1321) established a state-approved licence list precisely to avoid proliferation of incompatible custom government licences. The European Commission’s Open Source Strategy similarly restricts the EC to approved licences. Without an approved list, jurisdictions produce fragmented, incompatible releases that cannot be combined or reused."
        - paragraph [ref=e138]:
          - emphasis [ref=e139]:
            - text: "Reference: France Décret no. 2017-638 du 27 avril 2017;"
            - link "EU EC Open Source Software Strategy" [ref=e140] [cursor=pointer]:
              - /url: https://commission.europa.eu/about/departments-and-executive-agencies/digital-services/open-source-software-strategy_en
        - separator [ref=e141]
        - blockquote [ref=e142]:
          - paragraph [ref=e143]:
            - strong [ref=e144]: "Standard 3: Machine-Readable Metadata (publiccode.yml)"
            - text: All publicly-funded open source software repositories must include a
            - code [ref=e145]: publiccode.yml
            - text: "metadata file conforming to the current version of the publiccode.yml standard. This file must include, at minimum: software name, description in all official languages of the jurisdiction, licence, version, supported platforms, contact for maintenance, and accessibility statement. Repositories must be registered in the jurisdiction’s public software catalogue within 30 days of initial release."
        - paragraph [ref=e146]:
          - emphasis [ref=e147]: "Rationale: publiccode.yml was developed under Italy’s Developers Italia programme and has since become the reference standard for the EU Open Source Solutions Catalogue launched in 2025. Without machine-readable metadata, software catalogues are manually maintained, quickly become outdated, and cannot support automated discovery and reuse. Italy’s mandatory adoption of publiccode.yml since 2020 demonstrates that this requirement is implementable."
        - paragraph [ref=e148]:
          - emphasis [ref=e149]:
            - text: "Reference:"
            - link "publiccode.yml standard" [ref=e150] [cursor=pointer]:
              - /url: https://github.com/publiccodeyml/publiccode.yml
            - text: ;
            - link "EU OSS Catalogue / Interoperable Europe Portal" [ref=e151] [cursor=pointer]:
              - /url: https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/publiccodeyml-standard
        - separator [ref=e152]
        - blockquote [ref=e153]:
          - paragraph [ref=e154]:
            - strong [ref=e155]: "Standard 4: Open Source Preference in Procurement"
            - text: "When procuring software, public bodies must assess available open source alternatives before procuring proprietary solutions. Where a functionally equivalent open source solution exists that meets the jurisdiction’s requirements, the open source solution must be preferred. Where a proprietary solution is selected, the procuring body must document: (a) which open source alternatives were assessed; (b) why they were found inadequate; and (c) what steps the body will take to contribute to closing that gap, if applicable. This assessment must be published as part of the procurement record."
        - paragraph [ref=e156]:
          - emphasis [ref=e157]: "Rationale: An “open source preference” or “open source first” policy — as established by the UK Government Digital Service, the European Commission’s Open Source Strategy, and multiple national policies — does not prohibit proprietary procurement but makes the burden of justification explicit. It also provides a feedback loop: when open source alternatives are systematically found inadequate in a given category, this signals where investment is needed."
        - paragraph [ref=e158]:
          - emphasis [ref=e159]:
            - text: "Reference: UK Government Service Standard; EC Open Source Strategy 2020–2023;"
            - link "UNDP open source guidance for public practitioners" [ref=e160] [cursor=pointer]:
              - /url: https://www.undp.org/trinidad-and-tobago/blog/open-source-software-public-practitioners
        - separator [ref=e161]
        - blockquote [ref=e162]:
          - paragraph [ref=e163]:
            - strong [ref=e164]: "Standard 5: Prohibition on Proprietary Lock-in Clauses"
            - text: "Public procurement contracts for software and digital services must not contain clauses that: (a) restrict the jurisdiction’s ability to migrate to alternative solutions; (b) impose proprietary data formats that prevent data portability; (c) prohibit reverse engineering for interoperability purposes; or (d) contractually prevent the jurisdiction from adopting open source alternatives in future. Exit plans, including data portability and migration support, must be contractually required for all software contracts with a value above [threshold to be set by jurisdiction]."
        - paragraph [ref=e165]:
          - emphasis [ref=e166]: "Rationale: Vendor lock-in is not achieved only through technical means — it is frequently embedded in contract terms. The EU Interoperable Europe Act (Articles 4 and 8) establishes code sharing and interoperability obligations; DMA Article 6 addresses interoperability for gatekeepers; but government procurement contracts routinely include terms that are never scrutinised against these principles."
        - paragraph [ref=e167]:
          - emphasis [ref=e168]:
            - text: "Reference:"
            - link "EU Interoperable Europe Act" [ref=e169] [cursor=pointer]:
              - /url: https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/interoperable-europe-act-and-open-source-community
            - text: ; EU Digital Markets Act; FSFE
            - link "Interoperability by design" [ref=e170] [cursor=pointer]:
              - /url: https://fsfe.org/news/2023/news-20230323-02.en.html
        - separator [ref=e171]
        - heading "Aspirational Standards" [level=3] [ref=e172]
        - blockquote [ref=e173]:
          - paragraph [ref=e174]:
            - strong [ref=e175]: "Aspirational Standard 1: Open Source Programme Office (OSPO)"
            - text: "Any public body with an annual ICT spend exceeding [threshold] or with more than [threshold] employees shall establish or designate an Open Source Programme Office (OSPO) responsible for: managing open source licence compliance; maintaining the jurisdiction’s software catalogue; assessing open source alternatives in procurement; coordinating contributions back to upstream projects; and providing open source guidance to staff."
        - paragraph [ref=e176]:
          - emphasis [ref=e177]: "Rationale: OSPOs are an established model in both the private sector and, increasingly, government. The European Commission established its OSPO in 2020. The TODO Group and OSPO Alliance have documented OSPO implementation frameworks. UN Open Source Week 2026 includes a dedicated track on OSPOs for public interest objectives (25 June 2026). Without a dedicated function, open source obligations tend to be diffused, untracked, and unenforced."
        - separator [ref=e178]
        - blockquote [ref=e179]:
          - paragraph [ref=e180]:
            - strong [ref=e181]: "Aspirational Standard 2: Sustained Infrastructure Investment"
            - text: "[Jurisdiction] shall establish a recurring fund for investment in open source components that underpin critical public digital services, modelled on Germany’s Sovereign Tech Agency. The fund shall prioritise: security maintenance of widely-used open source libraries; accessibility improvements in open source software used in government services; and reducing technical debt in shared government open source components."
        - paragraph [ref=e182]:
          - emphasis [ref=e183]: "Rationale: The German Sovereign Tech Fund invested over €23.5 million in 60+ open source projects through 2024, growing to a projected €17 million annual budget by 2025. The EU is developing an EU Sovereign Tech Fund to complement national efforts. The Heartbleed vulnerability (2014) demonstrated that critical internet infrastructure maintained by volunteers without dedicated funding is a systemic risk. Government dependency on open source without corresponding investment is free-riding on community labour."
        - paragraph [ref=e184]:
          - emphasis [ref=e185]:
            - text: "Reference:"
            - link "Sovereign Tech Agency" [ref=e186] [cursor=pointer]:
              - /url: https://www.sovereign.tech/
            - text: ;
            - link "EU Sovereign Tech Fund" [ref=e187] [cursor=pointer]:
              - /url: https://en.wikipedia.org/wiki/EU_Sovereign_Tech_Fund
        - separator [ref=e188]
        - blockquote [ref=e189]:
          - paragraph [ref=e190]:
            - strong [ref=e191]: "Aspirational Standard 3: Digital Public Goods Alignment"
            - text: Software developed by public bodies that may be useful to other jurisdictions — particularly Global South governments — should be assessed against the Digital Public Goods Standard and, where appropriate, registered with the Digital Public Goods Alliance. International development assistance that includes software components should require open source release under the DPG Standard as a funding condition.
        - paragraph [ref=e192]:
          - emphasis [ref=e193]: "Rationale: The UNDP’s Digital Public Goods framework, the DPGA, and UNICEF’s work on digital public infrastructure establish a recognised pathway for government software to become a global common good. UN Open Source Week 2026 includes a Digital Public Infrastructure Day (24 June) specifically addressing this opportunity."
        - paragraph [ref=e194]:
          - emphasis [ref=e195]:
            - text: "Reference:"
            - link "UN Digital Public Goods" [ref=e196] [cursor=pointer]:
              - /url: https://www.un.org/digital-emerging-technologies/content/digital-public-goods
            - text: ;
            - link "UNICEF DPG Toolkit" [ref=e197] [cursor=pointer]:
              - /url: https://unicef.github.io/publicgoods-toolkit/
            - text: ;
            - link "Foundation for Public Code projects" [ref=e198] [cursor=pointer]:
              - /url: https://projects.publiccode.net/
        - separator [ref=e199]
        - heading "Standards Cross-Reference" [level=3] [ref=e200]
        - table [ref=e201]:
          - rowgroup [ref=e202]:
            - row "Standard Referenced Body Version Notes" [ref=e203]:
              - columnheader "Standard Referenced" [ref=e204]
              - columnheader "Body" [ref=e205]
              - columnheader "Version" [ref=e206]
              - columnheader "Notes" [ref=e207]
          - rowgroup [ref=e208]:
            - row "Open Source Initiative approved licences OSI Current Minimum baseline for approved licence list" [ref=e209]:
              - cell "Open Source Initiative approved licences" [ref=e210]
              - cell "OSI" [ref=e211]
              - cell "Current" [ref=e212]
              - cell "Minimum baseline for approved licence list" [ref=e213]
            - row "publiccode.yml publiccodeyml community / EU Current Mandatory metadata for all public software releases" [ref=e214]:
              - cell "publiccode.yml" [ref=e215]
              - cell "publiccodeyml community / EU" [ref=e216]
              - cell "Current" [ref=e217]
              - cell "Mandatory metadata for all public software releases" [ref=e218]
            - row "Standard for Public Code Foundation for Public Code Current Comprehensive implementation guidance" [ref=e219]:
              - cell "Standard for Public Code" [ref=e220]
              - cell "Foundation for Public Code" [ref=e221]
              - cell "Current" [ref=e222]
              - cell "Comprehensive implementation guidance" [ref=e223]
            - row "Digital Public Goods Standard DPGA / UNICEF 1.1+ For software intended for international reuse" [ref=e224]:
              - cell "Digital Public Goods Standard" [ref=e225]
              - cell "DPGA / UNICEF" [ref=e226]
              - cell "1.1+" [ref=e227]
              - cell "For software intended for international reuse" [ref=e228]
            - row "EU Interoperable Europe Act European Parliament 2024 Interoperability and code-sharing obligations" [ref=e229]:
              - cell "EU Interoperable Europe Act" [ref=e230]
              - cell "European Parliament" [ref=e231]
              - cell "2024" [ref=e232]
              - cell "Interoperability and code-sharing obligations" [ref=e233]
            - row "REUSE specification FSFE 3.x Machine-readable licence and copyright information in repositories" [ref=e234]:
              - cell "REUSE specification" [ref=e235]
              - cell "FSFE" [ref=e236]
              - cell "3.x" [ref=e237]
              - cell "Machine-readable licence and copyright information in repositories" [ref=e238]
        - separator [ref=e239]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e240]'
        - heading "Procurement Requirements" [level=3] [ref=e241]
        - blockquote [ref=e242]:
          - paragraph [ref=e243]:
            - strong [ref=e244]: "Procurement Clause A: Open Source Assessment Requirement"
            - text: All solicitations for software development, software licensing, or digital services with an estimated value exceeding [threshold] must include a documented open source alternatives assessment as part of the procurement justification. The assessment must be published alongside the final procurement decision. RFP/tender documents must not include technical specifications that are inherently met only by a specific proprietary product.
        - paragraph [ref=e245]:
          - emphasis [ref=e246]: "Rationale: Specification-writing that “accidentally” describes only one product is a well-documented procurement failure mode. Making the alternatives assessment public creates accountability."
        - separator [ref=e247]
        - blockquote [ref=e248]:
          - paragraph [ref=e249]:
            - strong [ref=e250]: "Procurement Clause B: Source Code Escrow and Release"
            - text: "Where a public body procures custom-developed software from a third party and an exemption from Standard 1 (open source release) applies, the contract must include: (a) mandatory source code escrow with a neutral third party; (b) an automatic release trigger that causes the escrowed code to be published under an approved open source licence if the vendor becomes insolvent, exits the market, or materially breaches the contract; and (c) full data portability rights including documentation of all data schemas, APIs, and export formats."
        - paragraph [ref=e251]:
          - emphasis [ref=e252]: "Rationale: Escrow is an established risk-management tool. The automatic release trigger extends it to serve the public interest, not just business continuity."
        - separator [ref=e253]
        - blockquote [ref=e254]:
          - paragraph [ref=e255]:
            - strong [ref=e256]: "Procurement Clause C: Contribution-Back Requirement"
            - text: Where a public body modifies or extends existing open source software in the course of a publicly-funded project, the resulting modifications must be contributed back to the upstream project within 90 days of deployment, or published as a clearly-documented fork if the upstream project declines to accept them, under the same or a compatible open source licence.
        - paragraph [ref=e257]:
          - emphasis [ref=e258]: "Rationale: Contribution-back is both an ethical obligation (the jurisdiction benefited from prior community labour) and a practical one (modifications that are not upstreamed become maintenance burdens). The FSFE and Foundation for Public Code both identify contribution-back as a key obligation of responsible public sector open source use."
        - separator [ref=e259]
        - heading "Transition and Timeline" [level=3] [ref=e260]
        - table [ref=e261]:
          - rowgroup [ref=e262]:
            - row "Milestone Timeframe from adoption Notes" [ref=e263]:
              - columnheader "Milestone" [ref=e264]
              - columnheader "Timeframe from adoption" [ref=e265]
              - columnheader "Notes" [ref=e266]
          - rowgroup [ref=e267]:
            - row "Open source procurement assessment procedure published 3 months Applies to all new procurements from this date" [ref=e268]:
              - cell "Open source procurement assessment procedure published" [ref=e269]
              - cell "3 months" [ref=e270]
              - cell "Applies to all new procurements from this date" [ref=e271]
            - row "Approved licence list published 3 months Based on OSI approved list" [ref=e272]:
              - cell "Approved licence list published" [ref=e273]
              - cell "3 months" [ref=e274]
              - cell "Based on OSI approved list" [ref=e275]
            - row "Software catalogue launched 6 months Can begin with existing known open source software" [ref=e276]:
              - cell "Software catalogue launched" [ref=e277]
              - cell "6 months" [ref=e278]
              - cell "Can begin with existing known open source software" [ref=e279]
            - row "publiccode.yml required for all new releases 6 months Existing releases have 18 months to comply" [ref=e280]:
              - cell "publiccode.yml required for all new releases" [ref=e281]
              - cell "6 months" [ref=e282]
              - cell "Existing releases have 18 months to comply" [ref=e283]
            - row "Open source alternatives assessment mandatory in all qualifying procurement 12 months" [ref=e284]:
              - cell "Open source alternatives assessment mandatory in all qualifying procurement" [ref=e285]
              - cell "12 months" [ref=e286]
              - cell [ref=e287]
            - row "OSPO established (large bodies) 18 months" [ref=e288]:
              - cell "OSPO established (large bodies)" [ref=e289]
              - cell "18 months" [ref=e290]
              - cell [ref=e291]
            - row "Full compliance — all existing publicly-funded software either released or exemption documented 36 months" [ref=e292]:
              - cell "Full compliance — all existing publicly-funded software either released or exemption documented" [ref=e293]
              - cell "36 months" [ref=e294]
              - cell [ref=e295]
        - heading "Reporting and Transparency" [level=3] [ref=e296]
        - blockquote [ref=e297]:
          - paragraph [ref=e298]:
            - strong [ref=e299]: Transparency Requirement
            - text: "All public bodies subject to this policy must publish an annual open source report covering: (a) software released under open source licences during the year, with links to repositories and publiccode.yml files; (b) open source alternatives assessments completed, with procurement outcomes; (c) exemptions claimed, including category of exemption and anticipated resolution date; (d) contributions made to upstream open source projects (code, documentation, translations, bug reports); (e) open source software used in critical public services; and (f) spending on open source support, maintenance, and training. The report must be published in machine-readable open data format as well as a plain-language public summary."
        - heading "Enforcement" [level=3] [ref=e300]
        - blockquote [ref=e301]:
          - paragraph [ref=e302]:
            - strong [ref=e303]: Enforcement Clause
            - text: "The designated oversight body may: (a) audit compliance with open source release obligations and procurement assessment requirements; (b) issue compliance notices requiring corrective action within 90 days; (c) impose administrative penalties for repeated non-compliance, scaled to the procuring body’s ICT budget; (d) publish a public compliance register showing each body’s status. Civil society organisations with demonstrated interest in open government may lodge compliance complaints with the oversight body without requiring a named individual complainant. Whistleblower protections apply to public sector employees who report non-compliance in good faith."
        - paragraph [ref=e304]:
          - emphasis [ref=e305]: "Notes on enforcement: Procurement reform tends to fail when it creates paperwork requirements without creating accountability for outcomes. The compliance register creates reputational incentives. The civil society complaint right (drawing from the accessibility enforcement model) means that non-compliance does not depend on individual complainants with standing."
        - separator [ref=e306]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e307]'
        - heading "Oversight Body" [level=3] [ref=e308]
        - blockquote [ref=e309]:
          - paragraph [ref=e310]:
            - strong [ref=e311]: Oversight Clause
            - text: "Responsibility for oversight of this policy shall be assigned to [national / supra-national digital authority or designated body]. The oversight body must include staff with expertise in: open source software development and licensing; public procurement law; digital security; and accessibility. The oversight body must be independent of entities with financial interests in proprietary software procurement outcomes. Its governing board must include representatives of civil society, academia, and the open source community who are not affiliated with commercial vendors."
        - paragraph [ref=e312]:
          - emphasis [ref=e313]: "Notes: The EU’s Interoperable Europe Board (established under the Interoperable Europe Act) provides a partial model for cross-jurisdictional governance. Germany’s Sovereign Tech Agency demonstrates that government-funded open source investment can operate with technical independence."
        - heading "Community Representation" [level=3] [ref=e314]
        - blockquote [ref=e315]:
          - paragraph [ref=e316]:
            - strong [ref=e317]: Participation Clause
            - text: "The oversight body must establish a multi-stakeholder advisory council with seats reserved for: open source community representatives (selected by open source civil society organisations, not appointed by government); accessibility advocates; privacy and civil liberties organisations; representatives of small and medium-sized jurisdictions; Global South government representatives (for supra-national implementations); and public sector worker unions. The advisory council must be consulted before any revision to the approved licence list, the exemption criteria, or the reporting requirements. Its recommendations must be published and, if not adopted, the oversight body must publish written reasons."
        - paragraph [ref=e318]:
          - emphasis [ref=e319]: "Equity note: Open source governance has historically been dominated by technically skilled contributors from wealthy countries. Deliberately including Global South and disability-focused representation corrects a structural gap."
        - heading "Audit and Review" [level=3] [ref=e320]
        - blockquote [ref=e321]:
          - paragraph [ref=e322]:
            - strong [ref=e323]: Audit Clause
            - text: "The oversight body must commission an independent technical audit of the software catalogue and compliance records at least every two years. The audit must assess: completeness of the catalogue (are known publicly-funded projects missing?); quality of publiccode.yml metadata; exemption validity; and contribution-back activity. The audit must be conducted by an auditor with no commercial interest in the outcome and the full audit report must be published."
        - blockquote [ref=e324]:
          - paragraph [ref=e325]:
            - strong [ref=e326]: Review Clause
            - text: "This policy shall be reviewed every three years from the date of adoption. The review must assess: whether the approved licence list reflects current best practice; whether the publiccode.yml standard version referenced remains current; whether exemption categories remain appropriate; and whether enforcement mechanisms have produced measurable compliance improvement. The review process must include a minimum 60-day public comment period before any amendments are finalised."
        - separator [ref=e327]
        - heading "Real-World Examples" [level=2] [ref=e328]
        - heading "France — Digital Republic Act (Loi pour une République Numérique)" [level=3] [ref=e329]
        - paragraph [ref=e330]:
          - strong [ref=e331]: "Enacted:"
          - text: 2016 (Loi no. 2016-1321 of 7 October 2016); implementing Decree no. 2017-638 of 27 April 2017
          - strong [ref=e332]: "Type:"
          - text: National legislation
          - strong [ref=e333]: "Link:"
          - text: https://www.legifrance.gouv.fr/loi/id/JORFTEXT000033202746
          - strong [ref=e334]: "Summary:"
          - text: Article 16 of France’s Digital Republic Act classified source code produced by public administrations as administrative documents — meaning they are public records subject to access and reuse rights. The 2017 decree established a state-approved licence list. The SILL (Socle Interministériel des Logiciels Libres), maintained since 2012, lists free software recommended across French government.
          - code [ref=e335]: code.gouv.fr
          - text: "now serves as France’s public government code repository. The law stops short of mandating open source use but establishes open source preference and public release obligations. Community critique: the preference has not translated into strong procurement reform; proprietary procurement continues to dominate."
        - separator [ref=e336]
        - heading "Italy — Developers Italia and publiccode.yml" [level=3] [ref=e337]
        - paragraph [ref=e338]:
          - strong [ref=e339]: "Enacted:"
          - text: "publiccode.yml made mandatory for public software: 2020"
          - strong [ref=e340]: "Type:"
          - text: National digital administration guidelines (AgID)
          - strong [ref=e341]: "Link:"
          - text: https://developers.italia.it/en/reuse/publication.html
          - strong [ref=e342]: "Summary:"
          - text: Italy’s digital agency (AgID) made publiccode.yml mandatory for all public software, enabling automatic population of the national software catalogue at developers.italia.it. This is the most rigorous national implementation of machine-readable government software metadata anywhere in the world, and the model that the EU OSS Catalogue adopted when it launched in 2025. The Developers Italia community also built a crawler that discovers and indexes government repositories automatically.
        - separator [ref=e343]
        - heading "Germany — Sovereign Tech Agency" [level=3] [ref=e344]
        - paragraph [ref=e345]:
          - strong [ref=e346]: "Established:"
          - text: Fund 2022; Agency formally established 2024
          - strong [ref=e347]: "Type:"
          - text: Government-funded public agency
          - strong [ref=e348]: "Link:"
          - text: https://www.sovereign.tech/
          - strong [ref=e349]: "Summary:"
          - text: Germany’s Sovereign Tech Agency invests in the maintenance and security of open source components that underpin German and European digital infrastructure. By late 2024 it had invested approximately €23.5 million in over 60 projects, including components of the internet’s core infrastructure that are maintained by volunteers with no institutional backing. The budget was projected to grow to €17 million annually by 2025. The “Germany Stack” initiative extends this to building a sovereign, European-compatible digital infrastructure for all levels of German government. This is the most significant government programme for sustaining open source infrastructure anywhere.
        - separator [ref=e350]
        - heading "EU — Interoperable Europe Act and EC Open Source Strategy" [level=3] [ref=e351]
        - paragraph [ref=e352]:
          - strong [ref=e353]: "Enacted:"
          - text: Interoperable Europe Act — 2024 (came into force); EC Open Source Strategy — 2020, updated
          - strong [ref=e354]: "Type:"
          - text: EU Regulation; EC internal strategy
          - strong [ref=e355]: "Link:"
          - text: https://interoperable-europe.ec.europa.eu; https://commission.europa.eu/about/departments-and-executive-agencies/digital-services/open-source-software-strategy_en
          - strong [ref=e356]: "Summary:"
          - text: The Interoperable Europe Act (Articles 4 and 8) establishes code-sharing obligations between EU public sector bodies and mandates an EU Open Source Solutions Catalogue using publiccode.yml as its reference standard (launched 2025). The European Commission’s own Open Source Strategy commits the Commission to using and contributing to open source software, restricts the Commission to approved licences, and established the Commission’s Open Source Programme Office (EC-OSPO) in 2020. The FSFE has noted that the Interoperable Europe Act’s interoperability approach remains request-based rather than designed-in; a stronger version would require interoperability by design from the outset.
        - separator [ref=e357]
        - heading "United Kingdom — Government Service Standard and alphagov" [level=3] [ref=e358]
        - paragraph [ref=e359]:
          - strong [ref=e360]: "Type:"
          - text: Government digital standards and practice
          - strong [ref=e361]: "Link:"
          - text: https://www.gov.uk/service-manual/service-standard; https://github.com/alphagov
          - strong [ref=e362]: "Summary:"
          - text: The UK Government Digital Service established a culture of open by default for government digital services, publishing most of its platform code openly on GitHub under alphagov. The Government Service Standard does not mandate open source release, but GDS practice has normalised public code for central government digital services. The GOV.UK Notify, Pay, and Forms platforms are all open source and have been adopted by other governments.
        - separator [ref=e363]
        - heading "United Nations — Digital Public Goods Framework" [level=3] [ref=e364]
        - paragraph [ref=e365]:
          - strong [ref=e366]: "Established:"
          - text: Digital Public Goods Alliance (DPGA) — 2019; UN Open Source Week — 2025 inaugural, 2026 second edition
          - strong [ref=e367]: "Type:"
          - text: International framework / UN policy
          - strong [ref=e368]: "Link:"
          - text: https://www.un.org/digital-emerging-technologies/content/digital-public-goods; https://www.unopensource.org/
          - strong [ref=e369]: "Summary:"
          - text: The UN’s Digital Public Goods Standard defines open source software, data, AI models, and content as “digital public goods” when they advance the SDGs and meet openness, privacy, and security requirements. Over 100 digital public goods are now registered with the DPGA. UN Open Source Week 2026 (22–26 June, UN HQ New York) includes a Digital Public Infrastructure Day focused on how governments can build on DPGs. The framework is particularly significant for Global South governments, for whom licensing cost elimination is a major driver.
        - separator [ref=e370]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e371]
        - list [ref=e372]:
          - listitem [ref=e373]:
            - strong [ref=e374]: Enforcement across federated systems
            - text: — In federal states (US, Germany, Canada, Australia), open source policy at the national level does not bind sub-national governments, which handle much of the day-to-day software procurement. Model language is needed that works at state/provincial/municipal level.
          - listitem [ref=e375]:
            - strong [ref=e376]: Security tension with the EU Cyber Resilience Act
            - text: — The CRA’s liability framework creates compliance uncertainty for open source components used in government software. The definition of “commercial activity” and the treatment of public sector open source releases needs clarification. This gap could inadvertently discourage government open source release.
          - listitem [ref=e377]:
            - strong [ref=e378]: AI-generated code and open source obligations
            - text: — Code generated using AI tools may have uncertain intellectual property status. The model does not yet address how AI-assisted development interacts with open source release obligations. This is an emerging area requiring legal analysis.
          - listitem [ref=e379]:
            - strong [ref=e380]: Global South capacity gap
            - text: — The model assumes governments have sufficient technical capacity to assess open source alternatives and maintain publiccode.yml catalogues. This assumption fails for many lower-income governments. Capacity-building and technical assistance obligations are underspecified.
          - listitem [ref=e381]:
            - strong [ref=e382]: Definition of “publicly-funded”
            - text: "— The model does not fully address mixed-funding situations: software funded 30% by government grant, 70% by private investment; or open source projects that receive government support but are not government-commissioned. Definitional clarity is needed."
          - listitem [ref=e383]:
            - strong [ref=e384]: Contribution-back in practice
            - text: — While Standard 3 establishes a contribution-back obligation, enforcement is very difficult. No jurisdiction has found a compelling mechanism for verifying that modifications have been submitted upstream. This gap is acknowledged but unresolved.
          - listitem [ref=e385]:
            - strong [ref=e386]: No Global South real-world examples yet
            - text: — All examples are from Europe, UK, or the UN. Rwanda, India (with its Digital India Programme), and several Latin American jurisdictions have relevant experience that needs to be incorporated.
        - separator [ref=e387]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e388]
        - table [ref=e389]:
          - rowgroup [ref=e390]:
            - row "Related Domain Relationship" [ref=e391]:
              - columnheader "Related Domain" [ref=e392]
              - columnheader "Relationship" [ref=e393]
          - rowgroup [ref=e394]:
            - row "Digital Sovereignty Open source is a primary mechanism for digital sovereignty; the two models should be read together" [ref=e395]:
              - cell "Digital Sovereignty" [ref=e396]:
                - link "Digital Sovereignty" [ref=e397] [cursor=pointer]:
                  - /url: ../../digital-sovereignty/full-model/
              - cell "Open source is a primary mechanism for digital sovereignty; the two models should be read together" [ref=e398]
            - row "Digital Accessibility Procurement reform applies to both; open source does not guarantee accessibility, and accessibility requirements must be explicit in open source as in proprietary procurement" [ref=e399]:
              - cell "Digital Accessibility" [ref=e400]:
                - link "Digital Accessibility" [ref=e401] [cursor=pointer]:
                  - /url: ../../accessibility/full-model/
              - cell "Procurement reform applies to both; open source does not guarantee accessibility, and accessibility requirements must be explicit in open source as in proprietary procurement" [ref=e402]
            - row "Algorithmic Accountability Open source release of AI/algorithmic systems used in government decisions is a transparency mechanism; but open weights ≠ explainability" [ref=e403]:
              - cell "Algorithmic Accountability" [ref=e404]:
                - link "Algorithmic Accountability" [ref=e405] [cursor=pointer]:
                  - /url: ../../algorithmic-accountability/full-model/
              - cell "Open source release of AI/algorithmic systems used in government decisions is a transparency mechanism; but open weights ≠ explainability" [ref=e406]
            - row "Data Centers Open source software tends to support hardware longevity; software longevity policies complement hardware longevity policies" [ref=e407]:
              - cell "Data Centers" [ref=e408]:
                - link "Data Centers" [ref=e409] [cursor=pointer]:
                  - /url: ../../data-centers/full-model/
              - cell "Open source software tends to support hardware longevity; software longevity policies complement hardware longevity policies" [ref=e410]
            - row "Right to Repair Software repairability (ability to maintain, modify, and extend) is the software analogue of hardware repairability; the prohibition on parts pairing has a direct software equivalent in device-locked firmware" [ref=e411]:
              - cell "Right to Repair" [ref=e412]:
                - link "Right to Repair" [ref=e413] [cursor=pointer]:
                  - /url: ../../right-to-repair/full-model/
              - cell "Software repairability (ability to maintain, modify, and extend) is the software analogue of hardware repairability; the prohibition on parts pairing has a direct software equivalent in device-locked firmware" [ref=e414]
            - row "Digital Public Infrastructure DPI is built on open source; the two models define complementary obligations for governments building shared digital infrastructure" [ref=e415]:
              - cell "Digital Public Infrastructure" [ref=e416]:
                - link "Digital Public Infrastructure" [ref=e417] [cursor=pointer]:
                  - /url: ../../digital-public-infrastructure/full-model/
              - cell "DPI is built on open source; the two models define complementary obligations for governments building shared digital infrastructure" [ref=e418]
        - separator [ref=e419]
        - heading "Glossary" [level=2] [ref=e420]
        - paragraph [ref=e421]:
          - strong [ref=e422]: "Open Source Software (OSS):"
          - text: Software released under a licence that, at minimum, grants users the rights to use, study, modify, and distribute the software and modified versions. The Open Source Initiative (OSI) maintains the authoritative definition and approved licence list.
        - paragraph [ref=e423]:
          - strong [ref=e424]: "Free Software:"
          - text: Functionally equivalent to open source software in most policy contexts; the preferred term in FSFE’s framework, emphasising freedom rather than access to source code. “Free” refers to freedom, not price.
        - paragraph [ref=e425]:
          - strong [ref=e426]: "publiccode.yml:"
          - text: A YAML metadata file placed in a software repository that describes the software in a machine-readable way, enabling automated discovery and cataloguing. Mandatory for public software in Italy; adopted as the EU OSS Catalogue standard.
        - paragraph [ref=e427]:
          - strong [ref=e428]: "OSPO (Open Source Programme Office):"
          - text: An organisational unit responsible for managing an institution’s open source activity — compliance, contribution, cataloguing, and policy.
        - paragraph [ref=e429]:
          - strong [ref=e430]: "Digital Public Good (DPG):"
          - text: Open source software, data, AI models, standards, or content that adheres to privacy and other applicable laws and best practices, does no harm, and helps attain the SDGs. Defined and registered by the Digital Public Goods Alliance.
        - paragraph [ref=e431]:
          - strong [ref=e432]: "Vendor lock-in:"
          - text: A situation where a customer depends on a specific vendor’s product or service in a way that makes switching difficult or costly, often because of proprietary data formats, interfaces, or contractual terms.
        - paragraph [ref=e433]:
          - strong [ref=e434]: "SILL (Socle Interministériel des Logiciels Libres):"
          - text: The French government’s interdepartmental free software reference list, recommending specific open source software versions for use across government.
        - paragraph [ref=e435]:
          - strong [ref=e436]: "Sovereign Tech Fund / Sovereign Tech Agency:"
          - text: Germany’s government-funded body that invests in the maintenance and security of open source components critical to digital infrastructure.
        - paragraph [ref=e437]:
          - strong [ref=e438]: "Contribution-back:"
          - text: The practice of submitting improvements made to open source software back to the upstream project, so that the wider community benefits from the modifications.
        - separator [ref=e439]
        - heading "Contributing to This Policy Model" [level=2] [ref=e440]
        - paragraph [ref=e441]: "This model is maintained in the open. To contribute:"
        - list [ref=e442]:
          - listitem [ref=e443]:
            - strong [ref=e444]: "Add a real-world example:"
            - text: Open a Pull Request adding a new entry to the Real-World Examples section with a citation — Global South examples especially needed
          - listitem [ref=e445]:
            - strong [ref=e446]: "Improve model language:"
            - text: Open an Issue describing the problem, then submit a PR with proposed changes and rationale
          - listitem [ref=e447]:
            - strong [ref=e448]: "Address a gap:"
            - text: The Gaps section identifies where model language is still underdeveloped — these are prioritised contribution opportunities
          - listitem [ref=e449]:
            - strong [ref=e450]: "Translate:"
            - text: See the
            - code [ref=e451]: /translations
            - text: directory and CONTRIBUTING.md
          - listitem [ref=e452]:
            - strong [ref=e453]: "Flag a gap:"
            - text: Open an Issue with the label
            - code [ref=e454]: gap
        - paragraph [ref=e455]: All substantive changes go through a minimum 14-day public comment period before merging.
        - paragraph [ref=e456]:
          - text: This model is particularly relevant to
          - strong [ref=e457]: UN Open Source Week 2026
          - text: (22–26 June, UN HQ New York) and the Digital Public Infrastructure Day (24 June) — contributions that strengthen the DPI/DPG connection and address Global South implementation are especially welcome ahead of that event.
        - separator [ref=e458]
        - heading "Changelog" [level=2] [ref=e459]
        - table [ref=e460]:
          - rowgroup [ref=e461]:
            - row "Version Date Summary of changes" [ref=e462]:
              - columnheader "Version" [ref=e463]
              - columnheader "Date" [ref=e464]
              - columnheader "Summary of changes" [ref=e465]
          - rowgroup [ref=e466]:
            - row "0.1 2026-04-04 Initial draft — four pillars, real-world examples from France, Italy, Germany, EU, UK, UN" [ref=e467]:
              - cell "0.1" [ref=e468]
              - cell "2026-04-04" [ref=e469]
              - cell "Initial draft — four pillars, real-world examples from France, Italy, Germany, EU, UK, UN" [ref=e470]
        - separator [ref=e471]
        - paragraph [ref=e472]:
          - emphasis [ref=e473]: This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.
      - link "✏️ Edit this policy on GitHub" [ref=e474] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/open-source-in-government/full-model.md
  - contentinfo [ref=e475]:
    - generic [ref=e476]:
      - generic [ref=e477]:
        - heading "Open Digital Policies" [level=3] [ref=e478]
        - paragraph [ref=e479]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e480]:
        - heading "Policy Domains" [level=3] [ref=e481]
        - list [ref=e482]:
          - listitem [ref=e483]:
            - link "Who Pays for AI's Power Bill?" [ref=e484] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e485]:
            - link "Digital Services That Work for Everyone" [ref=e486] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e487]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e488] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e489]:
            - link "Public Money, Public Code" [ref=e490] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e491]:
            - link "AI That Works For You, Not On You" [ref=e492] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e493]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e494] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e495]:
            - link "A Greener Web" [ref=e496] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e497]:
            - link "Your City Is Watching You" [ref=e498] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e499]:
            - link "Whose Internet Is It?" [ref=e500] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e501]:
            - link "Technology That's Safe for Kids" [ref=e502] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e503]:
            - link "Who Decides What You Can Say Online?" [ref=e504] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e505]:
            - link "Digital Infrastructure for Everyone" [ref=e506] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e507]:
        - heading "Resources" [level=3] [ref=e508]
        - list [ref=e509]:
          - listitem [ref=e510]:
            - link "Explore all domains" [ref=e511] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e512]:
            - link "Adoptions tracker" [ref=e513] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e514]:
            - link "Search" [ref=e515] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e516]:
            - link "About this project" [ref=e517] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e518]:
            - link "How to contribute" [ref=e519] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e520]:
            - link "Glossary" [ref=e521] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e522]:
        - heading "Community" [level=3] [ref=e523]
        - list [ref=e524]:
          - listitem [ref=e525]:
            - link "GitHub repository" [ref=e526] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e527]:
            - link "Open an issue" [ref=e528] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e529]:
            - link "Propose a domain" [ref=e530] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e531]:
            - link "Report an adoption" [ref=e532] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e533]:
      - generic [ref=e534]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e535] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e536]:
        - text: Maintained by
        - link "the ODP community" [ref=e537] [cursor=pointer]:
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