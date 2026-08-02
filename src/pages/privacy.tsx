import { Seo, breadcrumbs } from "../seo";
import { business } from "../content";
import { RETENTION } from "../components/Consent";

/**
 * Privacy policy.
 *
 * Written 2026-07-31 because the footer had linked "Privacy", "Cookies" and
 * "Terms" to `href="#"` since launch — three dead links on every page — while
 * the enquiry forms had just been connected to a live endpoint. A site that
 * genuinely collects names, emails and phone numbers needs to say what happens
 * to them somewhere other than the small print beside the submit button.
 *
 * Under the Privacy Act 2020 the relevant duties are IPP 3 (tell people what
 * you are collecting and why, at the time you collect it) and IPP 5–6 (keep it
 * secure, let people see it). The inline notice on each form already does the
 * IPP 3 job at the point of collection; this page is the fuller version that
 * the footer link should have pointed at all along.
 *
 * NOT WIRED UP YET. This file is deliberately additive: at the time it was
 * written another session was mid-flight editing src/routes.tsx and
 * src/components/Footer.tsx, and editing those files would have clobbered that
 * work. Two lines are needed to make it live:
 *
 *   routes.tsx:  { path: "privacy", lazy: () => import("./pages/privacy")
 *                  .then((m) => ({ Component: m.Privacy })) },
 *   Footer.tsx:  point the "Privacy" link at "/privacy" instead of "#".
 *
 * The retention period is imported rather than retyped so this page and the
 * consent notice on the forms can never state different numbers.
 */
export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy · Digital Movement"
        description={`How Digital Movement collects, uses and stores your personal information, how long we keep it, and how to ask us to correct or delete it.`}
        path="/privacy"
        schema={[breadcrumbs([{ name: "Privacy", path: "/privacy" }])]}
      />

      <main className="surface-light">
        <div className="container-v3 max-w-[720px] pt-32 pb-24 sm:pt-40 sm:pb-32">
          <h1 className="text-[34px] sm:text-[44px] font-bold tracking-[-0.03em] text-ink leading-[1.08]">
            Privacy policy
          </h1>
          <p className="mt-5 text-[16px] text-ink-soft leading-relaxed">
            This page explains what we collect when you contact us, why, how long we keep it, and
            how to have it removed. It applies to {business.name} New Zealand and this website.
          </p>
          <p className="mt-2 text-[13px] text-ink-faint">Last updated 31 July 2026.</p>

          <Section title="What we collect">
            <p>
              Only what you type into an enquiry form: your name, your email address, and
              optionally your phone number, which service you're interested in, and whatever you
              write in the message field. We don't ask for anything else, and there is no account
              to create.
            </p>
          </Section>

          <Section title="Why we collect it">
            <p>
              To answer your enquiry. That's the whole purpose. We don't add you to a mailing list,
              we don't sell or share your details with anyone, and we don't use them for
              advertising.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              {RETENTION} from the date you contact us, after which the enquiry is deleted. If you
              become a client, your details are kept for as long as we work together and for as
              long afterwards as our tax obligations require.
            </p>
          </Section>

          <Section title="Who can see it">
            <p>
              Enquiries are emailed to the {business.name} team and stored on our own server. We do
              not sell them, and we do not pass them to anyone for their own use. The only third
              parties involved are the email and hosting providers that carry and store the message
              on our behalf, and the analytics described in the next section, which never sees what
              you typed into the form.
            </p>
          </Section>

          <Section title="Analytics and cookies">
            <p>
              We use Google Analytics to understand how people find and move through this site — how
              many visitors a page gets, which search terms brought them, roughly where in the world
              they are. This is measurement, not tracking you personally: your IP address is
              anonymised, and we have explicitly switched off Google's advertising features, so you
              are never added to an advertising or remarketing audience from this site.
            </p>
            <p>
              Google Analytics sets cookies to tell one visit from another. You can block or delete
              them in your browser settings; nothing on the site stops working if you do.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under the Privacy Act 2020 you can ask us what personal information we hold about you,
              ask us to correct it, and ask us to delete it. Email{" "}
              <a
                href={business.emailHref}
                className="underline underline-offset-2 hover:text-ink-muted"
              >
                {business.email}
              </a>{" "}
              and we'll action it. You can also withdraw your consent at any time — that means we
              stop contacting you and delete what we hold.
            </p>
            <p>
              If you're not satisfied with how we've handled your information, you can complain to
              the{" "}
              <a
                href="https://www.privacy.org.nz/"
                className="underline underline-offset-2 hover:text-ink-muted"
                rel="noopener"
              >
                Office of the Privacy Commissioner
              </a>
              .
            </p>
          </Section>

          <Section title="Contact">
            <p>
              {business.name} — email{" "}
              <a
                href={business.emailHref}
                className="underline underline-offset-2 hover:text-ink-muted"
              >
                {business.email}
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-[20px] sm:text-[23px] font-bold tracking-[-0.02em] text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-[15.5px] text-ink-soft leading-relaxed">{children}</div>
    </section>
  );
}
