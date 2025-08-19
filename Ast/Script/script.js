if (window.innerWidth < 228) {
    alert("Ukuran lebar layar kamu terlalu kecil, tidak bisa menampilkan halaman konten dengan semestinya!")
} else if (window.innerHeight <= 350) {
    alert("Ukuran tinggi layar kamu terlalu kecil, tidak bisa menampilkan halaman konten dengan semestinya!")
}

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

function spawnEmoji() {
    const emojiList = ["👋", "🤙", "👋", "✌", "👋"];
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];

    emoji.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 2000);
}

function back() {
    window.history.back();
}

function comingSoon() {
    alert("Segera hadir!");
}