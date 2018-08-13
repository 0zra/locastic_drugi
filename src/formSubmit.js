const handleSubmit = () => {
  let form = document.getElementById("submit");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      alert("dobra je forma");
    }
  });
};
export default handleSubmit;

const validateForm = () => {
  removeMessages();
  return validateName() && validateEmail();
};
const validateEmail = () => {
  let email = document.getElementsByName("email")[0];
  let validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!validEmailRegex.test(String(email.value).toLowerCase())) {
    email.classList.add("alert-input");
    alertMessage(email, "You must input a valid email address");
  } else {
    return true;
  }
};
const validateName = () => {
  let name = document.getElementsByName("name")[0];
  if (name.value === "") {
    name.classList.add("alert-input");
    alertMessage(name, "Name can't be empty");
  } else if (!name.value.match(/^[a-z]/i)) {
    name.classList.add("alert-input");
    alertMessage(name, "Name must start with a letter");
  } else {
    return true;
  }
};

const alertMessage = (target, message) => {
  let trokut = document.createElement("div");
  trokut.classList.add("triangle");
  let poruka = document.createElement("div");
  poruka.classList.add("alert-message");
  poruka.innerHTML = message;
  target.after(poruka);
  target.after(trokut);
};
const removeMessages = () => {
  let triangle = document.getElementsByClassName("triangle")[0];
  let message = document.getElementsByClassName("alert-message")[0];
  if (triangle) {
    triangle.parentNode.removeChild(triangle);
    message.parentNode.removeChild(message);
    let input = document.getElementsByClassName("alert-input")[0];
    input.classList.remove("alert-input");
  }
};
