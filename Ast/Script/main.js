const id_lagu = document.getElementById("lagu");
const id_btnlagu = document.getElementById("btn-lagu");
var lagu_on = false;

document.getElementById("update-on").textContent = "Website created & developed by Gede Aditya";

function putarLagu() {
    if (lagu_on) {
        id_lagu.pause();
        id_btnlagu.innerHTML = "Play";
        id_btnlagu.style.backgroundColor = "#48ba48";
        lagu_on = false;
    } else {
        id_lagu.currentTime = 85.9;
        id_lagu.loop = true;
        id_lagu.volume = 0.3;
        id_lagu.play();
        id_btnlagu.innerHTML = "Stop";
        id_btnlagu.style.backgroundColor = "#ba4848";
        lagu_on = true;
    }
}

id_lagu.addEventListener("timeupdate", () => {
    if (id_lagu.currentTime >= 111.39) {
        id_lagu.pause();
        id_btnlagu.innerHTML = "Play";
        id_btnlagu.style.backgroundColor = "#48ba48";
        lagu_on = false;
    }
});

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

async function getData() {
    try {
        const res = await fetch("https://datadc.netlify.app/data/quotes/quotes.json");
        const { quotes } = await res.json();

        quotes.sort((a, b) => a.q_id.localeCompare(b.q_id));

        const index = Math.floor(today / 86400000) % quotes.length;
        const q = quotes[index];

        if (q.original == "en") {
            document.getElementById("quotes_web").innerText = `"${q.q_en}"\n- ${q.a}`;
        } else {
            document.getElementById("quotes_web").innerText = `"${q.q_id}"\n- ${q.a}`;
        }

    } catch (err) {
        console.error("Gagal ambil data:", err);
    }
}

getData();