// 🌐 Smooth Scroll
document.getElementById("exploreBtn").onclick = () => {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
};

// ☕ Order Function
function orderCoffee(name) {
  alert(name + " added to your order ☕");
}

// 🌙 Dark Mode Toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};