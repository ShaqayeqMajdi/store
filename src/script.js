const root = document.getElementById("root");

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
  <div class="w-full h-64 bg-white relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
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
  <div class="w-full h-64 bg-white relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
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
  <div class="w-full h-64 bg-white relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
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
  <div class="w-full h-64 bg-white relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
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

//Men Page
function handleAClick(event) {
  event.preventDefault();
  const href = event.target.getAttribute("href");
  history.pushState({}, "", href);
  checkState();
}
function renderMenPage() {
  root.innerHTML = `<div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto h-auto my-10"
    >
      <div class="p-4 bg-slate-200 rounded-3xl animate-pulse">
        <div
          class="w-full h-60 bg-slate-300 relative rounded-3xl overflow-hidden"
        ></div>
        <div class="bg-slate-300 w-full h-8 rounded-lg mt-4"></div>
        <div class="bg-slate-300 w-24 h-6 rounded-lg mt-4 ml-20"></div>
        <div class="h-12 bg-slate-300 rounded-3xl mt-4 w-full"></div>
      </div>
      <div class="p-4 bg-slate-200 rounded-3xl animate-pulse">
        <div
          class="w-full h-60 bg-slate-300 relative rounded-3xl overflow-hidden"
        ></div>
        <div class="bg-slate-300 w-full h-8 rounded-lg mt-4"></div>
        <div class="bg-slate-300 w-24 h-6 rounded-lg mt-4 ml-20"></div>
        <div class="h-12 bg-slate-300 rounded-3xl mt-4 w-full"></div>
      </div>
      <div class="p-4 bg-slate-200 rounded-3xl animate-pulse">
        <div
          class="w-full h-60 bg-slate-300 relative rounded-3xl overflow-hidden"
        ></div>
        <div class="bg-slate-300 w-full h-8 rounded-lg mt-4"></div>
        <div class="bg-slate-300 w-24 h-6 rounded-lg mt-4 ml-20"></div>
        <div class="h-12 bg-slate-300 rounded-3xl mt-4 w-full"></div>
      </div>
      <div class="p-4 bg-slate-200 rounded-3xl animate-pulse">
        <div
          class="w-full h-60 bg-slate-300 relative rounded-3xl overflow-hidden"
        ></div>
        <div class="bg-slate-300 w-full h-8 rounded-lg mt-4"></div>
        <div class="bg-slate-300 w-24 h-6 rounded-lg mt-4 ml-20"></div>
        <div class="h-12 bg-slate-300 rounded-3xl mt-4 w-full"></div>
      </div>
    </div>`;
  fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then((response) => response.json())
    .then((products) => renderMenData(products))
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

  function renderMenData(data) {
    const template = data
      .map((item) => {
        return `
<div class="bg-neutral-900 rounded-4xl p-6 mb-12 flex flex-col justify-between gap-4 text-center">
  <div class="w-full h-64 bg-white relative rounded-3xl overflow-hidden border-2 border-gold-400 flex items-center justify-center">
    <img
      src="${item.image}"
      alt="${item.title}"
      class="object-contain h-full w-full"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
  </div>
  <h3 class="text-lg font-semibold text-gold-100 tracking-wide leading-tight">
    ${item.title}
  </h3>
  <p class="text-xl font-extrabold text-gold-300 tracking-wide">
    $${item.price}
  </p>
 <button class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group">
  <span class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
 <span class="relative z-10">BUY NOW</span>
  </button>
</div>
`;
      })
      .join("");
    const container = `
     <div class="text-center mb-10 mt-12">
          <div
            class="flex justify-center items-center gap-2 text-3xl tracking-widest text-stone-50 font-medium"
          >
            <span class="h-0.5 w-7 bg-gold-100"></span>
            <span>‌Men</span>
            <span class="h-0.5 w-7 bg-gold-100"></span>
          </div>
        </div>

    <div
      class= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
      ${template}
      </div>
      `;
    root.innerHTML = container;
  }
}
function renderMainPage() {
  const template = `
        <!-- About Us Section -->
      <section
        class="flex flex-col md:flex-row items-center justify-center px-9 py-20 gap-10"
      >
        <div class="w-full max-w-lg md:w-1/2 flex justify-center">
          <img
            src="./assets/images/2-layers.png"
            alt="tailor"
            class="w-full max-w-md object-contain"
          />
        </div>

        <div class="text-center md:text-left max-w-lg md:w-1/2">
          <h2
            class="text-xl md:text-5xl font-Baskervville font-semibold leading-tight text-white mt-6 md:mt-0"
          >
            DISCOVER TRUE <br />
            QUALITY
          </h2>
          <div class="flex items-center justify-center md:justify-start mt-4">
            <span
              class="text-xs md:text-sm text-gold-100 uppercase font-semibold"
            >
              Handcrafted Suit</span
            >
            <div class="ml-4 relative md:w-28 w-16 h-px bg-gold-300">
              <div
                class="w-2 h-2 bg-gold-300 rotate-45 absolute -left-2 top-1/2 -translate-y-1/2"
              ></div>
            </div>
          </div>

          <p
            class="text-gray-100 mt-6 px-5 leading-relaxed text-sm md:text-base text-left md:text-justify"
          >
            We provide you with great suits that befit you and your lifestyle.
            Our suits are made from the highest quality fabrics and guaranteed
            to give you functionality, durability and comfort. Our skilled
            master tailors handle all of our cutting and sewing, ensuring
            precision in all production processes and paying attention to the
            details. Come to us and choose the best suit for your lifestyle.
          </p>
          <button
            class="relative overflow-hidden mt-8 md:px-8 px-1 py-3 cursor-pointer bg-gold-100 text-white uppercase text-xs tracking-wider transition group"
          >
            <span class="relative z-10">Learn About Us</span>
            <span
              class="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-400 ease-in-out"
            ></span>
          </button>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="text-center py-12 px-4 bg-neutral-700">
        <div class="flex items-center justify-center gap-4 mb-10">
          <span class="w-32 h-px bg-gold-100"></span>
          <span
            class="relative text-sm md:text-lg tracking-[0.3em] uppercase font-semibold text-stone-50"
          >
            Our Products
            <span
              class="absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold-100 rotate-45 inline-block"
            ></span>
            <span
              class="absolute -right-5 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold-100 rotate-45 inline-block"
            ></span>
          </span>
          <span class="w-32 h-px bg-gold-100"></span>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
        >
          <div class="flex flex-col items-center text-center">
            <div class="relative w-52 h-52 rounded-full overflow-hidden">
              <img
                src="./assets/images/men.jpg"
                alt="men"
                class="w-full object-cover rounded-full"
              />
              <a
                onclick="handleAClick(event)"
                href="/men"
                class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <i class="fas fa-eye text-gold-100 text-2xl"></i>
              </a>
            </div>
            <h3
              class="mt-6 text-xl font-semibold tracking-widest text-stone-50"
            >
              Men's clothing
            </h3>
            <p class="mt-3 text-gray-100 text-sm max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              optio quae illo excepturi at.
            </p>
            <a
              href="#"
              class="relative mt-6 px-6 py-3 border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group"
            >
              <span
                class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
              ></span>
              <span class="relative z-10">DISCOVER</span>
            </a>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="relative w-52 h-52 rounded-full overflow-hidden">
              <img
                src="./assets/images/women.jpg"
                alt="women"
                class="w-full object-cover rounded-full"
              />
              <a
                href="#"
                class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <i class="fas fa-eye text-gold-100 text-2xl"></i>
              </a>
            </div>
            <h3
              class="mt-6 text-xl font-semibold tracking-widest text-stone-50"
            >
              Women's clothing
            </h3>
            <p class="mt-3 text-gray-100 text-sm max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              optio quae illo excepturi at.
            </p>
            <button
              class="relative mt-6 px-6 py-3 border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group"
            >
              <span
                class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
              ></span>
              <span class="relative z-10">DISCOVER</span>
            </button>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="relative w-52 h-52 rounded-full overflow-hidden">
              <img
                src="./assets/images/jewelry.jpg"
                alt="jewelry"
                class="w-full object-cover rounded-full"
              />
              <a
                href="#"
                class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <i class="fas fa-eye text-gold-100 text-2xl"></i>
              </a>
            </div>
            <h3
              class="mt-6 text-xl font-semibold tracking-widest text-stone-50"
            >
              Jewelry
            </h3>
            <p class="mt-3 text-gray-100 text-sm max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              optio quae illo excepturi at.
            </p>
            <button
              class="relative mt-6 px-6 py-3 border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group"
            >
              <span
                class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
              ></span>
              <span class="relative z-10">DISCOVER</span>
            </button>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="relative w-52 h-52 rounded-full overflow-hidden">
              <img
                src="./assets/images/electronics.jpg"
                alt="electronics"
                class="w-full object-cover rounded-full"
              />
              <a
                href="#"
                class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <i class="fas fa-eye text-gold-100 text-2xl"></i>
              </a>
            </div>
            <h3
              class="mt-6 text-xl font-semibold tracking-widest text-stone-50"
            >
              Electronics
            </h3>
            <p class="mt-3 text-gray-100 text-sm max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              optio quae illo excepturi at.
            </p>
            <button
              class="relative mt-6 px-6 py-3 border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group"
            >
              <span
                class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
              ></span>
              <span class="relative z-10">DISCOVER</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Clothing Section -->
      <section class="relative px-6 md:px-20 py-12 container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div class="space-y-6 text-center md:text-left">
            <span
              class="inline-block bg-gold-300 px-4 py-2 text-sm md:text-md font-semibold rounded-full transition-transform duration-300 hover:scale-105 hover:z-10 hover:bg-gold-400 cursor-pointer"
            >
              Fresh Fits 🌟
            </span>

            <h1
              class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-200 mb-4 leading-tight"
            >
              Clothing Categories
            </h1>

            <p class="text-zinc-300 text-base md:text-lg">
              Forget trends. Build your aura. Every piece is a vibe check —
              passed.
            </p>
            <div class="flex justify-center md:justify-start gap-4">
              <button
                class="relative overflow-hidden px-6 py-3 cursor-pointer bg-gold-100 text-white uppercase text-xs rounded-full tracking-wider transition group"
              >
                <span class="relative z-10">Browse Collection</span>
                <span
                  class="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-400 ease-in-out"
                ></span>
              </button>
              <button
                class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group"
              >
                <span
                  class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                ></span>
                <span class="relative z-10">See Lookbook</span>
              </button>
            </div>
          </div>

          <img
            src="./assets/images/clothing.jpg"
            alt="Fashion Hero Bottom"
            class="w-full h-96 object-cover rounded-4xl"
          />
        </div>
      </section>

      <!-- Men Section -->
      <section class="bg-neutral-700 py-12 px-4">
        <div class="text-center mb-12">
          <div
            class="flex justify-center items-center gap-2 text-3xl tracking-widest text-stone-50 font-medium"
          >
            <span class="h-0.5 w-7 bg-gold-100"></span>
            <span>‌Men</span>
            <span class="h-0.5 w-7 bg-gold-100"></span>
          </div>
        </div>

        <div
          id="men-products"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-stone-50 border-b-2 border-gold-400 hover:text-gold-100 hover:border-gold-100 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <div class="bg-neutral-800 h-6"></div>

      <!-- Women Section -->
      <section class="bg-neutral-700 py-12 px-4">
        <div class="text-center mb-12">
          <div
            class="flex justify-center items-center gap-2 text-3xl tracking-widest text-stone-50 font-medium"
          >
            <span class="h-0.5 w-7 bg-gold-100"></span>
            <span>‌Women</span>
            <span class="h-0.5 w-7 bg-gold-100"></span>
          </div>
        </div>

        <div
          id="women-products"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-stone-50 border-b-2 border-gold-400 hover:text-gold-100 hover:border-gold-100 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <!-- Media Section -->
      <!-- <section
      class="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10"
    >
      <div class="w-full max-w-lg md:w-1/2 flex justify-center relative">
        <img
          src="./assets/images/video.jpg"
          alt="tailor"
          class="w-full max-w-md object-contain"
        />
        <div class="absolute inset-0 bg-black/70"></div>
        <img
          src="./assets/icon/play.svg"
          alt="icon"
          class="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-36 md:right-80 md:translate-y-0 bg-amber-50/10 rounded-full z-10 transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg cursor-pointer"
        />
      </div>

      <div class="text-center md:text-left max-w-lg md:w-1/2">
        <h2
          class="text-2xl md:text-5xl font-Baskervville font-semibold leading-tight text-stone-50 mt-6 md:mt-0"
        >
          PETER IN THE <br />
          MEDIA
        </h2>
        <div class="flex items-center justify-center md:justify-start mt-4">
          <span
            class="text-xs md:text-sm text-gold-100 uppercase font-semibold tracking-[0.3em]"
          >
            press & articles</span
          >
          <div class="ml-4 relative w-32 h-px bg-gold-300">
            <div
              class="w-2 h-2 bg-gold-300 rotate-45 absolute -left-2 top-1/2 -translate-y-1/2"
            ></div>
          </div>
        </div>

        <p
          class="text-gray-100 mt-6 leading-relaxed text-sm md:text-base text-left md:text-justify"
        >
          We invite you to follow us on our social media channels for the latest
          news and event updates! Be kept up to date with the freshest ideas of
          Peter Mason and his talented team, no matter where you are in the
          world.
        </p>
        <button
          class="relative overflow-hidden mt-8 md:px-10 px-1 py-3 cursor-pointer bg-gold-100 text-white uppercase text-sm tracking-wider transition group"
        >
          <span class="relative z-10"> Watch Our Videos</span>
          <span
            class="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-400 ease-in-out"
          ></span>
        </button>
      </div>
    </section> -->

      <!-- Jewelry Section -->
      <section class="relative px-6 md:px-20 py-12 container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div class="space-y-6 text-center md:text-left">
            <span
              class="inline-block bg-gold-300 px-4 py-2 text-sm md:text-md font-semibold rounded-full transition-transform duration-300 hover:scale-105 hover:z-10 hover:bg-gold-400 cursor-pointer"
            >
              Timeless Sparkle ✨
            </span>

            <h1
              class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-200 mb-4 leading-tight"
            >
              Jewelry Collection
            </h1>

            <p class="text-zinc-300 text-base md:text-lg">
              Make every moment sparkle.
            </p>
            <div class="flex justify-center md:justify-start gap-4">
              <button
                class="relative overflow-hidden px-6 py-3 cursor-pointer bg-gold-100 text-white uppercase text-xs rounded-full tracking-wider transition group"
              >
                <span class="relative z-10">Browse Collection</span>
                <span
                  class="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-400 ease-in-out"
                ></span>
              </button>
              <button
                class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group"
              >
                <span
                  class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                ></span>
                <span class="relative z-10">See Lookbook</span>
              </button>
            </div>
          </div>

          <img
            src="./assets/images/jewelryc.jpg"
            alt="Fashion Hero Bottom"
            class="w-full h-96 object-cover rounded-4xl"
          />
        </div>
      </section>

      <!-- Jewelry Collection -->
      <section class="bg-neutral-700 py-16 px-4">
        <div class="text-center mb-12">
          <div
            class="flex justify-center items-center gap-2 text-2xl tracking-widest text-stone-50 font-medium"
          >
            <span class="h-0.5 w-7 bg-gold-100"></span>
            <span>Jewelry</span>
            <span class="h-0.5 w-7 bg-gold-100"></span>
          </div>
        </div>

        <div
          id="jewelry-products"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-stone-50 border-b-2 border-gold-400 hover:text-gold-100 hover:border-gold-100 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <!-- Testimonials Section -->
      <div
        class="relative w-full h-96 bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center px-6"
        style="background-image: url('./assets/Banner/background-3.jpg')"
      >
        <h2
          class="text-gold-100 md:text-4xl text-xl font-Quicksand tracking-widest text-center"
        >
          TESTIMONIALS
        </h2>
        <span class="text-6xl font-bold text-center text-gold-100">،،</span>
        <div class="relative w-full max-w-3xl">
          <p
            id="testimonial-text"
            class="md:text-xl text-sm leading-relaxed italic font-Quicksand mb-6 px-2 text-justify"
          ></p>

          <p
            id="testimonial-author"
            class="text-lg tracking-widest text-gold-100 font-semibold font-Aguafina uppercase text-center"
          ></p>

          <button
            id="prev-btn"
            class="hidden md:block absolute -left-10 top-4/6 -translate-y-1/2 text-gray-400 text-4xl"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            id="next-btn"
            class="hidden md:block absolute -right-10 top-4/6 -translate-y-1/2 text-gray-400 text-4xl"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Story Section -->
      <section
        class="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10 bg-neutral-700"
      >
        <div class="text-center md:text-left max-w-lg md:w-1/2">
          <h2
            class="text-2xl md:text-5xl font-Baskervville uppercase font-semibold leading-tight border-b-2 text-stone-50 mt-6 md:mt-0"
          >
            our story
          </h2>
          <p
            class="text-gray-100 mt-6 leading-relaxed text-sm md:text-base text-left md:text-justify"
          >
            Since our beginning in 1900 our goal has always been to create men’s
            clothing that looks great, fits perfectly, made from the world’s
            best fabric mills and is good value for money. Peter Mason’s success
            is built on understanding the principles of classic tailoring,
            combining them with modern designs and technology.
          </p>
          <button
            class="relative overflow-hidden mt-8 md:px-10 px-1 py-3 cursor-pointer bg-gold-100 text-white uppercase text-sm tracking-wider transition group"
          >
            <span class="relative z-10">Learn more about us</span>
            <span
              class="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-400 ease-in-out"
            ></span>
          </button>
        </div>
        <div class="w-full max-w-lg md:w-1/2 flex justify-center">
          <img
            src="./assets/images/background-10.jpg"
            alt="tailor"
            class="w-full max-w-md object-contain"
          />
        </div>
      </section>

      <!-- Electronics Section -->
      <section class="relative px-6 md:px-20 py-12 container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div class="space-y-6 text-center md:text-left">
            <span
              class="inline-block bg-gold-300 px-4 py-2 text-sm md:text-md font-semibold rounded-full transition-transform duration-300 hover:scale-105 hover:z-10 hover:bg-gold-400 cursor-pointer"
            >
              High Performance ⚡
            </span>

            <h1
              class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-200 mb-4 leading-tight"
            >
              Electronics Collection
            </h1>

            <p class="text-zinc-300 text-base md:text-lg">
              Gear Up With The Latest Tech.
            </p>
            <div class="flex justify-center md:justify-start gap-4">
              <button
                class="relative overflow-hidden px-6 py-3 cursor-pointer bg-gold-100 text-white uppercase text-xs rounded-full tracking-wider transition group"
              >
                <span class="relative z-10">Browse Collection</span>
                <span
                  class="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-400 ease-in-out"
                ></span>
              </button>
              <button
                class="relative px-6 py-3 rounded-full border text-gold-200 border-gold-300 text-sm tracking-widest overflow-hidden hover:text-white group"
              >
                <span
                  class="absolute inset-0 cursor-pointer bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                ></span>
                <span class="relative z-10">See Lookbook</span>
              </button>
            </div>
          </div>

          <img
            src="./assets/images/electronicsc.jpg"
            alt="Fashion Hero Bottom"
            class="w-full h-96 object-cover rounded-4xl"
          />
        </div>
      </section>

      <!-- Electronics Collection -->
      <section class="bg-neutral-700 py-16 px-4">
        <div class="text-center mb-12">
          <div
            class="flex justify-center items-center gap-2 text-2xl tracking-widest text-stone-50 font-medium"
          >
            <span class="h-0.5 w-7 bg-gold-100"></span>
            <span>Electronics</span>
            <span class="h-0.5 w-7 bg-gold-100"></span>
          </div>
        </div>

        <div
          id="electronics-products"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        ></div>
        <div class="mt-10 text-center">
          <a
            href="#"
            class="inline-block text-stone-50 border-b-2 border-gold-400 hover:text-gold-100 hover:border-gold-100 transition duration-300"
          >
            Load more items →
          </a>
        </div>
      </section>

      <!-- Custom Collection -->
      <section class="relative text-white">
        <div class="absolute inset-0">
          <img
            src="./assets/banner/background-16.jpg"
            alt="tailoring"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="relative z-10 px-6 py-16 md:px-12 lg:px-24 flex flex-col md:flex-row md:items-center md:justify-between container mx-auto"
        >
          <div class="max-w-xl">
            <h1
              class="text-xl md:text-6xl font-Baskervville font-bold leading-tight"
            >
              The Latest Styles & Trends
            </h1>
            <div class="mt-4 flex items-center gap-3">
              <span class="h-px w-8 bg-gold-100"></span>
              <p class="text-sm sm:text-base text-gold-100">
                From shirts to formal wear we customize everything imaginable!
              </p>
            </div>
          </div>
          <div class="mt-8 md:mt-0">
            <button
              class="relative overflow-hidden mt-8 md:px-6 px-1 py-4 cursor-pointer bg-gold-100 text-white text-md tracking-wider transition group"
            >
              <span class="relative z-10">VIEW OUR CUSTOM COLLECTION</span>
              <span
                class="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-400 ease-in-out"
              ></span>
            </button>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="px-6 py-12">
        <div
          class="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6"
        >
          <div class="w-full max-w-xs mx-auto lg:mx-0">
            <img
              src="./assets/images/background-17.jpg"
              alt="Suit"
              class="rounded w-full h-auto object-contain"
            />
          </div>
          <div class="w-full max-w-xs mx-auto lg:mx-0">
            <img
              src="./assets/images/map.png"
              alt="Map"
              class="rounded w-full h-auto object-contain"
            />
          </div>
          <div class="w-full max-w-md text-left md:text-justify">
            <h2
              class="text-xl md:text-4xl font-Baskervville mb-10 text-stone-50"
            >
              CONTACT INFO
            </h2>

            <p class="text-gray-100 mb-10 leading-relaxed">
              Have a question? Our team always ready to help. Feel free and come
              to us anytime, we are glad to see you at our studio.
            </p>

            <div class="space-y-8 text-stone-50">
              <div
                class="flex items-start justify-center md:justify-start gap-3"
              >
                <span class="text-gold-100 text-2xl"
                  ><i class="fas fa-map-marker-alt"></i
                ></span>
                <span>2277 Lorem Ave., San Diego, CA 22553</span>
              </div>
              <div
                class="flex items-start justify-center md:justify-start gap-3"
              >
                <span class="text-gold-100 text-xl"
                  ><i class="fas fa-clock"></i
                ></span>
                <span>
                  Monday - Friday: 10 am - 10pm<br />
                  Sunday: 11 am - 9pm
                </span>
              </div>
              <div
                class="flex items-start justify-center lg:justify-start gap-3"
              >
                <span class="text-gold-100 text-xl"
                  ><i class="fas fa-phone-alt"></i
                ></span>
                <span>123 - 456 - 7890</span>
              </div>
            </div>
          </div>
        </div>
      </section>
`;
  root.innerHTML = template;
  renderMenProducts();
  renderWomenProducts();
  renderJewelryProducts();
  renderElectronicsProducts();
}

function checkState() {
  const url = location.pathname;
  if (url === "/men") {
    renderMenPage();
  } else {
    renderMainPage();
  }
}

window.addEventListener("popstate", checkState);
