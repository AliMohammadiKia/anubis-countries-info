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
  const userIconButton = document.createElement("button");
  userIconButton.className = "btn btn-ghost btn-circle ml-2";
  fourthDiv.append(userIconButton);
  const indicatorDiv = document.createElement("div");
  indicatorDiv.className = "indicator";
  userIconButton.append(indicatorDiv);
  const firstI = document.createElement("i");
  firstI.className = "fa-solid fa-user text-lg hidden";
  firstI.id = "dark-user";
  indicatorDiv.append(firstI);
  const firstAElem = document.createElement("a");
  firstAElem.href = "#";
  firstI.append(firstAElem);
  const secondI = document.createElement("i");
  secondI.className = "fa-regular fa-user text-lg";
  secondI.id = "light-user";
  indicatorDiv.append(secondI);
  const secondAElem = document.createElement("a");
  secondAElem.href = "#";
  secondI.append(secondAElem);
  root.append(Header);
  root.className = "px-2";
}

header();

const main = document.createElement("main");
main.className = "container mx-auto px-4 py-10";
root.append(main);

const firstSection = document.createElement("section");

const backButton = document.createElement("button");
backButton.className =
  "btn btn-sm md:btn-md px-[25px] md:px-[50px] shadow-[0_0_10px_5px_rgba(0,0,0,0.125)] hover:scale-105";

const iEle = document.createElement("i");
iEle.className = "fa-solid fa-arrow-left-long";

backButton.append(iEle);
backButton.innerText = "Back";
firstSection.append(backButton);

const mainSection = document.createElement("section");
mainSection.className =
  "flex flex-col justify-between md:flex-row mx-auto py-10 min-h-fit";

const urlParams = new URLSearchParams(window.location.search);
const countryData = JSON.parse(urlParams.get("country"));

const imgEle = document.createElement("img");
imgEle.className = "flag w-full md:w-2/4 lg:w-2/5 p-7 md:p-4";
imgEle.src = countryData.flags.png;

const infoSection = document.createElement("section");
infoSection.className =
  "text md:w-2/4 lg:w-2/4 flex justify-center flex-col p-7";

const h1Ele = document.createElement("h1");
h1Ele.className = "text-3xl font-bold";
h1Ele.innerText = countryData.name;

const divParent = document.createElement("div");
divParent.className = "my-10 grid md:grid-cols-2 gap-1";

const firstDivEle = document.createElement("div");
firstDivEle.innerHTML = `<p class="py-1"><b>Native Name: </b>${countryData.nativeName}</p>
              <p class="py-1"><b>Population: </b>${countryData.population}</p>
              <p class="py-1"><b>Region:</b> ${countryData.region}</p>
              <p class="py-1"><b>Sub Region:</b> ${countryData.subregion}</p>
              <p class="py-1"><b>Capital:</b> ${countryData.capital}</p>`;

console.log(countryData.currencies);

const secDivEle = document.createElement("div");

secDivEle.innerHTML = `
  <p class="py-1"><b>Top Level Domain:</b> ${
    countryData && countryData.topLevelDomain && countryData.topLevelDomain[0]
      ? countryData.topLevelDomain[0]
      : "Not available"
  }</p>
  <p class="py-1"><b>Currencies:</b> ${
    countryData && countryData.currencies
      ? countryData.currencies.map((currency) => currency.name).join(", ")
      : "Not available"
  }</p>
  <p class="py-1"><b>Languages:</b> ${
    countryData && countryData.languages
      ? countryData.languages.map((lang) => lang.name).join(", ")
      : "Not available"
  }</p>
`;

const parentBtnDiv = document.createElement("div");
parentBtnDiv.className = "flex flex-wrap flex-row gap-2";

const spanEle = document.createElement("span");
spanEle.innerText = "Border Countries:";

const btnParent = document.createElement("div");

if (countryData && countryData.borders) {
  countryData.borders.forEach((border) => {
    const btnEle = document.createElement("button");
    btnEle.className = "btn btn-xs lg:btn-sm shadow-xl px-2";
    btnEle.innerText = border;

    btnEle.addEventListener("click", async () => {
      const response = await fetch("./assets/data/data.json");
      const data = await response.json();
      const borderCountryData = data.find(
        (country) => country.alpha3Code === border
      );
      if (borderCountryData) {
        window.location.href = `details.html?country=${JSON.stringify(
          borderCountryData
        )}`;
      }
    });
    btnParent.append(btnEle);
  });
} else {
  spanEle.innerText = "";
}

parentBtnDiv.append(spanEle, btnParent);

divParent.append(firstDivEle, secDivEle);

infoSection.append(h1Ele, divParent, parentBtnDiv);

mainSection.append(imgEle, infoSection);

main.append(firstSection, mainSection);

// light and dark mood
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
