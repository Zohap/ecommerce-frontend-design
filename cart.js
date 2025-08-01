// ====================
// Page Keyboard Navigation
// ====================

// List all your pages in correct navigation order
const pages = [
  "index.html",
  "ProductListing.html",
  "ProductSizing.html",
  "order.html",
  "cart.html"
];

// Get the current page name from URL
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const currentIndex = pages.indexOf(currentPage);

// Enable left/right arrow key navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" && currentIndex < pages.length - 1) {
    window.location.href = pages[currentIndex + 1];
  } else if (event.key === "ArrowLeft" && currentIndex > 0) {
    window.location.href = pages[currentIndex - 1];
  }
});


// ====================
// Image Hover Effect (Box Shadow + Scale)
// ====================

const savedImages = document.querySelectorAll('.middle-item img');

savedImages.forEach((img) => {
  img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

  img.addEventListener('mouseenter', () => {
    img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    img.style.transform = 'scale(1.03)';
  });

  img.addEventListener('mouseleave', () => {
    img.style.boxShadow = 'none';
    img.style.transform = 'scale(1)';
  });
});


// ====================
// "Move to Cart" Button Logic
// ====================

const moveButtons = document.querySelectorAll('.middle-item .move');

moveButtons.forEach((button) => {
  const span = button.querySelector('.move-to');
  const icon = button.querySelector('.cart-icon');

  // Handle click: show confirmation and hide icon
  button.addEventListener('click', () => {
    if (icon) icon.style.display = 'none';
    span.textContent = '✔ Added to Cart';

    button.disabled = true;
    button.style.opacity = '0.6';
    button.style.cursor = 'not-allowed';

    // Reset after 2 seconds
    setTimeout(() => {
      span.textContent = 'Move to Cart';
      if (icon) icon.style.display = 'inline';
      button.disabled = false;
      button.style.opacity = '1';
      button.style.cursor = 'pointer';
    }, 2000);
  });

  // Optional hover effect on button
  button.addEventListener('mouseenter', () => {
    button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    button.style.transform = 'scale(1.03)';
    button.style.transition = 'all 0.3s ease';
  });

  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = 'none';
    button.style.transform = 'scale(1)';
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
const backBtn = document.querySelector('.bottom-buttons .back');
const removeAllBtn = document.querySelector('.bottom-buttons .remove-all');

// Hover effect (scale + shadow)
function addHoverEffect(btn, shadowColor = 'rgba(0, 0, 0, 0.3)') {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = `0 0 10px ${shadowColor}`;
    btn.style.transform = 'scale(1.05)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
    btn.style.transform = 'scale(1)';
  });
}

// Click effect (temporary larger shadow)
function addClickEffect(btn, shadowColor = 'rgba(0, 0, 0, 0.5)') {
  btn.addEventListener('click', () => {
    btn.style.boxShadow = `0 0 15px ${shadowColor}`;
    btn.style.transform = 'scale(1.1)';

    setTimeout(() => {
      btn.style.boxShadow = '0 0 10px ' + shadowColor;
      btn.style.transform = 'scale(1.05)';
    }, 150);

    // Alert example
    if (btn.classList.contains('back')) {
      alert('Going back to shop...');
    } else if (btn.classList.contains('remove-all')) {
      alert('All items removed!');
    }
  });
}

// Apply to both buttons
addHoverEffect(backBtn);
addClickEffect(backBtn);

addHoverEffect(removeAllBtn, 'rgba(255, 0, 0, 0.4)');
addClickEffect(removeAllBtn, 'rgba(255, 0, 0, 0.5)');

