//toggleMenu
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("-translate-y-full");
}

//category Dropdown
const categoryDropdown = document.getElementById("categoryDropdown");
fetch("https://fakestoreapi.com/products/categories")
  .then((response) => response.json())
  .then((categories) => renderCategories(categories))
  .catch((err) => console.log(err));

function renderCategories(categories) {
  const template = categories
    .map(
      (category) => `
    <a href="#" class="text-white hover:text-yellow-950 transition">
      ${category}
    </a>
  `
    )
    .join("");
  categoryDropdown.innerHTML = template;
}
