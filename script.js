const THEME_KEY = "theme";
const THEME_DARK_VALUE = "dark";
const THEME_LIGHT_VALUE = "light";

const lightModeBtns = document.getElementsByClassName("enable-light-mode-btn");
Array.from(lightModeBtns).forEach((lightModeBtn) => {
  lightModeBtn.addEventListener("click", function () {
    enableDarkMode();
  });
});

const darkModeBtns = document.getElementsByClassName("enable-dark-mode-btn");
Array.from(darkModeBtns).forEach((darkModeBtn) => {
  darkModeBtn.addEventListener("click", function () {
    enableLightMode();
  });
});

function enableDarkMode() {
  document.body.classList.add("lightMode");

  Array.from(lightModeBtns).forEach((lightModeBtn) => {
    lightModeBtn.style.display = "none";
  });
  Array.from(darkModeBtns).forEach((darkModeBtn) => {
    darkModeBtn.style.display = "inline";
  });

  localStorage.setItem(THEME_KEY, THEME_DARK_VALUE);
}

function enableLightMode() {
  document.body.classList.remove("lightMode");

  Array.from(lightModeBtns).forEach((lightModeBtn) => {
    lightModeBtn.style.display = "inline";
  });
  Array.from(darkModeBtns).forEach((darkModeBtn) => {
    darkModeBtn.style.display = "none";
  });

  localStorage.setItem(THEME_KEY, THEME_LIGHT_VALUE);
}

const theme = localStorage.getItem(THEME_KEY);

if (theme && theme === THEME_LIGHT_VALUE) {
  enableLightMode();
} else {
  enableDarkMode();
}
