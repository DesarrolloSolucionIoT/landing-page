// EduSpace runtime i18n — zero build step, browser-only.
// Single source of truth for every translatable string.
// Dictionaries are flat dotted keys (e.g. "nav.home") so the DOM can
// reference them via data-i18n="..." without parsing nested objects.

const TRANSLATIONS = {
  en: {
    "meta.title": "EduSpace - School Management & Logistics Platform",
    "meta.description": "EduSpace is a comprehensive school management and logistics platform. Optimize educational infrastructure, manage staff, and streamline operations.",
    "meta.keywords": "school management, educational logistics, facility management, staff coordination, education software, eduspace",
    "meta.ogDescription": "Optimize your educational institution's management with EduSpace. Streamline operations, manage staff, and track resources.",

    "nav.home": "Home",
    "nav.about": "About us",
    "nav.team": "Team",
    "nav.tools": "Tools",
    "nav.package": "Package",
    "nav.contact": "Contact",
    "nav.langToggle": "ES",
    "nav.signUp": "Start Now",

    "home.title": "DEVELOP YOUR INSTITUTION",
    "home.description": "Platform that simplifies the management of educational infrastructures.",
    "home.imageAlt": "Businessman smiling pointing at a laptop with futuristic graphics",
    "home.ctaPrimary": "Start Now",
    "home.ctaBeta": "Try Beta",

    "about.title": "About Us",
    "about.body": "EduSpace is a startup focused on optimizing the management of educational spaces in large institutions. Our platform enhances staff coordination, logs classroom and sports facility data, and manages personnel information. It provides detailed inventory control of equipment and resources, improving operational efficiency and communication within the institution.",
    "about.imageAlt": "EduSpace Team Collaboration",

    "team.title": "Our Development Team",
    "team.role.developer": "Developer",

    "tools.title": "Tools",
    "tools.spaceManager.title": "Space Manager",
    "tools.spaceManager.body": "Tracks classrooms, sport facilities, and equipment, with easy assignment and reservation management.",
    "tools.maintenance.title": "Maintenance & Tickets",
    "tools.maintenance.body": "Report issues, assign responsible staff, prioritize incidents, and track their status until resolution.",
    "tools.staff.title": "Staff Coordinator",
    "tools.staff.body": "Centralizes staff management and reassigns duties automatically in case of absences.",

    "dashboards.admin.title": "DASHBOARD ADMIN",
    "dashboards.admin.body": "The Admin Dashboard provides a comprehensive view of all operations within the institution. Administrators can manage classrooms, sports facilities, and equipment, track room availability and occupancy, and monitor student movements in real time. By centralizing these functions, the Admin Dashboard enhances administrative ability to optimize decision-making and resource allocation.",
    "dashboards.admin.imageAlt": "EduSpace Admin Dashboard Interface",
    "dashboards.edu.title": "DASHBOARD EDUCATION",
    "dashboards.edu.body": "Designed for teachers and staff, the Education Dashboard streamlines day-to-day operations by offering tools to manage schedules, reserve classrooms or shared spaces, and track the condition of equipment. Users receive instant notifications about changes in classroom assignments, maintenance updates, or other relevant events.",
    "dashboards.edu.imageAlt": "EduSpace Education Dashboard Interface",

    "testimonials.title": "What our customers saying",
    "testimonials.role.admin": "Admin",
    "testimonials.role.educational": "Educational",
    "testimonials.1.body": "EduSpace has drastically simplified our classroom and facility management. What used to take hours of coordination is now handled with just a few clicks. It's a game changer for our administrative team.",
    "testimonials.2.body": "The automatic notifications about classroom changes keep us informed in real time. I no longer have to worry about missing important updates—it's all delivered right to me.",
    "testimonials.3.body": "Thanks to EduSpace, we can plan the use of our laboratories much more efficiently. The automatic scheduling suggestions have saved us hours of coordination and reduced conflicts over double-booked spaces.",
    "testimonials.4.body": "Booking sports facilities and shared spaces has never been easier. The process is intuitive and saves me a lot of time when planning my classes.",

    "plans.title": "Choose your ideal plan",
    "plans.perMonth": "/month",
    "plans.basic.tier": "Basic",
    "plans.medium.tier": "Medium",
    "plans.premium.tier": "Premium",
    "plans.basic.feature.staff": "Registered personnel: Up to 10 people (teachers, administrative staff, cleaning staff, etc.).",
    "plans.basic.feature.environments": "Registered educational environments: Up to 5 environments (classrooms, laboratories, etc.).",
    "plans.basic.feature.sports": "Sports facilities: Up to 2 sports facilities.",
    "plans.basic.feature.teachers": "Teachers in charge: 10 teachers.",
    "plans.basic.feature.notifications": "Classroom and meeting change notifications: Included.",
    "plans.basic.feature.visualization": "Visualization of occupied and available spaces: Basic.",
    "plans.basic.feature.damage": "Damage reporting: Limited functionality to one report per month.",
    "plans.basic.feature.support": "Support: Limited support via email queries (response within 72 hours).",
    "plans.medium.feature.staff": "Registered personnel: Up to 50 people (teachers, administrative staff, cleaning staff, etc.).",
    "plans.medium.feature.environments": "Registered educational environments: Up to 20 environments.",
    "plans.medium.feature.sports": "Sports facilities: Up to 10 sports facilities.",
    "plans.medium.feature.teachers": "Teachers in charge: Up to 30 teachers.",
    "plans.medium.feature.notifications": "Classroom and meeting change notifications: Advanced (with real-time automatic alerts).",
    "plans.medium.feature.visualization": "Visualization of occupied and available spaces: Detailed.",
    "plans.medium.feature.damage": "Damage reporting: Up to 5 reports per month, with medium priority resolution.",
    "plans.medium.feature.support": "Support: Priority support with response within 48 hours.",
    "plans.premium.feature.staff": "Registered personnel: Unlimited.",
    "plans.premium.feature.environments": "Registered educational environments: Unlimited.",
    "plans.premium.feature.sports": "Sports facilities: Unlimited.",
    "plans.premium.feature.teachers": "Teachers in charge: Flexible assignment of any number of teachers.",
    "plans.premium.feature.notifications": "Classroom and meeting change notifications: Fully customizable with real-time notifications.",
    "plans.premium.feature.visualization": "Visualization of occupied and available spaces: Advanced visualization with charts and usage predictions.",
    "plans.premium.feature.damage": "Damage reporting: Unlimited with high-priority resolution.",
    "plans.premium.feature.support": "Support: Premium support with response in 24 hours or less, including phone support and live chat.",

    "contact.title": "Contact us",
    "contact.email": "Email",
    "contact.emailPlaceholder": "Enter Email",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Enter Message",
    "contact.phone": "Phone Number",
    "contact.phonePlaceholder": "Enter Phone Number",
    "contact.subject": "Title",
    "contact.subjectPlaceholder": "Enter Title",
    "contact.submit": "Submit",
    "contact.successMessage": "Message sent successfully!",

    "footer.navigate": "Navigate",
    "footer.socialMedia": "Social Media",
    "footer.about": "About",
    "footer.privacy": "Privacy & Policy",
    "footer.terms": "Terms & Conditions",
    "footer.contact": "Contact us",
    "footer.complaintsBook": "Complaints Book",

    "backToTop": "Go to top",
  },

  es: {
    "meta.title": "EduSpace - Plataforma de Gestión y Logística Escolar",
    "meta.description": "EduSpace es una plataforma integral de gestión y logística escolar. Optimice la infraestructura educativa, gestione el personal y agilice las operaciones.",
    "meta.keywords": "gestión escolar, logística educativa, administración de instalaciones, coordinación de personal, software educativo, eduspace",
    "meta.ogDescription": "Optimice la gestión de su institución educativa con EduSpace. Agilice operaciones, gestione personal y rastree recursos.",

    "nav.home": "Inicio",
    "nav.about": "Sobre Nosotros",
    "nav.team": "Equipo",
    "nav.tools": "Herramientas",
    "nav.package": "Planes",
    "nav.contact": "Contactanos",
    "nav.langToggle": "EN",
    "nav.signUp": "Empieza Ahora",

    "home.title": "DESARROLLA TU INSTITUCIÓN",
    "home.description": "Plataforma que simplifica la gestión de infraestructuras educativas.",
    "home.imageAlt": "Hombre de negocios sonriendo apuntando a una laptop con gráficos futuristas",
    "home.ctaPrimary": "Empieza Ahora",
    "home.ctaBeta": "Prueba la Beta",

    "about.title": "Sobre Nosotros",
    "about.body": "EduSpace es una startup enfocada en optimizar la gestión de espacios educativos en grandes instituciones. Nuestra plataforma mejora la coordinación del personal, registra datos de aulas e instalaciones deportivas, y gestiona la información del personal. Ofrece un control detallado de inventarios de equipos y recursos, mejorando la eficiencia operativa y la comunicación dentro de la institución.",
    "about.imageAlt": "Colaboración del equipo EduSpace",

    "team.title": "Nuestro Equipo de Desarrollo",
    "team.role.developer": "Desarrollador",

    "tools.title": "Herramientas",
    "tools.spaceManager.title": "Gestor de Espacios",
    "tools.spaceManager.body": "Rastrea aulas, instalaciones deportivas y equipos, con una fácil gestión de asignaciones y reservas.",
    "tools.maintenance.title": "Mantenimiento & Tickets",
    "tools.maintenance.body": "Reporta averías, asigna responsables, prioriza incidencias y haz seguimiento del estado hasta su resolución.",
    "tools.staff.title": "Coordinador de Personal",
    "tools.staff.body": "Centraliza la gestión del personal y reasigna las tareas automáticamente en caso de ausencias.",

    "dashboards.admin.title": "DASHBOARD ADMIN",
    "dashboards.admin.body": "El Dashboard Administrativo proporciona una vista completa de todas las operaciones dentro de la institución. Los administradores pueden gestionar aulas, instalaciones deportivas y equipos, rastrear la disponibilidad y ocupación de las salas, y monitorear los movimientos de los estudiantes en tiempo real. Al centralizar estas funciones, el Dashboard Administrativo mejora la capacidad administrativa para optimizar la toma de decisiones y la asignación de recursos.",
    "dashboards.admin.imageAlt": "Interfaz del Panel Administrativo de EduSpace",
    "dashboards.edu.title": "DASHBOARD EDUCACIÓN",
    "dashboards.edu.body": "Diseñado para docentes y personal, el Dashboard Educativo agiliza las operaciones diarias al ofrecer herramientas para gestionar horarios, reservar aulas o espacios compartidos, y rastrear el estado de los equipos. Los usuarios reciben notificaciones instantáneas sobre cambios en las asignaciones de aulas, actualizaciones de mantenimiento u otros eventos relevantes.",
    "dashboards.edu.imageAlt": "Interfaz del Panel Educativo de EduSpace",

    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.role.admin": "Administrador",
    "testimonials.role.educational": "Docente",
    "testimonials.1.body": "EduSpace ha simplificado drásticamente nuestra gestión de aulas e instalaciones. Lo que antes tomaba horas de coordinación, ahora se maneja con solo unos clics. Es un cambio total para nuestro equipo administrativo.",
    "testimonials.2.body": "Las notificaciones automáticas sobre los cambios de aulas nos mantienen informados en tiempo real. Ya no tengo que preocuparme por perder actualizaciones importantes, todo se entrega directamente.",
    "testimonials.3.body": "Gracias a EduSpace, podemos planificar mejor el uso de nuestros laboratorios. Las sugerencias automáticas de horarios nos han ahorrado horas de coordinación y redujeron los conflictos por espacios duplicados.",
    "testimonials.4.body": "Reservar instalaciones deportivas y espacios compartidos nunca ha sido tan fácil. El proceso es intuitivo y me ahorra mucho tiempo al planificar mis clases.",

    "plans.title": "Selecciona tu plan ideal",
    "plans.perMonth": "/mes",
    "plans.basic.tier": "Básico",
    "plans.medium.tier": "Medio",
    "plans.premium.tier": "Premium",
    "plans.basic.feature.staff": "Personal registrado: Hasta 10 personas (profesores, personal administrativo, personal de limpieza, etc.).",
    "plans.basic.feature.environments": "Entornos educativos registrados: Hasta 5 entornos (aulas, laboratorios, etc.).",
    "plans.basic.feature.sports": "Espacios deportivos: Hasta 2 espacios deportivos.",
    "plans.basic.feature.teachers": "Profesores a cargo: 10 profesores.",
    "plans.basic.feature.notifications": "Notificaciones de cambios de aula y reuniones: Incluidas.",
    "plans.basic.feature.visualization": "Visualización de espacios ocupados y libres: Básica.",
    "plans.basic.feature.damage": "Notificación de averías: Funcionalidad limitada a un informe mensual.",
    "plans.basic.feature.support": "Soporte: Soporte limitado a consultas por correo electrónico (respuesta en 72 horas).",
    "plans.medium.feature.staff": "Personal registrado: Hasta 50 personas (profesores, personal administrativo, personal de limpieza, etc.).",
    "plans.medium.feature.environments": "Entornos educativos registrados: Hasta 20 entornos.",
    "plans.medium.feature.sports": "Espacios deportivos: Hasta 10 espacios deportivos.",
    "plans.medium.feature.teachers": "Profesores a cargo: Hasta 30 profesores.",
    "plans.medium.feature.notifications": "Notificaciones de cambios de aulas y reuniones: Avanzadas (con alertas automáticas en tiempo real).",
    "plans.medium.feature.visualization": "Visualización de espacios ocupados y libres: Detallada.",
    "plans.medium.feature.damage": "Reporte de fallas: Hasta 5 reportes mensuales, con prioridad media en resolución.",
    "plans.medium.feature.support": "Soporte: Soporte prioritario con respuesta en 48 horas.",
    "plans.premium.feature.staff": "Personal registrado: Ilimitado.",
    "plans.premium.feature.environments": "Entornos educativos registrados: Ilimitado.",
    "plans.premium.feature.sports": "Instalaciones deportivas: Ilimitado.",
    "plans.premium.feature.teachers": "Docentes a cargo: Asignación flexible de cualquier número de docentes.",
    "plans.premium.feature.notifications": "Notificaciones de cambios de aulas y reuniones: Personalización completa y notificaciones en tiempo real.",
    "plans.premium.feature.visualization": "Visualización de espacios ocupados y libres: Visualización avanzada con gráficos y predicciones de uso.",
    "plans.premium.feature.damage": "Reporte de fallas: Ilimitado con resolución de alta prioridad.",
    "plans.premium.feature.support": "Soporte: Soporte Premium con respuesta en 24 horas o menos, incluyendo soporte telefónico y chat en vivo.",

    "contact.title": "Contáctanos",
    "contact.email": "Email",
    "contact.emailPlaceholder": "Ingresa tu Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Ingresa tu Mensaje",
    "contact.phone": "Número de Teléfono",
    "contact.phonePlaceholder": "Ingresa tu Número de Teléfono",
    "contact.subject": "Asunto",
    "contact.subjectPlaceholder": "Ingresa el Asunto",
    "contact.submit": "Enviar",
    "contact.successMessage": "¡Mensaje enviado con éxito!",

    "footer.navigate": "Navegar",
    "footer.socialMedia": "Redes Sociales",
    "footer.about": "Acerca de",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.contact": "Contáctanos",
    "footer.complaintsBook": "Libro de Reclamaciones",

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
// Supported attributes:
//   data-i18n              -> textContent
//   data-i18n-alt          -> alt attribute
//   data-i18n-placeholder  -> placeholder attribute
//   data-i18n-title        -> title attribute
//   data-i18n-content      -> content attribute (for <meta>)
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

  // <title> uses textContent already, but also keep document.title in sync.
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
