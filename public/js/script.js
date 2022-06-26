const list = document.querySelectorAll(".nav-list-item");
const pages = document.querySelectorAll(".page");

function activeElement() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
  pages.forEach((item) => {
    item.classList.remove("active-page");
    if (item.id + "-li" === this.id) item.classList.add("active-page");
  });
}

list.forEach((item) => {
  item.addEventListener("click", activeElement);
});

// TODO: put in some nice visual elements
// TODO: try doing a parallax website
