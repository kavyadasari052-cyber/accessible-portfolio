document.addEventListener("DOMContentLoaded", function () {

    const themeToggle =
        document.getElementById("theme-toggle");

    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        const isLightTheme =
            document.body.classList.contains("light-theme");

        themeToggle.setAttribute(
            "aria-pressed",
            String(isLightTheme)
        );

        themeToggle.setAttribute(
            "aria-label",
            isLightTheme
                ? "Switch to dark theme"
                : "Switch to light theme"
        );

        themeToggle.textContent =
            isLightTheme
                ? "🌙 Dark Mode"
                : "☀️ Light Mode";

    });

});
