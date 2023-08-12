const body = document.querySelector("body");
const myData = [];
const listUsers = "https://restcountries.com/v3.1/all";
const req = fetch(listUsers)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    console.log(`1. Got a Response object:`, req);
    return response.json();
  })
  .then((data) => {
    const p = document.createElement("p");
    p.textContent = `2.1 Got data in JSON format! Type of data: ${typeof data}. This ${typeof data} has ${
      data.length
    } items`;
    body.appendChild(p);
    // for (const item in data) {
    //   const p = document.createElement("p");
    //   p.textContent = `${item.name}`;
    //   body.appendChild(p);
    // }
    // console.log(`2.0 Data type:`, typeof data);
    console.log(`Data:`, data);
    myData.push(...data);
    for (let i = 0; i < myData.length; i++) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const link = document.createElement("a");
      link.href = `https://en.wikipedia.org/wiki/${myData[i].name.common}`;
      link.textContent = `${myData[i].name.common}`;
      p.textContent = `${i + 1}. Country: ${myData[i].name.common}. Capital: ${
        myData[i].capital
      }; `;
      div.appendChild(p);
      div.appendChild(link);
      body.appendChild(div);
    }
  })
  .catch((error) => console.error(`Fetch error:`, error));
