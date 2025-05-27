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

// Banner Text
const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");

const txt1 = "Everything You Love, ";
const txt2 = "All in One Place";

let i1 = 0;
let i2 = 0;

function type() {
  if (i1 < txt1.length) part1.textContent += txt1[i1++];
  else if (i2 < txt2.length) part2.textContent += txt2[i2++];
  setTimeout(type, 60);
}

type();
