(() => {
  "use strict";

  const GATHER_DEFAULT_URL = "https://app.v2.gather.town/app/76400ece-7e37-46b4-b42a-33bfd782d8bb/invite/134174b0-5c9c-47bd-b441-a19a5818b353?copysource=inviteTeamModal";

  const catalog = {
    campus: [
      "Reynosa", "Monterrey", "Ciudad de México", "Guadalajara",
      "Chihuahua", "Cancún", "Culiacán", "Mérida", "Cuernavaca",
      "Ciudad Juárez", "Ciudad Obregón", "Hermosillo", "Saltillo",
      "Nuevo Laredo", "Torreón", "Aguascalientes"
    ],
    careers: [
      "Administración de Empresas", "Comercio y Negocios Internacionales",
      "Contabilidad y Estrategia Financiera", "Derecho",
      "Ingeniería en Desarrollo de Software", "Diseño Gráfico y Animación",
      "Enfermería", "Gastronomía Internacional", "Ingeniería Industrial",
      "Ingeniería en Logística y Cadena de Suministro",
      "Ingeniería en Mecatrónica", "Mercadotecnia", "Nutrición", "Psicología"
    ],
    certificates: [
      "Criminología", "Inteligencia Artificial", "Producción Multimedia y Animación",
      "Inteligencia de Mercados", "Automatización Industrial",
      "Diseño y Programación de Videojuegos", "Turismo"
    ],
    interests: ["Videojuegos", "Deportes", "Música en vivo", "Cine", "Lectura", "Emprendimiento", "Arte", "Voluntariado"],
    groups: ["Robótica", "Debate", "Teatro", "Consejo estudiantil", "Deportes representativos", "Ninguno todavía"],
    challenges: ["Retos creativos", "Trivia y conocimiento", "Retos físicos", "Colaboración en equipo"]
  };

  const fraternities = [
    { name: "Loboses", color: "#2E6E9E", members: 142, cities: 6, careers: 4, points: 1840, icon: "◒", desc: "Energía de altura, estrategia y comunidad entre campus.", image: "https://images.unsplash.com/photo-1715002383611-63488b956401?auto=format&fit=crop&fm=jpg&q=82&w=1000", imageAlt: "Águila en primer plano" },
    { name: "Jaguares", color: "#B8860B", members: 158, cities: 7, careers: 5, points: 1968, icon: "J", desc: "Intensidad, curiosidad y ganas de hacer que pasen cosas.", image: "https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?auto=format&fit=crop&fm=jpg&q=82&w=1000", imageAlt: "Jaguar en primer plano" },
    { name: "Quetzales", color: "#1B7A56", members: 121, cities: 5, careers: 3, points: 1764, icon: "Q", desc: "Creatividad, colaboración y un toque de exploración.", image: "https://images.unsplash.com/photo-1558254588-ee173c5dd703?auto=format&fit=crop&fm=jpg&q=82&w=1000", imageAlt: "Quetzal verde sobre una rama" },
    { name: "Coyotes", color: "#C7451F", members: 137, cities: 6, careers: 4, points: 1821, icon: "C", desc: "Ingenio, adaptabilidad y comunidad que se mueve contigo.", image: "https://images.unsplash.com/photo-1493911324503-e5c8bf9df181?auto=format&fit=crop&fm=jpg&q=82&w=1000", imageAlt: "Coyote caminando en un paisaje árido" },
    { name: "Halcones", color: "#5A3FA6", members: 129, cities: 5, careers: 4, points: 1799, icon: "H", desc: "Visión amplia, disciplina y conexión entre disciplinas.", image: "https://images.unsplash.com/photo-1634847553399-722e688f997a?auto=format&fit=crop&fm=jpg&q=82&w=1000", imageAlt: "Halcón volando" }
  ];

  const classData = [
    { subject: "Programación Orientada a Objetos", career: "Ingeniería en Desarrollo de Software", cities: "Reynosa / Monterrey / Culiacán", time: "Hoy · 6:00pm", status: "live", code: "POO" },
    { subject: "Fundamentos de Mercadotecnia", career: "Mercadotecnia", cities: "Ciudad de México / Guadalajara", time: "Mañana · 10:00am", status: "upcoming", code: "MK" },
    { subject: "Anatomía y Fisiología", career: "Enfermería", cities: "Mérida / Cancún", time: "Jueves · 4:00pm", status: "upcoming", code: "AF" }
  ];

  const fraternityChallenges = [
    { id: "dog", title: "Encuentra un perro con manchas", desc: "En equipo, una persona de tu fraternidad comparte una foto de un perro con manchas y registra dónde lo encontró.", tag: "Exploración", points: 35 },
    { id: "cross-campus", title: "Conecta dos campus", desc: "Encuentra a alguien de un campus distinto al tuyo y completen juntos una mini misión de 60 segundos.", tag: "Multicampus", points: 50 },
    { id: "cross-certificate", title: "Certificados distintos", desc: "Forma una dupla con alguien cuyo certificado sea diferente al tuyo y resuelvan una pregunta relámpago.", tag: "Afinidad", points: 40 },
    { id: "three-cities", title: "3 ciudades, 1 reto", desc: "Consigue que tres integrantes de tres ciudades diferentes respondan el mismo reto creativo.", tag: "Equipo", points: 65 }
  ];

  const projectData = [
    { campus: "Reynosa", career: "Ingeniería en Desarrollo de Software", title: "Red Vecinal 360", team: "Equipo Alfa", score: 94, votes: 126, status: "Líder" , desc: "Plataforma para conectar comercios y servicios locales con rutas inteligentes." },
    { campus: "Monterrey", career: "Ingeniería en Desarrollo de Software", title: "Aula Cero Brecha", team: "Nodo Norte", score: 91, votes: 118, status: "Finalista", desc: "Sistema de acompañamiento académico para estudiantes con riesgo de rezago." },
    { campus: "Ciudad de México", career: "Diseño Gráfico y Animación", title: "Mosaico CDMX", team: "Taller 23", score: 96, votes: 143, status: "Líder", desc: "Sistema de identidad visual para proyectos comunitarios de jóvenes." },
    { campus: "Guadalajara", career: "Diseño Gráfico y Animación", title: "Ritmo Tapatío", team: "Forma GDL", score: 89, votes: 104, status: "Finalista", desc: "Experiencia visual inmersiva para divulgar patrimonio musical local." },
    { campus: "Reynosa", career: "Mercadotecnia", title: "Compra Cerca", team: "Impulso 956", score: 92, votes: 110, status: "Líder", desc: "Campaña de marketing para fortalecer el consumo en negocios de barrio." },
    { campus: "Mérida", career: "Enfermería", title: "Pulso Seguro", team: "Cuidado Maya", score: 95, votes: 137, status: "Líder", desc: "Protocolo de educación preventiva para comunidades con acceso limitado." },
    { campus: "Chihuahua", career: "Ingeniería Industrial", title: "Ruta Cero", team: "Fábrica 17", score: 90, votes: 96, status: "Finalista", desc: "Optimización de recorridos y desperdicios para pequeñas plantas." },
    { campus: "Culiacán", career: "Gastronomía Internacional", title: "Sabor de Origen", team: "Raíz", score: 93, votes: 121, status: "Líder", desc: "Experiencia gastronómica para preservar ingredientes regionales." },
    { campus: "Aguascalientes", career: "Psicología", title: "Pausa", team: "Mente Viva", score: 88, votes: 83, status: "Finalista", desc: "Herramienta de orientación y hábitos para la vida universitaria." },
    { campus: "Hermosillo", career: "Ingeniería en Mecatrónica", title: "AguaSmart", team: "Desierto Lab", score: 94, votes: 115, status: "Líder", desc: "Prototipo de monitoreo de consumo hídrico para campus." }
  ];

  const campusScoresSeed = [
    ["Reynosa", 96], ["Ciudad de México", 95], ["Mérida", 94], ["Culiacán", 93],
    ["Aguascalientes", 92], ["Monterrey", 91], ["Hermosillo", 90], ["Guadalajara", 89],
    ["Chihuahua", 88], ["Cancún", 87], ["Saltillo", 86], ["Torreón", 85],
    ["Cuernavaca", 84], ["Ciudad Juárez", 83], ["Nuevo Laredo", 82], ["Ciudad Obregón", 81]
  ];

  const campusScores = Object.fromEntries(campusScoresSeed.map(([campus, score]) => [campus, score]));
  const challengeCompleted = new Set();
  const projectVotes = new Map(projectData.map((p, i) => [i, p.votes]));

  let currentTab = "classes";
  let profile = null;
  let currentStep = 1;
  let matchRevealed = false;
  let matchStarted = false;
  let profileModalReturnFocus = null;
  let gatherModalReturnFocus = null;
  let gatherTimer = null;
  let matchTimer = null;
  let toastTimer = null;
  let campusFilter = "Todos";
  let careerFilter = "Todas";

  // Estado social simulado: solo existe mientras la app está abierta.
  let profilePhoto = null;
  let galleryPhotos = [];
  const connectedProfiles = new Set();

  const communityProfiles = [
    { id:"ana", name:"Ana Sofía", initials:"AS", campus:"Monterrey", career:"Diseño Gráfico y Animación", certificate:"Producción Multimedia y Animación", interests:["Arte","Cine","Música en vivo"], color:"#C8E600", bio:"Me gusta convertir ideas raras en cosas que sí se pueden ver." },
    { id:"mateo", name:"Mateo Ríos", initials:"MR", campus:"Culiacán", career:"Ingeniería en Desarrollo de Software", certificate:"Inteligencia Artificial", interests:["Videojuegos","Emprendimiento","Robótica"], color:"#2E6E9E", bio:"Código, videojuegos y proyectos que puedan salir del salón." },
    { id:"valeria", name:"Valeria Cruz", initials:"VC", campus:"Mérida", career:"Enfermería", certificate:"Turismo", interests:["Voluntariado","Deportes","Lectura"], color:"#1B7A56", bio:"Conectar salud, comunidad y experiencias multicampus." },
    { id:"diego", name:"Diego Herrera", initials:"DH", campus:"Ciudad de México", career:"Mercadotecnia", certificate:"Inteligencia de Mercados", interests:["Emprendimiento","Cine","Deportes"], color:"#C7451F", bio:"Marketing, estrategia y obsesión por entender a las personas." }
  ];
  const classChats = [
    {
      id: "poo",
      name: "POO · Multicampus",
      relatedTo: "Programación Orientada a Objetos",
      description: "Dudas, ejercicios y coordinación entre Reynosa, Monterrey y Culiacán.",
      participants: 18,
      messages: [
        { author: "Ana Sofía", time: "5:42 pm", text: "¿Alguien ya probó la solución del ejercicio 4?" },
        { author: "Mateo Ríos", time: "5:46 pm", text: "Sí, me funciona con una clase abstracta. Te la paso." },
        { author: "Tú", time: "5:51 pm", text: "Yo me uno al equipo para revisarlo en la clase." }
      ]
    },
    {
      id: "marketing",
      name: "Marketing · ideas y campañas",
      relatedTo: "Fundamentos de Mercadotecnia",
      description: "Compartimos referencias, ideas de campañas y avances del proyecto final.",
      participants: 12,
      messages: [
        { author: "Diego Herrera", time: "Ayer", text: "Subí la referencia de la campaña al chat." },
        { author: "Valeria Cruz", time: "Ayer", text: "La vi. Me gusta el concepto; podríamos hacerlo más local." }
      ]
    },
    {
      id: "anatomia",
      name: "Anatomía · repaso rápido",
      relatedTo: "Anatomía y Fisiología",
      description: "Preguntas rápidas y material para el repaso antes de la sesión.",
      participants: 9,
      messages: [
        { author: "Valeria Cruz", time: "Lun", text: "¿Quién arma un resumen de los sistemas de hoy?" },
        { author: "Ana Sofía", time: "Lun", text: "Yo puedo tomar sistema respiratorio." }
      ]
    }
  ];
  let activeChatId = "poo";
  let chatCreateReturnFocus = null;

  let deadlineTarget = Date.now() + (((3 * 24) + 14) * 60 * 60 * 1000);

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function boot() {
    // Cada módulo se inicia de forma independiente para que un fallo visual
    // no deje toda la interfaz inutilizable.
    const steps = [
      ["fecha", renderDate],
      ["navegación", initNavigation],
      ["modales", initModalControls],
      ["formulario", initProfileForm],
      ["clases", renderClasses],
      ["chats", renderClassChats],
      ["perfil", renderProfile],
      ["fraternidad", renderFraternity],
      ["comunidad", renderCommunity],
      ["retos", renderFraternityQualifier],
      ["proyectos", renderCampusQualifier],
      ["contadores", startCountdowns],
      ["animaciones", observeRevealables]
    ];
    steps.forEach(([name, fn]) => {
      try { fn(); }
      catch (error) {
        console.error(`InterTecmi · módulo ${name}:`, error);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }

  function renderDate() {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat("es-MX", { weekday: "short", day: "numeric", month: "short" }).format(now);
    $("#todayLabel").textContent = formatted.replace(".", "");
  }

  function renderClasses() {
    const grid = $("#classesGrid");
    grid.innerHTML = classData.map((item, i) => `
      <article class="class-card reveal-on-view ${item.status === "live" ? "live" : ""}" style="transition-delay:${i * 70}ms">
        ${item.status === "live" ? '<div class="class-ribbon"><span class="live-pulse"></span> EN VIVO</div>' : ""}
        <div class="class-head">
          <div class="class-icon" aria-hidden="true">${item.code}</div>
          <div>
            <p class="eyebrow">${item.status === "live" ? "AULA VIVA" : "PRÓXIMA CLASE"}</p>
            <h3 class="class-title">${escapeHtml(item.subject)}</h3>
            <p class="class-school">${escapeHtml(item.career)}</p>
          </div>
        </div>
        <div class="class-details">
          <div class="detail-row"><div class="meta-label">Origen</div><div class="meta-value">${escapeHtml(item.cities)}</div></div>
          <div class="detail-row"><div class="meta-label">Horario</div><div class="meta-value">${escapeHtml(item.time)}</div></div>
        </div>
        <div class="class-footer">
          <div class="class-time">${item.status === "live" ? "Sala abierta" : "Reserva tu lugar"}</div>
          <button class="button ${item.status === "live" ? "primary" : "secondary"}" type="button" data-gather="${escapeAttr(item.subject)}">
            ${item.status === "live" ? "Entrar al aula →" : "Entrar al aula"}
          </button>
        </div>
      </article>`).join("");

    $$("#classesGrid [data-gather]").forEach(btn => btn.addEventListener("click", () => openGather(btn.dataset.gather, btn)));
    renderClassChats();
  }

  function initNavigation() {
    $$('[data-tab]').forEach(btn => btn.addEventListener("click", () => switchTab(btn.dataset.tab)));
  }

  function switchTab(tab) {
    const allowed = ["classes", "profile", "fraternity", "community", "fraternity-qualifier", "campus-qualifier"];
    if (!allowed.includes(tab)) return;

    currentTab = tab;
    const meta = {
      classes: ["AULAS VIVAS", "Mis Clases"],
      profile: ["IDENTIDAD MULTICAMPUS", "Mi Perfil"],
      fraternity: ["MATCHING", "Mi Fraternidad"],
      community: ["RED MULTICAMPUS", "Comunidad"],
      "fraternity-qualifier": ["VIVE OLIMPIADAS", "Clasificatoria Fraternidades"],
      "campus-qualifier": ["COPA DE PROYECTOS", "Clasificatoria Intracampus"]
    };

    allowed.forEach(name => {
      const panel = $("#panel-" + name);
      if (!panel) return;
      const active = name === tab;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    $$('[role="tab"]').forEach(btn => {
      const active = btn.dataset.tab === tab;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    $("#sectionEyebrow").textContent = meta[tab][0];
    $("#sectionTitle").textContent = meta[tab][1];

    if (tab === "fraternity" && profile && !matchRevealed && !matchStarted) runMatch();
  }

  function openGather(subject, trigger = null) {
    const modal = $("#gatherModal");
    gatherModalReturnFocus = trigger || document.activeElement;
    clearTimeout(gatherTimer);

    modal.hidden = false;
    document.body.classList.add("modal-open");
    $("#gatherTitle").textContent = "Conectando a Gather...";
    $("#gatherText").textContent = `Abriendo el espacio de ${subject}.`;
    $("#gatherLoader").style.width = "0%";
    $("#connectedBadge").hidden = true;
    $("#gatherDone").hidden = true;

    requestAnimationFrame(() => $("#gatherLoader").style.width = "100%");

    gatherTimer = window.setTimeout(() => {
      $("#gatherTitle").textContent = "Conectado.";
      $("#gatherText").textContent = "Tu aula multicampus está lista. Este prototipo usa el espacio Gather predeterminado.";
      $("#connectedBadge").hidden = false;
      $("#gatherDone").hidden = false;
      $("#gatherDone").textContent = "Entrar a Gather ↗";
      $("#gatherDone").focus();
    }, 1750);
  }

  function closeModal(modal) {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    clearTimeout(gatherTimer);
    if ($$(".modal-backdrop").every(m => m.hidden)) document.body.classList.remove("modal-open");

    const focusTarget = modal.id === "profileModal" ? profileModalReturnFocus : modal.id === "gatherModal" ? gatherModalReturnFocus : chatCreateReturnFocus;
    if (focusTarget && document.contains(focusTarget)) focusTarget.focus();
    if (modal.id === "profileModal") profileModalReturnFocus = null;
    if (modal.id === "gatherModal") gatherModalReturnFocus = null;
    if (modal.id === "chatCreateModal") chatCreateReturnFocus = null;
  }

  function initModalControls() {
    document.addEventListener("click", event => {
      const closeButton = event.target.closest("[data-close-modal]");
      if (closeButton) {
        event.preventDefault();
        event.stopPropagation();
        closeModal(closeButton.closest(".modal-backdrop"));
        return;
      }
      if (event.target.classList.contains("modal-backdrop")) closeModal(event.target);
    });

    document.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      const open = $$(".modal-backdrop").filter(m => !m.hidden);
      if (open.length) closeModal(open[open.length - 1]);
    });

    $("#gatherDone").addEventListener("click", () => {
      closeModal($("#gatherModal"));
      window.open(GATHER_DEFAULT_URL, "_blank", "noopener,noreferrer");
      toast("Abriendo el espacio Gather predeterminado.");
    });

    $("#chatCreateForm").addEventListener("submit", event => {
      event.preventDefault();
      createChat();
    });
  }

  function renderClassChats() {
    const root = $("#classChats");
    if (!root) return;
    const active = classChats.find(chat => chat.id === activeChatId) || classChats[0];
    if (!active) return;

    const relatedOptions = classData.map(item => `<option value="${escapeAttr(item.subject)}">${escapeHtml(item.subject)}</option>`).join("");
    const messages = active.messages.map(message => {
      const mine = message.author === "Tú" || (profile && message.author === profile.name);
      return `<div class="chat-message ${mine ? "mine" : ""}">
        <div class="chat-message-meta"><strong>${escapeHtml(message.author)}</strong><span>${escapeHtml(message.time)}</span></div>
        <p>${escapeHtml(message.text)}</p>
      </div>`;
    }).join("");

    root.innerHTML = `
      <section class="class-chat-section">
        <div class="class-chat-head">
          <div>
            <p class="eyebrow">CHAT DE CLASE</p>
            <h2>Habla con tu equipo antes, durante y después del aula.</h2>
            <p>Los grupos pueden nacer desde una clase, un proyecto o una idea. Crea los tuyos y mantén la conversación dentro de InterTecmi.</p>
          </div>
          <button class="button primary" type="button" id="createChatBtn">+ Crear chat</button>
        </div>

        <div class="class-chat-layout">
          <aside class="chat-list" aria-label="Tus chats">
            ${classChats.map(chat => `<button class="chat-list-item ${chat.id === active.id ? "is-active" : ""}" type="button" data-open-chat="${escapeAttr(chat.id)}">
              <span class="chat-list-icon">${escapeHtml(chat.name.substring(0,2).toUpperCase())}</span>
              <span class="chat-list-copy"><strong>${escapeHtml(chat.name)}</strong><small>${chat.participants} participantes · ${escapeHtml(chat.relatedTo)}</small></span>
            </button>`).join("")}
          </aside>

          <section class="chat-window" aria-label="Conversación activa">
            <header class="chat-window-head">
              <div>
                <p class="eyebrow">GRUPO</p>
                <h3>${escapeHtml(active.name)}</h3>
                <p>${escapeHtml(active.description)}</p>
              </div>
              <span class="chat-online">● ${active.participants} online</span>
            </header>
            <div class="chat-messages" id="chatMessages">${messages}</div>
            <form class="chat-composer" id="chatComposer">
              <label class="sr-only" for="chatMessageInput">Escribe un mensaje</label>
              <input class="text-input" id="chatMessageInput" maxlength="240" placeholder="Escribe un mensaje para el grupo…" autocomplete="off">
              <button class="button primary" type="submit">Enviar ↗</button>
            </form>
          </section>
        </div>
      </section>`;

    $("#chatCreateBtn").addEventListener("click", openCreateChatModal);
    $$('[data-open-chat]').forEach(button => button.addEventListener("click", () => {
      activeChatId = button.dataset.openChat;
      renderClassChats();
    }));
    $("#chatComposer").addEventListener("submit", event => {
      event.preventDefault();
      const input = $("#chatMessageInput");
      const message = input.value.trim();
      if (!message) return;
      const current = classChats.find(chat => chat.id === activeChatId);
      if (!current) return;
      current.messages.push({ author: profile?.name || "Tú", time: new Date().toLocaleTimeString("es-MX", { hour: "numeric", minute: "2-digit" }), text: message });
      renderClassChats();
      window.setTimeout(() => $("#chatMessageInput")?.focus(), 0);
    });

    const classSelect = $("#chatClassInput");
    if (classSelect && !classSelect.dataset.hydrated) {
      classSelect.innerHTML += relatedOptions;
      classSelect.dataset.hydrated = "true";
    }
  }

  function openCreateChatModal(trigger = null) {
    chatCreateReturnFocus = trigger || document.activeElement;
    const modal = $("#chatCreateModal");
    $("#chatCreateForm").reset();
    $("#chatCreateError").textContent = "";
    const classSelect = $("#chatClassInput");
    classSelect.innerHTML = `<option value="General">General · Comunidad InterTecmi</option>` + classData.map(item => `<option value="${escapeAttr(item.subject)}">${escapeHtml(item.subject)}</option>`).join("");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    window.setTimeout(() => $("#chatNameInput")?.focus(), 30);
  }

  function createChat() {
    const name = $("#chatNameInput").value.trim();
    const relatedTo = $("#chatClassInput").value;
    const description = $("#chatDescriptionInput").value.trim() || "Chat creado desde InterTecmi para organizar ideas y tareas.";
    if (!name) {
      $("#chatCreateError").textContent = "Escribe un nombre para el chat.";
      return;
    }
    const id = `chat-${Date.now()}`;
    classChats.unshift({
      id,
      name,
      relatedTo,
      description,
      participants: 1,
      messages: [{ author: profile?.name || "Tú", time: "Ahora", text: "¡Chat creado! Aquí podemos empezar." }]
    });
    activeChatId = id;
    closeModal($("#chatCreateModal"));
    renderClassChats();
    toast(`Chat “${name}” creado.`);
  }

  function renderProfile() {
    const root = $("#profileView");
    if (!profile) {
      root.innerHTML = `
        <div class="panel-empty">
          <div class="empty-inner">
            <div class="empty-art" aria-hidden="true">IT</div>
            <p class="eyebrow">TU ESPACIO EN LA RED</p>
            <h2>Aquí todavía<br>no hay perfil.</h2>
            <p>Crea una ficha rápida para que InterTecmi entienda tu campus, tu carrera y tus afinidades. Después podremos conectarte con tu fraternidad.</p>
            <button class="button primary" type="button" id="createProfileBtn">Crear mi perfil ✦</button>
          </div>
        </div>`;
      $("#createProfileBtn").addEventListener("click", () => openProfileModal($("#createProfileBtn")));
      updateHeaderIdentity();
      return;
    }

    root.innerHTML = `
      <div class="profile-summary">
        <div class="profile-hero">
          <div class="profile-top">
            <div class="avatar avatar-xl">${profilePhoto ? `<img class="avatar-image" src="${escapeAttr(profilePhoto)}" alt="Foto de perfil">` : escapeHtml(profile.initials)}</div>
            <div>
              <p class="eyebrow" style="color:var(--acid)">PERFIL ACTIVO</p>
              <h2 class="profile-name">${escapeHtml(profile.name)}</h2>
              <p class="profile-campus">${profile.campuses.map(escapeHtml).join(" · ")}</p>
            </div>
          </div>
          <div style="margin-top:22px;position:relative;z-index:1"><span class="sticker tilt-right">${escapeHtml(profile.certificate)}</span></div>
        </div>
        <div class="profile-body">
          <div class="profile-section"><h3>Carreras</h3><div class="chip-list">${profile.careers.map(x => `<span class="pill">${escapeHtml(x)}</span>`).join("")}</div></div>
          <div class="profile-section"><h3>Gustos</h3><div class="chip-list">${profile.interests.map(x => `<span class="pill">${escapeHtml(x)}</span>`).join("")}</div></div>
          <div class="profile-section"><h3>Grupos estudiantiles</h3><div class="chip-list">${profile.groups.map(x => `<span class="pill">${escapeHtml(x)}</span>`).join("")}</div></div>
          <div class="profile-section"><h3>Preferencia de retos</h3><div class="chip-list"><span class="sticker tilt-left">${escapeHtml(profile.challenge)}</span></div></div>
          <div class="profile-actions">
            <button class="button secondary" type="button" id="editProfileBtn">Editar perfil</button>
            <button class="button primary" type="button" id="goMatchBtn">Ver mi fraternidad ✦</button>
          </div>
        </div>
      </div>`;

    $("#editProfileBtn").addEventListener("click", () => openProfileModal($("#editProfileBtn")));
    $("#goMatchBtn").addEventListener("click", () => {
      switchTab("fraternity");
      if (profile && !matchStarted && !matchRevealed) runMatch();
    });
    updateHeaderIdentity();
  }

  function updateHeaderIdentity() {
    $("#headerStudentName").textContent = profile ? profile.name.split(" ")[0] : "Invitado";
    if(profilePhoto){
      $("#headerAvatar").innerHTML = `<img class="avatar-image" src="${escapeAttr(profilePhoto)}" alt="">`;
      $("#headerAvatar").style.background = "var(--ink)";
      $("#headerAvatar").style.color = "var(--white)";
    } else {
      $("#headerAvatar").textContent = profile ? profile.initials : "IT";
      $("#headerAvatar").style.background = profile ? "var(--acid)" : "var(--ink)";
      $("#headerAvatar").style.color = profile ? "var(--ink)" : "var(--white)";
    }
  }

  function initProfileForm() {
    renderChipGroup("#campusChips", catalog.campus, { single: true });
    renderChipGroup("#careerChips", catalog.careers, { single: true });
    renderChipGroup("#certificateChips", catalog.certificates, { single: true });
    renderChipGroup("#interestChips", catalog.interests, { single: false });
    renderChipGroup("#groupChips", catalog.groups, { single: false });
    renderChallengeGroup();

    $("#prevStep").addEventListener("click", () => currentStep > 1 ? setStep(currentStep - 1) : closeModal($("#profileModal")));
    $("#nextStep").addEventListener("click", () => {
      if (validateStep(currentStep) && currentStep < 3) setStep(currentStep + 1);
    });
    $("#profileForm").addEventListener("submit", event => {
      event.preventDefault();
      if (currentStep === 3 && validateStep(3)) saveProfile();
    });
  }

  function renderChipGroup(selector, items, options = {}) {
    const root = $(selector);
    const single = Boolean(options.single);
    root.innerHTML = items.map(item => `<button class="chip" type="button" ${single ? 'data-single="true"' : 'data-multi="true"'} data-value="${escapeAttr(item)}" aria-pressed="false">${escapeHtml(item)}</button>`).join("");

    $$(".chip", root).forEach(chip => chip.addEventListener("click", () => {
      if (single) {
        $$(".chip", root).forEach(c => { c.classList.remove("is-selected"); c.setAttribute("aria-pressed", "false"); });
        chip.classList.add("is-selected");
        chip.setAttribute("aria-pressed", "true");
      } else {
        const selected = chip.classList.toggle("is-selected");
        chip.setAttribute("aria-pressed", String(selected));
      }
    }));
  }

  function renderChallengeGroup() {
    const root = $("#challengeChips");
    const subcopy = {
      "Retos creativos": "Diseñar, idear, prototipar.",
      "Trivia y conocimiento": "Competir con lo que sabes.",
      "Retos físicos": "Moverte, jugar y resolver.",
      "Colaboración en equipo": "Coordinar talentos distintos."
    };
    root.innerHTML = catalog.challenges.map(item => `<button class="challenge-chip" type="button" data-single="true" data-value="${escapeAttr(item)}" aria-pressed="false">${escapeHtml(item)}<small>${escapeHtml(subcopy[item])}</small></button>`).join("");
    $$(".challenge-chip", root).forEach(chip => chip.addEventListener("click", () => {
      $$(".challenge-chip", root).forEach(c => { c.classList.remove("is-selected"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("is-selected");
      chip.setAttribute("aria-pressed", "true");
    }));
  }

  function openProfileModal(trigger = null) {
    const modal = $("#profileModal");
    profileModalReturnFocus = trigger || document.activeElement;
    hydrateProfileForm();
    setStep(1);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    window.setTimeout(() => $("#nameInput").focus(), 50);
  }

  function hydrateProfileForm() {
    $("#nameInput").value = profile?.name || "";
    selectValues("#campusChips", profile?.campuses?.slice(0, 1) || []);
    selectValues("#careerChips", profile?.careers?.slice(0, 1) || []);
    selectValues("#certificateChips", profile?.certificate ? [profile.certificate] : []);
    selectValues("#interestChips", profile?.interests || []);
    selectValues("#groupChips", profile?.groups || []);
    selectValues("#challengeChips", profile?.challenge ? [profile.challenge] : []);
    clearErrors();
  }

  function selectValues(selector, values) {
    $$(selector + " [data-value]").forEach(btn => {
      const selected = values.includes(btn.dataset.value);
      btn.classList.toggle("is-selected", selected);
      btn.setAttribute("aria-pressed", String(selected));
    });
  }

  function getSelected(selector) {
    return $$(selector + " .is-selected").map(x => x.dataset.value);
  }

  function validateStep(step) {
    clearErrors();
    if (step === 1) {
      const name = $("#nameInput").value.trim();
      const campuses = getSelected("#campusChips");
      const careers = getSelected("#careerChips");
      if (!name) return showError("step1Error", "Escribe tu nombre para continuar.");
      if (!campuses.length) return showError("step1Error", "Selecciona un campus.");
      if (!careers.length) return showError("step1Error", "Selecciona una carrera.");
    }
    if (step === 2) {
      if (!getSelected("#certificateChips").length) return showError("step2Error", "Elige un certificado.");
      if (!getSelected("#interestChips").length) return showError("step2Error", "Selecciona al menos un gusto.");
      if (!getSelected("#groupChips").length) return showError("step2Error", "Selecciona al menos un grupo estudiantil.");
    }
    if (step === 3 && !getSelected("#challengeChips").length) return showError("step3Error", "Elige una preferencia de retos.");
    return true;
  }

  function showError(id, message) {
    const error = $("#" + id);
    if (error) error.textContent = message;
    return false;
  }

  function clearErrors() { $$(".form-error").forEach(el => el.textContent = ""); }

  function setStep(step) {
    currentStep = Math.min(3, Math.max(1, step));
    $$(".form-step").forEach(section => section.classList.toggle("is-active", Number(section.dataset.step) === currentStep));
    $("#currentStep").textContent = String(currentStep);
    $("#progressBar").style.width = `${currentStep * 33.333}%`;
    $("#prevStep").textContent = currentStep === 1 ? "Cancelar" : "Atrás";
    $("#nextStep").hidden = currentStep === 3;
    $("#saveProfile").hidden = currentStep !== 3;
    $("#saveProfile").disabled = currentStep !== 3;
    clearErrors();
  }

  function saveProfile() {
    const name = $("#nameInput").value.trim();
    const initials = name.split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase() || "IT";
    profile = {
      name,
      initials,
      campuses: [getSelected("#campusChips")[0]],
      careers: [getSelected("#careerChips")[0]],
      certificate: getSelected("#certificateChips")[0],
      interests: getSelected("#interestChips"),
      groups: getSelected("#groupChips"),
      challenge: getSelected("#challengeChips")[0]
    };

    matchRevealed = false;
    matchStarted = false;
    challengeCompleted.clear();

    closeModal($("#profileModal"));
    renderProfile();
    renderFraternity();
    renderCommunity();
    renderFraternityQualifier();
    updateHeaderIdentity();

    switchTab("fraternity");
    runMatch();
    toast("Perfil creado. Calculando tu match de fraternidad...");
  }


  function renderCommunity() {
    const root = $("#communityView");
    if (!root) return;

    if (!profile) {
      root.innerHTML = `
        <div class="dark-section community-empty">
          <div class="match-lock">
            <div class="blocker-icon">◎</div>
            <div>
              <p class="eyebrow" style="color:var(--acid)">RED MULTICAMPUS</p>
              <h2>Primero crea<br>tu perfil.</h2>
              <p>Tu ficha será la base para descubrir personas compatibles, enviar conexiones y compartir momentos de tu vida estudiantil.</p>
              <button class="button primary" type="button" id="goProfileCommunity">Crear mi perfil</button>
            </div>
          </div>
        </div>`;
      $("#goProfileCommunity").addEventListener("click", () => { switchTab("profile"); openProfileModal($("#goProfileCommunity")); });
      return;
    }

    root.innerHTML = `
      <div class="community-layout">
        <section class="community-hero dark-block">
          <div>
            <p class="eyebrow" style="color:var(--acid)">RED InterTecmi</p>
            <h2>No importa tu campus.<br>Encuentra a tu gente.</h2>
            <p>Descubre estudiantes por intereses, carreras, certificados y ciudades. Conecta primero; la comunidad sucede después.</p>
          </div>
          <div class="community-hero-art" aria-hidden="true"><span>◎</span><span>✦</span><span>◌</span></div>
        </section>

        <section class="social-profile-card">
          <div class="social-profile-head">
            <div class="social-avatar-wrap">
              <div class="social-avatar" id="mySocialAvatar">${profilePhoto ? `<img src="${escapeAttr(profilePhoto)}" alt="Foto de perfil de ${escapeAttr(profile.name)}">` : escapeHtml(profile.initials)}</div>
              <button class="photo-edit-button" type="button" id="changeProfilePhoto" aria-label="Cambiar foto de perfil">+</button>
            </div>
            <div class="social-profile-copy">
              <p class="eyebrow">MI ESPACIO</p>
              <h3>${escapeHtml(profile.name)}</h3>
              <p>${escapeHtml(profile.campuses[0])} · ${escapeHtml(profile.careers[0])}</p>
            </div>
            <label class="button secondary upload-button">Subir foto de perfil<input id="profilePhotoInput" type="file" accept="image/*" hidden></label>
          </div>
          <div class="social-stats">
            <div><strong>${galleryPhotos.length}</strong><span>fotos</span></div>
            <div><strong>${connectedProfiles.size}</strong><span>conexiones</span></div>
            <div><strong>${profile.interests.length}</strong><span>intereses</span></div>
          </div>
        </section>

        <section class="community-section">
          <div class="section-intro"><div><p class="eyebrow">DESCUBRIR</p><h2>Personas que podrían hacer match contigo</h2></div><span class="sticker tilt-right">MULTICAMPUS</span></div>
          <div class="people-grid">
            ${communityProfiles.map(person => { const connected=connectedProfiles.has(person.id); return `
              <article class="person-card">
                <div class="person-card-top"><div class="person-avatar" style="--person-color:${person.color}">${person.initials}</div><span class="connection-status">${connected ? "✓ Conectado" : "Disponible"}</span></div>
                <h3>${escapeHtml(person.name)}</h3><p class="person-meta">${escapeHtml(person.campus)} · ${escapeHtml(person.career)}</p>
                <span class="mini-sticker">${escapeHtml(person.certificate)}</span>
                <p class="person-bio">${escapeHtml(person.bio)}</p>
                <div class="chip-list">${person.interests.map(x=>`<span class="pill">${escapeHtml(x)}</span>`).join("")}</div>
                <button class="button ${connected ? "secondary" : "primary"} connect-button" type="button" data-connect="${person.id}">${connected ? "✓ Conectado" : "Conectar"}</button>
              </article>`; }).join("")}
          </div>
        </section>

        <section class="photo-wall-section">
          <div class="section-intro"><div><p class="eyebrow">MI GALERÍA</p><h2>Comparte momentos de tu vida InterTecmi</h2></div><label class="button primary upload-button">+ Añadir fotos<input id="galleryInput" type="file" accept="image/*" multiple hidden></label></div>
          <div class="photo-wall" id="photoWall">
            ${galleryPhotos.length ? galleryPhotos.map((src,index)=>`<figure class="user-photo"><img src="${escapeAttr(src)}" alt="Foto de mi galería ${index+1}"><button type="button" class="photo-remove" data-remove-photo="${index}" aria-label="Eliminar foto">×</button></figure>`).join("") : `<div class="photo-empty"><span>✦</span><strong>Tu galería está esperando historias.</strong><p>Sube fotos de clases, proyectos, eventos, viajes o retos multicampus.</p></div>`}
          </div>
        </section>
      </div>`;

    $("#profilePhotoInput").addEventListener("change", handleProfilePhoto);
    $("#changeProfilePhoto").addEventListener("click", () => $("#profilePhotoInput").click());
    $("#galleryInput").addEventListener("change", handleGalleryUpload);
    $$('[data-connect]').forEach(btn=>btn.addEventListener("click",()=>{
      const id=btn.dataset.connect;
      if(connectedProfiles.has(id)){ connectedProfiles.delete(id); toast("Conexión eliminada."); }
      else { connectedProfiles.add(id); const person=communityProfiles.find(p=>p.id===id); toast(`Conexión enviada a ${person ? person.name : "este perfil"}.`); }
      renderCommunity();
    }));
    $$('[data-remove-photo]').forEach(btn=>btn.addEventListener("click",()=>{ galleryPhotos.splice(Number(btn.dataset.removePhoto),1); renderCommunity(); }));
  }

  function handleProfilePhoto(event) {
    const file=event.target.files?.[0];
    if(!file || !file.type.startsWith("image/")){ toast("Selecciona una imagen válida."); return; }
    if(file.size>5*1024*1024){ toast("La foto de perfil debe pesar menos de 5 MB."); return; }
    profilePhoto=URL.createObjectURL(file);
    renderCommunity(); updateHeaderIdentity(); toast("Foto de perfil actualizada.");
  }

  function handleGalleryUpload(event) {
    const files=[...(event.target.files||[])].filter(file=>file.type.startsWith("image/"));
    if(!files.length)return;
    const remaining=Math.max(0,12-galleryPhotos.length);
    files.slice(0,remaining).forEach(file=>{ if(file.size<=8*1024*1024) galleryPhotos.push(URL.createObjectURL(file)); });
    renderCommunity();
    toast(files.length>remaining ? "Galería limitada a 12 fotos en este prototipo." : `${Math.min(files.length,remaining)} foto(s) añadida(s) a tu galería.`);
  }

  function renderFraternity() {
    const root = $("#fraternityView");
    if (!profile) {
      root.innerHTML = `
        <div class="dark-section">
          <div class="match-lock">
            <div class="blocker-icon">✦</div>
            <div>
              <p class="eyebrow" style="color:var(--acid)">MATCHING EN ESPERA</p>
              <h2>Completa tu perfil<br>para ver tu match.</h2>
              <p>Necesitamos unas cuantas señales: campus, carrera, gustos y cómo te gusta competir. Después, el algoritmo simulado hará el resto.</p>
              <button class="button primary" type="button" id="goProfileFromMatch">Completar mi perfil</button>
            </div>
          </div>
        </div>`;
      $("#goProfileFromMatch").addEventListener("click", () => { switchTab("profile"); openProfileModal($("#goProfileFromMatch")); });
      return;
    }

    if (!matchRevealed) {
      root.innerHTML = `
        <div class="matching-shell">
          <div class="matching-stage">
            <div>
              <div class="scanner"><div class="scanner-core">IT</div></div>
              <div class="matching-copy">
                <p class="eyebrow">ALGORITMO InterTecmi</p>
                <h3>${matchStarted ? "Calculando tu match..." : "Preparando tu match..."}</h3>
                <p>Conectamos tus señales con perfiles, carreras y campus compatibles.</p>
              </div>
            </div>
          </div>
        </div>`;
      if (matchStarted) {
        clearTimeout(matchTimer);
        matchTimer = window.setTimeout(revealMatch, 2500);
      }
      return;
    }

    const winner = fraternities[1];
    root.innerHTML = `
      <div class="reveal-wrap">
        <div class="confetti-field" id="confettiField" aria-hidden="true"></div>
        <div class="fraternity-card" style="--fraternity-color:${winner.color}">
          <div class="fraternity-accent"></div>
          <div class="fraternity-main">
            <div class="fraternity-top">
              <div class="fraternity-avatar photo-avatar"><img src="${escapeAttr(winner.image)}" alt="${escapeAttr(winner.imageAlt)}"></div>
              <div class="affinity-sticker"><div class="affinity-number" data-counter="92">0%</div><div class="affinity-caption">de afinidad</div></div>
            </div>
            <p class="eyebrow" style="margin-top:20px">TU MATCH</p>
            <h2>${winner.name}</h2>
            <p class="fraternity-desc">${winner.desc}</p>
            <div class="fraternity-stats">
              <div class="stat-card"><span class="stat-number" data-counter="${winner.members}">0</span><span class="stat-label">miembros</span></div>
              <div class="stat-card"><span class="stat-number" data-counter="${winner.cities}">0</span><span class="stat-label">ciudades</span></div>
              <div class="stat-card"><span class="stat-number" data-counter="${winner.careers}">0</span><span class="stat-label">carreras</span></div>
            </div>
            <div class="chip-list">
              ${profile.campuses.slice(0,3).map(c => `<span class="pill">${escapeHtml(c)}</span>`).join("")}
              ${profile.careers.slice(0,2).map(c => `<span class="pill">${escapeHtml(c)}</span>`).join("")}
            </div>
            <div class="sticky-countdown"><span>Quedan para confirmar tu fraternidad</span><span class="sticky-time" id="fraternityDeadline">--d --h --m</span></div>
            <div class="profile-actions"><button class="button gold" type="button" id="joinFraternityBtn">Unirme a la fraternidad</button></div>
            <div class="ranking-section">
              <div class="ranking-head"><div><p class="eyebrow">VIVE OLIMPIADAS</p><h3>Marcador nacional</h3></div><span class="sticker tilt-right">TOP 5</span></div>
              <div class="ranking">${[...fraternities].sort((a,b) => b.points-a.points).map((f,i) => `
                <div class="rank-item ${f.name === winner.name ? "is-user" : ""}">
                  <div class="rank-number">${i+1}</div>
                  <div><span class="rank-dot" style="--rank-color:${f.color}"></span><span class="rank-name">${f.name}${f.name === winner.name ? " · TÚ" : ""}</span></div>
                  <div class="rank-points" data-counter="${f.points}">0</div>
                </div>`).join("")}</div>
            </div>
          </div>
        </div>
      </div>`;

    $("#joinFraternityBtn").addEventListener("click", () => {
      toast("¡Solicitud registrada! Tu lugar en Jaguares quedó marcado.");
      $("#joinFraternityBtn").textContent = "✓ Unido a la fraternidad";
      $("#joinFraternityBtn").disabled = true;
    });
    updateDeadline();
    animateCounters();
    createConfetti(winner.color);
  }

  function runMatch() {
    if (!profile || matchRevealed || matchStarted) return;
    matchStarted = true;
    renderFraternity();
  }

  function revealMatch() {
    matchStarted = false;
    matchRevealed = true;
    renderFraternity();
    renderCommunity();
    renderFraternityQualifier();
  }

  function createConfetti(baseColor) {
    const field = $("#confettiField");
    if (!field) return;
    const colors = [baseColor, "#C8E600", "#F5B700", "#00534C", "#F5F3E9"];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = reduced ? 12 : 38;
    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.className = "confetti";
      el.style.left = `${Math.random() * 100}%`;
      el.style.background = colors[i % colors.length];
      el.style.animationDelay = `${Math.random() * .55}s`;
      el.style.animationDuration = `${1.2 + Math.random() * 1.3}s`;
      field.appendChild(el);
    }
  }

  function renderFraternityQualifier() {
    const root = $("#fraternityQualifierView");
    if (!profile) {
      root.innerHTML = `
        <div class="dark-section">
          <div class="match-lock">
            <div class="blocker-icon">04</div>
            <div>
              <p class="eyebrow" style="color:var(--acid)">CLASIFICATORIA NACIONAL</p>
              <h2>Primero encuentra<br>tu fraternidad.</h2>
              <p>Completa tu perfil y descubre a qué fraternidad perteneces. Después podrás sumar puntos con pequeños retos que conectan campus, carreras y certificados diferentes.</p>
              <button class="button primary" type="button" id="goProfileQualifierBtn">Crear mi perfil</button>
            </div>
          </div>
        </div>`;
      $("#goProfileQualifierBtn").addEventListener("click", () => { switchTab("profile"); openProfileModal($("#goProfileQualifierBtn")); });
      return;
    }

    const winner = fraternities[1];
    const total = fraternityChallenges.length;
    const done = challengeCompleted.size;
    const progress = Math.round((done / total) * 100);
    const scores = fraternities.map(f => ({ ...f, livePoints: f.points + (f.name === winner.name ? [...challengeCompleted].reduce((sum, id) => sum + (fraternityChallenges.find(c => c.id === id)?.points || 0), 0) : 0) }));

    root.innerHTML = `
      <div class="qualifier-hero">
        <div class="qualifier-hero-main">
          <p class="eyebrow" style="color:var(--acid)">VIVE OLIMPIADAS · RETOS ENTRE FRATERNIDADES</p>
          <h2>Ganar aquí significa<br>conectar a distancia.</h2>
          <p>No compites solo por tu campus. Cada fraternidad suma puntos al completar microretos con personas de distintos lugares, carreras y certificados.</p>
          <div class="chip-list qualifier-identity"><span class="sticker tilt-left">TU EQUIPO · ${winner.name}</span><span class="pill">${escapeHtml(profile.campuses[0])}</span><span class="pill">${escapeHtml(profile.certificate)}</span></div>
        </div>
        <div class="qualifier-hero-side">
          <p class="eyebrow">TU PROGRESO</p>
          <div class="qualifier-kpi"><strong>${done}/${total}</strong><span>retos<br>completados</span></div>
          <div class="progress-small" style="margin-top:16px"><span style="width:${progress}%"></span></div>
          <p><strong>${progress}%</strong> del camino para la misión de esta jornada.</p>
        </div>
      </div>

      <div class="qualifier-section">
        <div class="qualifier-section-head"><div><p class="eyebrow">MICRORETOS</p><h3>Haz que alguien de otro lugar aparezca.</h3></div><span class="sticker tilt-right">+ PUNTOS</span></div>
        <div class="qualifier-grid">
          ${fraternityChallenges.map((challenge, i) => {
            const isDone = challengeCompleted.has(challenge.id);
            return `<article class="reto-card">
              <div class="reto-top"><div class="reto-index">0${i+1}</div><div class="reto-status">${isDone ? "COMPLETADO" : `+${challenge.points} PTS`}</div></div>
              <h4>${escapeHtml(challenge.title)}</h4>
              <p>${escapeHtml(challenge.desc)}</p>
              <div class="challenge-meta"><span class="pill">${escapeHtml(challenge.tag)}</span><span class="pill">Multicampus</span></div>
              <div class="reto-footer"><span class="points-label">${isDone ? "Reto sumado a" : "Disponible para"} ${winner.name}</span><button class="button ${isDone ? "subtle" : "primary"}" type="button" data-reto="${challenge.id}" ${isDone ? "disabled" : ""}>${isDone ? "✓ Listo" : "Completar reto"}</button></div>
            </article>`;
          }).join("")}
        </div>
      </div>

      <div class="qualifier-section">
        <div class="qualifier-section-head"><div><p class="eyebrow">MARCADOR</p><h3>Fraternidades en carrera</h3></div><span class="sticker tilt-right">NACIONAL</span></div>
        <div class="qualifier-ranking">
          ${scores.sort((a,b) => b.livePoints-a.livePoints).map((f,i) => `<div class="qualifier-rank-row ${f.name === winner.name ? "is-user" : ""}">
            <div class="rank-number">${i+1}</div>
            <div class="team-rank-copy"><span class="team-mark"><img src="${escapeAttr(f.image)}" alt="" aria-hidden="true"></span><span class="rank-team-name">${f.name}${f.name===winner.name ? " · TÚ" : ""}</span><span class="rank-team-sub">${f.members} miembros · ${f.cities} ciudades · ${f.careers} carreras</span></div>
            <div class="rank-score" data-counter="${f.livePoints}">0</div>
          </div>`).join("")}
        </div>
      </div>`;

    $$('[data-reto]').forEach(button => button.addEventListener("click", () => {
      const id = button.dataset.reto;
      challengeCompleted.add(id);
      renderFraternityQualifier();
      toast("¡Reto completado! Tu fraternidad sumó puntos.");
    }));
    animateCounters();
  }

  function renderCampusQualifier() {
    const root = $("#campusQualifierView");
    const filtered = projectData.filter(project => (campusFilter === "Todos" || project.campus === campusFilter) && (careerFilter === "Todas" || project.career === careerFilter));

    const topPerCareer = {};
    projectData.forEach(project => {
      if (!topPerCareer[project.career] || project.score > topPerCareer[project.career].score) topPerCareer[project.career] = project;
    });

    root.innerHTML = `
      <div class="qualifier-hero">
        <div class="qualifier-hero-main">
          <p class="eyebrow" style="color:var(--acid)">COPA DE PROYECTOS FINALES · INTRACAMPUS</p>
          <h2>Cada campus<br>entra como un solo equipo.</h2>
          <p>Cada sede presenta sus mejores proyectos finales. Después, dentro de cada carrera, se elige el proyecto que mejor representa a su campus y se compara contra las demás sedes.</p>
          <div class="chip-list"><span class="sticker tilt-left">1 CAMPUS = 1 EQUIPO</span><span class="pill">Evaluación por carrera</span><span class="pill">Ranking nacional</span></div>
        </div>
        <div class="qualifier-hero-side">
          <p class="eyebrow">CATEGORÍAS ABIERTAS</p>
          <div class="qualifier-kpi"><strong>${Object.keys(topPerCareer).length}</strong><span>carreras<br>representadas</span></div>
          <p>La demo muestra proyectos de varias carreras y sedes. El catálogo puede crecer sin cambiar la estructura.</p>
        </div>
      </div>

      <div class="qualifier-section">
        <div class="qualifier-section-head"><div><p class="eyebrow">FILTROS</p><h3>Explora la competencia</h3></div><span class="sticker tilt-right">${filtered.length} PROYECTOS</span></div>
        <div class="filter-row">
          <select class="select-input" id="campusFilter" aria-label="Filtrar por campus">
            <option value="Todos">Todos los campus</option>${catalog.campus.map(c => `<option value="${escapeAttr(c)}" ${c===campusFilter ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
          </select>
          <select class="select-input" id="careerFilter" aria-label="Filtrar por carrera">
            <option value="Todas">Todas las carreras</option>${catalog.careers.map(c => `<option value="${escapeAttr(c)}" ${c===careerFilter ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="qualifier-section">
        <div class="qualifier-section-head"><div><p class="eyebrow">PROYECTOS FINALISTAS</p><h3>Lo mejor de cada sede</h3></div></div>
        <div class="qualifier-grid">
          ${filtered.map((project, index) => renderProjectCard(project, projectData.indexOf(project), index === 0)).join("") || `<div class="panel-empty"><div class="empty-inner"><div class="empty-art">0</div><h2>Sin proyectos<br>en este filtro.</h2><p>Prueba otra combinación de campus y carrera.</p></div></div>`}
        </div>
      </div>

      <div class="qualifier-section">
        <div class="qualifier-section-head"><div><p class="eyebrow">CAMPEONATO POR CAMPUS</p><h3>Ranking de sedes</h3></div><span class="sticker tilt-right">TOP 16</span></div>
        <div class="campus-score-grid">
          ${Object.entries(campusScores).sort((a,b)=>b[1]-a[1]).map(([campus, score], i) => `
            <article class="campus-score-card">
              <div class="campus-score-top"><div><span class="project-badge">${String(i+1).padStart(2,'0')}</span></div><div style="text-align:right"><p style="font-weight:800">${escapeHtml(campus)}</p><strong style="font:800 1.35rem var(--display)">${score}</strong></div></div>
              <div class="score-bar"><span style="width:${Math.min(score,100)}%"></span></div>
              <p style="margin-top:8px">Puntaje agregado de los mejores proyectos de la sede.</p>
            </article>`).join("")}
        </div>
      </div>

      <div class="qualifier-section">
        <div class="qualifier-section-head"><div><p class="eyebrow">MEJOR PROYECTO POR CARRERA</p><h3>Líderes de categoría</h3></div><span class="sticker tilt-right">FINAL</span></div>
        <div class="qualifier-grid">
          ${Object.values(topPerCareer).slice(0,6).map(project => renderProjectCard(project, projectData.indexOf(project), true, true)).join("")}
        </div>
      </div>`;

    $("#campusFilter").addEventListener("change", e => { campusFilter = e.target.value; renderCampusQualifier(); });
    $("#careerFilter").addEventListener("change", e => { careerFilter = e.target.value; renderCampusQualifier(); });
    $$('[data-vote-project]').forEach(btn => btn.addEventListener("click", () => {
      const index = Number(btn.dataset.voteProject);
      projectVotes.set(index, (projectVotes.get(index) || 0) + 1);
      toast("Voto registrado para este proyecto.");
      renderCampusQualifier();
    }));
  }

  function renderProjectCard(project, index, featured = false, compact = false) {
    const votes = projectVotes.get(index) || project.votes;
    return `<article class="project-card ${featured ? "featured" : ""}">
      <div class="project-top"><div class="project-badge">${campusCode(project.campus)}</div><span class="sticker ${featured ? "" : "tilt-right"}" style="${featured ? "background:var(--acid);color:var(--ink)" : ""}">${escapeHtml(project.status)}</span></div>
      <h4>${escapeHtml(project.title)}</h4>
      <p>${escapeHtml(project.desc)}</p>
      <div class="project-meta"><span class="pill">${escapeHtml(project.campus)}</span><span class="pill">${escapeHtml(project.career)}</span><span class="pill">${escapeHtml(project.team)}</span></div>
      <div class="project-vote-row"><span class="project-score">${project.score}/100 <small style="font-size:.65rem;font-weight:600">evaluación</small></span><button class="button ${featured ? "primary" : "secondary"}" type="button" data-vote-project="${index}">${compact ? "Votar ganador" : "Apoyar proyecto"} · ${votes}</button></div>
    </article>`;
  }

  function animateCounters() {
    $$('[data-counter]').forEach(el => {
      const target = Number(el.dataset.counter);
      const duration = 900;
      const start = performance.now();
      const isPercent = el.classList.contains("affinity-number");
      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased).toLocaleString("es-MX") + (isPercent ? "%" : "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function observeRevealables() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      $$(".reveal-on-view").forEach(el => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }), { threshold: .08 });
    $$(".reveal-on-view").forEach(el => observer.observe(el));
  }

  function startCountdowns() {
    const nextClass = new Date();
    nextClass.setHours(18, 0, 0, 0);
    if (Date.now() > nextClass.getTime()) nextClass.setDate(nextClass.getDate() + 1);

    window.setInterval(() => {
      updateCountdown(nextClass, "#nextClassCountdown");
      updateDeadline();
    }, 1000);
    updateCountdown(nextClass, "#nextClassCountdown");
    updateDeadline();
  }

  function updateCountdown(targetDate, selector) {
    const element = $(selector);
    if (!element) return;
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    element.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateDeadline() {
    const el = $("#fraternityDeadline");
    if (!el) return;
    const diff = Math.max(0, deadlineTarget - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    el.textContent = `${String(d).padStart(2, "0")}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m`;
  }

  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => el.classList.remove("show"), 2800);
  }

  function campusCode(campus) {
    const codes = {
      "Ciudad de México": "CDMX",
      "Ciudad Juárez": "CDJ",
      "Ciudad Obregón": "CDO",
      "Nuevo Laredo": "NL",
      "Aguascalientes": "AGS"
    };
    return codes[campus] || campus.split(/\s+/).map(part => part[0]).join("").slice(0, 3).toUpperCase();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value) { return escapeHtml(value); }
})();
