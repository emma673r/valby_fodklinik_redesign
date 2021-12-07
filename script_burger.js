let burger = document.querySelector("#burger_menu");
let burgerIcon = document.querySelector("#burger_icon");

//function burgerMenu()
function burgerMenu() {
  console.log("burgerMenu");
//   document.burger.style.display = "none";
//   document.burgerIcon.style.display = "block";
  document
    .querySelector("#burger_icon")
    .addEventListener("click", showBurgerMenu);
}

function showBurgerMenu() {
  console.log("showBurgerMenu");
//   document.burgerIcon.addEventListener("click", burgerMenu);
//   document.burger.style.display = "block";
//   document.burgerIcon.style.display = "none";
}
