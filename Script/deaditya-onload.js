const loading = document.getElementById('contloading');
const images = document.querySelectorAll('.imgLoad');

// Fungsi untuk memeriksa apakah semua gambar sudah dimuat
let loadedImages = 0;
const totalImages = images.length;

// Menambahkan event listener untuk setiap gambar
images.forEach(image => {
    image.onload = function() {
        loadedImages++;
        if (loadedImages === totalImages) {
            // Menyembunyikan efek loading dan menampilkan semua gambar
            loading.style.display = 'none';
            images.forEach(img => {
                img.style.display = 'block';
            });
        }
    };
    // Pastikan gambar mulai dimuat
    image.src = image.src;
});
