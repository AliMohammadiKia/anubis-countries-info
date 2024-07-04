//root
const root = document.querySelector("#root");

/**
 *
 *
 *
 * HEADER
 *
 *
 *
 */
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
  aElem.textContent = "Login";
  aElem.id="message-login"
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
  buttonAElem.href = "http://127.0.0.1:5500/signUp.html";
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
  buttonAElem.append(userIconButton);
  root.append(Header);
  root.className = "px-2";
}

/**
 *
 *
 *
 * Login
 *
 *
 *
 */
function login() {
  const main = document.createElement("main");
  const logInSec = document.createElement("section");
  //!!!!!!!!!!!!!!!!!!!!!Login!!!!!!!!!!!!
  const loginForm = document.createElement("form");
  loginForm.setAttribute("id", "form");
  const h2Login = document.createElement("h2");
  const spanLoginFirst = document.createElement("span");
  const spanLoginSecond = document.createElement("span");
  //email
  const emailLogin = document.createElement("input");
  emailLogin.setAttribute("id", "email");
  emailLogin.setAttribute("type", "email");
  emailLogin.setAttribute("placeholder", "Enter your email");

  //pass
  const divPassLogin = document.createElement("div");
  const passLogin = document.createElement("input");
  passLogin.setAttribute("type", "password");
  passLogin.setAttribute("id", "passsword");
  passLogin.setAttribute("placeholder", "Confirm a password");
  //icon
  const iconEyeLogin = document.createElement("i");
  iconEyeLogin.setAttribute("id", "icon-passs");

  //checkbox
  const divLoginCheck = document.createElement("div");
  const divRememberMe = document.createElement("div");
  const checkLogin = document.createElement("input");
  checkLogin.setAttribute("type", "checkbox");
  checkLogin.setAttribute("name", "checkbox");
  checkLogin.setAttribute("id", "checkbox");
  const labelLogin = document.createElement("label");
  labelLogin.setAttribute("for", "checkbox");
  //forgot pass
  const forget = document.createElement("a");
  forget.setAttribute("href", "#");
  //button
  const loginButton = document.createElement("button");
  loginButton.setAttribute("type", "submit");
  loginButton.setAttribute("id", "submit");
  //Don't have an account? Signup now
  const loginDiv = document.createElement("div");
  const loginPara = document.createElement("p");
  const loginlink = document.createElement("a");
  loginlink.setAttribute("href", "http://127.0.0.1:5500/signUp.html");

  /*****APPEND****/
  root.append(main);
  main.append(logInSec);

  //Login
  divRememberMe.append(checkLogin, labelLogin);
  divLoginCheck.append(divRememberMe, forget);
  divPassLogin.append(passLogin, iconEyeLogin);
  loginForm.append(emailLogin, divPassLogin, divLoginCheck, loginButton);
  h2Login.append(spanLoginFirst, spanLoginSecond);
  logInSec.append(h2Login, loginForm, loginDiv);
  loginDiv.append(loginPara, loginlink);

  /****CLASS*****/

  //main
  main.classList.add(
    "flex",
    "flex-row",
    "flex-wrap",
    "justify-center",
    "content-center",
    "gap-16",
    "items-end",
    "py-5",
    "md:pt-52"
  );
  //sections
  logInSec.classList.add(
    "w-96",
    "h-96",
    "rounded-box",
    "shadow-2xl",
    "p-7",
    "flex",
    "flex-col",
    "justify-between",
    "justify-items-center"
  );

  //Heading

  spanLoginFirst.textContent = "Lo";
  spanLoginSecond.textContent = "gin";
  h2Login.classList.add("font-extrabold", "text-xl");
  spanLoginFirst.classList.add("border-b-4");

  //Form Login
  loginForm.classList.add("flex", "flex-col", "gap-8");
  emailLogin.classList.add(
    "border-b-2",
    "pb-2",
    "text-sm",
    "outline-none",
    "bg-inherit"
  );
  divPassLogin.classList.add("border-b-2", "flex", "justify-between");
  passLogin.classList.add("pb-2", "text-sm", "outline-none", "bg-inherit");
  iconEyeLogin.classList.add("fa-regular", "fa-eye", "cursor-pointer");
  divLoginCheck.classList.add("flex", "justify-between");
  divRememberMe.classList.add("flex", "gap-1");
  labelLogin.textContent = "Remember me";
  labelLogin.classList.add("text-sm", "font-medium");
  forget.textContent = "Forgot password?";
  forget.classList.add("text-sm", "text-gray-500");

  // paragraph
  loginPara.textContent = "Don't have an account?";
  loginPara.classList.add("text-sm");

  //para Link
  loginlink.textContent = "Signup now";
  loginlink.classList.add("text-sm", "text-gray-500");

  // button
  loginButton.classList.add("btn", "bg-gray-300", "font-bold", "py-2", "px-28");
  loginButton.textContent = "Login Now";

  //div para & link
  loginDiv.classList.add("flex", "gap-1.5", "justify-center");

  // style
  logInSec.style.height = "44.5vh";

  /**
   *
   *
   *
   * SHOW/HIDDEN
   *
   *
   *
   */

  const passInputLogin = document.getElementById("passsword");
  const iconLogin = document.querySelector("#icon-passs");

  iconLogin.addEventListener("click", function () {
    if (passInputLogin.type === "password") {
      passInputLogin.type = "text";
      iconLogin.classList.remove("fa-eye");
      iconLogin.classList.add("fa-eye-slash");
    } else {
      passInputLogin.type = "password";
      iconLogin.classList.remove("fa-eye-slash");
      iconLogin.classList.add("fa-eye");
    }
  });
}
/**
 *
 *
 *
 * initialize
 *
 *
 *
 */
const initialize = () => {
  header();
  login();
};

initialize();

//variable
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", validation);

function validation() {
  // validate email input
  const userEmail = email.value;
  const pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  const regexResult = pattern.test(userEmail);
  if (!regexResult) {
    alert("Email entered is not valid");
    return false;
  }

  // validate password input
  if (password.value.length < 8) {
    alert("Password must have at least 8 characters");
    return false;
  }

  // success register
  alert("Your registration was successful :)");
  return true;
}
