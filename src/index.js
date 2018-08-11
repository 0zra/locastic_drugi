import component from "./component";
import "./main.css";

const container = document.getElementsByClassName("content-container")[0];

const createArticle = () => {
  /*create article*/
  let article = document.createElement("div");
  article.classList.add("article");
  /* image section*/
  let article__image = document.createElement("div");
  article__image.classList.add("article__image");
  article.appendChild(article__image);
  /*heading section*/
  let article__heading = document.createElement("div");
  article__heading.classList.add("article__heading");
  article__heading.innerHTML =
    "Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life";
  article.appendChild(article__heading);
  /*summary section*/
  let article__summary = document.createElement("div");
  article__summary.classList.add("article__summary");
  article__summary.innerHTML =
    "Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  article.appendChild(article__summary);
  /*link section*/
  let article__link = document.createElement("div");
  article__link.classList.add("article__link");
  let link = document.createElement("a");

  link.innerHTML = "View full article";
  link.setAttribute(
    "href",
    "http://www.locastic.com/posao/junior-front-end-developer/"
  );
  article__link.appendChild(link);
  article.appendChild(article__link);

  return article;
};
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
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
