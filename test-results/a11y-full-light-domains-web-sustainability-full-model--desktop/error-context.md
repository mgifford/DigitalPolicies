# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/web-sustainability/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/web-sustainability/full-model/ [light]:

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
      - heading "A Greener Web" [level=1] [ref=e29]
      - paragraph [ref=e30]: Web Sustainability
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
        - heading "Web Sustainability — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-04
            - strong [ref=e57]: "Related domains:"
            - link "Data Centers & Environmental Sustainability" [ref=e58] [cursor=pointer]:
              - /url: ../../data-centers/full-model/
            - text: ","
            - link "Right to Repair & E-Waste" [ref=e59] [cursor=pointer]:
              - /url: ../../right-to-repair/full-model/
            - text: ","
            - link "Digital Accessibility" [ref=e60] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: ","
            - link "Open Source in Government" [ref=e61] [cursor=pointer]:
              - /url: ../../open-source-in-government/full-model/
            - strong [ref=e62]: "Key sources:"
            - text: W3C Web Sustainability Guidelines (WSG 1.0, 2023; Draft Note 2025), EU Ecodesign Regulation, GRI Digital Sustainability Standards (draft), ISO/IEC 14001 Environmental Management
        - separator [ref=e63]
        - heading "Overview" [level=2] [ref=e64]
        - paragraph [ref=e65]: The internet’s carbon footprint is approximately equivalent to aviation — around 3.7% of global greenhouse gas emissions and rising. Unlike aviation, this footprint is almost entirely invisible. No emissions label appears when you load a bloated web page. No carbon counter ticks when a public authority procures an inefficient web platform. No landfill is visible when governments buy software that forces hardware replacement every three years.
        - paragraph [ref=e66]: "Web sustainability is the practice of designing, building, and operating digital products and services in ways that minimise environmental impact, respect planetary boundaries, and align with social equity. It is not an obscure technical concern: the aggregate effect of poor design decisions across billions of web pages, unnecessary JavaScript dependencies, unoptimised images, and planned software obsolescence is measurable in power station output."
        - paragraph [ref=e67]: The W3C Web Sustainability Guidelines (WSG), published as a Draft Note in 2025, provide 93 guidelines and 232 success criteria across four categories — User Experience Design, Web Development, Hosting Infrastructure, and Business Strategy. They are structured analogously to WCAG, which became a worldwide policy standard. WSG is now at a comparable early adoption stage.
        - paragraph [ref=e68]: This model policy translates WSG principles and related environmental obligations into enforceable policy language for governments and public sector bodies.
        - heading "The Core Tension" [level=3] [ref=e69]
        - paragraph [ref=e70]:
          - strong [ref=e71]: We want modern, efficient, capable digital public services — but “efficient” cannot mean efficient only in terms of speed and cost to the operator. Efficiency that externalises energy waste, hardware obsolescence, and carbon emissions onto the environment is not efficiency. It is subsidy extraction from the planet.
        - heading "Scope" [level=3] [ref=e72]
        - list [ref=e73]:
          - listitem [ref=e74]:
            - checkbox [checked] [disabled] [ref=e75]
            - text: National government (procurement standards, reporting mandates)
          - listitem [ref=e76]:
            - checkbox [checked] [disabled] [ref=e77]
            - text: Regional / state / provincial government (procurement, vendor requirements)
          - listitem [ref=e78]:
            - checkbox [checked] [disabled] [ref=e79]
            - text: Municipal / local government (public digital services, local procurement)
          - listitem [ref=e80]:
            - checkbox [checked] [disabled] [ref=e81]
            - text: Public sector procurement (all ICT purchasing, digital service contracts)
          - listitem [ref=e82]:
            - checkbox [disabled] [ref=e83]
            - text: Private sector (aspirational / reporting only at this stage)
        - separator [ref=e84]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e85]'
        - heading "Foundational Values" [level=3] [ref=e86]
        - paragraph [ref=e87]:
          - strong [ref=e88]: 1. The web has a material footprint
          - text: Every HTTP request, every megabyte transferred, every script executed on a user’s device consumes electricity. That electricity has a carbon cost. Poor code is not just a quality problem — it is an environmental one. Policy must treat digital services as having material environmental impact, and require measurement, disclosure, and improvement accordingly.
        - paragraph [ref=e89]:
          - strong [ref=e90]: 2. Sustainable design and accessible design are the same thing
          - text: Semantic HTML, minimal dependencies, plain language, low data transfer, progressive enhancement, system fonts, and efficient media — these are the practices of both good accessibility and good sustainability. The organisations achieving WCAG 2.2 AA conformance are, in most cases, also producing more sustainable digital services. Policy should treat these as unified requirements, not separate silos.
        - paragraph [ref=e91]:
          - strong [ref=e92]: 3. Longevity is sustainability
          - text: Software that forces hardware replacement after 3–5 years creates e-waste, embodied carbon, and material waste at scale. Public procurement that selects software requiring the latest browser or operating system versions, or that ceases support prematurely, is an environmental decision as much as a technical one. Software longevity — support for older hardware and operating systems, long security maintenance windows — is a form of environmental protection.
        - paragraph [ref=e93]:
          - strong [ref=e94]: 4. Procurement is where sustainability is won or lost
          - text: Governments cannot achieve sustainable digital services if they procure from vendors who do not meet sustainability standards. As with accessibility, the moment of procurement is the most powerful point of intervention. Sustainability requirements must be mandatory and verifiable before contract award, not advisory guidelines evaluated after deployment.
        - paragraph [ref=e95]:
          - strong [ref=e96]: 5. Green hosting is a verifiable, achievable standard
          - text: Hosting providers with verifiable renewable energy use, low Power Usage Effectiveness (PUE) ratios, and water efficiency commitments exist and are increasingly price-competitive. Procurement preference for green hosting is achievable within existing frameworks and does not require new technical standards — only the will to ask.
        - paragraph [ref=e97]:
          - strong [ref=e98]: 6. Carbon transparency enables market accountability
          - text: When public digital services are required to publish their estimated carbon footprint, market pressure and public accountability follow. Transparency is the minimum intervention — it costs very little and creates the information environment in which further improvement becomes possible. Opaque services cannot be improved.
        - paragraph [ref=e99]:
          - strong [ref=e100]: 7. Avoiding dark patterns is a sustainability act
          - text: Web design that uses dark patterns — infinite scroll, autoplay video, forced re-engagement notifications, unnecessary page reloads, manipulative cookie consent flows — causes more data transfer, more device computation, and more user time wasted. Eliminating dark patterns improves sustainability, accessibility, and user dignity simultaneously.
        - paragraph [ref=e101]:
          - strong [ref=e102]: 8. Open source and open standards reduce long-term environmental cost
          - text: Proprietary software ecosystems require redundant development, create vendor lock-in that prevents efficiency improvements, and often force hardware upgrades to maintain compatibility. Open source software, reusable public code, and open standards reduce duplicate infrastructure, extend hardware life, and allow communities to maintain and improve their own digital infrastructure.
        - heading "Equity Considerations" [level=3] [ref=e103]
        - list [ref=e104]:
          - listitem [ref=e105]:
            - strong [ref=e106]: Users on older devices and slow connections
            - text: — inefficient web design is experienced most severely by people with limited bandwidth, older devices, and mobile-only internet access. These users are disproportionately lower-income, rural, and in the Global South. Sustainable web design is more equitable web design.
          - listitem [ref=e107]:
            - strong [ref=e108]: Communities hosting data center infrastructure
            - text: — the sustainability of digital services depends on the sustainability of the infrastructure behind them. Rural and lower-income communities frequently host data centers bearing environmental costs. Web sustainability policy and data center policy are linked.
          - listitem [ref=e109]:
            - strong [ref=e110]: Future generations
            - text: — the accumulating embodied carbon in hardware, the energy consumed by inefficient software, and the growing e-waste stream are environmental debts borne by people who do not yet exist and had no voice in the decisions that created them.
        - heading "Environmental Considerations" [level=3] [ref=e111]
        - paragraph [ref=e112]: The internet’s material footprint is distributed across user devices (approximately 52% of ICT energy use), networks (24%), and data centers (24%). Web sustainability addresses the design and development decisions that determine how efficiently this infrastructure is used. A well-optimised public website may be an order of magnitude more energy-efficient than a poorly optimised equivalent. At the scale of national government — hundreds of public websites, millions of daily visits — this difference is substantial.
        - separator [ref=e113]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e114]'
        - heading "Mandatory Standards" [level=3] [ref=e115]
        - blockquote [ref=e116]:
          - paragraph [ref=e117]:
            - strong [ref=e118]: Green Hosting Requirement
            - text: "All new contracts for hosting of public-facing digital services shall require that the hosting provider: (a) operates data centers with a Power Usage Effectiveness (PUE) ratio of 1.4 or below, with a target of 1.2 by the third year of the contract; (b) provides verifiable documentation of renewable energy sourcing, including additionality documentation where Renewable Energy Certificates (RECs) are used; (c) discloses annual water consumption for cooling and participates in the Water Usage Effectiveness (WUE) reporting standard; and (d) has a published hardware lifecycle and responsible end-of-life policy. Hosting contracts shall not be renewed where providers cannot demonstrate progress against these requirements."
        - paragraph [ref=e119]:
          - emphasis [ref=e120]: "Rationale:"
          - text: Green hosting is the single highest-leverage intervention available in public sector web sustainability. Hosting choices determine the baseline carbon intensity of every public digital service. The market for green hosting exists; procurement inertia, not lack of options, is the primary barrier. The PUE 1.4 threshold is achievable by most modern providers; 1.2 reflects best practice and is a direction signal, not an immediate mandate. Additionality documentation is required because REC purchases from existing capacity do not reduce grid emissions; only new renewable capacity does.
        - paragraph [ref=e121]:
          - emphasis [ref=e122]: "Reference:"
          - link "EU Energy Efficiency Directive (2023)" [ref=e123] [cursor=pointer]:
            - /url: https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en
          - text: ": requires PUE ≤ 1.5 for new EU data centers by 2025, ≤ 1.2 by 2030."
          - link "The Green Web Foundation" [ref=e124] [cursor=pointer]:
            - /url: https://www.thegreenwebfoundation.org/
          - text: ": provides a verified directory of green hosting providers."
        - separator [ref=e125]
        - blockquote [ref=e126]:
          - paragraph [ref=e127]:
            - strong [ref=e128]: Digital Carbon Reporting for Public Services
            - text: "All public digital services receiving [X] or more unique visitors per month shall publish an annual Digital Carbon Report including: (a) estimated annual carbon footprint of the service (gCO2e per page view and total), calculated using a published, open methodology; (b) hosting carbon intensity (gCO2e/kWh of the hosting provider’s reported or estimated grid mix); (c) page weight statistics (median page size in kilobytes, median transfer volume per session); (d) year-on-year comparison; and (e) improvement targets for the following year. Reports shall be published on the service’s own website and submitted to a central public register maintained by [designated authority]."
        - paragraph [ref=e129]:
          - emphasis [ref=e130]: "Rationale:"
          - text: What gets measured gets managed. There is currently no systematic requirement for public sector organisations to measure or disclose the carbon cost of their digital services. Several methodologies exist (Website Carbon Calculator, CO2.js, Sustainable Web Design model); this provision requires use of a published open methodology without mandating a specific one, recognising that measurement standards are still evolving. The visitor threshold focuses reporting requirements on higher-impact services first.
        - paragraph [ref=e131]:
          - emphasis [ref=e132]: "Reference:"
          - link "Sustainable Web Design model (Wholegrain Digital / Mightybytes)" [ref=e133] [cursor=pointer]:
            - /url: https://sustainablewebdesign.org/
          - text: ": open methodology for estimating website carbon."
          - link "CO2.js (The Green Web Foundation)" [ref=e134] [cursor=pointer]:
            - /url: https://www.thegreenwebfoundation.org/co2-js/
          - text: ": open source library for website carbon calculation."
        - separator [ref=e135]
        - blockquote [ref=e136]:
          - paragraph [ref=e137]:
            - strong [ref=e138]: Page Weight and Performance Baseline
            - text: "All public-facing digital services shall achieve: (a) a median page weight of no greater than 1 MB (uncompressed) for informational pages; (b) a median page weight of no greater than 2 MB for interactive services; (c) a Core Web Vitals score of “Good” (Largest Contentful Paint ≤ 2.5s, Cumulative Layout Shift ≤ 0.1, Interaction to Next Paint ≤ 200ms) at the 75th percentile on mobile devices; and (d) full functionality without JavaScript enabled for informational pages (progressive enhancement). Services failing to meet these thresholds shall publish an improvement plan within 90 days of assessment."
        - paragraph [ref=e139]:
          - emphasis [ref=e140]: "Rationale:"
          - text: Page weight is the single most actionable metric for web sustainability. The average web page has grown from approximately 500 KB in 2012 to over 2.5 MB in 2024, driven primarily by JavaScript frameworks, unoptimised images, and third-party tracking scripts — none of which are necessary for public information services. A 1 MB limit for informational pages is achievable with standard HTML and CSS; it does not prohibit rich functionality but requires deliberate design decisions. Core Web Vitals are Google’s standardised performance indicators that proxy for user experience quality and, indirectly, energy efficiency.
        - paragraph [ref=e141]:
          - emphasis [ref=e142]: "Reference:"
          - link "HTTP Archive Web Almanac" [ref=e143] [cursor=pointer]:
            - /url: https://almanac.httparchive.org/
          - text: ": annual data on page weight and web performance across millions of sites."
          - link "W3C WSG 5.18 — Minify Your HTML/CSS/JS" [ref=e144] [cursor=pointer]:
            - /url: https://www.w3.org/TR/sustyweb/#minify-your-html-css-js
          - text: .
        - separator [ref=e145]
        - blockquote [ref=e146]:
          - paragraph [ref=e147]:
            - strong [ref=e148]: Software Longevity Requirement
            - text: "All publicly procured software shall: (a) support the current and two immediately preceding major versions of common operating systems (Windows, macOS, major Linux distributions) and browsers (Chrome, Firefox, Safari, Edge) at the time of procurement; (b) provide a minimum 5-year security maintenance commitment from the date of deployment, with maintenance releases provided at no additional cost; (c) not enforce artificial hardware upgrade requirements through software-only mechanisms (e.g., OS version checks that can be removed without functional impact); and (d) be documented sufficiently for the procuring authority or an independent maintainer to continue maintenance if the vendor ceases support. Contracts shall include termination rights where vendors do not honour longevity commitments."
        - paragraph [ref=e149]:
          - emphasis [ref=e150]: "Rationale:"
          - text: Software that requires hardware upgrades creates e-waste and embodied carbon that dwarfs the operational carbon of running that hardware. Microsoft’s Windows 11 hardware requirements, for example, rendered hundreds of millions of otherwise functional devices obsolete. Public sector procurement — at scale — has leverage to demand longevity that individual consumers do not. The 5-year maintenance requirement aligns with the EU Cyber Resilience Act’s lifetime support obligations.
        - paragraph [ref=e151]:
          - emphasis [ref=e152]: "Reference:"
          - link "EU Cyber Resilience Act (2024)" [ref=e153] [cursor=pointer]:
            - /url: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
          - text: ": introduces mandatory security support lifetime requirements for connected products."
          - link "Right to Repair coalition evidence on planned obsolescence" [ref=e154] [cursor=pointer]:
            - /url: https://repair.eu/
          - text: .
        - separator [ref=e155]
        - blockquote [ref=e156]:
          - paragraph [ref=e157]:
            - strong [ref=e158]: Web Sustainability Guidelines (WSG) Alignment in Procurement
            - text: "All procurement of digital services with a contract value exceeding [X] shall require vendors to provide a WSG Alignment Statement describing: (a) which W3C Web Sustainability Guidelines apply to the service; (b) the vendor’s current conformance level against applicable guidelines; and (c) a roadmap for addressing any identified gaps within the contract period. The WSG Alignment Statement shall be a contractual deliverable, subject to audit. Procurement evaluation shall include WSG alignment as a scored quality criterion."
        - paragraph [ref=e159]:
          - emphasis [ref=e160]: "Rationale:"
          - text: The W3C Web Sustainability Guidelines are the most comprehensive and technically rigorous framework for web sustainability currently available. They are structured analogously to WCAG — with guidelines, success criteria, and conformance levels — making them directly usable as procurement criteria. Requiring a vendor WSG Alignment Statement creates accountability without mandating full conformance immediately; the roadmap requirement creates a trajectory toward improvement. This mirrors the approach taken with accessibility (VPAT / ACR statements) that has driven consistent accessibility improvement in procured software.
        - paragraph [ref=e161]:
          - emphasis [ref=e162]: "Reference:"
          - link "W3C Web Sustainability Guidelines (WSG 1.0)" [ref=e163] [cursor=pointer]:
            - /url: https://www.w3.org/TR/sustyweb/
          - text: ": the primary technical reference for this provision."
        - separator [ref=e164]
        - heading "Recommended Standards" [level=3] [ref=e165]
        - blockquote [ref=e166]:
          - paragraph [ref=e167]:
            - strong [ref=e168]: System Font Preference
            - text: Digital services procured or developed by public authorities should use system font stacks (fonts installed on the user’s operating system) as the default typeface choice, reserving custom web fonts for cases where brand or legal requirements specifically require them and where the typographic benefit is proportionate to the additional data transfer. Where web fonts are used, variable font formats should be preferred over separate weight files, and font subsets limited to character sets required by the service.
        - paragraph [ref=e169]:
          - emphasis [ref=e170]: "Rationale:"
          - text: Custom web fonts add 100–500 KB per page view and require additional DNS lookups and connections. System fonts — the default fonts available on user devices — are zero transfer-cost and render immediately. Most public information services have no genuine typographic requirement that overrides this efficiency argument. The EU and several national governments have adopted system font policies for public websites.
        - separator [ref=e171]
        - blockquote [ref=e172]:
          - paragraph [ref=e173]:
            - strong [ref=e174]: Dark Pattern Prohibition
            - text: "Public digital services shall not employ dark patterns that cause unnecessary data transfer or user re-engagement, including: autoplay video or audio content; infinite scroll on informational pages; push notification prompts that cannot be permanently declined; cookie consent mechanisms that make refusal more difficult than acceptance; or automatic session extension without user consent. User interface flows shall be designed to allow task completion with the minimum number of page loads and interactions."
        - paragraph [ref=e175]:
          - emphasis [ref=e176]: "Rationale:"
          - text: Dark patterns — design choices that manipulate rather than assist users — cause measurable increases in data consumption, device computation, and user time expenditure. They are also, in most jurisdictions where they have been assessed, illegal under consumer protection law. Their prohibition for public services is a sustainability measure, an accessibility measure, and a democratic accountability measure simultaneously. The EU Digital Services Act and Digital Markets Act both address dark patterns.
        - separator [ref=e177]
        - blockquote [ref=e178]:
          - paragraph [ref=e179]:
            - strong [ref=e180]: Third-Party Script Minimisation
            - text: Public digital services shall minimise third-party scripts (analytics, advertising, social media widgets, chat tools, A/B testing frameworks) to those strictly necessary for core service delivery. Each third-party script shall be documented in the service’s privacy policy with its purpose and data processing basis. Privacy-respecting analytics alternatives that do not require third-party network connections (e.g., self-hosted or cookieless solutions) shall be preferred over tracking-based alternatives.
        - paragraph [ref=e181]:
          - emphasis [ref=e182]: "Rationale:"
          - text: Third-party scripts are among the largest sources of page weight, privacy leakage, and performance degradation on public websites. A typical commercial news website loads 50–100 third-party scripts; a well-designed public service loads zero to five. Each script introduces additional DNS lookups, HTTP connections, JavaScript execution, and often unseen tracking. Requiring justification and documentation for each third-party script forces the discipline of minimisation.
        - separator [ref=e183]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e184]'
        - heading "Regulatory and Administrative Requirements" [level=3] [ref=e185]
        - paragraph [ref=e186]:
          - strong [ref=e187]: Competent Authority
          - text: "A designated government authority (the [Digital Sustainability Office] or equivalent function within an existing digital/procurement body) shall be responsible for: maintaining the central Digital Carbon Register; setting and updating the approved carbon calculation methodology list; auditing compliance with green hosting and WSG requirements; receiving and publishing annual Digital Carbon Reports; and publishing an annual National Digital Sustainability Report summarising sector-wide progress."
        - paragraph [ref=e188]:
          - strong [ref=e189]: Phased Implementation Timeline
        - table [ref=e190]:
          - rowgroup [ref=e191]:
            - row "Phase Requirement Timeline" [ref=e192]:
              - columnheader "Phase" [ref=e193]
              - columnheader "Requirement" [ref=e194]
              - columnheader "Timeline" [ref=e195]
          - rowgroup [ref=e196]:
            - row "Phase 1 All new hosting contracts to include green hosting requirements Within 12 months of policy enactment" [ref=e197]:
              - cell "Phase 1" [ref=e198]
              - cell "All new hosting contracts to include green hosting requirements" [ref=e199]
              - cell "Within 12 months of policy enactment" [ref=e200]
            - row "Phase 1 All services >10,000 monthly visitors to publish first Digital Carbon Report Within 18 months" [ref=e201]:
              - cell "Phase 1" [ref=e202]
              - cell "All services >10,000 monthly visitors to publish first Digital Carbon Report" [ref=e203]
              - cell "Within 18 months" [ref=e204]
            - row "Phase 2 Page weight and Core Web Vitals baselines assessed for all top-50 public services Within 24 months" [ref=e205]:
              - cell "Phase 2" [ref=e206]
              - cell "Page weight and Core Web Vitals baselines assessed for all top-50 public services" [ref=e207]
              - cell "Within 24 months" [ref=e208]
            - row "Phase 2 WSG Alignment Statement required for all new procurement >£/€/$ [X] Within 24 months" [ref=e209]:
              - cell "Phase 2" [ref=e210]
              - cell "WSG Alignment Statement required for all new procurement >£/€/$ [X]" [ref=e211]
              - cell "Within 24 months" [ref=e212]
            - row "Phase 3 Software longevity requirements apply to all renewals Within 36 months" [ref=e213]:
              - cell "Phase 3" [ref=e214]
              - cell "Software longevity requirements apply to all renewals" [ref=e215]
              - cell "Within 36 months" [ref=e216]
            - row "Phase 3 WSG alignment scoring in all procurement above minimum threshold Within 36 months" [ref=e217]:
              - cell "Phase 3" [ref=e218]
              - cell "WSG alignment scoring in all procurement above minimum threshold" [ref=e219]
              - cell "Within 36 months" [ref=e220]
            - row "Ongoing Annual Digital Carbon Reports published and submitted Annually from Phase 1" [ref=e221]:
              - cell "Ongoing" [ref=e222]
              - cell "Annual Digital Carbon Reports published and submitted" [ref=e223]
              - cell "Annually from Phase 1" [ref=e224]
        - paragraph [ref=e225]:
          - strong [ref=e226]: Training and Capacity Building
          - text: "Within 18 months of policy enactment, the competent authority shall publish: (a) a Digital Sustainability Procurement Guide for procurement officers; (b) a Web Sustainability Self-Assessment tool for in-house development teams; (c) training materials for inclusion in civil service digital skills programmes; and (d) a model WSG Alignment Statement template for vendor use."
        - heading "Technical Standards" [level=3] [ref=e227]
        - paragraph [ref=e228]:
          - strong [ref=e229]: Approved Carbon Calculation Methodologies
          - text: "The competent authority shall maintain a list of approved open methodologies for website carbon calculation. Initial approved methodologies shall include: the Sustainable Web Design (SWD) model; the CO2.js system-level model; and any successor W3C-endorsed methodology. Methodologies requiring proprietary tools or non-disclosable inputs shall not be approved."
        - paragraph [ref=e230]:
          - strong [ref=e231]: Green Hosting Verification
          - text: "Hosting providers claiming green credentials shall provide documentation from: (a) a recognised independent renewable energy auditor; (b) a recognised green hosting certification scheme (e.g., The Green Web Foundation verified provider registry, Green Hosting Certification); or (c) ISO 14001 certification with specific renewable energy coverage. Self-reported claims without third-party verification shall not satisfy the green hosting requirement."
        - paragraph [ref=e232]:
          - strong [ref=e233]: Measurement and Monitoring
          - text: "Services subject to Digital Carbon Reporting shall measure: page weight using synthetic monitoring (Lighthouse or equivalent); transfer volume using real user monitoring or server log analysis; Core Web Vitals using CrUX (Chrome User Experience Report) data or equivalent; and hosting carbon intensity using the hosting provider’s published or Grid Mix Average figure for their data center location."
        - separator [ref=e234]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e235]'
        - heading "Enforcement" [level=3] [ref=e236]
        - paragraph [ref=e237]:
          - strong [ref=e238]: Regulatory Oversight
          - text: "The competent authority shall have powers to: request evidence of compliance with green hosting, page weight, and WSG alignment requirements; conduct independent audits of services subject to Digital Carbon Reporting; issue compliance notices requiring remediation within 90 days; and publish a compliance league table of assessed public services annually."
        - paragraph [ref=e239]:
          - strong [ref=e240]: Procurement Enforcement
          - text: "Contracts awarded under this policy shall include: sustainability KPIs as contractual obligations (not advisory targets); audit rights allowing the procuring authority to verify hosting credentials and WSG alignment documentation; step-in rights where a vendor fails to meet longevity commitments within the contract period; and termination rights where material non-compliance is not remediated within 90 days of notice."
        - paragraph [ref=e241]:
          - strong [ref=e242]: Civil Society Participation
          - text: Any civil society organisation or member of the public may submit a complaint to the competent authority alleging non-compliance with Digital Carbon Reporting requirements or green hosting obligations. The authority shall respond to complaints within 60 days and publish a summary of complaints received and resolved annually.
        - heading "Review and Improvement" [level=3] [ref=e243]
        - paragraph [ref=e244]:
          - strong [ref=e245]: Methodology Review
          - text: "The approved carbon calculation methodology list shall be reviewed annually to reflect: advances in measurement science; changes in the W3C WSG status (including any transition from Draft Note to Recommendation); and improvements in hosting provider data availability. Revised methodology guidance shall be accompanied by a 6-month transition period to allow services to update their reporting."
        - paragraph [ref=e246]:
          - strong [ref=e247]: Standards Escalation
          - text: The page weight thresholds and PUE requirements in this policy shall be reviewed every 3 years. Where best-practice data demonstrates that tighter standards are achievable without disproportionate cost, the competent authority shall publish revised thresholds for a 6-month public consultation before adoption.
        - paragraph [ref=e248]:
          - strong [ref=e249]: Annual Reporting
          - text: "The competent authority shall publish annually: (a) an aggregated analysis of Digital Carbon Reports submitted; (b) a sector-wide progress report against policy targets; (c) a summary of audit findings and compliance notices issued; (d) case studies of exemplary and poor-practice services; and (e) recommended updates to implementation guidance."
        - separator [ref=e250]
        - heading "Worked Examples" [level=2] [ref=e251]
        - 'heading "Example A: National Government Website Redesign" [level=3] [ref=e252]'
        - paragraph [ref=e253]: "A national government redesigns its primary citizen information portal. Under this policy:"
        - list [ref=e254]:
          - listitem [ref=e255]:
            - strong [ref=e256]: "Procurement phase:"
            - text: The commissioning authority requires vendors to submit a WSG Alignment Statement as part of the tender response, scored at 15% of the quality evaluation. The winning vendor documents 67 of 93 WSG guidelines as applicable and achieves full conformance on 52.
          - listitem [ref=e257]:
            - strong [ref=e258]: "Hosting:"
            - text: The new contract requires the hosting provider to supply PUE and renewable energy documentation before go-live. The provider (a green hosting certified supplier) supplies ISO 14001 certification and a verified renewable energy agreement.
          - listitem [ref=e259]:
            - strong [ref=e260]: "Baseline reporting:"
            - text: "The portal (>1M monthly visitors) publishes its first Digital Carbon Report within 18 months of policy enactment: median page weight 420 KB, estimated 0.08 gCO2e per page view, total annual estimate 4.7 tonnes CO2e."
          - listitem [ref=e261]:
            - strong [ref=e262]: "Year-3 target:"
            - text: The report includes a commitment to reduce median page weight to 350 KB and page view carbon to 0.06 gCO2e by redesigning image delivery and eliminating two unused third-party analytics scripts.
        - 'heading "Example B: Municipal Website Procurement" [level=3] [ref=e263]'
        - paragraph [ref=e264]: "A city of 200,000 people procures a new website platform. The contract is below the WSG Alignment Statement threshold. Under this policy:"
        - list [ref=e265]:
          - listitem [ref=e266]:
            - strong [ref=e267]: "Hosting:"
            - text: Green hosting requirement applies. The city chooses a regional hosting provider with PUE 1.3 and documented renewable energy purchasing.
          - listitem [ref=e268]:
            - strong [ref=e269]: "Software longevity:"
            - text: The contract requires 5-year security maintenance from the platform vendor, with documented support for the two preceding major browser versions.
          - listitem [ref=e270]:
            - strong [ref=e271]: "Page weight:"
            - text: The procurement brief specifies a maximum median page weight of 1 MB and Core Web Vitals “Good” threshold for mobile.
          - listitem [ref=e272]:
            - strong [ref=e273]: "Reporting:"
            - text: The city’s website receives 80,000 monthly visitors — below the 10,000-threshold only if the policy scales thresholds. (If the threshold is 10,000, it is above; they must publish a Digital Carbon Report.)
        - separator [ref=e274]
        - heading "Real-World Examples" [level=2] [ref=e275]
        - paragraph [ref=e276]: "No jurisdiction has yet enacted comprehensive web sustainability legislation. The following represent the leading edge of practice:"
        - table [ref=e277]:
          - rowgroup [ref=e278]:
            - row "Jurisdiction Measure Status" [ref=e279]:
              - columnheader "Jurisdiction" [ref=e280]
              - columnheader "Measure" [ref=e281]
              - columnheader "Status" [ref=e282]
          - rowgroup [ref=e283]:
            - row "France REEN Act (2021) — requires major streaming services to report digital environmental impact Enacted" [ref=e284]:
              - cell "France" [ref=e285]
              - cell "REEN Act (2021) — requires major streaming services to report digital environmental impact" [ref=e286]
              - cell "Enacted" [ref=e287]
            - row "European Union EU Energy Efficiency Directive — PUE requirements for data centers Enacted (2023)" [ref=e288]:
              - cell "European Union" [ref=e289]
              - cell "EU Energy Efficiency Directive — PUE requirements for data centers" [ref=e290]
              - cell "Enacted (2023)" [ref=e291]
            - row "Netherlands National ICT climate covenant — voluntary carbon commitments from public sector ICT Voluntary" [ref=e292]:
              - cell "Netherlands" [ref=e293]
              - cell "National ICT climate covenant — voluntary carbon commitments from public sector ICT" [ref=e294]
              - cell "Voluntary" [ref=e295]
            - row "UK Government Digital Service — GDS sustainability guidance for gov.uk services Guidance only" [ref=e296]:
              - cell "UK" [ref=e297]
              - cell "Government Digital Service — GDS sustainability guidance for gov.uk services" [ref=e298]
              - cell "Guidance only" [ref=e299]
            - row "European Union Ecodesign for Sustainable Products Regulation — extension to software under consultation Proposed" [ref=e300]:
              - cell "European Union" [ref=e301]
              - cell "Ecodesign for Sustainable Products Regulation — extension to software under consultation" [ref=e302]
              - cell "Proposed" [ref=e303]
            - row "W3C Web Sustainability Guidelines (WSG 1.0) Draft Note (2025)" [ref=e304]:
              - cell "W3C" [ref=e305]
              - cell "Web Sustainability Guidelines (WSG 1.0)" [ref=e306]
              - cell "Draft Note (2025)" [ref=e307]
        - separator [ref=e308]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e309]
        - list [ref=e310]:
          - listitem [ref=e311]:
            - strong [ref=e312]: No binding standard yet
            - text: — No jurisdiction has enacted comprehensive web sustainability legislation. All current frameworks are voluntary, guidance-only, or sector-specific. The W3C WSG is a Draft Note, not a Recommendation — it has not yet gone through the full W3C standards process.
          - listitem [ref=e313]:
            - strong [ref=e314]: Measurement methodology not yet standardised
            - text: — Multiple competing methodologies exist (Sustainable Web Design model, CO2.js, Scope 3 IT emissions) and produce different estimates for the same service. Policy cannot mandate a specific methodology without risking obsolescence; yet without a common methodology, cross-service comparison is difficult.
          - listitem [ref=e315]:
            - strong [ref=e316]: Embodied carbon is largely unaddressed
            - text: — The carbon cost of manufacturing devices, servers, and network hardware (embodied carbon) often exceeds operational carbon over a product’s lifetime. This policy focuses primarily on operational energy and software longevity; a fuller treatment of embodied carbon requires supply chain disclosure standards not yet available.
          - listitem [ref=e317]:
            - strong [ref=e318]: Third-party script accountability gap
            - text: — Public digital services embed third-party scripts (analytics, maps, video players) whose carbon footprint is outside the procuring authority’s direct control. The third-party minimisation standard addresses this partially but does not resolve accountability for third-party emissions.
          - listitem [ref=e319]:
            - strong [ref=e320]: Private sector coverage
            - text: — This model applies to public sector digital services. Private sector websites and applications — which account for the majority of web traffic — are outside scope. A fuller treatment would address private sector obligations, particularly for high-traffic commercial services.
          - listitem [ref=e321]:
            - strong [ref=e322]: AI-generated content footprint
            - text: — The growing use of AI for content generation, image creation, and on-page AI assistants introduces new energy costs not yet addressed by existing web sustainability frameworks.
        - separator [ref=e323]
        - heading "Glossary" [level=2] [ref=e324]
        - paragraph [ref=e325]:
          - strong [ref=e326]: "Carbon intensity (gCO2e/kWh):"
          - text: The grams of CO2 equivalent emitted per kilowatt-hour of electricity, varying by grid and energy source.
        - paragraph [ref=e327]:
          - strong [ref=e328]: "Core Web Vitals:"
          - text: "Google’s standardised metrics for web performance: Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP)."
        - paragraph [ref=e329]:
          - strong [ref=e330]: "Dark pattern:"
          - text: A user interface design choice that manipulates users into actions against their interests.
        - paragraph [ref=e331]:
          - strong [ref=e332]: "Page weight:"
          - text: The total size (in kilobytes) of all resources downloaded to render a web page.
        - paragraph [ref=e333]:
          - strong [ref=e334]: "PUE (Power Usage Effectiveness):"
          - text: The ratio of total data center energy to IT equipment energy. Lower is better; 1.0 is theoretical perfection.
        - paragraph [ref=e335]:
          - strong [ref=e336]: "Progressive enhancement:"
          - text: A design approach that builds a functional baseline in plain HTML/CSS, layering JavaScript enhancement only where genuinely useful.
        - paragraph [ref=e337]:
          - strong [ref=e338]: "REC (Renewable Energy Certificate):"
          - text: A market instrument representing one MWh of renewable electricity generation. RECs without additionality do not reduce grid emissions.
        - paragraph [ref=e339]:
          - strong [ref=e340]: "System font stack:"
          - text: A set of typefaces installed on the user’s device, requiring no additional download.
        - paragraph [ref=e341]:
          - strong [ref=e342]: "W3C WSG:"
          - text: W3C Web Sustainability Guidelines — the primary technical reference framework for this policy domain.
        - paragraph [ref=e343]:
          - strong [ref=e344]: "WUE (Water Usage Effectiveness):"
          - text: The ratio of data center water consumption to IT equipment energy use. Lower is better.
        - separator [ref=e345]
        - heading "Contributing to This Domain" [level=2] [ref=e346]
        - paragraph [ref=e347]: "This policy model is a living document. Contributions especially welcome from people with expertise in:"
        - list [ref=e348]:
          - listitem [ref=e349]: Digital carbon measurement methodology
          - listitem [ref=e350]: Green hosting procurement and certification
          - listitem [ref=e351]: Software lifecycle policy and ecodesign regulation
          - listitem [ref=e352]: National or subnational sustainability reporting frameworks
          - listitem [ref=e353]: W3C WSG implementation in government contexts
        - paragraph [ref=e354]:
          - text: Open an
          - link "Issue" [ref=e355] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/issues
          - text: to propose changes or additions. See
          - link "CONTRIBUTING.md" [ref=e356] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - text: for the contribution process.
        - separator [ref=e357]
        - paragraph [ref=e358]:
          - emphasis [ref=e359]:
            - text: This policy model is published under
            - link "Creative Commons Attribution 4.0 International (CC BY 4.0)" [ref=e360] [cursor=pointer]:
              - /url: https://creativecommons.org/licenses/by/4.0/
            - text: . You are free to share and adapt this material for any purpose, including commercial use, provided you give appropriate credit.
      - link "✏️ Edit this policy on GitHub" [ref=e361] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/web-sustainability/full-model.md
  - contentinfo [ref=e362]:
    - generic [ref=e363]:
      - generic [ref=e364]:
        - heading "Open Digital Policies" [level=3] [ref=e365]
        - paragraph [ref=e366]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e367]:
        - heading "Policy Domains" [level=3] [ref=e368]
        - list [ref=e369]:
          - listitem [ref=e370]:
            - link "Who Pays for AI's Power Bill?" [ref=e371] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e372]:
            - link "Digital Services That Work for Everyone" [ref=e373] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e374]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e375] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e376]:
            - link "Public Money, Public Code" [ref=e377] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e378]:
            - link "AI That Works For You, Not On You" [ref=e379] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e380]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e381] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e382]:
            - link "A Greener Web" [ref=e383] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e384]:
            - link "Your City Is Watching You" [ref=e385] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e386]:
            - link "Whose Internet Is It?" [ref=e387] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e388]:
            - link "Technology That's Safe for Kids" [ref=e389] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e390]:
            - link "Who Decides What You Can Say Online?" [ref=e391] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e392]:
            - link "Digital Infrastructure for Everyone" [ref=e393] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e394]:
        - heading "Resources" [level=3] [ref=e395]
        - list [ref=e396]:
          - listitem [ref=e397]:
            - link "Explore all domains" [ref=e398] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e399]:
            - link "Adoptions tracker" [ref=e400] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e401]:
            - link "Search" [ref=e402] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e403]:
            - link "About this project" [ref=e404] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e405]:
            - link "How to contribute" [ref=e406] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e407]:
            - link "Glossary" [ref=e408] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e409]:
        - heading "Community" [level=3] [ref=e410]
        - list [ref=e411]:
          - listitem [ref=e412]:
            - link "GitHub repository" [ref=e413] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e414]:
            - link "Open an issue" [ref=e415] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e416]:
            - link "Propose a domain" [ref=e417] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e418]:
            - link "Report an adoption" [ref=e419] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e420]:
      - generic [ref=e421]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e422] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e423]:
        - text: Maintained by
        - link "the ODP community" [ref=e424] [cursor=pointer]:
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