document.addEventListener("DOMContentLoaded", () => {
    // Тема сайта (светлый/тёмный)
    const html = document.getElementById("html");
    const themeBtn = document.getElementById('theme-btn');

    themeBtn.addEventListener("click", () => {
        if (html.className == 'light_theme') {
            html.className = 'dark_theme';
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>&nbsp; ТЁМНАЯ ТЕМА &nbsp;<i class="fa-solid fa-moon"></i>'
        } else {
            html.className = 'light_theme';
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>&nbsp; СВЕТЛАЯ ТЕМА &nbsp;<i class="fa-solid fa-sun"></i>'
        }
    })
})