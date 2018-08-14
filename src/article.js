const myCreateElement = (type, elementClass = null, text = "") => {
  let element = document.createElement(type);
  if (elementClass != null) {
    element.classList.add(elementClass);
  }

  if (text != "") {
    element.innerHTML = text;
  }
  return element;
};

const createArticle = () => {
  /*create article*/
  let article = myCreateElement("div", "article");

  /* image section*/
  let article__image = myCreateElement("div", "article__image");
  article.appendChild(article__image);

  /*heading section*/
  let article__heading = myCreateElement(
    "div",
    "article__heading",
    "Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life"
  );
  article.appendChild(article__heading);

  /*summary section*/
  let article__summary = myCreateElement(
    "div",
    "article__summary",
    "Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  );
  article.appendChild(article__summary);

  /*link section*/
  let article__link = myCreateElement("div", "article__link");
  let link = myCreateElement("a", null, "View full article");
  link.setAttribute(
    "href",
    "http://www.locastic.com/posao/junior-front-end-developer/"
  );
  article__link.appendChild(link);
  article.appendChild(article__link);

  return article;
};
export default createArticle;
