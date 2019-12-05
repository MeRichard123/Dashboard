const arrow = document.querySelector(".arrow");
const textBox = document.querySelector(".text_box");

window.addEventListener("load", () => {
  textBox.addEventListener("input", (e) => {
    e.preventDefault()
    arrow.classList.remove("inactive");
  });
  arrow.addEventListener("click", () => {
    const name = textBox.value;
    localStorage.clear();
    localStorage.setItem("username", name);
  });
});
