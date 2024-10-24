var mytk = "TK Budi Dharma Pering";
var mysd = "SD Negeri 4 Pering";
var mysmp = "SMP Negeri 2 Blahbatuh";
var mysmasmk = "SMA Negeri 1 Blahbatuh";
var sekolahnow = "";
const lastsekolahnow = "(Now)";

if (!mytk) {
    document.getElementById("tk").style.display = "none";
    document.getElementById("grsps1").style.display = "none";
} else {
    document.getElementById("tk").innerHTML = mytk;
    sekolahnow = "TK";
}

if (!mysd) {
    document.getElementById("sd").style.display = "none";
    document.getElementById("grsps2").style.display = "none";
} else {
    document.getElementById("sd").innerHTML = mysd;
    sekolahnow = "SD";
}

if (!mysmp) {
    document.getElementById("smp").style.display = "none";
    document.getElementById("grsps3").style.display = "none";
} else {
    document.getElementById("smp").innerHTML = mysmp;
    sekolahnow = "SMP";
}

if (!mysmasmk) {
    document.getElementById("smasmk").style.display = "none";
} else {
    document.getElementById("smasmk").innerHTML = mysmasmk;
    sekolahnow = "SMASMK";
}

sekolahnow = sekolahnow;

if (sekolahnow === "TK") {
    document.getElementById("tk").innerHTML = mytk + " " + lastsekolahnow;
} else if (sekolahnow === "SD") {
    document.getElementById("sd").innerHTML = mysd + " " + lastsekolahnow;
} else if (sekolahnow === "SMP") {
    document.getElementById("smp").innerHTML = mysmp + " " + lastsekolahnow;
} else if (sekolahnow === "SMASMK") {
    document.getElementById("smasmk").innerHTML = mysmasmk + " " + lastsekolahnow;
} else {
    console.log("Orang ini telah lulus sekolah");
}

function goToLink(to) {
var link = "";

    if (to === "ig") {
        link = "https://instagram.com/@deaditya.xyz/";
    } else if (to === "yt") {
        link = "https://www.youtube.com/@DynCrazy";
    } else if (to === "fb") {
        link = "https://www.facebook.com/gede.aditya.777158?mibextid=ZbWKwL";
    } else if (to === "tt") {
        link = "https://tiktok.com/@deaditya.xyz";
    }

window.location.href = link;
}