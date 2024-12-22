// Baru bisa If Else bang...

var oneTry = true;

function goToLink(to) {
    var link = "";
    var adaLink = true;

    if (to === "ig") {
        link = "https://www.instagram.com/deaditya.xyz";
    } else if (to === "yt") {
        link = "https://www.youtube.com/@DynCrazy";
    } else if (to === "fb") {
        link = "https://www.facebook.com/gede.aditya.777158?mibextid=ZbWKwL";
    } else if (to === "tt") {
        link = "https://tiktok.com/@deaditya.xyz";
    } else if (to === "th") {
        link = "https://www.threads.net/@deaditya.xyz";
    } else if (to === "wa") {
        window.location.href = "#contact";
        adaLink = false;
        alert('Mohon kirim pesan (permohonan) dulu!');
    } else if (to === "chat") {
        window.location.href = "#contact";
        adaLink = false;
    } else if (to === "mainmenu") {
        window.location.href = "/index.html";
        adaLink = false;
    } else if (to === "tt") {
        link = "https://tiktok.com/@deaditya.xyz";
    } else if (to === "tt") {
        link = "https://tiktok.com/@deaditya.xyz";
    } else if (to === "mw-ka") {
        link = "https://kerang-ajaib.netlify.app/";
    } else if (to === "mw-hbd") {
        link = "https://hbdtoyou.netlify.app/";
    } else if (to === "mw-kkhi") {
        link = "https://kata2harini.netlify.app/";
    } else if (to === "mw-hm") {
        link = "https://hitungmundur.netlify.app/";
    } else if (to === "mw-dcfg") {
        link = "https://dcfinder.netlify.app/";
    } else if (to === "cmdchatinfo") {
        link = "/cmd-chat-info.txt";
    }  else if (to === "badWordBtn") {
        if (oneTry === true) {
            oneTry = false;
            link = "https://www.youtube.com/@DynCrazy";
        } else {
            oneTry = true;
            window.location.href = "/index.html";
            adaLink = false;
        }
    } else {
        terjadiKesalahan();
        adaLink = false;
    }

    if (adaLink === true) {
        window.open(link, '_blank');
    } else {
        return;
    }
}