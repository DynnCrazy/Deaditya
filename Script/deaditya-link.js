// Baru bisa If Else bang...

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
    } else {
        terjadiKesalahan();
        adaLink = false;
    }

    if (adaLink === true) {
        window.open(link, '_blank');
    } else {
        console.log("Link tidak ditemukan!");
    }
}