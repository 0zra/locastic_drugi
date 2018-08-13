const handleSubmit = () => {
  let form = document.getElementById("submit");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("radi");
  });
};
export default handleSubmit;

const alertMessage = (target, message) => {
  let trokut = document.createElement("div");
  trokut.classList.add("triangle");
  let poruka = document.createElement("div");
  poruka.classList.add("alert-message");
  poruka.innerHTML = message;
  target.after(poruka);
  target.after(trokut);
};
