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
  

var isLightMode = true;

function changeTheme() {
    if (isLightMode) {
        document.getElementById("webthemebtn").innerHTML = '<span class="fas fa-toggle-on" style="cursor: pointer;"></span>';
        document.querySelectorAll(".containerdtl, .mainfooter, .containeraboutme, .containerfuture, .containerlink").forEach(el => {
            el.style.backgroundColor = "#001b2b";
            el.style.border = "none";
        });
        document.querySelectorAll(".submainfooter a").forEach(clr => {
            clr.style.color = "white";
        });
        document.querySelectorAll(".contmymovielist, .contmygamelist").forEach(mtr => {
            mtr.style.backgroundColor = "#002032";
        });
        document.querySelectorAll(".garispemisah").forEach(wk => {
            wk.style.backgroundColor = "#001b2b";
        });
        document.querySelectorAll(".mainfooter").forEach(ss => {
            ss.style.borderTop = "2px solid #001b2b";
        });
        document.body.style.backgroundColor = "#00111b";
        document.body.style.backgroundImage = "radial-gradient(circle,rgb(0, 23, 36) 2px, transparent 2px)";
        document.body.style.color = "white";
        isLightMode = false;
    } else {
        document.getElementById("webthemebtn").innerHTML = '<span class="fas fa-toggle-off" style="cursor: pointer;"></span>';
        document.querySelectorAll(".containerdtl, .mainfooter, .containeraboutme, .containerfuture, .containerlink").forEach(el => {
            el.style.backgroundColor = "rgb(252, 252, 252)";
            el.style.border = "1px solid #e6e6e6";
        });
        document.querySelectorAll(".submainfooter a").forEach(clr => {
            clr.style.color = "#001b2b";
        });
        document.querySelectorAll(".contmymovielist, .contmygamelist").forEach(mtr => {
            mtr.style.backgroundColor = "#eaeaea";
        });
        document.querySelectorAll(".garispemisah").forEach(wk => {
            wk.style.backgroundColor = "#dfdfdf";
        });
        document.querySelectorAll(".mainfooter").forEach(ss => {
            ss.style.borderTop = "2px solid #dfdfdf";
        });
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = "radial-gradient(circle, rgb(250, 250, 250) 2px, transparent 2px)";
        document.body.style.color = "#00111b";
        isLightMode = true;
    }
}

function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);
    
    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();
    
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    
    if (ageDays < 0) {
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
        ageMonths--;
    }
    
    return `${ageYears}`;
}

document.getElementById("umurku").innerHTML = calculateAge("2008-07-18") + " tahun";

document.getElementById("copyinftr").innerHTML = "Created by Gede Aditya | Copyright &copy 2025";