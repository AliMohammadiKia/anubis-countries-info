const root = document.querySelector("#root");
//Sign Up*
function signupForm() {
      const main = document.createElement("main");
      main.className =
        "flex flex-row flex-wrap justify-center  content-center  gap-16  items-end  py-16  md:pt-44";
    
      const signUpSec = document.createElement("section");
      signUpSec.className =
        " w-96 h-96  rounded-box  shadow-2xl  p-7  flex  flex-col  justify-between  justify-items-center";
      signUpSec.style.height = "58vh";
    
      const signupForm = document.createElement("form");
      signupForm.id = "form-signup";
      signupForm.className = "flex flex-col gap-8 pt-4";
    
      //Heading
      const h2Signup = document.createElement("h2");
      const spanSignupFirst = document.createElement("span");
      const spanSignupSecond = document.createElement("span");
      spanSignupFirst.textContent = "Re";
      spanSignupSecond.textContent = "gistration";
      h2Signup.className = "font-extrabold text-xl";
      spanSignupFirst.className = "border-b-4";
      //name
      const nameSignup = document.createElement("input");
      nameSignup.id = "name";
      nameSignup.type = "text";
      nameSignup.placeholder = "Enter your name";
      nameSignup.className = " border-b-2 pb-2 text-sm outline-none bg-inherit";
    
      //email
      const emailSignup = document.createElement("input");
      emailSignup.id = "email";
      emailSignup.type = "email";
      emailSignup.autocomplete = "off";
      emailSignup.placeholder = "Enter your email";
      emailSignup.className = " border-b-2 pb-2 text-sm outline-none bg-inherit";
    
      //create a pass
      const creatPass = document.createElement("input");
      creatPass.type = "password";
      creatPass.id = "creat-password";
      creatPass.placeholder = "Create a password";
      creatPass.className = "border-b-2 pb-2 text-sm outline-none bg-inherit";
    
      //pass
      const divPassSignup = document.createElement("div");
      divPassSignup.className = "border-b-2 flex justify-between";
    
      const passSignup = document.createElement("input");
      passSignup.type = "password";
      passSignup.id = "password";
      passSignup.placeholder = "Confirm a password";
      passSignup.className = "pb-2 text-sm outline-none bg-inherit";
    
      //icon
      const iconEyeSignup = document.createElement("i");
      iconEyeSignup.id = "icon-pass";
      iconEyeSignup.className = "fa-regular fa-eye cursor-pointer";
      //checkbox
      const divAccept = document.createElement("div");
      divAccept.className = "flex gap-1";
    
      const checkSignup = document.createElement("input");
      checkSignup.type = "checkbox";
      checkSignup.name = "checkbox";
      checkSignup.id = "checkbox2";
    
      const labelSignup = document.createElement("label");
      labelSignup.setAttribute("for","checkbox2") 
      labelSignup.className = "text-sm font-medium";
      labelSignup.textContent = "I accept all terms & conditions";
    
      //button
      const signupButton = document.createElement("button");
      signupButton.type = "submit";
      signupButton.id = "submit";
      signupButton.className = "btn bg-gray-300 font-bold py-2 px-28 mb-2";
      signupButton.textContent = "Register Now";
    
      //Already have an account? Login now
      const signupDiv = document.createElement("div");
      signupDiv.className = "flex gap-1.5 justify-center";
    
      const signupPara = document.createElement("p");
      signupPara.className = "text-sm";
      signupPara.textContent = "Already have an account?";
    
      const signuplink = document.createElement("a");
      signuplink.href = "../../pages/login.html";
      signuplink.className = "text-sm text-gray-500";
      signuplink.textContent = "Login now";
    
      //append
      function appendSignup() {
        root.append(main);
        main.append(signUpSec);
    
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
      }
      appendSignup();
    }
    signupForm();
    
    // SHOW-HIDDEN
    const passInputSignup = document.getElementById("password");
    const iconSignup = document.querySelector("#icon-pass");
    
    iconSignup.addEventListener("click", () => {
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
    
    
    //auth
    import { Authentication } from "../../utils/auth.js";
    import { LocalStorageData } from "../../utils/storage.js";

    const signUpForm = document.querySelector("#form-signup");
    const username = document.getElementById("name");
    const creatpassword = document.getElementById("creat-password");
    
    signUpForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log(e);
      
      const emailInput = e.target.email;
      const passwordInput = e.target.password;
    
     if (username.value.length < 2) {
        alert("Name must have at least 2 characters");
        return false;
      }
      if (creatpassword.value != passInputSignup.value) {
        alert("Entered passwords do not match");
        return false;
      }
    
      try {
        const user = new Authentication(
          emailInput.value.trim(),
          passwordInput.value.trim()
        );
        user.verifyData();
        const res = await user.signup();
        console.log(res);
        if (res.statusCode === 409) {
          alert(res.message);
        }
        if (res.statusCode === 201) {
          console.log(res);
    
          LocalStorageData.setData(res.data);
          window.location.replace("./welcome.html");
        }
      } catch (error) {
        if (error.message === "passwordError") {
          alert("your password should be more than 5 characters");
        }
    
        if (error.message === "emailError") {
          
        }
      }
    });
    