import createArticle from "./article";
import handleSubmit from "./formSubmit";
import "./main.css";

const loadArticles = () => {
  const container = document.getElementsByClassName("content-container")[0];
  for (let i = 0; i < 6; i++) {
    let article_container = document.createElement("div");
    article_container.classList.add("article-container");
    article_container.appendChild(createArticle());
    container.appendChild(article_container);
  }
};
/*Initial load*/
loadArticles();

/*Load more button*/
let button = document.getElementById("loadArticlesButton");
button.onclick = () => {
  loadArticles();
};

/*nav bar icon transformation*/
const icon = document.getElementById("icon");

icon.onclick = function() {
  icon.classList.toggle("change"); //transform icon
  const navigacija = document.getElementById("navigation");
  navigacija.classList.toggle("tablet-sidebar"); //display navbar verically
  const works = document
    .getElementsByClassName("fix")[0]
    .classList.toggle("sidebar-fix"); //dropdown-button dispaly & functionality fix
  let lista = document.getElementsByClassName(
    "header__navigation__dropdown-content"
  )[0];

  lista.classList.toggle("show"); //display dropdown menu options
  const unclickable = document.getElementById("dropdown");
  unclickable.classList.toggle("unclickable"); // make dropdown-button unclickable
  const body = document.getElementsByTagName("BODY")[0];
  body.classList.toggle("fixed"); //fixate the screen to the top of the page
};

/* dropdown functionality*/
const works = document.getElementById("dropdown");
works.onclick = () => {
  let lista = document.getElementsByClassName(
    "header__navigation__dropdown-content"
  )[0];
  if (!lista.classList.contains("sidebar-fix")) {
    //check if we are in tablet/mobile mode
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
handleSubmit();
