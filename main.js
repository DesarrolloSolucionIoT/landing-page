// Boot order matters:
//   1. Render dynamic sections (team / testimonials / plans) so Swiper can see slides
//   2. Apply translations to the now-complete DOM
//   3. Init Swiper / ScrollReveal / event handlers
// All bindings null-check first — if a section is removed from index.html the
// page must still load instead of throwing on script load.

document.addEventListener("DOMContentLoaded", () => {
  window.EduSpaceData?.renderAll();
  window.EduSpaceI18n?.applyTranslations(window.EduSpaceI18n.current);

  initMobileMenu();
  initLanguageToggle();
  initSwiper();
  initContactForm();
  initBackToTop();
  initNavScroll();
  initScrollReveal();
  initCounters();
});

function initNavScroll() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle("scrolled", y > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (!menuBtn || !navLinks) return;

  const icon = menuBtn.querySelector("i");
  const setIcon = (open) => icon?.setAttribute("class", open ? "ri-close-line" : "ri-menu-line");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    setIcon(navLinks.classList.contains("open"));
  });
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    setIcon(false);
  });
}

function initLanguageToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn || !window.EduSpaceI18n) return;
  btn.addEventListener("click", () => window.EduSpaceI18n.toggleLanguage());
}

function initSwiper() {
  // Testimonials now use a pure-CSS marquee — no JS init needed.
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("form-message");
  if (!form || !messageBox) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    messageBox.style.display = "block";
    form.reset();
    setTimeout(() => { messageBox.style.display = "none"; }, 3000);
  });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const selectors = [
    "section",
    ".header__metric",
    ".about__card",
    ".iot__card",
    ".experience__card",
    ".sustainability__card",
    ".team__card",
    ".testimonial",
    ".membership__card",
    ".dashboard-description",
    "section h2",
  ];
  const targets = document.querySelectorAll(selectors.join(","));
  targets.forEach((el) => el.classList.add("reveal"));

  if (prefersReduced || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  targets.forEach((el) => observer.observe(el));
}

function initCounters() {
  const nodes = document.querySelectorAll(".header__metric strong");
  if (!nodes.length) return;

  const parse = (text) => {
    const match = text.match(/^([+−-]?)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!match) return null;
    return {
      prefix: match[1] || "",
      value: parseFloat(match[2].replace(",", ".")),
      suffix: match[3] || "",
      decimals: (match[2].split(/[.,]/)[1] || "").length,
    };
  };

  const animate = (el) => {
    const parsed = el._counter || (el._counter = parse(el.textContent.trim()));
    if (!parsed) return;
    const duration = 1400;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = parsed.value * easeOut(progress);
      el.textContent = parsed.prefix + current.toFixed(parsed.decimals) + parsed.suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = parsed.prefix + parsed.value.toFixed(parsed.decimals) + parsed.suffix;
    };
    requestAnimationFrame(step);
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animate(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  nodes.forEach((el) => observer.observe(el));
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const toggle = () => {
    const scrolled = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
    btn.style.display = scrolled ? "flex" : "none";
  };
  window.addEventListener("scroll", toggle);
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  toggle();
}
