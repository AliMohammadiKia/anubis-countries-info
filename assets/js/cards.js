const mainEle = document.querySelector("main");
const sectionEle = document.createElement("section");

const divGrid = document.createElement("div");
divGrid.className =
  "grid gap-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-16";

sectionEle.append(divGrid);
mainEle.append(sectionEle);

const setData = async () => {
  try {
    const jsonData = await fetch("./assets/data/data.json");

    const mainData = await jsonData.json();

    for (let i = 0; i <= mainData.length; i++) {
      const data = mainData[i];

      createCards(data);
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
