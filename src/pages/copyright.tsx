import { Seo, breadcrumbs } from "../seo";
import { business } from "../content";
import { LegalPage, LegalSection, LegalList, MailLink } from "../components/LegalShell";

/**
 * Copyright and disclaimer — Copyright Act 1994.
 *
 * Written 2026-08-03. The footer had asserted "© {year} Digital Movement. All
 * rights reserved." on every page since launch with nothing behind it: no
 * statement of who owns what, no permitted-use terms, and no disclaimer of any
 * kind on a site that gives away a lot of specific advice about SEO.
 *
 * Two drafting notes for whoever edits this next.
 *
 * First, the disclaimer is deliberately narrower than the reference material
 * this page was modelled on. New Zealand agency disclaimers routinely try to
 * exclude "any and all liability" flat. That over-reaches here: the Consumer
 * Guarantees Act cannot be contracted out of at all where a person acquires
 * services for personal use, and the Fair Trading Act cannot be contracted out
 * of in a consumer setting either. A clause that purports to exclude what the
 * law says you cannot exclude does not just fail — under Fair Trading Act
 * section 5D and the unfair contract terms regime it is itself the kind of
 * term a regulator looks at. So the exclusion here is expressly subject to
 * those Acts, and says so in words a reader can follow.
 *
 * Second, no clause on this page may promise a search ranking, a position, or
 * a timeframe to one. That is a representation about future performance and
 * needs reasonable grounds under Fair Trading Act section 12A. We do not have
 * a New Zealand client record that provides them. The site removed its
 * page-1-in-90-days guarantee for exactly this reason and it must not return
 * through a legal page.
 */
export function CopyrightDisclaimer() {
  return (
    <>
      <Seo
        title="Copyright and Disclaimer · Digital Movement New Zealand"
        description="Who owns the content on this website, what you may do with it, and the limits of what the information here can be relied on for."
        path="/copyright"
        schema={[breadcrumbs([{ name: "Copyright and disclaimer", path: "/copyright" }])]}
      />

      <LegalPage
        title="Copyright and disclaimer"
        updated="3 August 2026"
        intro={
          <>
            <p>
              This page covers two things: who owns what is published on this website, and what the
              information on it can and cannot be relied on for. Every page on this site should be
              read together with this one.
            </p>
          </>
        }
      >
        <LegalSection id="copyright" title="Copyright">
          <p>
            © {new Date().getFullYear()} Digital Movement New Zealand Limited. All rights reserved.
          </p>
          <p>
            The text, images, video, page designs, code and structure of this website are protected
            by the Copyright Act 1994 and are owned by us, or used by us with the owner's
            permission. That includes the written guidance on our service and location pages, which
            is our own research and our own words rather than syndicated content.
          </p>
        </LegalSection>

        <LegalSection id="what-you-may-do" title="What you may do with it">
          <p>
            You may read, print and share this material for your own personal use, for study, or for
            research, provided you do not change it and you credit {business.name} as the source with
            a link back to the page you took it from.
          </p>
          <p>Anything beyond that needs our written permission. In particular, you may not:</p>
          <LegalList
            items={[
              "Republish our material on another website, in print or in an app, whether or not you credit us.",
              "Sell it, licence it, or include it in something you sell.",
              "Present it as your own work, or as the work of another agency.",
              "Use it to train, fine-tune or ground a commercial machine-learning system without our written agreement.",
              "Strip out our name, our logo or a copyright notice from anything you are permitted to use.",
            ]}
          />
          <p>
            Permission is usually easy to get and we say yes more often than not. Ask at{" "}
            <MailLink /> and tell us what you want to use and where.
          </p>
        </LegalSection>

        <LegalSection id="trade-marks" title="Can you use our name or logo?">
          <p>
            The {business.name} name and logo are ours. Other companies' names, logos and product
            names that appear on this site — Google and its products among them — belong to their
            respective owners. We use them to describe the tools and platforms we work with. Nothing
            on this site should be read as those companies endorsing us, or as us being an agent or
            representative of them, unless a page says so in plain words and names the programme.
          </p>
        </LegalSection>

        <LegalSection id="disclaimer" title="Disclaimer">
          <p>
            This website exists to describe who we are and what we do, and to explain how search and
            online marketing work. We take care to keep it accurate and current, and we correct
            things when they turn out to be wrong.
          </p>
          <p>
            But it is general information, published to the world, and it is not advice about your
            business. We do not know your market, your site, your competitors or your numbers when
            we write a page. Nothing here is legal, financial, tax or technical advice, and it is not
            a substitute for advice from someone who has looked at your situation. If a decision
            matters, get advice on your specific facts — from us or from anyone else.
          </p>
          <p>
            Search engines change how they work without telling anybody, and they do so often. What
            was accurate when a page was published may be out of date by the time you read it. We
            can change, correct, add to or remove anything on this site at any time and without
            notice.
          </p>
        </LegalSection>

        <LegalSection id="results" title="About results">
          <p>
            Where this site describes what our work has achieved, those are real outcomes for real
            clients, reported as they were reported to us. They are not a prediction of what will
            happen for you.
          </p>
          <p>
            Nobody controls Google's results, and we do not promise you a particular ranking, a
            particular position, a particular number of enquiries or a particular timeframe to any
            of them. Any agency that does is promising something outside its control. What we commit
            to instead is written into the work: the searches we are going after, agreed in writing
            before we start, and a plain-English report every month showing where you sit on every
            one of them.
          </p>
        </LegalSection>

        <LegalSection id="other-sites" title="Links to other websites">
          <p>
            This site links to other websites, and other websites link to it. We do not control
            those sites and we are not responsible for what is on them, whether it is accurate, or
            what they do with information you give them. A link from us is a pointer, not an
            endorsement. When you follow one, you leave this site, and that site's terms and privacy
            policy apply to you instead of ours.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="Liability, and the limits of these terms">
          <p>
            To the extent the law allows it, we are not liable for loss or damage arising from your
            use of this website or from your reliance on information published on it — including
            where the site is unavailable, where something on it turns out to be wrong or out of
            date, or where a linked site causes you a problem.
          </p>
          <p>
            That limit does not apply where the law says it cannot. Nothing on this page limits or
            excludes:
          </p>
          <LegalList
            items={[
              "Your rights under the Consumer Guarantees Act 1993, if you acquire services from us for personal, domestic or household use.",
              "Your rights under the Fair Trading Act 1986.",
              "Liability for our own fraud, or for death or personal injury caused by our negligence.",
              "Anything else that cannot be excluded under New Zealand law.",
            ]}
          />
          <p>
            If you engage us for the purposes of a business, different terms apply to that
            engagement, and they are set out in our{" "}
            <a href="/terms" className="underline underline-offset-2 hover:text-ink-muted">
              terms of use
            </a>{" "}
            and in the written agreement for the work itself.
          </p>
        </LegalSection>

        <LegalSection id="corrections" title="How do you tell us something is wrong?">
          <p>
            If you find something on this site that is inaccurate, out of date, or that you believe
            infringes your copyright, email <MailLink /> with the page address and what the problem
            is. We will look at it and, where you are right, fix it. We would rather hear it from
            you than leave it up.
          </p>
        </LegalSection>

        <LegalSection id="law" title="Which law applies">
          <p>
            This page, and your use of this website, are governed by New Zealand law. The New
            Zealand courts have jurisdiction over any dispute about them.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  );
}
