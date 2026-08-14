import { Seo, breadcrumbs, ADDRESS_LINE, NZBN } from "../seo";
import { business } from "../content";
import { RETENTION } from "../components/Consent";
import { LegalPage, LegalSection, LegalList, MailLink } from "../components/LegalShell";

/**
 * Privacy policy — Privacy Act 2020.
 *
 * History worth keeping. This page was written 2026-07-31 because the footer
 * had linked "Privacy", "Cookies" and "Terms" to href="#" since launch, while
 * the enquiry forms were already posting real names, emails and phone numbers
 * to a live endpoint. It was then left UNROUTED for three days — the file
 * existed, nothing rendered it, and the footer links stayed dead. Both are
 * fixed now: the route is in routes.tsx and the footer points at it.
 *
 * Rewritten 2026-08-03 to be audit-safe rather than merely honest. The old
 * version was true but partial: it covered collection, purpose, retention and
 * access, and said nothing about the two things a Privacy Commissioner enquiry
 * would actually reach for.
 *
 * The first is IPP 12, cross-border disclosure. Our enquiry forms do not post
 * to a New Zealand server — they post to https://leads.digitalmovement.uk/,
 * the group's endpoint in the United Kingdom (see src/lib/submitLead.ts). That
 * is a disclosure of personal information to a foreign person, and IPP 12
 * permits it only where the recipient is subject to comparable safeguards. It
 * is — the UK has UK GDPR and the Data Protection Act 2018, and the recipient
 * is our own group rather than a third party. But the previous policy did not
 * say the information left the country at all, and a policy that omits that is
 * not a compliant policy. If the endpoint ever moves, this section moves with
 * it.
 *
 * The second is Part 6, notifiable privacy breaches — the duty to notify the
 * Commissioner and the affected people where a breach is likely to cause
 * serious harm. Stating it is not decorative: it is the commitment a regulator
 * checks you understood before the breach, not after.
 *
 * Two values are imported rather than retyped. RETENTION comes from
 * Consent.tsx so this page and the notice under every submit button can never
 * state different periods — the string the visitor agreed to and the string we
 * publish have to be the same string. The legal entity and NZBN come from
 * seo.tsx, via LegalShell, for the same reason.
 */
