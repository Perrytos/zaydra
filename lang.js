// lang.js – Sistema multilingua base Zaydra

const translations = {
  it: {
    welcome: "Benvenuto su Zaydra",
    login: "Accedi",
    register: "Registrati",
    logout: "Esci",
    profile: "Profilo",
    plans: "Piani",
    signals: "Segnali",
    dashboard: "Dashboard",
    language: "Lingua",
    loading: "Caricamento in corso...",
  },
  en: {
    welcome: "Welcome to Zaydra",
    login: "Login",
    register: "Register",
    logout: "Logout",
    profile: "Profile",
    plans: "Plans",
    signals: "Signals",
    dashboard: "Dashboard",
    language: "Language",
    loading: "Loading...",
  },
  es: {
    welcome: "Bienvenido a Zaydra",
    login: "Iniciar sesión",
    register: "Registrarse",
    logout: "Salir",
    profile: "Perfil",
    plans: "Planes",
    signals: "Señales",
    dashboard: "Panel",
    language: "Idioma",
    loading: "Cargando...",
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("zaydra_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("zaydra_lang") || "it";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-select").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });
});