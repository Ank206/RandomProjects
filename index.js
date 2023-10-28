const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = (e) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -70;
  const nextPercentageUnconstrained =
    parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 0),
    -100
  );

  track.dataset.percentage = nextPercentage;

  //   track.style.transform = `translate(${nextPercentage}%, -50%)`;
  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    // image.style.objectPosition = `${-nextPercentage}% 50%`;
    image.animate(
      {
        objectPosition: `${nextPercentage + 100}% 50%`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );
  }
};

// document.querySelectorAll(".word").forEach((h1) => {
//   h1.onmouseover = (event) => {
//     // !(event.target.style.color) = "green";
//     // event.t;
//     event.target.style.color = "red";
//   };
//   h1.onmouseout = (e) => {
//     e.target.style.color = "white";
//   };
// });

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

// document.querySelectorAll(".word").forEach((h1) => {
//   h1.onmouseout = (e) => {
//     e.target.style.color = "white";
//   };
// });
