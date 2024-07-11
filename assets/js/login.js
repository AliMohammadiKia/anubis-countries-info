const root = document.querySelector("#root");
//Login
function loginForm() {
      const main = document.createElement("main");
      main.className =
        "flex flex-row flex-wrap justify-center  content-center  gap-16  items-end  py-5  md:pt-52";
    
      const logInSec = document.createElement("section");
      logInSec.className =
        " w-96 h-96  rounded-box  shadow-2xl  p-7  flex  flex-col  justify-between  justify-items-center";
      logInSec.style.height = "44.5vh";
    
      const loginForm = document.createElement("form");
      loginForm.id = "form-login";
      loginForm.className = "flex flex-col gap-8";
      //Heading
      const h2Login = document.createElement("h2");
      const spanLoginFirst = document.createElement("span");
      const spanLoginSecond = document.createElement("span");
      spanLoginFirst.textContent = "Lo";
      spanLoginSecond.textContent = "gin";
      h2Login.className = "font-extrabold text-xl";
      spanLoginFirst.className = "border-b-4";
      //email
      const emailLogin = document.createElement("input");
      emailLogin.type = "email";
      emailLogin.id = "email";
      emailLogin.autocomplete = "off";
      emailLogin.placeholder = "Enter your email";
      emailLogin.className = " border-b-2 pb-2 text-sm outline-none bg-inherit";
      //pass
      const divPassLogin = document.createElement("div");
      divPassLogin.className = "border-b-2 flex justify-between";
      const passLogin = document.createElement("input");
      passLogin.type = "password";
      passLogin.id = "password";
      passLogin.placeholder = "confirm a password";
      passLogin.className = "pb-2 text-sm outline-none bg-inherit";
      //icon
      const iconEyeLogin = document.createElement("i");
      iconEyeLogin.id = "icon-pass";
      iconEyeLogin.className = "fa-regular fa-eye cursor-pointer";
      //checkbox
      const divLoginCheck = document.createElement("div");
      divLoginCheck.className = "flex justify-between";
      const divRememberMe = document.createElement("div");
      divRememberMe.className = "flex gap-1";
      const checkLogin = document.createElement("input");
      checkLogin.type = "checkbox";
      checkLogin.name = "checkbox";
      checkLogin.id = "checkbox";
      const labelLogin = document.createElement("label");
      labelLogin.setAttribute("for", "checkbox");
      labelLogin.className = "text-sm font-medium";
      labelLogin.textContent = "Remember me";
      //forgot pass
      const forget = document.createElement("a");
      forget.href = "#";
      forget.className = "text-sm text-gray-500";
      forget.textContent = "Forgot password?";
      //button
      const loginButton = document.createElement("button");
      loginButton.type = "submit";
      loginButton.id = "submit";
      loginButton.className = "btn bg-gray-300 font-bold py-2 px-28";
      loginButton.textContent = "Login";
      //Don't have an account? Signup now
      const loginDiv = document.createElement("div");
      loginDiv.className = "flex gap-1.5 justify-center";
      const loginPara = document.createElement("p");
      loginPara.className = "text-sm";
      loginPara.textContent = "Don't have an account?";
      const loginlink = document.createElement("a");
      loginlink.href = "http://127.0.0.1:5501/pages/signUp.html";
      loginlink.className = "text-sm text-gray-500";
      loginlink.textContent = "Signup now";
    
      //append
      function appendLogin() {
        root.append(main);
        main.append(logInSec);
        divRememberMe.append(checkLogin, labelLogin);
        divLoginCheck.append(divRememberMe, forget);
        divPassLogin.append(passLogin, iconEyeLogin);
        loginForm.append(emailLogin, divPassLogin, divLoginCheck, loginButton);
        h2Login.append(spanLoginFirst, spanLoginSecond);
        logInSec.append(h2Login, loginForm, loginDiv);
        loginDiv.append(loginPara, loginlink);
      }
      appendLogin();
    }
    loginForm();
    
    // SHOW-HIDDEN
    const passInputLogin = document.getElementById("password");
    const iconLogin = document.querySelector("#icon-pass");
    
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
    
    ////
    
    import { Authentication } from "../../utils/auth.js";
    import { LocalStorageData } from "../../utils/storage.js";
    const signInForm = document.querySelector("#form-login");
    
    signInForm.addEventListener("submit", async (e) => {
      e.preventDefault();
    
      const emailInput = e.target.email;
      const passwordInput = e.target.password;
    
      try {
        const user = new Authentication(
          emailInput.value.trim(),
          passwordInput.value.trim()
        );
    
        user.verifyData();
    
        const res = await user.login();
        if (res.statusCode === 404) {
          alert(res.message);
        }
        if (res.statusCode === 200) {
          LocalStorageData.setData(res.data);
          window.location.replace("./welcome.html");
        }
      } catch (error) {
        if (error.message === "passwordError") {
          alert("email or password incorrect");
        }
      }
    });
    
