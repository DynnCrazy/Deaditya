var mytk = "TK Budhi Dharma Pering";
var descmytk = "TK Budhi Dharma Pering, saya bersekolah disini pada tahun ajaran 2014/2015. Di sekolah ini saya mendapatkan kelas B2. Fun fact: Saya juara 1 di TK 😎.";
var locmytk = "https://maps.app.goo.gl/zu4t6VaVE5qmREkL9";
var imgmytk = ["Image/love.png", "Image/love.png"];
var mysd = "SD Negeri 4 Pering";
var descmysd = "SD Negeri 4 Pering (Fouring), saya bersekolah disini pada tahun ajaran 2015-2021. Dari semua masa yang saya alami, ini yang paling seru karena dapat bermain dan bersenang-senang dengan teman-teman. Fun fact: Kita pernah belajar daring (online) pada semester 2 kelas 5 sampai kelas 6 dikarenakan ada PPKM yang disebabkan oleh virus covid-19.";
var locmysd = "https://maps.app.goo.gl/4QXdaeDkbppKybP37";
var imgmysd = ["Image/sd_1.png", "Image/sd_2.png"];
var mysmp = "SMP Negeri 2 Blahbatuh";
var descmysmp = "SMP Negeri 2 Blahbatuh (Blaspentwo), saya bersekolah disini pada tahun ajaran 2021-2024. Saya bersekolah disini melalui jalur zonasi. Saat bersekolah disini, saya mendapatkan/menjadi siswa kelas J (kelas terakhir di sekolah ini). Fun fact: pada saat kelas 7, kelas J dibagi jadi 2 sesi, dikarenakan pada saat itu sedang maraknya virus covid-19.";
var locmysmp = "https://maps.app.goo.gl/oBwFK9ssHA48NApX7";
var imgmysmp = ["Image/smp_1.png", "Image/smp_2.png", "Image/smp_3.png", "Image/smp_4.png", "Image/smp_5.png"];
var mysmasmk = "SMA Negeri 1 Blahbatuh";
var descmysmasmk = "SMA Negeri 1 Blahbatuh, saya bersekolah disini pada tahun ajaran 2024-2027. Pada saat MPLS (masa pengenalan lingkungan sekolah) saya bergabung pada MPLS kelas C. Lalu setelah selesai MPLS, saya bergabung pada kelas X.I (10 I).";
var locmysmasmk = "https://maps.app.goo.gl/pZickYQ4qUirGTHg9";
var imgmysmasmk = ["Image/sma_1.png", "Image/sma_1.png"];
var sekolahnow = "";
var imageNow = "";
var isDetailrsopen = false;
const lastsekolahnow = "(Now)";
let currentImageIndex = 0;

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

function lihatrwytsklh() {
    document.body.style.overflow = 'hidden';
    document.getElementById("contdetailrsselect").style.opacity = 1;
    document.getElementById("contdetailrsselect").style.zIndex = 99999999;
    closeTheNavMenu();
}

function closedtlrsselect() {
    document.body.style.overflow = 'auto';
    document.getElementById("contdetailrsselect").style.opacity = 0;
    document.getElementById("contdetailrsselect").style.zIndex = -2;
}

function detailRiwayatSekolah(whatSch) {
    closeTheNavMenu();
    document.body.style.overflow = 'hidden';
    document.getElementById("contdetailrs").style.opacity = 1;
    document.getElementById("contdetailrs").style.zIndex = 99999999;
    closedtlrsselect();
    isDetailrsopen = true;

    /*
    if (whatSch === "TK") {
        document.getElementById("descindetailrs").innerHTML = descmytk;
        document.getElementById("linkindetailrs").href = locmytk;
        document.getElementById("imgindetailrs").src = imgmytk;
        imageNow = "TK";
    } else if (whatSch === "SD") {
        document.getElementById("descindetailrs").innerHTML = descmysd;
        document.getElementById("linkindetailrs").href = locmysd;
        document.getElementById("imgindetailrs").src = imgmysd;
        imageNow = "SD";
    } else if (whatSch === "SMP") {
        document.getElementById("descindetailrs").innerHTML = descmysmp;
        document.getElementById("linkindetailrs").href = locmysmp;
        document.getElementById("imgindetailrs").src = imgmysmp;
        imageNow = "SMP";
    } else if (whatSch === "SMASMK") {
        document.getElementById("descindetailrs").innerHTML = descmysmasmk;
        document.getElementById("linkindetailrs").href = locmysmasmk;
        document.getElementById("imgindetailrs").src = imgmysmasmk;
        imageNow = "SMASMK";
    }

    changeImage();

    if (!intervalId) {
        intervalId = setInterval(changeImage, 5000);
    }
    */

    if (whatSch === "TK") {
        window.location.href = "/Informasi/Sekolah/index.html?tingkat=tk"
    } else if (whatSch === "SD") {
        window.location.href = "/Informasi/Sekolah/index.html?tingkat=sd"
    } else if (whatSch === "SMP") {
        window.location.href = "/Informasi/Sekolah/index.html?tingkat=smp"
    } else if (whatSch === "SMASMK") {
        window.location.href = "/Informasi/Sekolah/index.html?tingkat=smasmk"
    }

}


function changeImage() {
    if (isDetailrsopen) {
        var imagesx = "";

        if (imageNow === "TK") {
            imagesx = imgmytk;
        } else if (imageNow === "SD") {
            imagesx = imgmysd;
        } else if (imageNow === "SMP") {
            imagesx = imgmysmp;
        } else if (imageNow === "SMASMK") {
            imagesx = imgmysmasmk;
        }

        currentImageIndex = (currentImageIndex + 1) % imagesx.length;
        document.getElementById("imgindetailrs").style.opacity = 0;

        setTimeout(() => {
            document.getElementById("imgindetailrs").src = imagesx[currentImageIndex];
            document.getElementById("imgindetailrs").style.opacity = 1;
        }, 1000);
    }
}

function closedtlrs() {
    isDetailrsopen = false;
    document.body.style.overflow = 'auto';
    document.getElementById("contdetailrs").style.opacity = 0;
    document.getElementById("contdetailrs").style.zIndex = -2;
    document.getElementById("imgindetailrs").src = "";

    clearInterval(intervalId);
    intervalId = null;
}
