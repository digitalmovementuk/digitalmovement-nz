/* ============================================================================
   Digital Movement NZ — TEMPORARY internal page-overview widget

   A centred pill in the sticky top bar (red pulsing LIVE dot) → opens a branded
   table of every planned page from the SEO strategy, with Volume · Cluster ·
   KD · EYS · Enquiries/mo (12 mo) and per-page deploy status. Green = built and
   deployed on GitHub; red = still planned.

   Data: overview-data.json, built from
   Sales/SEO Strategies/DM NZ 26-07-31/dm-nz-seo-strategy.md

   ⚠️ INTERNAL BUILD ONLY. This must never ship to digitalmovement.co.nz. It is
   injected by index.html only when VITE_INTERNAL_OVERVIEW=1 at build time, and
   the internal build deploys to a separate repo with no CNAME.

   TO REMOVE: delete this file + overview-data.json + the guarded <script>
   include in index.html.

   Structure, class names and interaction model are lifted from the CEx widget
   (github-cx/overview-widget.js) so the two read as one system; only the
   palette, the column set and the language differ.
   ========================================================================== */
(function () {
  "use strict";

  // Resolve site root from this script's own URL, so the widget works locally,
  // on a project Pages path (/digitalmovement-nz-internal/) and at a domain
  // root without any of them being special-cased.
  var me = document.currentScript ? document.currentScript.src : "";
  var ROOT = me.replace(/overview-widget\.js(\?.*)?$/, "");

  var CSS = `
  :root{--ov-ink:#1b0e2e;--ov-deep:#100620;--ov-acc:#F05F22;--ov-warm:#fbfbfd;--ov-line:rgba(27,14,46,.12);--ov-mut:#6e6478}
  /* Sits BELOW the sticky header rather than inside it: this site's bar has
     centred nav links, and a viewport-centred pill lands straight on top of
     them. Clearing them the way CEx does isn't available here — they're React
     components with utility classes, not a stable .nav__links hook. */
  .ov-pill{position:fixed;top:84px;left:50%;transform:translateX(-50%);z-index:99998;
    display:inline-flex;align-items:center;gap:9px;padding:8px 16px;border-radius:999px;
    background:#1b0e2e;color:#fff;font:800 12.5px/1 Inter,system-ui,sans-serif;letter-spacing:.02em;
    border:1px solid rgba(255,255,255,.16);box-shadow:0 8px 24px -8px rgba(0,0,0,.5);cursor:pointer;
    -webkit-tap-highlight-color:transparent;transition:transform .15s ease, background .2s}
  .ov-pill:hover{background:#000;transform:translateX(-50%) translateY(1px)}
  @media(max-width:1023px){.ov-pill{top:76px}}
  .ov-dot{width:9px;height:9px;border-radius:50%;background:#ff3b30;box-shadow:0 0 0 0 rgba(255,59,48,.7);
    animation:ovpulse 1.6s infinite}
  @keyframes ovpulse{0%{box-shadow:0 0 0 0 rgba(255,59,48,.7)}70%{box-shadow:0 0 0 7px rgba(255,59,48,0)}100%{box-shadow:0 0 0 0 rgba(255,59,48,0)}}
  .ov-pill__live{color:#ff6a60;font-weight:900;letter-spacing:.12em}
  .ov-pill__lbl{opacity:.92}
  @media(max-width:860px){.ov-pill__lbl{display:none}.ov-pill{padding:8px 13px}}
  .ov-scrim{position:fixed;inset:0;z-index:99999;background:rgba(16,6,32,.68);backdrop-filter:blur(3px);
    display:none;align-items:flex-start;justify-content:center;padding:4vh 16px;overflow:auto;overscroll-behavior:contain}
  .ov-scrim.is-open{display:flex}
  /* Cap the whole modal to the viewport and let the table area take the
     remaining height, so the body scrolls instead of the modal growing past
     the fold and stranding the last rows. */
  .ov-modal{width:min(1120px,100%);max-height:92vh;display:flex;flex-direction:column;
    background:var(--ov-warm);border-radius:18px;overflow:hidden;
    box-shadow:0 40px 90px -30px rgba(0,0,0,.6);font-family:Inter,system-ui,sans-serif;color:var(--ov-ink)}
  .ov-head{flex:0 0 auto}
  .ov-foot{flex:0 0 auto}
  .ov-head{background:linear-gradient(120deg,#2c1450 0%,#1b0e2e 55%,#100620 100%);color:#fff;padding:22px 26px 20px;position:relative}
  .ov-kick{font:800 10px/1 ui-monospace,Menlo,monospace;letter-spacing:.22em;text-transform:uppercase;color:#FFB07A}
  .ov-h{font-size:clamp(1.25rem,2.4vw,1.7rem);font-weight:800;letter-spacing:-.02em;margin:8px 0 4px}
  .ov-sub{font-size:13px;color:rgba(255,255,255,.72)}
  .ov-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
  .ov-links a{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:999px;
    background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.18);color:#fff;text-decoration:none;
    font:700 11px/1 ui-monospace,Menlo,monospace;letter-spacing:.04em}
  .ov-links a:hover{background:rgba(255,255,255,.20)}
  .ov-stats{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
  .ov-stat{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:11px;padding:10px 14px;min-width:104px}
  .ov-stat b{display:block;font-size:1.5rem;font-weight:800;letter-spacing:-.02em;line-height:1.05}
  .ov-stat span{font-size:10.5px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.6)}
  .ov-stat--acc b{color:#FFB07A}
  .ov-x{position:absolute;top:16px;right:18px;width:34px;height:34px;border-radius:50%;border:0;cursor:pointer;
    background:rgba(255,255,255,.12);color:#fff;font-size:18px;line-height:1;display:grid;place-items:center}
  .ov-x:hover{background:rgba(255,255,255,.24)}
  .ov-wrap{max-height:58vh;overflow:auto;padding:0 6px 6px}
  table.ov-tbl{width:100%;border-collapse:collapse;font-size:13px}
  .ov-tbl thead th{position:sticky;top:0;background:var(--ov-warm);text-align:right;font:800 10.5px/1.3 ui-monospace,Menlo,monospace;
    letter-spacing:.06em;text-transform:uppercase;color:var(--ov-mut);padding:14px 12px 9px;border-bottom:2px solid var(--ov-line);white-space:nowrap}
  .ov-tbl thead th.l{text-align:left}
  .ov-tbl td{padding:10px 12px;border-bottom:1px solid var(--ov-line);text-align:right;white-space:nowrap}
  .ov-tbl td.l{text-align:left;white-space:normal}
  .ov-tbl tr:hover td{background:rgba(240,95,34,.05)}
  .ov-rank{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:6px;background:#1b0e2e;color:#fff;font:800 11px/1 Inter;margin-right:8px}
  .ov-tier{display:inline-block;font:800 9px/1 ui-monospace;letter-spacing:.1em;text-transform:uppercase;padding:3px 7px;border-radius:5px;margin-left:8px;vertical-align:middle}
  .ov-tier.Hub{background:#FFE0CC;color:#8a3400}
  .ov-tier.Spoke{background:#E9E4F0;color:#4a3a63}
  .ov-tier.Core{background:#D8ECFB;color:#0a4a72}
  .ov-tier.Support{background:#EDEBE6;color:#6e6478}
  .ov-tier.Explainer{background:#F5E1FF;color:#6b1fa3}
  .ov-fidelity{display:inline-block;font:800 9px/1 ui-monospace;letter-spacing:.1em;text-transform:uppercase;padding:3px 7px;border-radius:5px;margin-left:8px;vertical-align:middle}
  .ov-fidelity.LOW-FI{background:#FFE9A8;color:#7a5b00}
  .ov-fidelity.MID-FI{background:#C9E8FF;color:#0a4a72}
  .ov-pg{color:var(--ov-ink);text-decoration:none;font-weight:700;border-bottom:2px solid rgba(240,95,34,.35)}
  .ov-pg:hover{border-bottom-color:var(--ov-acc)}
  .ov-pg--dead{color:var(--ov-mut);font-weight:700;border-bottom:2px dotted rgba(110,100,120,.4)}
  .ov-clu{font-size:11px;color:var(--ov-mut);margin-top:2px}
  .ov-slug{font:600 10.5px/1 ui-monospace,Menlo,monospace;color:var(--ov-mut)}
  .ov-wave{display:inline-block;font:800 9px/1 ui-monospace;letter-spacing:.08em;text-transform:uppercase;padding:3px 7px;border-radius:5px;background:rgba(27,14,46,.06);color:var(--ov-mut)}
  .ov-enq{font-weight:800;color:#0F8C61}
  .ov-eys{font-weight:800}
  .ov-live{display:inline-flex;align-items:center;gap:6px;font-weight:800;font-size:11.5px}
  .ov-live i{width:8px;height:8px;border-radius:50%}
  .ov-live.on i{background:#16a34a}.ov-live.on{color:#16a34a}
  .ov-live.off i{background:#b3261e}.ov-live.off{color:#b3261e}
  .ov-foot{padding:14px 24px 20px;font-size:11.5px;line-height:1.55;color:var(--ov-mut);background:var(--ov-warm);border-top:1px solid var(--ov-line)}
  .ov-foot b{color:var(--ov-ink)}
  .ov-warn{margin-top:8px;padding:8px 11px;border-radius:8px;background:rgba(179,38,30,.08);color:#b3261e;font-weight:700}
  @media(max-width:760px){.ov-wrap{max-height:64vh}}
  `;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function n(x) { return x == null ? "—" : Number(x).toLocaleString("en-NZ"); }
  function dec(x) { return x == null ? "—" : Number(x).toLocaleString("en-NZ", { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }

  function render(data) {
    var t = data.totals || {};
    var scrim = el("div", "ov-scrim");
    // This site runs Lenis smooth-scroll, which intercepts wheel events at the
    // document level. Without these opt-outs the modal is visually scrollable
    // but the wheel does nothing inside it — the reported "can't scroll" bug.
    scrim.setAttribute("data-lenis-prevent", "");

    var rows = (data.rows || []).map(function (r, i) {
      var live = r.live
        ? '<span class="ov-live on"><i></i>Deployed · GitHub</span>'
        : '<span class="ov-live off"><i></i>Not built</span>';
      // Only link pages that actually exist — a link to a planned page is a 404.
      var label = r.live
        ? '<a class="ov-pg" href="' + ROOT + r.slug + '">' + r.title + '</a>'
        : '<span class="ov-pg--dead">' + r.title + '</span>';
      var pct = t.volume ? (r.cum_volume / t.volume) * 100 : 0;
      return '<tr>' +
        '<td class="l"><span class="ov-rank">' + (i + 1) + '</span>' + label +
          '<span class="ov-tier ' + r.tier + '">' + r.tier + '</span>' +
          (r.fidelity ? '<span class="ov-fidelity ' + r.fidelity + '">' + r.fidelity + '</span>' : '') +
          '<div class="ov-clu"><span class="ov-slug">/' + r.slug + '</span> · ' + r.cluster + '</div></td>' +
        '<td><span class="ov-wave">' + r.wave + '</span></td>' +
        '<td>' + n(r.volume) + '</td>' +
        '<td>' + n(r.cluster_volume) + '</td>' +
        '<td>' + dec(pct) + ' %</td>' +
        '<td>' + (r.kd == null ? '—' : r.kd) + '</td>' +
        '<td class="ov-eys">' + n(r.eys) + '</td>' +
        '<td class="ov-enq">' + (r.enquiries_12mo ? dec(r.enquiries_12mo) : '—') + '</td>' +
        '<td>' + live + '</td></tr>';
    }).join("");

    scrim.innerHTML =
      '<div class="ov-modal" role="dialog" aria-label="Digital Movement NZ — page overview">' +
        '<div class="ov-head">' +
          '<button class="ov-x" aria-label="Close">×</button>' +
          '<div class="ov-kick">Digital Movement NZ · SEO programme · Live overview</div>' +
          '<div class="ov-h">Planned pages — volume, difficulty &amp; projected enquiries</div>' +
          '<div class="ov-sub">Source: dm-nz-seo-strategy.md · Semrush NZ data pulled ' + (data.synced_at || "—") + '</div>' +
          // Crawl surface, alongside the page list. The sitemap is what decides
          // which of these pages Google ever discovers, so it belongs on the
          // same panel rather than a step away.
          '<div class="ov-links">' +
            '<a href="' + ROOT + 'sitemap.xml" target="_blank" rel="noopener">sitemap.xml · ' + n(t.live) + ' URLs</a>' +
            '<a href="' + ROOT + 'robots.txt" target="_blank" rel="noopener">robots.txt</a>' +
            '<a href="https://www.digitalmovement.co.nz/sitemap.xml" target="_blank" rel="noopener">live sitemap ↗</a>' +
          '</div>' +
          '<div class="ov-stats">' +
            '<div class="ov-stat"><b>' + n(t.live) + '/' + n(t.pages) + '</b><span>deployed · GitHub</span></div>' +
            '<div class="ov-stat"><b>' + n(t.volume) + '</b><span>Head volume/mo</span></div>' +
            '<div class="ov-stat ov-stat--acc"><b>~' + dec(t.enquiries_12mo) + '</b><span>Enquiries/mo (12 mo)*</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="ov-wrap" data-lenis-prevent><table class="ov-tbl"><thead><tr>' +
          '<th class="l">Page</th><th>Wave</th><th>Head<br>vol./mo</th><th>Cluster<br>vol./mo</th>' +
          '<th>Cum.<br>vol.&nbsp;%</th><th>KD</th><th>EYS</th><th>Enquiries/mo<br>(12 mo)*</th><th>Status</th>' +
          '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<div class="ov-foot">' +
          '<b>* Projection.</b> ' + (data.model_note || '') +
          ' &nbsp;·&nbsp; <b>Cum. vol. %</b> = share of cumulative head volume along the priority order. ' +
          '<b>EYS</b> = Expected Yield Score (projected organic clicks/mo at target ranking). ' +
          '“—” = no Semrush data, or not a traffic asset. ' +
          '<b>LOW-FI / MID-FI</b> badge = page is live for review but not yet production copy/design.' +
          '<div class="ov-warn">Internal preview build. Not published to digitalmovement.co.nz.</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(scrim);

    var pill = el("button", "ov-pill");
    pill.setAttribute("aria-label", "Open page overview");
    pill.innerHTML = '<span class="ov-dot"></span><span class="ov-pill__live">LIVE</span>' +
                     '<span class="ov-pill__lbl">Page overview · ' + n(t.live) + '/' + n(t.pages) + '</span>';
    document.body.appendChild(pill);

    function open() { scrim.classList.add("is-open"); document.documentElement.style.overflow = "hidden"; }
    function close() { scrim.classList.remove("is-open"); document.documentElement.style.overflow = ""; }
    pill.addEventListener("click", open);
    scrim.addEventListener("click", function (e) { if (e.target === scrim) close(); });
    scrim.querySelector(".ov-x").addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  function start() {
    var style = el("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    fetch(ROOT + "overview-data.json", { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(render)
      .catch(function () {
        var p = el("button", "ov-pill");
        p.innerHTML = '<span class="ov-dot"></span><span class="ov-pill__live">LIVE</span>';
        document.body.appendChild(p);
      });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
