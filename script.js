/* =========================================================
   BENEA_K — Premium Website JavaScript
   ========================================================= */

/* ─────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────── */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking links
  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}

/* ─────────────────────────────────────────
   NAVBAR SCROLL EFFECT
───────────────────────────────────────── */
const navWrapper = document.querySelector(".nav-wrapper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navWrapper.classList.add("scrolled");
  } else {
    navWrapper.classList.remove("scrolled");
  }
});

/* ─────────────────────────────────────────
   PRODUCT FILTER
───────────────────────────────────────── */
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Add active class
    button.classList.add("active");

    const filter = button.dataset.filter;

    productCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 100);

      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

/* ─────────────────────────────────────────
   SCROLL REVEAL ANIMATION
───────────────────────────────────────── */
const revealElements = document.querySelectorAll(
  ".product-card, .feature-item, .contact-card, .section-header, .products-cta"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ─────────────────────────────────────────
   CONTACT FORM → WHATSAPP
───────────────────────────────────────── */
function sendWhatsApp() {

  const name = document.getElementById("name")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const product = document.getElementById("product")?.value;
  const message = document.getElementById("message")?.value.trim();

  if (!name || !phone) {
    alert("Please enter your name and phone number.");
    return;
  }

  const whatsappMessage =
    `Hello BENEA_K 👋

My name is: ${name}

Phone Number: ${phone}

Product Interested In: ${product || "Not specified"}

Message:
${message || "No additional message"}

Thank you.`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Seller WhatsApp number
  const whatsappNumber = "233542395987";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
    "_blank"
  );
}

/* ─────────────────────────────────────────
   ACTIVE NAV LINK ON SCROLL
───────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href && href.includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ─────────────────────────────────────────
   HERO BUTTON RIPPLE EFFECT
───────────────────────────────────────── */
const buttons = document.querySelectorAll(
  ".btn-primary, .btn-secondary, .product-btn, .overlay-btn, .nav-cta"
);

buttons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

/* ─────────────────────────────────────────
   IMAGE HOVER EFFECT
───────────────────────────────────────── */
const productImages = document.querySelectorAll(".product-img");

productImages.forEach(img => {
  img.addEventListener("mousemove", (e) => {

    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 25;
    const moveY = (y - rect.height / 2) / 25;

    img.style.transform =
      `scale(1.05) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

/* ─────────────────────────────────────────
   LOADING ANIMATION
───────────────────────────────────────── */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* ─────────────────────────────────────────
   SMOOTH SCROLLING
───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ─────────────────────────────────────────
   PRODUCT CARD ENTRANCE ANIMATION
───────────────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {

  productCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition =
        "all 0.6s cubic-bezier(0.4,0,0.2,1)";

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 120);
  });
});

/* ─────────────────────────────────────────
   PARALLAX EFFECT
───────────────────────────────────────── */
const heroOrbs = document.querySelectorAll(".hero-orb");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  heroOrbs.forEach((orb, index) => {

    const speed = (index + 1) * 0.08;

    orb.style.transform =
      `translateY(${scrollY * speed}px)`;
  });
});

/* ─────────────────────────────────────────
   COPYRIGHT YEAR
───────────────────────────────────────── */
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}