import {refs} from "./refs"

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    refs.scrollBtn.style.display = "block";
  } else {
    refs.scrollBtn.style.display = "none";
  }
}

refs.scrollBtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}