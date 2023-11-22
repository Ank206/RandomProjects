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
    -80
  );

  track.dataset.percentage = nextPercentage;

  //   track.style.transform = `translate(${nextPercentage}%, -50%)`;
  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  // for (const image of track.getElementsByClassName("image")) {
  //   // image.style.objectPosition = `${-nextPercentage}% 50%`;
  //   image.animate(
  //     {
  //       objectPosition: `${nextPercentage + 100}% 50%`,
  //     },
  //     {
  //       duration: 1200,
  //       fill: "forwards",
  //     }
  //   );
  // }
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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const elements = document.querySelectorAll(".word");
// function makeRed(event) {
//   // event.target.style.color = "red";
//   event.target.style.opacity = 1;
//   // event.target.children[0].style.color = "red";
//   const childElements = event.target.querySelectorAll(".letter");
//   childElements.forEach((childElement) => {
//     childElement.style.opacity = 1;
//   });

//   elements.forEach((element) => {
//     if (element !== event.target) {
//       // element.style.color = "green";
//       element.style.opacity = 0.3;
//     }
//   });
// }
// function back(event) {
//   // event.target.style.color = "white";
//   event.target.style.opacity = 1;

//   elements.forEach((element) => {
//     if (element !== event.target) {
//       // element.style.color = "white";
//       element.style.opacity = 1;
//     }
//   });
// }

// elements.forEach((element) => {
//   element.addEventListener("mouseover", makeRed);
//   element.addEventListener("mouseout", back);
// });
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// document.querySelectorAll(".word").forEach((h1) => {
//   h1.onmouseout = (e) => {
//     e.target.style.color = "white";
//   };
// });

// const enhance = (id) => {
//   // document.get;``
//   const element = document.getElementsByClassName(id);
//   const text = element.innerText.split("");
//   // now the text array has all the words of the tag selected by the id.
//   element.innerText = "";

//   text.forEach((letter) => {
//     const span = document.createElement("span");
//     span.className = "letter";
//     span.innerText = letter;
//     element.appendChild(span);
//   });
// };

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const enhance = (e) => {
//   const text = e.innerText.split("");
//   // now the text array has all the words of the tag selected by the id.
//   e.innerText = ".";
//   // e.style.padding = 10px;

//   text.forEach((letter) => {
//     const span = document.createElement("div");
//     span.className = "letter";
//     span.innerText = letter;
//     e.appendChild(span);
//   });
// };

// const q = document.querySelectorAll("#wordid");
// q.forEach((word) => {
//   enhance(word);
// });
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const letterSelector = document.querySelectorAll(".letter");
// letterSelector.forEach((element) => {
//   element.addEventListener("mouseover", makeRed);
//   element.addEventListener("mouseout", back);
//   element.style.color = "red";
// });
// const a = document.querySelectorAll(".letter");
// function makeRed(event) {
//   // event.target.style.color = "red";
//   event.target.style.opacity = 1;

//   a.forEach((element) => {
//     if (element !== event.target) {
//       // element.style.color = "green";
//       element.style.opacity = 0.3;
//     }
//   });
// }
// function back(event) {
//   // event.target.style.color = "white";
//   event.target.style.opacity = 1;

//   a.forEach((element) => {
//     if (element !== event.target) {
//       // element.style.color = "white";
//       element.style.opacity = 1;
//     }
//   });
// }

// a.forEach((element) => {
//   element.addEventListener("mouseover", makeRed);
//   element.addEventListener("mouseout", back);
// });

// ! Code for the RANFOMIZER EFFECT on the hover

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const randomizer = document.querySelector("#final");
randomizer.onmouseover = (event) => {
  let itr = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < itr) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (itr >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    itr += 1 / 3;
  }, 30);
};

// const allWords = document.querySelectorAll(".word");
// allWords.forEach((e) => {
//   e.onmouseover = (event) => {
//     let itr = 0;

//     clearInterval(interval);

//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if (index < itr) {
//             return event.target.dataset.value[index];
//           }
//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if (itr >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }

//       itr += 1 / 3;
//     }, 30);
//   };
// });
