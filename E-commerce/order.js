document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(button => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      const container = this.parentElement;

      // Close other dropdowns
      document.querySelectorAll(".dropdown-container").forEach(drop => {
        if (drop !== container) {
          drop.classList.remove("active");
        }
      });

      // Toggle the current dropdown
      container.classList.toggle("active");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-container").forEach(drop => {
      drop.classList.remove("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const langSelect = document.getElementById("langSelect");
  const selected = langSelect.querySelector(".selected");
  const options = langSelect.querySelector(".options");
  const chevron = selected.querySelector("i");

  selected.addEventListener("click", () => {
    langSelect.classList.toggle("active");
    chevron.classList.toggle("fa-chevron-down");
    chevron.classList.toggle("fa-chevron-up");
  });

  options.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {
      const lang = option.textContent;
      const flag = option.getAttribute("data-flag");

      selected.querySelector("img").src = flag;
      selected.querySelector("span").textContent = lang;

      langSelect.classList.remove("active");
      chevron.classList.add("fa-chevron-down");
      chevron.classList.remove("fa-chevron-up");
    });
  });

  document.addEventListener("click", function (e) {
    if (!langSelect.contains(e.target)) {
      langSelect.classList.remove("active");
      chevron.classList.add("fa-chevron-down");
      chevron.classList.remove("fa-chevron-up");
    }
  });
});
document.querySelectorAll('.product-card-one').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});
// Handle button clicks
document.querySelector('.inquiry').addEventListener('click', () => {
  alert('Inquiry sent to the seller!');
});

document.querySelector('.profile').addEventListener('click', () => {
  alert("Redirecting to seller's profile...");
  // You can redirect with: window.location.href = 'seller-profile.html';
});
const saveLater = document.querySelector('.save-later');
const heartIcon = saveLater.querySelector('i');
saveLater.addEventListener('click', () => {
  saveLater.classList.toggle('active');
  heartIcon.classList.toggle('fas');
  heartIcon.classList.toggle('far');

  animateElement(heartIcon, 'animate-heart');
});
