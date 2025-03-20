window.getDarkMode = () => {
    return localStorage.getItem("dark-mode") === "enabled";
};

window.setDarkMode = (isDark) => {
    if (isDark) {
        document.body.classList.add("dark-mode");
        document.getElementById('header').classList.add("dark-mode-header");
        document.getElementById('features').classList.add("dark-mode-feat");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        document.getElementById('header').classList.remove("dark-mode-header");
        document.getElementById('features').classList.remove("dark-mode-feat");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
};
