//toggle-light-dark-mode
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
});

//images in the footer

const footerImages = document.querySelectorAll(".footer .images img");

//foodbar
const foodbarImage = document.querySelector(".foodbar img");

footerImages.forEach((image) => {
  image.addEventListener("click", () => {
    foodbarImage.src = image.src;
  });
});

//remove-animation
const itemImages = document.querySelectorAll(".item-img");

itemImages.forEach((img) => {
  img.addEventListener("click", () => {
    itemImages.forEach((img) => img.classList.remove("animated"));

    img.classList.add("animated");
  });
});

//add-items-in cart

const addToCartButtons = document.querySelectorAll(".images a");

const cartIcon = document.querySelector(".top-navbar .icons a i");

let cartCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartIcon.textContent = cartCount;
  });
});
