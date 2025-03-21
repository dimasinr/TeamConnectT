window.getDarkMode = () => {
    return localStorage.getItem("dark-mode") === "enabled";
};

window.setDarkMode = (isDark) => {
    if (isDark) {
        document.body.classList.add("dark-mode");
        document.getElementById('header').classList.add("dark-mode-header");
        document.getElementById('features').classList.add("dark-mode-feat");
    } else {
        document.getElementById('header').classList.remove("dark-mode-header");
        document.getElementById('features').classList.remove("dark-mode-feat");
        document.body.classList.remove("dark-mode");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    let loadingContainer = document.getElementById("loading-container");
    if (loadingContainer) {
        loadingContainer.style.display = "flex"; 
    }
});

window.addEventListener("load", function () {
    setTimeout(() => {
        let loadingContainer = document.getElementById("loading-container");
        if (loadingContainer) {
            loadingContainer.style.opacity = "0"; 
            setTimeout(() => {
                loadingContainer.style.display = "none"; 
            }, 500);
        }
    }, 1500); // Tampilkan loading selama 1.5 detik sebelum menghilang
});
