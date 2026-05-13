// EduSpace runtime i18n — zero build step, browser-only.
// Single source of truth for every translatable string.
// Dictionaries are flat dotted keys (e.g. "nav.home") so the DOM can
// reference them via data-i18n="..." without parsing nested objects.

const TRANSLATIONS = {
  en: {
    "meta.title": "EduSpace — Smart Coordination & IoT Monitoring for Educational Institutions",
    "meta.description": "EduSpace coordinates staff, reservations, and incidents while IoT sensors monitor classrooms in real time. Cut operational waste and reduce up to 30% in energy costs.",
    "meta.keywords": "school management, IoT classrooms, smart campus, sustainability, space reservation, real-time monitoring, education software, eduspace",
    "meta.ogDescription": "Coordinate staff, reserve spaces, and monitor classrooms in real time with EduSpace — a smart platform for educational institutions.",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.iot": "IoT",
    "nav.team": "Team",
    "nav.tools": "Platform",
    "nav.package": "Plans",
    "nav.contact": "Contact",
    "nav.langToggle": "ES",
    "nav.signUp": "Start Now",

    "home.eyebrow": "Smart Campus · IoT",
    "home.titleLead": "Run your institution",
    "home.titleAccent": "with intelligence, not friction",
    "home.description": "EduSpace coordinates staff, reservations and incidents in one place — while IoT sensors monitor occupancy, temperature and humidity in every classroom. Decisions in real time, sustainability built in.",
    "home.imageAlt": "Students collaborating in a modern educational environment",
    "home.ctaPrimary": "Start Now",
    "home.metric1.value": "+25%",
    "home.metric1.label": "Inventory control",
    "home.metric2.value": "+20%",
    "home.metric2.label": "Operational productivity",
    "home.metric3.value": "−30%",
    "home.metric3.label": "Energy waste",

    "about.eyebrow": "Why EduSpace",
    "about.title": "Sustainable technology for the institutions that lead the future",
    "about.body": "We started EduSpace to solve a specific problem: large educational institutions losing hours coordinating classrooms, spaces and staff — and burning energy on rooms nobody is using. Our platform integrates space management, reservations, breakdown reporting and IoT monitoring in a single experience, so administrators and teachers make decisions based on real data, not guesswork.",
    "about.imageAlt": "Aerial view of forest and turquoise water — sustainability",

    "iot.eyebrow": "New · IoT Monitoring",
    "iot.titleLead": "Sensors that turn each classroom into",
    "iot.titleAccent": "live, sustainable data",
    "iot.body": "EduSpace integrates environmental sensors to detect presence, temperature, humidity and lighting in real time. Automatic alerts when thresholds are crossed, intelligent lighting control, and an end to scheduling rooms that are already occupied.",
    "iot.feature.presence.title": "Real-time occupancy",
    "iot.feature.presence.body": "Know which classrooms are in use and which are free at any moment, without manual reporting.",
    "iot.feature.environment.title": "Environmental thresholds",
    "iot.feature.environment.body": "Temperature, humidity and air quality monitored continuously. Severity-graded alerts (LOW · MEDIUM · HIGH · CRITICAL).",
    "iot.feature.energy.title": "Automatic lighting control",
    "iot.feature.energy.body": "Lights respond to actual presence. Up to 30% reduction in unnecessary energy spend, validated against reference cases.",
    "iot.feature.alerts.title": "Severity-graded alerts",
    "iot.feature.alerts.body": "Every event reaches the right person with the right urgency — no more noise in the inbox.",
    "iot.imageAlt": "Real-time IoT analytics dashboard",

    "sustainability.eyebrow": "Sustainability",
    "sustainability.title": "Every empty classroom is energy that the planet didn't need to spend",
    "sustainability.body": "Operational energy is 20–30% of the cost of running a large educational facility. EduSpace measures occupancy in real time and lets you act on it — that's the sustainability our mission talks about.",

    "team.eyebrow": "FullStack Fury",
    "team.title": "The team building EduSpace",
    "team.role.developer": "Developer",

    "tools.eyebrow": "Platform",
    "tools.title": "Four contexts, one platform",
    "tools.subtitle": "Modeled with Domain-Driven Design and aligned with how educational institutions actually work.",
    "tools.spaces.title": "Spaces & Resources",
    "tools.spaces.body": "Manage classrooms, sports facilities, equipment and staff. Track availability, occupancy and the people in charge.",
    "tools.reservations.title": "Reservations & Scheduling",
    "tools.reservations.body": "Book spaces without conflicts. Smart suggestions, real-time updates, and a single source of truth for everyone.",
    "tools.breakdown.title": "Breakdown Management",
    "tools.breakdown.body": "Report incidents, assign responsibles, prioritize by severity, and follow status until resolution.",
    "tools.iot.title": "IoT Monitoring",
    "tools.iot.body": "Sensors that watch presence, temperature, humidity and lighting. Alerts, dashboards and decisions in real time.",

    "dashboards.admin.title": "Admin Dashboard",
    "dashboards.admin.body": "A single view over the entire institution. Administrators manage spaces, monitor availability and occupancy in real time, and act on the IoT alerts that matter — making resource allocation a data decision, not a guess.",
    "dashboards.admin.imageAlt": "EduSpace Admin Dashboard interface",
    "dashboards.edu.title": "Teacher Dashboard",
    "dashboards.edu.body": "Built for teachers and academic staff. Reserve spaces, check environmental conditions before class, and receive instant notifications when an assignment, maintenance event or room status changes.",
    "dashboards.edu.imageAlt": "EduSpace Teacher Dashboard interface",

    "testimonials.eyebrow": "Voices",
    "testimonials.title": "How EduSpace shows up in their day",
    "testimonials.role.admin": "Administrator",
    "testimonials.role.educational": "Teacher",
    "testimonials.1.body": "Coordinating fifty classrooms used to take half my morning. Now I open the dashboard, I see what's occupied and what's not, and I redirect resources in minutes. The energy bill went down with no extra effort from my team.",
    "testimonials.2.body": "Before class I can already see if the room is at a comfortable temperature, or if I need to switch labs. The environmental alerts changed the way I plan my sessions.",
    "testimonials.3.body": "We stopped double-booking laboratories the day we connected EduSpace. The IoT sensors confirm what the calendar already says — and when they don't match, we know something needs attention.",
    "testimonials.4.body": "Reserving the sports field stopped being a phone call. The mobile app shows me availability in real time and I'm done in thirty seconds.",

    "plans.eyebrow": "Plans",
    "plans.title": "Choose the plan that fits your institution",
    "plans.subtitle": "All plans include staff coordination, reservations and breakdown management. IoT Monitoring scales with the tier.",
    "plans.perMonth": "/month",
    "plans.popular": "Most chosen",
    "plans.basic.tier": "Starter",
    "plans.medium.tier": "Growth",
    "plans.premium.tier": "Scale",
    "plans.basic.feature.staff": "Up to 10 staff members (teachers, admins, support).",
    "plans.basic.feature.environments": "Up to 5 educational spaces (classrooms, labs).",
    "plans.basic.feature.sports": "Up to 2 sports facilities.",
    "plans.basic.feature.teachers": "10 teachers in charge.",
    "plans.basic.feature.notifications": "Room and meeting change notifications.",
    "plans.basic.feature.visualization": "Basic occupancy and availability view.",
    "plans.basic.feature.iot": "IoT Monitoring — read-only on 1 sensor zone.",
    "plans.basic.feature.support": "Email support (72h response).",
    "plans.medium.feature.staff": "Up to 50 staff members.",
    "plans.medium.feature.environments": "Up to 20 educational spaces.",
    "plans.medium.feature.sports": "Up to 10 sports facilities.",
    "plans.medium.feature.teachers": "Up to 30 teachers in charge.",
    "plans.medium.feature.notifications": "Real-time alerts on assignments and changes.",
    "plans.medium.feature.visualization": "Detailed occupancy visualization.",
    "plans.medium.feature.iot": "IoT Monitoring — alerts and dashboards on 10 zones.",
    "plans.medium.feature.support": "Priority support (48h response).",
    "plans.premium.feature.staff": "Unlimited staff.",
    "plans.premium.feature.environments": "Unlimited educational spaces.",
    "plans.premium.feature.sports": "Unlimited sports facilities.",
    "plans.premium.feature.teachers": "Flexible teacher assignment.",
    "plans.premium.feature.notifications": "Fully customizable real-time notifications.",
    "plans.premium.feature.visualization": "Advanced visualization with charts and usage forecasts.",
    "plans.premium.feature.iot": "IoT Monitoring — unlimited zones, automation rules, API access.",
    "plans.premium.feature.support": "Premium support (24h) with phone and live chat.",

    "contact.title": "Talk to us",
    "contact.email": "Email",
    "contact.emailPlaceholder": "you@institution.edu",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your institution",
    "contact.phone": "Phone",
    "contact.phonePlaceholder": "Enter phone number",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "Enter subject",
    "contact.submit": "Send message",
    "contact.successMessage": "Message sent. We'll get back to you soon.",

    "footer.navigate": "Navigate",
    "footer.socialMedia": "Social",
    "footer.about": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.contact": "Contact us",

    "backToTop": "Back to top",
  },

  es: {
    "meta.title": "EduSpace — Coordinación inteligente y monitoreo IoT para instituciones educativas",
    "meta.description": "EduSpace coordina personal, reservas e incidencias mientras sensores IoT monitorean cada aula en tiempo real. Reduce el desperdicio operativo y hasta 30% en costos energéticos.",
    "meta.keywords": "gestión escolar, aulas IoT, campus inteligente, sostenibilidad, reserva de espacios, monitoreo en tiempo real, software educativo, eduspace",
    "meta.ogDescription": "Coordina personal, reserva espacios y monitorea tus aulas en tiempo real con EduSpace — la plataforma inteligente para instituciones educativas.",

    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.iot": "IoT",
    "nav.team": "Equipo",
    "nav.tools": "Plataforma",
    "nav.package": "Planes",
    "nav.contact": "Contacto",
    "nav.langToggle": "EN",
    "nav.signUp": "Empezar",

    "home.eyebrow": "Campus inteligente · IoT",
    "home.titleLead": "Gestiona tu institución",
    "home.titleAccent": "con inteligencia, no con fricción",
    "home.description": "EduSpace coordina personal, reservas e incidencias en un solo lugar — y los sensores IoT monitorean ocupación, temperatura y humedad en cada aula. Decisiones en tiempo real, sostenibilidad incorporada.",
    "home.imageAlt": "Estudiantes colaborando en un entorno educativo moderno",
    "home.ctaPrimary": "Empezar ahora",
    "home.metric1.value": "+25%",
    "home.metric1.label": "Control de inventario",
    "home.metric2.value": "+20%",
    "home.metric2.label": "Productividad operativa",
    "home.metric3.value": "−30%",
    "home.metric3.label": "Desperdicio energético",

    "about.eyebrow": "Por qué EduSpace",
    "about.title": "Tecnología sostenible para las instituciones que lideran el futuro",
    "about.body": "Empezamos EduSpace para resolver un problema concreto: grandes instituciones educativas perdiendo horas coordinando aulas, espacios y personal — y quemando energía en salones que nadie usa. Nuestra plataforma integra gestión de espacios, reservas, reporte de incidencias y monitoreo IoT en una sola experiencia, para que administradores y docentes decidan con datos reales, no con suposiciones.",
    "about.imageAlt": "Vista aérea de bosque y agua turquesa — sostenibilidad",

    "iot.eyebrow": "Nuevo · Monitoreo IoT",
    "iot.titleLead": "Sensores que convierten cada aula en",
    "iot.titleAccent": "datos vivos y sostenibles",
    "iot.body": "EduSpace integra sensores ambientales para detectar presencia, temperatura, humedad e iluminación en tiempo real. Alertas automáticas cuando se cruzan umbrales, control inteligente de luces, y se acaba el problema de programar aulas que ya están ocupadas.",
    "iot.feature.presence.title": "Ocupación en tiempo real",
    "iot.feature.presence.body": "Conoce qué aulas están en uso y cuáles libres en cualquier momento, sin reportes manuales.",
    "iot.feature.environment.title": "Umbrales ambientales",
    "iot.feature.environment.body": "Temperatura, humedad y calidad del aire monitoreadas continuamente. Alertas con severidad (LOW · MEDIUM · HIGH · CRITICAL).",
    "iot.feature.energy.title": "Iluminación automática",
    "iot.feature.energy.body": "Las luces responden a la presencia real. Hasta 30% menos consumo innecesario, validado contra casos de referencia.",
    "iot.feature.alerts.title": "Alertas con severidad",
    "iot.feature.alerts.body": "Cada evento llega a la persona correcta con la urgencia correcta — sin ruido en la bandeja.",
    "iot.imageAlt": "Panel de analítica IoT en tiempo real",

    "sustainability.eyebrow": "Sostenibilidad",
    "sustainability.title": "Cada aula vacía es energía que el planeta no necesitaba gastar",
    "sustainability.body": "La energía operativa representa el 20–30% del costo de operar una institución educativa grande. EduSpace mide la ocupación en tiempo real y te permite actuar — esa es la sostenibilidad de la que habla nuestra misión.",

    "team.eyebrow": "FullStack Fury",
    "team.title": "El equipo que construye EduSpace",
    "team.role.developer": "Desarrollador",

    "tools.eyebrow": "Plataforma",
    "tools.title": "Cuatro contextos, una plataforma",
    "tools.subtitle": "Modelados con Domain-Driven Design y alineados con cómo trabajan realmente las instituciones educativas.",
    "tools.spaces.title": "Espacios y Recursos",
    "tools.spaces.body": "Administra aulas, instalaciones deportivas, equipos y personal. Rastrea disponibilidad, ocupación y responsables.",
    "tools.reservations.title": "Reservas y Horarios",
    "tools.reservations.body": "Reserva sin conflictos. Sugerencias inteligentes, actualizaciones en vivo y una única fuente de verdad para todos.",
    "tools.breakdown.title": "Gestión de Incidencias",
    "tools.breakdown.body": "Reporta fallas, asigna responsables, prioriza por severidad y haz seguimiento hasta la resolución.",
    "tools.iot.title": "Monitoreo IoT",
    "tools.iot.body": "Sensores que observan presencia, temperatura, humedad e iluminación. Alertas, paneles y decisiones en tiempo real.",

    "dashboards.admin.title": "Dashboard Administrativo",
    "dashboards.admin.body": "Una vista única de toda la institución. Los administradores gestionan espacios, monitorean disponibilidad y ocupación en tiempo real, y actúan sobre las alertas IoT que importan — convirtiendo la asignación de recursos en una decisión basada en datos, no en suposiciones.",
    "dashboards.admin.imageAlt": "Interfaz del Dashboard Administrativo de EduSpace",
    "dashboards.edu.title": "Dashboard Docente",
    "dashboards.edu.body": "Pensado para docentes y personal académico. Reserva espacios, revisa las condiciones ambientales antes de la clase y recibe notificaciones instantáneas cuando una asignación, evento de mantenimiento o estado de aula cambia.",
    "dashboards.edu.imageAlt": "Interfaz del Dashboard Docente de EduSpace",

    "testimonials.eyebrow": "Voces",
    "testimonials.title": "Cómo aparece EduSpace en su día",
    "testimonials.role.admin": "Administradora",
    "testimonials.role.educational": "Docente",
    "testimonials.1.body": "Coordinar cincuenta aulas me llevaba media mañana. Ahora abro el dashboard, veo qué está ocupado y qué no, y redirijo recursos en minutos. La cuenta de electricidad bajó sin esfuerzo extra del equipo.",
    "testimonials.2.body": "Antes de entrar a clase ya puedo ver si el aula está a una temperatura cómoda, o si conviene cambiar de laboratorio. Las alertas ambientales me cambiaron la forma de planificar.",
    "testimonials.3.body": "Dejamos de duplicar reservas en los laboratorios el día que conectamos EduSpace. Los sensores IoT confirman lo que dice el calendario — y cuando no coinciden, sabemos que algo necesita atención.",
    "testimonials.4.body": "Reservar la cancha dejó de ser una llamada telefónica. La app móvil me muestra la disponibilidad en tiempo real y termino en treinta segundos.",

    "plans.eyebrow": "Planes",
    "plans.title": "Elige el plan que se adapta a tu institución",
    "plans.subtitle": "Todos los planes incluyen coordinación de personal, reservas e incidencias. El Monitoreo IoT escala con el plan.",
    "plans.perMonth": "/mes",
    "plans.popular": "Más elegido",
    "plans.basic.tier": "Starter",
    "plans.medium.tier": "Growth",
    "plans.premium.tier": "Scale",
    "plans.basic.feature.staff": "Hasta 10 personas (docentes, administrativos, soporte).",
    "plans.basic.feature.environments": "Hasta 5 espacios educativos (aulas, laboratorios).",
    "plans.basic.feature.sports": "Hasta 2 instalaciones deportivas.",
    "plans.basic.feature.teachers": "10 docentes a cargo.",
    "plans.basic.feature.notifications": "Notificaciones de cambios de aula y reuniones.",
    "plans.basic.feature.visualization": "Vista básica de ocupación y disponibilidad.",
    "plans.basic.feature.iot": "Monitoreo IoT — solo lectura, 1 zona de sensores.",
    "plans.basic.feature.support": "Soporte por email (respuesta en 72h).",
    "plans.medium.feature.staff": "Hasta 50 personas.",
    "plans.medium.feature.environments": "Hasta 20 espacios educativos.",
    "plans.medium.feature.sports": "Hasta 10 instalaciones deportivas.",
    "plans.medium.feature.teachers": "Hasta 30 docentes a cargo.",
    "plans.medium.feature.notifications": "Alertas en tiempo real sobre asignaciones y cambios.",
    "plans.medium.feature.visualization": "Visualización detallada de ocupación.",
    "plans.medium.feature.iot": "Monitoreo IoT — alertas y paneles, 10 zonas.",
    "plans.medium.feature.support": "Soporte prioritario (48h).",
    "plans.premium.feature.staff": "Personal ilimitado.",
    "plans.premium.feature.environments": "Espacios educativos ilimitados.",
    "plans.premium.feature.sports": "Instalaciones deportivas ilimitadas.",
    "plans.premium.feature.teachers": "Asignación flexible de docentes.",
    "plans.premium.feature.notifications": "Notificaciones en tiempo real totalmente personalizables.",
    "plans.premium.feature.visualization": "Visualización avanzada con gráficos y predicciones de uso.",
    "plans.premium.feature.iot": "Monitoreo IoT — zonas ilimitadas, reglas de automatización, API.",
    "plans.premium.feature.support": "Soporte Premium (24h) con teléfono y chat en vivo.",

    "contact.title": "Hablanos",
    "contact.email": "Email",
    "contact.emailPlaceholder": "vos@institucion.edu",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Cuéntanos sobre tu institución",
    "contact.phone": "Teléfono",
    "contact.phonePlaceholder": "Ingresa tu número",
    "contact.subject": "Asunto",
    "contact.subjectPlaceholder": "Ingresa el asunto",
    "contact.submit": "Enviar mensaje",
    "contact.successMessage": "Mensaje enviado. Te respondemos pronto.",

    "footer.navigate": "Navegar",
    "footer.socialMedia": "Redes",
    "footer.about": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.contact": "Contactanos",

    "backToTop": "Ir arriba",
  },
};

const STORAGE_KEY = "eduspace.lang";
const SUPPORTED = ["en", "es"];
const FALLBACK = "en";

function detectInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const nav = (navigator.language || FALLBACK).slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : FALLBACK;
}

function t(key, lang) {
  return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS[FALLBACK]?.[key] ?? key;
}

// Applies translations to every DOM node carrying a data-i18n* attribute.
function applyTranslations(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n, lang);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.setAttribute("alt", t(el.dataset.i18nAlt, lang));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder, lang));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle, lang));
  });
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    el.setAttribute("content", t(el.dataset.i18nContent, lang));
  });

  document.title = t("meta.title", lang);
}

function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = FALLBACK;
  localStorage.setItem(STORAGE_KEY, lang);
  window.EduSpaceI18n.current = lang;
  applyTranslations(lang);
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function toggleLanguage() {
  setLanguage(window.EduSpaceI18n.current === "en" ? "es" : "en");
}

window.EduSpaceI18n = {
  current: detectInitialLang(),
  t,
  applyTranslations,
  setLanguage,
  toggleLanguage,
};
