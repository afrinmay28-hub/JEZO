const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
const searchBtn = document.getElementById("searchBtn");
const cartBtn = document.getElementById("cartBtn");

let cart = 0;

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
    showToast(`${button.dataset.product} added to bag`);
  });
});

cartBtn.addEventListener("click", () => {
  showToast(cart ? `${cart} item${cart > 1 ? "s" : ""} in your bag` : "Your bag is empty");
});

searchBtn.addEventListener("click", () => {
  showToast("Search is ready for your next update");
});

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (!email) return;
  message.textContent = "You're on the JEZØ list.";
  event.target.reset();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
