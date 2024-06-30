const mainEle = document.querySelector("main");
const sectionEle = document.createElement("section");

let divGrid = document.createElement("div");
divGrid.className =
  "grid gap-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-16";

sectionEle.append(divGrid);
mainEle.append(sectionEle);

const continents = {All: []};
let continent;

const setData = async () => {
  try {
    const jsonData = await fetch("./assets/data/data.json");
    const mainData = await jsonData.json();

    for (let i = 0; i <= mainData.length; i++) {
      const data = mainData[i];

      if(!(data.region in continents)){
        continents[data.region] = [];
      }

      continents[data.region].push(data);
      continents.All.push(data);

    }
    
  } catch (error) {
    console.log(error);
  }
};
setData();

const createCards = (data) => {
  const divEle = document.createElement("div");
  divEle.className = "card mx-auto max-w-64 bg-base-100 shadow-md rounded";

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

const selectEel = document.querySelector('select');
// const afrOp = document.querySelector('#afr')
// const amrOp = document.querySelector('#amr')
// const antOp = document.querySelector('#ant')
// const antOcOp = document.querySelector('#ant-oc')
// const asiaOp = document.querySelector('#asia')
// const eurOp = document.querySelector('#eur')
// const ocOp = document.querySelector('#oc')
// const polOp = document.querySelector('#pol')

// setCards();

const changeFunc = () =>{
  const selectedCont = selectEel.options[selectEel.selectedIndex].id;
  // console.log(selectedCont);    // == Asia

  continent = continents[selectedCont];

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



const searchCountry = document.querySelector('#search');

const searching = (e) =>{
  const seek = e.target.value;   //iran
  let newOrder = [];
  for(const country of continent){
    if(country.name.toUpperCase().includes(seek.toUpperCase())){
      newOrder.push(country);
    }
  }
  setCards(newOrder);
}
searchCountry.addEventListener("input", searching)


