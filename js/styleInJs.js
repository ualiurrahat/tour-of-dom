// adding border to each sections
const sections = document.querySelectorAll("section");
for(const section of sections)
{
    section.style.border = "2px solid steelblue";
    section.style.marginBottom = "10px";
    section.style.padding = "10px";
    section.style.borderRadius = "15px";
    section.style.backgroundColor = "lightgray";
}

// adding background color to place-container section only
const placesContainer = document.getElementById("places");
placesContainer.classList.add("bg-yellow");

// adding new element in the place-container UL
const placesUL = document.querySelector(".place-container ul");
// creating new li element
const li = document.createElement("li");
// add text to li
li.innerText = "New Place to explore";
// adding li to place section ul.
placesUL.append(li);