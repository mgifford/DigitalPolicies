# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/ai-adoption/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/ai-adoption/full-model/ [light]:

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
      - heading "AI That Works For You, Not On You" [level=1] [ref=e29]
      - paragraph [ref=e30]: AI Adoption & Governance
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
        - heading "AI Adoption & Governance — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-13
            - strong [ref=e57]: "Maintainers:"
            - text: Open Digital Policies community
            - strong [ref=e58]: "Related domains:"
            - link "Algorithmic Accountability" [ref=e59] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: ","
            - link "Data Centers" [ref=e60] [cursor=pointer]:
              - /url: ../../data-centers/full-model/
            - text: ","
            - link "Open Source in Government" [ref=e61] [cursor=pointer]:
              - /url: ../../open-source-in-government/full-model/
            - text: ","
            - link "Digital Sovereignty" [ref=e62] [cursor=pointer]:
              - /url: ../../digital-sovereignty/full-model/
        - separator [ref=e63]
        - heading "Overview" [level=2] [ref=e64]
        - paragraph [ref=e65]: "Governments and public institutions are adopting AI systems across healthcare, social services, justice, employment, and public administration. Done well, AI can improve service quality and reduce costs. Done poorly — or without accountability — it can perpetuate discrimination at scale, undermine due process, erode public trust, and create dependency on a handful of private vendors whose objectives are not aligned with the public interest. This policy model establishes the conditions under which public sector AI adoption is legitimate: transparent, assessed for risk and impact, subject to meaningful human oversight, and contestable by affected people."
        - heading "The Core Tension" [level=3] [ref=e66]
        - paragraph [ref=e67]: We want AI to improve public services — without surrendering the right to fair, explainable decisions to opaque systems, without concentrating critical public functions in proprietary platforms we cannot audit or exit, and without the energy and environmental cost of AI deployment exceeding its benefit.
        - heading "Scope" [level=3] [ref=e68]
        - paragraph [ref=e69]:
          - text: "This policy model is designed to apply at the level of:"
          - emphasis [ref=e70]: (select all that apply)
        - list [ref=e71]:
          - listitem [ref=e72]:
            - checkbox [checked] [disabled] [ref=e73]
            - text: Municipal / local government
          - listitem [ref=e74]:
            - checkbox [checked] [disabled] [ref=e75]
            - text: Regional / state / provincial government
          - listitem [ref=e76]:
            - checkbox [checked] [disabled] [ref=e77]
            - text: National government
          - listitem [ref=e78]:
            - checkbox [checked] [disabled] [ref=e79]
            - text: Public sector procurement (any level)
          - listitem [ref=e80]:
            - checkbox [disabled] [ref=e81]
            - text: Regulated industry
          - listitem [ref=e82]:
            - checkbox [disabled] [ref=e83]
            - text: "Other:"
            - strong [ref=e84]: __
            - text: _____
        - separator [ref=e85]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e86]'
        - heading "Foundational Values" [level=3] [ref=e87]
        - paragraph [ref=e88]:
          - strong [ref=e89]: 1. Public AI Must Serve the Public Interest
          - text: AI systems used by governments are not neutral tools — they encode choices about who matters, what counts as evidence, and which errors are acceptable. Every AI system adopted by a public body must have a clear, documented public benefit. The question “does this make government more efficient?” is insufficient; the right question is “does this make government better for the people it serves?”
        - paragraph [ref=e90]:
          - strong [ref=e91]: 2. Human Dignity and Due Process Are Non-Negotiable
          - text: Decisions that affect people’s access to benefits, housing, employment, healthcare, education, immigration status, or liberty require procedural fairness — notice, reasons, and the right to challenge. No AI system may be used to circumvent these requirements. The burden of demonstrating that an AI-assisted process preserves due process falls on the procuring body, not the affected person.
        - paragraph [ref=e92]:
          - strong [ref=e93]: "3. Proportionality: Risk Must Match Scrutiny"
          - text: Low-risk AI uses (chatbots answering FAQs, document summarisation for internal staff) require different scrutiny than high-risk uses (scoring benefits eligibility, predicting recidivism, screening job applications). Policy must be calibrated to risk, not applied uniformly — but calibration requires rigorous risk classification, not self-certification.
        - paragraph [ref=e94]:
          - strong [ref=e95]: 4. Transparency to Affected People
          - text: "People affected by AI-assisted decisions have the right to know: that AI was used; what it was used for; what the significant factors in the decision were; and how to challenge the outcome. Transparency to regulators is necessary but not sufficient — the people most affected must be able to understand and contest what was done to them."
        - paragraph [ref=e96]:
          - strong [ref=e97]: 5. Accountability Cannot Be Outsourced
          - text: When a government body uses an AI system built by a private vendor, accountability for outcomes remains with the public body. “The algorithm decided” is not a legally or ethically acceptable answer. Procurement structures must ensure that accountability cannot be laundered through vendor relationships.
        - paragraph [ref=e98]:
          - strong [ref=e99]: 6. Environmental Cost Is a Factor in AI Adoption Decisions
          - text: Training and operating large AI models requires significant energy and water. Adopting AI without accounting for its environmental footprint is not a neutral choice. AI adoption decisions must include an assessment of operational energy and water consumption and must not proceed where environmental cost is disproportionate to public benefit.
        - paragraph [ref=e100]:
          - strong [ref=e101]: 7. No Prohibited Uses, Regardless of Efficiency Arguments
          - text: "Some AI applications are incompatible with human rights and should not be adopted regardless of claimed benefits: mass biometric surveillance in public spaces; systems designed to predict crime based on group membership; social scoring systems; emotion recognition in employment or education; and systems that exploit vulnerabilities for behavioural manipulation. These prohibitions are not subject to cost-benefit analysis."
        - heading "Equity Considerations" [level=3] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - strong [ref=e105]: Historically marginalised communities
            - text: — AI systems trained on historical data reproduce historical discrimination. Communities that have faced discrimination in housing, employment, criminal justice, and social services face the highest risk of being harmed by predictive and scoring systems. Impact assessment must specifically address this.
          - listitem [ref=e106]:
            - strong [ref=e107]: People with disabilities
            - text: "— AI systems are often inaccessible by design: facial recognition fails on non-normative presentations; natural language systems fail for people who communicate differently; automated phone systems may exclude people who cannot speak. Accessibility is a requirement for public AI systems, not an afterthought."
          - listitem [ref=e108]:
            - strong [ref=e109]: Older adults and people with low digital literacy
            - text: — Automation of public services that previously involved human contact removes access for people who cannot navigate digital interfaces. Fully human alternatives must be preserved alongside any AI-assisted channel.
          - listitem [ref=e110]:
            - strong [ref=e111]: Global South populations
            - text: — AI systems developed and tested in high-income country contexts may perform poorly or harmfully when applied to different demographic groups. Where AI systems are deployed by development institutions or exported internationally, performance validation in the target context is required.
          - listitem [ref=e112]:
            - strong [ref=e113]: Public sector workers
            - text: — AI adoption in government affects the workers who deliver public services. Procurement must include worker consultation and must not be used primarily to reduce headcount in ways that harm service quality.
        - heading "Environmental Considerations" [level=3] [ref=e114]
        - paragraph [ref=e115]:
          - text: AI model training is among the most energy-intensive computing tasks. Inference (running a deployed model) varies enormously by model size and architecture — a small, purpose-specific model may use a fraction of the energy of a general-purpose large language model. AI adoption policy must require disclosure of operational energy consumption, preference for energy-efficient model selection, and integration with data center energy policy (see
          - link "Data Centers model" [ref=e116] [cursor=pointer]:
            - /url: ../../data-centers/full-model/
          - text: ).
        - separator [ref=e117]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e118]'
        - heading "Mandatory Standards" [level=3] [ref=e119]
        - blockquote [ref=e120]:
          - paragraph [ref=e121]:
            - strong [ref=e122]: "Standard 1: Prohibited AI Applications"
            - text: "The following AI applications are prohibited for use by public bodies and in publicly-funded services, regardless of claimed benefits, efficiency gains, or vendor representations:"
          - paragraph [ref=e123]: (a) Real-time remote biometric identification (facial recognition, gait recognition, voice identification) in publicly accessible spaces, except for the investigation of serious crimes with prior judicial authorisation and subject to strict time and geographic limits;
          - paragraph [ref=e124]: (b) Social scoring systems that evaluate or classify individuals based on their social behaviour, personal characteristics, or predicted future behaviour for the purpose of determining access to public services, benefits, or rights;
          - paragraph [ref=e125]: (c) Emotion recognition systems in employment, education, or any context affecting individual rights or access to services;
          - paragraph [ref=e126]: (d) Systems that manipulate individuals through subliminal techniques, or that exploit known vulnerabilities (including age, disability, financial precarity, or emotional state) to influence behaviour;
          - paragraph [ref=e127]: (e) Predictive policing systems that target individuals or groups based on predicted future offending rather than specific evidence of past conduct;
          - paragraph [ref=e128]: (f) Systems that deduce protected characteristics (race, religion, sexual orientation, political opinion, health status) from proxy variables for the purpose of differential treatment;
          - paragraph [ref=e129]: (g) AI systems configured to deny being artificial intelligence when sincerely asked by a user, or to simulate the identity of a specific named human official or employee.
        - paragraph [ref=e130]:
          - emphasis [ref=e131]: "Rationale: These prohibitions are drawn directly from EU AI Act Article 5 (prohibited AI practices, effective February 2025). They represent the international consensus of what is incompatible with human dignity and fundamental rights. The list is not exhaustive — new prohibited applications may be added through the review process as technology and evidence evolve."
        - paragraph [ref=e132]:
          - emphasis [ref=e133]:
            - text: "Reference: EU AI Act Regulation (EU) 2024/1689, Article 5;"
            - link "artificialintelligenceact.eu" [ref=e134] [cursor=pointer]:
              - /url: https://artificialintelligenceact.eu/article/5/
        - separator [ref=e135]
        - blockquote [ref=e136]:
          - paragraph [ref=e137]:
            - strong [ref=e138]: "Standard 2: Mandatory Algorithmic Impact Assessment (AIA)"
            - text: "Before deploying any AI system that makes or substantially assists in making decisions affecting individuals, a public body must complete an Algorithmic Impact Assessment. The AIA must:"
          - paragraph [ref=e139]: (a) Classify the system by impact level (Level I–IV) based on the nature of the decision, the population affected, the reversibility of errors, and the availability of human alternatives;
          - paragraph [ref=e140]: "(b) For Level II systems and above: be reviewed by an independent party with relevant technical and equity expertise before deployment;"
          - paragraph [ref=e141]: "(c) For Level III systems and above: be subject to a public comment period of not less than 30 days and require written approval from the designated oversight body;"
          - paragraph [ref=e142]: "(d) For Level IV systems: require that final decisions be made by a human being, with the AI system serving only in an advisory capacity; and require external peer review and published summary;"
          - paragraph [ref=e143]: (e) Be updated and re-submitted whenever the system, its training data, or its operational context changes materially;
          - paragraph [ref=e144]: "(f) For any AI system that generates natural language outputs visible to members of the public or used in official government communications: include vendor-provided documentation of (i) adversarial prompt testing for harmful and misleading outputs, (ii) factual reliability evaluation relative to the intended use case, and (iii) bias evaluation of generated content across protected characteristics. This documentation must appear in the vendor’s tender response alongside materials required under Standard 4(a)."
        - paragraph [ref=e145]:
          - emphasis [ref=e146]: "Rationale: Canada’s Directive on Automated Decision-Making (2019) is the most developed national implementation of tiered AI impact assessment for government. Its four-level impact framework with proportionate mitigation requirements provides a tested model. The 65-question AIA questionnaire developed by the Treasury Board Secretariat demonstrates that this level of assessment is operationally feasible."
        - paragraph [ref=e147]:
          - emphasis [ref=e148]:
            - text: "Reference:"
            - link "Canada Directive on Automated Decision-Making" [ref=e149] [cursor=pointer]:
              - /url: https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592
            - text: ;
            - link "Canada AIA Tool" [ref=e150] [cursor=pointer]:
              - /url: https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html
        - separator [ref=e151]
        - blockquote [ref=e152]:
          - paragraph [ref=e153]:
            - strong [ref=e154]: "Standard 3: Transparency to Affected Individuals"
            - text: "Where an AI system is used to make or substantially assist in making a decision affecting an individual, the individual must be:"
          - paragraph [ref=e155]: (a) Informed before or at the time of the decision that AI was used, in plain language they can understand;
          - paragraph [ref=e156]: (b) Provided, upon request, with a meaningful explanation of the significant factors that influenced the decision — not merely a statement that AI was used;
          - paragraph [ref=e157]: (c) Given information about how to challenge or seek review of the decision;
          - paragraph [ref=e158]: (d) Able to request a decision made or reviewed by a human being, without penalty or unexplained delay;
          - paragraph [ref=e159]: "(e) Where the public body uses an AI system that interacts with members of the public through a conversational interface (chatbot, virtual assistant, or similar): informed at the outset of each interaction that they are communicating with an AI system, not a human. AI-generated written communications issued under the name of a public official, public body, or public service must include a prominent disclosure that the content was produced with AI assistance. Public bodies must not deploy conversational AI systems configured to deny being AI when sincerely asked, nor configure AI to present itself as a named human employee or official."
          - paragraph [ref=e160]: These rights apply regardless of whether the AI system is proprietary. Vendors may not contract away the public body’s obligation to provide explanations to affected individuals.
        - paragraph [ref=e161]:
          - emphasis [ref=e162]: "Rationale: GDPR Article 22 establishes a right not to be subject to solely automated decisions with legal or significant effects, and Articles 13–15 require disclosure of the “logic involved.” The EU AI Act extends transparency obligations to high-risk AI. In practice, the right to explanation has been weakly enforced; this model language makes the obligation explicit and vendor-proof."
        - paragraph [ref=e163]:
          - emphasis [ref=e164]: "Reference: GDPR Articles 13–15, 22; EU AI Act Articles 13, 86"
        - separator [ref=e165]
        - blockquote [ref=e166]:
          - paragraph [ref=e167]:
            - strong [ref=e168]: "Standard 4: Procurement Restrictions"
            - text: "When procuring AI systems, public bodies must ensure:"
          - paragraph [ref=e169]: (a) The AI system’s performance data, bias testing results, and training data documentation are available to the procuring body — not merely a vendor’s summary of those results;
          - paragraph [ref=e170]: (b) The contract includes the right for the public body to commission independent audits of the system’s performance and fairness;
          - paragraph [ref=e171]: (c) Contractual lock-in that prevents the body from switching to alternative AI systems or reverting to non-AI processes is prohibited;
          - paragraph [ref=e172]: (d) The AI system is assessed against accessibility requirements (WCAG 2.2 AA minimum for any user-facing component) before procurement;
          - paragraph [ref=e173]: (e) The operational energy consumption of the deployed system is disclosed by the vendor, and this information is considered in procurement evaluation;
          - paragraph [ref=e174]: "(f) The AI system does not originate from a vendor: (i) subject to export controls relating to surveillance or censorship technology in any relevant jurisdiction; (ii) with documented supply relationships providing surveillance AI capabilities to governments sanctioned by the procuring jurisdiction for human rights violations; or (iii) whose contractual terms would require transfer of operational data to a foreign government authority without judicial process. The procuring body must certify compliance with this sub-clause in the procurement record."
        - paragraph [ref=e175]:
          - emphasis [ref=e176]: "Rationale: Public bodies are at a structural disadvantage in AI procurement — vendors have far more information about their systems than buyers. Performance data, audit rights, and exit rights are minimum safeguards against procurement capture. The energy disclosure requirement integrates AI governance with environmental policy."
        - separator [ref=e177]
        - blockquote [ref=e178]:
          - paragraph [ref=e179]:
            - strong [ref=e180]: "Standard 5: AI Use Registry"
            - text: "All public bodies subject to this policy must maintain and publish a registry of AI systems in operational use. The registry must include, for each system:"
          - paragraph [ref=e181]: (a) Name and description of the system and its purpose;
          - paragraph [ref=e182]: (b) The vendor (if any) and whether the system is proprietary or open source;
          - paragraph [ref=e183]: (c) The decisions or processes it is used in, and the population affected;
          - paragraph [ref=e184]: (d) The impact level classification under Standard 2;
          - paragraph [ref=e185]: (e) Date of deployment and date of most recent AIA;
          - paragraph [ref=e186]: (f) Whether public comment was sought and a summary of responses;
          - paragraph [ref=e187]: (g) Operational energy consumption (where disclosed by vendor or measurable);
          - paragraph [ref=e188]: "(h) For systems at Impact Level II or above: a link to, or reproduction of, a structured vendor risk disclosure covering — (i) intended use cases and uses the system is not designed for; (ii) known failure modes and performance degradation conditions; (iii) error rates disaggregated by demographic subgroup where available; (iv) training data sources and known gaps; (v) any third-party red-teaming or adversarial evaluation completed. The oversight body must publish a standard template for this disclosure within six months of policy adoption. Vendors that refuse to provide this disclosure are ineligible for Level II or above contracts."
          - paragraph [ref=e189]: The registry must be machine-readable and updated within 30 days of any material change.
        - paragraph [ref=e190]:
          - emphasis [ref=e191]: "Rationale: New Zealand’s Algorithm Charter (2020) establishes a commitment to transparency about government algorithm use but lacks enforcement and has produced inconsistent results. Seattle’s Responsible AI Program (2025) includes a commitment to publicly available documentation of city AI system usage. A mandatory registry with standardised fields addresses both the commitment and the consistency gap."
        - paragraph [ref=e192]:
          - emphasis [ref=e193]:
            - text: "Reference:"
            - link "New Zealand Algorithm Charter" [ref=e194] [cursor=pointer]:
              - /url: https://data.govt.nz/toolkit/data-ethics/government-algorithm-transparency-and-accountability/algorithm-charter/
            - text: ;
            - link "Seattle Responsible AI Program" [ref=e195] [cursor=pointer]:
              - /url: https://www.seattle.gov/tech/data-privacy/the-citys-responsible-use-of-artificial-intelligence
        - separator [ref=e196]
        - heading "Aspirational Standards" [level=3] [ref=e197]
        - blockquote [ref=e198]:
          - paragraph [ref=e199]:
            - strong [ref=e200]: "Aspirational Standard 1: Preference for Open and Auditable AI"
            - text: Where AI systems are procured for use in high-impact decisions, public bodies should prefer systems whose model weights, training data documentation, and evaluation results are openly published, or where independent code audit is contractually guaranteed. Where a proprietary system is selected for high-impact use, the procurement justification must explain why no auditable alternative was available.
        - paragraph [ref=e201]:
          - emphasis [ref=e202]: "Rationale: “Open” AI systems are not automatically safer or fairer — open weights do not guarantee explainability or fairness. But they enable independent scrutiny that proprietary systems categorically prevent. For decisions that affect people’s rights, independent scrutiny is a minimum requirement of legitimacy."
        - separator [ref=e203]
        - blockquote [ref=e204]:
          - paragraph [ref=e205]:
            - strong [ref=e206]: "Aspirational Standard 2: Shared AI Infrastructure"
            - text: Jurisdictions should explore shared, interoperable AI infrastructure for common government functions (document processing, translation, accessibility tooling, question-answering over public information) rather than each jurisdiction procuring separately. Shared infrastructure reduces costs, enables shared governance, and avoids vendor capture through coordination.
        - paragraph [ref=e207]:
          - emphasis [ref=e208]:
            - text: "Rationale: The Digital Public Infrastructure model (see"
            - link "Digital Public Infrastructure domain" [ref=e209] [cursor=pointer]:
              - /url: ../../digital-public-infrastructure/full-model/
            - text: ) applies directly to government AI. Common functions do not need to be solved independently by every municipality.
        - separator [ref=e210]
        - blockquote [ref=e211]:
          - paragraph [ref=e212]:
            - strong [ref=e213]: "Aspirational Standard 3: Regulatory Sandbox for Evidence-Based AI Governance"
            - text: "Jurisdictions should consider establishing a time-limited regulatory sandbox — administered by the AI oversight body — that allows controlled real-world deployment of AI systems under temporary waivers of specified regulations, subject to mandatory oversight, reporting, and safety constraints. The sandbox must: (a) assign liability and insurance obligations before deployment, not after; (b) restrict participation to specific use cases and workflows, not to AI as a category; (c) require systematic data collection on failures, successes, and unintended effects; (d) feed findings into the AIA methodology, prohibited-uses list, and impact level classification on a defined schedule; and (e) publish all findings publicly within 12 months of each sandbox cycle. Participation in the sandbox must not be used to obtain permanent exemptions from the standards in this policy; all sandbox participants are subject to full policy requirements upon expiry of the sandbox period."
        - paragraph [ref=e214]:
          - emphasis [ref=e215]: "Rationale: Three existing models together describe the full institutional architecture for evidence-based AI governance. Utah’s Artificial Intelligence Policy Act (2024) provides the most operationally specific AI sandbox to date — use-case waivers, upfront liability assignment, mandatory data collection, feedback into permanent rulemaking; this is the deployment layer. Canada’s Centre for Regulatory Innovation (CRI, est. 2018) provides the meta-regulatory capability layer: building regulators’ institutional capacity to experiment across domains, with shared toolkits and cross-department collaboration mechanisms; more scalable than Utah but less focused on specific AI deployments. The FDA’s Centers of Excellence in Regulatory Science and Innovation (CERSI) programme provides a third pattern — the methodology generation layer: government funds university-based researchers to work on regulator-defined unresolved questions, with outputs explicitly designed to become standards and guidance rather than academic papers. Applied to AI governance, a CERSI-equivalent would have the oversight body commission academic partners to build the pre-certification methodology, AIA questionnaire updates, and audit standards that the oversight body cannot develop alone. The three layers are complementary: Utah (what a sandbox looks like operationally); CRI (how to build shared regulatory capability); CERSI (how to generate the methodology that both require). Key design principles for the sandbox: liability assigned upfront; waivers use-case specific, not categorical; findings public; sandbox produces governance improvements, not permanent exemptions."
        - separator [ref=e216]
        - blockquote [ref=e217]:
          - paragraph [ref=e218]:
            - strong [ref=e219]: "Aspirational Standard 4: International Governance Coordination"
            - text: The oversight body should seek participation in international AI governance coordination forums and maintain formal information-sharing relationships with equivalent oversight bodies in at least three other jurisdictions. The oversight body should contribute to, and adopt where appropriate, internationally coordinated standards for high-risk AI categories, vendor risk disclosure formats (Standard 5(h)), and audit methodologies. Participation in such forums must not create obligations to defer to any foreign regulatory body or to weaken the protections established by this policy.
        - paragraph [ref=e220]:
          - emphasis [ref=e221]: "Rationale: CHT Principle 6 identifies coordinated international limits as essential to preventing AI from being used to surveil, manipulate, and destabilise across borders. Within the existing government scope this translates to institutional coordination rather than regulatory harmonisation — preserving local sovereignty while enabling shared learning and joint standard-setting."
        - separator [ref=e222]
        - heading "Standards Cross-Reference" [level=3] [ref=e223]
        - table [ref=e224]:
          - rowgroup [ref=e225]:
            - row "Standard Referenced Body Version Notes" [ref=e226]:
              - columnheader "Standard Referenced" [ref=e227]
              - columnheader "Body" [ref=e228]
              - columnheader "Version" [ref=e229]
              - columnheader "Notes" [ref=e230]
          - rowgroup [ref=e231]:
            - row "EU AI Act European Parliament 2024/1689 Prohibited uses; high-risk obligations; transparency rights" [ref=e232]:
              - cell "EU AI Act" [ref=e233]
              - cell "European Parliament" [ref=e234]
              - cell "2024/1689" [ref=e235]
              - cell "Prohibited uses; high-risk obligations; transparency rights" [ref=e236]
            - row "Canada Directive on Automated Decision-Making Treasury Board Secretariat 2019 (current) AIA framework; impact levels; human oversight requirements" [ref=e237]:
              - cell "Canada Directive on Automated Decision-Making" [ref=e238]
              - cell "Treasury Board Secretariat" [ref=e239]
              - cell "2019 (current)" [ref=e240]
              - cell "AIA framework; impact levels; human oversight requirements" [ref=e241]
            - row "GDPR EU 2016/679 Right to explanation; automated decision rights" [ref=e242]:
              - cell "GDPR" [ref=e243]
              - cell "EU" [ref=e244]
              - cell "2016/679" [ref=e245]
              - cell "Right to explanation; automated decision rights" [ref=e246]
            - row "WCAG W3C 2.2 Accessibility requirement for user-facing AI components" [ref=e247]:
              - cell "WCAG" [ref=e248]
              - cell "W3C" [ref=e249]
              - cell "2.2" [ref=e250]
              - cell "Accessibility requirement for user-facing AI components" [ref=e251]
            - row "ISO/IEC 42001 ISO 2023 AI management system standard — aspirational" [ref=e252]:
              - cell "ISO/IEC 42001" [ref=e253]
              - cell "ISO" [ref=e254]
              - cell "2023" [ref=e255]
              - cell "AI management system standard — aspirational" [ref=e256]
            - row "NIST AI RMF NIST 1.0 (2023) AI risk management framework — useful for AIA methodology" [ref=e257]:
              - cell "NIST AI RMF" [ref=e258]
              - cell "NIST" [ref=e259]
              - cell "1.0 (2023)" [ref=e260]
              - cell "AI risk management framework — useful for AIA methodology" [ref=e261]
            - row "Utah Artificial Intelligence Policy Act Utah Legislature 2024 (SB 149) Regulatory sandbox model; evidence-based rulemaking; upfront liability assignment" [ref=e262]:
              - cell "Utah Artificial Intelligence Policy Act" [ref=e263]
              - cell "Utah Legislature" [ref=e264]
              - cell "2024 (SB 149)" [ref=e265]
              - cell "Regulatory sandbox model; evidence-based rulemaking; upfront liability assignment" [ref=e266]
            - row "CHT AI Doc & Liability Framework Center for Humane Technology 2024 Duty of care principles; AI Data Sheet concept; products liability approach for AI" [ref=e267]:
              - cell "CHT AI Doc & Liability Framework" [ref=e268]
              - cell "Center for Humane Technology" [ref=e269]
              - cell "2024" [ref=e270]
              - cell "Duty of care principles; AI Data Sheet concept; products liability approach for AI" [ref=e271]
            - row "Centre for Regulatory Innovation (CRI) Treasury Board of Canada Secretariat Est. 2018 Meta-regulatory support unit; Regulators’ Experimentation Toolkit; sandbox capability infrastructure" [ref=e272]:
              - cell "Centre for Regulatory Innovation (CRI)" [ref=e273]
              - cell "Treasury Board of Canada Secretariat" [ref=e274]
              - cell "Est. 2018" [ref=e275]
              - cell "Meta-regulatory support unit; Regulators’ Experimentation Toolkit; sandbox capability infrastructure" [ref=e276]
            - row "FDA CERSI Programme FDA / partner universities (UCSF/Stanford, JHU, UMd, Yale/Mayo, Triangle) Ongoing Academic-regulatory partnership model; problem-driven research → standards and guidance; AI/ML medical device frameworks" [ref=e277]:
              - cell "FDA CERSI Programme" [ref=e278]
              - cell "FDA / partner universities (UCSF/Stanford, JHU, UMd, Yale/Mayo, Triangle)" [ref=e279]
              - cell "Ongoing" [ref=e280]
              - cell "Academic-regulatory partnership model; problem-driven research → standards and guidance; AI/ML medical device frameworks" [ref=e281]
            - row "FAS — Who Governs Government AI? Federation of American Scientists 2025 Implementation gap analysis; cross-agency variance; workforce capacity as governance prerequisite" [ref=e282]:
              - cell "FAS — Who Governs Government AI?" [ref=e283]
              - cell "Federation of American Scientists" [ref=e284]
              - cell "2025" [ref=e285]
              - cell "Implementation gap analysis; cross-agency variance; workforce capacity as governance prerequisite" [ref=e286]
        - separator [ref=e287]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e288]'
        - heading "Procurement Requirements" [level=3] [ref=e289]
        - blockquote [ref=e290]:
          - paragraph [ref=e291]:
            - strong [ref=e292]: "Procurement Clause A: AIA Before Procurement"
            - text: No contract for an AI system at Impact Level II or above may be executed without a completed AIA. The AIA must be published alongside the procurement record. Vendors must provide, as part of their tender response, documentation of bias testing, performance metrics across demographic subgroups, and known failure modes.
        - separator [ref=e293]
        - blockquote [ref=e294]:
          - paragraph [ref=e295]:
            - strong [ref=e296]: "Procurement Clause B: Human Alternative Preservation"
            - text: Where a public service is being partially or fully automated using AI, the procurement must include provision for maintaining a human-staffed alternative for people who cannot or choose not to use the automated channel. The cost of preserving human alternatives must be included in the total cost comparison when evaluating AI procurement.
        - separator [ref=e297]
        - blockquote [ref=e298]:
          - paragraph [ref=e299]:
            - strong [ref=e300]: "Procurement Clause C: Vendor Accountability"
            - text: "AI procurement contracts must include: (a) performance targets and demographic fairness metrics with defined consequences for underperformance; (b) the right for the public body to commission independent audits without vendor consent; (c) a requirement that the vendor notify the public body within 30 days of becoming aware of any material error, bias finding, or security vulnerability in the deployed system; (d) no indemnification clause that transfers liability for discriminatory outcomes from the vendor to the public body."
        - separator [ref=e301]
        - blockquote [ref=e302]:
          - paragraph [ref=e303]:
            - strong [ref=e304]: "Procurement Clause D: Worker Consultation"
            - text: "Before executing a contract for an AI system that would substantially automate, reduce, or restructure tasks currently performed by public sector employees, the procuring body must conduct documented consultation with recognised labour organisations representing affected workers. Consultation must occur before the AIA is finalised and must address: (a) the nature and scope of anticipated changes to roles and responsibilities; (b) retraining, redeployment, or other workforce transition commitments; (c) how productivity gains will be allocated between service improvement and workforce impact. A summary of consultation outcomes must be published as part of the AIA."
        - separator [ref=e305]
        - heading "Small Jurisdiction Implementation" [level=3] [ref=e306]
        - blockquote [ref=e307]:
          - paragraph [ref=e308]:
            - strong [ref=e309]: Proportionality Clause
            - text: "A jurisdiction that lacks the internal technical capacity to conduct a full independent AIA may use a streamlined process for Level I and Level II systems, provided it: (a) uses the centralised pre-certification list published by the oversight body, covering AI systems that have been pre-assessed against this policy’s standards; (b) documents in the procurement record why full independent assessment is not feasible; and (c) accepts that pre-certification does not exempt the jurisdiction from the transparency, registry, and worker consultation requirements. Small jurisdictions remain subject to the full AIA requirement for Level III and Level IV systems without exception. The oversight body must publish an initial list of pre-assessed common AI systems within 12 months of policy adoption, and update it at least annually."
        - paragraph [ref=e310]:
          - emphasis [ref=e311]: "Rationale: The AIA process requires technical capacity that small municipalities cannot realistically sustain independently. Shared pre-certification infrastructure allows smaller jurisdictions to benefit from this policy framework without being effectively locked out of AI procurement. The model draws on the CHT principle that regulatory protections should be proportionate to deployer scale, adapted here for jurisdictional scale. Full protections for high-risk systems (Level III–IV) are preserved regardless of size."
        - separator [ref=e312]
        - heading "Transition and Timeline" [level=3] [ref=e313]
        - table [ref=e314]:
          - rowgroup [ref=e315]:
            - row "Milestone Timeframe from adoption Notes" [ref=e316]:
              - columnheader "Milestone" [ref=e317]
              - columnheader "Timeframe from adoption" [ref=e318]
              - columnheader "Notes" [ref=e319]
          - rowgroup [ref=e320]:
            - row "Prohibited applications register published 3 months Document any existing systems that may need decommissioning" [ref=e321]:
              - cell "Prohibited applications register published" [ref=e322]
              - cell "3 months" [ref=e323]
              - cell "Document any existing systems that may need decommissioning" [ref=e324]
            - row "AIA procedure published 3 months Based on Canada’s AIA tool as starting point" [ref=e325]:
              - cell "AIA procedure published" [ref=e326]
              - cell "3 months" [ref=e327]
              - cell "Based on Canada’s AIA tool as starting point" [ref=e328]
            - row "AI Use Registry launched 6 months Begin with systems already in use" [ref=e329]:
              - cell "AI Use Registry launched" [ref=e330]
              - cell "6 months" [ref=e331]
              - cell "Begin with systems already in use" [ref=e332]
            - row "AIA mandatory for all new AI procurements 6 months" [ref=e333]:
              - cell "AIA mandatory for all new AI procurements" [ref=e334]
              - cell "6 months" [ref=e335]
              - cell [ref=e336]
            - row "AIA required for existing Level III–IV systems 12 months Retrospective assessment" [ref=e337]:
              - cell "AIA required for existing Level III–IV systems" [ref=e338]
              - cell "12 months" [ref=e339]
              - cell "Retrospective assessment" [ref=e340]
            - row "AIA required for all existing Level I–II systems 24 months" [ref=e341]:
              - cell "AIA required for all existing Level I–II systems" [ref=e342]
              - cell "24 months" [ref=e343]
              - cell [ref=e344]
            - row "Full registry compliance 24 months" [ref=e345]:
              - cell "Full registry compliance" [ref=e346]
              - cell "24 months" [ref=e347]
              - cell [ref=e348]
        - heading "Reporting and Transparency" [level=3] [ref=e349]
        - blockquote [ref=e350]:
          - paragraph [ref=e351]:
            - strong [ref=e352]: Transparency Requirement
            - text: "All public bodies must publish an annual AI governance report covering: (a) the AI Use Registry as of the report date; (b) AIAs completed during the year, with links; (c) any prohibited-use findings and how they were resolved; (d) complaints received relating to AI-assisted decisions, and outcomes; (e) independent audits commissioned or completed; (f) estimated operational energy consumption of AI systems in use; (g) accessibility assessment outcomes for user-facing AI systems. The report must include a plain-language summary accessible to members of the public."
        - heading "Enforcement" [level=3] [ref=e353]
        - blockquote [ref=e354]:
          - paragraph [ref=e355]:
            - strong [ref=e356]: Enforcement Clause
            - text: "The designated oversight body may: (a) audit any public body’s AI Use Registry and AIA compliance; (b) require immediate suspension of any AI system found to be in a prohibited category or to have produced discriminatory outcomes, pending remediation; (c) impose administrative penalties for failure to complete AIAs, failure to maintain the registry, or failure to provide explanations to affected individuals; (d) receive complaints from affected individuals and civil society organisations. Complainants do not need to demonstrate personal harm — systemic concerns can be raised by representative organisations."
        - paragraph [ref=e357]:
          - emphasis [ref=e358]: "Notes on enforcement: The EU AI Act’s enforcement architecture relies heavily on national market surveillance authorities and the European AI Office. The Canadian Directive’s enforcement is limited — no penalties for non-compliance have been imposed. This model strengthens enforcement by giving the oversight body powers to require suspension and to receive complaints without requiring individual standing."
        - separator [ref=e359]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e360]'
        - heading "Oversight Body" [level=3] [ref=e361]
        - blockquote [ref=e362]:
          - paragraph [ref=e363]:
            - strong [ref=e364]: Oversight Clause
            - text: "An AI oversight body, independent of executive government and of AI vendors, shall be designated or established. The body must have: technical expertise in AI systems, machine learning, and software auditing; legal expertise in human rights, administrative law, and discrimination law; and community liaison capacity to receive and investigate complaints from affected individuals and communities. The body must not include current employees or directors of AI vendors as voting members, and must not accept funding from AI vendors."
        - heading "Community Representation" [level=3] [ref=e365]
        - blockquote [ref=e366]:
          - paragraph [ref=e367]:
            - strong [ref=e368]: Participation Clause
            - text: "The oversight body must establish a community advisory panel with reserved seats for: civil society organisations working with communities most affected by government AI (including benefit recipients, justice-involved people, and migrants); disability advocacy organisations; labour organisations representing public sector workers; privacy and digital rights advocates; and researchers in AI fairness and accountability. The panel must be consulted before any revision to the prohibited applications list, the AIA methodology, or the impact level classification system."
        - heading "Audit and Review" [level=3] [ref=e369]
        - blockquote [ref=e370]:
          - paragraph [ref=e371]:
            - strong [ref=e372]: Audit Clause
            - text: The oversight body must commission independent technical audits of at least 10% of Level III and IV AI systems in government use annually, selected through a risk-based process. Audit scope must include demographic fairness analysis, error rate analysis, and assessment of whether human oversight is meaningful in practice. Audit results must be published in full.
        - blockquote [ref=e373]:
          - paragraph [ref=e374]:
            - strong [ref=e375]: Review Clause
            - text: This policy shall be reviewed every two years. Given the pace of AI development, a two-year cycle (shorter than the standard three to five years) is required to remain effective. The review must include an assessment of whether the prohibited applications list requires updating, whether new categories of AI use require additional safeguards, and whether enforcement mechanisms have produced measurable change. The review must include a minimum 60-day public comment period.
        - separator [ref=e376]
        - heading "Real-World Examples" [level=2] [ref=e377]
        - heading "European Union — EU AI Act" [level=3] [ref=e378]
        - paragraph [ref=e379]:
          - strong [ref=e380]: "Enacted:"
          - text: 2024 (Regulation (EU) 2024/1689); prohibited uses effective February 2025; high-risk obligations effective August 2026
          - strong [ref=e381]: "Type:"
          - text: EU Regulation (directly binding in all member states)
          - strong [ref=e382]: "Link:"
          - text: https://artificialintelligenceact.eu
          - strong [ref=e383]: "Summary:"
          - text: "The world’s first comprehensive AI regulatory framework. Uses a risk-based tiering system: banned AI (Article 5); high-risk AI subject to strict obligations (Annexes II–III); limited-risk AI requiring transparency; minimal-risk AI with voluntary codes. Prohibited uses include real-time biometric ID in public spaces, social scoring, emotion recognition in workplaces and schools, and predictive policing. High-risk categories include AI in employment, credit, education, justice, and critical infrastructure. Community critique: enforcement is delegated to 27 national authorities with varying capacity; SME exemptions may create loopholes; general-purpose AI obligations were weakened during negotiation."
        - separator [ref=e384]
        - heading "Canada — Directive on Automated Decision-Making + Centre for Regulatory Innovation" [level=3] [ref=e385]
        - paragraph [ref=e386]:
          - strong [ref=e387]: "Enacted:"
          - text: 2019 (Directive, original); updated 2023. CRI established 2018.
          - strong [ref=e388]: "Type:"
          - text: Treasury Board Directive (binding on federal government) + federal meta-regulatory coordination unit
          - strong [ref=e389]: "Links:"
          - text: https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592 | https://www.canada.ca/en/treasury-board-secretariat/services/regulatory-affairs/centre-regulatory-innovation.html
          - strong [ref=e390]: "Summary — Directive on Automated Decision-Making:"
          - text: "Requires federal institutions to complete an Algorithmic Impact Assessment before deploying automated decision systems. Scores impact level I–IV across 65 risk questions; maps mitigation requirements to impact level from the proportionate requirements in Appendix C. Level IV decisions must be made by a human. Peer review required at Level III–IV. AIA results must be published. Considered the most detailed and operationalised government AI governance framework globally. Community critique: weak enforcement — no financial penalties have been imposed for non-compliance; “automated decision system” definition may exclude AI systems that “assist” rather than “decide”; limited to federal institutions only."
        - paragraph [ref=e391]:
          - strong [ref=e392]: "Summary — Centre for Regulatory Innovation (CRI):"
          - text: "A federal coordination unit inside Treasury Board, created in 2018 to modernise regulation in the face of technological change. The CRI is not itself a regulator — it is a meta-regulatory support function. Its three core tools are: (1) regulatory experimentation — time-limited trials to generate evidence before permanent regulation is written; (2) regulatory sandboxes — controlled environments with temporary flexibility from existing rules; (3) toolkits and capacity funding — the Regulators’ Experimentation Toolkit, cross-department collaboration mechanisms, and pilot project funding. The CRI model is conceptually identical to Utah’s AI sandbox but operates at the level of regulator capability rather than specific AI deployments."
          - strong [ref=e393]: "What makes it distinct from Utah:"
          - text: Canada invests in process and institutional capability — building regulators’ capacity to experiment — rather than just running individual pilots. This makes the model more scalable but also less focused.
          - strong [ref=e394]: "Limitations:"
          - text: the CRI operates across all regulatory domains, not AI specifically; it produces process improvements and guidance, not enforceable AI governance outcomes; and adoption across departments has been uneven. For AI governance, the CRI provides the institutional scaffolding that a dedicated AI sandbox (per Aspirational Standard 3) would need — it does not substitute for one.
        - separator [ref=e395]
        - heading "United States — Executive Orders, OMB Implementation, and the FDA CERSI Model" [level=3] [ref=e396]
        - paragraph [ref=e397]:
          - strong [ref=e398]: "Enacted:"
          - text: EO 14110 (Biden, October 2023, revoked January 2025); OMB M-24-10 (Biden); OMB M-25-21 (Trump, 2025)
          - strong [ref=e399]: "Type:"
          - text: Executive Orders + OMB Memoranda (federal agencies only; no statutory force) + FDA academic partnership programme
          - strong [ref=e400]: "Links:"
          - text: https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence | https://www.fda.gov/science-research/advancing-regulatory-science/cersi-collaborative-research-projects
        - paragraph [ref=e401]:
          - strong [ref=e402]: "Summary — EO 14110 and OMB frameworks:"
          - text: EO 14110 required 50+ federal agencies to take 100+ specific actions including AI safety evaluations, Chief AI Officer appointments, and workforce development. Its revocation in January 2025 (before many provisions were implemented) demonstrates the fragility of executive-order-based governance — statutory frameworks are more durable. The Biden OMB M-24-10 established separate categories for “rights-impacting AI” and “safety-impacting AI” with proactive discrimination prevention, continuous monitoring, mandatory opt-outs, and defined independent Chief AI Officer review. The Trump OMB M-25-21 consolidated these into a single “high-impact AI” category, shifted from proactive to reactive safeguards, and replaced mandatory opt-outs with flexible remedies. The policy oscillation between administrations illustrates why AI governance must be statutory and not dependent on executive discretion.
        - paragraph [ref=e403]:
          - strong [ref=e404]: "Summary — Implementation gap evidence (FAS, 2025):"
          - text: "The Federation of American Scientists analysed cross-agency implementation of federal AI governance requirements and found fewer than 40% of mandated actions were verifiably implemented. Implementation varied dramatically by agency resource level: well-funded agencies with centralised AI structures (e.g., DHS) documented inventories and established governance procedures; resource-constrained agencies serving vulnerable populations (e.g., justice-involved, benefits) were still developing foundational procedures. The 2025 dissolution of entire federal AI teams (GSA’s 18F, DHS AI Corps) following workforce reductions compounded the capacity gap. Key finding: only 44% of Americans trust their government to regulate AI effectively, versus 72–89% in peer nations. The FAS analysis demonstrates that policy text without implementation capacity produces a governance fiction — the enforcement and small-jurisdiction provisions in this model are directly designed to address this failure mode."
        - paragraph [ref=e405]:
          - strong [ref=e406]: "Summary — FDA CERSI (Centers of Excellence in Regulatory Science and Innovation):"
          - text: "A structured academic-regulatory partnership programme in which the FDA funds university-based research centres to work on FDA-defined regulatory science problems. Current partners include UCSF/Stanford, University of Maryland, Johns Hopkins, Yale/Mayo Clinic, and Triangle CERSI (NC). Research outputs are explicitly designed to become FDA guidance documents, standards, and policy — not academic papers filed in journals. AI/digital health work includes post-market monitoring frameworks for AI/ML medical devices, algorithmic change protocols for software-as-a-medical-device, and digital biomarker standards. The model is distinctive: funding is tied to regulator-defined problems, not researcher-initiated inquiry, creating deliberate knowledge flow from academic rigour into regulatory standards. Applied to AI governance broadly (not just medical devices), this pattern — government defines the unresolved methodological questions; universities build the evidence base; outputs become standards — is directly applicable to building the pre-certification methodology the Small Jurisdiction Proportionality Clause requires."
        - separator [ref=e407]
        - heading "New Zealand — Algorithm Charter for Aotearoa New Zealand" [level=3] [ref=e408]
        - paragraph [ref=e409]:
          - strong [ref=e410]: "Enacted:"
          - text: "2020"
          - strong [ref=e411]: "Type:"
          - text: Voluntary charter (government agencies sign up to six commitments)
          - strong [ref=e412]: "Link:"
          - text: https://data.govt.nz/toolkit/data-ethics/government-algorithm-transparency-and-accountability/algorithm-charter/
          - strong [ref=e413]: "Summary:"
          - text: "Agencies that sign the charter commit to maintaining lists of significant algorithms, explaining algorithmic decisions, consulting communities, protecting privacy, having human review processes, and participating in peer review. Valuable for its plain-language framing and whole-of-government approach. Significant weakness: signing is voluntary, enforcement is absent, and implementation has been inconsistent. The charter demonstrates that voluntary frameworks produce uneven compliance without enforcement mechanisms."
        - separator [ref=e414]
        - heading "Seattle — Responsible AI Program" [level=3] [ref=e415]
        - paragraph [ref=e416]:
          - strong [ref=e417]: "Enacted:"
          - text: 2023 (initial policy); 2025 (Responsible AI Plan)
          - strong [ref=e418]: "Type:"
          - text: City policy and programme
          - strong [ref=e419]: "Link:"
          - text: https://www.seattle.gov/tech/data-privacy/the-citys-responsible-use-of-artificial-intelligence
          - strong [ref=e420]: "Summary:"
          - text: Seattle was among the first cities globally to issue generative AI guidance (Fall 2023) and subsequently developed a full Responsible AI Plan in 2025 with equity at its centre. Active pilots in permit processing, housing production, public safety, and customer service. Commitment to public documentation of city AI use. Provides a replicable municipal model — particularly valuable because municipal AI governance is underspecified globally compared to national frameworks.
        - separator [ref=e421]
        - heading "Utah — Artificial Intelligence Policy Act and Regulatory Sandbox" [level=3] [ref=e422]
        - paragraph [ref=e423]:
          - strong [ref=e424]: "Enacted:"
          - text: "2024"
          - strong [ref=e425]: "Type:"
          - text: State legislation + dedicated regulator (Office of AI Policy)
          - strong [ref=e426]: "Link:"
          - text: https://le.utah.gov/~2024/bills/static/SB0149.html
          - strong [ref=e427]: "Summary:"
          - text: Utah established a dedicated AI regulatory sandbox allowing companies to operate under temporary waivers of licensing, scope-of-practice, and other regulations — but only within a controlled environment with mandatory oversight, reporting, and safety constraints. The Office of AI Policy assigns liability upfront before deployment and often requires insurance covering AI outputs, resolving the “who is responsible if AI fails?” paralysis common in AI regulation. The sandbox operates on use-case and workflow specificity rather than regulating “AI” as a category — low-risk prescription renewals via AI were permitted under supervision. Findings from sandbox deployments feed back into permanent rulemaking.
          - strong [ref=e428]: "What makes it genuinely innovative:"
          - text: evidence-based rulemaking (rules written from observed operational data rather than hypothetical risk); institutionalised experimentation inside government; liability integration into the framework at the design stage; and fast iteration without waiting for legislative cycles.
          - strong [ref=e429]: "Real limitations:"
          - text: each sandbox requires bespoke agreements and is not scalable as-is; regulators choose who receives exemptions, creating favouritism risk; administrative overhead remains significant; the sandbox is temporary by design — it produces insights, not permanent governance. The Utah model is a pilot, not a complete regulatory system, but its core pattern — controlled testing environment → regulatory flexibility → mandatory data collection → permanent rulemaking — is transferable to digital public infrastructure, accessibility automation, procurement reform, and other domains.
        - separator [ref=e430]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e431]
        - list [ref=e432]:
          - listitem [ref=e433]:
            - strong [ref=e434]: Generative AI is partially addressed
            - text: — Standard 2(f) now requires pre-deployment testing documentation for LLM-based systems used in public communications, and Standard 3(e) requires disclosure in conversational AI contexts. However, hallucination risks in AI-generated legal or administrative documents, and AI-assisted public consultations, require further specification.
          - listitem [ref=e435]:
            - strong [ref=e436]: Agentic AI is not addressed
            - text: — Autonomous AI agents that take actions (not just produce outputs) require additional governance frameworks around decision chains, audit trails, and the assignment of accountability across multi-agent systems. The AIA framework assumes a system with identifiable discrete outputs; agentic systems produce chains of actions that may not be traceable to a single decision point.
          - listitem [ref=e437]:
            - strong [ref=e438]: Environmental cost methodology
            - text: — Pillar 1’s prohibition on adoption where “environmental cost is disproportionate to public benefit” is not yet operationalised. A methodology for comparing AI energy cost to service value is needed.
          - listitem [ref=e439]:
            - strong [ref=e440]: Private sector AI affecting public rights
            - text: — This model applies to public bodies. Private sector AI used in employment, credit, housing, and other areas affecting fundamental rights falls outside scope. The Algorithmic Accountability model addresses some of this gap but a fuller treatment is needed.
          - listitem [ref=e441]:
            - strong [ref=e442]: International and exported AI
            - text: — Standard 4(f) now restricts procurement from vendors with sanctioned-government supply relationships; Aspirational Standard 3 establishes an international coordination mandate for the oversight body. However, development assistance organisations and international institutions that deploy AI in Global South contexts often apply lower governance standards than they would domestically — this gap is noted but not addressed.
          - listitem [ref=e443]:
            - strong [ref=e444]: Small jurisdiction capacity
            - text: — The Proportionality Clause in the Implementation section creates a pre-certification pathway for Level I–II systems. The oversight body must still build and maintain the pre-certification list, and the resourcing for this is not specified.
          - listitem [ref=e445]:
            - strong [ref=e446]: AI identity and anthropomorphism in ongoing service contexts
            - text: — Standard 3(e) now requires disclosure at the outset of conversational AI interactions and prohibits AI configured to deny being AI. However, AI used in advisory, therapeutic, or companion contexts — where the relationship develops over time rather than a single session — may require stronger protections, particularly for vulnerable users. This is noted but not addressed.
          - listitem [ref=e447]:
            - strong [ref=e448]: Worker impact operationalisation
            - text: — Procurement Clause D now requires pre-AIA worker consultation. However, no AIA methodology currently includes a worker impact dimension as a scored factor. The impact level classification (Level I–IV) does not account for workforce disruption — a system with minimal individual decision impact could still cause substantial workforce harm. A workforce impact dimension should be added to the AIA questionnaire.
          - listitem [ref=e449]:
            - strong [ref=e450]: Vendor risk disclosure standardisation
            - text: — Standard 5(h) now requires a structured vendor risk disclosure for Level II+ systems and requires the oversight body to publish a standard template. Until the template is published, procuring bodies must apply the disclosure criteria as written. Comparability across procurements will be limited until a shared template is in place.
        - separator [ref=e451]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e452]
        - table [ref=e453]:
          - rowgroup [ref=e454]:
            - row "Related Domain Relationship" [ref=e455]:
              - columnheader "Related Domain" [ref=e456]
              - columnheader "Relationship" [ref=e457]
          - rowgroup [ref=e458]:
            - row "Algorithmic Accountability AI Adoption sets the governance framework; Algorithmic Accountability provides the enforcement and audit mechanisms for specific high-impact use cases" [ref=e459]:
              - cell "Algorithmic Accountability" [ref=e460]:
                - link "Algorithmic Accountability" [ref=e461] [cursor=pointer]:
                  - /url: ../../algorithmic-accountability/full-model/
              - cell "AI Adoption sets the governance framework; Algorithmic Accountability provides the enforcement and audit mechanisms for specific high-impact use cases" [ref=e462]
            - row "Data Centers AI compute requires energy; AI adoption decisions must account for energy and water cost" [ref=e463]:
              - cell "Data Centers" [ref=e464]:
                - link "Data Centers" [ref=e465] [cursor=pointer]:
                  - /url: ../../data-centers/full-model/
              - cell "AI compute requires energy; AI adoption decisions must account for energy and water cost" [ref=e466]
            - row "Digital Accessibility AI-assisted public services must meet accessibility standards; AI tools should not create new access barriers" [ref=e467]:
              - cell "Digital Accessibility" [ref=e468]:
                - link "Digital Accessibility" [ref=e469] [cursor=pointer]:
                  - /url: ../../accessibility/full-model/
              - cell "AI-assisted public services must meet accessibility standards; AI tools should not create new access barriers" [ref=e470]
            - row "Open Source in Government Open and auditable AI systems are preferable for government use; procurement restrictions apply similarly" [ref=e471]:
              - cell "Open Source in Government" [ref=e472]:
                - link "Open Source in Government" [ref=e473] [cursor=pointer]:
                  - /url: ../../open-source-in-government/full-model/
              - cell "Open and auditable AI systems are preferable for government use; procurement restrictions apply similarly" [ref=e474]
            - row "Digital Sovereignty AI systems from a small number of global vendors create sovereignty risks analogous to other forms of digital dependency" [ref=e475]:
              - cell "Digital Sovereignty" [ref=e476]:
                - link "Digital Sovereignty" [ref=e477] [cursor=pointer]:
                  - /url: ../../digital-sovereignty/full-model/
              - cell "AI systems from a small number of global vendors create sovereignty risks analogous to other forms of digital dependency" [ref=e478]
            - row "Children & Technology AI systems used in educational contexts or affecting children require the heightened protections of that domain" [ref=e479]:
              - cell "Children & Technology" [ref=e480]:
                - link "Children & Technology" [ref=e481] [cursor=pointer]:
                  - /url: ../../children-technology/full-model/
              - cell "AI systems used in educational contexts or affecting children require the heightened protections of that domain" [ref=e482]
        - separator [ref=e483]
        - heading "Glossary" [level=2] [ref=e484]
        - paragraph [ref=e485]:
          - strong [ref=e486]: "Automated Decision System (ADS):"
          - text: A computational process that makes or substantially assists in making decisions affecting individuals’ rights, interests, or well-being. May include machine learning models, rule-based systems, or combinations.
        - paragraph [ref=e487]:
          - strong [ref=e488]: "Algorithmic Impact Assessment (AIA):"
          - text: A structured pre-deployment process for evaluating the risks and potential harms of an automated decision system, resulting in an impact level classification and proportionate mitigation requirements.
        - paragraph [ref=e489]:
          - strong [ref=e490]: "Impact Level (I–IV):"
          - text: A classification of an ADS’s potential harm, from Level I (low impact, fully automated acceptable) to Level IV (very high impact, human decision required). Based on Canada’s Directive on Automated Decision-Making tiering system.
        - paragraph [ref=e491]:
          - strong [ref=e492]: "High-Risk AI System:"
          - text: Under the EU AI Act, an AI system classified as high-risk because it poses significant risks to health, safety, or fundamental rights. Includes AI in employment, education, credit, justice, critical infrastructure, and law enforcement.
        - paragraph [ref=e493]:
          - strong [ref=e494]: "Prohibited AI Application:"
          - text: An AI use that is incompatible with human rights and must not be adopted regardless of efficiency arguments. Drawn from EU AI Act Article 5.
        - paragraph [ref=e495]:
          - strong [ref=e496]: "AI Use Registry:"
          - text: A mandatory public list of all AI systems in operational use by a public body, with standardised metadata including system purpose, impact level, vendor, and energy consumption.
        - separator [ref=e497]
        - heading "Contributing to This Policy Model" [level=2] [ref=e498]
        - paragraph [ref=e499]: "This model is maintained in the open. Priority contribution needs:"
        - list [ref=e500]:
          - listitem [ref=e501]:
            - strong [ref=e502]: Generative AI provisions
            - text: — Model language specifically addressing LLM risks in government (hallucination, confidentiality, copyright, content generation)
          - listitem [ref=e503]:
            - strong [ref=e504]: Agentic AI provisions
            - text: — Model language for autonomous AI agent systems
          - listitem [ref=e505]:
            - strong [ref=e506]: Environmental cost methodology
            - text: — A practical approach to assessing whether AI’s energy cost is proportionate to its benefit
          - listitem [ref=e507]:
            - strong [ref=e508]: Global South examples
            - text: — AI governance experience from African, Asian, and Latin American jurisdictions
          - listitem [ref=e509]:
            - strong [ref=e510]: Small jurisdiction implementation guidance
            - text: — How can municipalities with limited technical capacity implement the AIA requirement?
        - paragraph [ref=e511]: All substantive changes go through a minimum 14-day public comment period before merging.
        - separator [ref=e512]
        - heading "Changelog" [level=2] [ref=e513]
        - table [ref=e514]:
          - rowgroup [ref=e515]:
            - row "Version Date Summary of changes" [ref=e516]:
              - columnheader "Version" [ref=e517]
              - columnheader "Date" [ref=e518]
              - columnheader "Summary of changes" [ref=e519]
          - rowgroup [ref=e520]:
            - row "0.1 2026-04-04 Initial draft — four pillars, real-world examples from EU, Canada, US, New Zealand, Seattle" [ref=e521]:
              - cell "0.1" [ref=e522]
              - cell "2026-04-04" [ref=e523]
              - cell "Initial draft — four pillars, real-world examples from EU, Canada, US, New Zealand, Seattle" [ref=e524]
            - row "0.4 2026-04-13 Add FDA CERSI as third institutional pattern in Aspirational Standard 3 rationale (methodology generation layer alongside Utah/CRI); expand US real-world example to cover OMB M-24-10/M-25-21 implementation gap (FAS 2025 findings) and FDA CERSI programme; add CERSI and FAS to Standards Cross-Reference" [ref=e525]:
              - cell "0.4" [ref=e526]
              - cell "2026-04-13" [ref=e527]
              - cell "Add FDA CERSI as third institutional pattern in Aspirational Standard 3 rationale (methodology generation layer alongside Utah/CRI); expand US real-world example to cover OMB M-24-10/M-25-21 implementation gap (FAS 2025 findings) and FDA CERSI programme; add CERSI and FAS to Standards Cross-Reference" [ref=e528]
            - row "0.3 2026-04-13 Add Canada CRI as real-world example alongside Directive on Automated Decision-Making; update Aspirational Standard 3 rationale to position Utah + CRI as complementary sandbox models; add CRI to Standards Cross-Reference" [ref=e529]:
              - cell "0.3" [ref=e530]
              - cell "2026-04-13" [ref=e531]
              - cell "Add Canada CRI as real-world example alongside Directive on Automated Decision-Making; update Aspirational Standard 3 rationale to position Utah + CRI as complementary sandbox models; add CRI to Standards Cross-Reference" [ref=e532]
            - 'row "0.2 2026-04-13 CHT review: added Standard 1(g) (AI impersonation prohibition), Standard 2(f) (generative AI pre-deployment testing), Standard 3(e) (AI identity disclosure in conversational contexts), Standard 4(f) (international procurement restriction), Standard 5(h) (structured vendor risk disclosure), Procurement Clause D (worker consultation), Small Jurisdiction Proportionality Clause, Aspirational Standards 3–4 (regulatory sandbox; international coordination); added Utah sandbox and CHT as real-world examples and Standards Cross-Reference entries; updated Gaps section to reflect partial gap closures and add three new documented gaps (agentic AI in AIA, worker impact in AIA scoring, vendor disclosure standardisation timeline)" [ref=e533]':
              - cell "0.2" [ref=e534]
              - cell "2026-04-13" [ref=e535]
              - 'cell "CHT review: added Standard 1(g) (AI impersonation prohibition), Standard 2(f) (generative AI pre-deployment testing), Standard 3(e) (AI identity disclosure in conversational contexts), Standard 4(f) (international procurement restriction), Standard 5(h) (structured vendor risk disclosure), Procurement Clause D (worker consultation), Small Jurisdiction Proportionality Clause, Aspirational Standards 3–4 (regulatory sandbox; international coordination); added Utah sandbox and CHT as real-world examples and Standards Cross-Reference entries; updated Gaps section to reflect partial gap closures and add three new documented gaps (agentic AI in AIA, worker impact in AIA scoring, vendor disclosure standardisation timeline)" [ref=e536]'
        - separator [ref=e537]
        - paragraph [ref=e538]:
          - emphasis [ref=e539]: This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.
      - link "✏️ Edit this policy on GitHub" [ref=e540] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/ai-adoption/full-model.md
  - contentinfo [ref=e541]:
    - generic [ref=e542]:
      - generic [ref=e543]:
        - heading "Open Digital Policies" [level=3] [ref=e544]
        - paragraph [ref=e545]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e546]:
        - heading "Policy Domains" [level=3] [ref=e547]
        - list [ref=e548]:
          - listitem [ref=e549]:
            - link "Who Pays for AI's Power Bill?" [ref=e550] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e551]:
            - link "Digital Services That Work for Everyone" [ref=e552] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e553]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e554] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e555]:
            - link "Public Money, Public Code" [ref=e556] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e557]:
            - link "AI That Works For You, Not On You" [ref=e558] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e559]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e560] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e561]:
            - link "A Greener Web" [ref=e562] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e563]:
            - link "Your City Is Watching You" [ref=e564] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e565]:
            - link "Whose Internet Is It?" [ref=e566] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e567]:
            - link "Technology That's Safe for Kids" [ref=e568] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e569]:
            - link "Who Decides What You Can Say Online?" [ref=e570] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e571]:
            - link "Digital Infrastructure for Everyone" [ref=e572] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e573]:
        - heading "Resources" [level=3] [ref=e574]
        - list [ref=e575]:
          - listitem [ref=e576]:
            - link "Explore all domains" [ref=e577] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e578]:
            - link "Adoptions tracker" [ref=e579] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e580]:
            - link "Search" [ref=e581] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e582]:
            - link "About this project" [ref=e583] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e584]:
            - link "How to contribute" [ref=e585] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e586]:
            - link "Glossary" [ref=e587] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e588]:
        - heading "Community" [level=3] [ref=e589]
        - list [ref=e590]:
          - listitem [ref=e591]:
            - link "GitHub repository" [ref=e592] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e593]:
            - link "Open an issue" [ref=e594] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e595]:
            - link "Propose a domain" [ref=e596] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e597]:
            - link "Report an adoption" [ref=e598] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e599]:
      - generic [ref=e600]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e601] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e602]:
        - text: Maintained by
        - link "the ODP community" [ref=e603] [cursor=pointer]:
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