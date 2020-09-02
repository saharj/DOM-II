// Your code goes here
const scrollHome = (e) => {
  e.target.style.cursor = "all-scroll";
};

const bodyElem = document.querySelector("body");

bodyElem.addEventListener("wheel", scrollHome);
bodyElem.addEventListener("mousemove", (e) => {
  // Check if body has an "all-scroll" cursor
  if (bodyElem.style.cursor === "all-scroll") {
    e.target.style.cursor = "unset";
  }
});
bodyElem.addEventListener("keydown", (e) => {
  if (e.keyCode === 70) {
    alert("WOOOOOO");
  }
});

const header = document.querySelector(".main-navigation");
header.addEventListener(
  "mouseenter",
  (e) => {
    header.style.backgroundColor = "#f9dfc9";
  },
  false
);

header.addEventListener(
  "mouseleave",
  (e) => {
    header.style.backgroundColor = "#fff";
  },
  false
);

const contentPick = document.querySelector(".content-pick");
contentPick.addEventListener(
  "mousedown",
  (e) => {
    e.preventDefault();
    if (e.target.className === "btn") {
      confirm(
        `You requested a sign up for  "${e.target.parentNode.firstElementChild.innerText}"`
      );
    }
  },
  false
);

const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const currentColor = e.target.style.color;
    e.target.style.color = currentColor === "blue" ? null : "blue";
  });

  item.addEventListener("mouseover", (e) => {
    e.target.style.cursor = "pointer";
  });
});

const pics = document.querySelectorAll("img");
pics.forEach((image) => {
  image.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Sorry! Right click is not allowed on this website.");
  });
});

const pageLogo = document.querySelector(".logo-heading");
pageLogo.addEventListener("mouseover", (e) => {
  header.appendChild(createTooltip());
});

const createTooltip = () => {
  const tooltip = document.createElement("span");
  tooltip.innerHTML = "Press `f` and see what happens :)";
  tooltip.className = "tooltip";
  tooltip.style.fontFamily = "Indie Flower";
  tooltip.style.fontSize = "1.5rem";
  tooltip.style.border = "1px solid black";
  tooltip.style.backgroundColor = "#fff";
  tooltip.style.position = "absolute";
  tooltip.style.left = "23%";
  tooltip.style.top = "7rem";
  tooltip.style.padding = "1rem";
  return tooltip;
};

pageLogo.addEventListener(
  "mouseleave",
  (e) => {
    const tooltip = document.querySelector(".main-navigation span");
    if (tooltip) {
      header.removeChild(tooltip);
    }
  },
  false
);
