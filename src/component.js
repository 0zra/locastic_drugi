export default (text = "Hello you") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};
