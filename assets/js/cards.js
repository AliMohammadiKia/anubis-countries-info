const mainEle = document.querySelector("main");
const sectionEle = document.createElement("section");
const selectEle = document.querySelector('select');
const searchCountry = document.querySelector('#search');
const pEle = document.querySelector('#results')
const theme = document.documentElement.getAttribute("data-theme");

let divGrid = document.createElement("div");
divGrid.className =
  "grid gap-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-16";

sectionEle.append(divGrid);
mainEle.append(sectionEle);

let mainData;
let continent;
let numberOfResults;


const setData = async () => {
  try {
    const jsonData = await fetch("./assets/data/data.json");
    mainData = await jsonData.json();
    continent = mainData;
    setCards(mainData);

   
  } catch (error) {
    console.log(error);
  }
};
setData();


const createCards = (data) => {
  const divEle = document.createElement("div");
  divEle.className = "card mx-auto max-w-64 bg-base-100 shadow-md rounded";
  if(theme == 'dark'){
    divEle.className = "shadow-[0px_4px_10px_-1px_rgba(250,250,250,0.2)]"
  }

  const figureEle = document.createElement("figure");

  const imgEle = document.createElement("img");
  imgEle.src = data.flags.png;
  imgEle.className = "object-fill h-40 w-96";
  figureEle.append(imgEle);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const h2Ele = document.createElement("h2");
  h2Ele.className = "card-title mb-2";
  h2Ele.innerText = data.name;

  const containerDetail = document.createElement("div");
  containerDetail.innerHTML = `<p><b>Population</b>${data.population}</p>
                <p><b>Region</b>${data.region}</p>
                <p><b>Capital</b>${data.capital}</p>`;

  cardBody.append(h2Ele, containerDetail);
  divEle.append(figureEle, cardBody);
  divGrid.append(divEle);

};


const changeFunc = () =>{
  searchCountry.value = '';
  pEle.textContent = '';
  const selectedCont = selectEle.options[selectEle.selectedIndex].id;

  if(selectedCont == 'All') {
    setCards(mainData);
    return;
  }
  continent = mainData.filter((data) =>{
    return data.region == selectedCont;
  })

  setCards(continent);
}

const setCards = continent =>{
  divGrid.remove();
  divGrid = document.createElement("div");
  divGrid.className =
  "grid gap-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-16";
  sectionEle.append(divGrid);



  for (let i = 0; i <= continent.length; i++) {
    const data = continent[i];
    createCards(data);
  }
}




const searching = (e) =>{
  const seek = e.target.value;   //iran
  let newOrder = [];
  for(const country of continent){
    if(country.name.toUpperCase().includes(seek.toUpperCase())){
      newOrder.push(country);
    }
  }

  numberOfResults = newOrder.length;
  pEle.textContent = `${numberOfResults} results found.`;
  
  setCards(newOrder);
}
selectEle.addEventListener("change", changeFunc)
searchCountry.addEventListener("input", searching)


