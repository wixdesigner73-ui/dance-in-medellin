/* Dance in Medellín — shared interactions
   Each effect maps to a native Wix Studio feature (see WIX-STUDIO-BUILD-GUIDE.md). */

/* ---- Client contact details: NOT PROVIDED YET — fill these in before launch ---- */
const CONTACT = {
  whatsappNumber: "",   // international format, digits only, e.g. "573001234567"
  calendarUrl: "",      // booking link for "Dance in Medellín — Ask Nina Anything" (20 min)
  instagramUrl: "",     // Dance in Medellín Instagram profile
  email: ""             // contact email
};
const WA_MESSAGE = "Hi Nina! I’m interested in a Dance in Medellín trip and had a question about an upcoming immersion 🙂";

document.documentElement.classList.replace("no-js", "js");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const page = document.body.dataset.page;

const NAV = [
  ["index.html", "Home", "home"],
  ["experience.html", "The Experience", "experience"],
  ["stories.html", "Participant Stories", "stories"],
  ["about.html", "About", "about"],
  ["faq.html", "FAQ", "faq"]
];
const cur = (key) => (key === page ? ' aria-current="page"' : "");

const sparkSVG = '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M20 0c1.6 10.4 9.6 18.4 20 20-10.4 1.6-18.4 9.6-20 20-1.6-10.4-9.6-18.4-20-20C10.4 18.4 18.4 10.4 20 0Z"/></svg>';

/* ---------- Header ---------- */
const header = document.createElement("header");
header.className = "site-header";
header.innerHTML = `
  <div class="container nav">
    <a class="wordmark" href="index.html" aria-label="Dance in Medellín — home" title="Logo placeholder: final logo in progress">
      <small>Dance in</small><span>Medellín</span>
    </a>
    <nav aria-label="Main"><ul class="nav-links">
      ${NAV.map(([h, l, k]) => `<li><a href="${h}"${cur(k)}>${l}</a></li>`).join("")}
    </ul></nav>
    <div class="nav-cta">
      <a class="btn btn--sm" href="reserve.html"${cur("reserve")}>Reserve Your Spot</a>
      <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span></button>
    </div>
  </div>`;
document.body.prepend(header);

const menu = document.createElement("div");
menu.className = "mobile-menu";
menu.id = "mobile-menu";
menu.innerHTML = `
  <ul>${NAV.map(([h, l, k]) => `<li><a class="m-link" href="${h}"${cur(k)}>${l}</a></li>`).join("")}
  <li><a class="m-link" href="reserve.html"${cur("reserve")}>Reserve Your Spot</a></li></ul>
  <div class="cta-block"><a class="btn btn--light" href="reserve.html">Reserve Your Spot <span class="arrow">→</span></a>
  <p class="cta-note">Takes ~2 minutes · No payment or commitment required</p></div>`;
header.after(menu);

const skip = document.createElement("a");
skip.className = "skip"; skip.href = "#main"; skip.textContent = "Skip to content";
document.body.prepend(skip);

const burger = header.querySelector(".burger");
const setMenu = (open) => {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";
};
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

let lastY = 0;
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle("is-scrolled", y > 20);
  header.classList.toggle("is-hidden", y > 500 && y > lastY && !document.body.classList.contains("menu-open"));
  lastY = y;
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Footer ---------- */
const footer = document.createElement("footer");
footer.className = "site-footer";
footer.innerHTML = `
  <div class="container">
    <div class="footer__mission">
      <p class="eyebrow">At the heart of this experience</p>
      <p>My mission is to use dance as a bridge to uplift local artists in Medellín through above-market compensation and economic dignity, while connecting international participants to personal growth and a deeper appreciation for Colombian culture.</p>
    </div>
    <div class="footer__grid">
      <div class="cta-block">
        <h4>Ready when you are</h4>
        <a class="btn btn--sm" href="reserve.html">Reserve Your Spot <span class="arrow">→</span></a>
        <p class="cta-note">Takes ~2 minutes · No payment or commitment required</p>
      </div>
      <div><h4>Explore</h4><ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
      <div><h4>Connect</h4><ul>
        <li><a data-contact="instagram" href="#">Instagram</a></li>
        <li><a data-contact="whatsapp" href="#">WhatsApp</a></li>
        <li><a href="reserve.html#connect">Contact</a></li>
      </ul></div>
      <div><h4>Legal</h4><ul>
        <li><a href="#" title="Privacy Policy not provided yet">Privacy Policy</a></li>
        <li><a href="#" title="Terms not provided yet">Terms</a></li>
        <li><a href="policy.html">Cancellation / Refund Policy</a></li>
      </ul></div>
    </div>
    <div class="footer__big" aria-hidden="true">Dance in <span>Medellín</span></div>
    <div class="footer__legal"><span>© ${new Date().getFullYear()} Dance in Medellín</span><span>Move. Connect. Belong.</span></div>
  </div>`;
if (page === "about") footer.querySelector(".footer__mission").remove(); // mission already has its own section there
document.body.append(footer);

