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

// Men Products
const menProducts = document.getElementById("men-products");
fetch("https://fakestoreapi.com/products/category/men's clothing")
  .then((response) => response.json())
  .then((products) => renderMenProducts(products))
  .catch((err) =>
    Toastify({
      text: "Failed to fetch data",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #fff8e1, #c5a46d)",
        color: "#333",
      },
      onClick: function () {},
    }).showToast()
  );

function renderMenProducts(products) {
  const template = products
    .map((product) => {
      return `
<div class="bg-neutral-800 rounded-4xl p-6 flex flex-col justify-between gap-4 text-center">
  <div class="w-full h-64 relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
    <img
      src="${product.image}"
      alt="${product.title}"
      class="object-contain h-full w-full"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
  </div>
  <h3 class="text-lg font-semibold text-gold-100 tracking-wide leading-tight">
    ${product.title}
  </h3>
  <p class="text-xl font-extrabold text-gold-300 tracking-wide">
    $${product.price}
  </p>
 <button class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group">
  <span class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
 <span class="relative z-10">BUY NOW</span>
  </button>
</div>
`;
    })
    .join("");

  menProducts.innerHTML = template;
}

// Women Products
const womenProducts = document.getElementById("women-products");
fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then((response) => response.json())
  .then((products) => renderWomenProducts(products.slice(0, 4)))
  .catch((err) =>
    Toastify({
      text: "Failed to fetch data",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #fff8e1, #c5a46d)",
        color: "#333",
      },
      onClick: function () {},
    }).showToast()
  );

function renderWomenProducts(products) {
  const template = products
    .map((product) => {
      return `
<div class="bg-neutral-800 rounded-4xl p-6 flex flex-col justify-between gap-4 text-center">
  <div class="w-full h-64 relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
    <img
      src="${product.image}"
      alt="${product.title}"
      class="object-contain h-full w-full"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
  </div>
  <h3 class="text-lg font-semibold text-gold-100 tracking-wide leading-tight">
    ${product.title}
  </h3>
  <p class="text-xl font-extrabold text-gold-300 tracking-wide">
    $${product.price}
  </p>
 <button class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group">
  <span class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
 <span class="relative z-10">BUY NOW</span>
  </button>
</div>
`;
    })
    .join("");
  womenProducts.innerHTML = template;
}

// Jewelry Products
const jewelryProducts = document.getElementById("jewelry-products");
fetch("https://fakestoreapi.com/products/category/jewelery")
  .then((response) => response.json())
  .then((products) => renderJewelryProducts(products))
  .catch((err) =>
    Toastify({
      text: "Failed to fetch data",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #fff8e1, #c5a46d)",
        color: "#333",
      },
      onClick: function () {},
    }).showToast()
  );

function renderJewelryProducts(products) {
  const template = products
    .map((product) => {
      return `
  <div class="bg-neutral-800 rounded-4xl p-6 flex flex-col justify-between gap-4 text-center">
  <div class="w-full h-64 relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
    <img
      src="${product.image}"
      alt="${product.title}"
      class="object-contain h-full w-full"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
  </div>
  <h3 class="text-lg font-semibold text-gold-100 tracking-wide leading-tight">
    ${product.title}
  </h3>
  <p class="text-xl font-extrabold text-gold-300 tracking-wide">
    $${product.price}
  </p>
 <button class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group">
  <span class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
 <span class="relative z-10">BUY NOW</span>
  </button>
</div>
      `;
    })
    .join("");
  jewelryProducts.innerHTML = template;
}

//Testimonials Section
const testimonials = [
  {
    text: "Hi, I just wanted to let you know that I received the suit this week and I love it. It’s been beautifully made and every detail is perfect. Please pass on my appreciation to the tailor and the team that made it. Thank you guys, you are the best. I will recommend you.",
    author: "Richard Romero",
  },
  {
    text: "Absolutely stunning craftsmanship! I felt like royalty wearing my custom suit. You guys are amazing!",
    author: "James Winston",
  },
  {
    text: "The fit is just perfect. Never had a suit hug my body like this. Worth every penny.",
    author: "Luca Fernández",
  },
];

let current = 0;

const textEl = document.getElementById("testimonial-text");
const authorEl = document.getElementById("testimonial-author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateTestimonial(index) {
  textEl.textContent = testimonials[index].text;
  authorEl.textContent = testimonials[index].author;
}

updateTestimonial(current);

prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = testimonials.length - 1;
  }
  updateTestimonial(current);
});

nextBtn.addEventListener("click", () => {
  current++;
  if (current >= testimonials.length) {
    current = 0;
  }
  updateTestimonial(current);
});

//Electronics Products
const electronicsProducts = document.getElementById("electronics-products");
fetch("https://fakestoreapi.com/products/category/electronics")
  .then((response) => response.json())
  .then((products) => renderElectronicsProducts(products.slice(0, 4)))
  .catch((err) =>
    Toastify({
      text: "Failed to fetch data",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #fff8e1, #c5a46d)",
        color: "#333",
      },
      onClick: function () {},
    }).showToast()
  );
function renderElectronicsProducts(products) {
  const template = products
    .map((product) => {
      return `
  <div class="bg-neutral-800 rounded-4xl p-6 flex flex-col justify-between gap-4 text-center">
  <div class="w-full h-64 relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
    <img
      src="${product.image}"
      alt="${product.title}"
      class="object-contain h-full w-full"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
  </div>
  <h3 class="text-lg font-semibold text-gold-100 tracking-wide leading-tight">
    ${product.title}
  </h3>
  <p class="text-xl font-extrabold text-gold-300 tracking-wide">
    $${product.price}
  </p>
 <button class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group">
  <span class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
 <span class="relative z-10">BUY NOW</span>
  </button>
</div>
      `;
    })
    .join("");
  electronicsProducts.innerHTML = template;
}
