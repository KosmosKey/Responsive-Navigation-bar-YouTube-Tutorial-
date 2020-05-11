const circeBars = document.querySelector(".circle");
const listItems = document.querySelector(".listItems");

circeBars.addEventListener("click", function () {
  listItems.classList.toggle("active");
});
