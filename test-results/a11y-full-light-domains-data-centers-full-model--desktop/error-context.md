# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/data-centers/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/data-centers/full-model/ [light]:

[CRITICAL] label: Ensure every form element has a label
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled" checked="checked">

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 313

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
      - heading "Who Pays for AI's Power Bill?" [level=1] [ref=e29]
      - paragraph [ref=e30]: Data Centers & Environmental Sustainability
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
        - heading "Data Centers & Environmental Sustainability — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-04
            - strong [ref=e57]: "Related domains:"
            - link "AI Adoption" [ref=e58] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - text: ","
            - link "Digital Sovereignty" [ref=e59] [cursor=pointer]:
              - /url: ../../digital-sovereignty/full-model/
            - text: ","
            - link "Open Source in Government" [ref=e60] [cursor=pointer]:
              - /url: ../../open-source-in-government/full-model/
        - separator [ref=e61]
        - heading "Overview" [level=2] [ref=e62]
        - paragraph [ref=e63]: Data centers are the physical infrastructure of the digital economy. Every search, every AI query, every streamed video, every cloud backup requires electricity and, in most facilities, large volumes of water for cooling. Global data center electricity consumption is projected to double or triple by 2030, driven primarily by AI workloads. In some countries, data centers already consume more electricity than all residential use combined.
        - paragraph [ref=e64]: This growth is not inherently bad — but without policy frameworks, the costs fall on communities (through strained grids, stressed watersheds, and landscape disruption) while benefits flow primarily to distant shareholders. Host communities are often the last to know and the least consulted.
        - heading "The Core Tension" [level=3] [ref=e65]
        - paragraph [ref=e66]:
          - strong [ref=e67]: We want the economic and social benefits of digital infrastructure — but not at the cost of clean water, reliable electricity for existing residents, or the ability of communities to shape what gets built in their midst.
        - heading "Scope" [level=3] [ref=e68]
        - paragraph [ref=e69]: "This policy model is designed to apply at the level of:"
        - list [ref=e70]:
          - listitem [ref=e71]:
            - checkbox [checked] [disabled] [ref=e72]
            - text: Municipal / local government (zoning, permitting, community benefit)
          - listitem [ref=e73]:
            - checkbox [checked] [disabled] [ref=e74]
            - text: Regional / state / provincial government (grid impact, water rights, reporting)
          - listitem [ref=e75]:
            - checkbox [checked] [disabled] [ref=e76]
            - text: National government (efficiency standards, renewable mandates, strategic siting)
          - listitem [ref=e77]:
            - checkbox [checked] [disabled] [ref=e78]
            - text: Public sector procurement (government data center standards)
        - separator [ref=e79]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e80]'
        - heading "Foundational Values" [level=3] [ref=e81]
        - paragraph [ref=e82]:
          - strong [ref=e83]: 1. Community benefit, not extraction
          - text: Data centers built in a community should benefit that community — through employment, tax contribution, energy access, and shared infrastructure — not merely extract resources (water, electricity, land) for distant corporate benefit. Siting decisions must involve genuine community consent, not just regulatory compliance.
        - paragraph [ref=e84]:
          - strong [ref=e85]: 2. Transparency about material footprint
          - text: The environmental costs of data infrastructure — electricity, water, land, embodied carbon in hardware — must be measured, disclosed, and accounted for in the same way that industrial emissions are. “Digital” does not mean “clean.”
        - paragraph [ref=e86]:
          - strong [ref=e87]: 3. Additionality in renewable energy claims
          - text: A data center operator claiming to run on “100% renewable energy” through Renewable Energy Certificates (RECs) purchased from existing capacity is not reducing grid emissions. Policies must distinguish between genuine additionality (new renewable generation added to the grid) and paper certificates that do not reduce real-world fossil fuel use.
        - paragraph [ref=e88]:
          - strong [ref=e89]: 4. Water as a shared resource
          - text: Water used for cooling is water unavailable to agriculture, ecosystems, and community water systems. In water-stressed regions, this trade-off requires explicit public deliberation — not just permits granted by individual agencies.
        - paragraph [ref=e90]:
          - strong [ref=e91]: 5. Grid resilience for existing users
          - text: Data center load growth must not compromise grid reliability for existing residential and commercial users. Large load additions require transparent grid impact assessments before approval.
        - paragraph [ref=e92]:
          - strong [ref=e93]: 6. Hardware longevity and e-waste
          - text: The environmental impact of data infrastructure extends beyond operation to manufacturing and disposal. Policies should incentivize hardware longevity, right to repair for server equipment, and responsible e-waste management.
        - paragraph [ref=e94]:
          - strong [ref=e95]: 7. Democratic siting
          - text: Communities have a right to participate meaningfully in decisions about large-scale digital infrastructure in their midst — before projects are approved, not after ground is broken.
        - heading "Equity Considerations" [level=3] [ref=e96]
        - list [ref=e97]:
          - listitem [ref=e98]:
            - strong [ref=e99]: Low-income and Indigenous communities
            - text: are frequently targeted for data center siting because land is cheaper and local governments are more desperate for economic development. They bear environmental burdens while tax abatements reduce fiscal benefit. Community benefit agreements must address this asymmetry.
          - listitem [ref=e100]:
            - strong [ref=e101]: Agricultural communities
            - text: in water-stressed regions face direct competition for water resources. Policy must require water impact assessment that includes effects on farming and food security.
          - listitem [ref=e102]:
            - strong [ref=e103]: Workers
            - text: in data centers are often employed through staffing agencies with limited benefits. Community benefit requirements should address employment quality, not just job quantity.
        - heading "Environmental Considerations" [level=3] [ref=e104]
        - paragraph [ref=e105]: "Current global data center electricity consumption is estimated at 200–250 TWh/year (2024), with projections of 500–1,000 TWh by 2030 under AI-intensive growth scenarios. Water consumption is less well measured but significant: a large hyperscale data center may use millions of litres of water per day. Hardware manufacturing accounts for significant embodied carbon — often larger than operational emissions over the equipment lifetime."
        - separator [ref=e106]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e107]'
        - heading "Mandatory Standards" [level=3] [ref=e108]
        - blockquote [ref=e109]:
          - paragraph [ref=e110]:
            - strong [ref=e111]: Baseline Transparency Requirement (Pre-Permit)
            - text: "No permit for a new data center or major expansion shall be approved until the operator has published a Community Impact Disclosure covering: (a) projected annual electricity consumption (kWh) and peak electrical demand (MW); (b) projected annual water consumption (litres) by cooling method; (c) planned energy sources and any renewable energy claims with supporting additionality documentation; (d) planned hardware procurement and end-of-life disposition strategy; (e) projected job creation by wage band and employment type (direct vs. contracted); and (f) any planned onsite generation. This disclosure shall be published in plain language, made available in languages spoken by at least 5% of the host community’s population, and posted in a publicly accessible location for a minimum 60-day public comment period before permit decision."
        - paragraph [ref=e112]:
          - emphasis [ref=e113]: "Rationale:"
          - text: Communities cannot evaluate the impact of digital infrastructure they cannot measure. Transparency at the pre-permit stage — not just post-construction reporting — is the only mechanism that gives communities genuine leverage. Current practice in most jurisdictions involves little or no pre-approval disclosure; data center developers often negotiate with economic development agencies in private before communities are aware of a project.
        - paragraph [ref=e114]:
          - emphasis [ref=e115]: "Reference:"
          - link "Ireland’s Data Centre Planning Guidelines (2022)" [ref=e116] [cursor=pointer]:
            - /url: https://www.gov.ie/en/publication/
          - text: ": Ireland’s national framework includes impact assessment requirements at the planning stage."
          - link "Virginia SB 1398 (2024)" [ref=e117] [cursor=pointer]:
            - /url: https://lis.virginia.gov
          - text: ": community impact transparency requirements tied to tax incentives."
        - separator [ref=e118]
        - blockquote [ref=e119]:
          - paragraph [ref=e120]:
            - strong [ref=e121]: Ongoing Operational Transparency
            - text: "All data centers operating within this jurisdiction exceeding [X] MW of IT load shall publish quarterly operational reports including: (a) actual electricity consumption and PUE ratio for the quarter; (b) actual water consumption and WUE ratio; (c) renewable energy sourcing documentation; (d) grid events (any instances where onsite generation was activated); and (e) any material changes to operations. Quarterly reports shall be machine-readable and published under an open data license. Annual summaries shall be submitted to [designated authority] and published in a central registry accessible without registration."
        - paragraph [ref=e122]:
          - emphasis [ref=e123]: "Rationale:"
          - text: Annual reporting is too infrequent to allow meaningful community oversight. Quarterly reporting — in machine-readable formats — allows researchers, journalists, local governments, and community members to monitor trends and identify problems in near-real-time. The open data requirement ensures that aggregated analysis across facilities is possible.
        - separator [ref=e124]
        - blockquote [ref=e125]:
          - paragraph [ref=e126]:
            - strong [ref=e127]: No Onsite Fossil Fuel Generation
            - text: "No data center operating within this jurisdiction shall install, operate, or contract for onsite fossil fuel generation capacity, including diesel generators, natural gas turbines, or any internal combustion generation technology, for the purpose of meeting routine or peak operational load. Emergency backup generation for life-safety purposes (e.g., maintaining cooling to prevent hardware damage during grid outages) is permitted under the following conditions: (a) backup generation capacity shall not exceed [X]% of IT load; (b) backup generators shall run no more than [72] hours per year in aggregate outside of testing; (c) testing shall be reported quarterly; and (d) operators shall develop and publish a transition plan to battery storage or other non-fossil backup within [5] years of this policy taking effect."
        - paragraph [ref=e128]:
          - emphasis [ref=e129]: "Rationale:"
          - text: “Backup” gas turbines and diesel generators have been used by several major data center operators as de facto peaking generation — running frequently during high electricity prices or grid stress events, effectively functioning as private power plants burning fossil fuel while the operator claims to run on renewable energy. This loophole has been documented in Virginia, Ireland, and the Netherlands. The provision above closes it by limiting backup operation to genuine emergency use only and requiring a transition away from fossil backup entirely.
        - paragraph [ref=e130]:
          - emphasis [ref=e131]: "Reference:"
          - link "Virginia SCC data center generator controversy (2022–2024)" [ref=e132] [cursor=pointer]:
            - /url: https://www.scc.virginia.gov
          - text: ": multiple operators ran diesel and gas generators for extended periods, contributing to local air quality violations."
          - link "Greenpeace report on data center backup generation" [ref=e133] [cursor=pointer]:
            - /url: https://www.greenpeace.org
          - text: .
        - separator [ref=e134]
        - blockquote [ref=e135]:
          - paragraph [ref=e136]:
            - strong [ref=e137]: Power Usage Effectiveness (PUE) Limit
            - text: Any new data center or major expansion requiring a building permit or environmental review shall achieve a Power Usage Effectiveness (PUE) ratio of no greater than 1.2 within 24 months of commencing operation. Existing data centers shall disclose their current PUE ratio annually and achieve 1.4 or below within 36 months of this policy taking effect.
        - paragraph [ref=e138]:
          - emphasis [ref=e139]: "Rationale:"
          - text: PUE measures the ratio of total facility energy to IT equipment energy. A PUE of 1.0 is theoretically perfect; older facilities may have PUE of 1.5–2.0 or higher. The 1.2 threshold reflects best-in-class practice and is achievable with current technology. The EU Energy Efficiency Directive sets a 1.2 target for new data centers by 2030; this model policy is more immediate.
        - paragraph [ref=e140]:
          - emphasis [ref=e141]: "Reference:"
          - link "EU Energy Efficiency Directive (2023/1791)" [ref=e142] [cursor=pointer]:
            - /url: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023L1791
          - text: ;
          - link "EU Code of Conduct for Data Centre Energy Efficiency" [ref=e143] [cursor=pointer]:
            - /url: https://e3p.jrc.ec.europa.eu/publications/2023-eu-code-conduct-data-centre-energy-efficiency-best-practice-guidelines
        - separator [ref=e144]
        - blockquote [ref=e145]:
          - paragraph [ref=e146]:
            - strong [ref=e147]: Water Usage Effectiveness (WUE) Disclosure and Limits
            - text: Any data center operating or seeking permits within this jurisdiction shall measure and publicly disclose its annual Water Usage Effectiveness (WUE) ratio and total water consumption in litres per year. New data centers in water-stressed areas (as defined by [applicable water scarcity index]) shall demonstrate that water consumption does not exceed [X] litres per kWh of IT equipment energy, or shall use closed-loop or air-cooling systems that minimize freshwater withdrawal.
        - paragraph [ref=e148]:
          - emphasis [ref=e149]: "Rationale:"
          - text: Water consumption is a critical and underregulated aspect of data center impact. WUE (litres of water per kWh of IT energy) is the standard metric. Leading operators achieve WUE below 0.5 L/kWh; many existing facilities are above 2 L/kWh. Water stress classification can draw on existing national or international indices (e.g., World Resources Institute Aqueduct).
        - paragraph [ref=e150]:
          - emphasis [ref=e151]: "Reference:"
          - link "UNEP Sustainable Procurement Guidelines for Data Centres (2023)" [ref=e152] [cursor=pointer]:
            - /url: https://www.unep.org/resources/toolkits-manuals-and-guides/sustainable-procurement-guidelines-data-centres-and-servers
          - text: ;
          - link "Green Grid WUE metric" [ref=e153] [cursor=pointer]:
            - /url: https://www.thegreengrid.org
        - separator [ref=e154]
        - blockquote [ref=e155]:
          - paragraph [ref=e156]:
            - strong [ref=e157]: Renewable Energy Additionality Requirement
            - text: "Claims of renewable energy use by data centers operating within this jurisdiction shall be substantiated by documentation demonstrating additionality: that the renewable generation claimed was newly commissioned within the same grid balancing area and within 12 months of the period of claimed use. Renewable Energy Certificates (RECs) or similar instruments that do not meet the additionality standard shall not be counted toward renewable energy targets under this policy."
        - paragraph [ref=e158]:
          - emphasis [ref=e159]: "Rationale:"
          - text: RECs allow operators to claim renewable use without changing actual grid emissions. The “24/7 carbon-free energy” framework, adopted by Google and Microsoft and codified in some European procurement standards, requires time-matched and location-matched renewable energy — a much stronger standard. This model language adopts the additionality principle without requiring full 24/7 matching immediately, providing a realistic transition path.
        - paragraph [ref=e160]:
          - emphasis [ref=e161]: "Reference:"
          - link "Google 24/7 Carbon-Free Energy" [ref=e162] [cursor=pointer]:
            - /url: https://sustainability.google/operating-sustainably/
          - text: ;
          - link "RE100 criteria" [ref=e163] [cursor=pointer]:
            - /url: https://www.there100.org
          - text: ;
          - link "EU Taxonomy delegated act on data centers" [ref=e164] [cursor=pointer]:
            - /url: https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en
        - separator [ref=e165]
        - blockquote [ref=e166]:
          - paragraph [ref=e167]:
            - strong [ref=e168]: Community Benefit Agreement (CBA) Requirement
            - text: "Any data center facility exceeding [X] MW of planned IT load requiring municipal or regional permitting shall enter into a Community Benefit Agreement with the host municipality and a community representative body prior to permit approval. The CBA shall address at minimum: (a) local employment commitments including wage floors and benefits; (b) a community investment fund of no less than [Y]% of annual revenue; (c) public disclosure of energy and water consumption; (d) end-of-life hardware disposition; and (e) mechanisms for community-initiated review if environmental commitments are not met."
        - paragraph [ref=e169]:
          - emphasis [ref=e170]: "Rationale:"
          - text: CBAs are an established tool for ensuring that major infrastructure projects share benefits with host communities. They require negotiation before approval, giving communities meaningful leverage. The MW threshold and percentage figures should be calibrated to local context.
        - paragraph [ref=e171]:
          - emphasis [ref=e172]: "Reference:"
          - link "Metropolitan Washington Council of Governments data center CBA framework" [ref=e173] [cursor=pointer]:
            - /url: https://www.mwcog.org
          - text: ; [Amazon HQ2 community benefit precedents]
        - separator [ref=e174]
        - blockquote [ref=e175]:
          - paragraph [ref=e176]:
            - strong [ref=e177]: Grid Impact Assessment
            - text: Any proposed data center or expansion adding more than [X] MW of electrical load shall submit a grid impact assessment to the relevant grid operator and planning authority prior to permit approval. The assessment shall evaluate effects on grid reliability, transmission capacity, existing rate structures for residential users, and local air quality from any fossil generation required to serve incremental load.
        - paragraph [ref=e178]:
          - emphasis [ref=e179]: "Rationale:"
          - text: Large data centers can stress local grid infrastructure and trigger fossil generation to meet demand. Transparent assessment before approval allows communities and grid operators to plan appropriately and require mitigation.
        - separator [ref=e180]
        - heading "Aspirational Standards" [level=3] [ref=e181]
        - blockquote [ref=e182]:
          - paragraph [ref=e183]:
            - strong [ref=e184]: Hardware Longevity and Circular Economy
            - emphasis [ref=e185]: (mandatory for facilities receiving public subsidies)
            - text: "All data centers receiving public tax incentives, subsidies, grants, or operating on publicly owned land shall: (a) commit to minimum server hardware in-service periods of no less than [5] years from date of deployment, with documented justification required for any early retirement; (b) publish an annual Hardware Lifecycle Report covering total units deployed, retired, refurbished or resold, donated, and disposed of, with disposal method for each category; (c) contract only with certified electronics recyclers for hardware disposal — certification to be verified annually; (d) achieve zero landfill disposal for all IT equipment within [24] months of this policy taking effect; and (e) give priority to certified refurbishment organisations, educational institutions, and non-profit community organisations when disposing of functional used hardware."
        - paragraph [ref=e186]: For all other data centers, the above requirements are strongly recommended and shall be reported on voluntarily in the operational transparency disclosures.
        - paragraph [ref=e187]:
          - emphasis [ref=e188]: "Rationale:"
          - text: Server hardware carries significant embodied carbon — the emissions from manufacturing often exceed operational emissions over the equipment’s lifetime. Extending useful server life from 3–4 years (typical industry norm) to 5+ years reduces embodied carbon substantially. More importantly, massive volumes of perfectly functional servers are discarded purely because a newer model is available, while communities and public institutions lack access to affordable computing hardware. The refurbishment and donation provisions address both the environmental and equity dimensions of this failure. This is listed as aspirational because it goes beyond current regulatory requirements in most jurisdictions — but it is achievable with standard procurement and contracting practice, and should be made mandatory for facilities receiving public support.
        - paragraph [ref=e189]:
          - emphasis [ref=e190]: "Reference:"
          - link "EU Ecodesign Regulation for servers (in development)" [ref=e191] [cursor=pointer]:
            - /url: https://ec.europa.eu/info/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/ecodesign/products-and-packaging_en
          - text: ": EU is developing minimum durability and recyclability standards for server hardware."
          - link "iFixit Right to Repair for data centers" [ref=e192] [cursor=pointer]:
            - /url: https://www.ifixit.com
          - text: ": framework for server repairability."
        - separator [ref=e193]
        - blockquote [ref=e194]:
          - paragraph [ref=e195]:
            - strong [ref=e196]: Open Infrastructure and Interoperability
            - text: Publicly funded data infrastructure should use open hardware standards and open software stacks wherever technically feasible, to reduce vendor lock-in and enable community oversight. Operators of public cloud infrastructure should publish interoperability APIs under open license.
        - separator [ref=e197]
        - heading "Standards Cross-Reference" [level=3] [ref=e198]
        - table [ref=e199]:
          - rowgroup [ref=e200]:
            - row "Standard Referenced Body Version Notes" [ref=e201]:
              - columnheader "Standard Referenced" [ref=e202]
              - columnheader "Body" [ref=e203]
              - columnheader "Version" [ref=e204]
              - columnheader "Notes" [ref=e205]
          - rowgroup [ref=e206]:
            - row "PUE metric Green Grid / ISO ISO 30134-2 Mandatory disclosure" [ref=e207]:
              - cell "PUE metric" [ref=e208]
              - cell "Green Grid / ISO" [ref=e209]
              - cell "ISO 30134-2" [ref=e210]
              - cell "Mandatory disclosure" [ref=e211]
            - row "WUE metric Green Grid — Mandatory disclosure" [ref=e212]:
              - cell "WUE metric" [ref=e213]
              - cell "Green Grid" [ref=e214]
              - cell "—" [ref=e215]
              - cell "Mandatory disclosure" [ref=e216]
            - row "EU Energy Efficiency Directive European Union 2023/1791 Target alignment" [ref=e217]:
              - cell "EU Energy Efficiency Directive" [ref=e218]
              - cell "European Union" [ref=e219]
              - cell "2023/1791" [ref=e220]
              - cell "Target alignment" [ref=e221]
            - row "EU Code of Conduct for Data Centres JRC / E3P 2023 Best practice alignment" [ref=e222]:
              - cell "EU Code of Conduct for Data Centres" [ref=e223]
              - cell "JRC / E3P" [ref=e224]
              - cell "2023" [ref=e225]
              - cell "Best practice alignment" [ref=e226]
            - row "UNEP Procurement Guidelines UNEP 2023 Procurement reference" [ref=e227]:
              - cell "UNEP Procurement Guidelines" [ref=e228]
              - cell "UNEP" [ref=e229]
              - cell "2023" [ref=e230]
              - cell "Procurement reference" [ref=e231]
            - row "ISO 14001 ISO 2015 Environmental management aspirational" [ref=e232]:
              - cell "ISO 14001" [ref=e233]
              - cell "ISO" [ref=e234]
              - cell "2015" [ref=e235]
              - cell "Environmental management aspirational" [ref=e236]
            - row "EU Taxonomy — data centers European Commission 2021 Technical screening criteria" [ref=e237]:
              - cell "EU Taxonomy — data centers" [ref=e238]
              - cell "European Commission" [ref=e239]
              - cell "2021" [ref=e240]
              - cell "Technical screening criteria" [ref=e241]
        - separator [ref=e242]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e243]'
        - heading "Procurement Requirements" [level=3] [ref=e244]
        - blockquote [ref=e245]:
          - paragraph [ref=e246]:
            - strong [ref=e247]: Public Sector Data Center Procurement Clause
            - text: "When procuring data center services, co-location, or cloud infrastructure services, public bodies shall require vendors to: (a) disclose PUE and WUE ratios for facilities serving the contract; (b) demonstrate renewable energy coverage meeting the additionality standard defined in this policy; (c) provide evidence of compliance with applicable environmental reporting requirements; and (d) certify that no subcontractors involved in hardware manufacturing or disposal are subject to active violations of international environmental or labour standards."
        - separator [ref=e248]
        - heading "Transition and Timeline" [level=3] [ref=e249]
        - table [ref=e250]:
          - rowgroup [ref=e251]:
            - row "Milestone Timeframe from policy adoption" [ref=e252]:
              - columnheader "Milestone" [ref=e253]
              - columnheader "Timeframe from policy adoption" [ref=e254]
          - rowgroup [ref=e255]:
            - row "PUE and WUE disclosure begins (all facilities) 6 months" [ref=e256]:
              - cell "PUE and WUE disclosure begins (all facilities)" [ref=e257]
              - cell "6 months" [ref=e258]
            - row "Grid impact assessment required for new permits Immediate" [ref=e259]:
              - cell "Grid impact assessment required for new permits" [ref=e260]
              - cell "Immediate" [ref=e261]
            - row "CBA required for large new facilities Immediate" [ref=e262]:
              - cell "CBA required for large new facilities" [ref=e263]
              - cell "Immediate" [ref=e264]
            - row "PUE ≤ 1.4 required for existing facilities 36 months" [ref=e265]:
              - cell "PUE ≤ 1.4 required for existing facilities" [ref=e266]
              - cell "36 months" [ref=e267]
            - row "PUE ≤ 1.2 required for new facilities 24 months from opening" [ref=e268]:
              - cell "PUE ≤ 1.2 required for new facilities" [ref=e269]
              - cell "24 months from opening" [ref=e270]
            - row "Renewable additionality reporting begins 12 months" [ref=e271]:
              - cell "Renewable additionality reporting begins" [ref=e272]
              - cell "12 months" [ref=e273]
            - row "Full aspirational standards review 48 months" [ref=e274]:
              - cell "Full aspirational standards review" [ref=e275]
              - cell "48 months" [ref=e276]
        - heading "Reporting and Transparency" [level=3] [ref=e277]
        - blockquote [ref=e278]:
          - paragraph [ref=e279]:
            - strong [ref=e280]: Annual Environmental Disclosure
            - text: "All data centers operating within this jurisdiction exceeding [X] MW of IT load shall publish an annual Environmental Performance Report no later than [March 31] of the following year. The report shall be publicly accessible on the operator’s website and filed with [designated regulatory body]. It shall include: (a) total electricity consumption (kWh); (b) PUE ratio (annual average and peak); (c) total water consumption and WUE ratio; (d) renewable energy sourcing with additionality documentation; (e) hardware refresh and disposal volumes; (f) scope 1, 2, and 3 greenhouse gas emissions; and (g) status of Community Benefit Agreement commitments."
        - heading "Enforcement" [level=3] [ref=e281]
        - blockquote [ref=e282]:
          - paragraph [ref=e283]:
            - strong [ref=e284]: Enforcement and Penalties
            - text: Failure to submit required environmental disclosures within 30 days of the required date shall result in an administrative penalty of [X per day]. Material misrepresentation in disclosures shall be subject to penalties of up to [Y% of annual revenue]. Any person may file a complaint with [designated body] regarding an operator’s compliance with this policy. Complaints shall be acknowledged within 10 days and resolved within 90 days. Enforcement decisions shall be published.
        - separator [ref=e285]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e286]'
        - heading "Oversight Body" [level=3] [ref=e287]
        - blockquote [ref=e288]:
          - paragraph [ref=e289]:
            - strong [ref=e290]: Designated Oversight Authority
            - text: "Responsibility for administering this policy shall vest in [existing environmental/planning authority or new designated body]. The authority shall have power to: request additional information from operators; conduct site inspections; issue compliance notices; impose administrative penalties; and publish annual compliance reports covering all regulated facilities."
        - heading "Community Representation" [level=3] [ref=e291]
        - blockquote [ref=e292]:
          - paragraph [ref=e293]:
            - strong [ref=e294]: Community Advisory Committee
            - text: "Any municipality hosting one or more data centers exceeding [X] MW shall establish a Community Data Center Advisory Committee. Membership shall include: (a) at minimum two representatives from communities directly adjacent to data center facilities; (b) one representative from the local environmental or conservation sector; (c) one representative from the local labour sector; and (d) one representative nominated by the local Indigenous governing body, where applicable. The Committee shall have access to all required disclosures, the right to request additional information from operators, and the right to submit formal recommendations to the oversight authority. Committee meetings shall be open to the public."
        - heading "Audit and Review" [level=3] [ref=e295]
        - blockquote [ref=e296]:
          - paragraph [ref=e297]:
            - strong [ref=e298]: Independent Audit
            - text: Data centers reporting PUE or WUE figures under this policy shall submit to independent third-party verification of those figures at least every three years. Verification shall be conducted by a qualified body and the verification report shall be publicly disclosed.
        - blockquote [ref=e299]:
          - paragraph [ref=e300]:
            - strong [ref=e301]: Policy Review
            - text: This policy shall be reviewed every three years by the oversight authority in consultation with the Community Advisory Committee. The review shall assess whether efficiency standards remain aligned with best available technology, whether equity and environmental commitments are being met, and whether the policy scope should be expanded. Review findings shall be published.
        - separator [ref=e302]
        - heading "Real-World Examples" [level=2] [ref=e303]
        - heading "Ireland — National Data Center Policy (2022)" [level=3] [ref=e304]
        - paragraph [ref=e305]:
          - strong [ref=e306]: "Enacted/Proposed:"
          - text: "2022"
          - strong [ref=e307]: "Type:"
          - text: National planning and energy policy
          - strong [ref=e308]: "Link:"
          - link "EirGrid Data Centre Strategy" [ref=e309] [cursor=pointer]:
            - /url: https://www.eirgrid.ie
          - strong [ref=e310]: "Summary:"
          - text: "Ireland became a cautionary tale in data center policy: by 2022, data centers consumed nearly 18% of national electricity, and grid operator EirGrid imposed a de facto moratorium on new connections in the Dublin region due to grid capacity constraints. The government’s response — a policy paper requiring new data centers to demonstrate grid benefit rather than merely grid impact — is one of the most advanced in the world. Ireland’s experience demonstrates what happens without upstream policy: communities lose grid reliability, and governments lose leverage."
        - separator [ref=e311]
        - heading "Germany — Renewable Energy Mandate for Data Centers (2023)" [level=3] [ref=e312]
        - paragraph [ref=e313]:
          - strong [ref=e314]: "Enacted/Proposed:"
          - text: "2023"
          - strong [ref=e315]: "Type:"
          - text: National legislation (Energy Efficiency Act)
          - strong [ref=e316]: "Link:"
          - link "German Energy Efficiency Act (EnEfG)" [ref=e317] [cursor=pointer]:
            - /url: https://www.gesetze-im-internet.de/enefg/
          - strong [ref=e318]: "Summary:"
          - text: Germany’s Energy Efficiency Act requires new data centers to source 50% renewable energy from 2024, rising to 100% by 2027. It also establishes PUE requirements (1.2 for new data centers from 2026) and mandates waste heat recovery where technically feasible. This is the strongest national-level enacted standard globally as of 2025 and is the primary reference for Pillar 2 standards in this model.
        - separator [ref=e319]
        - heading "Virginia, USA — Data Center Tax Incentive Reform" [level=3] [ref=e320]
        - paragraph [ref=e321]:
          - strong [ref=e322]: "Enacted/Proposed:"
          - text: 2022–2024 (ongoing)
          - strong [ref=e323]: "Type:"
          - text: State legislation
          - strong [ref=e324]: "Link:"
          - link "Virginia data center incentive legislation" [ref=e325] [cursor=pointer]:
            - /url: https://lis.virginia.gov
          - strong [ref=e326]: "Summary:"
          - text: Virginia hosts more data centers than any other state, largely due to long-standing tax incentives. A coalition of community groups, environmental organizations, and utility advocates has pushed for reform, including tying tax incentives to renewable energy commitments and community benefit agreements. The debate in Virginia is an important model for how incentive reform can be used as a policy lever even where direct regulation is politically difficult.
        - separator [ref=e327]
        - heading "European Union — EU Code of Conduct for Data Centres" [level=3] [ref=e328]
        - paragraph [ref=e329]:
          - strong [ref=e330]: "Enacted/Proposed:"
          - text: 2008, updated annually
          - strong [ref=e331]: "Type:"
          - text: Voluntary industry code (EU Joint Research Centre)
          - strong [ref=e332]: "Link:"
          - link "EU Code of Conduct for Data Centres" [ref=e333] [cursor=pointer]:
            - /url: https://e3p.jrc.ec.europa.eu/communities/data-centres-code-conduct
          - strong [ref=e334]: "Summary:"
          - text: The EU Code of Conduct is a voluntary best practice framework that has been the basis for many of the standards codified in the EU Energy Efficiency Directive. Signatories commit to annual energy efficiency reporting and improvement. While voluntary, it provides a well-documented set of technical standards that this model policy references and in some cases makes mandatory.
        - separator [ref=e335]
        - heading "Amsterdam, Netherlands — Moratorium on New Data Centers" [level=3] [ref=e336]
        - paragraph [ref=e337]:
          - strong [ref=e338]: "Enacted/Proposed:"
          - text: 2019–2022
          - strong [ref=e339]: "Type:"
          - text: Municipal planning decision
          - strong [ref=e340]: "Link:"
          - link "Amsterdam data center moratorium reporting" [ref=e341] [cursor=pointer]:
            - /url: https://www.amsterdam.nl
          - strong [ref=e342]: "Summary:"
          - text: Amsterdam declared a moratorium on new data centers in 2019 due to grid capacity constraints and land use competition. This was one of the first municipal-level assertions of community control over data center siting and has influenced subsequent policy in the Netherlands and beyond. The moratorium was eventually lifted with new conditions, but demonstrated that municipalities can and should use planning powers to shape digital infrastructure development.
        - separator [ref=e343]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e344]
        - list [ref=e345]:
          - listitem [ref=e346]:
            - strong [ref=e347]: Scope 3 emissions accounting
            - text: — Hardware manufacturing (particularly semiconductors) is a major source of embodied carbon, but supply chain complexity makes this very difficult to measure and enforce at a local or national level. This model does not yet include enforceable scope 3 requirements beyond the hardware lifecycle provisions.
          - listitem [ref=e348]:
            - strong [ref=e349]: AI workload intensity
            - text: — This model does not distinguish between data center uses. AI training workloads are vastly more energy-intensive than general cloud hosting. Future revisions should consider whether AI-specific facilities require additional standards, including compute-per-watt efficiency requirements.
          - listitem [ref=e350]:
            - strong [ref=e351]: Water stress calibration
            - text: — The model refers to water stress indices but does not specify one. Jurisdictions need to select the appropriate index for their geographic context (e.g., WRI Aqueduct, national drought classifications).
          - listitem [ref=e352]:
            - strong [ref=e353]: Global South representation
            - text: — Real-world examples here are almost entirely from Europe and North America. Data center development in Southeast Asia, Latin America, and Africa is growing rapidly and faces different regulatory contexts — particularly around grid reliability and water access.
          - listitem [ref=e354]:
            - strong [ref=e355]: Community benefit enforcement
            - text: — CBAs are only as strong as their enforcement mechanisms. Model language for CBA enforcement beyond regulatory compliance is underdeveloped. Third-party monitoring and community-initiated audit rights need further development.
          - listitem [ref=e356]:
            - strong [ref=e357]: Battery storage transition for backup
            - text: — The no-fossil-generation clause requires a transition to battery or alternative backup, but does not specify standards for battery safety, environmental impact of battery manufacturing, or end-of-life battery disposal. This is a gap requiring a future revision.
          - listitem [ref=e358]:
            - strong [ref=e359]: Transparency verification
            - text: — The model requires disclosure but does not yet include strong verification requirements for reported PUE/WUE figures outside the audit clause. Self-reported figures from data centers have been found to be inaccurate in several documented cases.
        - separator [ref=e360]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e361]
        - table [ref=e362]:
          - rowgroup [ref=e363]:
            - row "Related Domain Relationship" [ref=e364]:
              - columnheader "Related Domain" [ref=e365]
              - columnheader "Relationship" [ref=e366]
          - rowgroup [ref=e367]:
            - row "AI Adoption & Governance AI workloads are primary drivers of data center growth; AI policy must address compute footprint" [ref=e368]:
              - cell "AI Adoption & Governance" [ref=e369]
              - cell "AI workloads are primary drivers of data center growth; AI policy must address compute footprint" [ref=e370]
            - row "Open Source in Government Open source software stacks reduce vendor lock-in in data center infrastructure" [ref=e371]:
              - cell "Open Source in Government" [ref=e372]
              - cell "Open source software stacks reduce vendor lock-in in data center infrastructure" [ref=e373]
            - row "Digital Sovereignty Community-controlled data infrastructure requires siting and operational sovereignty" [ref=e374]:
              - cell "Digital Sovereignty" [ref=e375]
              - cell "Community-controlled data infrastructure requires siting and operational sovereignty" [ref=e376]
            - row "Right to Repair & Interoperability Server hardware longevity and right to repair reduce hardware-related environmental impact" [ref=e377]:
              - cell "Right to Repair & Interoperability" [ref=e378]
              - cell "Server hardware longevity and right to repair reduce hardware-related environmental impact" [ref=e379]
        - separator [ref=e380]
        - heading "Glossary" [level=2] [ref=e381]
        - paragraph [ref=e382]:
          - strong [ref=e383]: "PUE (Power Usage Effectiveness):"
          - text: The ratio of total data center energy consumption to IT equipment energy consumption. A PUE of 1.0 is theoretically perfect; lower is better.
        - paragraph [ref=e384]:
          - strong [ref=e385]: "WUE (Water Usage Effectiveness):"
          - text: The ratio of water used for data center cooling (in litres) to IT equipment energy (in kWh). Lower is better.
        - paragraph [ref=e386]:
          - strong [ref=e387]: "Additionality:"
          - text: In the context of renewable energy, the principle that claimed renewable energy consumption must come from newly constructed generation sources, not existing capacity. Prevents “paper” renewable claims that do not reduce grid emissions.
        - paragraph [ref=e388]:
          - strong [ref=e389]: "Community Benefit Agreement (CBA):"
          - text: A legally binding contract between a developer and a community (typically represented by a coalition of local organizations) that establishes specific commitments in exchange for community support or non-opposition to a project.
        - paragraph [ref=e390]:
          - strong [ref=e391]: "Hyperscale data center:"
          - text: A very large data center (typically >10,000 servers and >5 MW of IT load) operated by a major cloud or technology company. Examples include facilities operated by Amazon (AWS), Microsoft (Azure), and Google (GCP).
        - paragraph [ref=e392]:
          - strong [ref=e393]: "IT load:"
          - text: The electrical power consumed by IT equipment (servers, storage, networking) within a data center, as distinct from cooling, lighting, and other facility loads.
        - separator [ref=e394]
        - heading "Contributing to This Policy Model" [level=2] [ref=e395]
        - list [ref=e396]:
          - listitem [ref=e397]:
            - strong [ref=e398]: "Add a real-world example:"
            - text: Open a Pull Request adding a new entry to the Real-World Examples section with a citation — particularly examples from the Global South
          - listitem [ref=e399]:
            - strong [ref=e400]: "Improve model language:"
            - text: Open an Issue describing the problem, then submit a PR with proposed changes and rationale
          - listitem [ref=e401]:
            - strong [ref=e402]: "Address a gap:"
            - text: See the Gaps section — scope 3 accounting and AI-specific standards are the highest priorities
        - separator [ref=e403]
        - heading "Changelog" [level=2] [ref=e404]
        - table [ref=e405]:
          - rowgroup [ref=e406]:
            - row "Version Date Summary" [ref=e407]:
              - columnheader "Version" [ref=e408]
              - columnheader "Date" [ref=e409]
              - columnheader "Summary" [ref=e410]
          - rowgroup [ref=e411]:
            - row "0.1 2026-04-04 Initial draft" [ref=e412]:
              - cell "0.1" [ref=e413]
              - cell "2026-04-04" [ref=e414]
              - cell "Initial draft" [ref=e415]
      - link "✏️ Edit this policy on GitHub" [ref=e416] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/data-centers/full-model.md
  - contentinfo [ref=e417]:
    - generic [ref=e418]:
      - generic [ref=e419]:
        - heading "Open Digital Policies" [level=3] [ref=e420]
        - paragraph [ref=e421]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e422]:
        - heading "Policy Domains" [level=3] [ref=e423]
        - list [ref=e424]:
          - listitem [ref=e425]:
            - link "Who Pays for AI's Power Bill?" [ref=e426] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e427]:
            - link "Digital Services That Work for Everyone" [ref=e428] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e429]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e430] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e431]:
            - link "Public Money, Public Code" [ref=e432] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e433]:
            - link "AI That Works For You, Not On You" [ref=e434] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e435]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e436] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e437]:
            - link "A Greener Web" [ref=e438] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e439]:
            - link "Your City Is Watching You" [ref=e440] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e441]:
            - link "Whose Internet Is It?" [ref=e442] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e443]:
            - link "Technology That's Safe for Kids" [ref=e444] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e445]:
            - link "Who Decides What You Can Say Online?" [ref=e446] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e447]:
            - link "Digital Infrastructure for Everyone" [ref=e448] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e449]:
        - heading "Resources" [level=3] [ref=e450]
        - list [ref=e451]:
          - listitem [ref=e452]:
            - link "Explore all domains" [ref=e453] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e454]:
            - link "Adoptions tracker" [ref=e455] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e456]:
            - link "Search" [ref=e457] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e458]:
            - link "About this project" [ref=e459] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e460]:
            - link "How to contribute" [ref=e461] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e462]:
            - link "Glossary" [ref=e463] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e464]:
        - heading "Community" [level=3] [ref=e465]
        - list [ref=e466]:
          - listitem [ref=e467]:
            - link "GitHub repository" [ref=e468] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e469]:
            - link "Open an issue" [ref=e470] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e471]:
            - link "Propose a domain" [ref=e472] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e473]:
            - link "Report an adoption" [ref=e474] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e475]:
      - generic [ref=e476]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e477] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e478]:
        - text: Maintained by
        - link "the ODP community" [ref=e479] [cursor=pointer]:
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