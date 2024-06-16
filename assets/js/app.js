/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Dark mode
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute("data-theme","dark");
   
}
else{
    document.documentElement.setAttribute("data-theme","light");
}


function changeMode(event) {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme==="light") {
        document.documentElement.setAttribute("data-theme","dark");
       
    }
    else if(theme==="dark"){
        document.documentElement.setAttribute("data-theme","light");
    }
}
/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Dark mode
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
