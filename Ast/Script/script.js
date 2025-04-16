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
            el.style.boxShadow = "0 0 20px 15px #00111b";
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
            wk.style.boxShadow = "0 0 20px 15px #00111b";
        });
        document.querySelectorAll(".mainfooter").forEach(ss => {
            ss.style.borderTop = "2px solid #001b2b";
            ss.style.boxShadow = "0 0 20px 15px #00111b";
        });
        document.body.style.backgroundColor = "#00111b";
        document.body.style.backgroundImage = `linear-gradient(to right, #001521 1px, transparent 1px),
                                               linear-gradient(to bottom, #001521 1px, transparent 1px)`;
        document.body.style.backgroundSize = "50px 50px";

        document.body.style.color = "white";
        isLightMode = false;
    } else {
        document.getElementById("webthemebtn").innerHTML = '<span class="fas fa-toggle-off" style="cursor: pointer;"></span>';
        document.querySelectorAll(".containerdtl, .mainfooter, .containeraboutme, .containerfuture, .containerlink").forEach(el => {
            el.style.backgroundColor = "#fcfcfc";
            el.style.boxShadow = "0 0 20px 15px white";
            el.style.border = "1px solid #e6e6e6";
        });
        document.querySelectorAll(".submainfooter a").forEach(clr => {
            clr.style.color = "#001b2b";
        });
        document.querySelectorAll(".contmymovielist, .contmygamelist").forEach(mtr => {
            mtr.style.backgroundColor = "#f6f6f6";
        });
        document.querySelectorAll(".garispemisah").forEach(wk => {
            wk.style.backgroundColor = "#dfdfdf";
            wk.style.boxShadow = "0 0 20px 15px white";
        });
        document.querySelectorAll(".mainfooter").forEach(ss => {
            ss.style.borderTop = "2px solid #dfdfdf";
            ss.style.boxShadow = "0 0 20px 15px white";
        });
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = `linear-gradient(to right, #f9f9f9 1px, transparent 1px),
                                               linear-gradient(to bottom, #f9f9f9 1px, transparent 1px)`;
        document.body.style.backgroundSize = "50px 50px";

        document.body.style.color = "#2b2b2b";
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