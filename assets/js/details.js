const main = document.querySelector("main");

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
