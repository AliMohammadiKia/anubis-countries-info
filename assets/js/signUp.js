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
  aElem.textContent = "Sign Up";
  aElem.id="message-signup"
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
  buttonAElem.href = "http://127.0.0.1:5500/login.html";
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
 * Sign Up
 *
 *
 *
 */
function signUp() {
  const main = document.createElement("main");
  const signUpSec = document.createElement("section");
  //!!!!!!!!!!!!!!!!!!!!!Signup!!!!!!!!!!!!
  const signupForm = document.createElement("form");
  signupForm.setAttribute("id", "form");
  const h2Signup = document.createElement("h2");
  const spanSignupFirst = document.createElement("span");
  const spanSignupSecond = document.createElement("span");
  //name
  const nameSignup = document.createElement("input");
  nameSignup.setAttribute("id", "name");
  nameSignup.setAttribute("type", "text");
  nameSignup.setAttribute("placeholder", "Enter your name");
  //email
  const emailSignup = document.createElement("input");
  emailSignup.setAttribute("id", "email");
  emailSignup.setAttribute("type", "email");
  emailSignup.setAttribute("placeholder", "Enter your email");
  //create a pass
  const creatPass = document.createElement("input");
  creatPass.setAttribute("type", "password");
  creatPass.setAttribute("id", "creat-password");
  creatPass.setAttribute("placeholder", "Create a password");
  //pass
  const divPassSignup = document.createElement("div");
  const passSignup = document.createElement("input");
  passSignup.setAttribute("type", "password");
  passSignup.setAttribute("id", "password");
  passSignup.setAttribute("placeholder", "Confirm a password");
  //icon
  const iconEyeSignup = document.createElement("i");
  iconEyeSignup.setAttribute("id", "icon-pass");
  //checkbox
  const divAccept = document.createElement("div");
  const checkSignup = document.createElement("input");
  checkSignup.setAttribute("type", "checkbox");
  checkSignup.setAttribute("name", "checkbox");
  checkSignup.setAttribute("id", "checkbox2");
  const labelSignup = document.createElement("label");
  labelSignup.setAttribute("for", "checkbox2");
  //button
  const signupButton = document.createElement("button");
  signupButton.setAttribute("type", "submit");
  signupButton.setAttribute("id", "submit");
  //Already have an account? Login now
  const signupDiv = document.createElement("div");
  const signupPara = document.createElement("p");
  const signuplink = document.createElement("a");
  signuplink.setAttribute("href", "http://127.0.0.1:5500/login.html");

  /*****APPEND****/
  root.append(main);
  main.append(signUpSec);

  //Signup
  divAccept.append(checkSignup, labelSignup);
  divPassSignup.append(passSignup, iconEyeSignup);
  signupForm.append(
    nameSignup,
    emailSignup,
    creatPass,
    divPassSignup,
    divAccept,
    signupButton
  );
  h2Signup.append(spanSignupFirst, spanSignupSecond);
  signUpSec.append(h2Signup, signupForm, signupDiv);
  signupDiv.append(signupPara, signuplink);

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
    "py-16",
    "md:pt-44"
  );
  //sections
  signUpSec.classList.add(
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

  spanSignupFirst.textContent = "Re";
  spanSignupSecond.textContent = "gistration";
  h2Signup.classList.add("font-extrabold", "text-xl");
  spanSignupFirst.classList.add("border-b-4");

  //Form Signup
  signupForm.classList.add("flex", "flex-col", "gap-8");
  nameSignup.classList.add(
    "border-b-2",
    "pb-2",
    "text-sm",
    "outline-none",
    "bg-inherit"
  );
  emailSignup.classList.add(
    "border-b-2",
    "pb-2",
    "text-sm",
    "outline-none",
    "bg-inherit"
  );
  creatPass.classList.add(
    "border-b-2",
    "pb-2",
    "text-sm",
    "outline-none",
    "bg-inherit"
  );
  divPassSignup.classList.add("border-b-2", "flex", "justify-between");
  iconEyeSignup.classList.add("fa-regular", "fa-eye", "cursor-pointer");
  passSignup.classList.add("pb-2", "text-sm", "outline-none", "bg-inherit");
  divAccept.classList.add("flex", "gap-1");
  labelSignup.textContent = "I accept all terms & conditions";
  labelSignup.classList.add("text-sm", "font-medium");

  // paragraph
  signupPara.textContent = "Already have an account?";
  signupPara.classList.add("text-sm");

  //para Link
  signuplink.textContent = "Login now";
  signuplink.classList.add("text-sm", "text-gray-500");

  // button
  signupButton.classList.add(
    "btn",
    "bg-gray-300",
    "font-bold",
    "py-2",
    "px-28"
  );
  signupButton.textContent = "Register Now";

  //div para & link
  signupDiv.classList.add("flex", "gap-1.5", "justify-center");

  // style
  signUpSec.style.height = "58vh";

  /**
   *
   *
   *
   * SHOW/HIDDEN
   *
   *
   *
   */

  const passInputSignup = document.getElementById("password");
  const iconSignup = document.querySelector("#icon-pass");

  iconSignup.addEventListener("click", function () {
    if (passInputSignup.type === "password") {
      passInputSignup.type = "text";
      iconSignup.classList.remove("fa-eye");
      iconSignup.classList.add("fa-eye-slash");
    } else {
      passInputSignup.type = "password";
      iconSignup.classList.remove("fa-eye-slash");
      iconSignup.classList.add("fa-eye");
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
  signUp();
};

initialize();
//variable
const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("name");
const creatpassword = document.getElementById("creat-password");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", validation);

function validation() {
  // validate name input
  if (username.value.length < 6) {
    alert("Name must have at least 6 characters");
    return false;
  }

  // validate email input
  const userEmail = email.value;
  const pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  const regexResult = pattern.test(userEmail);
  if (!regexResult) {
    alert("Email entered is not valid");
    return false;
  }
  // validate password input
  if (creatpassword.value.length < 8) {
    alert("Password must have at least 8 characters");
    return false;
  }

  if (creatpassword != password) {
    alert("Entered passwords do not match");
    return false;
  }
  // success register
  alert("Your registration was successful :)");
  return true;
}
