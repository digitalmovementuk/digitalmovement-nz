import { Seo, breadcrumbs } from "../seo";
import { business } from "../content";
import { RETENTION } from "../components/Consent";
import { LegalPage, LegalSection, LegalList, MailLink } from "../components/LegalShell";

/**
 * Terms of use — the website terms, not the client engagement contract.
 *
 * Written 2026-08-03 to give the footer's "Terms" link somewhere to go; it had
 * pointed at href="#" on every page since launch.
 *
 * Scope matters here and is stated on the page itself. These are terms for
 * using the website and for sending us an enquiry. They are NOT the terms of a
 * paid engagement — that is a separate signed agreement, and this page must
 * never be drafted so that it looks like one, because a visitor who thinks the
 * commercial terms are already settled has been misled about something
 * material.
 *
 * Three New Zealand-specific things this page has to get right:
 *
 * 1. Consumer Guarantees Act 1993. It cannot be contracted out of where a
 *    person acquires services for personal, domestic or household use. It CAN
 *    be contracted out of under section 43 where both parties are in trade and
 *    the agreement is in writing — but that belongs in the signed engagement
 *    agreement, not in website terms nobody negotiates. So this page says the
 *    consumer position plainly and points business engagements at their own
 *    agreement.
 *
 * 2. Fair Trading Act 1986. Section 12A makes an unsubstantiated
 *    representation an offence, so nothing here may promise a ranking or a
 *    result. Section 5D allows contracting out only between businesses, in
 *    writing, and only where it is fair and reasonable — the same reason the
 *    exclusions below are drawn narrowly rather than as a blanket.
 *
 * 3. Unfair contract terms. These are standard-form terms presented on a
 *    take-it-or-leave-it basis, so a term that creates a significant imbalance
 *    in our favour and is not reasonably necessary to protect our legitimate
 *    interests is exposed. Everything one-sided here has been kept to what a
 *    website operator genuinely needs.
 */
export function Terms() {
  return (
    <>
      <Seo
        title="Terms of Use · Digital Movement New Zealand"
        description="The terms that apply when you use the Digital Movement New Zealand website or send us an enquiry, including your rights under New Zealand consumer law."
        path="/terms"
        schema={[breadcrumbs([{ name: "Terms of use", path: "/terms" }])]}
      />

      <LegalPage
        title="Terms of use"
        updated="3 August 2026"
        intro={
          <>
            <p>
              These are the terms for using this website and for sending us an enquiry through it.
              By using the site, you accept them. If you do not, please don't use the site.
            </p>
            <p>
              These are <strong className="font-semibold text-ink">not</strong> the terms of a paid
              engagement. If you hire us, the work is covered by a separate written agreement that
              sets out the scope, the price and the term, and you will see and sign that before
              anything starts.
            </p>
          </>
        }
      >
        <LegalSection id="who" title="Who you are dealing with">
          <p>
            This website is operated by Digital Movement New Zealand Limited, trading as{" "}
            {business.name}. Where these terms say "we" or "us", that is the company named at the
            foot of this page.
          </p>
        </LegalSection>

        <LegalSection id="using-the-site" title="Using this website">
          <p>You are welcome to read, use and share this site. Please don't:</p>
          <LegalList
            items={[
              "Try to break into it, disrupt it, or test its security without our written permission.",
              "Scrape it at a rate that degrades it for other people, or copy it wholesale — see the copyright page for what you may and may not reuse.",
              "Send us anything through the forms that is unlawful, abusive, or somebody else's personal information that you have no right to pass on.",
              "Use it to do anything against New Zealand law.",
            ]}
          />
          <p>
            We try to keep the site up and working, but we don't promise it will always be
            available or free of faults. We may change it, move pages, or take parts of it down at
            any time.
          </p>
        </LegalSection>

        <LegalSection id="enquiries" title="Sending us an enquiry">
          <p>
            Sending an enquiry, and receiving a free plan from us, does not create a contract and
            costs you nothing. Neither side is committed to anything until there is a written
            agreement for the work, signed by both of us.
          </p>
          <p>
            Please give us accurate details. If you enquire on behalf of a business, you are telling
            us you are allowed to do that. What we do with the information you send is set out in our{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-ink-muted">
              privacy policy
            </a>
            : we keep it for {RETENTION}, we use it to answer you, and we share it with nobody else.
          </p>
          <p>
            The free plan we send is yours to keep and act on, whether you hire us or not. It is our
            work, so the reuse terms on our{" "}
            <a href="/copyright" className="underline underline-offset-2 hover:text-ink-muted">
              copyright page
            </a>{" "}
            apply to it — you can use it in your own business without restriction, but you can't
            resell it or publish it as somebody else's.
          </p>
        </LegalSection>

        <LegalSection id="information" title="The information on this site">
          <p>
            The guidance published here is general information, not advice about your business. It
            is accurate to the best of our knowledge when written, and search engines change without
            notice, so some of it will age. The fuller statement is on our{" "}
            <a href="/copyright" className="underline underline-offset-2 hover:text-ink-muted">
              copyright and disclaimer page
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection id="results" title="What we do and don't promise about results">
          <p>
            We do not promise you a search ranking, a position, a number of enquiries, or a
            timeframe to any of them, and neither can anyone else — nobody controls Google's
            results. Any figures shown on this site are outcomes reported by particular clients in
            their own circumstances, and they are not a prediction of yours.
          </p>
          <p>What we do commit to, and put in writing before the work starts:</p>
          <LegalList
            items={[
              "The exact searches we are going after, agreed with you.",
              "What we will do each month.",
              "A plain-English report every month showing where you sit on each of those searches, whether the news is good or not.",
              "One fixed monthly price, agreed up front, that does not move unless the scope moves and you have agreed to it.",
            ]}
          />
          <p>
            We do not publish prices on this site, because what the work costs depends on your
            industry, your region and what you want it to achieve. You get a real figure on the
            first call, not a bracket.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="Your rights under New Zealand consumer law">
          <p>
            If you acquire services from us for personal, domestic or household use, you have
            guarantees under the Consumer Guarantees Act 1993 that we cannot contract out of and are
            not trying to. Nothing on this site or in these terms limits those guarantees, or your
            rights under the Fair Trading Act 1986.
          </p>
          <p>
            If you acquire services from us for the purposes of a business, the position is
            different and is set out in the written agreement for that work rather than here. We
            will not ask you to give up a right without saying plainly which right it is and why.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="Liability">
          <p>
            To the extent the law allows, we are not liable for loss or damage arising from your use
            of this website, from the site being unavailable, or from your reliance on general
            information published on it.
          </p>
          <p>
            That limit does not apply to anything that cannot be excluded under New Zealand law,
            including the Consumer Guarantees Act and the Fair Trading Act as described above, our
            own fraud, or death or personal injury caused by our negligence.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes to these terms">
          <p>
            We may update these terms. The current version is always the one on this page, with its
            date at the top. Changes are not retrospective — a change made today does not alter the
            terms that applied to something you did last month.
          </p>
        </LegalSection>

        <LegalSection id="law" title="Which law applies">
          <p>
            These terms are governed by New Zealand law, and the New Zealand courts have
            jurisdiction over any dispute about them.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="Questions">
          <p>
            If anything here is unclear, ask. Email <MailLink /> and a person will answer you.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  );
}
