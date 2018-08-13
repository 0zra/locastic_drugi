const handleSubmit = () => {
  let form = document.getElementById("submit");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("radi");
  });
};
export default handleSubmit;
