/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-mode")
        ? "light"
        : "dark"
    );
  });
}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    const nomorWhatsApp = "628976817869";

    const text = `Halo, saya ingin menggunakan jasa website.

Nama: ${nama}

Email: ${email}

Pesan:

${pesan}`;

    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });
}


/* =========================
   PROJECT MODAL
========================= */

const projectCards = document.querySelectorAll(".project-card");
const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

if (
  projectCards.length &&
  projectModal &&
  modalClose &&
  modalImage &&
  modalTitle &&
  modalDescription
) {

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {

      const image = card.querySelector(".thumb img");
      const title = card.querySelector("h3");
      const description = card.querySelector("p");

      if (!image) return;

      modalImage.src = image.src;
      modalImage.alt = image.alt;

      modalTitle.textContent = title
        ? title.textContent
        : "";

      modalDescription.textContent = description
        ? description.textContent
        : "";

      projectModal.classList.add("active");

      document.body.style.overflow = "hidden";
    });
  });


  function closeProjectModal() {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
  }


  /* Tombol X */

  modalClose.addEventListener("click", closeProjectModal);


  /* Klik area luar modal */

  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });


  /* Tombol ESC */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });

}


/* =========================
   HAMBURGER MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  /* Tutup menu setelah memilih halaman */

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealCards = document.querySelectorAll(".card");

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );


  revealCards.forEach((card) => {
    revealObserver.observe(card);
  });

} else {

  /* Browser lama */

  revealCards.forEach((card) => {
    card.classList.add("show");
  });

}