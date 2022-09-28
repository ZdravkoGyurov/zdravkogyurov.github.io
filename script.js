const THEME_KEY = "theme";
const THEME_DARK_VALUE = "dark";
const THEME_LIGHT_VALUE = "light";

const toggleLightModeBtn = document.getElementById("enable-light-mode-btn");
const toggleDarkModeBtn = document.getElementById("enable-dark-mode-btn");

toggleLightModeBtn.addEventListener("click", function () {
  enableDarkMode();
});

toggleDarkModeBtn.addEventListener("click", function () {
  enableLightMode();
});

function enableDarkMode() {
  document.body.classList.add("lightMode");
  toggleLightModeBtn.style.display = "none";
  toggleDarkModeBtn.style.display = "inline";
  localStorage.setItem(THEME_KEY, THEME_DARK_VALUE);
}

function enableLightMode() {
  document.body.classList.remove("lightMode");
  toggleDarkModeBtn.style.display = "none";
  toggleLightModeBtn.style.display = "inline";
  localStorage.setItem(THEME_KEY, THEME_LIGHT_VALUE);
}

const theme = localStorage.getItem(THEME_KEY);

if (theme && theme === THEME_LIGHT_VALUE) {
  enableLightMode();
} else {
  enableDarkMode();
}
