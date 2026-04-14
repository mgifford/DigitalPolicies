# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y-full.spec.ts >> light | /domains/freedom-of-expression/full-model/
- Location: tests/a11y-full.spec.ts:78:7

# Error details

```
Error: 

Axe found 1 violation(s) on /domains/freedom-of-expression/full-model/ [light]:

[CRITICAL] label: Ensure every form element has a label
    • <input type="checkbox" class="task-list-item-checkbox" disabled="disabled">
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
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\">",
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
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\">",
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
+         "html": "<input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"disabled\" checked=\"checked\">",
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
      - heading "Who Decides What You Can Say Online?" [level=1] [ref=e29]
      - paragraph [ref=e30]: Freedom of Expression & Content Governance
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
        - heading "Freedom of Expression & Content Governance — Model Policy" [level=1] [ref=e51]
        - blockquote [ref=e52]:
          - paragraph [ref=e53]:
            - strong [ref=e54]: "Status:"
            - code [ref=e55]: Draft
            - strong [ref=e56]: "Last updated:"
            - text: 2026-04-05
            - strong [ref=e57]: "Maintainers:"
            - text: Open Digital Policies community
            - strong [ref=e58]: "Related domains:"
            - link "Children & Technology" [ref=e59] [cursor=pointer]:
              - /url: ../../children-technology/full-model/
            - text: ","
            - link "Algorithmic Accountability" [ref=e60] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: ","
            - link "AI Adoption" [ref=e61] [cursor=pointer]:
              - /url: ../../ai-adoption/full-model/
            - text: ","
            - link "Digital Sovereignty" [ref=e62] [cursor=pointer]:
              - /url: ../../digital-sovereignty/full-model/
            - strong [ref=e63]: "Key sources:"
            - text: EU Digital Services Act (DSA), UN Special Rapporteur on Freedom of Expression, Santa Clara Principles, ICCPR Article 19, EU Audiovisual Media Services Directive
        - separator [ref=e64]
        - heading "Overview" [level=2] [ref=e65]
        - paragraph [ref=e66]: Online content governance is one of the most contested domains in digital policy — and one of the most consequential. The decisions made by a handful of large platforms about what speech is permitted, amplified, or suppressed shape public discourse for billions of people. Those decisions are made largely without democratic oversight, with limited transparency, subject to legal pressure from governments with divergent interests, and optimised for engagement rather than public good.
        - paragraph [ref=e67]: "Done poorly in one direction, content governance enables harm: harassment, disinformation, terrorist content, child sexual abuse material, incitement to violence against minorities, and coordinated manipulation. Done poorly in the other direction, it enables censorship: silencing journalists, human rights defenders, political dissidents, sex workers, LGBTQ+ communities, and minority groups who find that their speech is systematically removed while dominant groups face fewer restrictions."
        - paragraph [ref=e68]: This policy model does not resolve these tensions — they are genuine and involve real trade-offs between values that cannot be fully reconciled. Instead, it surfaces the options clearly, establishes the procedural requirements for legitimate content governance (transparency, consistency, accountability, appeal rights), and identifies the structural problems that procedural requirements alone cannot solve.
        - heading "The Core Tension" [level=3] [ref=e69]
        - paragraph [ref=e70]: We want digital public spaces where people can speak, organise, create, and access information freely — without those spaces being captured by harassment, disinformation, and coordinated manipulation. Both failures — too little moderation and too much — cause real harm to real people. Policy must navigate between them without pretending the tension doesn’t exist.
        - heading "Scope" [level=3] [ref=e71]
        - list [ref=e72]:
          - listitem [ref=e73]:
            - checkbox [disabled] [ref=e74]
            - text: Municipal / local government
          - listitem [ref=e75]:
            - checkbox [checked] [disabled] [ref=e76]
            - text: Regional / state / provincial government
          - listitem [ref=e77]:
            - checkbox [checked] [disabled] [ref=e78]
            - text: National government
          - listitem [ref=e79]:
            - checkbox [disabled] [ref=e80]
            - text: Public sector procurement
          - listitem [ref=e81]:
            - checkbox [checked] [disabled] [ref=e82]
            - text: Regulated online platforms (particularly large or dominant platforms)
          - listitem [ref=e83]:
            - checkbox [checked] [disabled] [ref=e84]
            - text: State-owned or publicly funded media
        - paragraph [ref=e85]:
          - strong [ref=e86]: "Important note on government speech restrictions:"
          - text: "This model is primarily about platform governance. Governments restricting speech through law face additional constitutional constraints (First Amendment in the US, Article 10 of the ECHR, ICCPR Article 19) that limit what this policy model can recommend directly. Government-imposed speech restrictions are evaluated against the three-part ICCPR test: (1) prescribed by law; (2) pursuing a legitimate aim; (3) necessary and proportionate."
        - separator [ref=e87]
        - 'heading "Pillar 1: Principles" [level=2] [ref=e88]'
        - heading "Foundational Values" [level=3] [ref=e89]
        - paragraph [ref=e90]:
          - strong [ref=e91]: 1. Freedom of Expression Is a Fundamental Right — Not an Absolute One
          - text: ICCPR Article 19 protects the right to freedom of opinion and expression, including the right to receive and impart information. ICCPR Article 20 requires states to prohibit advocacy of national, racial, or religious hatred that constitutes incitement to discrimination, hostility, or violence. These two provisions exist in tension deliberately. International human rights law does not treat freedom of expression as absolute; it treats it as a fundamental right that may be limited only to protect other fundamental rights, under strict proportionality requirements.
        - paragraph [ref=e92]:
          - strong [ref=e93]: 2. Content Moderation Is Governance, Not Neutrality
          - text: There is no neutral platform. Every decision about what content to allow, amplify, reduce, or remove is a governance decision with distributional effects. Platforms that claim neutrality are making a governance choice — the choice to apply the existing distribution of power, which tends to benefit dominant groups and harm marginalised ones. The question is not whether to make governance decisions, but by whom, under what rules, with what accountability.
        - paragraph [ref=e94]:
          - strong [ref=e95]: 3. Transparency Is the Minimum Requirement for Legitimate Governance
          - text: "Users have a right to know: what rules apply to content on the platform; how those rules are applied; why specific content was removed or restricted; and how to appeal. Without transparency, content governance is arbitrary. Transparency does not make content governance legitimate by itself — but opacity makes it illegitimate by definition."
        - paragraph [ref=e96]:
          - strong [ref=e97]: 4. Consistent Enforcement Is as Important as the Rules
          - text: Rules that are applied inconsistently — more strictly against minority languages, political dissidents, or LGBTQ+ speech than against majority speech — are not neutral, however neutrally worded. Enforcement consistency must be measured and published. Disparate enforcement against protected groups is discriminatory.
        - paragraph [ref=e98]:
          - strong [ref=e99]: 5. Meaningful Appeal Rights Are Not Optional
          - text: Users whose content is removed or accounts are restricted have a right to know why, and a right to a genuine appeal to a human decision-maker. Automated moderation at scale makes errors; appeals are the mechanism for correcting them. An appeal process that does not actually change outcomes is not a meaningful appeal.
        - paragraph [ref=e100]:
          - strong [ref=e101]: 6. Algorithmic Amplification Is Part of Content Governance
          - text: What platforms amplify is as consequential as what they remove. An algorithm that prioritises outrage-inducing content, that boosts misinformation because it generates engagement, or that systematically suppresses minority speech is engaging in content governance through amplification. This is not a neutral technical choice; it is a content governance decision with political and social effects.
        - paragraph [ref=e102]:
          - strong [ref=e103]: 7. The Global User Base Is Not Uniform
          - text: Content governance policies developed for one cultural and political context often fail when applied globally. What constitutes hate speech, defamation, or incitement varies by legal system and cultural context. Platforms serving billions of users across hundreds of legal systems cannot apply a single standard uniformly without causing harm in some of those contexts — but must maintain standards that protect human rights universally.
        - heading "Equity Considerations" [level=3] [ref=e104]
        - list [ref=e105]:
          - listitem [ref=e106]:
            - strong [ref=e107]: Minority language communities
            - text: — Content moderation systems are far better developed for English than for any other language. Harmful content in minority languages is frequently under-moderated; minority language users’ legitimate content is frequently over-moderated due to poor language detection.
          - listitem [ref=e108]:
            - strong [ref=e109]: LGBTQ+ communities
            - text: — Documented evidence across platforms shows systematic over-moderation of LGBTQ+ content, particularly content by queer women and transgender people, relative to equivalent heterosexual content. Policies must explicitly address and measure this disparity.
          - listitem [ref=e110]:
            - strong [ref=e111]: Journalists and human rights defenders
            - text: — Coordinated harassment campaigns target journalists (particularly women journalists and journalists of colour) with mass-reporting designed to trigger automated removal. Platforms must have systems to detect and resist coordinated inauthentic reporting.
          - listitem [ref=e112]:
            - strong [ref=e113]: Sex workers
            - text: — US FOSTA-SESTA (2018) created legal liability for platform hosting of content related to sex work, leading platforms to remove content that provided safety information and community for sex workers. Content moderation that is over-broad in this domain creates real safety harm.
          - listitem [ref=e114]:
            - strong [ref=e115]: Political dissidents and activists
            - text: — Governments routinely pressure platforms to remove content by dissidents, journalists, and activists. Platforms must have transparent and robust procedures for resisting unlawful government removal requests.
        - heading "Environmental Considerations" [level=3] [ref=e116]
        - paragraph [ref=e117]:
          - text: AI-powered content moderation at scale consumes significant compute resources. Platforms should include environmental cost in content moderation system design decisions, favouring energy-efficient approaches where equally effective. See
          - link "Data Centers model" [ref=e118] [cursor=pointer]:
            - /url: ../../data-centers/full-model/
          - text: and
          - link "AI Adoption model" [ref=e119] [cursor=pointer]:
            - /url: ../../ai-adoption/full-model/
          - text: .
        - separator [ref=e120]
        - 'heading "Pillar 2: Standards" [level=2] [ref=e121]'
        - heading "Mandatory Standards" [level=3] [ref=e122]
        - blockquote [ref=e123]:
          - paragraph [ref=e124]:
            - strong [ref=e125]: "Standard 1: Transparent Community Standards and Terms of Service"
            - text: "Platforms shall publish clear, accessible, and specific community standards that describe:"
          - paragraph [ref=e126]: (a) What categories of content are prohibited, with sufficient specificity that users can understand what is and is not permitted;
          - paragraph [ref=e127]: (b) What categories of content are restricted (available to some users but not others, or reduced in algorithmic distribution) and under what conditions;
          - paragraph [ref=e128]: (c) How rules are applied to different categories of content and different types of users (public figures, verified accounts, news organisations, etc.);
          - paragraph [ref=e129]: (d) The consequences of violations (removal, account suspension, permanent ban, demotion) and the criteria applied;
          - paragraph [ref=e130]: (e) The legal orders and government requests to which the platform is subject.
          - paragraph [ref=e131]: Community standards must be available in all languages in which the platform provides service. Vague prohibitions on “harmful” content without further specification are not compliant.
        - paragraph [ref=e132]:
          - emphasis [ref=e133]: "Rationale: Santa Clara Principles (2018, 2021) establish transparency as the minimum baseline for platform content governance. EU DSA Article 14 requires clear and specific terms of service. Both are minimum standards; this model’s language is consistent with DSA requirements."
        - paragraph [ref=e134]:
          - emphasis [ref=e135]:
            - text: "Reference:"
            - link "Santa Clara Principles 2.0" [ref=e136] [cursor=pointer]:
              - /url: https://santaclaraprinciples.org
            - text: ;
            - link "EU DSA Articles 14–15" [ref=e137] [cursor=pointer]:
              - /url: https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package
        - separator [ref=e138]
        - blockquote [ref=e139]:
          - paragraph [ref=e140]:
            - strong [ref=e141]: "Standard 2: Notification and Meaningful Appeal Rights"
            - text: "When a platform removes, restricts, demotes, or otherwise takes action against a user’s content or account, the platform shall:"
          - paragraph [ref=e142]: (a) Notify the user promptly, explaining which specific rule was violated and what the specific content at issue was;
          - paragraph [ref=e143]: (b) Provide the user with a meaningful opportunity to appeal the decision within [14] days of notification;
          - paragraph [ref=e144]: (c) Ensure that appeals for content removal or account suspension are reviewed by a human decision-maker with authority to reverse the decision;
          - paragraph [ref=e145]: (d) Notify the user of the appeal outcome and provide reasons;
          - paragraph [ref=e146]: (e) Complete appeal review within [30] days for content removal and [60] days for account suspension;
          - paragraph [ref=e147]: "(f) For appeals where the original decision was automated: the appeal must be reviewed by a human."
          - paragraph [ref=e148]: Users who believe their content was removed based on protected characteristics (race, religion, gender, sexual orientation, political opinion) shall have a specific mechanism to raise this concern.
        - paragraph [ref=e149]:
          - emphasis [ref=e150]: "Rationale: Santa Clara Principles Standard 3. EU DSA Article 17 requires specific statement of reasons for content moderation decisions. DSA Article 20 requires an internal complaint-handling system accessible free of charge. Meaningful human appeal is absent from most platform systems at scale — the standards here set a minimum floor."
        - separator [ref=e151]
        - blockquote [ref=e152]:
          - paragraph [ref=e153]:
            - strong [ref=e154]: "Standard 3: Transparency Reporting"
            - text: "Platforms with [1 million] or more monthly active users in the jurisdiction shall publish transparency reports at least every [six] months that include:"
          - paragraph [ref=e155]: (a) Total volume of content removed, by category of violation, with breakdown by whether removal was automated or human-reviewed;
          - paragraph [ref=e156]: (b) Error rate estimates for automated removals (based on appeal reversals) by content category;
          - paragraph [ref=e157]: (c) Number of appeals received and outcomes (upheld / overturned / pending);
          - paragraph [ref=e158]: (d) Government and law enforcement requests received, by jurisdiction, and compliance rates;
          - paragraph [ref=e159]: (e) Court orders requiring content removal or user data disclosure, by jurisdiction;
          - paragraph [ref=e160]: (f) Changes to content policies during the reporting period;
          - paragraph [ref=e161]: (g) Enforcement data disaggregated by language and, where measurable, by content category and demographic characteristics of affected users.
          - paragraph [ref=e162]: Reports shall be machine-readable and published in a standardised format enabling cross-platform comparison.
        - paragraph [ref=e163]:
          - emphasis [ref=e164]: "Rationale: Transparency reporting by platforms is voluntary at scale but provides the only available data on enforcement patterns. The DSA requires very large online platforms to publish annual transparency reports. Meta, Google, Twitter/X, and others publish voluntary transparency reports of varying quality and comparability. Standardised mandatory reporting is necessary for meaningful accountability."
        - separator [ref=e165]
        - blockquote [ref=e166]:
          - paragraph [ref=e167]:
            - strong [ref=e168]: "Standard 4: Algorithmic Transparency and Recommender System Disclosure"
            - text: "Platforms that use algorithmic recommender systems to determine what content users see shall:"
          - paragraph [ref=e169]: (a) Publish a plain-language explanation of the significant factors used by recommender systems to determine content distribution, including what signals are used and how they are weighted;
          - paragraph [ref=e170]: (b) Offer users at least one option for content feeds not based on engagement-optimised algorithmic recommendation (e.g., chronological feed, topic-based feed);
          - paragraph [ref=e171]: (c) Disclose in real-time where content has been algorithmically boosted or reduced in distribution compared to an unranked feed;
          - paragraph [ref=e172]: (d) Conduct and publish annual assessments of whether recommender systems systematically amplify or suppress content based on the political view, religion, race, gender, or sexual orientation of the content creator;
          - paragraph [ref=e173]:
            - text: (e) Apply the
            - link "Algorithmic Accountability framework" [ref=e174] [cursor=pointer]:
              - /url: ../../algorithmic-accountability/full-model/
            - text: to recommender systems used in platforms with significant public discourse impact.
        - paragraph [ref=e175]:
          - emphasis [ref=e176]: "Rationale: EU DSA Article 27 requires very large platforms to offer at least one recommender system not based on profiling. The research evidence on algorithmic amplification of harmful content (including the Facebook Files and Twitter internal research published by Elon Musk) demonstrates that recommender systems have systematic effects on public discourse that platforms have been slow to acknowledge or address."
        - separator [ref=e177]
        - blockquote [ref=e178]:
          - paragraph [ref=e179]:
            - strong [ref=e180]: "Standard 5: Government Request Transparency and Due Process"
            - text: "Platforms shall:"
          - paragraph [ref=e181]: (a) Publish all legally permissible information about government requests to remove content or restrict accounts, in their transparency reports;
          - paragraph [ref=e182]: (b) Notify users whose content is subject to a government removal request before complying, where legally permissible, so users can seek legal remedy;
          - paragraph [ref=e183]: (c) Refuse to comply with government removal requests that lack a legal basis under international human rights standards, even where such requests come with implied or explicit threats;
          - paragraph [ref=e184]: (d) Apply the Manila Principles on Intermediary Liability as a framework for evaluating government requests;
          - paragraph [ref=e185]: (e) Publish annual reports on emergency content removal requests (those outside normal legal process) by jurisdiction, and their basis.
        - paragraph [ref=e186]:
          - emphasis [ref=e187]: "Rationale: The Manila Principles on Intermediary Liability (2015) provide a human rights framework for evaluating government content removal requests. Platforms regularly receive unlawful requests from governments; the standards here establish a floor for principled resistance and transparency."
        - paragraph [ref=e188]:
          - emphasis [ref=e189]:
            - text: "Reference:"
            - link "Manila Principles on Intermediary Liability" [ref=e190] [cursor=pointer]:
              - /url: https://manilaprinciples.org
        - separator [ref=e191]
        - heading "Aspirational Standards" [level=3] [ref=e192]
        - blockquote [ref=e193]:
          - paragraph [ref=e194]:
            - strong [ref=e195]: "Aspirational Standard 1: Independent Oversight Body"
            - text: Very large platforms should submit to independent oversight of their content governance practices — through a self-regulatory body, an independent audit body, or a statutory regulator — with authority to review systemic enforcement data and require remediation. The EU DSA’s Very Large Online Platform (VLOP) oversight model provides the most developed existing framework.
        - blockquote [ref=e196]:
          - paragraph [ref=e197]:
            - strong [ref=e198]: "Aspirational Standard 2: Cross-Platform Interoperability"
            - text: Dominant platforms should provide API access and interoperability to enable users to access content across platform boundaries, reducing dependency on any single platform’s governance decisions. The EU Digital Markets Act (DMA) establishes interoperability requirements for gatekeepers. Interoperability is a structural remedy for platform dominance that complements content governance requirements.
        - blockquote [ref=e199]:
          - paragraph [ref=e200]:
            - strong [ref=e201]: "Aspirational Standard 3: Community Governance for Platform Rules"
            - text: Platforms should explore genuine community participation in developing and revising content rules — going beyond advisory processes to mechanisms where affected communities have real input into the rules that govern their speech. Wikipedia’s community governance model, despite its limitations, demonstrates that large-scale community rule-making is possible.
        - separator [ref=e202]
        - heading "Standards Cross-Reference" [level=3] [ref=e203]
        - table [ref=e204]:
          - rowgroup [ref=e205]:
            - row "Standard Body Notes" [ref=e206]:
              - columnheader "Standard" [ref=e207]
              - columnheader "Body" [ref=e208]
              - columnheader "Notes" [ref=e209]
          - rowgroup [ref=e210]:
            - row "EU Digital Services Act (DSA) EU 2022/2065; comprehensive platform governance framework" [ref=e211]:
              - cell "EU Digital Services Act (DSA)" [ref=e212]
              - cell "EU" [ref=e213]
              - cell "2022/2065; comprehensive platform governance framework" [ref=e214]
            - row "ICCPR Article 19 UN Freedom of expression; three-part test for restrictions" [ref=e215]:
              - cell "ICCPR Article 19" [ref=e216]
              - cell "UN" [ref=e217]
              - cell "Freedom of expression; three-part test for restrictions" [ref=e218]
            - row "ICCPR Article 20 UN Prohibition on incitement to hatred" [ref=e219]:
              - cell "ICCPR Article 20" [ref=e220]
              - cell "UN" [ref=e221]
              - cell "Prohibition on incitement to hatred" [ref=e222]
            - row "Santa Clara Principles 2.0 Multi-stakeholder Transparency, notice, appeal standards for content moderation" [ref=e223]:
              - cell "Santa Clara Principles 2.0" [ref=e224]
              - cell "Multi-stakeholder" [ref=e225]
              - cell "Transparency, notice, appeal standards for content moderation" [ref=e226]
            - row "Manila Principles Multi-stakeholder Intermediary liability; government request evaluation" [ref=e227]:
              - cell "Manila Principles" [ref=e228]
              - cell "Multi-stakeholder" [ref=e229]
              - cell "Intermediary liability; government request evaluation" [ref=e230]
            - row "EU Audiovisual Media Services Directive (AVMSD) EU 2018; video sharing platforms; minor protection; hate speech" [ref=e231]:
              - cell "EU Audiovisual Media Services Directive (AVMSD)" [ref=e232]
              - cell "EU" [ref=e233]
              - cell "2018; video sharing platforms; minor protection; hate speech" [ref=e234]
            - row "UN Special Rapporteur on Freedom of Expression UN HRC Annual reports; platform governance guidance" [ref=e235]:
              - cell "UN Special Rapporteur on Freedom of Expression" [ref=e236]
              - cell "UN HRC" [ref=e237]
              - cell "Annual reports; platform governance guidance" [ref=e238]
        - separator [ref=e239]
        - 'heading "Pillar 3: Implementation" [level=2] [ref=e240]'
        - heading "Platform Categorisation" [level=3] [ref=e241]
        - blockquote [ref=e242]:
          - paragraph [ref=e243]:
            - strong [ref=e244]: Tiered Obligations by Platform Size
            - text: "Content governance obligations should be calibrated to platform size and systemic risk — recognising that small platforms cannot bear the same compliance burden as platforms with a billion users, while very large platforms have far greater capacity to cause systemic harm. A minimum three-tier approach:"
          - paragraph [ref=e245]:
            - strong [ref=e246]: "Tier 1 (micro platforms: under 100,000 monthly active users):"
            - text: Basic terms of service; complaint mechanism; no detailed reporting required.
          - paragraph [ref=e247]:
            - strong [ref=e248]: "Tier 2 (medium platforms: 100,000–10 million monthly active users):"
            - text: Full Standards 1–3; annual transparency reporting.
          - paragraph [ref=e249]:
            - strong [ref=e250]: "Tier 3 (large platforms: over 10 million monthly active users):"
            - text: Full Standards 1–5; semi-annual transparency reporting; algorithmic audit; independent oversight.
        - heading "Transition and Timeline" [level=3] [ref=e251]
        - table [ref=e252]:
          - rowgroup [ref=e253]:
            - row "Milestone Timeframe from adoption" [ref=e254]:
              - columnheader "Milestone" [ref=e255]
              - columnheader "Timeframe from adoption" [ref=e256]
          - rowgroup [ref=e257]:
            - row "Transparent community standards published by all Tier 2–3 platforms 6 months" [ref=e258]:
              - cell "Transparent community standards published by all Tier 2–3 platforms" [ref=e259]
              - cell "6 months" [ref=e260]
            - row "Notification and appeal requirements operational 12 months" [ref=e261]:
              - cell "Notification and appeal requirements operational" [ref=e262]
              - cell "12 months" [ref=e263]
            - row "Standardised transparency reports published 12 months" [ref=e264]:
              - cell "Standardised transparency reports published" [ref=e265]
              - cell "12 months" [ref=e266]
            - row "Algorithmic disclosure requirements operational 18 months" [ref=e267]:
              - cell "Algorithmic disclosure requirements operational" [ref=e268]
              - cell "18 months" [ref=e269]
            - row "First independent audits of very large platforms 24 months" [ref=e270]:
              - cell "First independent audits of very large platforms" [ref=e271]
              - cell "24 months" [ref=e272]
        - heading "Enforcement" [level=3] [ref=e273]
        - blockquote [ref=e274]:
          - paragraph [ref=e275]:
            - strong [ref=e276]: Enforcement Clause
            - text: "The designated regulatory body may: (a) require platforms to produce transparency reports and enforcement data; (b) conduct audits of content governance systems; (c) require remediation of systemic enforcement disparities; (d) impose administrative penalties for failure to provide appeal mechanisms or publish transparency reports; (e) receive complaints from users, civil society, and journalists. Penalties for very large platforms shall be proportionate to global turnover, not domestic revenue, to deter regulatory arbitrage."
        - separator [ref=e277]
        - 'heading "Pillar 4: Governance" [level=2] [ref=e278]'
        - heading "Oversight Body" [level=3] [ref=e279]
        - blockquote [ref=e280]:
          - paragraph [ref=e281]:
            - strong [ref=e282]: Content Governance Regulator
            - text: "The designated body shall have: expertise in free expression, human rights, platform technology, and content moderation; an independent board not subject to government direction on individual content decisions; authority to conduct confidential access audits of platform moderation systems (beyond published transparency reports); and power to require transparency reporting in standardised formats. The body shall explicitly not have authority to require removal of specific content — its mandate is procedural and systemic, not editorial."
        - heading "Community Representation" [level=3] [ref=e283]
        - blockquote [ref=e284]:
          - paragraph [ref=e285]:
            - strong [ref=e286]: Multi-Stakeholder Advisory Council
            - text: "The oversight body shall be advised by a multi-stakeholder council including: civil liberties and press freedom organisations; academic researchers in platform governance and computational social science; representatives of marginalised communities subject to both hate speech and over-moderation; legal experts in international human rights law; and platform representatives (in a non-voting capacity). The council shall hold public meetings and publish meeting records."
        - heading "Audit and Review" [level=3] [ref=e287]
        - blockquote [ref=e288]:
          - paragraph [ref=e289]:
            - strong [ref=e290]: Annual Systemic Risk Report
            - text: "The regulatory body shall publish an annual systemic risk report assessing: the state of content governance across regulated platforms; systemic enforcement disparities identified through transparency reports and audits; government content removal request trends; and specific harms (hate speech, disinformation, harassment) not adequately addressed by existing content governance frameworks."
        - blockquote [ref=e291]:
          - paragraph [ref=e292]:
            - strong [ref=e293]: Policy Review
            - text: This policy shall be reviewed every [two] years, given the rapid evolution of both platform technology and the harms it mediates. Reviews must include public consultation and direct engagement with communities experiencing both over-moderation and under-moderation.
        - separator [ref=e294]
        - heading "Real-World Examples" [level=2] [ref=e295]
        - heading "European Union — Digital Services Act (DSA)" [level=3] [ref=e296]
        - paragraph [ref=e297]:
          - strong [ref=e298]: "In force:"
          - text: February 2024 (for all platforms); August 2023 (for Very Large Online Platforms)
          - strong [ref=e299]: "Regulator:"
          - text: European Commission (VLOPs); national Digital Services Coordinators
          - strong [ref=e300]: "Link:"
          - text: https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package
          - strong [ref=e301]: "Summary:"
          - text: "The most comprehensive statutory platform governance framework globally. Requires all platforms to: have terms of service; provide notice and appeal for content removal; cooperate with trusted flaggers; publish transparency reports. Very large platforms (over 45 million EU users) additionally must: publish recommender system explanations; offer non-profiling-based feeds; conduct annual systemic risk assessments; submit to independent audits; share data with researchers. The Commission has opened formal proceedings against X (Twitter), TikTok, and Meta. Community critique: risk assessment methodology is not standardised; the largest platforms have significant capacity to manage regulatory relationships; enforcement against non-EU companies requires cooperation."
        - separator [ref=e302]
        - heading "Germany — Network Enforcement Act (NetzDG)" [level=3] [ref=e303]
        - paragraph [ref=e304]:
          - strong [ref=e305]: "Enacted:"
          - text: 2017 (amended 2020, 2021)
          - strong [ref=e306]: "Regulator:"
          - text: Federal Office of Justice
          - strong [ref=e307]: "Link:"
          - text: https://www.gesetze-im-internet.de/netzdg/BJNR335210017.html
          - strong [ref=e308]: "Summary:"
          - text: "Requires platforms with over 2 million registered users in Germany to remove “manifestly unlawful” content within 24 hours of a valid complaint, and all unlawful content within 7 days. Significant fines for systematic failure. NetzDG was the first national platform regulation of this type globally and has been widely debated. Community critique: the 24-hour deadline incentivises over-removal to avoid fines; the law pushes platforms toward more conservative moderation of borderline content; it does not address algorithmic amplification; and it has been cited by governments in Ethiopia, Russia, and Singapore as a model for legislation that critics say enables censorship."
        - separator [ref=e309]
        - heading "United States — Section 230 (Communications Decency Act)" [level=3] [ref=e310]
        - paragraph [ref=e311]:
          - strong [ref=e312]: "Enacted:"
          - text: "1996"
          - strong [ref=e313]: "Link:"
          - text: https://www.law.cornell.edu/uscode/text/47/230
          - strong [ref=e314]: "Summary:"
          - text: Section 230 provides immunity to online platforms for third-party content and for good-faith moderation decisions. The immunity has enabled the growth of internet platforms by removing legal liability for hosting user content, and has enabled platforms to moderate without legal risk. It has also been criticised for insulating platforms from accountability for harms their systems cause. Section 230 reform is among the most contested digital policy debates in the US — proposals range from narrowing immunity to full repeal. The current text, enabling both platform growth and moderation flexibility, remains the operative US framework. It is not a model to be exported — it is context-specific to the US constitutional framework — but it illustrates how intermediary liability shapes platform behaviour.
        - separator [ref=e315]
        - heading "Council of Europe — Recommendation on Content Moderation" [level=3] [ref=e316]
        - paragraph [ref=e317]:
          - strong [ref=e318]: "Published:"
          - text: 2022 (CM/Rec(2022)16)
          - strong [ref=e319]: "Link:"
          - text: https://www.coe.int/en/web/freedom-expression/recommendation-cm-rec-2022-16
          - strong [ref=e320]: "Summary:"
          - text: The Council of Europe’s Recommendation on content moderation in online environments sets out human rights-compliant principles for platform content governance, drawing on Article 10 ECHR and Article 8 (privacy). It explicitly addresses the need for transparency, appeal rights, independent oversight, and the human rights impact of algorithmic systems. Unlike the DSA, the Recommendation is non-binding — it provides normative guidance rather than enforceable standards. It is notable for its explicit integration of the human rights framework with platform governance requirements.
        - separator [ref=e321]
        - heading "Meta — Oversight Board" [level=3] [ref=e322]
        - paragraph [ref=e323]:
          - strong [ref=e324]: "Established:"
          - text: "2020"
          - strong [ref=e325]: "Link:"
          - text: https://www.oversightboard.com
          - strong [ref=e326]: "Summary:"
          - text: "Meta’s Oversight Board is an independent body with authority to make binding decisions on individual content removal cases referred to it by users or Meta. Members are appointed through an independent process. The Board has overturned Meta decisions, including its initial decision to suspend Donald Trump’s accounts. Community critique: the Board only reviews a tiny fraction of moderation decisions; it cannot address systemic algorithmic amplification; it was established by Meta and its funding comes from Meta; and its authority is limited to the cases it chooses to hear. Supporters argue it demonstrates that independent oversight of individual content decisions is operationally possible. It is a prototype, not a solution."
        - separator [ref=e327]
        - heading "Gaps and Known Weaknesses" [level=2] [ref=e328]
        - list [ref=e329]:
          - listitem [ref=e330]:
            - strong [ref=e331]: Disinformation and coordinated inauthentic behaviour
            - text: — This model focuses on content that is unlawful or violates platform rules. Disinformation — false content that is not unlawful — is addressed incompletely. The DSA’s systemic risk assessment requirements partially address this; a fuller treatment is needed.
          - listitem [ref=e332]:
            - strong [ref=e333]: End-to-end encrypted communications
            - text: — Content moderation frameworks are designed for public speech. Private encrypted communications are largely outside their reach. The tension between privacy (which end-to-end encryption protects) and safety (which it may hinder) in the context of child sexual abuse material and terrorist content is the most contested active debate in content governance.
          - listitem [ref=e334]:
            - strong [ref=e335]: AI-generated content
            - text: — Large-scale production of synthetic content (text, images, video) is making content volume-based governance strategies increasingly unscalable. Provenance standards (such as the C2PA content credentials standard) are emerging but not yet widely implemented.
          - listitem [ref=e336]:
            - strong [ref=e337]: Fragmentation risk
            - text: — Different national content governance requirements risk fragmenting the global internet into national segments with different speech rules, enabling authoritarian governments to use “content governance” as cover for censorship while claiming compliance with a global norm.
          - listitem [ref=e338]:
            - strong [ref=e339]: Small platform capacity
            - text: — Content governance requirements designed for large platforms impose disproportionate compliance costs on small platforms with limited resources. Tiered approaches reduce but do not eliminate this problem.
        - separator [ref=e340]
        - heading "Cross-Domain Dependencies" [level=2] [ref=e341]
        - table [ref=e342]:
          - rowgroup [ref=e343]:
            - row "Related Domain Relationship" [ref=e344]:
              - columnheader "Related Domain" [ref=e345]
              - columnheader "Relationship" [ref=e346]
          - rowgroup [ref=e347]:
            - row "Children & Technology Content governance for minors requires heightened protections; age differentiation in content rules" [ref=e348]:
              - cell "Children & Technology" [ref=e349]:
                - link "Children & Technology" [ref=e350] [cursor=pointer]:
                  - /url: ../../children-technology/full-model/
              - cell "Content governance for minors requires heightened protections; age differentiation in content rules" [ref=e351]
            - row "Algorithmic Accountability Recommender systems are content governance mechanisms and require algorithmic accountability" [ref=e352]:
              - cell "Algorithmic Accountability" [ref=e353]:
                - link "Algorithmic Accountability" [ref=e354] [cursor=pointer]:
                  - /url: ../../algorithmic-accountability/full-model/
              - cell "Recommender systems are content governance mechanisms and require algorithmic accountability" [ref=e355]
            - row "AI Adoption AI-powered content moderation must meet AI adoption governance standards; AI-generated content requires provenance standards" [ref=e356]:
              - cell "AI Adoption" [ref=e357]:
                - link "AI Adoption" [ref=e358] [cursor=pointer]:
                  - /url: ../../ai-adoption/full-model/
              - cell "AI-powered content moderation must meet AI adoption governance standards; AI-generated content requires provenance standards" [ref=e359]
            - row "Digital Sovereignty Platform concentration creates sovereignty risks; exit rights and interoperability are structural remedies" [ref=e360]:
              - cell "Digital Sovereignty" [ref=e361]:
                - link "Digital Sovereignty" [ref=e362] [cursor=pointer]:
                  - /url: ../../digital-sovereignty/full-model/
              - cell "Platform concentration creates sovereignty risks; exit rights and interoperability are structural remedies" [ref=e363]
        - separator [ref=e364]
        - heading "Glossary" [level=2] [ref=e365]
        - paragraph [ref=e366]:
          - strong [ref=e367]: "Content Moderation:"
          - text: The practice of reviewing, removing, restricting, or labelling user-generated content on platforms according to community standards and applicable law.
        - paragraph [ref=e368]:
          - strong [ref=e369]: "Automated Content Moderation:"
          - text: Use of machine learning systems to detect and act on content at scale, without human review of individual decisions. Subject to significant error rates and systematic biases.
        - paragraph [ref=e370]:
          - strong [ref=e371]: "Trusted Flaggers:"
          - text: Entities designated by platforms or regulators as having expertise in identifying specific categories of harmful content (e.g., hate speech, terrorist content, child sexual abuse material) and whose reports are given priority review.
        - paragraph [ref=e372]:
          - strong [ref=e373]: "Very Large Online Platform (VLOP):"
          - text: Under the EU DSA, a platform or search engine with 45 million or more average monthly active users in the EU. Subject to the most stringent DSA obligations.
        - paragraph [ref=e374]:
          - strong [ref=e375]: "Section 230:"
          - text: Section 230 of the US Communications Decency Act (1996). Provides immunity to online platforms for third-party content and for good-faith moderation. The legal foundation of the modern internet platform ecosystem.
        - paragraph [ref=e376]:
          - strong [ref=e377]: "ICCPR Article 19:"
          - text: "International Covenant on Civil and Political Rights, Article 19. Protects freedom of expression. Permits restrictions that are: (1) provided by law; (2) pursuing a legitimate aim; (3) necessary and proportionate."
        - paragraph [ref=e378]:
          - strong [ref=e379]: "Recommender System:"
          - text: An algorithmic system that selects, ranks, and serves content to users based on signals including their past behaviour, content characteristics, and platform objectives. The primary mechanism through which platforms determine what speech is amplified.
        - paragraph [ref=e380]:
          - strong [ref=e381]: "Dark Pattern:"
          - text: Design choices that manipulate users into actions against their interests. In content governance, includes designs that make reporting difficult, that hide appeal mechanisms, or that make it harder to find accurate information.
        - separator [ref=e382]
        - heading "Contributing to This Policy Model" [level=2] [ref=e383]
        - paragraph [ref=e384]: "This is among the most contested domains in digital policy. This model tries to surface the genuine tensions honestly — it is not a final answer. Priority contribution needs:"
        - list [ref=e385]:
          - listitem [ref=e386]:
            - strong [ref=e387]: Disinformation governance
            - text: — model language for addressing coordinated disinformation without enabling censorship
          - listitem [ref=e388]:
            - strong [ref=e389]: AI-generated content provenance
            - text: — policy framework for synthetic content labelling and authentication
          - listitem [ref=e390]:
            - strong [ref=e391]: Global South examples
            - text: — content governance from African, Asian, and Latin American contexts where platform governance intersects with political repression
          - listitem [ref=e392]:
            - strong [ref=e393]: Encrypted messaging
            - text: — model language on the limits of content governance in end-to-end encrypted environments
          - listitem [ref=e394]:
            - strong [ref=e395]: Platform interoperability
            - text: — model language drawing on DMA experience with gatekeeper interoperability requirements
        - paragraph [ref=e396]:
          - text: Open an
          - link "Issue" [ref=e397] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/issues
          - text: to propose changes or additions. See
          - link "CONTRIBUTING.md" [ref=e398] [cursor=pointer]:
            - /url: https://github.com/mgifford/DigitalPolicies/blob/main/CONTRIBUTING.md
          - text: for the contribution process.
        - paragraph [ref=e399]: All substantive changes go through a minimum 14-day public comment period before merging.
        - separator [ref=e400]
        - heading "Changelog" [level=2] [ref=e401]
        - table [ref=e402]:
          - rowgroup [ref=e403]:
            - row "Version Date Summary of changes" [ref=e404]:
              - columnheader "Version" [ref=e405]
              - columnheader "Date" [ref=e406]
              - columnheader "Summary of changes" [ref=e407]
          - rowgroup [ref=e408]:
            - row "0.1 2026-04-05 Initial draft — four pillars, real-world examples from EU, Germany, US, Council of Europe, Meta Oversight Board" [ref=e409]:
              - cell "0.1" [ref=e410]
              - cell "2026-04-05" [ref=e411]
              - cell "Initial draft — four pillars, real-world examples from EU, Germany, US, Council of Europe, Meta Oversight Board" [ref=e412]
        - separator [ref=e413]
        - paragraph [ref=e414]:
          - emphasis [ref=e415]: This policy model is provided for educational and advocacy purposes. It requires adaptation by qualified legal practitioners before formal adoption. It is not legal advice.
      - link "✏️ Edit this policy on GitHub" [ref=e416] [cursor=pointer]:
        - /url: https://github.com/mgifford/DigitalPolicies/edit/main/_policies/freedom-of-expression/full-model.md
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