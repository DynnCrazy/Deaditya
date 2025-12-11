if (window.innerWidth < 280) {
    alert("Ukuran lebar layar kamu terlalu kecil, tidak bisa menampilkan halaman konten dengan semestinya!")
} else if (window.innerHeight <= 350) {
    alert("Ukuran tinggi layar kamu terlalu kecil, tidak bisa menampilkan halaman konten dengan semestinya!")
}

const today = new Date();

function goToLink(link) {
    if (link.includes("#")) {
        window.location.href = link;
    } else {
        if (link === "?") {
            return;
        } else {
            window.open(link, '_blank');
        }
    }    
    
}

function back() {
    window.history.back();
}

function comingSoon() {
    alert("Segera hadir!");
}