const blocksCollection = document.querySelectorAll(".block");
const blocksList = Array.from(blocksCollection);
localStorage.setItem("lowest", 0);
var timeout, interval;

blocksList.forEach((block, i) => {
  block.style.order = 0;
  block.addEventListener("click", (e) => {
    const lowest = localStorage.getItem("lowest");
    e.target.style.order = lowest - 1;
    localStorage.setItem("lowest", lowest - 1);
  });

  block.addEventListener(
    "mousedown",
    (e) => {
      timeout = setTimeout(function () {
        interval = setInterval(function () {
          addMarginLeft(e.target);
        }, 50);
      }, 300);
    },
    false
  );
  block.addEventListener("mouseup", (e) => {
    clearTimeout(timeout);
    clearInterval(interval);
    block.removeEventListener(
      "mousedown",
      (e) => {
        addMarginLeft(e.target);
      },
      false
    );
  });
});

const addMarginLeft = (elem) => {
  const currentM =
    elem.style.marginLeft.length > 0
      ? parseInt(elem.style.marginLeft.split("px")[0])
      : 0;

  if (currentM <= 800) {
    elem.style.marginLeft = `${currentM + 3}px`;
  }
};