export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy · Digital Movement New Zealand"
        description="How Digital Movement New Zealand collects, uses, stores and shares your personal information under the Privacy Act 2020 — including where it is stored, how long we keep it, and how to have it corrected or deleted."
        path="/privacy"
        schema={[breadcrumbs([{ name: "Privacy", path: "/privacy" }])]}
      />

      <LegalPage
        title="Privacy policy"
        updated="3 August 2026"
        intro={
          <>
            <p>
              This page explains what personal information we collect when you contact us, why we
              collect it, who sees it, where it is stored, how long we keep it, and how to have it
              corrected or deleted. It applies to this website and to {business.name} New Zealand.
            </p>
            <p>
              We handle personal information under the Privacy Act 2020 and its information privacy
              principles. Where this policy states a right, that right is one the Act gives you —
              not a courtesy we are offering and could withdraw.
            </p>
          </>
        }
      >
        <LegalSection id="who-we-are" title="Who is responsible for your information">
          <p>
            Digital Movement New Zealand Limited is the agency responsible for the personal
            information described on this page. We trade as {business.name}. If you need to raise
            anything about your information, email <MailLink /> — that address reaches the person
            who can act on it, not a queue.
          </p>
          <p>
            If you would rather write to us, our registered office and address for service is{" "}
            {ADDRESS_LINE}. Our NZBN is {NZBN}.
          </p>
        </LegalSection>

        <LegalSection id="what-we-collect" title="What we collect">
          <p>When you send an enquiry, we collect only what you type into the form:</p>
          <LegalList
            items={[
              "Your name.",
              "Your phone number.",
              "Your email address, if you choose to give one — that field is optional.",
              "Which service you're interested in.",
              "Whatever you write in the message field, including your website address.",
            ]}
          />
          <p>
            We also record that you ticked the consent box and the exact wording you agreed to, so
            that both of us can tell later what was actually consented to.
          </p>
          <p>
            There is no account to create, we ask for no payment details anywhere on this website,
            and we do not collect information about your health, your finances, your race, your
            beliefs or anything else the Act treats as sensitive. If you send us that kind of
            information in a message field anyway, we will not use it, and we will delete it.
          </p>
        </LegalSection>

        <LegalSection id="how-we-collect" title="How we collect it, and from whom">
          <p>
            Directly from you, and only from you. We do not buy contact lists, we do not scrape
            them, and we do not build a profile of you from other sources and attach it to your
            enquiry. If we ever needed information about you from someone else, we would ask you
            first.
          </p>
          <p>
            Giving us your details is voluntary. You do not have to use the form at all — you can
            email us instead. But if you leave out your name or your phone number we cannot reply,
            because those two are what a reply is made of. We ask for a number rather than an
            address because we answer these by ringing you back, and a mistyped email address is
            a reply that never arrives and never tells us it didn't.
          </p>
        </LegalSection>

        <LegalSection id="why-we-collect" title="Why we collect it">
          <p>
            To answer your enquiry, and to do the work if you decide to hire us. That is the whole
            purpose. We do not add you to a mailing list, we do not sell or rent your details, and
            we do not use them to target advertising at you anywhere.
          </p>
          <p>
            If we ever want to use your information for something outside that purpose, we will ask
            you for permission first, and no is a complete answer.
          </p>
        </LegalSection>

        <LegalSection id="who-sees-it" title="Who sees it">
          <p>
            Inside our business: the people working on your enquiry, and nobody else. Outside it,
            only the suppliers who carry or store the message for us, and only so they can do that
            job:
          </p>
          <LegalList
            items={[
              "Our own lead-handling endpoint and mail provider, which receive the enquiry and deliver it to us.",
              "Our website host, which serves this site.",
              "Google Analytics, described below, which measures how the site is used and never sees what you typed into a form.",
            ]}
          />
          <p>
            None of these suppliers is permitted to use your information for their own purposes. We
            will also release information where the law requires it — a court order, or a statutory
            demand we are obliged to answer — and we will tell you when that happens unless we are
            legally barred from telling you.
          </p>
        </LegalSection>

        <LegalSection id="offshore" title="Where it is stored, including outside New Zealand">
          <p>
            Some of your information leaves New Zealand, and you should know that before you send
            it.
          </p>
          <p>
            Enquiries submitted through this website are transmitted to a server operated by our own
            group in the United Kingdom, which then delivers them to us. Google Analytics data is
            processed by Google on servers outside New Zealand. Both are covered by information
            privacy principle 12, which permits disclosure to a foreign recipient where that
            recipient is subject to privacy safeguards comparable to those in the Privacy Act. The
            United Kingdom's data protection law provides comparable safeguards, and in our case the
            recipient is our own business rather than an unrelated third party.
          </p>
          <p>
            Information is sent over an encrypted connection and held on access-controlled systems.
            No system is perfect and we will not pretend otherwise. What we can tell you is that
            access is limited to the people who need it, and that we do not keep information after
            it has stopped being useful.
          </p>
        </LegalSection>

        <LegalSection id="how-long" title="How long we keep it">
          <p>
            {RETENTION} from the date you contact us, after which the enquiry is deleted. If you
            become a client, we keep your details for as long as we are working together, and
            afterwards for as long as our tax and business record-keeping obligations require —
            currently seven years. After that they go too.
          </p>
        </LegalSection>

        <LegalSection id="cookies" title="Cookies and analytics">
          <p>
            We use Google Analytics to understand how people find and move through this site: how
            many visitors a page gets, which searches brought them, roughly where in the world they
            are, and which pages they read next. This is measurement, not surveillance of you
            personally. Your IP address is anonymised, and we have switched off Google's advertising
            features, so nothing you do here puts you into an advertising or remarketing audience.
          </p>
          <p>
            Google Analytics sets cookies — small files in your browser — to tell one visit apart
            from another. You can block or delete them in your browser settings, and nothing on this
            site stops working if you do. We do not use advertising cookies, and we do not run
            third-party trackers here.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="Seeing, correcting and deleting what we hold">
          <p>Under the Privacy Act 2020 you can:</p>
          <LegalList
            items={[
              "Ask us to confirm whether we hold personal information about you, and to give you a copy of it.",
              "Ask us to correct anything that is wrong.",
              "Ask us to delete what we hold.",
              "Withdraw your consent at any time — we then stop contacting you and delete what we hold.",
            ]}
          />
          <p>
            Email <MailLink /> and we will action it. The Act allows us up to 20 working days to
            respond to a request to see or correct your information; in practice a request that
            arrives in a working week is usually done inside it. We will not charge you for any of
            this.
          </p>
          <p>
            If we cannot make a correction you have asked for, you can ask us to attach a statement
            of the correction you sought to the information we hold, and we will.
          </p>
        </LegalSection>

        <LegalSection id="breach" title="If something goes wrong">
          <p>
            If your information is lost, or reached by someone who should not have it, and that
            breach is likely to cause you serious harm, we are required to notify the Office of the
            Privacy Commissioner and to notify you. We will do that as soon as practicable after we
            become aware of it, and we will tell you plainly what happened and what you can do about
            it.
          </p>
        </LegalSection>

        <LegalSection id="complaints" title="Complaints">
          <p>
            Tell us first if you can — email <MailLink /> and we will look at it properly and come
            back to you. If you are not satisfied with how we have handled your information, or with
            how we handled your complaint, you can complain to the Office of the Privacy
            Commissioner. It is independent of us and free to use:
          </p>
          <LegalList
            items={[
              <a
                href="https://www.privacy.org.nz/"
                className="underline underline-offset-2 hover:text-ink-muted"
                rel="noopener"
              >
                privacy.org.nz
              </a>,
              "0800 803 909",
              "PO Box 10094, The Terrace, Wellington 6143",
            ]}
          />
          <p>You do not need our permission, and you do not have to come to us first.</p>
        </LegalSection>

        <LegalSection id="changes" title="Changes to this policy">
          <p>
            If we change how we handle personal information, we will change this page and update the
            date at the top. Where a change would materially reduce your rights or widen what we do
            with your information, we will ask for your consent rather than infer it from your
            carrying on using the site.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  );
}
