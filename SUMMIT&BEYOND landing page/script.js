// Custom cursor with easing animation
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { 
  mx = e.clientX; 
  my = e.clientY; 
});

function animateCursor() {
  cursor.style.left = mx - 5 + 'px';
  cursor.style.top = my - 5 + 'px';
  
  // Easing calculations for the outer ring
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  
  ring.style.left = rx - 18 + 'px';
  ring.style.top = ry - 18 + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scroll reveal observer
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('visible'); 
  });
}, { threshold: 0.12 });

reveals.forEach(r => obs.observe(r));

// Testimonial gallery logic
const testimonials = [
  { text: "Standing on the summit of K2 at dawn, with Summit & Beyond's team beside me — it was not just a climb. It was the most profound experience of my life.", author: "— MARCO REINHARDT, ALPINIST — GERMANY" },
  { text: "The Fairy Meadows trek changed everything for me. Flawless logistics, incredible guides, and landscapes that feel borrowed from another planet.", author: "— SARA KIMURA, ADVENTURE TRAVELLER — JAPAN" },
  { text: "I've climbed with agencies worldwide. None match the expertise, warmth, and sheer professionalism of the Summit & Beyond team.", author: "— DAVID MCLEAN, MOUNTAINEER — SCOTLAND" }
];

let current = 0;

function switchTestimonial(i) {
  current = i;
  document.getElementById('testimonial-text').style.opacity = 0;
  document.getElementById('testimonial-author').style.opacity = 0;
  
  setTimeout(() => {
    document.getElementById('testimonial-text').textContent = testimonials[i].text;
    document.getElementById('testimonial-author').textContent = testimonials[i].author;
    document.getElementById('testimonial-text').style.opacity = 1;
    document.getElementById('testimonial-author').style.opacity = 1;
  }, 300);
  
  document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === i));
}

// Set transitions
document.getElementById('testimonial-text').style.transition = 'opacity 0.4s';
document.getElementById('testimonial-author').style.transition = 'opacity 0.4s';

// Auto-rotate testimonials
setInterval(() => switchTestimonial((current + 1) % 3), 5000);