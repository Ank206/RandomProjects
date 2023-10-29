## HTML element allow us to store the data in a way it is accessible to the other tags and in the JS using the "data" prefix in the attributes we pass to the HTML element tags

const elements = document.querySelectorAll(".word");
function makeRed(event) {
// event.target.style.color = "red";
event.target.style.opacity = 1;

elements.forEach((element) => {
if (element !== event.target) {
// element.style.color = "green";
element.style.opacity = 0.3;
}
});
}
function back(event) {
// event.target.style.color = "white";
event.target.style.opacity = 1;

elements.forEach((element) => {
if (element !== event.target) {
// element.style.color = "white";
element.style.opacity = 1;
}
});
}

elements.forEach((element) => {
element.addEventListener("mouseover", makeRed);
element.addEventListener("mouseout", back);
});

---

The above is an important piece of the Code that helps to change the properties of the elements that are "NOT SELECTED" using the JAVASCRIPT.

---

To make the NamePlate static implement it as the card.
