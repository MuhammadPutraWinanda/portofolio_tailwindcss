const showMobileMenu = () => {
  document.getElementById("btnMenu").classList.add("hidden");
  document.getElementById("btnMenu").setAttribute("aria-expanded", "true");
  document.getElementById("btnClose").classList.remove("hidden");
  document.getElementById("mobileMenu").classList.remove("hidden");
  document.getElementById("mobileMenu").classList.add("flex");
};

const hideMobileMenu = () => {
  document.getElementById("btnClose").classList.add("hidden");
  document.getElementById("mobileMenu").classList.remove("flex");
  document.getElementById("mobileMenu").classList.add("hidden");
  document.getElementById("btnMenu").classList.remove("hidden");
  document.getElementById("btnMenu").setAttribute("aria-expanded", "false");
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const targetId = e.target.getAttribute("id");

    const mobileMenu = document.getElementById("mobileMenu");
    const isMenuVisible = mobileMenu.classList.contains("hidden");

    if (
      !isMenuVisible &&
      e.target.closest("div")?.getAttribute("id") !== "mobileMenu"
    ) {
      hideMobileMenu();
    }

    if (targetId === "btnMenu") {
      showMobileMenu();
    }

    if (targetId === "btnClose") {
      hideMobileMenu();
    }

    if (targetId === "btnToTop") {
      window.scrollTo({ top: 0 });
    }

    if (e.target.closest("div")?.classList.contains("toggle-container")) {
      document.querySelector("html").classList.toggle("dark");
    }
  });

  const btnToTop = document.getElementById("btnToTop");
  window.addEventListener("scroll", () => {
    hideMobileMenu();

    if (window.scrollY > 400) {
      btnToTop.classList.remove("opacity-0");
      btnToTop.classList.add("opacity-100");
    } else {
      btnToTop.classList.remove("opacity-100");
      btnToTop.classList.add("opacity-0");
    }
  });

  const formContact = document.getElementById("formContactUs");
  formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    formContact.reset();
    Swal.fire({
      title: "Pesan Berhasil Terkirim!",
      icon: "success",
    });
  });
});
