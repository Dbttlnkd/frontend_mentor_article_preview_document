const share = document.querySelector(".share");
const share_container = document.querySelector(".share_container");
const square = document.querySelector(".square");
const test = document.querySelector("card")

share.addEventListener("click", (ev) => {
  share_container.classList.toggle("show");
  square.classList.toggle("show");
  share.classList.toggle("share_toggle");
  console.log(ev);
});

window.addEventListener('click', (e) => {
    if (e.target !== share) {
            share.classList.remove("share_toggle")
            share_container.classList.remove("show");
            square.classList.remove("show")
    }
})