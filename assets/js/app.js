// variables
const darkIcon = document.querySelector("#dark-icon");
const lightIcon = document.querySelector("#light-icon");

// set default dark | light mode of user OS
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
    document.documentElement.setAttribute("data-theme", "dark");
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
  } else if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
  }
}
