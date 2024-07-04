// render initial codes
const root = document.querySelector("#root");

function header() {
  const Header = document.createElement("header");
  Header.className = "shadow-lg";
  document.body.appendChild(Header);
  const firstDiv = document.createElement("div");
  firstDiv.className = "container mx-auto py-1.5";
  Header.appendChild(firstDiv);
  const secondDiv = document.createElement("div");
  secondDiv.className = "navbar bg-base-100";
  firstDiv.appendChild(secondDiv);
  const thirdDiv = document.createElement("div");
  thirdDiv.className = "flex-1";
  secondDiv.appendChild(thirdDiv);
  const aElem = document.createElement("a");
  aElem.href = "./index.html";
  aElem.className =
    "text-md font-semibold sm:text-xl sm:font-bold cursor-pointer";
  aElem.textContent = "Where in the world?";
  thirdDiv.appendChild(aElem);
  const fourthDiv = document.createElement("div");
  fourthDiv.className = "flex-none";
  secondDiv.append(fourthDiv);
  const button = document.createElement("button");
  button.className = "btn btn-sm btn-ghost";
  button.setAttribute("onclick", "changeMode(event)");
  fourthDiv.appendChild(button);
  const darkIcon = document.createElement("i");
  darkIcon.className = "fa-solid fa-moon hidden";
  darkIcon.id = "dark-icon";
  button.appendChild(darkIcon);
  const lightIcon = document.createElement("i");
  lightIcon.className = "fa-regular fa-moon";
  lightIcon.id = "light-icon";
  button.append(lightIcon);
  const span = document.createElement("span");
  span.id = "text-dark-icon";
  span.textContent = "Dark Mode";
  button.append(span);
   const buttonAElem = document.createElement("a");
   buttonAElem.href="http://127.0.0.1:5500/login.html"
  const userIconButton = document.createElement("button");
  userIconButton.className = "btn btn-ghost btn-circle ml-2";
  fourthDiv.append(buttonAElem);
  const indicatorDiv = document.createElement("div");
  indicatorDiv.className = "indicator";
  userIconButton.append(indicatorDiv);
  const firstI = document.createElement("i");
  firstI.className = "fa-solid fa-user text-lg hidden";
  firstI.id = "dark-user";
  indicatorDiv.append(firstI);
  const secondI = document.createElement("i");
  secondI.className = "fa-regular fa-user text-lg";
  secondI.id = "light-user";
  indicatorDiv.append(secondI);
  buttonAElem.append(userIconButton)
  root.append(Header);
  root.className = "px-2";
}

function main() {
  const main = document.createElement("main");
  main.className = "my-10 md:mb-20 mb-32";

  // search box and selection:
  const divContainer = document.createElement('div');
  divContainer.className = "container flex flex-col md:flex-row justify-between p-12 w-full";
  const pEle = document.createElement('p');
  pEle.className = "flex flex-col md:flex-row justify-between px-12 py-5 w-full";
  pEle.id = 'results';
  searchBox(divContainer);
  selectionBox(divContainer);


  main.append(divContainer)
  main.append(pEle)
  root.append(main);
}

function searchBox(divContainer){
  const divSearch = document.createElement('div');
  divSearch.className = "mb-4 md:mb-0";

  const labelSearch = document.createElement('label');
  labelSearch.className = "input flex items-center w-full md:w-[200px] gap-5 shadow max-w-full";

  const aSearch = document.createElement('a');

  aSearch.innerHTML = `<svg
                       xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                      class="w-4 h-4 opacity-70"
                      > 
                        <path
                         fill-rule="evenodd"
                         d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                         clip-rule="evenodd"
                        />
                       </svg>`;
  

  const inputSearch = document.createElement('input');
  inputSearch.type="text";
  inputSearch.id="search";
  inputSearch.class="container ring-0";
  inputSearch.placeholder="Search for a country";

  labelSearch.append(aSearch, inputSearch);
  divSearch.append(labelSearch);
  divContainer.append(divSearch);

}

function selectionBox(divContainer){
  const regions = ["Africa", "Americas", 'Antarctic', 'Antarctic Ocean', 'Asia', 'Europe', 'Oceania', 'Polar'];

  const divSelect = document.createElement('div')
  divSelect.id = 'divSelect';
  
  const selectionEle = document.createElement('select')
  selectionEle.className = "select select-ghost w-full shadow";
  selectionEle.style.fontFamily = "'Nunito Sans', sans-serif"

  selectionEle.innerHTML = `<option selected id="All">Filter by Region</option>`

  for(const region of regions){
    const optEle = document.createElement('option');
    optEle.innerText = region;
    optEle.id = region;

    selectionEle.append(optEle)
  }



  divSelect.append(selectionEle);
  divContainer.append(divSelect);
}


function footer() {
  const Footer = document.createElement("footer");
  Footer.className =
    "py-2 shadow-lg border-t-2  bg-base-100 fixed inset-x-0 bottom-0";
  document.body.append(Footer);
  const container = document.createElement("div");
  container.className = "container mx-auto px-3";
  Footer.append(container);
  const div1 = document.createElement("div");
  div1.className =
    "flex flex-col md:flex-row justify-between items-center flex-wrap";
  container.append(div1);
  const div2 = document.createElement("div");
  div2.className = "";
  div1.append(div2);
  const firstP = document.createElement("p");
  firstP.className = "text-md";
  firstP.textContent = "created❤️anubis-2";
  div2.append(firstP);
  const div3 = document.createElement("div");
  div3.className = "mt-4 md:mt-0 pr-2";
  div1.append(div3);
  const secondP = document.createElement("p");
  secondP.className = "text-md mt-1";
  secondP.innerHTML = "&copy; 2024 All rights reserved";
  div3.append(secondP);
  root.append(Footer);
}

const initialize = () => {
  header();
  main();
  footer();
};

initialize();

// variables
const darkIcon = document.querySelector("#dark-icon");
const lightIcon = document.querySelector("#light-icon");
const darkUser=document.querySelector("#dark-user");
const lightUser=document.querySelector("#light-user");

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
  darkUser.style.display = "block";
  lightUser.style.display = "none";


} else {
  document.documentElement.setAttribute("data-theme", "light");
  darkIcon.style.display = "none";
  lightIcon.style.display = "block";
  darkUser.style.display = "none";
  lightUser.style.display = "block";
}

// handle change dark | light mode
function changeMode(event) {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
    darkUser.style.display = "block";
   lightUser.style.display = "none";
  } else if (theme === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
    darkUser.style.display = "none";
   lightUser.style.display = "block";
  }
}
