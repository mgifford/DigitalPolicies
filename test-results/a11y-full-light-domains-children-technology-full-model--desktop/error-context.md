# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/children-technology/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/children-technology/full-model/ [light]:

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
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\" checked=\"checked\">",
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
      - heading "Technology That's Safe for Kids" [level=1] [ref=e29]
      - paragraph [ref=e30]: Children & Technology
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
        - heading "Children & Technology — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-05
            - strong [ref=e57]: "Maintainers:"
            - text: Open Digital Policies community
            - strong [ref=e58]: "Related domains:"
            - link "AI Adoption" [ref=e59] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - text: ","
            - link "Algorithmic Accountability" [ref=e60] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: ","
            - link "Digital Accessibility" [ref=e61] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: ","
            - link "Smart Cities & Privacy" [ref=e62] [cursor=pointer]:
              - /url: ../../smart-cities/full-model/
            - strong [ref=e63]: "Key sources:"
            - text: UN Convention on the Rights of the Child (UNCRC), UK Children’s Code (Age Appropriate Design Code), US COPPA, EU DSA, US KOSA (proposed)
        - separator [ref=e64]
        - heading "Overview" [level=2] [ref=e65]
        - paragraph [ref=e66]: Children are not small adults. They are among the most targeted groups in the digital economy — for manipulation, surveillance, algorithmic amplification of harmful content, and commercial exploitation. Digital platforms are designed by adults, for adults, and optimised for engagement metrics that treat children’s attention as a monetisable resource.
        - paragraph [ref=e67]: "The evidence base is substantial: excessive social media use correlates with depression and anxiety in adolescents, particularly girls; algorithmic recommendation systems can rapidly route vulnerable young people toward content promoting eating disorders, self-harm, or extremism; data broker ecosystems built on children’s data are used for targeted advertising and profiling; and educational technology frequently collects far more data than is necessary for learning."
        - paragraph [ref=e68]: This is not an argument against children’s access to digital technology — quite the opposite. Children have rights to information, to communication, to cultural participation, and to education that digital technology can meaningfully support. The goal of this policy model is to ensure that children can participate in digital life in ways that support their development, protect their rights, and respect their dignity — rather than exploiting their vulnerabilities for commercial gain.
        - heading "The Core Tension" [level=3] [ref=e69]
        - paragraph [ref=e70]: We want children to benefit from digital technology — for learning, communication, creativity, and participation — without exposing them to design patterns engineered to exploit developmental vulnerabilities, without building surveillance profiles that follow them into adulthood, and without amplifying content that causes demonstrable harm.
        - heading "Scope" [level=3] [ref=e71]
        - list [ref=e72]:
          - listitem [ref=e73]:
            - checkbox [checked] [disabled] [ref=e74]
            - text: Municipal / local government (educational technology, public digital services)
          - listitem [ref=e75]:
            - checkbox [checked] [disabled] [ref=e76]
            - text: Regional / state / provincial government
          - listitem [ref=e77]:
            - checkbox [checked] [disabled] [ref=e78]
            - text: National government
          - listitem [ref=e79]:
            - checkbox [checked] [disabled] [ref=e80]
            - text: Public sector procurement
          - listitem [ref=e81]:
            - checkbox [checked] [disabled] [ref=e82]
            - text: Regulated platforms and digital services accessible to children (private sector)
          - listitem [ref=e83]:
            - checkbox [disabled] [ref=e84]
            - text: "Other:"
            - strong [ref=e85]: __
            - text: _____
        - paragraph [ref=e86]:
          - strong [ref=e87]: "Definition of child:"
          - text: This policy applies to any person under the age of 18. Where platforms cannot reliably verify age, protections apply by default.
        - separator [ref=e88]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e89]'
        - heading "Foundational Values" [level=3] [ref=e90]
        - paragraph [ref=e91]:
          - strong [ref=e92]: 1. Children’s Best Interests as the Primary Consideration
          - text: Article 3 of the UNCRC requires that the best interests of the child be the primary consideration in all actions affecting children. This applies to digital platform design, data practices, algorithmic systems, and content governance. “Best interests” means what is genuinely good for children’s development, wellbeing, and rights — not what maximises their engagement time, which is the commercial interest of platforms.
        - paragraph [ref=e93]:
          - strong [ref=e94]: 2. Children Are Rights-Holders, Not Products
          - text: Children have rights under the UNCRC — including rights to privacy (Article 16), protection from exploitation (Article 36), access to information (Article 17), education (Article 28), and participation (Article 12). Digital policy for children must be grounded in these rights, not only in safety restrictions. Overprotective policy that denies children access to digital information and communication also violates their rights.
        - paragraph [ref=e95]:
          - strong [ref=e96]: 3. Design Must Not Exploit Developmental Vulnerabilities
          - text: Adolescents have developing prefrontal cortices — they are biologically more impulsive, more sensitive to social reward, more susceptible to peer influence, and more vulnerable to anxiety and depression than adults. Platform design that uses variable reward mechanisms, social comparison features, infinite scroll, and engagement notifications exploits these developmental characteristics for commercial gain. This is not neutral product design; it is targeted manipulation.
        - paragraph [ref=e97]:
          - strong [ref=e98]: 4. Data Collected From Children Requires Heightened Justification
          - text: "The data broker ecosystem that profiles adults is harmful; the same ecosystem applied to children is especially harmful. Data collected from or about children in educational contexts may define how those children are treated by institutions for decades. Children’s data requires: minimal collection, strict purpose limitation, default deletion at adulthood, and a presumption against commercial use."
        - paragraph [ref=e99]:
          - strong [ref=e100]: 5. Parental Oversight Is Not a Substitute for Platform Accountability
          - text: Placing full responsibility on parents to protect children from harmful design is both unrealistic (parents cannot monitor every interaction) and unfair (it removes accountability from the actors who created the harm). Platform design, algorithmic systems, and data practices are the primary point of intervention — parental tools are a supplement, not a substitute.
        - paragraph [ref=e101]:
          - strong [ref=e102]: 6. Young People Must Have Agency
          - text: Children — particularly adolescents — have rights to participate in decisions that affect them (UNCRC Article 12). Digital policy for children should not be made entirely by adults about children. Young people should be involved in the design of protections, the development of policy, and the oversight of platforms that serve them.
        - paragraph [ref=e103]:
          - strong [ref=e104]: 7. Inclusion and Access Must Not Be Sacrificed
          - text: Children from low-income households, children with disabilities, children in rural areas, and children from marginalised communities often have fewer digital opportunities, not more. Any restrictions on children’s digital access must be designed so that they do not further disadvantage already marginalised children. Accessibility is not optional.
        - heading "Equity Considerations" [level=3] [ref=e105]
        - list [ref=e106]:
          - listitem [ref=e107]:
            - strong [ref=e108]: Girls and young women
            - text: — Current evidence suggests that social media’s mental health harms are disproportionately experienced by adolescent girls, particularly through social comparison, appearance-based harassment, and eating disorder content amplification.
          - listitem [ref=e109]:
            - strong [ref=e110]: LGBTQ+ young people
            - text: — LGBTQ+ youth use digital platforms at high rates for community, identity exploration, and access to information not available in their local environments. Restrictions that reduce this access harm a particularly vulnerable group. Policy must protect LGBTQ+ young people from harassment while preserving their access to affirmative communities.
          - listitem [ref=e111]:
            - strong [ref=e112]: Children with disabilities
            - text: — Educational and social technologies often exclude children with disabilities. Accessibility must be a mandatory requirement in all children’s technology.
          - listitem [ref=e113]:
            - strong [ref=e114]: Children from low-income households
            - text: — Technology policy must not create systems where protection from harmful design is a premium feature available only to well-resourced families. Protections must be defaults, not opt-ins.
          - listitem [ref=e115]:
            - strong [ref=e116]: Children in state care
            - text: — Children in foster care and residential care are among the most surveilled and most vulnerable. Their digital data deserves heightened protection, and digital services for them must be designed with particular care.
        - heading "Environmental Considerations" [level=3] [ref=e117]
        - paragraph [ref=e118]:
          - text: Devices marketed to children — tablets, laptops, educational technology hardware — are often designed with short product lives and limited repairability, generating e-waste at scale. Educational technology procurement should include device longevity requirements. See
          - link "Right to Repair model" [ref=e119] [cursor=pointer]:
            - /url: ../../right-to-repair/full-model/
          - text: .
        - separator [ref=e120]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e121]'
        - heading "Mandatory Standards" [level=3] [ref=e122]
        - blockquote [ref=e123]:
          - paragraph [ref=e124]:
            - strong [ref=e125]: "Standard 1: Prohibited Practices in Services Accessible to Children"
            - text: "The following practices are prohibited in digital services that are likely to be accessed by children, regardless of whether those services are formally directed at children:"
          - paragraph [ref=e126]: (a) Targeted advertising based on profiling of children under 18;
          - paragraph [ref=e127]: (b) Variable reward mechanisms (including “like” counts, streaks, social comparison features, and notifications designed to maximise session return) in services used primarily by children under 16;
          - paragraph [ref=e128]: (c) Collecting data from children for the purpose of building commercial profiles, sale to data brokers, or use in advertising systems — regardless of parental consent;
          - paragraph [ref=e129]: (d) Designing or deploying algorithms that recommend or amplify content related to self-harm, eating disorders, suicide, or targeted harassment to users identified or reasonably identifiable as minors;
          - paragraph [ref=e130]: (e) Using children’s biometric data (including facial recognition) in educational settings without explicit informed consent from the child (where of sufficient maturity) and parent, and with a genuine non-biometric alternative available;
          - paragraph [ref=e131]: (f) Deploying dark patterns — design choices intended to circumvent users’ intentions — in services used by children.
        - paragraph [ref=e132]:
          - emphasis [ref=e133]: "Rationale: UK Age Appropriate Design Code (Children’s Code) Standard 9 prohibits use of personal data in ways detrimental to children’s wellbeing. California Age-Appropriate Design Code Act (AADC, 2022) extends similar requirements to any online service likely to be accessed by children. The EU DSA (2022) Article 28 prohibits targeting minors with advertising based on profiling. COPPA (US, 1998; Rule amended 2024) prohibits collection of personal data from children under 13 without verifiable parental consent."
        - paragraph [ref=e134]:
          - emphasis [ref=e135]:
            - text: "Reference:"
            - link "UK Children’s Code (ICO)" [ref=e136] [cursor=pointer]:
              - /url: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/
            - text: ;
            - link "California AADC" [ref=e137] [cursor=pointer]:
              - /url: https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB2273
            - text: ;
            - link "EU DSA Article 28" [ref=e138] [cursor=pointer]:
              - /url: https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package
            - text: ;
            - link "COPPA Rule 2024" [ref=e139] [cursor=pointer]:
              - /url: https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa
        - separator [ref=e140]
        - blockquote [ref=e141]:
          - paragraph [ref=e142]:
            - strong [ref=e143]: "Standard 2: Age Assurance Without Surveillance"
            - text: "Where digital services are restricted to adults or require differentiated protections based on age, age assurance mechanisms must:"
          - paragraph [ref=e144]: (a) Use the minimum data necessary to establish the age category — not collect identity documents for storage;
          - paragraph [ref=e145]: (b) Not create a centralised database of age verification data that could be breached or misused;
          - paragraph [ref=e146]: (c) Be technically accessible to users with disabilities;
          - paragraph [ref=e147]: (d) Not require children to provide biometric data as the primary means of age verification;
          - paragraph [ref=e148]: (e) Not use age assurance data for any purpose other than applying the relevant age-differentiated protections.
          - paragraph [ref=e149]: Blanket age verification requirements that cannot be implemented without creating surveillance infrastructure are not acceptable policy outcomes.
        - paragraph [ref=e150]:
          - emphasis [ref=e151]: "Rationale: The UK Online Safety Act (2023) requires Ofcom to develop age verification codes. The practical implementation of age verification without creating new surveillance harms is an active technical and policy challenge. This standard sets the principles for acceptable age assurance rather than mandating specific technical approaches."
        - separator [ref=e152]
        - blockquote [ref=e153]:
          - paragraph [ref=e154]:
            - strong [ref=e155]: "Standard 3: Data Minimisation and Deletion for Children’s Data"
            - text: "Digital services that collect data from or about children shall:"
          - paragraph [ref=e156]: (a) Collect only data strictly necessary for the service function — with commercial data collection presumptively prohibited;
          - paragraph [ref=e157]: (b) Retain children’s data for no longer than [12] months after the end of the service relationship, unless the child (if of sufficient maturity) or their parent specifically requests longer retention;
          - paragraph [ref=e158]: (c) Delete or anonymise all data from educational technology platforms within [90] days of a student leaving the school or district;
          - paragraph [ref=e159]: (d) Not sell or transfer children’s data to third parties for commercial purposes;
          - paragraph [ref=e160]: (e) Provide a simple, accessible mechanism for children and their parents to request deletion of all data held about the child;
          - paragraph [ref=e161]: (f) Present a privacy notice in age-appropriate, plain language — not solely in adult legal terms.
        - paragraph [ref=e162]:
          - emphasis [ref=e163]: "Rationale: California’s Student Online Personal Information Protection Act (SOPIPA, 2014) prohibits using student data for advertising and requires deletion on request. New Mexico’s Student Data Privacy Act (2019) is the most comprehensive state framework. COPPA’s data minimisation provisions have been significantly strengthened in the 2024 Rule."
        - separator [ref=e164]
        - blockquote [ref=e165]:
          - paragraph [ref=e166]:
            - strong [ref=e167]: "Standard 4: Educational Technology Procurement"
            - text: "Public bodies procuring educational technology — including learning management systems, assessment tools, communication platforms, and classroom devices — shall require:"
          - paragraph [ref=e168]: (a) A data flow map showing all data collected, processed, and shared, and for what purposes;
          - paragraph [ref=e169]: (b) Written certification that student data will not be used for targeted advertising, sold to data brokers, or used to build commercial profiles;
          - paragraph [ref=e170]: (c) Conformance with applicable accessibility standards (WCAG 2.2 AA minimum);
          - paragraph [ref=e171]: (d) A data processing agreement that provides for deletion of student data within [90] days of contract termination;
          - paragraph [ref=e172]: (e) Disclosure of all subprocessors (third-party services with access to student data);
          - paragraph [ref=e173]: (f) Compliance with applicable student privacy laws (SOPIPA, FERPA, local equivalents) as a contract condition.
        - paragraph [ref=e174]:
          - emphasis [ref=e175]: "Rationale: EdTech vendors routinely collect more data than necessary and share it with undisclosed third parties. The 2022 OECD report on digital learning and the 2021 HRW investigation into EdTech data practices found systematic data sharing that violated children’s privacy across dozens of countries."
        - paragraph [ref=e176]:
          - emphasis [ref=e177]:
            - text: "Reference:"
            - 'link "HRW: “How Dare They Peep into My Private Life” (2022)" [ref=e178] [cursor=pointer]':
              - /url: https://www.hrw.org/report/2022/05/25/how-dare-they-peep-my-private-life/childrens-rights-violations-governments
            - text: ;
            - link "SOPIPA (California)" [ref=e179] [cursor=pointer]:
              - /url: https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201320140SB1177
        - separator [ref=e180]
        - blockquote [ref=e181]:
          - paragraph [ref=e182]:
            - strong [ref=e183]: "Standard 5: Algorithmic Systems in Children’s Services"
            - text: "Any algorithmic recommendation or content curation system used in a service primarily serving users under 18 shall:"
          - paragraph [ref=e184]: (a) Not optimise for engagement or session time as a primary metric — metrics must include wellbeing indicators;
          - paragraph [ref=e185]: (b) Be assessed for evidence of harm amplification (including self-harm, eating disorder, harassment, and extremism content) before deployment and annually thereafter;
          - paragraph [ref=e186]: (c) Default to chronological or editorially curated content feeds rather than engagement-optimised algorithmic feeds for users under 16, with explicit opt-in to algorithmic feeds for 16–17 year olds;
          - paragraph [ref=e187]: (d) Apply additional filtering for content promoting self-harm, suicide, eating disorders, and targeted harassment when serving users identified as minors;
          - paragraph [ref=e188]:
            - text: (e) Be subject to audit under the
            - link "Algorithmic Accountability framework" [ref=e189] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: .
        - separator [ref=e190]
        - heading "Aspirational Standards" [level=3] [ref=e191]
        - blockquote [ref=e192]:
          - paragraph [ref=e193]:
            - strong [ref=e194]: "Aspirational Standard 1: Children’s Digital Rights Commissioner"
            - text: Jurisdictions should consider establishing a Children’s Digital Rights Commissioner — an independent office with authority to investigate platform practices, commission research, and issue guidance on children’s digital rights. Ireland’s proposed Digital Safety Commissioner and Australia’s eSafety Commissioner provide reference models.
        - blockquote [ref=e195]:
          - paragraph [ref=e196]:
            - strong [ref=e197]: "Aspirational Standard 2: Youth Advisory Boards for Platform Governance"
            - text: Platforms serving children should establish youth advisory boards with actual decision-making power over design choices affecting young users — not merely consultation. Young people should have a genuine role in platform governance, not just product testing.
        - separator [ref=e198]
        - heading "Standards Cross-Reference" [level=3] [ref=e199]
        - table [ref=e200]:
          - rowgroup [ref=e201]:
            - row "Standard Body Notes" [ref=e202]:
              - columnheader "Standard" [ref=e203]
              - columnheader "Body" [ref=e204]
              - columnheader "Notes" [ref=e205]
          - rowgroup [ref=e206]:
            - row "UN Convention on the Rights of the Child UN 1989; ratified by 196 states; the foundational normative framework" [ref=e207]:
              - cell "UN Convention on the Rights of the Child" [ref=e208]
              - cell "UN" [ref=e209]
              - cell "1989; ratified by 196 states; the foundational normative framework" [ref=e210]
            - row "UK Age Appropriate Design Code (Children’s Code) ICO (UK) 2021; 15 standards; most comprehensive design code globally" [ref=e211]:
              - cell "UK Age Appropriate Design Code (Children’s Code)" [ref=e212]
              - cell "ICO (UK)" [ref=e213]
              - cell "2021; 15 standards; most comprehensive design code globally" [ref=e214]
            - row "California AADC California Legislature 2022; design code approach applied to US context" [ref=e215]:
              - cell "California AADC" [ref=e216]
              - cell "California Legislature" [ref=e217]
              - cell "2022; design code approach applied to US context" [ref=e218]
            - row "EU Digital Services Act Article 28 EU 2022; advertising prohibition; risk assessment for minors" [ref=e219]:
              - cell "EU Digital Services Act Article 28" [ref=e220]
              - cell "EU" [ref=e221]
              - cell "2022; advertising prohibition; risk assessment for minors" [ref=e222]
            - row "COPPA (Rule 2024) FTC (US) 2024 revision; strengthened data minimisation" [ref=e223]:
              - cell "COPPA (Rule 2024)" [ref=e224]
              - cell "FTC (US)" [ref=e225]
              - cell "2024 revision; strengthened data minimisation" [ref=e226]
            - row "EU GDPR Article 8 EU 2016/679; age of consent for data processing (16, or 13 with member state opt-down)" [ref=e227]:
              - cell "EU GDPR Article 8" [ref=e228]
              - cell "EU" [ref=e229]
              - cell "2016/679; age of consent for data processing (16, or 13 with member state opt-down)" [ref=e230]
            - row "SOPIPA California 2014; student data protection; widely copied by other US states" [ref=e231]:
              - cell "SOPIPA" [ref=e232]
              - cell "California" [ref=e233]
              - cell "2014; student data protection; widely copied by other US states" [ref=e234]
        - separator [ref=e235]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e236]'
        - heading "Procurement Requirements" [level=3] [ref=e237]
        - blockquote [ref=e238]:
          - paragraph [ref=e239]:
            - strong [ref=e240]: Educational Technology Procurement Clause
            - text: "All contracts for educational technology shall include: (a) a prohibition on use of student data for any commercial purpose; (b) a data deletion timeline of [90] days post-contract; (c) an accessibility conformance requirement; (d) a right to audit data flows; (e) a notification obligation within [72] hours of any data breach affecting student data. Failure to comply with any of these conditions shall constitute a material breach giving the procuring body a right to terminate without penalty."
        - heading "Transition and Timeline" [level=3] [ref=e241]
        - table [ref=e242]:
          - rowgroup [ref=e243]:
            - row "Milestone Timeframe from adoption" [ref=e244]:
              - columnheader "Milestone" [ref=e245]
              - columnheader "Timeframe from adoption" [ref=e246]
          - rowgroup [ref=e247]:
            - row "Audit of existing educational technology contracts 6 months" [ref=e248]:
              - cell "Audit of existing educational technology contracts" [ref=e249]
              - cell "6 months" [ref=e250]
            - row "Prohibited practices cease in procured services 12 months" [ref=e251]:
              - cell "Prohibited practices cease in procured services" [ref=e252]
              - cell "12 months" [ref=e253]
            - row "Data minimisation requirements in all new EdTech procurement Immediate" [ref=e254]:
              - cell "Data minimisation requirements in all new EdTech procurement" [ref=e255]
              - cell "Immediate" [ref=e256]
            - row "Existing EdTech contracts renegotiated or terminated 24 months" [ref=e257]:
              - cell "Existing EdTech contracts renegotiated or terminated" [ref=e258]
              - cell "24 months" [ref=e259]
            - row "Algorithmic harm assessments for platforms serving primarily minors 18 months" [ref=e260]:
              - cell "Algorithmic harm assessments for platforms serving primarily minors" [ref=e261]
              - cell "18 months" [ref=e262]
        - heading "Reporting and Transparency" [level=3] [ref=e263]
        - blockquote [ref=e264]:
          - paragraph [ref=e265]:
            - strong [ref=e266]: Platform Transparency Report
            - text: "Digital platforms that primarily serve users under 18, or that have more than [500,000] minor users, shall publish an annual Children’s Safety and Wellbeing Report including: (a) the number of minor users and age distribution; (b) content moderation actions for content harmful to minors; (c) algorithmic audit results; (d) complaints received from minors and their outcomes; (e) data deletion requests received and fulfilled; (f) changes to design features affecting minor users during the year."
        - heading "Enforcement" [level=3] [ref=e267]
        - blockquote [ref=e268]:
          - paragraph [ref=e269]:
            - strong [ref=e270]: Enforcement Clause
            - text: "The designated authority may: (a) investigate complaints about digital services’ compliance with this policy; (b) conduct proactive audits of algorithmic systems in services used primarily by minors; (c) impose administrative penalties scaled to global turnover; (d) require design changes as a condition of continued operation; (e) receive complaints from parents, children, civil society organisations, and educators. Children’s digital rights organisations shall have standing to bring collective complaints."
        - separator [ref=e271]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e272]'
        - heading "Oversight Body" [level=3] [ref=e273]
        - blockquote [ref=e274]:
          - paragraph [ref=e275]:
            - strong [ref=e276]: Children’s Digital Rights Authority
            - text: "The designated regulatory body shall have: a Children’s Technology team with expertise in child development, digital design, and data systems; authority to conduct unannounced audits of platform design and algorithmic systems; power to order algorithmic changes and design modifications; and a dedicated child-friendly complaints mechanism. The body shall publish an annual Children’s Digital Rights report."
        - heading "Community Representation" [level=3] [ref=e277]
        - blockquote [ref=e278]:
          - paragraph [ref=e279]:
            - strong [ref=e280]: Young People’s Panel
            - text: "The oversight body shall maintain a Young People’s Panel of 15–21 year olds with: the right to raise issues directly with the oversight body; access to non-confidential platform audit information; a formal response to any issues raised; and compensation for their time. Panel members shall be recruited to reflect demographic diversity."
        - heading "Audit and Review" [level=3] [ref=e281]
        - blockquote [ref=e282]:
          - paragraph [ref=e283]:
            - strong [ref=e284]: Biennial Independent Review
            - text: "This policy shall be reviewed every two years given the pace of platform evolution. Reviews must include: direct consultation with young people; assessment of evidence on harms and benefits; evaluation of whether prohibited practices are adequately defined; and assessment of enforcement effectiveness."
        - separator [ref=e285]
        - heading "Real-World Examples" [level=2] [ref=e286]
        - heading "United Kingdom — Age Appropriate Design Code (Children’s Code)" [level=3] [ref=e287]
        - paragraph [ref=e288]:
          - strong [ref=e289]: "Enacted:"
          - text: 2020 (statutory code under the Data Protection Act 2018)
          - strong [ref=e290]: "In force:"
          - text: September 2021
          - strong [ref=e291]: "Regulator:"
          - text: Information Commissioner’s Office (ICO)
          - strong [ref=e292]: "Link:"
          - text: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/
          - strong [ref=e293]: "Summary:"
          - text: "Fifteen standards applicable to any online service “likely to be accessed by children.” Standards include: best interests of the child; data minimisation; default settings protecting children; no nudge techniques; no profiling by default; parental controls without surveillance. Has significantly influenced global platform design — Google, YouTube, TikTok, and others made design changes in response. Community critique: enforcement actions have been slow; the Code applies to UK users but platforms serve global audiences with different protections."
        - separator [ref=e294]
        - heading "California — Age-Appropriate Design Code Act (AB 2273)" [level=3] [ref=e295]
        - paragraph [ref=e296]:
          - strong [ref=e297]: "Enacted:"
          - text: "2022"
          - strong [ref=e298]: "Status:"
          - text: Implementation challenged in court; US District Court partially blocked enforcement (2023); case ongoing
          - strong [ref=e299]: "Link:"
          - text: https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB2273
          - strong [ref=e300]: "Summary:"
          - text: Modelled directly on the UK Children’s Code. Requires businesses to consider the best interests of children, prohibit dark patterns, limit data use, and conduct data protection impact assessments. Legal challenges from NetChoice argued First Amendment concerns with the algorithmic restriction provisions. The litigation illustrates the tension between children’s protection and platform speech rights that any effective policy must navigate.
        - separator [ref=e301]
        - heading "European Union — Digital Services Act (DSA) Article 28" [level=3] [ref=e302]
        - paragraph [ref=e303]:
          - strong [ref=e304]: "In force:"
          - text: February 2024
          - strong [ref=e305]: "Regulator:"
          - text: European Commission (for Very Large Online Platforms); national Digital Services Coordinators
          - strong [ref=e306]: "Link:"
          - text: https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package
          - strong [ref=e307]: "Summary:"
          - text: "Prohibits very large online platforms from targeting minors with advertising based on profiling. Requires annual systemic risk assessments including risks to minors. Imposes specific mitigation requirements for identified risks. The DSA’s enforcement architecture — with the Commission having direct authority over the largest platforms — provides stronger enforcement than delegated national frameworks. Community critique: the advertising prohibition is narrower than the UK Code’s approach; risk assessment obligations depend on platforms self-reporting their risks."
        - separator [ref=e308]
        - heading "Australia — eSafety Commissioner" [level=3] [ref=e309]
        - paragraph [ref=e310]:
          - strong [ref=e311]: "Established:"
          - text: 2015 (Online Safety Act 2021 expanded powers)
          - strong [ref=e312]: "Link:"
          - text: https://www.esafety.gov.au
          - strong [ref=e313]: "Summary:"
          - text: "Australia’s eSafety Commissioner has broad powers to: require takedown of harmful online content; investigate complaints; conduct research; develop industry codes; and issue public warnings about non-compliant platforms. The Commissioner has issued compliance notices to Twitter/X, Meta, and Google. Australia’s 2024 legislation banning children under 16 from social media is the world’s most restrictive age-based platform ban — its practical implementation and effects are under active scrutiny."
        - separator [ref=e314]
        - heading "Ireland — Data Protection Commission (DPC) Children’s Investigations" [level=3] [ref=e315]
        - paragraph [ref=e316]:
          - strong [ref=e317]: "Active:"
          - text: 2023–present
          - strong [ref=e318]: "Summary:"
          - text: The Irish DPC, as lead EU supervisory authority for many tech giants headquartered in Ireland, has conducted landmark investigations into children’s data practices. A €310 million fine against TikTok (2023) for failing to protect children’s data remains the largest GDPR children’s penalty. The DPC’s investigations demonstrate that GDPR enforcement, when applied to children’s data, can produce significant change — and significant resistance from platforms.
        - separator [ref=e319]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e320]
        - list [ref=e321]:
          - listitem [ref=e322]:
            - strong [ref=e323]: Age verification implementation
            - text: — Requiring age assurance without creating surveillance infrastructure is technically unsolved at scale. This model sets the principles but the technical standards are still developing.
          - listitem [ref=e324]:
            - strong [ref=e325]: End-to-end encryption tension
            - text: — Strong encryption protects children from predators and protects LGBTQ+ youth from exposure; it also prevents detection of child sexual abuse material (CSAM). This tension is genuine and not resolved in this model.
          - listitem [ref=e326]:
            - strong [ref=e327]: Global platform jurisdiction
            - text: — Platforms serving children globally are subject to different protections in different countries. A child in one jurisdiction may have far weaker protections than a child in another. International coordination is essential but underdeveloped.
          - listitem [ref=e328]:
            - strong [ref=e329]: Educational technology market concentration
            - text: — A small number of vendors (notably Google and Microsoft) provide educational technology to the majority of schools globally. Their market power makes procurement conditions difficult to enforce in practice.
          - listitem [ref=e330]:
            - strong [ref=e331]: Game design and gambling mechanics
            - text: — Loot boxes, in-app purchases targeting children, and gambling-like game mechanics are addressed incompletely in current frameworks. This model’s prohibition on variable reward mechanisms addresses the most harmful design patterns but full treatment of gaming is needed.
        - separator [ref=e332]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e333]
        - table [ref=e334]:
          - rowgroup [ref=e335]:
            - row "Related Domain Relationship" [ref=e336]:
              - columnheader "Related Domain" [ref=e337]
              - columnheader "Relationship" [ref=e338]
          - rowgroup [ref=e339]:
            - row "AI Adoption AI systems in educational settings and content recommendation for children require heightened governance" [ref=e340]:
              - cell "AI Adoption" [ref=e341]:
                - link "AI Adoption" [ref=e342] [cursor=pointer]:
                  - /url: ../../ai-adoption/full-model/
              - cell "AI systems in educational settings and content recommendation for children require heightened governance" [ref=e343]
            - row "Algorithmic Accountability Algorithms amplifying harmful content to minors require independent audit and bias assessment" [ref=e344]:
              - cell "Algorithmic Accountability" [ref=e345]:
                - link "Algorithmic Accountability" [ref=e346] [cursor=pointer]:
                  - /url: ../../algorithmic-accountability/full-model/
              - cell "Algorithms amplifying harmful content to minors require independent audit and bias assessment" [ref=e347]
            - row "Digital Accessibility Children’s technology must be accessible to children with disabilities" [ref=e348]:
              - cell "Digital Accessibility" [ref=e349]:
                - link "Digital Accessibility" [ref=e350] [cursor=pointer]:
                  - /url: ../../accessibility/full-model/
              - cell "Children’s technology must be accessible to children with disabilities" [ref=e351]
            - row "Smart Cities & Privacy Smart city surveillance affects children in public spaces; biometric data in schools" [ref=e352]:
              - cell "Smart Cities & Privacy" [ref=e353]:
                - link "Smart Cities & Privacy" [ref=e354] [cursor=pointer]:
                  - /url: ../../smart-cities/full-model/
              - cell "Smart city surveillance affects children in public spaces; biometric data in schools" [ref=e355]
            - row "Right to Repair Educational technology hardware longevity; device repairability in schools" [ref=e356]:
              - cell "Right to Repair" [ref=e357]:
                - link "Right to Repair" [ref=e358] [cursor=pointer]:
                  - /url: ../../right-to-repair/full-model/
              - cell "Educational technology hardware longevity; device repairability in schools" [ref=e359]
        - separator [ref=e360]
        - heading "Glossary" [level=2] [ref=e361]
        - paragraph [ref=e362]:
          - strong [ref=e363]: "Age Appropriate Design:"
          - text: Design principles requiring that digital services accessible to children consider children’s best interests, with privacy-protective defaults, no exploitative design patterns, and age-appropriate content and data practices.
        - paragraph [ref=e364]:
          - strong [ref=e365]: "Dark Patterns:"
          - text: Design choices that manipulate users into taking actions contrary to their interests — including hidden unsubscribe options, confusing cancellation flows, pre-ticked boxes, and deceptive urgency prompts. Particularly harmful when applied to children.
        - paragraph [ref=e366]:
          - strong [ref=e367]: "Variable Reward Mechanisms:"
          - text: Design features that provide unpredictable positive reinforcement (e.g., “like” notifications, slot machine-style rewards) — exploiting dopamine response in ways analogous to gambling. Documented to be more addictive than predictable rewards.
        - paragraph [ref=e368]:
          - strong [ref=e369]: "COPPA (Children’s Online Privacy Protection Act):"
          - text: US federal law (1998, amended 2024) requiring parental consent before collecting personal data from children under 13. The most established children’s privacy framework globally, though limited to data collection by services directed at children.
        - paragraph [ref=e370]:
          - strong [ref=e371]: "GDPR Age of Digital Consent:"
          - text: Under GDPR Article 8, children may consent to data processing for information society services from age 16 (or as low as 13 with member state opt-down). Below the age of consent, parental consent is required.
        - paragraph [ref=e372]:
          - strong [ref=e373]: "SOPIPA (Student Online Personal Information Protection Act):"
          - text: California law (2014) prohibiting operators of websites, online services, online applications, or mobile apps directed primarily to K-12 students from using student information for commercial purposes or selling it to third parties.
        - paragraph [ref=e374]:
          - strong [ref=e375]: "FERPA (Family Educational Rights and Privacy Act):"
          - text: US federal law protecting the privacy of student education records. Applies to schools and districts receiving federal funding.
        - separator [ref=e376]
        - heading "Contributing to This Policy Model" [level=2] [ref=e377]
        - paragraph [ref=e378]: "This model is maintained in the open. Priority contribution needs:"
        - list [ref=e379]:
          - listitem [ref=e380]:
            - strong [ref=e381]: Age verification technical standards
            - text: — approaches that achieve age assurance without creating surveillance infrastructure
          - listitem [ref=e382]:
            - strong [ref=e383]: Gaming and gambling mechanics
            - text: — comprehensive treatment of monetisation design targeting children
          - listitem [ref=e384]:
            - strong [ref=e385]: Global South examples
            - text: — children’s digital rights frameworks from African, Asian, and Latin American contexts
          - listitem [ref=e386]:
            - strong [ref=e387]: LGBTQ+ youth protections
            - text: — model language that protects LGBTQ+ youth from harassment while preserving access to affirming communities
          - listitem [ref=e388]:
            - strong [ref=e389]: Neurodiversity and cognitive accessibility
            - text: — specific provisions for children with autism, ADHD, and learning differences
        - paragraph [ref=e390]:
          - text: Open an
          - link "Issue" [ref=e391] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/issues
          - text: to propose changes or additions. See
          - link "CONTRIBUTING.md" [ref=e392] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - text: for the contribution process.
        - paragraph [ref=e393]: All substantive changes go through a minimum 14-day public comment period before merging.
        - separator [ref=e394]
        - heading "Changelog" [level=2] [ref=e395]
        - table [ref=e396]:
          - rowgroup [ref=e397]:
            - row "Version Date Summary of changes" [ref=e398]:
              - columnheader "Version" [ref=e399]
              - columnheader "Date" [ref=e400]
              - columnheader "Summary of changes" [ref=e401]
          - rowgroup [ref=e402]:
            - row "0.1 2026-04-05 Initial draft — four pillars, real-world examples from UK, California, EU, Australia, Ireland" [ref=e403]:
              - cell "0.1" [ref=e404]
              - cell "2026-04-05" [ref=e405]
              - cell "Initial draft — four pillars, real-world examples from UK, California, EU, Australia, Ireland" [ref=e406]
        - separator [ref=e407]
        - paragraph [ref=e408]:
          - emphasis [ref=e409]: This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.
      - link "✏️ Edit this policy on GitHub" [ref=e410] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/children-technology/full-model.md
  - contentinfo [ref=e411]:
    - generic [ref=e412]:
      - generic [ref=e413]:
        - heading "Open Digital Policies" [level=3] [ref=e414]
        - paragraph [ref=e415]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e416]:
        - heading "Policy Domains" [level=3] [ref=e417]
        - list [ref=e418]:
          - listitem [ref=e419]:
            - link "Who Pays for AI's Power Bill?" [ref=e420] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e421]:
            - link "Digital Services That Work for Everyone" [ref=e422] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e423]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e424] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e425]:
            - link "Public Money, Public Code" [ref=e426] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e427]:
            - link "AI That Works For You, Not On You" [ref=e428] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e429]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e430] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e431]:
            - link "A Greener Web" [ref=e432] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e433]:
            - link "Your City Is Watching You" [ref=e434] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e435]:
            - link "Whose Internet Is It?" [ref=e436] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e437]:
            - link "Technology That's Safe for Kids" [ref=e438] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e439]:
            - link "Who Decides What You Can Say Online?" [ref=e440] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e441]:
            - link "Digital Infrastructure for Everyone" [ref=e442] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e443]:
        - heading "Resources" [level=3] [ref=e444]
        - list [ref=e445]:
          - listitem [ref=e446]:
            - link "Explore all domains" [ref=e447] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e448]:
            - link "Adoptions tracker" [ref=e449] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e450]:
            - link "Search" [ref=e451] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e452]:
            - link "About this project" [ref=e453] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e454]:
            - link "How to contribute" [ref=e455] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e456]:
            - link "Glossary" [ref=e457] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e458]:
        - heading "Community" [level=3] [ref=e459]
        - list [ref=e460]:
          - listitem [ref=e461]:
            - link "GitHub repository" [ref=e462] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e463]:
            - link "Open an issue" [ref=e464] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e465]:
            - link "Propose a domain" [ref=e466] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e467]:
            - link "Report an adoption" [ref=e468] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e469]:
      - generic [ref=e470]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e471] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e472]:
        - text: Maintained by
        - link "the ODP community" [ref=e473] [cursor=pointer]:
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