/* ---------- Contact links (fall back to the contact section until real details exist) ---------- */
document.querySelectorAll("[data-contact]").forEach((a) => {
  const type = a.dataset.contact;
  let href = "";
  if (type === "whatsapp" && CONTACT.whatsappNumber) href = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(WA_MESSAGE)}`;
  if (type === "calendar" && CONTACT.calendarUrl) href = CONTACT.calendarUrl;
  if (type === "instagram" && CONTACT.instagramUrl) href = CONTACT.instagramUrl;
  if (type === "email" && CONTACT.email) href = `mailto:${CONTACT.email}`;
  if (href) { a.href = href; if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; } }
  else { a.href = page === "reserve" ? "#connect" : "reserve.html#connect"; a.dataset.placeholder = "Contact link not provided yet"; }
});

/* ---------- Sparks ---------- */
document.querySelectorAll(".spark").forEach((s) => { s.innerHTML = sparkSVG; s.setAttribute("aria-hidden", "true"); });

/* ---------- Split headlines into words for staggered reveal ---------- */
document.querySelectorAll("[data-split]").forEach((el) => {
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(" "); return; }
          const w = document.createElement("span"); w.className = "w";
          const inner = document.createElement("span"); inner.textContent = part; inner.style.setProperty("--i", i++);
          w.append(inner); frag.append(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && !n.classList.contains("w")) walk(n);
    });
  };
  walk(el);
  el.classList.add("split");
});

/* ---------- Scroll reveals ---------- */
const revealTargets = document.querySelectorAll("[data-reveal], .split, .mark, [data-stagger] > *");
document.querySelectorAll("[data-stagger]").forEach((group) => {
  const step = parseFloat(group.dataset.stagger) || 0.1;
  [...group.children].forEach((c, i) => { if (!c.hasAttribute("data-reveal")) c.setAttribute("data-reveal", ""); c.style.setProperty("--d", `${i * step}s`); });
});
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
  document.querySelectorAll("[data-reveal], .split, .mark").forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-in"));
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
}

/* ---------- Scroll parallax ---------- */
const parallax = [...document.querySelectorAll("[data-parallax]")];
if (parallax.length && !reduceMotion) {
  let ticking = false;
  const run = () => {
    const vh = window.innerHeight;
    parallax.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const offset = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.setProperty("--py", `${offset.toFixed(1)}px`);
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(run); ticking = true; } }, { passive: true });
  window.addEventListener("resize", run);
  run();
}

/* ---------- Hero mouse-responsive depth (desktop pointer only) ---------- */
const hero = document.querySelector("[data-mouse]");
if (hero && !reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const layers = hero.querySelectorAll("[data-depth]");
  let tx = 0, ty = 0, cx = 0, cy = 0, raf;
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width - 0.5;
    ty = (e.clientY - r.top) / r.height - 0.5;
    if (!raf) raf = requestAnimationFrame(tick);
  });
  hero.addEventListener("mouseleave", () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(tick); });
  function tick() {
    cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
    layers.forEach((l) => { const d = parseFloat(l.dataset.depth); l.style.translate = `${(cx * d).toFixed(2)}px ${(cy * d).toFixed(2)}px`; });
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(tick) : null;
  }
}

/* ---------- Slider arrows ---------- */
document.querySelectorAll("[data-slider]").forEach((wrap) => {
  const track = wrap.querySelector(".hotel-slider");
  wrap.querySelectorAll("[data-dir]").forEach((b) => b.addEventListener("click", () => {
    track.scrollBy({ left: track.clientWidth * 0.7 * Number(b.dataset.dir), behavior: reduceMotion ? "auto" : "smooth" });
  }));
});

/* ---------- FAQ category nav highlight ---------- */
const faqLinks = document.querySelectorAll(".faq-nav a");
if (faqLinks.length && "IntersectionObserver" in window) {
  const map = new Map([...faqLinks].map((a) => [a.getAttribute("href").slice(1), a]));
  const fio = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { faqLinks.forEach((a) => a.classList.remove("is-active")); map.get(e.target.id)?.classList.add("is-active"); } });
  }, { rootMargin: "-30% 0px -60% 0px" });
  document.querySelectorAll(".faq-group").forEach((g) => fio.observe(g));
}

/* ---------- Interest form ---------- */
const form = document.querySelector("#interest-form");
if (form) {
  const validate = () => {
    let firstBad = null;
    form.querySelectorAll("[data-required]").forEach((f) => {
      let ok = true;
      const inputs = f.querySelectorAll("input, select, textarea");
      if (f.dataset.required === "group") ok = [...inputs].some((i) => i.checked);
      else inputs.forEach((i) => {
        if (i.type === "checkbox") ok = ok && i.checked;
        else if (i.required || i.dataset.req !== undefined) ok = ok && i.value.trim() !== "" && (i.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value));
      });
      f.classList.toggle("has-err", !ok);
      inputs.forEach((i) => i.type !== "checkbox" && i.type !== "radio" && i.setAttribute("aria-invalid", String(!ok)));
      if (!ok && !firstBad) firstBad = f;
    });
    return firstBad;
  };
  const recheck = () => { if (form.querySelector(".has-err")) validate(); };
  form.addEventListener("input", recheck);
  form.addEventListener("change", recheck);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bad = validate();
    if (bad) { bad.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); bad.querySelector("input, select, textarea")?.focus({ preventScroll: true }); return; }
    // In Wix Studio this form is rebuilt with Wix Forms, which stores submissions + emails Nina.
    form.hidden = true;
    const ok = document.querySelector(".form-success");
    ok.classList.add("is-shown");
    ok.setAttribute("tabindex", "-1");
    ok.focus();
    ok.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  });
}

/* ---------- Page transitions ---------- */
const veil = document.createElement("div");
veil.className = "veil";
document.body.append(veil);
requestAnimationFrame(() => {
  document.body.classList.add("is-loaded");
  document.querySelector(".hero")?.classList.add("is-ready");
});
window.addEventListener("pageshow", (e) => { if (e.persisted) document.body.classList.remove("is-leaving"); });
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a || reduceMotion || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
  const href = a.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http") || href.includes("#")) return;
  e.preventDefault();
  setMenu(false);
  document.body.classList.add("is-leaving");
  setTimeout(() => { window.location.href = href; }, 320);
});
