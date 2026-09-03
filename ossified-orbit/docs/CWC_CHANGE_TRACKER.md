# Christian Women Community — Change Tracker & Release Roadmap

**Last Updated:** 3 September 2026
**Document owner:** CWC project team

> **Primary living tracker:** maintain this Markdown file in VS Code and Git. The accompanying [Word document](./CWC%20Website%20%26%20Bible%20Hub%20-%20Change%20Tracker%20and%20Release%20Roadmap.docx) is retained as an archival snapshot/reference, not the working master.

## Production Baseline

| Baseline item | Current state |
|---|---|
| Live site | `christianwomencommunity.org/bible` |
| Production branch / commit | `main` at `bc990ac` |
| Release reconciliation | `a87eaf5` |
| Release state | Live. Release freeze recommended while real-device PWA/offline QA is completed. |
| Branding | Approved official CWC logo is live across the site, metadata, favicon, manifest, and PWA icons. |
| Founder section | Founder portrait and corrected layout live; approved bold emphasis: “It was to build a home!” |
| Resources | Resources and homepage Devotionals entry points lead to `/bible/devotionals`. |
| Devotionals | YEAR365, HS90, and SG180 are live; selections and fingerprints are frozen. |
| Bible Hub | Core routes, including Genesis 1, are live. |
| PWA & Offline Bible | Service worker, manifest icons, offline handler, and generated Bible offline package are live. Cache key: `cwc-bible-hub-v7`. |
| Offline package | 1,266 routes / 25 built assets (1,291 unique resources) in the current offline manifest. |
| Release QA passed | `npm run check`: 0 errors, warnings, or hints; production build passed; 390px mobile card layout has no horizontal overflow. |

## How to Use This Tracker

One request = one backlog ID. Add the request before implementation; move it only when its acceptance criteria and QA record are clear. Record decisions that affect future work in the Decision Log before implementation.

## Sprint 6 Audit Record & Implementation Order

**Primary living tracker:** this Markdown file is the working master in this repository. `CWC Website & Bible Hub - Change Tracker and Release Roadmap.docx` remains an archival/reference copy only.

**Completed audit (31 August 2026):** the `feature/bible-hub` checkout at `bc990ac` was reviewed for empty files/folders, placeholder scaffolding, generated items, and likely orphaned routes. No audited file or folder was deleted or changed. The audit found 12 zero-byte documentation files, plus candidate cleanup items including unused design/component stubs, backup/prototype routes, `global.backup.css`, and `src.zip`; all require a separately approved, reference-verified cleanup scope. The frozen YEAR365, HS90, and SG180 data and active PWA/offline chain are explicitly out of scope for cleanup.

**Approved implementation order:**

1. MOB-002 — portrait-mobile Join modal/form.
2. BIB-003 and WEB-004 — shared dark-mode contrast.
3. MKT-001 — Marketplace CTA visibility.
4. PWA-004 — offline Bible progress/performance UX.
5. OPS-001 — email operations, with authorised provider access.
6. BRD-001 — Bible Hub naming and legal clearance.
7. Separately approved cleanup of confirmed unused files/routes.

## BRD-001 — Name Discovery Screen (1 September 2026)

