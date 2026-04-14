# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/algorithmic-accountability/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/algorithmic-accountability/full-model/ [light]:

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
      - heading "Who's Holding the Algorithm Accountable?" [level=1] [ref=e29]
      - paragraph [ref=e30]: Algorithmic Accountability
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
        - heading "Algorithmic Accountability — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-04
            - strong [ref=e57]: "Maintainers:"
            - text: Open Digital Policies community
            - strong [ref=e58]: "Related domains:"
            - link "AI Adoption & Governance" [ref=e59] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - text: ","
            - link "Digital Accessibility" [ref=e60] [cursor=pointer]:
              - /url: ../../accessibility/full-model/
            - text: ","
            - link "Children & Technology" [ref=e61] [cursor=pointer]:
              - /url: ../../children-technology/full-model/
        - separator [ref=e62]
        - heading "Overview" [level=2] [ref=e63]
        - paragraph [ref=e64]: Algorithms and automated systems make or substantially influence decisions about employment, housing, credit, insurance, social benefits, criminal justice, and content access. These decisions affect people’s fundamental rights and life chances. Yet most algorithmic decision-making is invisible to the people it affects, unaudited for bias or accuracy, and protected from scrutiny by claims of trade secrecy. This policy model establishes standards for transparency, independent auditing, individual rights, and meaningful redress — applicable to both public sector and private sector algorithmic decision-making that affects fundamental interests.
        - heading "The Core Tension" [level=3] [ref=e65]
        - paragraph [ref=e66]: We want the efficiency and consistency that algorithmic systems can provide — without encoding historical discrimination at scale, without removing the human judgment that fairness often requires, and without creating a world where the most consequential decisions in people’s lives are made by systems they can neither see nor challenge.
        - heading "Scope" [level=3] [ref=e67]
        - paragraph [ref=e68]:
          - text: "This policy model is designed to apply at the level of:"
          - emphasis [ref=e69]: (select all that apply)
        - list [ref=e70]:
          - listitem [ref=e71]:
            - checkbox [checked] [disabled] [ref=e72]
            - text: Municipal / local government
          - listitem [ref=e73]:
            - checkbox [checked] [disabled] [ref=e74]
            - text: Regional / state / provincial government
          - listitem [ref=e75]:
            - checkbox [checked] [disabled] [ref=e76]
            - text: National government
          - listitem [ref=e77]:
            - checkbox [checked] [disabled] [ref=e78]
            - text: Public sector procurement (any level)
          - listitem [ref=e79]:
            - checkbox [checked] [disabled] [ref=e80]
            - text: Regulated industry
          - listitem [ref=e81]:
            - checkbox [disabled] [ref=e82]
            - text: "Other:"
            - strong [ref=e83]: __
            - text: _____
        - paragraph [ref=e84]:
          - emphasis [ref=e85]: "Note: Unlike most ODP policy models, Algorithmic Accountability explicitly covers private sector operators in regulated industries (employment, credit, insurance, housing) because the harms these systems cause are equivalent regardless of whether the operator is public or private."
        - separator [ref=e86]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e87]'
        - heading "Foundational Values" [level=3] [ref=e88]
        - paragraph [ref=e89]:
          - strong [ref=e90]: 1. People Are Not Data Points
          - text: Reducing a person to a score — a risk score, a creditworthiness score, a hirability score — and making consequential decisions on that basis without human judgment is a category error, not just a governance failure. Algorithmic systems may process relevant information efficiently, but the decision about what to do with that information, especially when it affects someone’s life, must involve genuine human judgment — not rubber-stamping of algorithmic outputs.
        - paragraph [ref=e91]:
          - strong [ref=e92]: 2. Discrimination Does Not Become Acceptable When Automated
          - text: Discriminatory outcomes are illegal whether produced by a biased human or a biased algorithm. A system that disproportionately denies employment, credit, housing, or public benefits to members of protected groups is discriminatory regardless of whether the discrimination was intended, whether it is encoded in the model, or whether the operator was unaware. Algorithmic discrimination requires the same accountability as other forms of discrimination.
        - paragraph [ref=e93]:
          - strong [ref=e94]: 3. The Right to Know You Are Being Scored
          - text: People have the right to know when algorithmic systems are being used to make or influence decisions about them, what data those systems are using, and what the significant factors in the output were. Opacity is not a legitimate business interest when the interests at stake include employment, housing, credit, and liberty.
        - paragraph [ref=e95]:
          - strong [ref=e96]: 4. The Right to Challenge
          - text: A right to explanation without a right to challenge is incomplete. People must be able to contest algorithmic decisions, have them reviewed by a human being with authority to reach a different conclusion, and have that review take place in a reasonable time.
        - paragraph [ref=e97]:
          - strong [ref=e98]: 5. Accountability Cannot Hide Behind Trade Secrets
          - text: Trade secret protection for algorithm source code is legitimate where it protects genuine IP. It is not legitimate when it prevents affected people from understanding or challenging decisions made about them, prevents regulators from auditing for discrimination, or functions as a blanket shield against any scrutiny whatsoever. The code itself may be protected; evidence of discriminatory outcomes is not a trade secret.
        - paragraph [ref=e99]:
          - strong [ref=e100]: 6. Auditing Is a Public Obligation, Not a Private Option
          - text: Self-certification and voluntary audits have not produced meaningful accountability. Independent, mandatory audits — with published results — are required for algorithmic systems that affect fundamental rights. Operators choose the auditor; they do not choose the methodology or the publication requirement.
        - paragraph [ref=e101]:
          - strong [ref=e102]: 7. Those Most Affected Should Shape the Standards
          - text: Communities that have historically faced discrimination — through credit redlining, discriminatory hiring, over-policing, or exclusion from housing — are the communities that bear the highest risk of algorithmic harm. Their expertise and lived experience must inform audit methodologies, oversight governance, and complaint processes.
        - heading "Equity Considerations" [level=3] [ref=e103]
        - list [ref=e104]:
          - listitem [ref=e105]:
            - strong [ref=e106]: Black, Indigenous, and other racialised communities
            - text: — Predictive risk scoring in criminal justice, insurance pricing, and mortgage lending have well-documented racially disparate impacts. Algorithmic systems trained on historical data reproduce and in some cases amplify these patterns. Race-neutral algorithms can produce racially discriminatory outcomes through proxy variables.
          - listitem [ref=e107]:
            - strong [ref=e108]: Women and non-binary people
            - text: — Hiring algorithms trained on historical hiring data reproduce historical gender exclusions. AI tools used to screen video interviews have been shown to correlate non-binary presentation with lower scores.
          - listitem [ref=e109]:
            - strong [ref=e110]: People with disabilities
            - text: — Automated screening often disadvantages people whose communication style, appearance, or physical movements differ from the training data baseline. Hiring, benefits, and educational algorithms frequently penalise disability-related differences.
          - listitem [ref=e111]:
            - strong [ref=e112]: People in poverty
            - text: — Credit and insurance algorithms that use postcode, purchasing patterns, or social network data as proxies effectively penalise poverty. Rent-scoring algorithms in the housing market have produced automated exclusion of low-income applicants.
          - listitem [ref=e113]:
            - strong [ref=e114]: Immigrants and non-citizens
            - text: — Algorithmic screening in border control, benefits eligibility, and employment disproportionately affects immigrants, who have fewer legal remedies than citizens in many jurisdictions.
          - listitem [ref=e115]:
            - strong [ref=e116]: Young people
            - text: — Algorithmic profiling in educational settings and social media creates lasting records that can affect life chances without meaningful consent or review rights.
        - heading "Environmental Considerations" [level=3] [ref=e117]
        - paragraph [ref=e118]:
          - text: The environmental footprint of algorithmic decision-making is primarily in model training (a one-time cost) and inference (ongoing at scale). Large-scale algorithmic decision-making run as cloud services requires data center infrastructure subject to the standards in the
          - link "Data Centers model" [ref=e119] [cursor=pointer]:
            - /url: ../../data-centers/full-model/
          - text: . Algorithmic accountability policy should not inadvertently incentivise more compute-intensive approaches when simpler, more interpretable models would serve accountability goals as well.
        - separator [ref=e120]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e121]'
        - heading "Mandatory Standards" [level=3] [ref=e122]
        - blockquote [ref=e123]:
          - paragraph [ref=e124]:
            - strong [ref=e125]: "Standard 1: Disclosure to Affected Individuals"
            - text: "Any operator using an automated or algorithmic system to make or substantially assist in making a decision affecting an individual’s employment, housing, credit, insurance, access to benefits, educational placement, or access to public services must disclose:"
          - paragraph [ref=e126]: (a) That an algorithmic system was used in the decision;
          - paragraph [ref=e127]: (b) The general purpose and logic of the system — what type of outcome it predicts or scores and on what basis;
          - paragraph [ref=e128]: (c) The significant data inputs or factors that most influenced the outcome for this individual;
          - paragraph [ref=e129]: (d) The right to request human review and the process for doing so;
          - paragraph [ref=e130]: (e) The right to submit a complaint to the designated oversight body.
          - paragraph [ref=e131]: Disclosure must be provided in plain language, at or before the time the decision is communicated, without requiring the individual to specifically request it.
        - paragraph [ref=e132]:
          - emphasis [ref=e133]: "Rationale: NYC Local Law 144 (2023) requires notification to candidates before use of automated employment decision tools. Illinois AIEA (2020) requires pre-interview notification and explanation of AI video interview analysis. GDPR Articles 13–15 require disclosure of automated decision-making. This model standardises and strengthens these disclosure requirements across decision types, and makes disclosure proactive rather than requiring individuals to ask."
        - paragraph [ref=e134]:
          - emphasis [ref=e135]: "Reference: NYC Local Law 144; Illinois AIEA (820 ILCS 42); GDPR Articles 13–15, 22"
        - separator [ref=e136]
        - blockquote [ref=e137]:
          - paragraph [ref=e138]:
            - strong [ref=e139]: "Standard 2: Right to Human Review"
            - text: "Any individual who has been subject to a decision substantially assisted by an algorithmic system, in the domains covered by Standard 1, has the right to:"
          - paragraph [ref=e140]: (a) Request that the decision be reviewed by a human being with authority to reach a different conclusion;
          - paragraph [ref=e141]: (b) Have that review completed within 30 days of the request;
          - paragraph [ref=e142]: (c) Receive a written explanation of the outcome of the human review, including the reasons for any departure from or confirmation of the automated outcome;
          - paragraph [ref=e143]: (d) Submit additional information relevant to the decision before the human review is completed.
          - paragraph [ref=e144]: Operators must not design human review processes in which the reviewer has no practical ability to override the algorithmic output, or where review is completed so quickly as to preclude genuine consideration.
        - paragraph [ref=e145]:
          - emphasis [ref=e146]: "Rationale: The “human-in-the-loop” requirement has been widely adopted but widely circumvented — reviewers who process hundreds of algorithmic outputs per hour are not exercising genuine judgment. This model language targets the circumvention problem by requiring that reviewers have actual authority, actual time, and a written output."
        - separator [ref=e147]
        - blockquote [ref=e148]:
          - paragraph [ref=e149]:
            - strong [ref=e150]: "Standard 3: Mandatory Independent Bias Audit"
            - text: "Operators deploying algorithmic systems in covered domains (Standard 1) must commission an independent bias audit:"
          - paragraph [ref=e151]: (a) Before initial deployment of a new system;
          - paragraph [ref=e152]: (b) Within 24 months of initial deployment and every 24 months thereafter;
          - paragraph [ref=e153]: (c) Within 90 days of any material change to the system, its training data, or the population it is applied to;
          - paragraph [ref=e154]: (d) Within 90 days of receiving a credible complaint alleging discriminatory outcomes.
          - paragraph [ref=e155]: "The audit must:"
          - paragraph [ref=e156]: (i) Be conducted by an independent third party with no financial interest in the system’s continued deployment;
          - paragraph [ref=e157]: "(ii) Test for disparate impact across at minimum: race/ethnicity, sex/gender, age (where legally relevant), disability status, and any other protected characteristics defined in applicable anti-discrimination law;"
          - paragraph [ref=e158]: (iii) Use a defined, published methodology — auditors must disclose their methodology in the published report;
          - paragraph [ref=e159]: (iv) Be published in full, not summarised by the operator, within 60 days of completion;
          - paragraph [ref=e160]: (v) Include the auditor’s recommendations and the operator’s response to each recommendation.
        - paragraph [ref=e161]:
          - emphasis [ref=e162]: "Rationale: NYC Local Law 144 requires annual independent bias audits for automated employment decision tools, with public disclosure — the most directly enforceable bias audit requirement enacted anywhere. Colorado SB21-169 requires insurance companies to test their algorithmic systems for unfair discrimination and submit compliance reports. This model generalises those requirements across covered domains and adds the methodology disclosure requirement that has been criticised as absent from NYC’s framework."
        - paragraph [ref=e163]:
          - emphasis [ref=e164]:
            - text: "Reference: NYC Local Law 144 (enforcement effective July 2023); Colorado SB21-169 (initial compliance report December 2024);"
            - link "NYC DCWP guidance" [ref=e165] [cursor=pointer]:
              - /url: https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
        - separator [ref=e166]
        - blockquote [ref=e167]:
          - paragraph [ref=e168]:
            - strong [ref=e169]: "Standard 4: Data Minimisation and Proxy Prohibition"
            - text: "Algorithmic systems in covered domains must not:"
          - paragraph [ref=e170]: (a) Use postcode, neighbourhood, or geographic unit as an input variable where doing so produces a disparate impact on protected groups and the variable lacks documented predictive validity independent of its proxy relationship to protected characteristics;
          - paragraph [ref=e171]: (b) Use social network data, purchasing patterns, or online behaviour as inputs in employment, housing, credit, or insurance decisions where these function as proxies for protected characteristics;
          - paragraph [ref=e172]: (c) Use data collected from or about the individual for purposes other than the purpose disclosed at the time of collection, without fresh consent.
          - paragraph [ref=e173]: Operators must document their analysis of proxy risks for each input variable used in covered systems and provide this documentation to auditors.
        - paragraph [ref=e174]:
          - emphasis [ref=e175]: "Rationale: Algorithmic discrimination through proxy variables is the primary mechanism by which facially neutral systems produce discriminatory outcomes. Postcode is the most common proxy for race and class in credit, insurance, and employment. The prohibition on undisclosed data repurposing reflects the data minimisation principle of GDPR and the consent requirements of privacy law."
        - separator [ref=e176]
        - blockquote [ref=e177]:
          - paragraph [ref=e178]:
            - strong [ref=e179]: "Standard 5: Prohibition on High-Risk Unreviewed Automated Decisions"
            - text: "No final decision in the following categories may be made by an automated system without human review and written approval: (a) denial of employment for roles that a person has applied to specifically; (b) denial of housing, mortgage, or rental applications; (c) denial or reduction of social benefits, disability accommodations, or healthcare access; (d) decisions with legal effects in criminal or civil justice proceedings; (e) educational placement or exclusion decisions affecting children."
        - paragraph [ref=e180]:
          - emphasis [ref=e181]: "Rationale: Canada’s Directive on Automated Decision-Making Level IV requirement — that final decisions must be made by a human — is extended here to private sector contexts in high-stakes domains. These are the domains where algorithmic error has the most severe and least reversible consequences."
        - separator [ref=e182]
        - heading "Aspirational Standards" [level=3] [ref=e183]
        - blockquote [ref=e184]:
          - paragraph [ref=e185]:
            - strong [ref=e186]: "Aspirational Standard 1: Algorithmic Register"
            - text: Jurisdictions should establish a public register of algorithmic systems used in covered domains by operators above a defined size threshold, modelled on the EU AI Act’s database of high-risk AI systems. The register should include the system’s purpose, covered population, audit status, and known bias findings.
        - separator [ref=e187]
        - blockquote [ref=e188]:
          - paragraph [ref=e189]:
            - strong [ref=e190]: "Aspirational Standard 2: Shared Audit Infrastructure"
            - text: Regulators should develop and publish standardised audit methodologies for common algorithmic uses (hiring, credit, housing) so that audits across different operators are comparable. Without standardised methodology, published audits cannot be compared, and auditors have no common baseline — as has been the case under NYC Local Law 144 since 2023.
        - separator [ref=e191]
        - heading "Standards Cross-Reference" [level=3] [ref=e192]
        - table [ref=e193]:
          - rowgroup [ref=e194]:
            - row "Standard Referenced Body Version Notes" [ref=e195]:
              - columnheader "Standard Referenced" [ref=e196]
              - columnheader "Body" [ref=e197]
              - columnheader "Version" [ref=e198]
              - columnheader "Notes" [ref=e199]
          - rowgroup [ref=e200]:
            - row "NYC Local Law 144 New York City 2021/2023 Bias audit template for employment AEDT" [ref=e201]:
              - cell "NYC Local Law 144" [ref=e202]
              - cell "New York City" [ref=e203]
              - cell "2021/2023" [ref=e204]
              - cell "Bias audit template for employment AEDT" [ref=e205]
            - row "Colorado SB21-169 Colorado Legislature 2021 Insurance algorithm testing and reporting" [ref=e206]:
              - cell "Colorado SB21-169" [ref=e207]
              - cell "Colorado Legislature" [ref=e208]
              - cell "2021" [ref=e209]
              - cell "Insurance algorithm testing and reporting" [ref=e210]
            - row "Illinois AIEA Illinois Legislature 2020 Video interview disclosure requirements" [ref=e211]:
              - cell "Illinois AIEA" [ref=e212]
              - cell "Illinois Legislature" [ref=e213]
              - cell "2020" [ref=e214]
              - cell "Video interview disclosure requirements" [ref=e215]
            - row "GDPR EU 2016/679 Right not to be subject to automated decisions; disclosure" [ref=e216]:
              - cell "GDPR" [ref=e217]
              - cell "EU" [ref=e218]
              - cell "2016/679" [ref=e219]
              - cell "Right not to be subject to automated decisions; disclosure" [ref=e220]
            - row "EU AI Act European Parliament 2024/1689 High-risk AI obligations in employment, credit, justice" [ref=e221]:
              - cell "EU AI Act" [ref=e222]
              - cell "European Parliament" [ref=e223]
              - cell "2024/1689" [ref=e224]
              - cell "High-risk AI obligations in employment, credit, justice" [ref=e225]
            - row "Canada AIA Treasury Board Secretariat 2019 Impact assessment methodology" [ref=e226]:
              - cell "Canada AIA" [ref=e227]
              - cell "Treasury Board Secretariat" [ref=e228]
              - cell "2019" [ref=e229]
              - cell "Impact assessment methodology" [ref=e230]
        - separator [ref=e231]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e232]'
        - heading "Procurement Requirements" [level=3] [ref=e233]
        - blockquote [ref=e234]:
          - paragraph [ref=e235]:
            - strong [ref=e236]: "Procurement Clause A: Vendor Audit Obligations"
            - text: "Any operator procuring an algorithmic system for use in covered domains must contractually require the vendor to: (a) provide access to training data documentation and model performance data across demographic subgroups; (b) cooperate with independent audits commissioned by the operator or regulator; (c) notify the operator within 30 days of becoming aware of bias findings, material performance degradation, or data breaches affecting the system; (d) not claim trade secret protection as grounds to refuse cooperation with a regulatory audit."
        - separator [ref=e237]
        - blockquote [ref=e238]:
          - paragraph [ref=e239]:
            - strong [ref=e240]: "Procurement Clause B: Explainability Requirement"
            - text: Operators must not procure algorithmic systems that are incapable of providing factor-level explanations for individual decisions. “The model is too complex to explain” is not acceptable for systems used in covered domains. Operators must require vendors to demonstrate explainability capability before procurement.
        - separator [ref=e241]
        - heading "Transition and Timeline" [level=3] [ref=e242]
        - table [ref=e243]:
          - rowgroup [ref=e244]:
            - row "Milestone Timeframe from adoption Notes" [ref=e245]:
              - columnheader "Milestone" [ref=e246]
              - columnheader "Timeframe from adoption" [ref=e247]
              - columnheader "Notes" [ref=e248]
          - rowgroup [ref=e249]:
            - row "Disclosure requirement in force 6 months Applies to all new decisions; existing systems have additional 12 months" [ref=e250]:
              - cell "Disclosure requirement in force" [ref=e251]
              - cell "6 months" [ref=e252]
              - cell "Applies to all new decisions; existing systems have additional 12 months" [ref=e253]
            - row "Human review right in force 6 months" [ref=e254]:
              - cell "Human review right in force" [ref=e255]
              - cell "6 months" [ref=e256]
              - cell [ref=e257]
            - row "Bias audit required for new system deployments 6 months" [ref=e258]:
              - cell "Bias audit required for new system deployments" [ref=e259]
              - cell "6 months" [ref=e260]
              - cell [ref=e261]
            - row "Bias audit required for existing high-risk systems 18 months" [ref=e262]:
              - cell "Bias audit required for existing high-risk systems" [ref=e263]
              - cell "18 months" [ref=e264]
              - cell [ref=e265]
            - row "Bias audit required for all covered systems 30 months" [ref=e266]:
              - cell "Bias audit required for all covered systems" [ref=e267]
              - cell "30 months" [ref=e268]
              - cell [ref=e269]
            - row "Proxy prohibition guidance published 6 months Guidance on data inputs and documented predictive validity" [ref=e270]:
              - cell "Proxy prohibition guidance published" [ref=e271]
              - cell "6 months" [ref=e272]
              - cell "Guidance on data inputs and documented predictive validity" [ref=e273]
        - heading "Reporting and Transparency" [level=3] [ref=e274]
        - blockquote [ref=e275]:
          - paragraph [ref=e276]:
            - strong [ref=e277]: Transparency Requirement
            - text: "Operators must publish annually: (a) a list of algorithmic systems in use in covered domains; (b) links to all current bias audit reports; (c) the number of human review requests received and the outcomes; (d) the number of complaints received relating to algorithmic decisions and their resolution; (e) any material changes made to algorithmic systems in response to audit findings. For operators above a defined size threshold, this report must be submitted to the oversight body as well as published publicly."
        - heading "Enforcement" [level=3] [ref=e278]
        - blockquote [ref=e279]:
          - paragraph [ref=e280]:
            - strong [ref=e281]: Enforcement Clause
            - text: "The designated oversight body may: (a) require operators to produce audit reports, training data documentation, and model performance data; (b) commission independent audits at operator expense where the oversight body has reason to believe published audits are inadequate; (c) require the suspension of any system found to be producing discriminatory outcomes pending remediation; (d) impose penalties scaled to operator revenue for each violation of disclosure, audit, or human review requirements; (e) grant civil society organisations standing to bring enforcement complaints on behalf of affected communities, without requiring a named individual complainant."
          - paragraph [ref=e282]: Individual complainants may bring claims before the oversight body or the courts; the standard of proof is disparate impact — the complainant need not demonstrate discriminatory intent.
        - paragraph [ref=e283]:
          - emphasis [ref=e284]: "Notes on enforcement: NYC Local Law 144’s penalty structure ($500–$1,500 per day per violation) has produced some compliance but is insufficient for large employers. Scaling penalties to operator revenue (as in GDPR) provides a stronger deterrent. Civil society standing removes the barrier that individual complainants often cannot identify themselves as affected without the disclosure rights the policy creates."
        - separator [ref=e285]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e286]'
        - heading "Oversight Body" [level=3] [ref=e287]
        - blockquote [ref=e288]:
          - paragraph [ref=e289]:
            - strong [ref=e290]: Oversight Clause
            - text: "An Algorithmic Accountability Office, or designated regulatory body with equivalent powers, shall oversee compliance. The body must have expertise in: machine learning and statistical auditing; employment, credit, housing, and insurance law; human rights and discrimination law; and accessibility. The body must be independent of the executive and of operators of covered algorithmic systems. Governing board members may not have financial relationships with operators subject to the body’s oversight."
        - heading "Community Representation" [level=3] [ref=e291]
        - blockquote [ref=e292]:
          - paragraph [ref=e293]:
            - strong [ref=e294]: Participation Clause
            - text: "The oversight body must establish a stakeholder advisory council with seats reserved for: organisations representing workers in sectors where employment algorithms are used; community groups representing communities with documented histories of algorithmic discrimination; civil liberties and privacy advocacy organisations; disability justice organisations; consumer protection advocates; and academic researchers in algorithmic fairness. The council must be consulted before any revision to audit methodology standards, covered domain definitions, or enforcement penalty scales."
        - paragraph [ref=e295]:
          - emphasis [ref=e296]: "Equity note: Employment, credit, and criminal justice algorithms have disproportionately harmed Black, Indigenous, and other racialised communities. These communities must have meaningful representation in the governance of accountability systems, not only as complainants."
        - heading "Audit and Review" [level=3] [ref=e297]
        - blockquote [ref=e298]:
          - paragraph [ref=e299]:
            - strong [ref=e300]: Audit Clause
            - text: "The oversight body must conduct annual meta-audits of the independent audits published by operators, assessing: whether audit methodologies meet the minimum standard; whether published audits show evidence of auditor capture (conflicts of interest); and whether findings are being acted upon. Meta-audit results must be published and used to strengthen the mandatory methodology standard."
        - blockquote [ref=e301]:
          - paragraph [ref=e302]:
            - strong [ref=e303]: Review Clause
            - text: "This policy shall be reviewed every two years, given the pace of AI and algorithmic system development. The review must include assessment of: whether the covered domains remain appropriate; whether the audit methodology standard requires updating; whether enforcement has produced measurable reduction in discriminatory outcomes. The review must include a 60-day public comment period with targeted outreach to affected communities."
        - separator [ref=e304]
        - heading "Real-World Examples" [level=2] [ref=e305]
        - heading "New York City — Local Law 144 (Automated Employment Decision Tools)" [level=3] [ref=e306]
        - paragraph [ref=e307]:
          - strong [ref=e308]: "Enacted:"
          - text: 2021; enforcement effective July 5, 2023
          - strong [ref=e309]: "Type:"
          - text: City law
          - strong [ref=e310]: "Link:"
          - text: https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
          - strong [ref=e311]: "Summary:"
          - text: "Employers and employment agencies using automated tools to screen applicants or assess employees for promotion must commission annual independent bias audits, publish results, and provide candidates at least 10 business days’ notice that such a tool is used. Penalties of $500–$1,500 per day per violation, enforced by the Department of Consumer and Worker Protection. The first enacted bias audit mandate anywhere. Community critique: the methodology for bias audits is not standardised, making published audits incomparable; the “independent third party” requirement lacks accreditation standards; small employers may lack resources to comply; the law does not address tools that score candidates but stop short of formally filtering them out."
        - separator [ref=e312]
        - heading "Colorado — SB21-169 (Insurance Algorithms)" [level=3] [ref=e313]
        - paragraph [ref=e314]:
          - strong [ref=e315]: "Enacted:"
          - text: Signed July 2021; first compliance reports due December 2024
          - strong [ref=e316]: "Type:"
          - text: State law
          - strong [ref=e317]: "Link:"
          - text: https://doi.colorado.gov/for-consumers/sb21-169-protecting-consumers-from-unfair-discrimination-in-insurance-practices
          - strong [ref=e318]: "Summary:"
          - text: "Colorado insurers using external consumer data and algorithms must demonstrate they test their systems to ensure no unfair discrimination against protected groups including race, religion, sex, sexual orientation, and disability. Requires written governance policies, vendor documentation, ongoing monitoring, and annual compliance reports to the Division of Insurance. Broader in scope than NYC LL144 — applies to insurance across lines (auto, home, life, health) and requires ongoing monitoring not just periodic audits. Community critique: compliance reporting began in December 2024; too early to assess effectiveness; methodology for testing is not standardised."
        - separator [ref=e319]
        - heading "Illinois — Artificial Intelligence Video Interview Act (AIEA)" [level=3] [ref=e320]
        - paragraph [ref=e321]:
          - strong [ref=e322]: "Enacted:"
          - text: January 2020
          - strong [ref=e323]: "Type:"
          - text: State law
          - strong [ref=e324]: "Link:"
          - text: https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4015&ChapterID=68
          - strong [ref=e325]: "Summary:"
          - text: "Employers using AI to analyse video interviews must notify applicants before the interview, explain how AI analysis works, describe what characteristics the AI evaluates, and obtain consent. Applicants who do not consent cannot have AI used to analyse their interview. Upon request, employers must delete video recordings and instruct any third parties in possession of the recordings to delete them within 30 days. First enacted AI transparency requirement specifically targeting hiring algorithms, and notable for requiring informed consent rather than just disclosure. Weakness: does not require bias auditing or publication of aggregate results."
        - separator [ref=e326]
        - heading "Canada — Algorithmic Impact Assessment Framework" [level=3] [ref=e327]
        - paragraph [ref=e328]:
          - strong [ref=e329]: "Enacted:"
          - text: 2019 (mandatory for federal government)
          - strong [ref=e330]: "Type:"
          - text: Treasury Board Directive
          - strong [ref=e331]: "Link:"
          - text: https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html
          - strong [ref=e332]: "Summary:"
          - text: "Federal institutions must complete a structured AIA before deploying automated decision systems. The AIA tool asks 65 risk questions and 41 mitigation questions, producing an impact score and a set of required mitigations proportionate to impact level. Impact Level IV requires human decision-making. AIA results must be published. Provides the most structured and transparent assessment methodology available for government AI. Community critique: enforcement is weak; the questionnaire can be gamed; “automated decision system” definition has gaps; federal only."
        - separator [ref=e333]
        - heading "European Union — EU AI Act (High-Risk AI Obligations)" [level=3] [ref=e334]
        - paragraph [ref=e335]:
          - strong [ref=e336]: "Enacted:"
          - text: 2024 (Regulation (EU) 2024/1689); high-risk obligations effective August 2026
          - strong [ref=e337]: "Type:"
          - text: EU Regulation
          - strong [ref=e338]: "Link:"
          - text: https://artificialintelligenceact.eu/annex/3/
          - strong [ref=e339]: "Summary:"
          - text: "Employment, recruitment, and worker management AI systems are classified as high-risk under Annex III and subject to strict obligations: risk assessment and management; technical documentation; transparency to affected individuals; human oversight; accuracy and robustness requirements; and registration in an EU database. Credit scoring and justice administration AI are similarly classified. Transparency obligations include informing individuals that AI was used and the right to request an explanation. Most comprehensive sectoral scope of any enacted framework. Community critique: compliance timelines (2026–2027) lag the deployment of the systems being regulated; self-certification for some high-risk categories; enforcement depends on 27 national market surveillance authorities."
        - separator [ref=e340]
        - heading "Santa Clara Principles on Content Moderation" [level=3] [ref=e341]
        - paragraph [ref=e342]:
          - strong [ref=e343]: "Established:"
          - text: 2018; Version 2.0 released 2021
          - strong [ref=e344]: "Type:"
          - text: Civil society standards (endorsed by major platforms)
          - strong [ref=e345]: "Link:"
          - text: https://santaclaraprinciples.org/
          - strong [ref=e346]: "Summary:"
          - text: "Sets expectations for transparency and accountability in user-generated content moderation by platforms. Core demands: publish comprehensive numbers on moderation actions; provide clear notice to affected users; offer robust appeals processes. Version 2.0 added more granular standards for large platforms and extended to address government requests for content removal. Demonstrates the civil society standard-setting model where community organisations define expectations that regulators and platforms subsequently adopt. Weakness: endorsement is voluntary; no enforcement mechanism."
        - separator [ref=e347]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e348]
        - list [ref=e349]:
          - listitem [ref=e350]:
            - strong [ref=e351]: Audit methodology standardisation
            - text: — The most significant practical weakness across all enacted bias audit requirements is the absence of standardised methodology. Auditors produce results that cannot be compared across operators or over time. Developing a published minimum methodology standard is the highest-priority gap in this model.
          - listitem [ref=e352]:
            - strong [ref=e353]: Credit and insurance algorithms are severely underregulated
            - text: — NYC LL144 covers only employment. Colorado SB21-169 covers only insurance. Credit scoring algorithms — which affect housing, auto purchase, and financial inclusion — have no mandatory audit requirement in most jurisdictions. This gap is significant.
          - listitem [ref=e354]:
            - strong [ref=e355]: Criminal justice algorithms
            - text: — Predictive policing, recidivism scoring (COMPAS and similar tools), and bail decision algorithms affect liberty and are largely excluded from existing accountability frameworks. This is a critical and underserved domain.
          - listitem [ref=e356]:
            - strong [ref=e357]: Who audits the auditors
            - text: — No jurisdiction has established auditor accreditation or oversight. Audit quality is unverifiable; conflicts of interest are possible. A meta-audit requirement (as proposed in Pillar 4) is one partial remedy, but formal auditor standards are needed.
          - listitem [ref=e358]:
            - strong [ref=e359]: Global South
            - text: — Algorithmic accountability legislation is almost entirely a North American and European phenomenon. High-stakes algorithmic systems are deployed in Global South contexts, often by international organisations and development banks, with no accountability framework.
          - listitem [ref=e360]:
            - strong [ref=e361]: Intersectionality
            - text: — Most bias audit requirements test protected characteristics independently. Systems can produce discriminatory outcomes specifically for people at the intersection of multiple characteristics (e.g. Black women, disabled immigrants) that are invisible to single-axis analysis. Intersectional testing methodology needs development.
        - separator [ref=e362]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e363]
        - table [ref=e364]:
          - rowgroup [ref=e365]:
            - row "Related Domain Relationship" [ref=e366]:
              - columnheader "Related Domain" [ref=e367]
              - columnheader "Relationship" [ref=e368]
          - rowgroup [ref=e369]:
            - row "AI Adoption & Governance AI Adoption sets the framework; Algorithmic Accountability provides sector-specific enforcement and audit standards" [ref=e370]:
              - cell "AI Adoption & Governance" [ref=e371]:
                - link "AI Adoption & Governance" [ref=e372] [cursor=pointer]:
                  - /url: ../../ai-adoption/full-model/
              - cell "AI Adoption sets the framework; Algorithmic Accountability provides sector-specific enforcement and audit standards" [ref=e373]
            - row "Digital Accessibility Algorithmic systems that affect disabled people must meet accessibility standards and must not discriminate on the basis of disability-related presentation" [ref=e374]:
              - cell "Digital Accessibility" [ref=e375]:
                - link "Digital Accessibility" [ref=e376] [cursor=pointer]:
                  - /url: ../../accessibility/full-model/
              - cell "Algorithmic systems that affect disabled people must meet accessibility standards and must not discriminate on the basis of disability-related presentation" [ref=e377]
            - row "Children & Technology Algorithmic systems used in educational settings require the heightened protections of that domain" [ref=e378]:
              - cell "Children & Technology" [ref=e379]:
                - link "Children & Technology" [ref=e380] [cursor=pointer]:
                  - /url: ../../children-technology/full-model/
              - cell "Algorithmic systems used in educational settings require the heightened protections of that domain" [ref=e381]
            - row "Data Centers Large-scale algorithmic processing requires energy-efficient infrastructure" [ref=e382]:
              - cell "Data Centers" [ref=e383]:
                - link "Data Centers" [ref=e384] [cursor=pointer]:
                  - /url: ../../data-centers/full-model/
              - cell "Large-scale algorithmic processing requires energy-efficient infrastructure" [ref=e385]
            - row "Freedom of Expression Content moderation algorithms are a key application of algorithmic accountability standards" [ref=e386]:
              - cell "Freedom of Expression" [ref=e387]:
                - link "Freedom of Expression" [ref=e388] [cursor=pointer]:
                  - /url: ../../freedom-of-expression/full-model/
              - cell "Content moderation algorithms are a key application of algorithmic accountability standards" [ref=e389]
        - separator [ref=e390]
        - heading "Glossary" [level=2] [ref=e391]
        - paragraph [ref=e392]:
          - strong [ref=e393]: "Automated Employment Decision Tool (AEDT):"
          - text: Under NYC Local Law 144, a machine learning or AI tool used to substantially assist or replace discretionary decision-making in screening job applicants or assessing employees for promotion. The term used specifically in New York’s framework.
        - paragraph [ref=e394]:
          - strong [ref=e395]: "Bias Audit:"
          - text: An independent assessment of an algorithmic system for evidence of disparate impact across protected groups. Must be conducted by a party independent of the operator, using a defined methodology, with results published.
        - paragraph [ref=e396]:
          - strong [ref=e397]: "Disparate Impact:"
          - text: A legal doctrine holding that a facially neutral policy or practice can be discriminatory if it disproportionately disadvantages a protected group, regardless of intent. The standard against which bias audits measure algorithmic systems.
        - paragraph [ref=e398]:
          - strong [ref=e399]: "Human-in-the-Loop:"
          - text: A design requirement that a human reviews algorithmic outputs before they become final decisions. Meaningful human-in-the-loop review requires that the reviewer has time, information, and actual authority to reach a different conclusion. Nominal review — rubber-stamping — does not satisfy this requirement.
        - paragraph [ref=e400]:
          - strong [ref=e401]: "Proxy Variable:"
          - text: A data input that correlates strongly with a protected characteristic (race, sex, disability) without directly measuring it. Postcode is a common proxy for race and class. Using proxy variables can produce discriminatory outcomes even in systems that do not use protected characteristics directly.
        - paragraph [ref=e402]:
          - strong [ref=e403]: "Trade Secret:"
          - text: Confidential business information that provides competitive advantage and is protected from disclosure. Relevant in algorithmic accountability because vendors frequently claim trade secret protection to prevent audits. The algorithm code itself may be a trade secret; evidence of discriminatory outcomes is not.
        - separator [ref=e404]
        - heading "Contributing to This Policy Model" [level=2] [ref=e405]
        - paragraph [ref=e406]: "Priority contribution needs for this model:"
        - list [ref=e407]:
          - listitem [ref=e408]:
            - strong [ref=e409]: Audit methodology standard
            - text: — A draft minimum methodology for bias audits in employment, credit, and insurance contexts
          - listitem [ref=e410]:
            - strong [ref=e411]: Criminal justice algorithms
            - text: — Model language specifically addressing predictive policing and recidivism scoring
          - listitem [ref=e412]:
            - strong [ref=e413]: Intersectional testing guidance
            - text: — Methodology for testing algorithmic fairness at the intersection of multiple protected characteristics
          - listitem [ref=e414]:
            - strong [ref=e415]: Global South examples
            - text: — Algorithmic accountability frameworks or advocacy from African, Asian, and Latin American jurisdictions
          - listitem [ref=e416]:
            - strong [ref=e417]: Auditor accreditation proposal
            - text: — A draft framework for auditor standards and oversight
        - paragraph [ref=e418]: All substantive changes go through a minimum 14-day public comment period before merging.
        - separator [ref=e419]
        - heading "Changelog" [level=2] [ref=e420]
        - table [ref=e421]:
          - rowgroup [ref=e422]:
            - row "Version Date Summary of changes" [ref=e423]:
              - columnheader "Version" [ref=e424]
              - columnheader "Date" [ref=e425]
              - columnheader "Summary of changes" [ref=e426]
          - rowgroup [ref=e427]:
            - row "0.1 2026-04-04 Initial draft — four pillars, real-world examples from NYC, Colorado, Illinois, Canada, EU, Santa Clara Principles" [ref=e428]:
              - cell "0.1" [ref=e429]
              - cell "2026-04-04" [ref=e430]
              - cell "Initial draft — four pillars, real-world examples from NYC, Colorado, Illinois, Canada, EU, Santa Clara Principles" [ref=e431]
        - separator [ref=e432]
        - paragraph [ref=e433]:
          - emphasis [ref=e434]: This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.
      - link "✏️ Edit this policy on GitHub" [ref=e435] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/algorithmic-accountability/full-model.md
  - contentinfo [ref=e436]:
    - generic [ref=e437]:
      - generic [ref=e438]:
        - heading "Open Digital Policies" [level=3] [ref=e439]
        - paragraph [ref=e440]: Model policy language for the digital age — built for advocates, communities, and governments who want innovation without sacrificing people or planet.
      - generic [ref=e441]:
        - heading "Policy Domains" [level=3] [ref=e442]
        - list [ref=e443]:
          - listitem [ref=e444]:
            - link "Who Pays for AI's Power Bill?" [ref=e445] [cursor=pointer]:
              - /url: /domains/data-centers/full-model/
          - listitem [ref=e446]:
            - link "Digital Services That Work for Everyone" [ref=e447] [cursor=pointer]:
              - /url: /domains/accessibility/full-model/
          - listitem [ref=e448]:
            - link "You Own It. You Should Be Able to Fix It." [ref=e449] [cursor=pointer]:
              - /url: /domains/right-to-repair/full-model/
          - listitem [ref=e450]:
            - link "Public Money, Public Code" [ref=e451] [cursor=pointer]:
              - /url: /domains/open-source-in-government/full-model/
          - listitem [ref=e452]:
            - link "AI That Works For You, Not On You" [ref=e453] [cursor=pointer]:
              - /url: /domains/ai-adoption/full-model/
          - listitem [ref=e454]:
            - link "Who's Holding the Algorithm Accountable?" [ref=e455] [cursor=pointer]:
              - /url: /domains/algorithmic-accountability/full-model/
          - listitem [ref=e456]:
            - link "A Greener Web" [ref=e457] [cursor=pointer]:
              - /url: /domains/web-sustainability/full-model/
          - listitem [ref=e458]:
            - link "Your City Is Watching You" [ref=e459] [cursor=pointer]:
              - /url: /domains/smart-cities/full-model/
          - listitem [ref=e460]:
            - link "Whose Internet Is It?" [ref=e461] [cursor=pointer]:
              - /url: /domains/digital-sovereignty/full-model/
          - listitem [ref=e462]:
            - link "Technology That's Safe for Kids" [ref=e463] [cursor=pointer]:
              - /url: /domains/children-technology/full-model/
          - listitem [ref=e464]:
            - link "Who Decides What You Can Say Online?" [ref=e465] [cursor=pointer]:
              - /url: /domains/freedom-of-expression/full-model/
          - listitem [ref=e466]:
            - link "Digital Infrastructure for Everyone" [ref=e467] [cursor=pointer]:
              - /url: /domains/digital-public-infrastructure/full-model/
      - generic [ref=e468]:
        - heading "Resources" [level=3] [ref=e469]
        - list [ref=e470]:
          - listitem [ref=e471]:
            - link "Explore all domains" [ref=e472] [cursor=pointer]:
              - /url: /domains/
          - listitem [ref=e473]:
            - link "Adoptions tracker" [ref=e474] [cursor=pointer]:
              - /url: /adoptions/
          - listitem [ref=e475]:
            - link "Search" [ref=e476] [cursor=pointer]:
              - /url: /search/
          - listitem [ref=e477]:
            - link "About this project" [ref=e478] [cursor=pointer]:
              - /url: /about/
          - listitem [ref=e479]:
            - link "How to contribute" [ref=e480] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - listitem [ref=e481]:
            - link "Glossary" [ref=e482] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/blob/main/GLOSSARY.md
      - generic [ref=e483]:
        - heading "Community" [level=3] [ref=e484]
        - list [ref=e485]:
          - listitem [ref=e486]:
            - link "GitHub repository" [ref=e487] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies
          - listitem [ref=e488]:
            - link "Open an issue" [ref=e489] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues
          - listitem [ref=e490]:
            - link "Propose a domain" [ref=e491] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=new-domain
          - listitem [ref=e492]:
            - link "Report an adoption" [ref=e493] [cursor=pointer]:
              - /url: https://github.com/mgifford/DigitalPolicies/issues/new?labels=adoption
    - generic [ref=e494]:
      - generic [ref=e495]:
        - text: All content published under
        - link "CC BY 4.0" [ref=e496] [cursor=pointer]:
          - /url: https://creativecommons.org/licenses/by/4.0/
        - text: . Not legal advice — requires adaptation by qualified legal practitioners.
      - generic [ref=e497]:
        - text: Maintained by
        - link "the ODP community" [ref=e498] [cursor=pointer]:
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