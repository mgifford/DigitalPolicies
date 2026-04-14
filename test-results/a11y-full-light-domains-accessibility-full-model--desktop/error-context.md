# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/accessibility/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/accessibility/full-model/ [light]:

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
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\" checked=\"checked\">",
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
      - heading "Digital Services That Work for Everyone" [level=1] [ref=e29]
      - paragraph [ref=e30]: Digital Accessibility & Inclusion
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
        - heading "Digital Accessibility & Inclusion — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-04
            - strong [ref=e57]: "Related domains:"
            - link "Smart Cities & Privacy" [ref=e58] [cursor=pointer]:
              - /url: ../../smart-cities/full-model/
            - text: ","
            - link "AI Adoption" [ref=e59] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - text: ","
            - link "Algorithmic Accountability" [ref=e60] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - strong [ref=e61]: "Key sources:"
            - text: EU Web Accessibility Directive (WAD), EU European Accessibility Act (EAA), US Section 508, US ADA Title II, W3C WCAG, EN 301 549
        - separator [ref=e62]
        - heading "Overview" [level=2] [ref=e63]
        - paragraph [ref=e64]: Digital public services must work for everyone. This is not a technical nicety — it is a civil rights requirement. When governments and publicly funded organisations deploy inaccessible digital systems, they exclude disabled people, older adults, people with low digital literacy, and those using assistive technologies from participating in public life.
        - paragraph [ref=e65]: Despite decades of legal frameworks — Section 508 in the US (1998), the EU Web Accessibility Directive (2016), and now the EU European Accessibility Act (June 2025) — compliance remains deeply inadequate. The 2025 US governmentwide assessment found only 23% of top-visited federal websites fully conforming to Section 508. EU data shows over 80% of websites contain accessibility errors. This is not a technical problem; it is a governance and procurement failure.
        - heading "The Core Tension" [level=3] [ref=e66]
        - paragraph [ref=e67]:
          - strong [ref=e68]: We want modern, efficient digital public services — but efficiency that excludes 15-20% of the population (WHO estimate of people living with disability) is not efficiency. Accessibility built in from the start costs a fraction of retrofitting. Accessibility as afterthought is the most expensive option.
        - heading "Scope" [level=3] [ref=e69]
        - list [ref=e70]:
          - listitem [ref=e71]:
            - checkbox [checked] [disabled] [ref=e72]
            - text: Municipal / local government (public-facing digital services)
          - listitem [ref=e73]:
            - checkbox [checked] [disabled] [ref=e74]
            - text: Regional / state / provincial government
          - listitem [ref=e75]:
            - checkbox [checked] [disabled] [ref=e76]
            - text: National government
          - listitem [ref=e77]:
            - checkbox [checked] [disabled] [ref=e78]
            - text: Public sector procurement (ICT purchasing, contracts, vendors)
          - listitem [ref=e79]:
            - checkbox [checked] [disabled] [ref=e80]
            - text: Regulated industries providing services of public importance (banking, transport, telecoms, e-commerce — per EAA)
        - separator [ref=e81]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e82]'
        - heading "Foundational Values" [level=3] [ref=e83]
        - paragraph [ref=e84]:
          - strong [ref=e85]: 1. Access is a right, not a feature
          - text: Accessibility is not an optional enhancement or a feature to be added “when there’s time.” It is a fundamental rights requirement. Inaccessible digital public services are a form of discrimination. Policy language must reflect this — not as aspiration, but as enforceable obligation.
        - paragraph [ref=e86]:
          - strong [ref=e87]: 2. Nothing about us without us
          - text: People with disabilities must be involved in the design, procurement, testing, and governance of digital systems intended to serve them. Accessibility checklists run by non-disabled technicians are insufficient. Participatory design and user testing with disabled people are the standard.
        - paragraph [ref=e88]:
          - strong [ref=e89]: 3. Procurement is where accessibility is won or lost
          - text: The vast majority of accessibility failures occur because inaccessible products were purchased. The 2025 US Section 508 Assessment found that 46% of agencies never or only sometimes verify accessibility of ICT they have procured — accepting deliverables without testing. Accessibility requirements must be mandatory, verifiable, and evaluated before contract award.
        - paragraph [ref=e90]:
          - strong [ref=e91]: 4. Automated testing is necessary but not sufficient
          - text: Automated tools catch approximately 30-40% of accessibility issues. The rest require manual testing and testing with real users of assistive technologies. Policy requiring only automated testing compliance is providing a false baseline.
        - paragraph [ref=e92]:
          - strong [ref=e93]: 5. Accessibility and security must not trade off
          - text: Accessibility and security are often incorrectly framed as in tension — particularly around authentication. Multi-factor authentication methods, CAPTCHA systems, and session timeouts create real accessibility barriers. Policy must require that security mechanisms are themselves accessible, not exempt from accessibility obligations.
        - paragraph [ref=e94]:
          - strong [ref=e95]: 6. Maintenance is part of accessibility
          - text: An accessible website at launch becomes inaccessible over time through content additions, third-party integrations, and system updates. Accessibility must be an ongoing operational commitment, not a one-time certification event.
        - paragraph [ref=e96]:
          - strong [ref=e97]: 7. Language, literacy, and plain language are part of accessibility
          - text: Technical WCAG conformance without clear, plain language still excludes people with cognitive disabilities and low literacy. Accessibility standards must be understood broadly to include content usability, not only technical markup compliance.
        - heading "Equity Considerations" [level=3] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - strong [ref=e101]: People with disabilities
            - text: (estimated 15-20% of population globally, WHO) — primary beneficiaries and the group most consistently excluded by inaccessible digital services. Include people with visual, hearing, motor, cognitive, and neurological disabilities.
          - listitem [ref=e102]:
            - strong [ref=e103]: Older adults
            - text: — disproportionately affected by both disability and digital exclusion; often the heaviest users of public services.
          - listitem [ref=e104]:
            - strong [ref=e105]: People using non-mainstream devices or connections
            - text: — low-bandwidth users, mobile-only users, users with older hardware. Accessibility standards overlap significantly with low-bandwidth and device-agnostic design.
          - listitem [ref=e106]:
            - strong [ref=e107]: People with English as an additional language
            - text: — plain language and multilingual requirements overlap with cognitive accessibility.
          - listitem [ref=e108]:
            - strong [ref=e109]: People in rural and remote areas
            - text: — connectivity constraints intersect with accessibility when applications require high-bandwidth or modern browser features.
        - heading "Environmental Considerations" [level=3] [ref=e110]
        - paragraph [ref=e111]:
          - text: Accessible design is generally more sustainable digital design. Semantic HTML, clean code, reduced reliance on JavaScript for basic functionality, and plain text alternatives are all characteristics of both accessible and low-footprint web design. The
          - link "Sustainable Web Design" [ref=e112] [cursor=pointer]:
            - /url: https://sustainablewebdesign.org
          - text: movement and accessibility share significant common ground.
        - separator [ref=e113]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e114]'
        - heading "Mandatory Standards" [level=3] [ref=e115]
        - blockquote [ref=e116]:
          - paragraph [ref=e117]:
            - strong [ref=e118]: WCAG 2.2 Level AA as the Baseline
            - text: All digital services, websites, mobile applications, and information and communication technology (ICT) operated or procured by public bodies shall conform to the Web Content Accessibility Guidelines (WCAG) version 2.2, Level AA, as published by the World Wide Web Consortium (W3C). Where a newer version of WCAG is published and adopted as a harmonised standard, conformance to that version supersedes this requirement within [24] months of publication. Conformance shall be documented in a publicly accessible accessibility statement updated at least annually.
        - paragraph [ref=e119]:
          - emphasis [ref=e120]: "Rationale:"
          - text: WCAG 2.2 is the current W3C standard (September 2023), adding nine new success criteria over WCAG 2.1 — particularly strengthening protections for users with cognitive and motor disabilities. The EU EAA and WAD currently reference WCAG 2.1 via EN 301 549; 2.2 is the more current baseline. WCAG 3.0 is in development and not yet ready for adoption.
        - paragraph [ref=e121]:
          - emphasis [ref=e122]: "Reference:"
          - link "WCAG 2.2 (W3C)" [ref=e123] [cursor=pointer]:
            - /url: https://www.w3.org/TR/WCAG22/
          - text: ;
          - link "EN 301 549 v3 (ETSI)" [ref=e124] [cursor=pointer]:
            - /url: https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility
          - text: ;
          - link "EU Web Accessibility Directive" [ref=e125] [cursor=pointer]:
            - /url: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016L2102
          - text: ;
          - link "EU European Accessibility Act" [ref=e126] [cursor=pointer]:
            - /url: https://ec.europa.eu/social/main.jsp?catId=1202
        - separator [ref=e127]
        - blockquote [ref=e128]:
          - paragraph [ref=e129]:
            - strong [ref=e130]: EN 301 549 for ICT Products and Services
            - text: All ICT products and services procured by public bodies — including hardware, software, documents, and multimedia — shall conform to the harmonised European Standard EN 301 549, current version. Where EN 301 549 references WCAG, the conformance requirement follows the WCAG version specified in this policy. For non-EU jurisdictions, equivalent technical standards providing the same or greater protection shall be specified in procurement documentation.
        - paragraph [ref=e131]:
          - emphasis [ref=e132]: "Rationale:"
          - text: EN 301 549 is the EU harmonised standard that covers the full range of ICT — not just websites. It incorporates WCAG for web content but adds requirements for hardware, documents, video, telephony, and other ICT types. It is functionally equivalent to the US Section 508 standards (both are derived from the same source). Using EN 301 549 or equivalent gives procurement teams a single, comprehensive technical standard.
        - paragraph [ref=e133]:
          - emphasis [ref=e134]: "Reference:"
          - link "ETSI EN 301 549" [ref=e135] [cursor=pointer]:
            - /url: https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility
          - text: ;
          - link "US Section 508 standards cross-reference" [ref=e136] [cursor=pointer]:
            - /url: https://www.section508.gov/manage/laws-and-policies/
        - separator [ref=e137]
        - blockquote [ref=e138]:
          - paragraph [ref=e139]:
            - strong [ref=e140]: Mandatory Accessibility Statement
            - text: "All public digital services shall publish an accessibility statement that includes: (a) conformance status (fully conformant, partially conformant, or non-conformant) against the applicable standard; (b) known barriers and remediation timelines for each; (c) date of most recent audit and method used (automated, manual, or user testing); (d) a feedback mechanism for users to report accessibility barriers; and (e) contact details for the responsible accessibility officer. Statements shall be updated at least annually and whenever significant changes are made to the service. The statement itself must be accessible."
        - paragraph [ref=e141]:
          - emphasis [ref=e142]: "Rationale:"
          - text: The EU WAD requires accessibility statements in this form; the model above mirrors WAD’s structure and adds the audit method disclosure (important for quality assessment) and the remediation timeline requirement. Without public statements, there is no baseline for accountability.
        - separator [ref=e143]
        - blockquote [ref=e144]:
          - paragraph [ref=e145]:
            - strong [ref=e146]: Accessibility in Procurement as a Mandatory Pass/Fail Criterion
            - text: "No contract for the supply of ICT products or services to a public body shall be awarded unless the vendor provides: (a) a Voluntary Product Accessibility Template (VPAT / Accessibility Conformance Report) or equivalent, verified against the required standard; (b) evidence of accessibility testing using both automated tools and manual evaluation with assistive technologies; (c) a remediation commitment for any identified barriers, with binding timelines and financial penalties for non-delivery; and (d) written commitment to maintain accessibility conformance for the duration of the contract. Procurement officers shall verify accessibility documentation before contract award. Contracts shall include termination rights for persistent accessibility failures."
        - paragraph [ref=e147]:
          - emphasis [ref=e148]: "Rationale:"
          - text: "The #1 finding of the US Section 508 2025 Assessment is that agencies are accepting contract deliverables without testing whether they meet contractual accessibility requirements. 46% of agencies “sometimes or never” verify delivery. This provision makes verification mandatory and gives agencies contractual remedy when vendors deliver inaccessible products."
        - paragraph [ref=e149]:
          - emphasis [ref=e150]: "Reference:"
          - link "GSA Section 508 Assessment 2025" [ref=e151] [cursor=pointer]:
            - /url: https://www.section508.gov/manage/section-508-assessment/2025/
          - text: ;
          - link "VPAT/ACR templates (ITI)" [ref=e152] [cursor=pointer]:
            - /url: https://www.itic.org/policy/accessibility/vpat
        - separator [ref=e153]
        - blockquote [ref=e154]:
          - paragraph [ref=e155]:
            - strong [ref=e156]: Real User Testing Requirement
            - text: Accessibility testing for any ICT procured or operated by a public body that serves more than [10,000] users annually, or that provides access to significant public services (benefits, licensing, voting, health, justice), shall include testing with people who use assistive technologies. Automated-only testing reports shall not be accepted as full conformance evidence for these services. At least [two] distinct user testing sessions with participants using different assistive technologies shall be documented annually.
        - paragraph [ref=e157]:
          - emphasis [ref=e158]: "Rationale:"
          - text: The EU WAD monitoring guidance distinguishes between in-depth and simplified monitoring — simplified monitoring uses automated tools and some manual checks; in-depth monitoring includes user testing. The WAD requires in-depth monitoring of a sample of sites. This provision makes user testing mandatory for high-impact services rather than sample-based. Automated testing catches at most 30-40% of accessibility issues.
        - separator [ref=e159]
        - blockquote [ref=e160]:
          - paragraph [ref=e161]:
            - strong [ref=e162]: Accessible Authentication
            - text: "Authentication mechanisms used for public digital services shall not require users to: (a) complete a CAPTCHA that relies solely on visual image recognition without an accessible alternative; (b) use time-limited one-time passwords without option for extended time; or (c) perform tasks that require fine motor control without alternatives. Where multi-factor authentication is required, at least one factor shall be accessible to users of all assistive technologies. This requirement applies regardless of whether the authentication system is built in-house or provided by a third party."
        - paragraph [ref=e163]:
          - emphasis [ref=e164]: "Rationale:"
          - text: WCAG 2.2 added SC 3.3.7 (Redundant Entry) and SC 3.3.8 (Accessible Authentication) specifically to address authentication barriers. Many public services use third-party authentication systems that were not procured with accessibility requirements and create significant barriers, particularly for users with visual or motor impairments.
        - separator [ref=e165]
        - blockquote [ref=e166]:
          - paragraph [ref=e167]:
            - strong [ref=e168]: Plain Language as Part of Accessibility
            - text: "All public digital communications — including policy documents, service instructions, application forms, error messages, and legal notices — shall use plain language principles: short sentences, active voice, common vocabulary, and clear structure. Documents shall be tested against an appropriate readability standard (e.g., [UK: Plain English Campaign; US: Federal Plain Language Guidelines; EU: Clarity International]) and shall achieve a reading age accessible to the general public (Flesch-Kincaid Grade 8 or equivalent). This does not remove the requirement for technical accuracy in legal documents, but where technical language is unavoidable, a plain language summary must accompany it."
        - separator [ref=e169]
        - heading "Aspirational Standards" [level=3] [ref=e170]
        - blockquote [ref=e171]:
          - paragraph [ref=e172]:
            - strong [ref=e173]: WCAG 2.2 Level AAA for High-Impact Services
            - text: Services providing access to health information, emergency services, benefits, voting, and legal aid should aim for WCAG 2.2 Level AAA where technically feasible. Level AAA should not be required across the board (many Level AAA criteria are not achievable for all content types), but the highest-stakes services should strive for the most inclusive standard possible.
        - separator [ref=e174]
        - blockquote [ref=e175]:
          - paragraph [ref=e176]:
            - strong [ref=e177]: Proactive Monitoring and Public Dashboard
            - text: Jurisdictions with large numbers of public digital services should establish a central accessibility monitoring programme with publicly available results — including which services are tested, when, and with what results. Modelled on the UK GDS accessibility monitoring programme and planned EU monitoring frameworks.
        - separator [ref=e178]
        - blockquote [ref=e179]:
          - paragraph [ref=e180]:
            - strong [ref=e181]: Accessibility in AI and Automated Systems
            - text: AI-generated content, chatbots, and automated decision interfaces used in public services shall meet the same accessibility standards as non-AI content. AI systems shall not reduce accessibility of services by replacing accessible human-operated alternatives without providing an equally accessible automated interface.
        - separator [ref=e182]
        - heading "Standards Cross-Reference" [level=3] [ref=e183]
        - table [ref=e184]:
          - rowgroup [ref=e185]:
            - row "Standard Body Version Notes" [ref=e186]:
              - columnheader "Standard" [ref=e187]
              - columnheader "Body" [ref=e188]
              - columnheader "Version" [ref=e189]
              - columnheader "Notes" [ref=e190]
          - rowgroup [ref=e191]:
            - row "WCAG W3C 2.2 (2023) Web content baseline" [ref=e192]:
              - cell "WCAG" [ref=e193]
              - cell "W3C" [ref=e194]
              - cell "2.2 (2023)" [ref=e195]
              - cell "Web content baseline" [ref=e196]
            - row "EN 301 549 ETSI v3.2.1 (2021); v4.1 in development EU harmonised ICT standard" [ref=e197]:
              - cell "EN 301 549" [ref=e198]
              - cell "ETSI" [ref=e199]
              - cell "v3.2.1 (2021); v4.1 in development" [ref=e200]
              - cell "EU harmonised ICT standard" [ref=e201]
            - row "Section 508 US Access Board 2017 US federal requirement" [ref=e202]:
              - cell "Section 508" [ref=e203]
              - cell "US Access Board" [ref=e204]
              - cell "2017" [ref=e205]
              - cell "US federal requirement" [ref=e206]
            - row "ADA Title II US DOJ 2024 rule WCAG 2.1 AA for US state/local gov" [ref=e207]:
              - cell "ADA Title II" [ref=e208]
              - cell "US DOJ" [ref=e209]
              - cell "2024 rule" [ref=e210]
              - cell "WCAG 2.1 AA for US state/local gov" [ref=e211]
            - row "EU WAD EU 2016/2102 Public sector websites and apps" [ref=e212]:
              - cell "EU WAD" [ref=e213]
              - cell "EU" [ref=e214]
              - cell "2016/2102" [ref=e215]
              - cell "Public sector websites and apps" [ref=e216]
            - row "EU EAA EU 2019/882 Private sector, in force June 2025" [ref=e217]:
              - cell "EU EAA" [ref=e218]
              - cell "EU" [ref=e219]
              - cell "2019/882" [ref=e220]
              - cell "Private sector, in force June 2025" [ref=e221]
            - row "ISO 30071-1 ISO 2019 Accessibility in product development" [ref=e222]:
              - cell "ISO 30071-1" [ref=e223]
              - cell "ISO" [ref=e224]
              - cell "2019" [ref=e225]
              - cell "Accessibility in product development" [ref=e226]
        - separator [ref=e227]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e228]'
        - heading "Procurement Requirements" [level=3] [ref=e229]
        - blockquote [ref=e230]:
          - paragraph [ref=e231]:
            - strong [ref=e232]: Accessibility Procurement Clause
            - text: "The following shall be included in all solicitations for ICT products and services: “Accessibility conformance: The vendor shall demonstrate conformance of all deliverables with [WCAG 2.2 AA / EN 301 549 current version / Section 508] prior to contract award by providing: (1) an Accessibility Conformance Report (ACR/VPAT) completed against the applicable standard within the previous [12] months; (2) methodology documentation including assistive technologies tested and testing personnel qualifications; (3) a remediation plan for any identified non-conformances with binding completion dates. Failure to achieve and maintain conformance throughout the contract term shall constitute a material breach. The agency reserves the right to require independent verification of claimed conformance at the vendor’s expense.”"
        - separator [ref=e233]
        - heading "Transition and Timeline" [level=3] [ref=e234]
        - table [ref=e235]:
          - rowgroup [ref=e236]:
            - row "Milestone Timeframe from policy adoption" [ref=e237]:
              - columnheader "Milestone" [ref=e238]
              - columnheader "Timeframe from policy adoption" [ref=e239]
          - rowgroup [ref=e240]:
            - row "Accessibility statement published for all public services 6 months" [ref=e241]:
              - cell "Accessibility statement published for all public services" [ref=e242]
              - cell "6 months" [ref=e243]
            - row "Accessibility audit of top 20 most-used public services 12 months" [ref=e244]:
              - cell "Accessibility audit of top 20 most-used public services" [ref=e245]
              - cell "12 months" [ref=e246]
            - row "WCAG 2.2 AA required in all new procurement Immediate" [ref=e247]:
              - cell "WCAG 2.2 AA required in all new procurement" [ref=e248]
              - cell "Immediate" [ref=e249]
            - row "Section 508 / EN 301 549 conformance required in all new ICT Immediate" [ref=e250]:
              - cell "Section 508 / EN 301 549 conformance required in all new ICT" [ref=e251]
              - cell "Immediate" [ref=e252]
            - 'row "Existing high-priority services: full conformance 24 months" [ref=e253]':
              - 'cell "Existing high-priority services: full conformance" [ref=e254]'
              - cell "24 months" [ref=e255]
            - 'row "Existing lower-priority services: full conformance 48 months" [ref=e256]':
              - 'cell "Existing lower-priority services: full conformance" [ref=e257]'
              - cell "48 months" [ref=e258]
            - row "Real user testing programme established 18 months" [ref=e259]:
              - cell "Real user testing programme established" [ref=e260]
              - cell "18 months" [ref=e261]
            - row "Central monitoring dashboard launched 36 months" [ref=e262]:
              - cell "Central monitoring dashboard launched" [ref=e263]
              - cell "36 months" [ref=e264]
        - heading "Reporting and Transparency" [level=3] [ref=e265]
        - blockquote [ref=e266]:
          - paragraph [ref=e267]:
            - strong [ref=e268]: Annual Accessibility Report
            - text: "Public bodies shall publish an annual accessibility report covering: (a) number of public-facing digital services and their conformance status; (b) number and nature of accessibility complaints received and resolved; (c) ICT procurement contracts awarded with accessibility conformance documentation; (d) accessibility training completed by procurement and development staff; (e) budget allocated to accessibility remediation; and (f) plan for the coming year. Reports shall be publicly accessible and machine-readable."
        - heading "Enforcement" [level=3] [ref=e269]
        - blockquote [ref=e270]:
          - paragraph [ref=e271]:
            - strong [ref=e272]: Enforcement and Complaint Mechanism
            - text: "Any person may submit a complaint about an inaccessible public digital service to [designated enforcement body]. Complaints shall be acknowledged within [10] days and resolved within [90] days. If the complaint is upheld, the public body shall provide: (a) an accessible alternative immediately; (b) a remediation plan within [30] days; and (c) confirmation of full remediation within [12] months. Persistent non-compliance shall be subject to administrative penalties and public reporting."
        - blockquote [ref=e273]:
          - paragraph [ref=e274]:
            - strong [ref=e275]: Civil Society Standing
            - text: Disability organisations and civil society groups shall have standing to bring accessibility enforcement complaints on behalf of affected individuals, without requiring named complainants. This addresses the practical barrier that many disabled people are not in a position to bring individual complaints.
        - separator [ref=e276]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e277]'
        - heading "Oversight Body" [level=3] [ref=e278]
        - blockquote [ref=e279]:
          - paragraph [ref=e280]:
            - strong [ref=e281]: Senior Accessibility Officer
            - text: Each public body with responsibility for digital services shall designate a Senior Accessibility Officer at a level with authority to direct procurement and product decisions. The role shall have a direct reporting line to the head of the organisation and shall not be subordinate to IT procurement or communications functions whose compliance they are responsible for auditing.
        - blockquote [ref=e282]:
          - paragraph [ref=e283]:
            - strong [ref=e284]: Designated Enforcement Authority
            - text: "[National / regional regulatory body] shall be designated as the enforcement authority for this policy. The authority shall: publish annual monitoring reports; investigate complaints; issue binding compliance notices; and have power to impose administrative penalties for persistent non-compliance. The authority shall consult with disability organisations in setting enforcement priorities."
        - heading "Community Representation" [level=3] [ref=e285]
        - blockquote [ref=e286]:
          - paragraph [ref=e287]:
            - strong [ref=e288]: Disability Advisory Panel
            - text: "Any public body operating digital services at scale shall establish or participate in a Disability Advisory Panel that includes: (a) people with a range of disabilities who use assistive technologies in their daily lives; (b) representatives of disability organisations; and (c) accessibility professionals. The panel shall have the right to: review accessibility statements and audit results; make recommendations on remediation priorities; and submit formal observations on proposed procurements. Panel members shall be compensated for their time."
        - heading "Audit and Review" [level=3] [ref=e289]
        - blockquote [ref=e290]:
          - paragraph [ref=e291]:
            - strong [ref=e292]: Independent Accessibility Audit
            - text: High-priority public digital services shall undergo independent accessibility audit by a qualified third party at least every [two] years. Audit methodology shall include automated testing, manual evaluation, and user testing with disabled participants. Audit reports shall be published in full.
        - blockquote [ref=e293]:
          - paragraph [ref=e294]:
            - strong [ref=e295]: Policy Review
            - text: This policy shall be reviewed every [three] years to assess alignment with current WCAG versions, emerging technologies, and gaps identified through the complaint and monitoring process.
        - separator [ref=e296]
        - heading "Real-World Examples" [level=2] [ref=e297]
        - heading "EU Web Accessibility Directive (WAD) — European Union" [level=3] [ref=e298]
        - paragraph [ref=e299]:
          - strong [ref=e300]: "In force:"
          - text: 2016 (Directive 2016/2102), national transposition by 2018
          - strong [ref=e301]: "Covers:"
          - text: Public sector websites and mobile applications
          - strong [ref=e302]: "Standard required:"
          - text: EN 301 549 (incorporates WCAG 2.1 AA)
          - strong [ref=e303]: "Key features:"
          - text: Mandatory accessibility statements; monitoring and reporting by member states; feedback mechanism for users; EC publishes comparative reporting
          - strong [ref=e304]: "What’s worked:"
          - text: Created a consistent legal baseline across 27 member states; standardised accessibility statements; EU monitoring data now available
          - strong [ref=e305]: "Critique:"
          - text: Enforcement has been uneven; some member states late to transpose; monitoring methodology relies heavily on automated testing; the WAD does not cover most private sector services
        - separator [ref=e306]
        - heading "EU European Accessibility Act (EAA) — European Union" [level=3] [ref=e307]
        - paragraph [ref=e308]:
          - strong [ref=e309]: "In force:"
          - text: June 28, 2025 (with some national variation in enforcement start)
          - strong [ref=e310]: "Covers:"
          - text: "Private sector products and services including: e-commerce, banking, e-books, computers, phones, ATMs, ticketing machines, TV equipment, digital TV services, e-government services"
          - strong [ref=e311]: "Standard:"
          - text: Functional accessibility requirements; EN 301 549 used as presumptive technical standard
          - strong [ref=e312]: "Key features:"
          - text: First EU law to impose accessibility requirements on the private sector at scale; covers product design, not just web content; harmonised across member states
          - strong [ref=e313]: "Critique:"
          - text: Enforcement is member state-led, creating uneven implementation; harmonised standard (EN 301 549 v4) delayed (expected Q3 2026 Official Journal publication); many companies still non-compliant; some member states started infringement proceedings for failing to transpose correctly
        - separator [ref=e314]
        - heading "Section 508 — United States Federal Government" [level=3] [ref=e315]
        - paragraph [ref=e316]:
          - strong [ref=e317]: "In force:"
          - text: 1998 (amended 2017)
          - strong [ref=e318]: "Covers:"
          - text: Federal agencies’ ICT — websites, software, hardware, multimedia, documents
          - strong [ref=e319]: "Standard:"
          - text: "WCAG 2.0 AA (2017 refresh); note: not yet updated to WCAG 2.1 or 2.2"
          - strong [ref=e320]: "Key features:"
          - text: Applies to procurement and direct development; requires vendors to provide ACR/VPAT; US Access Board develops and maintains technical standards
          - strong [ref=e321]: "What the 2025 assessment found:"
        - list [ref=e322]:
          - listitem [ref=e323]:
            - text: Only
            - strong [ref=e324]: 23%
            - text: of top-visited public federal websites fully conform
          - listitem [ref=e325]:
            - text: Only
            - strong [ref=e326]: 16 of 212 agencies
            - text: (27%) require mandatory Section 508 training
          - listitem [ref=e327]:
            - strong [ref=e328]: 46%
            - text: of agencies sometimes or never verify accessibility of ICT they procure
          - listitem [ref=e329]:
            - text: "Conformance average:"
            - strong [ref=e330]: 1.96 out of 5
          - listitem [ref=e331]:
            - text: "Acquisition/procurement remains the #1 implementation gap"
            - strong [ref=e332]: "Lesson for model policy:"
            - text: Legal requirement without enforcement, mandatory training, and procurement verification produces ~25% conformance after 27 years. Enforcement and procurement are not optional.
        - separator [ref=e333]
        - heading "UK GDS Accessibility Monitoring — United Kingdom" [level=3] [ref=e334]
        - paragraph [ref=e335]:
          - strong [ref=e336]: "In force:"
          - text: 2018 (Public Sector Bodies Accessibility Regulations)
          - strong [ref=e337]: "Covers:"
          - text: Public sector websites and apps
          - strong [ref=e338]: "Standard:"
          - text: WCAG 2.1 AA
          - strong [ref=e339]: "Key features:"
          - text: Government Digital Service (GDS) conducts regular monitoring of public sector websites; publishes results publicly; technical guidance is extensive and freely available
          - strong [ref=e340]: "What’s worked:"
          - text: GDS’s public monitoring dashboard creates reputational accountability; detailed technical guidance reduces compliance ambiguity; strong culture of accessibility within the civil service digital community
          - strong [ref=e341]: "Critique:"
          - text: Enforcement actions have been rare; monitoring focuses on technical conformance but limited user testing; private sector remains largely unregulated
        - separator [ref=e342]
        - heading "Colorado HB21-1110 — United States (State)" [level=3] [ref=e343]
        - paragraph [ref=e344]:
          - strong [ref=e345]: "Enacted:"
          - text: "2021"
          - strong [ref=e346]: "Covers:"
          - text: State agencies and local government entities including K-12 institutions
          - strong [ref=e347]: "Standard:"
          - text: WCAG 2.1 AA
          - strong [ref=e348]: "Distinctive feature:"
          - text: Makes failure to meet the standard a
          - strong [ref=e349]: civil rights violation
          - text: — giving individuals and organisations standing to bring civil rights complaints, not just administrative complaints
          - strong [ref=e350]: "Why this matters:"
          - text: Most accessibility laws create administrative obligations. Colorado’s approach creates civil rights standing, which is materially stronger and aligns with the ADA’s underlying civil rights framework.
        - separator [ref=e351]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e352]
        - list [ref=e353]:
          - listitem [ref=e354]:
            - strong [ref=e355]: WCAG 3.0 transition
            - text: — WCAG 3.0 is under development and will introduce a fundamentally different conformance model (outcome-based rather than criterion-based). This model policy will need significant revision when WCAG 3.0 is finalised.
          - listitem [ref=e356]:
            - strong [ref=e357]: Cognitive and neurological accessibility
            - text: — Current WCAG standards are weakest in addressing cognitive accessibility. Plain language and the COGA (Cognitive Accessibility Guidance) supplemental documents address some of this gap but are not yet normative requirements.
          - listitem [ref=e358]:
            - strong [ref=e359]: AI-generated content
            - text: — The accessibility of AI-generated content (images, text, video) is an emerging area not yet fully addressed by WCAG or EN 301 549. AI image generation, for example, rarely produces adequate alt text or structured information.
          - listitem [ref=e360]:
            - strong [ref=e361]: Third-party components
            - text: — Many accessibility failures come from third-party scripts, widgets, and embedded content (maps, video players, payment forms) that organisations have limited control over. Model language for third-party accessibility responsibility needs further development.
          - listitem [ref=e362]:
            - strong [ref=e363]: Global South context
            - text: — This model draws heavily on EU and US frameworks. Jurisdictions without established regulatory infrastructure face different implementation challenges. UNCRPD Article 9 on accessibility provides international normative grounding, but capacity support is needed.
        - separator [ref=e364]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e365]
        - table [ref=e366]:
          - rowgroup [ref=e367]:
            - row "Related Domain Relationship" [ref=e368]:
              - columnheader "Related Domain" [ref=e369]
              - columnheader "Relationship" [ref=e370]
          - rowgroup [ref=e371]:
            - row "AI Adoption AI systems in public services must be accessible; AI-generated content needs accessibility standards" [ref=e372]:
              - cell "AI Adoption" [ref=e373]
              - cell "AI systems in public services must be accessible; AI-generated content needs accessibility standards" [ref=e374]
            - row "Smart Cities & Privacy Smart city interfaces (kiosks, apps) must meet same accessibility standards as other public digital services" [ref=e375]:
              - cell "Smart Cities & Privacy" [ref=e376]
              - cell "Smart city interfaces (kiosks, apps) must meet same accessibility standards as other public digital services" [ref=e377]
            - row "Algorithmic Accountability Explainability of automated decisions must be accessible — not just technically available" [ref=e378]:
              - cell "Algorithmic Accountability" [ref=e379]
              - cell "Explainability of automated decisions must be accessible — not just technically available" [ref=e380]
            - row "Open Source in Government Open source civic tech must include accessibility in its contribution standards" [ref=e381]:
              - cell "Open Source in Government" [ref=e382]
              - cell "Open source civic tech must include accessibility in its contribution standards" [ref=e383]
            - row "Children & Technology Age-appropriate design must include cognitive and motor accessibility for children with disabilities" [ref=e384]:
              - cell "Children & Technology" [ref=e385]
              - cell "Age-appropriate design must include cognitive and motor accessibility for children with disabilities" [ref=e386]
        - separator [ref=e387]
        - heading "Glossary" [level=2] [ref=e388]
        - paragraph [ref=e389]:
          - strong [ref=e390]: "WCAG (Web Content Accessibility Guidelines):"
          - text: "Technical standard published by the W3C specifying how to make web content accessible to people with disabilities. Current version: 2.2 (2023). Organised into four principles (Perceivable, Operable, Understandable, Robust) and three levels (A, AA, AAA)."
        - paragraph [ref=e391]:
          - strong [ref=e392]: "EN 301 549:"
          - text: Harmonised European Standard for ICT accessibility. Covers hardware, software, websites, documents, and multimedia. Developed by ETSI. Used as the technical reference for the EU WAD and EAA.
        - paragraph [ref=e393]:
          - strong [ref=e394]: "ACR/VPAT (Accessibility Conformance Report / Voluntary Product Accessibility Template):"
          - text: A document, typically provided by a vendor, that maps a product’s features against accessibility standard requirements and notes conformance level for each. Required for US federal procurement.
        - paragraph [ref=e395]:
          - strong [ref=e396]: "Assistive Technology:"
          - text: Hardware or software that enables people with disabilities to use digital systems — including screen readers (e.g., JAWS, NVDA, VoiceOver), magnification software, switch access devices, alternative pointing devices, and voice recognition systems.
        - paragraph [ref=e397]:
          - strong [ref=e398]: "Section 508:"
          - text: Section 508 of the Rehabilitation Act (US), as amended in 2017. Requires US federal agencies’ ICT to be accessible. The ICT accessibility standards are developed by the US Access Board.
        - paragraph [ref=e399]:
          - strong [ref=e400]: "WAD (Web Accessibility Directive):"
          - text: EU Directive 2016/2102 requiring public sector websites and mobile applications in EU member states to meet EN 301 549 (WCAG 2.1 AA). In force since 2018.
        - paragraph [ref=e401]:
          - strong [ref=e402]: "EAA (European Accessibility Act):"
          - text: EU Directive 2019/882, in force June 2025, requiring accessibility of a broad range of private sector products and services across the EU. First EU law to extend accessibility requirements to the private sector at scale.
        - paragraph [ref=e403]:
          - strong [ref=e404]: "Plain Language:"
          - text: Writing that is clear, concise, and appropriate to the audience’s reading level. Not a technical writing style — a communication principle. Required under the US Plain Writing Act for federal agencies.
        - separator [ref=e405]
        - heading "Changelog" [level=2] [ref=e406]
        - table [ref=e407]:
          - rowgroup [ref=e408]:
            - row "Version Date Summary" [ref=e409]:
              - columnheader "Version" [ref=e410]
              - columnheader "Date" [ref=e411]
              - columnheader "Summary" [ref=e412]
          - rowgroup [ref=e413]:
            - row "0.1 2026-04-04 Initial draft, drawing on WAD, EAA, Section 508 2025 assessment, WCAG 2.2" [ref=e414]:
              - cell "0.1" [ref=e415]
              - cell "2026-04-04" [ref=e416]
              - cell "Initial draft, drawing on WAD, EAA, Section 508 2025 assessment, WCAG 2.2" [ref=e417]
      - link "✏️ Edit this policy on GitHub" [ref=e418] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/accessibility/full-model.md
  - contentinfo [ref=e419]:
    - generic [ref=e420]:
      - generic [ref=e421]:
        - heading "Open Digital Policies" [level=3] [ref=e422]
        - paragraph [ref=e423]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e424]:
        - heading "Policy Domains" [level=3] [ref=e425]
        - list [ref=e426]:
          - listitem [ref=e427]:
            - link "Who Pays for AI's Power Bill?" [ref=e428] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e429]:
            - link "Digital Services That Work for Everyone" [ref=e430] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e431]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e432] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e433]:
            - link "Public Money, Public Code" [ref=e434] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e435]:
            - link "AI That Works For You, Not On You" [ref=e436] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e437]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e438] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e439]:
            - link "A Greener Web" [ref=e440] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e441]:
            - link "Your City Is Watching You" [ref=e442] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e443]:
            - link "Whose Internet Is It?" [ref=e444] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e445]:
            - link "Technology That's Safe for Kids" [ref=e446] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e447]:
            - link "Who Decides What You Can Say Online?" [ref=e448] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e449]:
            - link "Digital Infrastructure for Everyone" [ref=e450] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e451]:
        - heading "Resources" [level=3] [ref=e452]
        - list [ref=e453]:
          - listitem [ref=e454]:
            - link "Explore all domains" [ref=e455] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e456]:
            - link "Adoptions tracker" [ref=e457] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e458]:
            - link "Search" [ref=e459] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e460]:
            - link "About this project" [ref=e461] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e462]:
            - link "How to contribute" [ref=e463] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e464]:
            - link "Glossary" [ref=e465] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e466]:
        - heading "Community" [level=3] [ref=e467]
        - list [ref=e468]:
          - listitem [ref=e469]:
            - link "GitHub repository" [ref=e470] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e471]:
            - link "Open an issue" [ref=e472] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e473]:
            - link "Propose a domain" [ref=e474] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e475]:
            - link "Report an adoption" [ref=e476] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e477]:
      - generic [ref=e478]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e479] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e480]:
        - text: Maintained by
        - link "the ODP community" [ref=e481] [cursor=pointer]:
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