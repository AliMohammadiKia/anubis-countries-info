/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Dark mode
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
const darkIcon=document.querySelector("#dark-icon")
const lightIcon=document.querySelector("#light-icon")

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute("data-theme","dark");
     darkIcon.style.display="block"
        lightIcon.style.display="none"
   
}
else{
    document.documentElement.setAttribute("data-theme","light");
    darkIcon.style.display="none"
        lightIcon.style.display="block"
}


function changeMode(event) {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme==="light") {
        document.documentElement.setAttribute("data-theme","dark");
        darkIcon.style.display="block"
        lightIcon.style.display="none"

       
    }
    else if(theme==="dark"){
        document.documentElement.setAttribute("data-theme","light");
        darkIcon.style.display="none"
        lightIcon.style.display="block"
    }
}
/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Dark mode
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
