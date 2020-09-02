// Your code goes here
const scrollHome = (e) => {
  e.target.style.cursor = "all-scroll";
};
const homeElem = document.querySelector("body");
homeElem.addEventListener("wheel", scrollHome);
homeElem.addEventListener("mousemove", (e) => {
  e.target.style.cursor = "unset";
});
homeElem.style.cursor = "default";

const header = document.querySelector(".main-navigation");
header.addEventListener(
  "mouseover",
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
  "click",
  (e) => {
    e.preventDefault();
    if (e.target.className === "btn") {
      alert(
        `You requested a sign up for  "${e.target.parentNode.firstElementChild.innerText}"`
      );
    }
  },
  false
);
