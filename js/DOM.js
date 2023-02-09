console.log("hello rahat");
console.log(document);
console.log(document.body);

//  <!-- we can get html elements usually in 5 ways  -->

// option 1: getElementsByTagName();
const liCollection = document.getElementsByTagName("li");
console.log(liCollection);
console.log(liCollection[0].innerText);
for(const li of liCollection)
{
    console.log(li);
}

// option 2: get elements by class name
const places = document.getElementsByClassName("must-go-places");
console.log(places);
for(const place of places)
{
    console.log(place.innerText);
}
// option 3 : by id 
const examId = document.getElementById("exam-title");
console.log(examId);

// option 4: querySelectorAll()
const placeSection = document.querySelectorAll(".place-container");
console.log(placeSection);
const locations = document.querySelectorAll(".place-container li");
for(const location of locations)
{
    console.log(location.innerText);
}
// option 5 : querySelector()  ........select only first element
const loc = document.querySelector(".place-container li");
console.log(loc);


// get attribute, set attribute
const ob = document.getElementById("target-title");
ob.style.color = "violet";
console.log(ob.classList);
ob.classList.remove("hudai");
ob.classList.add("moja");
console.log(ob.classList);
// set attribute
ob.setAttribute("title", "tooltip set by javascript");
// mouse over the ob and you will find the message as tooltip

