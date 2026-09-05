// ---------- 1. NAVBAR MOBILE (hamburger menu) ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
 
if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });
}
 
// ---------- 2. TAB PORTFOLIO (Project / Sertifikat) ----------
// Hanya berjalan di halaman portfolio.html
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
 
tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const targetId = button.getAttribute("data-tab");
 
    // Hapus status aktif dari semua tombol & konten
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
 
    // Tambahkan status aktif ke tombol & konten yang dipilih
    button.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});
 