const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
  rotateElement(e, pre);
});

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y);

  // Pre needs to move with the mouse relative to the middle of the page.

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  //How far the Mouse is from the CENTRE
  const offsetX = ((x - middleX) / middleX) * 20;
  const offsetY = ((y - middleY) / middleY) * 20;
  // console.log(offsetX, offsetY);
  //   change the 45 to make the effect more subtle or more movable

  element.style.setProperty("--rotateX", -1 * offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");

  // console.log(offsetX, offsetY);
}
// let start = new Date().getTime();

// const originPosition = { x: 0, y: 0 };

// const last = {
//   starTimestamp: start,
//   starPosition: originPosition,
//   mousePosition: originPosition,
// };

// const config = {
//   starAnimationDuration: 1500,
//   minimumTimeBwStars: 250,
//   minimumDistanceBwStars: 75,
//   glowDuration: 75,
//   maximumGlowPointSpacing: 10,
//   colors: ["249 146 253", "252 254 255"],
//   sizes: ["1.4rem", "1rem", "0.6rem"],
//   animations: ["fall1-1", "fall-2", "fall-3"],
// };

// // ****************************************** //
// // *! This is the Cursor Animation's Code  !* //
// // ****************************************** //

// let count = 0;

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const selectionRandom = (items) => items[random(0, items.lenght - 1)];

// const withUnit = (value, unit) => `${value}${unit}`;
// const px = (value) => withUnit(value, "px");
// const ms = (value) => withUnit(value, "ms");

// const calcDistance = (a, b) => {
//   const diffX = b.x - a.x;
//   const diffY = b.y - a.y;

//   return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
// };

// const calcElapsedTime = (start, end) => end - start;

// const appendElement = (element) => document.body.appendChild(element);

// const removeElement = (element, delay) =>
//   setTimeout(() => document.body.removeChild(element), delay);

// const createStar = (position) => {
//   const star = document.createElement("span");
//   const color = selectionRandom(config.colors);

//   star.className = "dot";

//   star.style.left = px(position.x);
//   star.style.top = px(position.y);
//   star.style.fontSize = selectionRandom(config.sizes);
//   star.style.color = `rgb(${color})`;
//   star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
//   star.style.animationName = config.animations[count++ % 3];
//   star.style.animationDuration = ms(config.starAnimationDuration);

//   appendElement(star);

//   removeElement(star, config.starAnimationDuration);
// };

// document.addEventListener("mousemove", (e) => {
//   createStar(e);
// });
let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition,
};

const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ["249 146 253", "252 254 255"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall-1", "fall-2", "fall-3"],
};

let count = 0;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  selectRandom = (items) => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
  px = (value) => withUnit(value, "px"),
  ms = (value) => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const calcElapsedTime = (start, end) => end - start;

const appendElement = (element) => document.body.appendChild(element),
  removeElement = (element, delay) =>
    setTimeout(() => document.body.removeChild(element), delay);

const createStar = (position) => {
  const star = document.createElement("span"),
    color = selectRandom(config.colors);

  star.className = "dot";

  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.starAnimationDuration = ms(config.starAnimationDuration);

  appendElement(star);

  removeElement(star, config.starAnimationDuration);
};
document.addEventListener("mousemove", (e) => {
  createStar(e);
});
