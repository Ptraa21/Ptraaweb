 /* ================= THEME ================= */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
    }

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("light-mode");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("light-mode")
          ? "light"
          : "dark"
      );

    });


    /* ================= HAMBURGER ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

    });


    /* ================= CLOSE MENU ================= */

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
