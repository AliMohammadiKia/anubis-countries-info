const initialize = () => {
  // root
  const root = document.querySelector("#root");
  /*******************
   *******************
   *******CREATE******
   *******************
   *******************
   */
  const main = document.createElement("main");
  const signUpSec = document.createElement("section");
  const logInSec = document.createElement("section");

  //!!!!!!!!!!!!!!!!!!!!!Login!!!!!!!!!!!!
  const loginForm = document.createElement("form");
  const h2Login = document.createElement("h2");
  const spanLoginFirst=document.createElement("span");
  const spanLoginSecond=document.createElement("span");
  //email
  const emailLogin = document.createElement("input");
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
  //Don't have an account? Signup now
  const loginDiv = document.createElement("div");
  const loginPara = document.createElement("p");
  const loginlink = document.createElement("a");
  loginlink.setAttribute("href", "#");

  //!!!!!!!!!!!!!!!!!!!!!Signup!!!!!!!!!!!!
  const signupForm = document.createElement("form");
  const h2Signup = document.createElement("h2");
  const spanSignupFirst=document.createElement("span");
  const spanSignupSecond=document.createElement("span");
  //name
  const nameSignup = document.createElement("input");
  nameSignup.setAttribute("type", "text");
  nameSignup.setAttribute("placeholder", "Enter your name");
  //email
  const emailSignup = document.createElement("input");
  emailSignup.setAttribute("type", "email");
  emailSignup.setAttribute("placeholder", "Enter your email");
  //create a pass
  const creatPass = document.createElement("input");
  creatPass.setAttribute("type", "password");
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
  //Already have an account? Login now
  const signupDiv = document.createElement("div");
  const signupPara = document.createElement("p");
  const signuplink = document.createElement("a");
  signuplink.setAttribute("href", "#");

  /*******************
   *******************
   *******APPEND******
   *******************
   *******************
   */

  root.append(main);
  main.append(logInSec, signUpSec);

  //!!!!!!!!!!!!!!!!!!!!!Login!!!!!!!!!!!!
  divRememberMe.append(checkLogin, labelLogin);
  divLoginCheck.append(divRememberMe, forget);
  divPassLogin.append(passLogin, iconEyeLogin);
  loginForm.append(emailLogin, divPassLogin, divLoginCheck, loginButton);
  h2Login.append(spanLoginFirst,spanLoginSecond)
  logInSec.append(h2Login, loginForm, loginDiv);
  loginDiv.append(loginPara, loginlink);

  //!!!!!!!!!!!!!!!!!!!!!Signup!!!!!!!!!!!!
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
  h2Signup.append(spanSignupFirst,spanSignupSecond)
  signUpSec.append(h2Signup, signupForm, signupDiv);
  signupDiv.append(signupPara, signuplink);

  /*******************
   *******************
   *******CLASS******
   *******************
   *******************
   */
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
    "md:pt-80"
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

  //!!!!!!!!!!!!!!!!!!!!!Heading!!!!!!!!!!!!
  spanLoginFirst.textContent="Lo"
  spanLoginSecond.textContent = "gin";
  spanSignupFirst.textContent="Re"
  spanSignupSecond.textContent="gistration"
  h2Login.classList.add("font-extrabold", "text-xl");
  spanLoginFirst.classList.add("border-b-4")

  h2Signup.classList.add("font-extrabold", "text-xl");
  spanSignupFirst.classList.add("border-b-4")

  //!!!!!!!!!!!!!!!!!!!!!Form Login!!!!!!!!!!!!
  loginForm.classList.add("flex", "flex-col", "gap-8");
  emailLogin.classList.add("border-b-2", "pb-2", "text-sm","outline-none","bg-inherit");
  divPassLogin.classList.add("border-b-2", "flex", "justify-between");
  passLogin.classList.add("pb-2", "text-sm","outline-none","bg-inherit");
  iconEyeLogin.classList.add("fa-regular", "fa-eye", "cursor-pointer");
  divLoginCheck.classList.add("flex", "justify-between");
  divRememberMe.classList.add("flex", "gap-1");
  labelLogin.textContent = "Remember me";
  labelLogin.classList.add("text-sm", "font-medium");
  forget.textContent = "Forgot password?";
  forget.classList.add("text-sm", "text-gray-500");

  //!!!!!!!!!!!!!!!!!!!!!Form Signup!!!!!!!!!!!!
  signupForm.classList.add("flex", "flex-col", "gap-8");
  nameSignup.classList.add("border-b-2", "pb-2", "text-sm","outline-none","bg-inherit");
  emailSignup.classList.add("border-b-2", "pb-2", "text-sm","outline-none","bg-inherit");
  creatPass.classList.add("border-b-2", "pb-2", "text-sm","outline-none","bg-inherit");
  divPassSignup.classList.add("border-b-2", "flex", "justify-between");
  iconEyeSignup.classList.add("fa-regular", "fa-eye", "cursor-pointer");
  passSignup.classList.add("pb-2", "text-sm","outline-none","bg-inherit");
  divAccept.classList.add("flex", "gap-1");
  labelSignup.textContent = "I accept all terms & conditions";
  labelSignup.classList.add("text-sm", "font-medium");

  // paragraph
  loginPara.textContent = "Don't have an account?";
  signupPara.textContent = "Already have an account?";
  loginPara.classList.add("text-sm");
  signupPara.classList.add("text-sm");
  //para Link
  loginlink.textContent = "Signup now";
  signuplink.textContent = "Login now";
  loginlink.classList.add("text-sm", "text-gray-500");
  signuplink.classList.add("text-sm", "text-gray-500");

  // button
  loginButton.classList.add("btn", "bg-gray-300", "font-bold", "py-2", "px-28");
  loginButton.textContent = "Login Now";
  signupButton.classList.add(
    "btn",
    "bg-gray-300",
    "font-bold",
    "py-2",
    "px-28"
  );
  signupButton.textContent = "Register Now";

  //div para & link
  loginDiv.classList.add("flex", "gap-1.5", "justify-center");
  signupDiv.classList.add("flex", "gap-1.5", "justify-center");

  // style
  signUpSec.style.height = "58vh";
  logInSec.style.height = "44.5vh";

/*************************************
   ***********************************
   *********************************** *********************************** ***********************************
   ************SHOW/HIDDEN************
   *********************************** *********************************** *********************************** ***********************************
   ***********************************
   */
  //show-hidden-Login
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

  //show-hidden-signup
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
};
initialize();
