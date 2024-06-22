// variables
const darkIcon = document.querySelector("#dark-icon");
const lightIcon = document.querySelector("#light-icon");

const isDefaultDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const getTheme =
  localStorage.getItem("theme") ?? (isDefaultDarkMode ? "dark" : "light");

  // set default dark | light mode of user OS
if (getTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  darkIcon.style.display = "block";
  lightIcon.style.display = "none";
} else {
  document.documentElement.setAttribute("data-theme", "light");
  darkIcon.style.display = "none";
  lightIcon.style.display = "block";
}

// handle change dark | light mode
function changeMode(event) {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
  } else if (theme === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
  }
}

