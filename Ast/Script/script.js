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