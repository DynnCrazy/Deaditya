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

async function getData(dataId) {
        var data = '';

        try {
            if (dataId === "0") {
                const response = await fetch("https://datadc.netlify.app/data/quotes/quotes.json");
                var data = await response.json();
                data.quotes.sort((a, b) => {
                    return a.q_id.localeCompare(b.q_id);
                });
                const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
                const index = daysSinceEpoch % data.quotes.length;

                document.getElementById("quotes_web").innerText = `"${data.quotes[index].q_id}"\n- ${data.quotes[index].a}`;
                document.getElementById("update-on").textContent = "Website created and developed by Gede Aditya";

            } else if (dataId === "1") {
                const response = await fetch("https://datadc.netlify.app/data/project/desain.json");
                var data = await response.json();
                var temp = '';

                for (let i = 0; i < data.desain.length; i++) {
                    temp += `
                        <div class="item mb-4 relative break-inside-avoid overflow-hidden">
                            <img src="${data.desain[i].image}" alt="${data.desain[i].nameortitle}">
                            <div class="item-overlay">${data.desain[i].nameortitle}</div>
                        </div>`;
                }

                document.getElementById("masonry-grid").innerHTML = temp;
            } else if (dataId === "2") {
                const response = await fetch("/Ast/Data/Json/watching.json");
                var data = await response.json();
                var temp = '';

                for (let i = 0; i < data.length; i++) {
                    if (data[i].image === "-") {
                        continue;
                    } else {
                        temp += `
                            <div class="item mb-4 relative break-inside-avoid overflow-hidden">
                                <img src="${data[i].image}" alt="${data[i].title}" loading="lazy">
                                <div class="item-overlay md:text-[14px] max-md:text-[12px]">${data[i].title} (${data[i].year_release})</div>
                            </div>`;
                    }
                }

                document.getElementById("masonry-grid").innerHTML = temp;
            }

        } catch (error) {
            console.error("Gagal ambil data:", error);
        }
}

document.addEventListener("DOMContentLoaded", () => {
      const items = document.querySelectorAll(".item");

      items.forEach(item => {
        item.addEventListener("click", () => {
          // toggle class show-overlay
          item.classList.toggle("show-overlay");
        });
      });
    });


if (window.location.pathname === "/project.html") {
    getData("1");
} else if (window.location.pathname === "/watching.html") {
    getData("2");
} else {
    getData("0");
}