**Scope and status:** discovery only; no product, source, metadata, PWA, route, documentation-history, production, or app-listing rename was made. This is a preliminary relative-risk screen, **not legal clearance**. `CWC` is not treated as independently distinctive: current public Christian uses include [Christian Women Connection](https://christianwomenconnection.org/), [Christian Worship Center](https://www.christianworshipcenter.com/reading-plan), [Christ Wesleyan Church](https://www.bible.com/events/49612922), and [California Worship Center](https://www.caliworship.com/our-story). `Bible` and `Scripture` are descriptive/generic for this product category.

### Candidate screen

| Candidate | Relative screen risk | Brand / expansion fit | Store-title fit | Evidence-based strengths and cautions |
|---|---|---|---|---|
| **CWC Bible** | High | Clear but weakest distinctiveness; CWC ambiguity remains. | 9 characters; fits. | Directly states the category, but both elements are highly descriptive/commonly used. Search results chiefly showed unrelated CWC churches/Bible programmes rather than an exact product; that is not clearance. |
| **CWC Bible Sanctuary** | Medium | Warm, spiritually meaningful and accommodates reading, study, devotionals, prayer and community. | 19 characters; fits. | Adds a differentiating word and conveys sacred refuge. “Sanctuary” is nevertheless active in Christian-app/ministry use, including [Sanctuary](https://www.sanctuaryapp.us/) and [MyBibleLens](https://mybiblelens.us/); “Bible Sanctuary” can also sound like a church/building/ministry rather than a reading/study product. |
| **CWC Scripture Centre** | Medium | Broad enough for study/devotional/community; UK spelling fits the initial market. | 20 characters; fits. | “Scripture” slightly broadens the concept beyond a reader, but is still descriptive; Centre/Center creates spelling variants and may feel institutional. No exact combined result was surfaced in the public web/app-store-index search; direct register verification is still required. |
| **CWC Bible Centre** | Medium-high | Clear but less ownable and less contemporary as a digital product name. | 16 characters; fits. | “Centre/Center” is generic/institutional and requires both spellings/word-order searches. No exact combined result was surfaced in the public web/app-store-index search; not clearance. |

**Preliminary recommendation:** use **CWC Bible Sanctuary** as the first-choice subject to professional clearance, with **CWC Scripture Centre** as the backup. The former has the strongest balance of memorability, spiritual meaning and room to grow beyond Bible reading; its “church/building” ambiguity should be resolved in product copy (for example, a subtitle that plainly says Bible reading, study and devotionals). The latter is clearer as a resource destination but less memorable and has Centre/Center variation. Do not select **CWC Bible** without a much stronger house-mark presentation, and do not select **CWC Bible Centre** ahead of the two above.

**Related variant considered, not selected:** `Donna Virtuosa Bible Sanctuary` is exactly 30 characters and would reduce CWC acronym ambiguity, but a public search surfaced an unrelated registered Brazilian beauty mark, [DONNA Virtuosa](https://marcas.app/marcas/924359080/donna-virtuosa-924359080/). Its territories/classes and relevance must be checked by counsel; do not adopt it on this screen alone.

### Evidence log and limits

| Date | Source / terms screened | Result / use | Limitation |
|---|---|---|---|
| 1 Sep 2026 | [UK IPO trade-mark search](https://www.gov.uk/search-for-trademark): exact candidates; `CWC`; `Bible Sanctuary`; `Scripture Centre/Center`; `Bible Centre/Center`; word-order and phonetic variants. | GOV.UK confirms keyword/phrase searching is the correct way to check similar UK marks and the UK journal covers recent accepted UK/UK-designated international applications. Relevant likely classes for a professional search include 9 (downloadable software), 42 (SaaS), 41 (education/religious training/content) and possibly 45 (religious/community services). | The interactive register results could not be independently exported in this environment; this log records the required direct-search set, not a conclusion that no marks exist. Counsel must inspect live results, status, owner, specification and similarity. |
| 1 Sep 2026 | [WIPO Global Brand Database](https://www.wipo.int/en/web/global-brand-database): same exact, close, Centre/Center, word-order and `CWC` terms. | WIPO states the database searches Madrid and participating national/regional collections by keyword, name and goods/services. | WIPO expressly says national/regional registers should also be searched and a trade-mark attorney consulted; no-result indication would not establish availability. |
| 1 Sep 2026 | Public Apple App Store / Google Play screens and indexed searches: each exact candidate plus `Bible Sanctuary`, `Scripture Centre/Center`, `Bible Centre/Center`, `CWC Bible`. | No exact candidate listing was surfaced in public indexed results. Strongest background signals: an active cross-platform Christian product called [Sanctuary](https://www.sanctuaryapp.us/), [MyBibleLens’ “Sanctuary App”](https://mybiblelens.us/), and the Google Play Bible app [Bíblia mulher virtuosa](https://play.google.com/store/apps/details?id=biblia.mulher.virtuosa). | Store search is regional, dynamic and not a trade-mark register; repeat manually in UK, US and intended launch territories immediately before submission. |
| 1 Sep 2026 | General web/domain/common-law searches: all exact candidates, close variants and `Donna Virtuosa`. | No exact candidate product/organisation was surfaced. CWC is heavily used by unrelated Christian organisations; `Sanctuary` is crowded religious-app/ministry language. | Search-engine results do not establish domain availability, company-name availability, unregistered rights or clearance. Perform UK Companies House/domain and counsel-led common-law checks. |
| 1 Sep 2026 | [Apple product-page guidance](https://developer.apple.com/app-store/product-page/) and [Google Play metadata policy](https://support.google.com/googleplay/android-developer/answer/9898842?hl=en). | Both stores limit an app title to 30 characters and call for distinctive, accurate, non-misleading metadata. All four candidates fit; Apple also advises avoiding names too similar to existing apps. | These are title/policy constraints, not name availability or approval. |

### BRD-001 — Final pre-implementation name-verification screen (1 September 2026)

**Executive screening recommendation: AMBER — CAUTION.** `CWC Bible Sanctuary` remains a viable **provisional** candidate, but should proceed only to a professional/filing check—not implementation—because `Sanctuary` is materially crowded in the same Christian digital-formation/Bible-study space. No exact combined mark, app title, company, or active website was surfaced by the public searches available in this environment; that is an absence of a surfaced result, **not** a clearance result. The full name is more distinctive than `CWC Bible` but remains composed of an acronym used by many unrelated Christian organisations, a descriptive category word, and a common religious term. A clearance professional should determine whether any live rights create objection, opposition, passing-off, or store-confusion risk.

**Scope guardrail:** this is research and documentation only. No visible or internal rename, route, manifest, PWA/cache/storage change, devotional change, merge, deployment, or domain/handle registration was made. `CWC Bible Sanctuary remains provisional. Production rename is not authorised until the final naming decision is approved.`

#### Search record (screen date: 1 September 2026)

| Area | Queries / method completed | Screen result | Important limit / required next action |
|---|---|---|---|
| UK IPO | Official [IPO keyword/phrase search](https://www.gov.uk/search-for-trademark) was reached. Required live-register set recorded: `CWC Bible Sanctuary`, `Bible Sanctuary`, `CWC Sanctuary`, `Christian Women Community Bible Sanctuary`, `Sanctuary Bible`, `CWC Bible`, `CWC Scripture Sanctuary`; plus `Bible Sanctuary CWC`, `BibleSanctuary`, `Bible-Sanctuary`, `Sanctuary Bible`, `CWC BibleSanctuary`, `CWC Scripture Centre/Center`, phonetic and conceptual variants. | GOV.UK confirms this is the correct official route to identify similar UK marks and owners. The interactive result pages could not be returned/exported in this environment, so no owner, number, status, date, class or specification can responsibly be asserted from them. | A UK trade-mark professional must run and retain live exact/near/phonetic searches, including UK designations of international registrations, then assess the actual specifications—not merely titles—against the intended services. Check accepted marks in the [IPO journal](https://www.gov.uk/search-for-trademark) immediately before filing. |
| WIPO / Madrid | Reached [WIPO Global Brand Database](https://www.wipo.int/en/web/global-brand-database) and [Madrid search guidance](https://www.wipo.int/en/web/madrid-system/how_to/search/index). Planned search set: exact terms above; word-stem `sanctuar*`; `bible` proximity combinations; phonetic/visual/conceptual variants; filters for UK, US, EU/EUTM and target Madrid designations. | WIPO says the database supports keyword/name/goods-and-services/image searches and contains Madrid plus participating national/regional collections. Its interactive search was CAPTCHA-gated here, so no result list was obtained. | WIPO itself says that Global Brand Database results may be incomplete and national/regional registers also need checking. Counsel should run the searches manually and use Madrid Monitor for relevant international records; no-result status would not be clearance. |
| Apple App Store (UK and US public screen) | Fresh public/indexed searches: `CWC Bible Sanctuary`, `Bible Sanctuary`, `Sanctuary Bible`, `Bible Sanctuary App`, `CWC Bible`, `CWC Sanctuary`, and close Christian/Bible/devotional terms. | No exact `CWC Bible Sanctuary` title was surfaced. However active `Sanctuary` products serve churches and believers with Scripture, prayer, devotionals, reflection and Bible-study functions: [Sanctuary](https://www.sanctuaryapp.us/) and [Sanctuary AI Bible Study](https://joinsanctuary.com/ai-bible-study). This is a meaningful similarity signal, not proof of legal conflict. Apple requires a unique name and accurate metadata; `CWC Bible Sanctuary` is 19 characters, within its 30-character title limit. | Repeat hands-on UK and US App Store searches just before submission, recording title, subtitle, developer and category results. Search exact/near variants and confirm availability in App Store Connect; stores are not trademark registers. |
| Google Play | Fresh public/indexed searches: same terms and close Christian/Bible/devotional terms. Official [Play setup guidance](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en) checked. | No exact combined result was surfaced through the available public/indexed screen. The same `Sanctuary` digital-product signal affects discoverability/confusion analysis. Google permits a 30-character app name; 19 characters fits, and Google prohibits repetitive/irrelevant keyword use. | Repeat manual UK/US Play searches before listing; record exact titles, developers, package names and categories. It is a market/discoverability screen, not clearance. |
| Christian product / ministry use | General web screening for the required exact and close terms. | `Bible Sanctuary` is already used as the title/identity of [BibleSanctuary.org](https://www.biblesanctuary.org/), a Bible-focused ministry/resource. `Sanctuary Bible Church` is used by active churches in California and Alaska, and `Sanctuary Bible Institute` is active as a church programme. `Sanctuary Bible Study` is also descriptive programme wording. These results chiefly concern ministries/churches or descriptive studies rather than the exact CWC candidate, but they demonstrate that the components are crowded. | Counsel should assess any unregistered/common-law rights in target territories, especially where digital content, religious education, apps, and subscriptions overlap. |
| Companies / business names | Official [Companies House register](https://find-and-update.company-information.service.gov.uk/) and its public search route identified; searches required for `CWC Bible Sanctuary`, `Bible Sanctuary`, `Sanctuary Bible`, `CWC Sanctuary`, `CWC Scripture Centre/Center`. | The dynamic result interface did not return searchable records in this environment; no relevant active UK company can be confirmed or excluded. Companies House confirms its service searches company names/numbers/officers. | Perform and retain a live Companies House search and relevant charity/business-name checks. Company-name availability neither confers trade-mark rights nor proves trade-mark availability. |
| Domains / digital identity | Checked DNS A-record signals for `cwcbiblesanctuary` and `cwc-bible-sanctuary` in `.com`, `.org`, `.co.uk`; no A record returned for the six queried labels. Exact-string public web searches also surfaced no confirmed active CWC-branded site. | No A record is only a weak signal: a domain may be registered, parked, mail-only, or otherwise without an A record. No domain or social handle was registered or purchased. | Check registrar/registry WHOIS/RDAP availability and major social handles manually at the moment of decision; keep domain availability separate from legal clearance. |

#### Class, territory and conflict assessment

| Class / territory | Relevance | Professional screening instruction |
|---|---|---|
| Nice 9 | High: downloadable mobile apps, downloadable digital publications, Bible/offline content. | Search identical/similar marks and specifications for religious, educational and reading apps/digital publications. |
| Nice 41 | High: education, religious education, training, publishing, Bible study, devotional and digital-content services. | Treat this as a core class even where delivery is online; evaluate similarity to subscriptions and curricula. |
| Nice 42 | Conditional: SaaS, hosting, non-downloadable software/web services only if the product’s actual commercial offering supports it. | Include if the roadmap includes hosted software/service functionality; do not add by assumption. |
| Nice 45 | Conditional/usually secondary: personal or social services, including some religious/community services. | Obtain advice based on actual community/ministry service plans. It should not be assumed merely because the product is Christian. |
| UK, US, EU/EEA and other launch territories | Priority territories for a UK-origin web/PWA with possible future Apple/Google distribution. | Search national/regional registers and relevant Madrid designations before approval. Similarity can cross classes where goods/services and trade channels are close. |

**Strongest conflict signals and residual risk.** The strongest signal is the active, overlapping `Sanctuary` brand space—not a verified exact CWC match. `Sanctuary` currently describes church/ministry care and daily Scripture, prayer and devotional activity, including AI Bible study, which may make consumers view `CWC Bible Sanctuary` as a CWC-branded sanctuary product rather than the existing `Sanctuary` product. The separate `Bible Sanctuary` ministry/site and multiple `Sanctuary Bible Church` uses reinforce that the wording is not newly coined. Whether this reaches legal conflict depends on actual registered/unregistered rights, territory, priority date, specifications, use and the overall impression—facts not established by this screen.

#### Distinctiveness, brand and fallback comparison

`Sanctuary` has a strong positive brand meaning: sacred, set-apart spiritual refuge; peace, safety, reflection, and dwelling in God’s presence. It accommodates Bible reading, study, devotionals, prayer/reflection and future community features more gracefully than a reader-only name. Its downside is that it can sound like a church, building or ministry rather than a Bible product; the CWC house mark reduces, but does not eliminate, that ambiguity. Use of a clear subtitle (for example, a Bible-reading/study/devotional descriptor) would aid comprehension but does not resolve trade-mark risk.

The full `CWC Bible Sanctuary` combination is pronounceable, memorable enough and app-title practical, but only moderately distinctive: `CWC` is used by unrelated Christian organisations, `Bible` is descriptive/generic for the offering and `Sanctuary` is common Christian language. A stylised/device mark combining the official CWC logo with the full words is likely easier to distinguish/protect than the words alone, but should supplement—not replace—advice on a word-mark strategy and the availability of the logo elements.

| Candidate | Relative result of this screen | Why |
|---|---|---|
| **CWC Bible Sanctuary** | **AMBER** | Better emotional fit and differentiation than `CWC Bible`, but `Sanctuary` is an active overlapping Christian digital/ministry term and `Bible Sanctuary` is already active as a ministry/site. |
| **CWC Scripture Centre** / **Center** | **AMBER, potentially lower app-confusion risk** | No exact combined use surfaced in the available public screen. `Scripture` and `Centre/Center` remain descriptive/institutional; both spellings, word orders and visual/phonetic variants require live-register searching. It may be safer only if the professional search supports that conclusion. |

**Decision gate before any implementation:** commission a trade-mark professional to search UK IPO, UK-designated international marks, WIPO/Madrid, EU and US records and relevant common-law/app/company/domain evidence; obtain advice on exact/near/phonetic/visual/conceptual similarity, prior-use and class specifications; decide word-mark versus logo/device strategy; and run final UK/US store and domain checks. This documentation does not provide legal advice or clearance.

**Tracker status:** BRD-001 remains `QA`/decision-pending. `CWC Bible Sanctuary` remains provisional; no rename is authorised. Preserve the future rename impact audit and staged rollout below unchanged.

### BRD-001 — Finalist deep screen: Bible/resource brand architecture (3 September 2026)

**Decision status: research only; no rename authorised.** This is a comparative commercial and linguistic screen, **not legal advice or legal clearance**. It does not establish that a mark is available, registrable, enforceable, or free from unregistered/common-law, domain, handle, company-name, app-store, or contractual conflict. No production/source/PWA/manifest/cache/storage/devotional/main/deployment change is authorised or was made. In particular, preserve the prior **152-match / 38-file future-rename impact audit**, all `/bible` and `/bible/**` routes, `cwc-bible-hub-v7`, `OFFLINE_BIBLE_CACHE`, existing browser-storage keys and frozen YEAR365/HS90/SG180 content.

#### Method, coverage and limitations

The public screen used exact, spaced/unspaced, ampersand/`and`, word-order, phonetic, transliteration and close-concept searches: `CHAZAH`, `Chazah`, `Chaza`, `Ḥāzâ`, `חזה`; `RUBIES & REVELATION`, `Rubies and Revelation`, `Rubies Revelation`, `Revelation & Rubies`; `WORDBORNE`, `Word Borne`, `Word-Borne`; `UNVEILED`, `Unveil'd`, `Unveiled Bible`, `Unveiled women`; and `HAREL`, `Har'el`, `Har El`, `הראל`, `altar hearth`, `mountain of God`. The same set (plus `Bible`, `study`, `devotional`, `prayer`, `app`, `ministry`, `publishing` and `community`) must be re-run by counsel against actual goods/services.

| Source/database or market screen | What was established | Important limitation / required professional step |
|---|---|---|
| [UK IPO register and journal](https://www.gov.uk/search-for-trademark) | IPO provides keyword/phrase searching for similar UK marks and owners, plus the journal for UK and UK-designated international applications. The interactive result pages could not be exported/reliably preserved in this environment. | Counsel must save live exact, fuzzy/phonetic, visual/conceptual and goods/services results; examine status, owner, priority, specification, opposition and coexistence evidence—not only mark text. The IPO itself warns that an automated similar-mark result does not decide likelihood of confusion. |
| [WIPO Global Brand Database](https://www.wipo.int/en/web/global-brand-database), [Madrid search guidance](https://www.wipo.int/en/web/madrid-system/how_to/search/index), [EUIPO/TMview entry point](https://www.euipo.europa.eu/en/search) | WIPO covers Madrid plus participating national/regional collections and supports keyword, name, goods/services, fuzzy, phonetic and word-stem searching; EUIPO exposes EUTM/TMview tools. | WIPO says national/regional registers must also be searched and gives no legal opinion on conflicts. The interactive record search was CAPTCHA/dynamic-interface limited here; therefore this tracker makes **no assertion of a no-match result**. Search EUTM and comparable UK rights (including retained EU-derived UK rights), UK, US/USPTO and all intended territories. |
| Apple App Store UK/US public pages/indexed search; Google Play public pages/indexed search | An exact, overlapping Apple listing was surfaced for **Unveiled: Bible Word Study**; active Harel apps were surfaced. No exact listing for the other three finalists was surfaced by the available public/indexed screen. | Store results vary by country, account and time and are not trade-mark clearance. Repeat logged, hands-on UK and US searches immediately before submission and confirm title availability in the developer consoles. |
| Christian study/devotional/prayer/ministry/publishing and wider-web/common-law screen | Direct overlapping Christian women’s uses were surfaced for **Unveiled**. Exact `Wordborne` is already used by a translation business and a word game; `Chazah` is used by unrelated businesses; `Harel` is a major financial/app brand. No exact `Rubies & Revelation` resource/app was surfaced in the accessible public screen. | Search results cannot prove absence of rights, use, domain registration, social ownership, company availability or priority. Commission counsel-led common-law checks; record live UK Companies House/charity and US state/entity results, registrar/RDAP checks and core social handles at decision time. No domains or handles were registered. |

**Core filing/search frame.** Treat Nice **9** (downloadable mobile apps/digital publications) and **41** (Bible study, education, publishing, devotional content) as core. Add **42** only if the actual offer includes hosted/non-downloadable software, SaaS or platform services; add **45** only if CWC actually offers community/personal/religious services in scope, rather than merely Christian-themed content. Search UK, US, EU/EEA/EUTM, Madrid designations and every planned launch market. An EUTM does not itself cover the UK after Brexit, while earlier registered EUTMs received comparable UK rights; both records need checking. Do not rely on class numbers alone: compare real specifications, channels and consumers.

#### Linguistic and theological findings

| Term | Verified finding | Brand-safe conclusion |
|---|---|---|
| **CHAZAH** | Hebrew **חָזָה** is conventionally transliterated **ḥāzâ** (plain-English `chazah`; roughly *khah-ZAH*, with `ch` like German *Bach*, not English *church*). Lexical sources give “see, behold, perceive,” including perception/understanding and visionary/prophetic contexts; its Old-Testament use is often poetic and can concern seeing in vision, rather than a slogan for generic “deep insight.” See [H2372 lexical entry](https://biblehub.com/strongs/hebrew/2372.htm) and [usage summary](https://thecorebible.org/lexiconword-hebrew/?hw=2372). | The modest claim **“see, behold and perceive Scripture more deeply”** is defensible as a *brand metaphor*, provided copy says it is inspired by the Hebrew verb and does not claim `Chazah` is a biblical person/name, means only “deep study,” or promises revelation. Teach pronunciation once in launch copy/audio; the unfamiliar spelling is a cost, not a defect. |
| **HAREL** | Hebrew **הַרְאֵל** (*har'el*) occurs in Ezekiel 43:15–16 in the temple-altar description. Lexical/academic discussion treats it in that context as the upper altar/altar-hearth (with associated `ariel` wording), although “mountain of God” is an etymological analysis sometimes offered; it is not a straightforward female biblical name or a simple “strength” word. See [Ezekiel-context reference](https://www.jevzajcg.me/enciklopedia/Encyclopaedia%20Judaica%2C%20v.%2002%20%28Alr-Az%29.pdf) and [altar discussion](https://clickbible.org/post/ezekiel-4315-unknown-author-159251/). | Do **not** market it as “a female biblical name meaning strength,” nor flatten it to “mountain of God.” Its ritual altar context is real but indirect for a women’s Bible/product platform, and needs specialist Hebrew review if used in any public theology. |
| **RUBIES & REVELATION** | `Rubies` directly fits CWC’s existing Donna Virtuosa / **More Than Rubies** hierarchy and Proverbs 31:10’s incomparable worth imagery. “Wisdom/revelation” also has a credible Scripture-study association (for example, wisdom is compared with rubies and Ephesians 1:17 speaks of wisdom and revelation), but `Revelation` in a title can initially be read as the final Bible book. | Use a clarifying descriptor consistently: **“A Christian Women Community Scripture study & devotional collection”** or **“Treasures of wisdom and revelation in God’s Word.”** Do not label it a Revelation-book product without intent. |
| **UNVEILED** | It has a strong 2 Corinthians 3:18 association (beholding/transformation), but the association is already actively used by women’s Bible-study and ministry products. | The theology is sound; the ownership position is not sufficiently clean for CWC’s umbrella/app name. |

#### Candidate evidence and risk conclusions

| Candidate | Material surfaced evidence / naming issue | Screen result | Why |
|---|---|---|---|
| **CHAZAH** | Unrelated business signals include Chazah Pharmaceuticals (India), a New York `Chazah Creations` entity and Chazah Global (Singapore). No exact Christian Bible/study/app product was surfaced in the accessible Apple/Google/public-web pass. | **GREEN — go to professional/filing check** | Best distinctiveness and strongest theology-to-product bridge. This is a *screening green*, not clearance: counsel must investigate registered and pending 9/41 (and conditional 42/45) marks, Chazah/Chaza/Ḥāzâ/חזה variants, spoken similarity and future-market conflicts. |
| **RUBIES & REVELATION** / **Rubies and Revelation** | No exact resource/app was surfaced in this public screen. The phrase is naturally descriptive/evocative—rubies, revelation, wisdom, and women’s devotion are all crowded Christian concepts—but the combined phrase is CWC-native and harmonises with More Than Rubies. | **GREEN — go to professional/filing check** | Strongest CWC resource-series name, not the strongest standalone technology mark. Test `&`/`and`, reversal and `Revelation`-book confusion; seek counsel on inherent distinctiveness and whether a CWC logo/device mark should supplement the words. |
| **WORDBORNE** / **Word Borne** / **Word-Borne** | Exact use exists for [Wordborne](https://www.wordborne.pl/), a Polish translation business, and for `WordBorne: Crypts of Letters`, a word-game title; public handles also appear occupied. No direct Christian Bible app was surfaced. The coined compound can mean “carried by the Word,” “born of the Word,” or simply “word game/translation,” so it is ambiguous in speech. | **AMBER — professional assessment required** | Memorable and scalable but already collision-prone as an exact coined word. Search classes 9/41/42, translation/localisation, education and games closely; do not invest in domains/identity until counsel assesses proximity. |
| **UNVEILED** | Directly overlapping evidence includes [Unveiled: Bible Word Study](https://apps.apple.com/nz/app/unveiled-bible-word-study/id6787166446), a Bible word-study iPhone app with Hebrew/Greek functionality; [BRF’s *Unveiled*](https://www.brf.org.uk/unveiled/), an eight-part resource/book on Old Testament women; [Live Unveiled](https://www.liveunveiled.com/who-we-are), a women’s Bible-study/prayer/community ministry; and women’s-ministry podcast use. | **RED — eliminate** | These are not abstract uses: they overlap scripture study, biblical languages, women, devotion/reflection and community. Very high app-store, search and common-law confusion risk even before register results. |
| **HAREL** / **Har'el** / **Har El** / **הראל** | `Harel` is an established, prominent insurance/financial group with consumer apps, including [Harel Health Insurance Online](https://apps.apple.com/us/app/harel-health-insurance-online/id1069719475?platform=ipad) and [Harel Switch](https://play.google.com/store/apps/details?id=com.harel.harel_switch). It is also a widespread surname/place/personal name; the biblical reference is specialised altar terminology. | **RED — eliminate** | The existing global digital-brand footprint makes searchability and app association poor, while the altar-hearth context does not clearly serve the intended Bible/devotional promise. The unrelated classes do not erase cross-platform, domain and expansion friction. |

#### Weighted scorecard and ranking

Scores are comparative screen scores out of 10, not probability-of-registration scores. Weighting favours the mission and durable ownability needed for an umbrella digital product: mission/CWC fit **15%**, biblical depth **10%**, memorability **10%**, pronunciation **8%**, distinctiveness/ownability **18%**, searchability **10%**, app suitability **10%**, scalability **9%**, and collision safety **10%**. `Collision safety` is scored high only where the accessible evidence is safer; it is deliberately reduced by actual overlap and never treats a missing search result as safe.

| Rank | Candidate | Mission / biblical / memorable / pronounceable | Ownable / searchable / app / scalable / collision-safe | Weighted score | Decision |
|---:|---|---|---|---:|---|
| 1 | **CHAZAH** | 9 / 9 / 8 / 6 | 8 / 7 / 8 / 9 / 7 | **7.9** | **GREEN** — preferred platform/app candidate, subject to professional check |
| 2 | **RUBIES & REVELATION** | 10 / 8 / 8 / 9 | 6 / 6 / 7 / 9 / 7 | **7.7** | **GREEN** — preferred CWC signature resource-series candidate, subject to professional check |
| 3 | **WORDBORNE** | 7 / 6 / 8 / 8 | 6 / 6 / 7 / 8 / 4 | **6.6** | **AMBER** — reserve only if counsel clears the existing exact uses |
| 4 | **UNVEILED** | 8 / 9 / 8 / 10 | 2 / 2 / 2 / 7 / 1 | **5.2** | **RED — drop** |
| 5 | **HAREL** | 4 / 6 / 6 / 7 | 2 / 2 / 3 / 6 / 1 | **3.9** | **RED — drop** |
| Benchmark | **CWC Bible Sanctuary** | 7 / 6 / 7 / 9 | 4 / 4 / 6 / 8 / 4 | **5.9** | **AMBER** — provisional descriptive fallback only |

**Top 3:** 1) **CHAZAH**, 2) **Rubies & Revelation**, 3) **Wordborne**. **Eliminate now:** **Unveiled** and **Harel**. The Top 3 is a strategic shortlist, not an instruction to use or file any name. `CWC Bible Sanctuary` remains **AMBER**, but no longer leads the strategy: its existing `Sanctuary` collision/categorisation problems remain materially worse than a successful Chazah-led architecture. Retain it only as a CWC-led descriptive contingency pending the professional screen; do not implement or advertise it and do not perform any rename work.

#### Architecture test and recommendation

| Architecture | Assessment | Result |
|---|---|---|
| **A. One umbrella product name** — one name for Bible, devotionals, prayer and study | Most coherent in navigation, but `Rubies & Revelation` is long and collection-like, `Unveiled`/`Harel` are rejected, and `Wordborne` has exact-use friction. `CHAZAH` is the only candidate with a plausible distinctive umbrella role. | Viable only as **CHAZAH**, after professional clearance; otherwise do not force a finalist into this role. |
| **B. Distinctive platform + CWC signature collection** | Separates tech/platform ownability from the feminine, existing CWC/Donna Virtuosa resource story; avoids forcing a single phrase to do both jobs. It also keeps future studies, journals and reading plans naturally extensible. | **Recommended, subject to two separate professional checks.** |
| **C. CWC-led descriptive naming without a separate platform brand** | Least migration/discoverability burden and strongest immediate house-mark clarity, but `CWC Bible Sanctuary` remains only moderately distinctive, components are crowded, and it can sound like a church/building. | Contingency only: **Christian Women Community Bible & Study** (descriptive presentation) while counsel/leadership decides; do not treat it as a substitute word mark or rename authority. |

**Recommended hierarchy/wording (not implemented):**

> **CHAZAH**
> *The Christian Women Community Scripture Platform*
> **Bible · Study · Devotionals · Prayer**
>
> **Rubies & Revelation**
> *A Christian Women Community signature study & devotional collection*
> *Treasures of wisdom and revelation in God’s Word*

Use `Chazah by Christian Women Community` only after counsel tests the composite wording as well as `CHAZAH` alone. Use **Rubies & Revelation** in collection/sub-brand placement rather than as the technical platform/app name. Do not claim that a file mark, logo/device mark, domain or store acceptance cures word-mark conflict.

#### Mandatory professional verification before a decision, filing or rollout

1. Obtain a UK trade-mark attorney’s written clearance/filing strategy for `CHAZAH`, `Chaza`, `Chazah Bible`, `ḥāzâ`, `חזה`, `RUBIES & REVELATION`, `Rubies and Revelation`, word-order/ampersand variants and the CWC composite; include exact, similarity, phonetic, transliteration and conceptual searches in classes 9/41 and actual conditional classes 42/45.
2. Repeat/register-search UK IPO and journal, UK-designated Madrid records, WIPO/Madrid Monitor, EUIPO/EUTM and comparable UK rights, USPTO and priority future markets; assess owners, priority, status, goods/services, oppositions and unregistered evidence. No database or search-engine non-result is clearance.
3. Retain live UK Companies House/charity/business-name, US/common-law, registrar/RDAP and key social-handle evidence, then complete live UK/US Apple and Google searches with title, developer, subtitle, category and screenshots. Do not buy domains, reserve handles or submit stores until authority is expressly granted.
4. Have a qualified Hebrew/Biblical-language reviewer approve outward-facing **Chazah** and **Harel** explanatory copy if either is used. The present conclusion is sufficient for screening, not an academic endorsement.
5. Only after written selection and professional sign-off may a separately approved, small visible-brand rollout be scoped. Preserve the existing impact audit and the stable `/bible`, PWA/cache/storage and devotional safeguards; do not merge or deploy from this documentation screen.

**Tracker status:** BRD-001 remains **QA / decision-pending**. This update records the finalist evidence, Top 3, eliminations and recommended architecture; it does not supersede the need for a professional clearance or authorise a production rename.

### Future rename impact audit

**Method:** full-repository, case-insensitive search for `Bible Hub`, `Bible-Hub`, `BibleHub` and reversed spacing/hyphen variants at `cdabe51`; **152 matches in 38 files**. This includes visible copy, metadata, technical identifiers, routes, comments, backups and history. It found no occurrence in the frozen YEAR365/HS90/SG180 content itself.

| Future action | Exact locations / areas | Treatment |
|---|---|---|
| **MUST CHANGE after approval** | Visible navigation/footer: `src/components/{Navbar,Footer,SanctuaryFooter}.astro`; homepage/resource experience: `src/components/BibleHubPreview.astro`, `src/components/GrowInTheWord.astro`, `src/pages/{index,resources}.astro`; current reader/landing copy: `src/pages/bible/index.astro`, `[book]/[chapter].astro`, `search.astro`, `history.astro`, `prayer.astro`, `plans.astro`, `devotionals/{index,[slug]}.astro`; shared return-panel text in `src/components/bible/BibleHubBackLink.astro`. | Replace visitor-facing strings, alt text and page titles only after final approval; keep feature behaviour unchanged. |
| **MUST CHANGE after approval** | PWA/install metadata: `public/manifest.webmanifest` `name`, `short_name`, and screenshot assets/references `/screenshots/bible-hub-desktop.png`, `/screenshots/bible-hub-mobile.png`; generated social/page title path through `src/layouts/Layout.astro` plus the Bible page title callers above; future Apple/Google listing title, subtitle, description, screenshots and support/website labels. | Use the approved product name consistently; retain the CWC house mark. Verify manifest display, install prompt and screenshots on a real device. |
| **SHOULD CHANGE** | Internal source names/classes and image/asset filenames: `BibleHubPreview.astro`, `BibleHubBackLink.astro`, `.bible-hub-*` selectors in `src/styles/global.css`, `/images/bible-hub-preview.webp`, `/images/bible-hub-qr.png`; active current-state tracker wording. | Defer until the visible rollout passes. Rename only with reference-aware imports/asset checks; no user benefit justifies a risky all-at-once refactor. |
| **SHOULD CHANGE only if still current, not historical** | `docs/architecture/ADR-001-project-structure.md`, `docs/FINAL_PROJECT_AUDIT.md`, `docs/PROJECT_CHARTER.md`, `docs/PROJECT_LOG.md`, `docs/ROADMAP.md`. | Update an active forward-looking description if it remains authoritative; retain release history and changelog facts. |
| **SHOULD NOT CHANGE / keep stable** | Routes and public links: all `/bible` and `/bible/**` paths; service-worker navigation logic in `public/sw.js`; `CACHE_NAME = cwc-bible-hub-v7`, `OFFLINE_BIBLE_CACHE`, existing cache entries and browser storage; devotional route/type comment in `src/content/bible/devotionals/types.ts`; component/class/file identifiers until separately scoped; `src/pages/bible/prayer.backup.astro`, `src/styles/global.backup.css`, `CHANGELOG.md` and historical release records. | A visible rename is not a cache/data/route migration. Keeping these stable avoids broken bookmarks, offline regressions, duplicate downloads and data loss. Backups/history belong to separately approved cleanup/archival work, not brand rewriting. |

### Safe staged rollout and QA (after approval only)

1. Obtain written selection plus a UK/IP professional clearance covering exact/near, phonetic, CWC, Centre/Center, word-order and relevant classes/territories; confirm company/domain availability and app-store searches in intended launch countries.
2. Create a small visible-brand/metadata branch. Preserve `/bible`, service-worker/cache/storage identifiers and frozen devotional fingerprints. Change only approved copy, metadata and required screenshot assets; keep an inventory of every changed location above.
3. Run `npm run check`, production build, link/route regression and frozen-devotional validation. Verify canonical/OG/Twitter title and description output, manifest `name`/`short_name`, PWA install/update/offline flow, and Apple/Google store field limits/policy wording.
4. Test existing installed PWA before and after deployment on real iOS/Android: update, Bible download state, airplane-mode close/reopen, reader navigation, bookmarks/notes/history and no forced redownload. Do **not** change cache keys unless a separate service-worker/package change requires it.
5. Submit store listings only after final store searches and counsel sign-off; record the final mark, classes/territories, store screenshots and QA in this tracker. No merge/deploy until the normal release gate passes.

### Status Legend

| Status | Meaning |
|---|---|
| Proposed | Captured; needs scope and approval. |
| Approved | Authorized to plan or build; scope is clear. |
| In Progress | Being implemented; no release commitment yet. |
| QA | Implementation complete; verification underway. |
| Ready for Release | QA passed and release checklist is complete. |
| Live | Released to production and recorded in Release History. |
| Blocked | Cannot advance; record owner, reason, and next action. |
| Deferred | Intentionally postponed; retain context and revisit trigger. |

### Priority Guide

| Priority | Use when... |
|---|---|
| P0 | Production-breaking, data/security risk, or critical visitor blocker. |
| P1 | High visitor/brand impact or release-critical. |
| P2 | Important improvement; schedule into a planned sprint. |
| P3 | Useful enhancement or idea; no current release commitment. |

## Immediate Post-Release QA

**First post-release task:** perform this on a real phone in production, not localhost or a preview.

| ID | Requested test | Pri. | Status | Dependencies | Acceptance / QA evidence | Notes |
|---|---|---:|---|---|---|---|
| QA-001 | Install the CWC PWA from the live site on a real device. | P1 | QA | Production device + browser install support | Record phone, browser, date, and result. | Outstanding |
| QA-002 | Download Bible for Offline Reading; open several Bible chapters while online. | P1 | QA | QA-001 | Confirm visitor-friendly downloaded state and chapters render. | Outstanding; cross-reference PWA-004. |
| QA-003 | Enable airplane mode; close and reopen the installed PWA; navigate among cached Bible chapters. | P1 | QA | QA-002 | No blank state/broken assets; cached chapters remain navigable. | Outstanding; test interruption/retry and browser mode under PWA-004. |

## Active Backlog

| ID | Area | Requested change | Pri. | Status | Target release / dependencies | Acceptance criteria and QA | Notes / decision |
|---|---|---|---:|---|---|---|---|
| CLN-001 | Release hygiene / Public routes | Remove confirmed redundant public backup and test routes: `/bible/prayer.backup` and `/test-bible`; retain the real `/bible/prayer` journal. | P1 | QA | Sprint 6 release hygiene; reference and history verification | Both unintended URLs no longer build or resolve; the production prayer journal remains intact; automated check/build pass before release. | Evidence: both files were tracked but unreferenced. `test-bible.astro` was a 236-byte `searchBible("God")` debug page. `prayer.backup.astro` was an 18,702-byte historical copy from `672fa2a` ("Backup before Claude dark light mode integration"), while the actual `prayer.astro` remains present (19,287 bytes). Targeted QA: only `prayer.astro` remains in the prayer route directory; no source references to either removed route were found; `git diff --check` passed. Both `npm run check` and `npm run build` stop before site analysis at Astro's attempted write to `.astro/content.d.ts` with `EPERM`; no source or permission workaround was made. `global.backup.css` and `src.zip` are also unreferenced historical backups from that checkpoint and are explicitly deferred pending separate archival approval. |
| BIB-001 | Bible Hub | Monitor core Bible routes and chapter navigation after release. | P1 | QA | Post-release; production availability | Test Genesis 1 plus representative chapter routes. | Core routes verified at release; retain as regression check. |
| MOB-001 | Mobile / Responsive | Regression-check Bible offline card and event grid at 390px and other common mobile widths. | P1 | QA | Post-release; production build | No horizontal overflow; tap targets and CTA visible. | 390px card overflow passed at release; keep as regression. |
| DEV-002 | Devotionals | Maintain separate Continue/Resume positions for each journey. | P1 | QA | Post-release; production browser storage | Open, leave, and return across all three journeys. | Verify HS90 unusual ordering and Day 365 prayer ends “Amen.” |
| PWA-001 | PWA & Offline | Validate installed-PWA update behaviour after the live branding/service-worker release. | P1 | QA | Post-release; real device and service worker | Install/update, standalone opening, name/theme/icon checks. | Cache key `cwc-bible-hub-v7` is live. |
| MOB-002 | Mobile / Join form | Fix the portrait-mobile **Become a Virtuosa** modal/form: the close control is inaccessible, the form does not scroll, and the Join/submit button is partly visible. | P1 | QA | Sprint 6; mobile modal layout, iOS/Safari viewport and safe-area behaviour | On representative portrait phones, modal fits or scrolls; close control, full form, and Join/submit are reachable and usable; nothing is trapped behind browser chrome/safe areas. Test real iOS Safari and another mobile browser, short/tall viewports, keyboard-open state, dismissal, and submit flow. | Evidence: user screenshot 1 (24 Aug 2026). Implementation confines scrolling to the modal overlay/card, adds `dvh` and safe-area constraints, and keeps the close control reachable while the card scrolls. Local browser QA passed at 375×480, 375×600, and 390×844: no modal/card horizontal overflow; full Join button reachable after card scroll; close control remained visible; Escape restored focus to the trigger. `npm run check` (0 errors/warnings/hints) and production build passed. Pending real iOS Safari/keyboard and second mobile-browser submit-flow QA before release. |
| BIB-003 | Bible Hub / Theme contrast | Correct dark-mode contrast for Old Testament, New Testament, and Bible book-page headings/heroes (for example, 1 John), including shared hero/banner styling. | P1 | QA | Sprint 6 Phase 2; shared theme tokens and Bible hero/banner components | WCAG-appropriate contrast in light/dark themes; OT, NT, representative book and chapter headings, and shared Bible banner are clearly readable; preserve approved light-mode design. Test desktop, tablet, mobile, short viewport, and interactive states. | Root cause: the theme’s semantic surface tokens were sound across the Bible routes, whose page backgrounds, cards, headings, and shared banner all use the dark-theme values. Targeted route inspection found no Bible-specific fixed-light surface/text pairing, so no Bible selector was changed. Files changed: `src/styles/global.css`, this tracker. QA evidence: production build passed (1,646 pages; offline manifest 1,189 chapters / 27 assets); rendered OT, NT, 1 John index/chapter, and shared `/bible` banner routes exist; dark surface heading/muted/gold contrast is 10.77:1 / 6.20:1 / 5.49:1. Release status: local QA; no merge/deployment. Remaining: browser and real-device visual checks at desktop, tablet, 390px, and short viewport. |
| BIB-004 | Bible Hub / Book index light-mode contrast | Correct the shared Bible book-index title and chapter-count foreground in light mode. | P0 | QA | Frozen pre-production scope; shared `/bible/[book]` template only | Genesis, Psalms, Matthew, 1 John, and Revelation show clearly readable title and chapter count at desktop, tablet, and 375px/390px/430px widths in light and dark themes; chapter cards/CTAs remain intact with no horizontal overflow. | Root cause: `/bible/[book]` placed an unscoped `h1` and `p` on `--color-surface-soft`, causing them to inherit the site body’s white-on-teal foreground in light mode. Fix: added the `bible-book-page` class to the shared template and scoped its title to `--color-surface-text` and its chapter count to `--color-surface-text-muted`; the existing dark theme remaps those semantic tokens, preserving dark mode. No book-specific patch and no card/CTA styles changed. Browser QA passed on all five books at 1280px, 768px, 375px, 390px, and 430px in both themes: no horizontal overflow, card headings/CTAs retained their expected colours. Light Genesis contrast evidence: title `#0F6B73` on `#F8F8F6` = **5.86:1**; chapter count `#666666` on `#F8F8F6` = **5.40:1**. |
| WEB-004 | Homepage / Theme contrast | Correct dark-mode contrast of the Welcome title: “Where Faith, Purpose and Sisterhood Meet”. | P1 | QA | Sprint 6 Phase 2; homepage dark-theme typography/background tokens | Title is visibly readable with WCAG-appropriate contrast in dark mode across device types; preserve light mode and approved design. | Root cause: the Welcome section hard-coded a white background while its heading used `--color-surface-text`, which becomes off-white in dark mode. Files changed: `src/styles/global.css` replaces the fixed white surface and paragraph grey with their matching semantic surface tokens, preserving the light palette and applying the existing dark palette together. QA evidence: resulting dark heading and muted-copy contrast are 10.77:1 and 6.20:1; corresponding light values are 6.23:1 and 5.74:1; production build passed. Release status: local QA; no merge/deployment. Remaining: browser and real-device visual checks at desktop, tablet, 390px, and short viewport. |
| MKT-001 | Marketplace / CTA contrast | Fix Marketplace-page card CTA: homepage preview shows “View Profile →”, while the dedicated page shows a solid gold block with invisible text. Investigate shared vs page-specific styling; teal text on gold is a candidate, not a decision. | P1 | QA | Sprint 6; Marketplace card/CTA variants and theme tokens | Label is visible and readable in light/dark modes; default, hover, focus, active, and disabled states are consistent. Test all marketplace cards on desktop, tablet, mobile, keyboard, and touch. | Root cause: the dedicated page duplicated the card markup and added `.btn-primary`, but the later, more-specific `.business-card a` selector overrode its teal foreground with gold; gold text was therefore rendered on the gold button. Files changed: `src/components/MarketplaceCard.astro`, `src/pages/marketplace.astro`, `src/styles/global.css`, this tracker. The shared card now has semantic text-link and gold-button CTA variants; the dedicated button uses the darker teal `--color-button-text` foreground in both themes, 55px touch target, keyboard `:focus-visible` outline, hover lift/shadow, and active press state. Local browser QA: dedicated CTAs rendered as gold `#D4AF37` with dark teal `#082f33` text in light and dark modes; three 55px CTAs and no horizontal overflow at 1280×800, 768×1024, 390×844, and 1280×600; keyboard focus reached the CTA and showed the dark-teal outline; browser hover rendered the -3px lift and 14px/28px shadow; active-state CSS is defined but a pressed state was not independently captured. Homepage preview retained transparent gold “View Profile →” links in light/dark mode with no overflow. Automated check: `cmd /d /c "set ASTRO_TELEMETRY_DISABLED=1&& npm run check&& echo ASTRO_CHECK_RESULT=PASS"` failed before type checking because Astro could not write generated `.astro/content.d.ts` (EPERM); this is an environment filesystem-permission failure, not a Marketplace regression, so no source change was made. Commit: `d02a7ee`. Release status: local browser QA only—no merge or production deployment. Remaining: rerun `npm run check` in a writable checkout; real physical touch-device QA (including touch/active behaviour) remains outstanding. |
| FMS-001 | Forms / Branded success redirect | Ensure successful Join and Contact submissions return to the CWC `/thank-you` page. | P2 | Deferred — non-blocking UX | Formspree owner access for form IDs `xdarjdzy` (Join) and `xvkpzowb` (Contact) if a paid plan is later approved | Successful submissions continue through Formspree; a future approved plan may set the Thank You redirect to exactly `https://www.christianwomencommunity.org/thank-you` and verify both forms. | **Submission PASS:** user-confirmed Join submission succeeds. **Branded redirect DEFERRED:** the current Formspree plan requires a paid redirect setting; no upgrade, workaround, or production-code change is authorised for this release. The stale `_next` fields were removed, including Contact’s invalid `/contact/thank-you` target. [Formspree redirect documentation](https://help.formspree.io/articles/form-and-project-settings/thank-you-redirect) |
| OPS-001 | Operations / Email | Operate `info@christianwomencommunity.org` through ImprovMX forwarding. | P1 | Pass — operational | ImprovMX MX and SPF remain active | Inbound mail to `info@christianwomencommunity.org` reaches `ChristianWomenCommunity@outlook.com`. | **User-supplied real-world PASS evidence (3 September 2026):** an external sender mailed `info@christianwomencommunity.org` and the message arrived in `ChristianWomenCommunity@outlook.com`. ImprovMX MX records and SPF are active. This is recorded as user-confirmed operational evidence; Work did not independently send or receive the test email. The public address remains in `src/config/site.ts` and the Contact page `mailto:` link; Contact form submissions use Formspree. |
| PWA-004 | PWA & Offline / Download UX & performance | Improve Offline Bible download progress UI and investigate perceived slowness. Consider percentage progress plus concise status instead of a raw count such as “90 of 1291 files”; retain accessible progress semantics. | P1 | QA | Sprint 6 Phase 4; generated offline manifest/package, service worker download path, QA-001–003 | Percentage/status is accurate, understandable, accessible; raw count only when useful. Verify completion, interruption, retry, browser mode, installed-PWA flows, and performance separately. | Root cause: the current generated manifest is 1,291 unique resources: 11 app routes + 66 book routes + 1,189 chapter routes (1,266 routes), plus 25 current build assets. The service worker deliberately fetches and saves these sequentially for reliability, reporting only every 10 completions; this makes a large download feel slow and the former raw count provided poor reassurance. Files changed: `src/components/bible/OfflineBibleDownload.astro`, this tracker. UX now uses a native labelled progress bar with a percentage as primary feedback, concise “parts ready” detail, and polite status announcements for preparation, downloading, completion, interrupted/retry, and an independently verified already-ready state. It reserves status space and uses responsive card/progress styles to avoid mobile shift/overflow. Download mechanics, manifest scope, route coverage, Bible data, service-worker/cache behaviour, and cache key `cwc-bible-hub-v7` remain unchanged; no cache bump is required. Release reconciliation (3 September 2026): a clean historical build at `4a6fc3c` produced 27 assets, including `/_astro/prayer.Cz7Nv7jE.css` and `/_astro/prayers.57GR00i7.js`; the current clean build produces 25 and no longer emits either. The former belonged to the removed duplicate Prayer backup output and the latter to the removed search-debug output; the real `/bible/prayer` stylesheet and script remain. Current output contains no stale `/bible/prayer.backup` or `/test-bible` route. The generator deliberately includes every current `dist/_astro` file, so service-worker download coverage remains complete. Local rendered-card checks pass at 1280×800, 768×1024, 390×844, and 1280×600 in light/dark modes with no horizontal overflow; semantic status/progress markup is present and the CTA has a visible keyboard-focus rule. Localhost intentionally disables the download control, so a full service-worker download/interruption simulation remains a real-device requirement. |
| BRD-001 | Branding / Legal | Investigate a legally safer replacement for **CWC Bible Hub** before any production rename. Candidates: **CWC Bible**, **CWC Bible Sanctuary**, **CWC Scripture Centre**, **CWC Bible Centre**. | P1 | QA | Discovery recorded 1 Sep 2026; no code, production, or app-listing change | Obtain user selection and professional/direct-register verification before any rename. | Preliminary screen in BRD-001 recommends CWC Bible Sanctuary with CWC Scripture Centre as backup; it is not legal clearance. Sanctuary conveys a safe, sacred refuge but may sound like a church/building/ministry. Preserve `/bible` routes and technical PWA/cache/storage identifiers unless separately approved. |
| PWA-003 | PWA & Offline | Review cache-key changes only when service-worker behaviour or cached package changes. | P2 | Approved | Future maintenance; release scope | Verify expected update lifecycle and no stale package. | `bc990ac` was server-rendered copy only; no cache-key bump needed. |
| CNT-001 | Content | Record and approve content changes before publishing; link Scripture references to the intended Bible chapter. | P2 | Proposed | Ongoing; content owner | Editorial proof and route check. | Use a separate tracker ID for material content revisions. |
| BIB-002 | Bible Hub | Define any next Bible Hub phase only after post-release device QA completes. | P2 | Deferred | Next planning; QA-001–003 | Approved scope and acceptance criteria before implementation. | Preserve stable baseline during release freeze. |
| FUT-001 | Future Features | Collect candidate Bible Hub features after stable-use period; prioritise from visitor needs and real-device findings. | P3 | Deferred | Future phase; post-release feedback | Discovery brief and approved scope. | No feature commitment yet. |

## Live Baseline Items

| ID | Area | Recorded scope | Pri. | Status | Guardrail / QA |
|---|---|---|---:|---|---|
| WEB-001 | Website / Branding | Keep approved CWC logo consistent across header, footer, home, metadata, favicon, manifest, and installed PWA. | P1 | Live | Do not redesign, crop, or substitute official logo; production spot-check and PWA icon after install/update. |
| WEB-002 | Founder | Maintain portrait-led responsive Founder section and exact bold sentence: “It was to build a home!” | P1 | Live | Desktop/mobile visual QA; no placeholder “waiting for photo” wording. |
| WEB-003 | Resources | Keep both public Devotionals entry points linked to `/bible/devotionals`. | P1 | Live | Homepage and Resources link test; do not alter unrelated Resources cards. |
| DEV-001 | Devotionals | Preserve frozen YEAR365, HS90, and SG180 selections, ordering, content, and fingerprints. | P0 | Live | Run devotional validation whenever relevant code/content changes; do not modify a journey incidentally. |
| PWA-002 | PWA & Offline | Keep visitor-friendly Offline Reading copy: “Take the Bible with you” and Download Bible CTA. | P1 | Live | Test non-downloaded/downloaded/offline states; no developer/local-environment wording. |

## QA Checklist

### Release Gate

**Writable-checkout release validation (3 September 2026, `feature/bible-hub` at `e899e18`):** `npm ci` completed from the committed `package-lock.json`; `npm run check` and `npm run build` both passed. The build emitted 1,644 pages, retained `/bible/prayer`, and did not emit `/bible/prayer.backup` or `/test-bible`. The frozen devotional validator passed: YEAR365 content fingerprint, HS90 selection fingerprint, and SG180 selection fingerprint all matched.

**Release-fix validation (3 September 2026, `feature/bible-hub` after `409a030`):** root cause for the canonical defect was a Vercel homepage URL hard-coded in the shared layout. Canonical and `og:url` now derive from `Astro.url` and the configured `https://www.christianwomencommunity.org` production origin; built checks pass for `/`, `/about`, `/marketplace`, `/bible`, `/bible/john/3`, `/bible/devotionals/created-to-know-him`, and `/join`. `robots.txt`, the generated sitemap, site configuration, and Formspree return URLs now use that same host, and the built sitemap path is `/sitemap-index.xml`. Root cause for the Join overflow was the card/highlight grid’s intrinsic minimum width; `width: 100%`, `min-width: 0`, and `minmax(0, 1fr)` grid tracks preserve the design while eliminating horizontal overflow at 375px, 390px, 430px, and 390×480 (including dark mode); the short-viewport close control remains reachable and Escape restores focus to the opener. Root cause for the offline count was an outdated 27-asset historical contract: a clean `4a6fc3c` build had 27 assets, while the current clean build has 25 and all current `dist/_astro` assets are included by the generator. The current correct contract is **1,266 routes + 25 assets = 1,291 resources**; real `/bible/prayer` assets remain, removed routes are absent, `cwc-bible-hub-v7` is unchanged, and no cache bump is required. `npm run check`, `npm run build`, and frozen YEAR365/HS90/SG180 fingerprint validation passed in the writable checkout. No merge or deployment was performed. Real-device checks remain pending.

**Real-device release evidence supplied by the user (iPhone, 3 September 2026):** Join modal keyboard handling, safe-area/scrolling, and successful submission: **PASS**. Marketplace physical touch/pressed state: **PASS**. Installed PWA installation, interrupted-download resume, reaching 100%, airplane-mode operation, fully closing/reopening while offline, and cached Bible navigation: **PASS**. The Join submission reached Formspree’s generic success page, so branded redirect remains FMS-001 rather than a pass.

**Frozen-scope release validation (3 September 2026, `feature/bible-hub` after BIB-004/FMS-001 source cleanup):** `npm run check` passed with 0 errors, warnings, and hints; production build passed; the frozen YEAR365/HS90/SG180 validator passed every canonical/selection/fingerprint check. Built canonical tags are correct for `/`, `/bible`, `/bible/genesis`, `/bible/1-john`, and `/join`; `robots.txt` and sitemap use the `www.christianwomencommunity.org` host. The offline manifest remains **1,266 routes + 25 assets = 1,291 resources**; `/bible/prayer` exists, `/bible/prayer.backup` and `/test-bible` do not, and `cwc-bible-hub-v7` is retained. No merge or deployment was performed. Form redirect verification cannot run until an authorised Formspree owner sets the two per-form redirects.

**Final pre-release gate (3 September 2026, `feature/bible-hub` at `ad44b0f`): GO if no new regression.** Email operational status is a **PASS** based solely on user-supplied external receive-test evidence: `info@christianwomencommunity.org` successfully forwarded through ImprovMX to `ChristianWomenCommunity@outlook.com`; MX and SPF are active. Formspree submission is **PASS**. The branded `/thank-you` success redirect is **DEFERRED / non-blocking** because the current Formspree plan requires a paid redirect setting; do not buy, upgrade, or implement a workaround in this release. Preserve the current 1,291 offline-resource contract unless a production build legitimately changes it and the cause is recorded.

**Production reconciliation and final live release gate (3 September 2026, `main` at `c844b59`): PASS — CWC v1.1 RELEASE FREEZE ACTIVE.** An explicit remote ref query confirmed `refs/heads/main = c844b59e64c36a4aca1d32e65ae64b9a9b865a82`; the user-supplied Vercel Production evidence confirms Ready deployment of that commit from `main` on `www.christianwomencommunity.org`. Live `/bible/plans` and representative details `/bible/plans/bible-in-one-year` and `/bible/plans/new-testament-90` returned 200. `/bible/reading-plans` returned 404 as designed: the current source, navigation, sitemap, manifest/offline list, and built output use only `/bible/plans` and `/bible/plans/[id]`; no public contract or internal reference requires an alias. The earlier Reading Plans failure is therefore a QA false positive, and no route was added. Live canonical and `og:url` matched the production host and their canonical trailing-slash pathname on `/`, `/resources`, `/join`, `/marketplace`, `/bible`, `/bible/genesis`, `/bible/genesis/1`, and `/contact`; the earlier metadata failure was stale/incorrect, so no metadata code change was made. Local `npm run check`, production build, and frozen YEAR365/HS90/SG180 validation passed. The rebuilt offline manifest remains 1,266 routes + 25 assets = 1,291 resources; `cwc-bible-hub-v7` remains unchanged; `/bible/prayer` exists while `/bible/prayer.backup` and `/test-bible` remain absent. Residual non-blocking item: Formspree branded redirect requires the paid setting; do not implement a workaround. No DNS or email changes were made.

- [ ] Scope is represented by approved backlog IDs; related Decision Log entries reviewed.
- [ ] Relevant automated validation passes, including `npm run check` and production build for code changes.
- [ ] Representative desktop and mobile routes checked; no horizontal overflow or broken navigation.
- [ ] For devotional work, YEAR365, HS90, and SG180 validation confirms frozen selections/fingerprints are unchanged unless explicitly approved.
- [ ] For PWA/offline work, manifest, service worker, icons, cached package, update behaviour, and real-device steps verified as applicable.
- [ ] Release record completed with commit, QA evidence, and production result.

### Real-Device PWA & Offline Bible Test Record

| Check | Result / evidence |
|---|---|
| Device / OS | [Enter] |
| Browser / version | [Enter] |
| Production URL | `https://www.christianwomencommunity.org/bible` |
| Date / tester | [Enter] |
| PWA installed | Pass / Fail / Notes |
| Bible downloaded | Pass / Fail / Notes |
| Several chapters opened online | Pass / Fail / Notes |
| Airplane mode enabled | Pass / Fail / Notes |
| PWA closed and reopened offline | Pass / Fail / Notes |
| Cached chapters navigated offline | Pass / Fail / Notes |
| Icons/name/theme/standalone check | Pass / Fail / Notes |
| Issue IDs created | [Enter or None] |
| Final result | Pass / Fail / Retest |

### Production Spot Check

- [ ] Approved CWC logo appears correctly in page chrome, metadata/favicons, and installed PWA.
- [ ] Founder image/copy and bold “It was to build a home!” render correctly on desktop and mobile.
- [ ] Homepage and Resources Devotionals CTAs open `/bible/devotionals`.
- [ ] YEAR365, HS90, and SG180 open, navigate, and resume independently.
- [ ] Bible Genesis 1 and representative chapters render; offline card displays visitor-friendly language.

## Release History

| Commit | Branch / state | What it represents | Release significance |
|---|---|---|---|
| `15e2056` | `feature/bible-hub` | Frozen devotional journeys: YEAR365, HS90, SG180. | Established locked devotional selections/content baseline. |
| `ba5fdfe` | `feature/bible-hub` | `feat(resources): connect devotionals to Bible Hub`. | Connected Resources and homepage devotional paths to `/bible/devotionals`. |
| `9b55422` | `feature/bible-hub` | Release work bundle: official logo across site/PWA, Founder fix, mobile event-grid overflow fix, Bible/devotional/PWA QA. | Passed Astro check and production build at this checkpoint; production paused because `main` advanced. |
| `4a6fc3c` | `feature/bible-hub` | Approved logo and PWA assets. | Installed approved master logo and direct, uncropped 192/512 PWA derivatives; cache key updated to `cwc-bible-hub-v7`. |
| `a87eaf5` | `feature/bible-hub` | Reconciliation merge with `origin/main`. | Safely reconciled release branch with newer `main`; no conflict-overwrite approach. |
| `bc990ac` | `main` / live | `fix(bible): use visitor-friendly offline reading copy`. | Final live change: removed development-only wording; server-rendered copy only, so cached package/service-worker behaviour unchanged. |

**Live release checkpoint:** `main` was fast-forwarded to `bc990ac`; Vercel production is live at `christianwomencommunity.org/bible`. Automated checks passed. The remaining high-value verification is the installed-PWA/offline journey on a real device.

### Release Record Template

| Field | Record |
|---|---|
| Release name / date | [Enter] |
| Branch / commit | [Enter] |
| Scope | [Enter] |
| Required QA | [Enter] |
| Production verification | [Enter] |
| Known follow-up / tracker IDs | [Enter] |
| Decision / approver | [Enter] |

## Decision Log

| Decision ID | Area | Approved decision | State | Guardrail / rationale |
|---|---|---|---|---|
| DEC-001 | Brand identity | Approved official CWC logo is the master artwork for website and PWA assets. | Live | Do not regenerate/reinterpret it; derivatives must be direct, uncropped uses of approved mark. |
| DEC-002 | Logo hierarchy | Christian Women Community is dominant; Donna Virtuosa, more than Rubies is secondary; Proverbs 31:10 retained. | Live | Premium teal/gold medallion direction; no cross or dove in approved logo. |
| DEC-003 | PWA icons | Use 192px and 512px versions derived from approved official logo. | Live | Installed PWA must not display prior Donna Virtuosa-dominant artwork. |
| DEC-004 | Founder | Use approved founder portrait; remove temporary avatar/waiting-for-photo message. | Live | Preserve Welcome Home copy; “It was to build a home!” is bold. |
| DEC-005 | Devotional routes | Canonical devotional landing page is `/bible/devotionals`. | Live | Both Resources locations point there. |
| DEC-006 | Devotional data | YEAR365, HS90, and SG180 selections/content fingerprints are frozen. | Live | Validate before changes touching devotional data, routes, or journey behaviour. |
| DEC-007 | Offline visitor copy | Visitors see plain-language Offline Reading copy and CTA, not localhost/development technical messages. | Live | Production card: “Take the Bible with you” / Download Bible for Offline Reading. |
| DEC-008 | Release safety | No force-push/reset of `main`; reconcile deliberately, QA after reconciliation, then release. | Live | Keep production changes traceable through Release History. |
| DEC-009 | PWA release discipline | Production PWA/offline behaviour requires real-device verification, not only local/preview checks. | Active | QA-001–003 remain open. |
| DEC-011 | BRD-001 discovery | No rename decision or implementation follows the 1 Sep preliminary name screen. | Active | User selection plus professional/direct UK and international register verification are required; `CWC Bible Sanctuary` is only the provisional first choice and `CWC Scripture Centre` the backup. |
| DEC-010 | Bible product name | “CWC Bible Hub” remains unchanged until an approved alternative completes documented clearance and approval. | Proposed | BRD-001 governs research; `/bible` routes stay unchanged unless separately approved. |

## Deferred / Future Ideas

| ID | Idea / problem observed | Why it matters | Revisit trigger | Decision |
|---|---|---|---|---|
| IDEA-001 | Experiments, visual refinements, integrations, and “nice to have” requests. | Retains context without treating ideas as commitments. | Define outcome before approval. | Deferred |

## New Change Request Template

> **Rule:** add the request first; do not begin implementation until priority, status, scope, dependencies, and QA needs are understood.

| Field | Entry |
|---|---|
| Change ID | `[AREA-###]` |
| Date requested | [Enter] |
| Requested by | [Enter] |
| Area | Website / Branding / Bible Hub / Devotionals / PWA & Offline / Mobile / Content / Future Features / Deferred |
| Requested change | [Describe visitor or business outcome; attach screenshots/links if relevant.] |
| Priority | P0 / P1 / P2 / P3 |
| Status | Proposed / Approved / In Progress / QA / Ready for Release / Live / Blocked / Deferred |
| Target release / sprint | [Enter] |
| Dependencies / constraints | [Enter] |
| Acceptance criteria | [What must be true for this change to be accepted?] |
| QA required | [Automated, route, mobile, production, real-device, content validation, etc.] |
| Decision / notes | [Link Decision Log ID or record new decision.] |
| Release result | [Commit, deploy, verification, follow-up IDs] |

## Operating Notes

Keep this tracker concise: it holds decisions, scope, status, and proof of release. Store longer specifications, screenshots, and test recordings in their normal project location and reference them from the relevant tracker ID.
