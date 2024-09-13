const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const menuItemContainer = document.getElementById("menu-item-container");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("overflow-y-hidden");
  menu.classList.toggle("hidden");
});
Array.from(menuItemContainer.children).forEach((item) =>
  item.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    document.body.classList.toggle("overflow-y-hidden");
  })
);
closeBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-y-hidden");
});
