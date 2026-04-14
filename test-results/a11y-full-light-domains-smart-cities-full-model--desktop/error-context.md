# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/smart-cities/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/smart-cities/full-model/ [light]:

[CRITICAL] label: Ensure every form element has a label
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled">

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
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\">",
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
      - heading "Your City Is Watching You" [level=1] [ref=e29]
      - paragraph [ref=e30]: Smart Cities & Privacy
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
        - heading "Smart Cities & Privacy — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-05
            - strong [ref=e57]: "Maintainers:"
            - text: Open Digital Policies community
            - strong [ref=e58]: "Related domains:"
            - link "Digital Accessibility" [ref=e59] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: ","
            - link "AI Adoption" [ref=e60] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - text: ","
            - link "Algorithmic Accountability" [ref=e61] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: ","
            - link "Digital Sovereignty" [ref=e62] [cursor=pointer]:
              - /url: ../../digital-sovereignty/full-model/
        - separator [ref=e63]
        - heading "Overview" [level=2] [ref=e64]
        - paragraph [ref=e65]: “Smart city” technology — cameras, environmental sensors, connected street furniture, facial recognition, predictive policing tools, mobility tracking, and automated infrastructure management — is being deployed in cities worldwide, often faster than governance frameworks can respond. The technology can genuinely improve public services, reduce energy consumption, and make streets safer. It can also enable mass surveillance at a scale and intimacy previously impossible, often with minimal democratic deliberation, weak data protections, and no meaningful community consent.
        - paragraph [ref=e66]: The defining challenge of smart city governance is not whether to use technology, but under what conditions. Communities have a right to understand what data is being collected about them in public spaces, who has access to it, how long it is kept, what decisions it informs, and how they can challenge those decisions. Surveillance infrastructure built for one purpose — traffic management, say — routinely expands to other uses. Purpose limitation and community consent are not obstacles to smart city innovation; they are the conditions that make it trustworthy.
        - heading "The Core Tension" [level=3] [ref=e67]
        - paragraph [ref=e68]: We want cities that work better — with less energy, safer streets, faster emergency response, more efficient transit — without creating surveillance infrastructure that undermines the right to move freely through public space without being tracked, scored, or profiled.
        - heading "Scope" [level=3] [ref=e69]
        - list [ref=e70]:
          - listitem [ref=e71]:
            - checkbox [checked] [disabled] [ref=e72]
            - text: Municipal / local government
          - listitem [ref=e73]:
            - checkbox [checked] [disabled] [ref=e74]
            - text: Regional / state / provincial government
          - listitem [ref=e75]:
            - checkbox [disabled] [ref=e76]
            - text: National government (may adopt as framework for municipal guidance)
          - listitem [ref=e77]:
            - checkbox [checked] [disabled] [ref=e78]
            - text: Public sector procurement
          - listitem [ref=e79]:
            - checkbox [disabled] [ref=e80]
            - text: Regulated industry
          - listitem [ref=e81]:
            - checkbox [disabled] [ref=e82]
            - text: "Other:"
            - strong [ref=e83]: __
            - text: _____
        - separator [ref=e84]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e85]'
        - heading "Foundational Values" [level=3] [ref=e86]
        - paragraph [ref=e87]:
          - strong [ref=e88]: 1. Public Space Is Not a Surveillance Zone
          - text: The ability to move through public space without being tracked, identified, or profiled is fundamental to freedom of movement, freedom of assembly, and freedom of expression. Smart city technology must not convert public space into a panopticon. The default is the least intrusive means of achieving a legitimate public goal.
        - paragraph [ref=e89]:
          - strong [ref=e90]: 2. Data Minimisation as Design Requirement
          - text: Smart city systems must collect the minimum data necessary to achieve their stated purpose. Aggregated, anonymised, or ephemeral data is preferable to individual-level, identified, or persistent data. Systems that cannot achieve their purpose without collecting personal data must justify that necessity — not assume it.
        - paragraph [ref=e91]:
          - strong [ref=e92]: 3. Purpose Limitation Is Not Optional
          - text: Data collected for traffic management may not be repurposed for law enforcement. Data collected for environmental monitoring may not be combined with facial recognition databases. Purpose limitation must be enforced technically (through architecture) and legally (through procurement contracts), not just stated in policy.
        - paragraph [ref=e93]:
          - strong [ref=e94]: 4. Community Consent Is a Prerequisite, Not an Afterthought
          - text: Communities should not discover surveillance infrastructure after it has been installed. Meaningful community engagement — including with communities most likely to be harmed by surveillance — must occur before deployment. Engagement is not notification; it requires genuine deliberation and the possibility that the community says no.
        - paragraph [ref=e95]:
          - strong [ref=e96]: "5. Proportionality: The Benefit Must Be Real and the Data Must Be Necessary"
          - text: Smart city deployments must demonstrate that the claimed benefit is real, that data collection is necessary to achieve it, and that less intrusive alternatives were genuinely considered. “Improving efficiency” is not a sufficient justification for collecting biometric or location data about residents.
        - paragraph [ref=e97]:
          - strong [ref=e98]: 6. Special Scrutiny for Biometric and Location Data
          - text: Biometric data (facial geometry, gait, voice) and persistent location data are inherently sensitive. They reveal identity, social connections, religious practice, political affiliation, and intimate relationships. Their collection requires heightened justification, strict purpose limitation, and should be presumptively prohibited in the absence of a compelling public interest that cannot be achieved otherwise.
        - paragraph [ref=e99]:
          - strong [ref=e100]: 7. Accessibility and Equity Must Be Built In
          - text: Smart city technology frequently fails disabled people, older adults, and low-income residents — or is deployed first in affluent neighbourhoods while disadvantaged communities bear the environmental sensors but not the services. Equity impact assessment must precede deployment.
        - heading "Equity Considerations" [level=3] [ref=e101]
        - list [ref=e102]:
          - listitem [ref=e103]:
            - strong [ref=e104]: Communities of colour
            - text: — Facial recognition has documented higher error rates for people with darker skin tones; predictive policing systems encode historical patterns of over-policing. Communities of colour bear disproportionate risk from surveillance technology and deserve explicit protection.
          - listitem [ref=e105]:
            - strong [ref=e106]: Migrants and undocumented residents
            - text: — Smart city data can become a tool for immigration enforcement beyond its stated purpose. Communities with undocumented residents require particular attention to purpose limitation and data-sharing restrictions.
          - listitem [ref=e107]:
            - strong [ref=e108]: People with disabilities
            - text: — Smart city technology may exclude disabled people through inaccessible interfaces or may surveil them more intensively through accessibility-related infrastructure. Accessibility must be a core design requirement.
          - listitem [ref=e109]:
            - strong [ref=e110]: Low-income communities
            - text: — Smart city pilots are frequently conducted in low-income communities without their meaningful consent, treating residents as subjects rather than beneficiaries.
          - listitem [ref=e111]:
            - strong [ref=e112]: Activists and journalists
            - text: — Location tracking and facial recognition can chill the exercise of rights to protest, assembly, and press freedom even without targeted enforcement.
        - heading "Environmental Considerations" [level=3] [ref=e113]
        - paragraph [ref=e114]:
          - text: Smart city sensor networks, compute infrastructure, and data storage have material energy and hardware footprints. Connected streetlights and adaptive traffic signals can reduce energy consumption — but server infrastructure, always-on sensors, and AI processing can offset those gains. Smart city procurements must include lifecycle energy assessment, hardware longevity requirements, and e-waste obligations. See
          - link "Data Centers model" [ref=e115] [cursor=pointer]:
            - /url: ../../data-centers/full-model/
          - text: .
        - separator [ref=e116]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e117]'
        - heading "Mandatory Standards" [level=3] [ref=e118]
        - blockquote [ref=e119]:
          - paragraph [ref=e120]:
            - strong [ref=e121]: "Standard 1: Prohibited Smart City Applications"
            - text: "The following smart city applications are prohibited regardless of claimed efficiency or safety benefits:"
          - paragraph [ref=e122]: (a) Continuous real-time facial recognition or biometric identification in publicly accessible spaces, except for the investigation of specific serious crimes with prior judicial authorisation, strict time and geographic limits, and mandatory reporting to the oversight body;
          - paragraph [ref=e123]: (b) Persistent tracking of individuals’ movements through public space without their knowledge or meaningful consent (including aggregated tracking that can be de-anonymised);
          - paragraph [ref=e124]: (c) Social scoring or behaviour prediction systems that affect access to public spaces, services, or rights;
          - paragraph [ref=e125]: (d) Emotion recognition in public spaces for any purpose;
          - paragraph [ref=e126]: (e) Predictive policing systems that generate individual or area-level crime predictions used to determine police deployment or individual stops;
          - paragraph [ref=e127]: (f) Automated licence plate recognition data shared with non-law-enforcement agencies or retained for more than [30] days without judicial authorisation;
          - paragraph [ref=e128]: (g) Data sharing from city systems with federal immigration enforcement agencies without judicial process.
        - paragraph [ref=e129]:
          - emphasis [ref=e130]: "Rationale: EU AI Act Article 5 prohibits (a), (c), (d), and forms of (e). San Francisco, Oakland, Boston, and other US cities have enacted facial recognition bans for city departments. Portland OR enacted the most comprehensive local facial recognition ban in the US (2020), covering both city agencies and private entities in public accommodations. NYC Local Law 144 (2021) addresses automated employment tools. The prohibited list above draws on these enacted models."
        - paragraph [ref=e131]:
          - emphasis [ref=e132]:
            - text: "Reference: EU AI Act Article 5;"
            - link "San Francisco Ordinance 103-19" [ref=e133] [cursor=pointer]:
              - /url: https://sfbos.org/sites/default/files/o0103-19.pdf
            - text: ;
            - link "Portland OR Ordinance 190114" [ref=e134] [cursor=pointer]:
              - /url: https://www.portland.gov/sites/default/files/2020/190114.pdf
            - text: ;
            - link "ACLU Smart Cities Principles" [ref=e135] [cursor=pointer]:
              - /url: https://www.aclu.org/report/dawn-robot-surveillance
        - separator [ref=e136]
        - blockquote [ref=e137]:
          - paragraph [ref=e138]:
            - strong [ref=e139]: "Standard 2: Smart City Data Inventory and Register"
            - text: "Prior to deploying any smart city technology, the procuring body must publish a Smart City Data Register entry that includes:"
          - paragraph [ref=e140]: (a) The technology type, vendor, and system description;
          - paragraph [ref=e141]: (b) The specific data collected, including whether it is biometric, location-based, or individually identifiable;
          - paragraph [ref=e142]: (c) The stated purpose and the specific public benefit to be achieved;
          - paragraph [ref=e143]: (d) The legal basis for data collection;
          - paragraph [ref=e144]: (e) Data retention period and deletion schedule;
          - paragraph [ref=e145]: "(f) Access controls: who within the city may access the data, and under what conditions;"
          - paragraph [ref=e146]: "(g) Data sharing: a list of external agencies or bodies with any access to the data, including the legal basis for sharing;"
          - paragraph [ref=e147]: (h) A plain-language community summary accessible to residents without technical or legal background.
          - paragraph [ref=e148]: The register must be updated within 30 days of any material change and must be publicly accessible online.
        - paragraph [ref=e149]:
          - emphasis [ref=e150]: "Rationale: Seattle’s Surveillance Ordinance (CB 119501, 2017) requires a Surveillance Impact Report before acquiring surveillance technology and annual reviews. Nashville, Nashville, Durham, and Nashville have similar ordinances. The register requirement here extends to all smart city data collection, not just technologies classified as “surveillance.”"
        - paragraph [ref=e151]:
          - emphasis [ref=e152]:
            - text: "Reference:"
            - link "Seattle Surveillance Ordinance" [ref=e153] [cursor=pointer]:
              - /url: https://seattle.legistar.com/LegislationDetail.aspx?ID=3330606
            - text: ;
            - link "ACLU Community Control Over Police Surveillance (CCOPS) model ordinance" [ref=e154] [cursor=pointer]:
              - /url: https://www.aclu.org/legislative-model-government-surveillance
        - separator [ref=e155]
        - blockquote [ref=e156]:
          - paragraph [ref=e157]:
            - strong [ref=e158]: "Standard 3: Mandatory Community Engagement Before Deployment"
            - text: "Before deploying smart city technology that collects personal, location, or biometric data, the procuring body must:"
          - paragraph [ref=e159]: (a) Conduct a minimum [60]-day public comment period with accessible materials in the primary languages of the affected community;
          - paragraph [ref=e160]: (b) Hold at least [two] public hearings — including at least one in the affected neighbourhood during evening hours accessible to working residents;
          - paragraph [ref=e161]: (c) Conduct targeted engagement with communities most likely to be disproportionately affected;
          - paragraph [ref=e162]: (d) Publish a community engagement summary and explain how input was considered in the decision;
          - paragraph [ref=e163]: "(e) For biometric or persistent location data systems: require explicit [council / board / assembly] approval, not delegated procurement authority."
        - separator [ref=e164]
        - blockquote [ref=e165]:
          - paragraph [ref=e166]:
            - strong [ref=e167]: "Standard 4: Data Retention and Deletion"
            - text: "Smart city systems shall implement technical controls enforcing the following retention limits:"
          - paragraph [ref=e168]: "(a) Environmental and aggregated data (traffic counts, air quality, pedestrian density): [5] years maximum;"
          - paragraph [ref=e169]: "(b) Individually identifiable location data: [72] hours unless subject to active investigation with documented basis;"
          - paragraph [ref=e170]: "(c) Biometric data: [24] hours unless subject to active investigation with prior judicial authorisation;"
          - paragraph [ref=e171]: "(d) Incident-related data (emergency response, reported crime): [3] years maximum;"
          - paragraph [ref=e172]: (e) All data must be deleted within the applicable period with cryptographic verification of deletion available to the oversight body upon request.
        - separator [ref=e173]
        - blockquote [ref=e174]:
          - paragraph [ref=e175]:
            - strong [ref=e176]: "Standard 5: Procurement Requirements"
            - text: "Smart city technology procurement shall require:"
          - paragraph [ref=e177]: (a) The vendor to disclose all data flows, including to the vendor’s own systems, cloud infrastructure, and third parties;
          - paragraph [ref=e178]: (b) No data collected by city-procured technology may be accessed, retained, or analysed by the vendor without specific authorisation by the city and disclosure in the Data Register;
          - paragraph [ref=e179]: (c) Source code for systems making automated decisions about individuals must be available for audit by the city’s technical oversight body;
          - paragraph [ref=e180]: (d) Contracts must include a right to audit and a right to terminate without penalty if the system is found to violate this policy;
          - paragraph [ref=e181]: (e) Lifecycle energy consumption and hardware end-of-life obligations must be specified.
        - separator [ref=e182]
        - heading "Aspirational Standards" [level=3] [ref=e183]
        - blockquote [ref=e184]:
          - paragraph [ref=e185]:
            - strong [ref=e186]: "Aspirational Standard 1: Community Data Trusts"
            - text: Cities should explore governance models under which smart city data is held in a community data trust — a legal structure ensuring that the data is governed in the community’s interest, with elected or selected trustees, and that the data may only be used for purposes approved by the trust. Barcelona’s City Data Exchange and Amsterdam’s data governance work provide reference models.
        - blockquote [ref=e187]:
          - paragraph [ref=e188]:
            - strong [ref=e189]: "Aspirational Standard 2: Open Source Smart City Infrastructure"
            - text: Where cities develop or commission custom smart city software, they should release it as open source to enable peer city reuse, independent audit, and community scrutiny. See
            - link "Open Source in Government model" [ref=e190] [cursor=pointer]:
              - /url: ../../open-source-in-government/full-model/
            - text: .
        - separator [ref=e191]
        - heading "Standards Cross-Reference" [level=3] [ref=e192]
        - table [ref=e193]:
          - rowgroup [ref=e194]:
            - row "Standard Body Version Notes" [ref=e195]:
              - columnheader "Standard" [ref=e196]
              - columnheader "Body" [ref=e197]
              - columnheader "Version" [ref=e198]
              - columnheader "Notes" [ref=e199]
          - rowgroup [ref=e200]:
            - row "EU AI Act European Parliament 2024/1689 Prohibited biometric uses" [ref=e201]:
              - cell "EU AI Act" [ref=e202]
              - cell "European Parliament" [ref=e203]
              - cell "2024/1689" [ref=e204]
              - cell "Prohibited biometric uses" [ref=e205]
            - row "GDPR EU 2016/679 Data minimisation, purpose limitation, retention" [ref=e206]:
              - cell "GDPR" [ref=e207]
              - cell "EU" [ref=e208]
              - cell "2016/679" [ref=e209]
              - cell "Data minimisation, purpose limitation, retention" [ref=e210]
            - row "EU Data Governance Act EU 2022/868 Data sharing, data altruism, public data spaces" [ref=e211]:
              - cell "EU Data Governance Act" [ref=e212]
              - cell "EU" [ref=e213]
              - cell "2022/868" [ref=e214]
              - cell "Data sharing, data altruism, public data spaces" [ref=e215]
            - row "Seattle Surveillance Ordinance City of Seattle 2017 Surveillance Impact Report model" [ref=e216]:
              - cell "Seattle Surveillance Ordinance" [ref=e217]
              - cell "City of Seattle" [ref=e218]
              - cell "2017" [ref=e219]
              - cell "Surveillance Impact Report model" [ref=e220]
            - row "ACLU CCOPS Model ACLU 2021 Community control over surveillance technology" [ref=e221]:
              - cell "ACLU CCOPS Model" [ref=e222]
              - cell "ACLU" [ref=e223]
              - cell "2021" [ref=e224]
              - cell "Community control over surveillance technology" [ref=e225]
            - row "UN Special Rapporteur on Privacy UN HRC 2019, 2021 Biometric surveillance and privacy in public space" [ref=e226]:
              - cell "UN Special Rapporteur on Privacy" [ref=e227]
              - cell "UN HRC" [ref=e228]
              - cell "2019, 2021" [ref=e229]
              - cell "Biometric surveillance and privacy in public space" [ref=e230]
        - separator [ref=e231]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e232]'
        - heading "Procurement Requirements" [level=3] [ref=e233]
        - blockquote [ref=e234]:
          - paragraph [ref=e235]:
            - strong [ref=e236]: "Procurement Clause A: Privacy Impact Assessment"
            - text: A Privacy Impact Assessment (PIA) shall be completed and published before any smart city technology procurement. The PIA must assess risks under GDPR (or equivalent), identify data minimisation measures, document purpose limitation controls, and identify residual risks. The PIA must be reviewed by the designated privacy authority before procurement.
        - blockquote [ref=e237]:
          - paragraph [ref=e238]:
            - strong [ref=e239]: "Procurement Clause B: Algorithmic Accountability Integration"
            - text: Any smart city system that makes automated recommendations or decisions affecting individuals must comply with the
            - link "Algorithmic Accountability full model" [ref=e240] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: in addition to this policy.
        - blockquote [ref=e241]:
          - paragraph [ref=e242]:
            - strong [ref=e243]: "Procurement Clause C: Accessibility Requirement"
            - text: All resident-facing smart city interfaces — kiosks, apps, signage — must conform to WCAG 2.2 AA. This requirement applies to the full user journey, not only the digital interface. See
            - link "Digital Accessibility model" [ref=e244] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: .
        - separator [ref=e245]
        - heading "Transition and Timeline" [level=3] [ref=e246]
        - table [ref=e247]:
          - rowgroup [ref=e248]:
            - row "Milestone Timeframe from adoption" [ref=e249]:
              - columnheader "Milestone" [ref=e250]
              - columnheader "Timeframe from adoption" [ref=e251]
          - rowgroup [ref=e252]:
            - row "Smart City Data Register established 3 months" [ref=e253]:
              - cell "Smart City Data Register established" [ref=e254]
              - cell "3 months" [ref=e255]
            - row "Audit of existing smart city deployments against prohibited applications list 6 months" [ref=e256]:
              - cell "Audit of existing smart city deployments against prohibited applications list" [ref=e257]
              - cell "6 months" [ref=e258]
            - row "Community engagement protocol published 3 months" [ref=e259]:
              - cell "Community engagement protocol published" [ref=e260]
              - cell "3 months" [ref=e261]
            - row "All existing systems registered and compliant with data retention requirements 18 months" [ref=e262]:
              - cell "All existing systems registered and compliant with data retention requirements" [ref=e263]
              - cell "18 months" [ref=e264]
            - row "Prohibited systems decommissioned or replaced 24 months" [ref=e265]:
              - cell "Prohibited systems decommissioned or replaced" [ref=e266]
              - cell "24 months" [ref=e267]
            - row "Independent audit of Register completeness Annual" [ref=e268]:
              - cell "Independent audit of Register completeness" [ref=e269]
              - cell "Annual" [ref=e270]
        - heading "Enforcement" [level=3] [ref=e271]
        - blockquote [ref=e272]:
          - paragraph [ref=e273]:
            - strong [ref=e274]: Enforcement Clause
            - text: "The designated privacy or oversight body may: (a) inspect smart city deployments for Register completeness and accuracy; (b) order suspension of any system found to be in a prohibited category or operating outside its registered purposes; (c) impose administrative penalties for failure to register, false declarations, or prohibited data sharing; (d) receive complaints from residents, civil society, and journalists. Whistleblower protection applies to city employees who report non-compliant deployments."
        - separator [ref=e275]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e276]'
        - heading "Oversight Body" [level=3] [ref=e277]
        - blockquote [ref=e278]:
          - paragraph [ref=e279]:
            - strong [ref=e280]: Privacy and Surveillance Oversight Board
            - text: "The city shall establish or designate an independent Privacy and Surveillance Oversight Board with: technical expertise in data systems and surveillance technology; legal expertise in privacy, civil rights, and administrative law; and community representation including organisations representing communities most affected by surveillance. The Board must approve all biometric data collection and must review the Smart City Data Register annually. Board members shall not hold financial interests in smart city vendors."
        - heading "Community Representation" [level=3] [ref=e281]
        - blockquote [ref=e282]:
          - paragraph [ref=e283]:
            - strong [ref=e284]: Community Advisory Committee
            - text: "The Oversight Board shall be supported by a Community Advisory Committee with reserved seats for: civil liberties organisations; disability advocacy groups; representatives from communities of colour; immigrant and refugee advocacy organisations; housing and tenant rights groups; and neighbourhood associations from areas with high smart city deployment density. The Committee shall have standing to initiate reviews of registered systems and to refer potential violations to the Board."
        - heading "Audit and Review" [level=3] [ref=e285]
        - blockquote [ref=e286]:
          - paragraph [ref=e287]:
            - strong [ref=e288]: Annual Independent Audit
            - text: "The Oversight Board shall commission an independent technical audit of the Smart City Data Register annually, verifying that: all deployed systems are registered; data retention is enforced technically; data sharing matches Register declarations; and no prohibited systems are in operation. Audit results shall be published."
        - blockquote [ref=e289]:
          - paragraph [ref=e290]:
            - strong [ref=e291]: Policy Review
            - text: This policy shall be reviewed every [two] years given the pace of technology change. Reviews must include assessment of whether prohibited applications list requires updating, whether new data types require additional protection, and whether enforcement has produced measurable change.
        - separator [ref=e292]
        - heading "Real-World Examples" [level=2] [ref=e293]
        - heading "San Francisco — Surveillance Technology Ordinance" [level=3] [ref=e294]
        - paragraph [ref=e295]:
          - strong [ref=e296]: "Enacted:"
          - text: 2019 (Ordinance 103-19)
          - strong [ref=e297]: "Type:"
          - text: City ordinance
          - strong [ref=e298]: "Link:"
          - text: https://sfbos.org/sites/default/files/o0103-19.pdf
          - strong [ref=e299]: "Summary:"
          - text: "Requires Board of Supervisors approval for any city agency to acquire surveillance technology. Created the first US city ban on facial recognition by city agencies. Subsequent amendments extended the framework. San Francisco’s approach — requiring legislative approval for each acquisition — is the strongest democratic check model available at city level. Community critique: loophole for technologies acquired by police through federal programs; enforcement capacity limited."
        - separator [ref=e300]
        - heading "Portland, Oregon — Facial Recognition Bans" [level=3] [ref=e301]
        - paragraph [ref=e302]:
          - strong [ref=e303]: "Enacted:"
          - text: 2020 (two ordinances)
          - strong [ref=e304]: "Type:"
          - text: City ordinances
          - strong [ref=e305]: "Summary:"
          - text: "Portland enacted two facial recognition ordinances: one banning city agency use (modelled on San Francisco), and a second banning private entity use of facial recognition in public accommodations — the most comprehensive local prohibition in the US. The private entity ban is notable: it extends beyond government to retailers, landlords, and employers operating in public spaces. Community critique: enforcement of the private entity ban is difficult without a dedicated enforcement body."
        - separator [ref=e306]
        - heading "Amsterdam — Responsible Sensing Lab" [level=3] [ref=e307]
        - paragraph [ref=e308]:
          - strong [ref=e309]: "Active:"
          - text: 2019–present
          - strong [ref=e310]: "Type:"
          - text: Municipal programme
          - strong [ref=e311]: "Link:"
          - text: https://www.amsterdam.nl/en/policy/digitization/responsible-sensing-lab/
          - strong [ref=e312]: "Summary:"
          - text: Amsterdam’s Responsible Sensing Lab works with neighbourhoods to map sensor deployments, develop community consent processes, and publish open data from sensors. The city maintains a public register of sensors in the city — a practical model for the Data Register requirement above. Amsterdam’s approach to community co-design (not just consultation) represents the participation standard this policy aims for.
        - separator [ref=e313]
        - heading "Toronto — Sidewalk Labs Waterfront Withdrawal (Cautionary Example)" [level=3] [ref=e314]
        - paragraph [ref=e315]:
          - strong [ref=e316]: "Timeline:"
          - text: 2017–2020
          - strong [ref=e317]: "Summary:"
          - text: Alphabet subsidiary Sidewalk Labs proposed a “smart city from the internet up” on Toronto’s waterfront, offering significant investment in exchange for data rights over a major urban development. After three years of community opposition — centred on data governance, privacy, and the transfer of public planning authority to a private corporation — the project was cancelled in May 2020 citing “unprecedented economic uncertainty” (though community opposition was a major factor). The Toronto case is the defining cautionary example of what happens when smart city development prioritises corporate data interests over community governance. The
          - link "Sidewalk Toronto Data Governance Proposal" [ref=e318] [cursor=pointer]:
            - /url: https://sidewalktoronto.ca/
          - text: and the work of the
          - link "Waterfront Toronto Digital Strategy Advisory Panel" [ref=e319] [cursor=pointer]:
            - /url: https://www.waterfrontoronto.ca/our-work/transforming-our-waterfront/quayside/digital-strategy
          - text: provide detailed reference material.
        - separator [ref=e320]
        - heading "Barcelona — Superblocks and Data Sovereignty" [level=3] [ref=e321]
        - paragraph [ref=e322]:
          - strong [ref=e323]: "Active:"
          - text: 2016–present
          - strong [ref=e324]: "Type:"
          - text: Municipal programme
          - strong [ref=e325]: "Summary:"
          - text: Barcelona’s Superblocks programme redesigns streets for pedestrians and cyclists using sensor data for monitoring. Critically, Barcelona’s Digital City Plan (2016) established city data sovereignty principles — the city retains data ownership, vendors cannot resell city data, and open standards are required. Barcelona also pioneered the use of distributed data infrastructure (FIWARE) to avoid vendor lock-in. Barcelona’s approach demonstrates that smart city benefits can be achieved alongside strong data sovereignty.
        - paragraph [ref=e326]:
          - emphasis [ref=e327]:
            - text: "Reference:"
            - link "Barcelona Digital City Plan" [ref=e328] [cursor=pointer]:
              - /url: https://ajuntament.barcelona.cat/digital/en/digital-innovation/data-driven-city-management/data-sovereignty
        - separator [ref=e329]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e330]
        - list [ref=e331]:
          - listitem [ref=e332]:
            - strong [ref=e333]: IoT device security
            - text: — Smart city infrastructure is frequently targeted by cyberattacks; insecure IoT devices create vulnerabilities not just for data, but for physical infrastructure. This model does not address cybersecurity requirements for smart city hardware.
          - listitem [ref=e334]:
            - strong [ref=e335]: Private smart city developments
            - text: — Many “smart city” deployments occur on private land (commercial developments, residential estates) outside the reach of city procurement policy. The Portland private entity ban model provides a partial response.
          - listitem [ref=e336]:
            - strong [ref=e337]: Aggregation risk
            - text: — Data that is individually harmless (e.g., foot traffic counts) can be combined across sources to re-identify individuals. The model addresses this in purpose limitation and retention requirements, but technical enforcement of aggregation limits is not yet standard practice.
          - listitem [ref=e338]:
            - strong [ref=e339]: Legacy systems
            - text: — Many cities have existing surveillance infrastructure deployed before this framework. The transition timeline requirement addresses this, but decommissioning entrenched systems faces significant political and contractual obstacles.
          - listitem [ref=e340]:
            - strong [ref=e341]: National preemption
            - text: — In some jurisdictions, national governments may preempt local smart city governance. This is particularly relevant where national security or policing arguments are used to override local data minimisation rules.
        - separator [ref=e342]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e343]
        - table [ref=e344]:
          - rowgroup [ref=e345]:
            - row "Related Domain Relationship" [ref=e346]:
              - columnheader "Related Domain" [ref=e347]
              - columnheader "Relationship" [ref=e348]
          - rowgroup [ref=e349]:
            - row "AI Adoption Smart city AI systems (predictive policing, traffic AI) must comply with AI Adoption governance requirements" [ref=e350]:
              - cell "AI Adoption" [ref=e351]:
                - link "AI Adoption" [ref=e352] [cursor=pointer]:
                  - /url: ../../ai-adoption/full-model/
              - cell "Smart city AI systems (predictive policing, traffic AI) must comply with AI Adoption governance requirements" [ref=e353]
            - row "Algorithmic Accountability Automated smart city decision systems require bias auditing and individual rights to challenge" [ref=e354]:
              - cell "Algorithmic Accountability" [ref=e355]:
                - link "Algorithmic Accountability" [ref=e356] [cursor=pointer]:
                  - /url: ../../algorithmic-accountability/full-model/
              - cell "Automated smart city decision systems require bias auditing and individual rights to challenge" [ref=e357]
            - row "Digital Accessibility All resident-facing smart city interfaces must meet accessibility standards" [ref=e358]:
              - cell "Digital Accessibility" [ref=e359]:
                - link "Digital Accessibility" [ref=e360] [cursor=pointer]:
                  - /url: ../../accessibility/full-model/
              - cell "All resident-facing smart city interfaces must meet accessibility standards" [ref=e361]
            - row "Digital Sovereignty Smart city data sovereignty, vendor lock-in, and exit rights follow the Digital Sovereignty model" [ref=e362]:
              - cell "Digital Sovereignty" [ref=e363]:
                - link "Digital Sovereignty" [ref=e364] [cursor=pointer]:
                  - /url: ../../digital-sovereignty/full-model/
              - cell "Smart city data sovereignty, vendor lock-in, and exit rights follow the Digital Sovereignty model" [ref=e365]
            - row "Open Source in Government Open source smart city software enables community audit and peer city reuse" [ref=e366]:
              - cell "Open Source in Government" [ref=e367]:
                - link "Open Source in Government" [ref=e368] [cursor=pointer]:
                  - /url: ../../open-source-in-government/full-model/
              - cell "Open source smart city software enables community audit and peer city reuse" [ref=e369]
        - separator [ref=e370]
        - heading "Glossary" [level=2] [ref=e371]
        - paragraph [ref=e372]:
          - strong [ref=e373]: "Smart City Technology:"
          - text: Any technology deployed by or on behalf of a city government that collects data from public spaces or about residents’ use of public services, including cameras, environmental sensors, connected street furniture, automated vehicle systems, and data analytics platforms.
        - paragraph [ref=e374]:
          - strong [ref=e375]: "Biometric Data:"
          - text: Data derived from individuals’ physical characteristics — facial geometry, gait patterns, voice prints, iris patterns — that uniquely identifies them. Treated as a special category of sensitive data under GDPR and this policy.
        - paragraph [ref=e376]:
          - strong [ref=e377]: "Surveillance Technology:"
          - text: Any technology that observes, monitors, or tracks individuals in public or semi-public spaces. May include facial recognition, ALPR, CCTV with analytics, mobile device tracking, drone surveillance, and sensor networks.
        - paragraph [ref=e378]:
          - strong [ref=e379]: "Purpose Limitation:"
          - text: The data protection principle that data collected for one stated purpose may not be used for a different purpose. A foundational principle of GDPR (Article 5(1)(b)) and this policy.
        - paragraph [ref=e380]:
          - strong [ref=e381]: "Data Minimisation:"
          - text: The principle that only the minimum data necessary to achieve a stated purpose should be collected. A core principle of privacy-by-design and GDPR (Article 5(1)(c)).
        - paragraph [ref=e382]:
          - strong [ref=e383]: "Community Data Trust:"
          - text: A legal structure under which a defined community (neighbourhood, city, affected population) holds governance rights over data collected about them, through trustees accountable to that community.
        - paragraph [ref=e384]:
          - strong [ref=e385]: "Smart City Data Register:"
          - text: The public inventory of all smart city technology deployments required by this policy, including data types, purposes, retention periods, and access controls.
        - separator [ref=e386]
        - heading "Contributing to This Policy Model" [level=2] [ref=e387]
        - paragraph [ref=e388]: "This model is maintained in the open. Priority contribution needs:"
        - list [ref=e389]:
          - listitem [ref=e390]:
            - strong [ref=e391]: Cybersecurity requirements
            - text: for smart city hardware and IoT devices
          - listitem [ref=e392]:
            - strong [ref=e393]: Private land coverage
            - text: — model language extending smart city data governance to private developments open to the public
          - listitem [ref=e394]:
            - strong [ref=e395]: Aggregation risk technical standards
            - text: — how to enforce purpose limitation when data combination creates new risks
          - listitem [ref=e396]:
            - strong [ref=e397]: Global South examples
            - text: — smart city governance from African, Asian, and Latin American contexts where deployment is accelerating fastest
        - paragraph [ref=e398]:
          - text: Open an
          - link "Issue" [ref=e399] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/issues
          - text: to propose changes or additions. See
          - link "CONTRIBUTING.md" [ref=e400] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - text: for the contribution process.
        - paragraph [ref=e401]: All substantive changes go through a minimum 14-day public comment period before merging.
        - separator [ref=e402]
        - heading "Changelog" [level=2] [ref=e403]
        - table [ref=e404]:
          - rowgroup [ref=e405]:
            - row "Version Date Summary of changes" [ref=e406]:
              - columnheader "Version" [ref=e407]
              - columnheader "Date" [ref=e408]
              - columnheader "Summary of changes" [ref=e409]
          - rowgroup [ref=e410]:
            - row "0.1 2026-04-05 Initial draft — four pillars, real-world examples from San Francisco, Portland, Amsterdam, Toronto, Barcelona" [ref=e411]:
              - cell "0.1" [ref=e412]
              - cell "2026-04-05" [ref=e413]
              - cell "Initial draft — four pillars, real-world examples from San Francisco, Portland, Amsterdam, Toronto, Barcelona" [ref=e414]
        - separator [ref=e415]
        - paragraph [ref=e416]:
          - emphasis [ref=e417]: This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.
      - link "✏️ Edit this policy on GitHub" [ref=e418] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/smart-cities/full-model.md
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