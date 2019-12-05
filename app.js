const arrow = document.querySelector(".arrow");
const textBox = document.querySelector(".text_box");

window.addEventListener("load", () => {
  textBox.addEventListener("input", () => {
    arrow.classList.remove("inactive");
  });
  arrow.addEventListener("click", () => {
    const name = textBox.value;
    localStorage.clear();
    localStorage.setItem("username", name);
  });
  textBox.keyup(function (event) {
    if (event.which === 13 || event.keyCode === 13) {
        event.preventDefault();
  });
});
