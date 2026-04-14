# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/digital-public-infrastructure/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/digital-public-infrastructure/full-model/ [light]:

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
      - heading "Digital Infrastructure for Everyone" [level=1] [ref=e29]
      - paragraph [ref=e30]: Digital Public Infrastructure
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
        - heading "Digital Public Infrastructure — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-05
            - strong [ref=e57]: "Maintainers:"
            - text: Open Digital Policies community
            - strong [ref=e58]: "Related domains:"
            - link "Open Source in Government" [ref=e59] [cursor=pointer]:
              - /url: ../../open-source-in-government/full-model/
            - text: ","
            - link "Digital Sovereignty" [ref=e60] [cursor=pointer]:
              - /url: ../../digital-sovereignty/full-model/
            - text: ","
            - link "Digital Accessibility" [ref=e61] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: ","
            - link "AI Adoption" [ref=e62] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - strong [ref=e63]: "Key sources:"
            - text: UNDP/ITU Digital Public Infrastructure Framework, 50-in-5 Campaign, World Bank DPI Assessment, India’s India Stack, Estonia’s X-Road
        - separator [ref=e64]
        - heading "Overview" [level=2] [ref=e65]
        - paragraph [ref=e66]: Digital public infrastructure (DPI) — the foundational digital systems that enable governments, economies, and societies to function — is the digital equivalent of roads, water systems, and electrical grids. Just as physical infrastructure enables economic activity, social participation, and access to public services, DPI enables digital participation, financial inclusion, healthcare access, and civic engagement.
        - paragraph [ref=e67]: "DPI typically includes three foundational layers: digital identity systems (enabling people to prove who they are); payment systems (enabling value transfer); and data exchange infrastructure (enabling secure sharing of information between institutions and individuals). These three layers, well-designed, can enable universal access to financial services, healthcare, and government benefits. Poorly designed or governed, they can enable mass surveillance, exclusion of marginalised communities, and permanent dependency on a handful of private actors whose interests are not aligned with the public."
        - paragraph [ref=e68]: The 50-in-5 campaign — bringing together the UNDP, UNICEF, the Bill & Melinda Gates Foundation, and governments — aims to help 50 countries develop DPI within five years. The promise is universal inclusion and dramatically reduced costs for public service delivery. The risk is that poorly governed DPI becomes an infrastructure of control rather than an infrastructure of empowerment.
        - paragraph [ref=e69]: "This model policy establishes the governance requirements for trustworthy DPI: open standards, public governance, privacy by design, universal accessibility, democratic accountability, and genuine exit rights."
        - heading "The Core Tension" [level=3] [ref=e70]
        - paragraph [ref=e71]: We want digital infrastructure that enables everyone to access essential services — financial, governmental, healthcare — without creating surveillance systems that can be turned against the populations they serve, and without replacing one set of proprietary dependencies (on commercial platforms) with another (on DPI monopolies or vendor lock-in).
        - heading "Scope" [level=3] [ref=e72]
        - list [ref=e73]:
          - listitem [ref=e74]:
            - checkbox [checked] [disabled] [ref=e75]
            - text: Municipal / local government (where deploying DPI)
          - listitem [ref=e76]:
            - checkbox [checked] [disabled] [ref=e77]
            - text: Regional / state / provincial government
          - listitem [ref=e78]:
            - checkbox [checked] [disabled] [ref=e79]
            - text: National government (primary audience)
          - listitem [ref=e80]:
            - checkbox [checked] [disabled] [ref=e81]
            - text: Public sector procurement
          - listitem [ref=e82]:
            - checkbox [disabled] [ref=e83]
            - text: Regulated industry
          - listitem [ref=e84]:
            - checkbox [disabled] [ref=e85]
            - text: "Other:"
            - strong [ref=e86]: __
            - text: _____
        - separator [ref=e87]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e88]'
        - heading "Foundational Values" [level=3] [ref=e89]
        - paragraph [ref=e90]:
          - strong [ref=e91]: 1. DPI Is Public Goods Infrastructure — Not a Government Product
          - text: "Digital public infrastructure is conceptually more similar to roads than to government websites. Roads are publicly owned, publicly governed, and available to all — but private actors build cars and drive on them. DPI should enable a whole ecosystem of public and private services, rather than being the government’s proprietary system for delivering government services. This distinction matters: good DPI enables innovation; proprietary government platforms create dependency."
        - paragraph [ref=e92]:
          - strong [ref=e93]: 2. Open Standards Enable Interoperability and Exit
          - text: DPI built on proprietary standards creates exactly the same vendor dependency problems that DPI is supposed to solve. Open standards — openly governed, with multiple independent implementations — ensure that DPI can be built, maintained, and replaced by multiple actors. Exit rights depend on open standards; open standards without open governance are insufficient.
        - paragraph [ref=e94]:
          - strong [ref=e95]: 3. Privacy by Design, Not Privacy by Promise
          - text: DPI that collects and centralises data about every economic transaction, healthcare interaction, and government service use creates unprecedented surveillance potential. Privacy must be designed into DPI architecture — through data minimisation, decentralisation, consent mechanisms, and technical controls that prevent mission creep — not addressed as an afterthought through policies that can be changed.
        - paragraph [ref=e96]:
          - strong [ref=e97]: 4. Universal Accessibility Is the Point
          - text: "DPI that does not reach the populations most in need of inclusion has failed in its core purpose. Universal accessibility means: accessible to people with disabilities; available in local languages; usable without smartphones (through feature phone or in-person equivalents); and available regardless of income. DPI that serves 80% of the population while excluding the most marginalised 20% is not universal public infrastructure."
        - paragraph [ref=e98]:
          - strong [ref=e99]: 5. Democratic Accountability Requires Democratic Governance
          - text: DPI affects everyone. Its governance must be accountable to everyone — through transparent oversight bodies, public reporting, civil society participation, and democratic control over major design decisions. DPI governed solely by technical experts, finance ministries, or international donors is not democratically accountable, however technically excellent.
        - paragraph [ref=e100]:
          - strong [ref=e101]: 6. DPI Is Not a Substitute for Rights
          - text: Digital identity systems do not create rights — they are means of accessing rights that must exist independently. DPI must not be designed so that lacking digital identity means being excluded from healthcare, education, food assistance, or other rights. Robust non-digital alternatives must be preserved.
        - paragraph [ref=e102]:
          - strong [ref=e103]: 7. International Funding Must Not Import Governance Deficits
          - text: Much DPI is built with international development funding from institutions with their own governance standards, timelines, and interests. These may not align with the rights and interests of the populations the DPI will serve. International funding for DPI must come with governance standards that prioritise the rights of end users, not just deployment metrics.
        - heading "Equity Considerations" [level=3] [ref=e104]
        - list [ref=e105]:
          - listitem [ref=e106]:
            - strong [ref=e107]: People without smartphones
            - text: — An estimated 3 billion people globally lack smartphone access. DPI that requires smartphones for identity verification, payment, or service access excludes them. Feature phone (USSD) and in-person channel parity is essential.
          - listitem [ref=e108]:
            - strong [ref=e109]: Women
            - text: — In many contexts, women have lower rates of document ownership, formal financial account access, and digital literacy. DPI can accelerate inclusion of women — or replicate existing exclusions at scale. Gender equity must be a primary design requirement.
          - listitem [ref=e110]:
            - strong [ref=e111]: People with disabilities
            - text: — DPI must be accessible by design from day one. Retrofitting accessibility into DPI systems is expensive and often incomplete. See
            - link "Digital Accessibility model" [ref=e112] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: .
          - listitem [ref=e113]:
            - strong [ref=e114]: Rural and remote populations
            - text: — DPI requiring high-speed internet connectivity does not serve populations in areas with poor connectivity. Offline-capable design, agent networks, and connectivity investment must accompany DPI deployment.
          - listitem [ref=e115]:
            - strong [ref=e116]: Migrants and stateless people
            - text: — People without formal documentation from a nation-state are often excluded from digital identity systems by design. DPI governance must address this exclusion explicitly.
          - listitem [ref=e117]:
            - strong [ref=e118]: Indigenous communities
            - text: — Digital identity and data exchange systems may intersect with indigenous data sovereignty frameworks. UNDRIP (UN Declaration on the Rights of Indigenous Peoples) and indigenous data sovereignty principles must inform DPI governance in contexts with significant indigenous populations.
        - heading "Environmental Considerations" [level=3] [ref=e119]
        - paragraph [ref=e120]:
          - text: "At national scale, DPI operates on infrastructure with significant energy and hardware footprints. DPI design must account for: operational energy efficiency; hardware longevity (avoiding unnecessary upgrade cycles in terminal devices); and the energy intensity of identity and authentication systems. Centralised data systems require data center governance aligned with the"
          - link "Data Centers model" [ref=e121] [cursor=pointer]:
            - /url: ../../data-centers/full-model/
          - text: .
        - separator [ref=e122]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e123]'
        - heading "Mandatory Standards" [level=3] [ref=e124]
        - blockquote [ref=e125]:
          - paragraph [ref=e126]:
            - strong [ref=e127]: "Standard 1: Open Standards Requirement"
            - text: "All DPI components — identity systems, payment rails, data exchange platforms, and their interfaces — shall be:"
          - paragraph [ref=e128]: (a) Built on openly published technical standards that are governed through open, multi-stakeholder processes;
          - paragraph [ref=e129]: (b) Implemented in ways that allow multiple independent operators to provide compliant services using the same standards;
          - paragraph [ref=e130]: (c) Documented in sufficient detail that an independent technical team could build a compatible implementation from the public documentation alone;
          - paragraph [ref=e131]: (d) Free of mandatory proprietary components in the critical path — proprietary extensions and services may be offered, but the core infrastructure must not require them;
          - paragraph [ref=e132]: (e) Subject to a published interoperability profile that enables third-party services to integrate without requiring the permission of the DPI operator.
        - paragraph [ref=e133]:
          - emphasis [ref=e134]: "Rationale: India’s Unified Payments Interface (UPI) operates on open standards with hundreds of competing payment applications. Estonia’s X-Road data exchange layer is open source with multiple independent implementations. These demonstrate that open standards DPI can achieve both scale and interoperability. By contrast, national ID systems built on a single vendor’s proprietary platform (a common pattern in international development) create permanent dependency."
        - separator [ref=e135]
        - blockquote [ref=e136]:
          - paragraph [ref=e137]:
            - strong [ref=e138]: "Standard 2: Privacy Architecture Requirements"
            - text: "DPI shall be designed with privacy protection built into its architecture:"
          - paragraph [ref=e139]:
            - text: (a)
            - strong [ref=e140]: Minimisation
            - text: ": The identity layer shall not transmit more information than necessary to authenticate the claim being made. A system verifying age should confirm age, not disclose date of birth. A system verifying residency should confirm residency, not disclose address."
          - paragraph [ref=e141]:
            - text: (b)
            - strong [ref=e142]: Consent and control
            - text: ": Where DPI systems share personal data between institutions, individuals must be able to view what data has been shared, with whom, and for what purpose, through a personal data dashboard or equivalent mechanism."
          - paragraph [ref=e143]:
            - text: (c)
            - strong [ref=e144]: Purpose limitation
            - text: ": Data flows within DPI must be technically constrained to their stated purposes — not merely governed by policy that can be changed. Data collected for identity authentication must not be accessible for law enforcement surveillance without judicial authorisation."
          - paragraph [ref=e145]:
            - text: (d)
            - strong [ref=e146]: Decentralisation where feasible
            - text: ": Where technical design can distribute rather than centralise personal data, this is preferred. A centralised database linking all identity events, transactions, and benefit claims to individual identifiers is a surveillance infrastructure, not just a service infrastructure."
          - paragraph [ref=e147]:
            - text: (e)
            - strong [ref=e148]: Auditability
            - text: ": All data access within DPI systems must be logged, with logs available to individuals for review and to the oversight body for audit."
        - paragraph [ref=e149]:
          - emphasis [ref=e150]: "Rationale: India’s Aadhaar system — the world’s largest biometric identity system — has been criticised for enabling surveillance, exclusion of people whose biometrics are not reliably read, and linkage of data across government and private systems beyond initial scope. These failures are largely architectural; the governance requirements here are designed to prevent them."
        - separator [ref=e151]
        - blockquote [ref=e152]:
          - paragraph [ref=e153]:
            - strong [ref=e154]: "Standard 3: Mandatory Non-Digital Alternatives"
            - text: "Where DPI enables access to government services, financial services, or healthcare, a fully functional non-digital alternative must be maintained:"
          - paragraph [ref=e155]: (a) The non-digital alternative must provide the same access to the same services — not a degraded or delayed version;
          - paragraph [ref=e156]: (b) The non-digital alternative must be available in all areas where the digital service is available;
          - paragraph [ref=e157]: (c) Uptake of the digital channel is not a permissible justification for reducing the capacity or quality of the non-digital alternative;
          - paragraph [ref=e158]: (d) People who choose the non-digital alternative must not be required to justify that choice.
        - paragraph [ref=e159]:
          - emphasis [ref=e160]: "Rationale: India’s Aadhaar-linked benefit distribution system has been documented to exclude poor and marginalised people whose biometrics cannot be read, leading to deaths from denial of food rations. Mandatory non-digital alternatives prevent this category of harm. The principle that digital is not the only path to essential services is fundamental to trustworthy DPI."
        - separator [ref=e161]
        - blockquote [ref=e162]:
          - paragraph [ref=e163]:
            - strong [ref=e164]: "Standard 4: Democratic Oversight of DPI Architecture"
            - text: "Material changes to DPI architecture — including changes to data models, interoperability profiles, governance structures, and major security design decisions — shall:"
          - paragraph [ref=e165]: (a) Be subject to a minimum [60]-day public consultation period before implementation;
          - paragraph [ref=e166]: (b) Require approval from an independent oversight body with technical expertise and civil society representation;
          - paragraph [ref=e167]: (c) Be accompanied by a privacy impact assessment and an equity impact assessment;
          - paragraph [ref=e168]: (d) Be communicated in plain language to affected communities, not only to technical specialists;
          - paragraph [ref=e169]: "(e) For changes affecting fundamental rights (biometric requirements, law enforcement access protocols, data retention policies): require legislative approval."
        - separator [ref=e170]
        - blockquote [ref=e171]:
          - paragraph [ref=e172]:
            - strong [ref=e173]: "Standard 5: Procurement and Vendor Independence"
            - text: "DPI procurement shall:"
          - paragraph [ref=e174]: (a) Prioritise open source implementations where they provide equivalent functionality;
          - paragraph [ref=e175]: (b) Prohibit contracts that grant any single vendor sole rights to operate, maintain, or extend core DPI components;
          - paragraph [ref=e176]: (c) Require that source code for custom-developed DPI components be owned by the government, not the vendor;
          - paragraph [ref=e177]: (d) Include documented exit plans — technical procedures for migrating from any vendor without service interruption — as a mandatory procurement requirement;
          - paragraph [ref=e178]: (e) Disclose all subcontractors and subprocessors with access to DPI data;
          - paragraph [ref=e179]: (f) Prohibit DPI data from being transferred to vendor systems for purposes other than service delivery without explicit governmental authorisation.
        - paragraph [ref=e180]:
          - emphasis [ref=e181]:
            - text: "Reference:"
            - link "Open Source in Government model" [ref=e182] [cursor=pointer]:
              - /url: ../../open-source-in-government/full-model/
            - text: ;
            - link "Digital Sovereignty model" [ref=e183] [cursor=pointer]:
              - /url: ../../digital-sovereignty/full-model/
        - separator [ref=e184]
        - blockquote [ref=e185]:
          - paragraph [ref=e186]:
            - strong [ref=e187]: "Standard 6: Accessibility and Inclusion Requirements"
            - text: "DPI shall meet the following minimum accessibility and inclusion requirements:"
          - paragraph [ref=e188]: (a) All user-facing interfaces must conform to WCAG 2.2 AA;
          - paragraph [ref=e189]: (b) Services must be available in all official languages of the jurisdiction and, where practicable, in widely spoken minority languages;
          - paragraph [ref=e190]: (c) Services must be available through non-smartphone channels (USSD, IVR, or in-person agent networks) in areas where smartphone penetration is below [50%];
          - paragraph [ref=e191]: (d) Biometric-based identity must not be the sole means of accessing essential services — document-based and knowledge-based alternatives must be available;
          - paragraph [ref=e192]: (e) An equity impact assessment shall be conducted before deployment and annually thereafter, assessing uptake and exclusion rates by gender, disability, income level, language, and rural/urban location.
        - paragraph [ref=e193]:
          - emphasis [ref=e194]:
            - text: "Reference:"
            - link "Digital Accessibility model" [ref=e195] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
        - separator [ref=e196]
        - heading "Aspirational Standards" [level=3] [ref=e197]
        - blockquote [ref=e198]:
          - paragraph [ref=e199]:
            - strong [ref=e200]: "Aspirational Standard 1: Data Sovereignty for Citizens"
            - text: Citizens should have a right to a complete, machine-readable export of all personal data held about them in DPI systems — across identity, payment, health, and benefit systems — in a format that enables portability to other services. The EU GDPR right to data portability provides the legal framework; the DPI architecture must make it technically possible.
        - blockquote [ref=e201]:
          - paragraph [ref=e202]:
            - strong [ref=e203]: "Aspirational Standard 2: Federated and Interoperable DPI"
            - text: Countries should be able to achieve interoperability between their DPI systems — so that cross-border payments, identity verification, and data exchange can occur without requiring users to establish separate identity credentials in each jurisdiction. The EU Digital Identity Wallet (eIDAS 2.0) and the SADC Regional Payment System provide reference models.
        - separator [ref=e204]
        - heading "Standards Cross-Reference" [level=3] [ref=e205]
        - table [ref=e206]:
          - rowgroup [ref=e207]:
            - row "Standard Body Notes" [ref=e208]:
              - columnheader "Standard" [ref=e209]
              - columnheader "Body" [ref=e210]
              - columnheader "Notes" [ref=e211]
          - rowgroup [ref=e212]:
            - row "UNDP/ITU DPI Framework UNDP / ITU 2023; foundational framework for DPI governance" [ref=e213]:
              - cell "UNDP/ITU DPI Framework" [ref=e214]
              - cell "UNDP / ITU" [ref=e215]
              - cell "2023; foundational framework for DPI governance" [ref=e216]
            - row "50-in-5 Campaign Principles 50-in-5 Deployment principles; governance requirements" [ref=e217]:
              - cell "50-in-5 Campaign Principles" [ref=e218]
              - cell "50-in-5" [ref=e219]
              - cell "Deployment principles; governance requirements" [ref=e220]
            - row "World Bank DPI Assessment Framework World Bank 2023; assessment criteria for DPI quality" [ref=e221]:
              - cell "World Bank DPI Assessment Framework" [ref=e222]
              - cell "World Bank" [ref=e223]
              - cell "2023; assessment criteria for DPI quality" [ref=e224]
            - row "eIDAS 2.0 EU 2024; EU Digital Identity Wallet" [ref=e225]:
              - cell "eIDAS 2.0" [ref=e226]
              - cell "EU" [ref=e227]
              - cell "2024; EU Digital Identity Wallet" [ref=e228]
            - row "India Stack (UPI, Aadhaar, DPDP) Government of India Largest deployment; useful as both model and cautionary tale" [ref=e229]:
              - cell "India Stack (UPI, Aadhaar, DPDP)" [ref=e230]
              - cell "Government of India" [ref=e231]
              - cell "Largest deployment; useful as both model and cautionary tale" [ref=e232]
            - row "Estonia X-Road Government of Estonia Open source data exchange reference implementation" [ref=e233]:
              - cell "Estonia X-Road" [ref=e234]
              - cell "Government of Estonia" [ref=e235]
              - cell "Open source data exchange reference implementation" [ref=e236]
            - row "GDPR EU 2016/679; data protection framework applicable to DPI" [ref=e237]:
              - cell "GDPR" [ref=e238]
              - cell "EU" [ref=e239]
              - cell "2016/679; data protection framework applicable to DPI" [ref=e240]
            - row "UNDRIP UN Indigenous peoples’ rights; indigenous data sovereignty" [ref=e241]:
              - cell "UNDRIP" [ref=e242]
              - cell "UN" [ref=e243]
              - cell "Indigenous peoples’ rights; indigenous data sovereignty" [ref=e244]
        - separator [ref=e245]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e246]'
        - heading "Phased Deployment Approach" [level=3] [ref=e247]
        - blockquote [ref=e248]:
          - paragraph [ref=e249]:
            - strong [ref=e250]: Deployment Sequencing
            - text: "DPI should be deployed in phases with governance infrastructure preceding population-scale deployment:"
          - paragraph [ref=e251]:
            - strong [ref=e252]: "Phase 1 (6–12 months pre-deployment):"
            - text: Establish oversight body; publish open standards; conduct equity and privacy impact assessments; develop non-digital alternatives; establish data protection legislation.
          - paragraph [ref=e253]:
            - strong [ref=e254]: "Phase 2 (Pilot, 12–24 months):"
            - text: Deploy in limited geographic areas with intensive monitoring; evaluate equity outcomes; iterate on accessibility and inclusion; publish findings publicly.
          - paragraph [ref=e255]:
            - strong [ref=e256]: "Phase 3 (National scale-up):"
            - text: Deploy nationally with ongoing equity monitoring; ensure non-digital alternatives scale with digital deployment; establish complaint and redress mechanisms.
        - heading "Procurement Requirements" [level=3] [ref=e257]
        - blockquote [ref=e258]:
          - paragraph [ref=e259]:
            - strong [ref=e260]: DPI Procurement Clause
            - text: "All DPI procurement shall include: (a) open source preference; (b) government IP ownership; (c) exit plan as deliverable; (d) privacy impact assessment as deliverable; (e) equity impact assessment as deliverable; (f) vendor data access restrictions; (g) accessibility conformance certification; (h) five-year minimum support obligation."
        - heading "Reporting and Transparency" [level=3] [ref=e261]
        - blockquote [ref=e262]:
          - paragraph [ref=e263]:
            - strong [ref=e264]: Annual DPI State Report
            - text: "The DPI governance body shall publish an annual report covering: (a) uptake rates by demographic group; (b) exclusion rates and causes; (c) complaints received and outcomes; (d) data breach incidents; (e) law enforcement and government agency access to DPI data; (f) interoperability status; (g) vendor and open source balance; (h) energy consumption; (i) planned changes to architecture or governance."
        - heading "Enforcement" [level=3] [ref=e265]
        - blockquote [ref=e266]:
          - paragraph [ref=e267]:
            - strong [ref=e268]: Enforcement Clause
            - text: "The DPI oversight body may: (a) audit compliance with open standards and vendor independence requirements; (b) commission independent security and privacy audits; (c) require remediation of exclusion issues identified in equity assessments; (d) receive complaints from individuals and civil society; (e) order correction of systemic failures; (f) refer data protection violations to the relevant data protection authority."
        - separator [ref=e269]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e270]'
        - heading "Oversight Body" [level=3] [ref=e271]
        - blockquote [ref=e272]:
          - paragraph [ref=e273]:
            - strong [ref=e274]: DPI Governance Board
            - text: "A DPI Governance Board shall be established with: technical expertise in identity systems, payment systems, and data infrastructure; legal expertise in data protection, administrative law, and human rights; civil society representation including organisations working with marginalised communities; and independence from the DPI operating body. The Board shall: approve major architecture changes; review annual reports; commission independent audits; and report to the legislature."
        - heading "Community Representation" [level=3] [ref=e275]
        - blockquote [ref=e276]:
          - paragraph [ref=e277]:
            - strong [ref=e278]: Inclusion and Equity Advisory Panel
            - text: "The Governance Board shall be supported by an Inclusion and Equity Advisory Panel with reserved seats for: disability rights organisations; women’s rights organisations; organisations representing linguistic minorities; rural community representatives; migrant and refugee advocacy organisations; and independent technical experts. The Panel shall review equity impact assessments and have standing to request Board review of exclusion findings."
        - heading "Audit and Review" [level=3] [ref=e279]
        - blockquote [ref=e280]:
          - paragraph [ref=e281]:
            - strong [ref=e282]: Triennial Independent Review
            - text: "Every three years, the DPI governance framework shall be subject to independent review covering: whether the open standards requirement is being met; whether privacy architecture requirements are technically enforced; whether equity outcomes are improving; whether the oversight body is functioning effectively; and whether the non-digital alternative requirement is being fulfilled. Reviews shall be public and include community consultation."
        - separator [ref=e283]
        - heading "Real-World Examples" [level=2] [ref=e284]
        - heading "India — India Stack (Aadhaar, UPI, ABHA)" [level=3] [ref=e285]
        - paragraph [ref=e286]:
          - strong [ref=e287]: "Active:"
          - text: 2009–present (Aadhaar); 2016–present (UPI)
          - strong [ref=e288]: "Links:"
          - text: https://indiastack.org; https://www.npci.org.in
          - strong [ref=e289]: "Summary:"
          - text: "India’s DPI stack is the world’s largest and most developed. Aadhaar is a biometric identity system with over 1.3 billion enrolled. UPI is an open payment protocol processing billions of transactions monthly, with hundreds of competing apps. ABHA is a health identity and records system. India Stack demonstrates that DPI can achieve enormous scale and financial inclusion outcomes. The cautionary elements are equally important: Aadhaar has been used to deny food rations to rural poor; biometric failures have excluded disabled people; surveillance concerns led to Supreme Court scrutiny; and the system has expanded far beyond its original scope. The lessons — both positive and cautionary — make India Stack the essential reference case."
        - separator [ref=e290]
        - heading "Estonia — X-Road and e-Governance" [level=3] [ref=e291]
        - paragraph [ref=e292]:
          - strong [ref=e293]: "Active:"
          - text: 2001–present (X-Road); continuous development
          - strong [ref=e294]: "Link:"
          - text: https://x-road.global
          - strong [ref=e295]: "Summary:"
          - text: Estonia’s X-Road is an open source data exchange layer enabling secure, logged data sharing between government and private sector databases. Used for healthcare, tax, identity, and dozens of other services. Estonia’s approach — maximum digital service delivery, with strong privacy protections and citizen data dashboards — demonstrates that DPI can be both comprehensive and privacy-respecting. X-Road has been adopted by Finland, Iceland, and other countries. The Estonian model is the reference for privacy-by-design DPI at national scale.
        - separator [ref=e296]
        - heading "Brazil — Pix Instant Payment System" [level=3] [ref=e297]
        - paragraph [ref=e298]:
          - strong [ref=e299]: "Active:"
          - text: 2020–present
          - strong [ref=e300]: "Operator:"
          - text: Banco Central do Brasil
          - strong [ref=e301]: "Link:"
          - text: https://www.bcb.gov.br/estabilidadefinanceira/pix
          - strong [ref=e302]: "Summary:"
          - text: Brazil’s Pix is an open, interoperable instant payment system operated by the central bank. Within three years of launch, it became the most used payment method in Brazil, with over 140 million individual users and 14 million business users. Open API design enabled hundreds of fintech apps to build on Pix. The system was operated by the public sector (central bank) from the start, ensuring that network effects accrued to the public rather than to private payment operators. Pix demonstrates that public sector operation of DPI can achieve competitive and inclusive outcomes without privatising essential infrastructure.
        - separator [ref=e303]
        - heading "Kenya — M-Pesa (Cautionary Example)" [level=3] [ref=e304]
        - paragraph [ref=e305]:
          - strong [ref=e306]: "Active:"
          - text: 2007–present
          - strong [ref=e307]: "Operator:"
          - text: Safaricom (privately owned)
          - strong [ref=e308]: "Summary:"
          - text: "M-Pesa — mobile money originally developed with DFID funding — became the most successful financial inclusion story in the developing world, enabling millions of unbanked Kenyans to access financial services. It is also a cautionary example: M-Pesa is privately operated by Safaricom (owned by Vodafone), meaning that the essential financial infrastructure for millions of people is governed by a private company with commercial incentives. M-Pesa’s success demonstrates what DPI can achieve; its governance structure illustrates why public governance matters. The key question is not only “does it work?” but “who governs it and in whose interest?”"
        - separator [ref=e309]
        - heading "EU — European Digital Identity Wallet (eIDAS 2.0)" [level=3] [ref=e310]
        - paragraph [ref=e311]:
          - strong [ref=e312]: "Legislative basis:"
          - text: eIDAS 2.0 Regulation (2024/1183)
          - strong [ref=e313]: "Timeline:"
          - text: Member states required to offer wallets by 2026
          - strong [ref=e314]: "Link:"
          - text: https://digital-strategy.ec.europa.eu/en/policies/eudi-wallet
          - strong [ref=e315]: "Summary:"
          - text: The EU’s European Digital Identity Wallet will allow EU citizens to use a mobile wallet to prove their identity and share credentials (such as driving licences, educational qualifications, and professional certifications) across the EU without sharing more data than necessary. The wallet design explicitly incorporates selective disclosure — proving an attribute without revealing the underlying data. This is the most privacy-protective large-scale identity DPI design currently being implemented. Implementation and governance details are still evolving.
        - separator [ref=e316]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e317]
        - list [ref=e318]:
          - listitem [ref=e319]:
            - strong [ref=e320]: Mission creep and scope expansion
            - text: — DPI systems designed for one purpose routinely expand to others. Aadhaar, designed for benefit delivery, was progressively linked to bank accounts, mobile phones, tax returns, and voter registrations. Technical architecture that prevents scope expansion is more reliable than policy commitments.
          - listitem [ref=e321]:
            - strong [ref=e322]: Biometric exclusion
            - text: — Fingerprint and iris-based biometrics fail at elevated rates for agricultural workers, older adults, and people with certain disabilities. DPI that relies primarily on biometrics for identity will systematically exclude these groups.
          - listitem [ref=e323]:
            - strong [ref=e324]: The inclusion-surveillance tension
            - text: — The most capable DPI — the kind that enables universal financial inclusion and seamless service delivery — is also the most capable surveillance infrastructure. The design choices that maximise inclusion often maximise surveillance potential. This tension is structural, not resolvable through policy alone.
          - listitem [ref=e325]:
            - strong [ref=e326]: International development funding incentives
            - text: — Donors measure DPI success through deployment metrics (number of IDs issued, transactions processed) rather than governance quality or exclusion rates. This creates incentives to deploy quickly rather than well.
          - listitem [ref=e327]:
            - strong [ref=e328]: State capacity
            - text: — Strong DPI governance requires significant state capacity — technical expertise, regulatory authority, and enforcement resources. Many of the countries that most need DPI have the least capacity to govern it well. Technical assistance that builds governance capacity alongside DPI systems is essential.
        - separator [ref=e329]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e330]
        - table [ref=e331]:
          - rowgroup [ref=e332]:
            - row "Related Domain Relationship" [ref=e333]:
              - columnheader "Related Domain" [ref=e334]
              - columnheader "Relationship" [ref=e335]
          - rowgroup [ref=e336]:
            - row "Open Source in Government DPI should prefer open source; open standards requirement aligns with OS preference" [ref=e337]:
              - cell "Open Source in Government" [ref=e338]:
                - link "Open Source in Government" [ref=e339] [cursor=pointer]:
                  - /url: ../../open-source-in-government/full-model/
              - cell "DPI should prefer open source; open standards requirement aligns with OS preference" [ref=e340]
            - row "Digital Sovereignty DPI vendor independence, exit rights, and open standards are sovereignty requirements" [ref=e341]:
              - cell "Digital Sovereignty" [ref=e342]:
                - link "Digital Sovereignty" [ref=e343] [cursor=pointer]:
                  - /url: ../../digital-sovereignty/full-model/
              - cell "DPI vendor independence, exit rights, and open standards are sovereignty requirements" [ref=e344]
            - row "Digital Accessibility DPI user interfaces must meet accessibility standards; non-digital alternatives preserve inclusion" [ref=e345]:
              - cell "Digital Accessibility" [ref=e346]:
                - link "Digital Accessibility" [ref=e347] [cursor=pointer]:
                  - /url: ../../accessibility/full-model/
              - cell "DPI user interfaces must meet accessibility standards; non-digital alternatives preserve inclusion" [ref=e348]
            - row "AI Adoption AI in DPI (fraud detection, eligibility scoring) requires AI governance framework" [ref=e349]:
              - cell "AI Adoption" [ref=e350]:
                - link "AI Adoption" [ref=e351] [cursor=pointer]:
                  - /url: ../../ai-adoption/full-model/
              - cell "AI in DPI (fraud detection, eligibility scoring) requires AI governance framework" [ref=e352]
            - row "Algorithmic Accountability Automated decisions in benefit delivery via DPI require accountability mechanisms" [ref=e353]:
              - cell "Algorithmic Accountability" [ref=e354]:
                - link "Algorithmic Accountability" [ref=e355] [cursor=pointer]:
                  - /url: ../../algorithmic-accountability/full-model/
              - cell "Automated decisions in benefit delivery via DPI require accountability mechanisms" [ref=e356]
            - row "Smart Cities & Privacy City-level DPI deployments must align with smart city data governance" [ref=e357]:
              - cell "Smart Cities & Privacy" [ref=e358]:
                - link "Smart Cities & Privacy" [ref=e359] [cursor=pointer]:
                  - /url: ../../smart-cities/full-model/
              - cell "City-level DPI deployments must align with smart city data governance" [ref=e360]
        - separator [ref=e361]
        - heading "Glossary" [level=2] [ref=e362]
        - paragraph [ref=e363]:
          - strong [ref=e364]: "Digital Public Infrastructure (DPI):"
          - text: The foundational digital systems — primarily identity, payment, and data exchange — that enable governments, economies, and societies to function digitally. Conceptually analogous to physical public infrastructure (roads, water, electricity).
        - paragraph [ref=e365]:
          - strong [ref=e366]: "Digital Identity System:"
          - text: "A system enabling individuals to prove their identity digitally. May be document-based, knowledge-based, biometric, or cryptographic. Examples: Aadhaar (India), eIDAS (EU), digital driving licences."
        - paragraph [ref=e367]:
          - strong [ref=e368]: "Payment Rail:"
          - text: "The technical infrastructure enabling value transfer between parties. Examples: SWIFT (international), UPI (India), Pix (Brazil), SEPA (EU)."
        - paragraph [ref=e369]:
          - strong [ref=e370]: "Data Exchange Layer:"
          - text: "Infrastructure enabling secure, logged data sharing between institutions and individuals. Examples: Estonia’s X-Road, India’s DigiLocker, GDPR-compliant data portability APIs."
        - paragraph [ref=e371]:
          - strong [ref=e372]: "Open Standard:"
          - text: A technical specification that is publicly available, developed through an open process, and free from proprietary restrictions that would prevent independent implementation.
        - paragraph [ref=e373]:
          - strong [ref=e374]: "Selective Disclosure:"
          - text: A privacy-preserving identity technique enabling proof of an attribute (e.g., “over 18”) without revealing the underlying data (e.g., date of birth). A core design principle of the EU Digital Identity Wallet.
        - paragraph [ref=e375]:
          - strong [ref=e376]: "50-in-5 Campaign:"
          - text: A joint initiative (UNDP, UNICEF, Gates Foundation, and others) aimed at helping 50 countries build and deploy DPI within five years, with governance standards emphasising inclusion and rights.
        - paragraph [ref=e377]:
          - strong [ref=e378]: "India Stack:"
          - text: "The collective term for India’s DPI components: Aadhaar (biometric identity), UPI (payment), ABHA (health identity), DigiLocker (document storage), and associated open APIs."
        - separator [ref=e379]
        - heading "Contributing to This Policy Model" [level=2] [ref=e380]
        - paragraph [ref=e381]: "This model is maintained in the open. Priority contribution needs:"
        - list [ref=e382]:
          - listitem [ref=e383]:
            - strong [ref=e384]: Biometric alternative standards
            - text: — practical requirements for non-biometric identity alternatives within DPI systems
          - listitem [ref=e385]:
            - strong [ref=e386]: Global South governance examples
            - text: — DPI governance from African, Asian, and Latin American contexts beyond India and Kenya
          - listitem [ref=e387]:
            - strong [ref=e388]: Indigenous data sovereignty integration
            - text: — how DPI governance frameworks can respect and incorporate indigenous data sovereignty principles
          - listitem [ref=e389]:
            - strong [ref=e390]: Cross-border DPI interoperability
            - text: — model language for bilateral and multilateral DPI interoperability agreements
          - listitem [ref=e391]:
            - strong [ref=e392]: Environmental lifecycle assessment
            - text: — methodology for assessing the environmental footprint of national-scale DPI deployment
        - paragraph [ref=e393]:
          - text: Open an
          - link "Issue" [ref=e394] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/issues
          - text: to propose changes or additions. See
          - link "CONTRIBUTING.md" [ref=e395] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - text: for the contribution process.
        - paragraph [ref=e396]: All substantive changes go through a minimum 14-day public comment period before merging.
        - separator [ref=e397]
        - heading "Changelog" [level=2] [ref=e398]
        - table [ref=e399]:
          - rowgroup [ref=e400]:
            - row "Version Date Summary of changes" [ref=e401]:
              - columnheader "Version" [ref=e402]
              - columnheader "Date" [ref=e403]
              - columnheader "Summary of changes" [ref=e404]
          - rowgroup [ref=e405]:
            - row "0.1 2026-04-05 Initial draft — four pillars, real-world examples from India, Estonia, Brazil, Kenya, EU" [ref=e406]:
              - cell "0.1" [ref=e407]
              - cell "2026-04-05" [ref=e408]
              - cell "Initial draft — four pillars, real-world examples from India, Estonia, Brazil, Kenya, EU" [ref=e409]
        - separator [ref=e410]
        - paragraph [ref=e411]:
          - emphasis [ref=e412]: This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.
      - link "✏️ Edit this policy on GitHub" [ref=e413] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/digital-public-infrastructure/full-model.md
  - contentinfo [ref=e414]:
    - generic [ref=e415]:
      - generic [ref=e416]:
        - heading "Open Digital Policies" [level=3] [ref=e417]
        - paragraph [ref=e418]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e419]:
        - heading "Policy Domains" [level=3] [ref=e420]
        - list [ref=e421]:
          - listitem [ref=e422]:
            - link "Who Pays for AI's Power Bill?" [ref=e423] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e424]:
            - link "Digital Services That Work for Everyone" [ref=e425] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e426]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e427] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e428]:
            - link "Public Money, Public Code" [ref=e429] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e430]:
            - link "AI That Works For You, Not On You" [ref=e431] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e432]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e433] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e434]:
            - link "A Greener Web" [ref=e435] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e436]:
            - link "Your City Is Watching You" [ref=e437] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e438]:
            - link "Whose Internet Is It?" [ref=e439] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e440]:
            - link "Technology That's Safe for Kids" [ref=e441] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e442]:
            - link "Who Decides What You Can Say Online?" [ref=e443] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e444]:
            - link "Digital Infrastructure for Everyone" [ref=e445] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e446]:
        - heading "Resources" [level=3] [ref=e447]
        - list [ref=e448]:
          - listitem [ref=e449]:
            - link "Explore all domains" [ref=e450] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e451]:
            - link "Adoptions tracker" [ref=e452] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e453]:
            - link "Search" [ref=e454] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e455]:
            - link "About this project" [ref=e456] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e457]:
            - link "How to contribute" [ref=e458] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e459]:
            - link "Glossary" [ref=e460] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e461]:
        - heading "Community" [level=3] [ref=e462]
        - list [ref=e463]:
          - listitem [ref=e464]:
            - link "GitHub repository" [ref=e465] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e466]:
            - link "Open an issue" [ref=e467] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e468]:
            - link "Propose a domain" [ref=e469] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e470]:
            - link "Report an adoption" [ref=e471] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e472]:
      - generic [ref=e473]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e474] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e475]:
        - text: Maintained by
        - link "the ODP community" [ref=e476] [cursor=pointer]:
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