const root = document.querySelector("#root");

function main() {
      const main = document.createElement("main");
  main.className =
    "flex flex-row flex-wrap justify-center  content-center  gap-16  items-end  py-5  md:pt-52";

  const section1 = document.createElement("section");
  section1.className =
    " w-96 h-96  rounded-box  shadow-2xl  p-7  flex  flex-col  justify-between  justify-items-center";
//Heading
const h2 = document.createElement("h2");
const spanFirst = document.createElement("span");

spanFirst.textContent = "Welcome";

h2.className = "font-extrabold text-xl flex justify-center  content-center";
spanFirst.className = "border-b-4";

    function append() {
      root.append(main);
    main.append(section1);
    h2.append(spanFirst)
    section1.append(h2)
    }
      append()
}
main()