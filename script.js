(() => {
  const body = document.body;
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("cv-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Default is light. Dark mode is explicit and persisted.
  if (saved === "dark") body.classList.add("dark");

  function updateToggle() {
    const dark = body.classList.contains("dark");
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  updateToggle();

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("cv-theme", body.classList.contains("dark") ? "dark" : "light");
    updateToggle();
  });

  // Selected-impact content.
  const impacts = [
    ["REGULATORY CAPITAL","SA-CCR implementation & EAD / RWA","Basel IV implementation and validation across derivative products, including EAD/RWA calculation logic, regulatory impact assessment and reporting workflows."],
    ["CREDIT RISK","IFRS 9 stress testing & ECL","Forward-looking macroeconomic stress testing across PD, RWA and ECL, supported by regression techniques and portfolio analytics."],
    ["MODEL RISK","CCR / IMM / XVA validation","Model audit, implementation, validation and monitoring across IMM, CEM, SA-CCR, EE/EEPE, PFE and XVA methodologies."],
    ["TRANSFORMATION","AI-enabled regulatory workflows","Using Generative AI and Agentic AI to improve regulatory reporting, change implementation and scalable risk infrastructure."]
  ];
  const detail = document.getElementById("impactDetail");
  function renderImpact(i) {
    const x = impacts[i];
    detail.innerHTML = `<small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p>`;
  }
  renderImpact(0);
  document.querySelectorAll(".impact-row").forEach((row, i) => {
    row.addEventListener("click", () => {
      document.querySelectorAll(".impact-row").forEach(r => r.classList.remove("active"));
      row.classList.add("active");
      renderImpact(i);
    });
  });

  // Subtle reveal on scroll.
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
        reveal.unobserve(e.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll(".section, .credibility, .closing").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity .65s ease, transform .65s ease";
    reveal.observe(el);
  });
})();