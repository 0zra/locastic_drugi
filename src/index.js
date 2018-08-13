import createArticle from "./article";
import "./main.css";

const container = document.getElementsByClassName("content-container")[0];

/*napuni stranicu clancima*/
for (let i = 0; i < 6; i++) {
  let article_container = document.createElement("div");
  article_container.classList.add("article-container");
  article_container.appendChild(createArticle());
  container.appendChild(article_container);
}

/*nav bar icon transformation*/
const icon = document.getElementsByClassName("icon")[0];

icon.onclick = function() {
  icon.classList.toggle("change");
  const navigacija = document.getElementById("navigation");
  navigacija.classList.toggle("tablet-sidebar");
  const works = document
    .getElementsByClassName("fix")[0]
    .classList.toggle("sidebar-fix");
  let lista = document.getElementsByClassName(
    "header__navigation__dropdown-content"
  )[0];

  lista.classList.toggle("show");
  const unclickable = document.getElementById("dropdown");
  unclickable.classList.toggle("unclickable");
  const body = document.getElementsByTagName("BODY")[0];
  body.classList.toggle("fixed");
};

/* dropdown functionality*/
const works = document.getElementById("dropdown");
works.onclick = () => {
  let lista = document.getElementsByClassName(
    "header__navigation__dropdown-content"
  )[0];
  if (!lista.classList.contains("sidebar-fix")) {
    lista.classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches(".header__navigation__dropbtn")) {
      let lista = document.getElementsByClassName(
        "header__navigation__dropdown-content"
      )[0];

      if (lista.classList.contains("show")) {
        lista.classList.remove("show");
      }
    }
  };
};

/*
slider carousel
*/
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}
