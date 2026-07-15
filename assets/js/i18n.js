async function loadLanguage(language) {

    const response = await fetch(`assets/lang/${language}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[key]) {
            element.textContent = translations[key];
        }

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[key]) {
            element.placeholder = translations[key];
        }

    });


    document.querySelectorAll("[data-i18n-value]").forEach(element => {

        const key = element.dataset.i18nValue;

        if (translations[key]) {
            element.value = translations[key];
        }

    });

    document.querySelectorAll("[data-i18n-src]").forEach(element => {

        const key = element.dataset.i18nSrc;

        if (translations[key]) {
            element.src = translations[key];
        }

    });


    // Remember selected language
    localStorage.setItem("language", language);


    // Highlight selected flag
    document.getElementById("lang-en").classList.toggle("active", language === "en");
    document.getElementById("lang-es").classList.toggle("active", language === "es");


    // Update HTML language
    document.documentElement.lang = language;

}


// Wait until buttons exist
document.addEventListener("DOMContentLoaded", () => {

    // Load saved language
    const savedLanguage = localStorage.getItem("language") || "en";
    loadLanguage(savedLanguage);


    // English button
    document.getElementById("lang-en").addEventListener("click", () => {
        loadLanguage("en");
    });


    // Spanish button
    document.getElementById("lang-es").addEventListener("click", () => {
        loadLanguage("es");
    });

});