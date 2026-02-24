// Smooth scroll to collection
document.getElementById("shopBtn").addEventListener("click", function() {
    document.getElementById("collection").scrollIntoView({
        behavior: "smooth"
    });
});

// Navbar shadow on scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});