document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('contloading'); // Kontainer loading
    const images = document.querySelectorAll('.imgLoad');   // Semua gambar dengan class .imgLoad

    let loadedImages = 0;
    const totalImages = images.length;

    function checkAllImagesLoaded() {
        if (loadedImages === totalImages) {
            // Sembunyikan kontainer loading
            loading.style.display = 'none';

            // Tampilkan semua gambar
            images.forEach(img => {
                img.style.display = 'block';
            });
        }
    }

    images.forEach(image => {
        if (image.complete) {
            // Jika gambar sudah dimuat (cached)
            loadedImages++;
            checkAllImagesLoaded();
        } else {
            // Tambahkan event handler untuk onload dan onerror
            image.onload = function() {
                loadedImages++;
                console.log(`Berhasil memuat gambar: ${image.src}`);
                checkAllImagesLoaded();
            };
            image.onerror = function() {
                loadedImages++;
                console.error(`Gagal memuat gambar: ${image.src}`);
                checkAllImagesLoaded();
            };
        }
        // Refresh src untuk memastikan pemuatan ulang
        image.src = image.src;
    });
});