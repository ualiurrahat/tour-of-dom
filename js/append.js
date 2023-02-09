// adding another place to place-list

// where to add
const placesList = document.getElementById("places-list");
// what to add
const li4 = document.createElement("li");
li4.innerText = "The Great Great Gopalganj";
li4.style.color = "white";

// adding li4 to places-list
 placesList.appendChild(li4);

 // now we will add a new section to main section.
 // way 1:

 //1. where to add
 const mainContainer = document.getElementById("main-container");
 // 2. what to be added
 const newSection = document.createElement("section");
 const h1 = document.createElement("h1");
 h1.innerText = "My Food List";
 // add h1 to section as child element
 newSection.appendChild(h1);
// adding a ul tag
const newUL = document.createElement("ul");
 // adding 3 li items to newUl.
 const li1 = document.createElement("li");
 li1.innerText = "biriyani";
 newUL.appendChild(li1);
 const li2 = document.createElement("li");
 li2.innerText = "vuna khichuri";
 newUL.appendChild(li2);
 const li3 = document.createElement("li");
 li3.innerText = "tehari";
 newUL.appendChild(li3);
 
newSection.appendChild(newUL);
 // adding newSection to mainContainer
 mainContainer.appendChild(newSection);

 // way 2: adding new section to main section.
 // set innertHTML directly
 const newSection2 = document.createElement("section");
 newSection2.innerHTML = `
 <h1>My Dress List</h1>
 <ul>
    <li>T-Shirt</li>
    <li>Jeans</li>
    <li>Hoodie</li>
    <li>Underwear</li>
 </ul>
 `
 mainContainer.appendChild(newSection2);
