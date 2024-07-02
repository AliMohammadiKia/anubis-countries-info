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

function footer() {
  const Footer = document.createElement("footer");
  Footer.className = "shadow-lg border-t border-gray-400 py-4";
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
  footer();
};

initialize();
