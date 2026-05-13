// Repeating card data extracted from the HTML so the markup stops repeating
// the same skeleton 3-5 times. Translatable strings reference i18n keys; raw
// values (image paths, real names) live here directly.

const TEAM = [
  { name: "Andrés Alberto Torres García",  photo: "assets/andres.jpeg", roleKey: "team.role.developer" },
  { name: "Camila Cristina Loli Ramirez",  photo: "assets/camila.jpg",  roleKey: "team.role.developer" },
  { name: "Oscar Josué Antayhua Castillo", photo: "assets/oscar.jpg",   roleKey: "team.role.developer" },
  { name: "Luis Andrés Alva Abanto",       photo: "assets/luis.png",    roleKey: "team.role.developer" },
  { name: "Angie Christina Yalán Zhang",   photo: "assets/angie.jpg",   roleKey: "team.role.developer" },
];

const TESTIMONIALS = [
  { bodyKey: "testimonials.1.body", name: "John Adams",      roleKey: "testimonials.role.admin",       photo: "assets/client-1.jpg" },
  { bodyKey: "testimonials.2.body", name: "Emily Thompson",  roleKey: "testimonials.role.educational", photo: "assets/client-2.jpg" },
  { bodyKey: "testimonials.3.body", name: "Sarah Lee",       roleKey: "testimonials.role.admin",       photo: "assets/client-3.jpg" },
  { bodyKey: "testimonials.4.body", name: "David Patel",     roleKey: "testimonials.role.educational", photo: "assets/client-4.jpg" },
];

const PLAN_FEATURES = ["staff", "environments", "sports", "teachers", "notifications", "visualization", "damage", "support"];
const PLANS = [
  { id: "basic",   className: "free",    tierKey: "plans.basic.tier",   price: "08.00" },
  { id: "medium",  className: "medium",  tierKey: "plans.medium.tier",  price: "15.00" },
  { id: "premium", className: "premium", tierKey: "plans.premium.tier", price: "30.00" },
];

const T = (key) => window.EduSpaceI18n.t(key, window.EduSpaceI18n.current);

function renderTeam(container) {
  container.innerHTML = TEAM.map((member) => `
    <div class="column">
      <div class="card">
        <div class="img">
          <img src="${member.photo}" alt="${member.name} - ${T(member.roleKey)}">
        </div>
        <h3>${member.name}</h3>
        <p data-i18n="${member.roleKey}">${T(member.roleKey)}</p>
        <div class="icons">
          <a href="#" aria-label="Twitter"><i class="ri-twitter-x-line"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a>
          <a href="#" aria-label="GitHub"><i class="ri-github-fill"></i></a>
          <a href="#" aria-label="Email"><i class="ri-mail-line"></i></a>
        </div>
      </div>
    </div>
  `).join("");
}

function renderTestimonials(container) {
  container.innerHTML = TESTIMONIALS.map((tst) => `
    <div class="swiper-slide">
      <div class="client__card">
        <div class="client__content">
          <div class="client__rating">
            ${'<span><i class="ri-star-fill"></i></span>'.repeat(5)}
          </div>
          <p data-i18n="${tst.bodyKey}">${T(tst.bodyKey)}</p>
        </div>
        <div class="client__details">
          <img src="${tst.photo}" alt="${tst.name}" />
          <div>
            <h4>${tst.name}</h4>
            <h5 data-i18n="${tst.roleKey}">${T(tst.roleKey)}</h5>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderPlans(container) {
  container.innerHTML = PLANS.map((plan) => `
    <div class="membership__card ${plan.className}">
      <h4>EduSpace</h4>
      <p data-i18n="${plan.tierKey}">${T(plan.tierKey)}</p>
      <ul>
        ${PLAN_FEATURES.map((f) => {
          const key = `plans.${plan.id}.feature.${f}`;
          return `<li><span><i class="ri-check-line"></i></span><span data-i18n="${key}">${T(key)}</span></li>`;
        }).join("")}
      </ul>
      <h3><sup>$</sup>${plan.price}<span data-i18n="plans.perMonth">${T("plans.perMonth")}</span></h3>
    </div>
  `).join("");
}

function renderAll() {
  const teamGrid = document.getElementById("team-grid");
  const testimonialsTrack = document.getElementById("testimonials-track");
  const plansGrid = document.getElementById("plans-grid");

  if (teamGrid) renderTeam(teamGrid);
  if (testimonialsTrack) renderTestimonials(testimonialsTrack);
  if (plansGrid) renderPlans(plansGrid);
}

window.EduSpaceData = { renderAll };
