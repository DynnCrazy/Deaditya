var mytk = "TK Budhi Dharma Pering";
var descmytk = "TK Budhi Dharma Pering, saya bersekolah disini pada tahun ajaran 2014/2015.";
var locmytk = "https://maps.app.goo.gl/zu4t6VaVE5qmREkL9";
var imgmytk = "https://i.ibb.co.com/X4ZX3dH/20241005-143339.jpg";
var mysd = "SD Negeri 4 Pering";
var descmytsd = "SD Negeri 4 Pering (Fouring), saya bersekolah disini pada tahun ajaran 2015-2021.";
var locmysd = "https://maps.app.goo.gl/4QXdaeDkbppKybP37";
var imgmysd = "https://i.ibb.co.com/X4ZX3dH/20241005-143339.jpg";
var mysmp = "SMP Negeri 2 Blahbatuh";
var descmysmp = "SMP Negeri 2 Blahbatuh (Blaspentwo), saya bersekolah disini pada tahun ajaran 2021-2024.";
var locmysmp = "https://maps.app.goo.gl/oBwFK9ssHA48NApX7";
var imgmysmp = "https://i.ibb.co.com/X4ZX3dH/20241005-143339.jpg";
var mysmasmk = "SMA Negeri 1 Blahbatuh";
var descmysmasmk = "SMA Negeri 1 Blahbatuh, saya bersekolah disini pada tahun ajaran 2024-2027.";
var locmysmasmk = "https://maps.app.goo.gl/pZickYQ4qUirGTHg9";
var imgmysmasmk = "https://i.ibb.co.com/X4ZX3dH/20241005-143339.jpg";
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
        // window.location.href = link;
        window.open(link, '_blank');
    } else {
        console.log("Link tidak ditemukan!");
    }

}

function detailRiwayatSekolah(whatSch) {
    document.getElementById("contdetailrs").style.display = "block";

    if (whatSch === "TK") {
        document.getElementById("descindetailrs").innerHTML = descmytk;
        document.getElementById("linkindetailrs").href = locmytk;
        document.getElementById("imgindetailrs").src = imgmytk;
    } else if (whatSch === "SD") {
        document.getElementById("descindetailrs").innerHTML = descmysd;
        document.getElementById("linkindetailrs").href = locmysd;
        document.getElementById("imgindetailrs").src = imgmysd;
    } else if (whatSch === "SMP") {
        document.getElementById("descindetailrs").innerHTML = descmysmp;
        document.getElementById("linkindetailrs").href = locmysmp;
        document.getElementById("imgindetailrs").src = imgmysmp;
    } else if (whatSch === "SMASMK") {
        document.getElementById("descindetailrs").innerHTML = descmysmasmk;
        document.getElementById("linkindetailrs").href = locmysmasmk;
        document.getElementById("imgindetailrs").src = imgmysmasmk;
    }

}

function closedtlrs() {
    document.getElementById("contdetailrs").style.display = "none";
}



function terjadiKesalahan() {
    alert("Terjadi kesalahan!");
    console.log("Error!");
}
