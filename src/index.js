import component from "./component";
import "./main.css";

const container = document.getElementsByClassName("content-container")[0];
for (let i = 0; i < 6; i++) {
  let article = document.createElement("div");
  article.classList.add("article");
  container.appendChild(article);
}
