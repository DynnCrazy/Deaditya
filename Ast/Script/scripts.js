var isDisplay = false;
var isPc = false
let lastScrollTop = 0;
const threshold = 10; // batas minimal gerakan biar gak sensitif
const linkmedsos = document.getElementById("linkms");

function checkIsPcOrNot() {
    if (window.innerWidth > 768) {
        isPc = true
    } else {
        isPc = false
        linkmedsos.style.opacity = '0';
    }
}

                checkIsPcOrNot();
                
                function btnKlik() {
                    if (isPc) {
                        if (isDisplay) {
                            document.getElementById("sm1").style.marginBottom = '-3.8vw';
                            document.getElementById("sm2").style.marginBottom = '-3.8vw';
                            document.getElementById("sm3").style.marginBottom = '-3.8vw';
                            isDisplay = false;
                        } else {
                            document.getElementById("sm1").style.marginBottom = '0px';
                            document.getElementById("sm2").style.marginBottom = '0px';
                            document.getElementById("sm3").style.marginBottom = '0px';
                            isDisplay = true;
                        }
                    } else {
                        if (isDisplay) {
                            document.getElementById("sm1").style.marginBottom = '-10vw';
                            document.getElementById("sm2").style.marginBottom = '-10vw';
                            document.getElementById("sm3").style.marginBottom = '-10vw';
                            isDisplay = false;
                        } else {
                            document.getElementById("sm1").style.marginBottom = '0px';
                            document.getElementById("sm2").style.marginBottom = '0px';
                            document.getElementById("sm3").style.marginBottom = '0px';
                            isDisplay = true;
                        }
                    }
                }

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (Math.abs(currentScroll - lastScrollTop) <= threshold) {
        return;
    }

    if (isPc) {
        if (currentScroll > lastScrollTop) {
            a();
        } else {
            b();
        }

    }

    checkIsPcOrNot();

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function a() {
    linkmedsos.style.opacity = '1';
}

function b() {
    linkmedsos.style.opacity = '0';
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