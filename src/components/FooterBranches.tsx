import '../styles/footer-branches.css';

type Registration = { label: string; value: string; href?: string };
type Branch = {
  country: string;
  city?: string;
  businessName: string;
  address: string[];
  email: string;
  registrations?: Registration[];
  soleTrader?: string;
};

const branches: Branch[] = [
  {
    country: 'New Zealand',
    city: 'Auckland',
    businessName: 'Digital Movement New Zealand Limited',
    address: ['Level 8, 139 Quay Street', 'Auckland Central 1010', 'New Zealand'],
    email: 'office@digitalmovement.co.nz',
    registrations: [
      { label: 'Company no.', value: '9433725', href: 'https://app.companiesoffice.govt.nz/co/9433725' },
      { label: 'NZBN', value: '9429053714732', href: 'https://www.nzbn.govt.nz/mynzbn/nzbndetails/9429053714732/' },
    ],
  },
  {
    country: 'United Kingdom',
    city: 'London',
    businessName: 'Digital Movement Marketing Ltd',
    address: ['128 City Road', 'London EC1V 2NX', 'United Kingdom'],
    email: 'office@digitalmovement.uk',
    registrations: [
      { label: 'Company no.', value: '17110525', href: 'https://find-and-update.company-information.service.gov.uk/company/17110525' },
    ],
  },
  {
    country: 'Australia',
    city: 'Melbourne',
    businessName: 'Digital Movement Australia Pty Ltd',
    address: ['Level 3, 480 Collins Street', 'Melbourne VIC 3000', 'Australia'],
    email: 'office@digitalmovement.com.au',
    registrations: [
      { label: 'ACN', value: '690 059 959', href: 'https://abr.business.gov.au/ABN/View?abn=96690059959' },
      { label: 'ABN', value: '96 690 059 959', href: 'https://abr.business.gov.au/ABN/View?abn=96690059959' },
    ],
  },
];

export function FooterBranches() {
  return (
    <section className="dm-footer-branches" aria-labelledby="footer-branches-heading">
      <h2 id="footer-branches-heading">Our branches</h2>
      <div className="dm-footer-branches__grid">
        {branches.map((branch) => (
          <article className="dm-branch-card" key={branch.country} aria-label={branch.city ? `${branch.city}, ${branch.country}` : branch.country}>
            <header className="dm-branch-card__heading">
              {branch.city && <p className="dm-branch-card__country">{branch.country}</p>}
              <h3>{branch.city || branch.country}</h3>
            </header>
            <p className="dm-branch-card__business">{branch.businessName}</p>
            <address className="dm-branch-card__address">
              {branch.address.map((line) => <span key={line}>{line}</span>)}
            </address>
            <a className="dm-branch-card__email" href={`mailto:${branch.email}`}>{branch.email}</a>
            {branch.registrations && (
              <dl className="dm-branch-card__registrations">
                {branch.registrations.map((registration) => (
                  <div key={registration.label}>
                    <dt>{registration.label}</dt>
                    <dd>{registration.href
                      ? <a href={registration.href} target="_blank" rel="noopener noreferrer" aria-label={`${branch.country} ${registration.label} ${registration.value} — official register (opens in a new tab)`}>{registration.value}</a>
                      : registration.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {branch.soleTrader && <p className="dm-branch-card__sole-trader">Sole trader: {branch.soleTrader}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
