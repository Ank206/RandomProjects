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
