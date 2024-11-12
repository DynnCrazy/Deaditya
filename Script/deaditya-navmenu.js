// Ambil elemen tombol dan menu
const menuBtn = document.getElementById("btnbar");
const menu = document.getElementById("menunb");
const bgnbb = document.getElementById("contdivmenud");

// Fungsi untuk menampilkan atau menyembunyikan menu
menuBtn.addEventListener("click", (event) => {
    // Prevent event bubbling agar tidak tertangkap oleh event listener click di luar menu
    event.stopPropagation();

    // Toggle kelas display
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("back");
        bgnbb.style.opacity = 0;
        bgnbb.style.zIndex = -1;

    } else {
        menu.classList.add("show");
        menu.classList.remove("back");
        bgnbb.style.opacity = 1;
        bgnbb.style.zIndex = 99998;
    }
});

// Menutup menu ketika klik di luar menu
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== menuBtn) {
        menu.classList.remove("show");
        menu.classList.add("back");
        bgnbb.style.opacity = 0;
        bgnbb.style.zIndex = -1;
    }
});
