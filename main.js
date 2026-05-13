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
});

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
  if (typeof Swiper === "undefined" || !document.querySelector(".swiper")) return;
  new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      0:    { slidesPerView: 1 },
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
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
