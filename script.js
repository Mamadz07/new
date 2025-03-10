let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    // Sembunyikan semua gambar
    slides.forEach(slide => {
        slide.style.opacity = 0;
    });

    // Tampilkan gambar berikutnya
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.opacity = 1;

    // Panggil fungsi setiap 3 detik
    setTimeout(showSlides, 3000);
}

// Mulai slideshow saat halaman dimuat
document.addEventListener("DOMContentLoaded", showSlides);

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-container");
    if (window.scrollY > 50) {  // Ubah warna jika scroll lebih dari 50px
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

