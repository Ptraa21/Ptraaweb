
/* =========================================================
   THEME TOGGLE
   ========================================================= */

const themeToggle = document.getElementById("themeToggle");

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


/* =========================================================
   LOAD THEME
   ========================================================= */

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("active");

    menuToggle.classList.toggle(
      "active",
      isOpen
    );

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  /* Tutup menu setelah memilih halaman */

  navLinks.querySelectorAll("a").forEach(link => {

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


/* =========================================================
   PROJECT MODAL
   ========================================================= */

const projectModal =
  document.getElementById("projectModal");

const projectModalClose =
  document.getElementById("projectModalClose");

const projectModalGallery =
  document.getElementById("projectModalGallery");

const modalCategory =
  document.getElementById("modalCategory");

const modalYear =
  document.getElementById("modalYear");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalTags =
  document.getElementById("modalTags");


/* =========================================================
   FOTO PROJECT
   =========================================================

   Tambahkan foto di sini.

   Contoh:

   [
     "img/project1.png",
     "img/project1-2.png",
     "img/project1-3.png"
   ]

   Foto akan otomatis tersusun vertikal.
   ========================================================= */

const projectImages = [

  /* PROJECT 01 */

  [
    "img/p3.png",

    // Tambahkan jika ada:
    // "img/project1-2.png",
    // "img/project1-3.png"
  ],


  /* PROJECT 02 */

  [
    "img/p1.png",
    "img/p2.png",
    "img/p4.png",
    "img/p5.png"
  ],


  /* PROJECT 03 */

  [
    "img/p10.png",
    "img/p6.png",
    "img/p7.png",
    "img/p8.png",
    "img/p9.png"

    
  ],


  /* PROJECT 04 */

  [
    "img/project4.png",

    // "img/project4-2.png",
    // "img/project4-3.png"
  ]

];


/* =========================================================
   PROJECT CARD
   ========================================================= */

const projectCards =
  document.querySelectorAll(".project-card");


projectCards.forEach((card, index) => {

  const projectLink =
    card.querySelector(".project-link");

  if (!projectLink) return;


  /* =======================================================
     KLIK "LIHAT PROJECT"
     ======================================================= */

  projectLink.addEventListener("click", (event) => {

    event.preventDefault();


    /* ================= CATEGORY ================= */

    const category =
      card.querySelector(
        ".project-top span:first-child"
      );

    if (modalCategory) {

      modalCategory.textContent =
        category
          ? category.textContent.trim()
          : "";

    }


    /* ================= YEAR ================= */

    const year =
      card.querySelector(
        ".project-top span:last-child"
      );

    if (modalYear) {

      modalYear.textContent =
        year
          ? year.textContent.trim()
          : "";

    }


    /* ================= TITLE ================= */

    const title =
      card.querySelector(
        ".project-content h3"
      );

    if (modalTitle) {

      modalTitle.textContent =
        title
          ? title.textContent.trim()
          : "";

    }


    /* ================= DESCRIPTION ================= */

    const description =
      card.querySelector(
        ".project-content p"
      );

    if (modalDescription) {

      modalDescription.textContent =
        description
          ? description.textContent.trim()
          : "";

    }


    /* ================= TAGS ================= */

    if (modalTags) {

      modalTags.innerHTML = "";

      const tags =
        card.querySelectorAll(
          ".project-tags span"
        );

      tags.forEach(tag => {

        const span =
          document.createElement("span");

        span.textContent =
          tag.textContent.trim();

        modalTags.appendChild(span);

      });

    }


    /* =====================================================
       FOTO PROJECT
       ===================================================== */

    if (projectModalGallery) {

      projectModalGallery.innerHTML = "";

      const images =
        projectImages[index] || [];


      images.forEach((image, imageIndex) => {

        const img =
          document.createElement("img");

        img.src = image;

        img.alt =
          `${title ? title.textContent.trim() : "Project"} - Screenshot ${imageIndex + 1}`;

        projectModalGallery.appendChild(img);

      });


      /* Kembali ke posisi paling atas */

      projectModalGallery.scrollTop = 0;

    }


    /* =====================================================
       BUKA MODAL
       ===================================================== */

    if (projectModal) {

      projectModal.classList.add("active");

      document.body.style.overflow = "hidden";

    }

  });

});


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeProjectModal() {

  if (!projectModal) return;

  projectModal.classList.remove("active");

  document.body.style.overflow = "";

}


/* =========================================================
   TOMBOL X
   ========================================================= */

if (projectModalClose) {

  projectModalClose.addEventListener(
    "click",
    closeProjectModal
  );

}


/* =========================================================
   KLIK AREA LUAR MODAL
   ========================================================= */

if (projectModal) {

  projectModal.addEventListener(
    "click",
    (event) => {

      if (event.target === projectModal) {

        closeProjectModal();

      }

    }
  );

}


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeProjectModal();

    }

  }
);
