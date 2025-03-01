var textIdBJ = '';

function checkBagaimanaJika() {
    setTimeout(() => {
        textIdBJ = window.location.hash.substring(1);

        document.getElementById("txt1").style.color = "white";
        document.getElementById("txt2").style.color = "white";
        
        if (textIdBJ == "txt1" || textIdBJ == "txt2") {
            document.getElementById(textIdBJ).style.color = "#178cf3";
        }
    }, 10);
}

let isManualScroll = false;

window.addEventListener("wheel", () => isManualScroll = true);
window.addEventListener("touchmove", () => isManualScroll = true);

window.addEventListener("scroll", () => {
    if (isManualScroll) {
        if (textIdBJ != '') {
            setTimeout(() => {
                document.getElementById(textIdBJ).style.color = "white";
            }, 500);
        }
        isManualScroll = false;
    }
});
