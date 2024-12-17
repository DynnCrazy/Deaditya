var a = true;

function lihattampilanwebku() {
    document.body.style.overflow = 'hidden';
    document.getElementById("conttampilanweb").style.opacity = 1;
    document.getElementById("conttampilanweb").style.zIndex = 99999999;
    closeTheNavMenu();
}

function closethetampilanweb() {
    location.reload();
    // document.body.style.overflow = 'auto';
    //  document.getElementById("conttampilanweb").style.opacity = 0;
    // document.getElementById("conttampilanweb").style.zIndex = -1;
}

// THEME 1 (red)
const themeRed_1 = 'red';
const themeRed_2 = '#da0000';
const themeRed_3 = '#e90000';
const themeRed_4 = '#ff000039';

// THEME 2 (green)
const themeGreen_1 = '#008e00';
const themeGreen_2 = '#007a00';
const themeGreen_3 = '#007a00';
const themeGreen_4 = '#008e0039';

// THEME 3 (pink)
const themePink_1 = '#ff00c3';
const themePink_2 = '#cf009f';
const themePink_3 = '#e800b2';
const themePink_4 = '#ff00c339';

var themeNow_1 = ""; // warna utama
var themeNow_2 = ""; // warna utama (lebih gelap)
var themeNow_3 = ""; // warna utama (lebih gelap #2)
var themeNow_4 = ""; // warna utama (sedikit transparan)

var whatTheme = "default";

function changeTheme(temanyaApa) {
    if (temanyaApa === "default") {
        whatTheme = "default";
    } else if (temanyaApa === "red") {
        whatTheme = "red";
    } else if (temanyaApa === "green") {
        whatTheme = "green";
    } else if (temanyaApa === "pink") {
        whatTheme = "pink";
    }

    // Simpan tema ke localStorage
    localStorage.setItem('selectedTheme', whatTheme);

    checkTheme();
}

function checkTheme() {
    if (whatTheme === "red") {
        themeNow_1 = themeRed_1;
        themeNow_2 = themeRed_2;
        themeNow_3 = themeRed_3;
        themeNow_4 = themeRed_4;
    } else if (whatTheme === "green") {
        themeNow_1 = themeGreen_1;
        themeNow_2 = themeGreen_2;
        themeNow_3 = themeGreen_3;
        themeNow_4 = themeGreen_4;
    } else if (whatTheme === "pink") {
        themeNow_1 = themePink_1;
        themeNow_2 = themePink_2;
        themeNow_3 = themePink_3;
        themeNow_4 = themePink_4;
    } else {
        themeNow_1 = "";
        themeNow_2 = "";
        themeNow_3 = "";
        themeNow_4 = "";
    }

    const theThemeElements_bg_1 = document.querySelectorAll('.btnstyle1, .btnstyle2, .divsm button, .dropdown-menu, .btnrndmmsck, #theme-selector, #theme-selector option, #mvntButton, #contact-username, #contact-message, #contact-btn-send, .contmyweb2 button, .pdf-item, .pdf-item iframe');
    const theThemeElements_bg_2 = document.querySelectorAll('.chat-input');
    const theThemeElements_bg_3 = document.querySelectorAll('.chat-bubble.user, .chat-bubble user');
    const theThemeElements_color_1 = document.querySelectorAll('.ttlweb2');

    theThemeElements_bg_1.forEach(function(element) {
        element.style.backgroundColor = themeNow_1;
    });

    theThemeElements_bg_2.forEach(function(element) {
        element.style.backgroundColor = themeNow_3;
    });

    theThemeElements_bg_3.forEach(function(element) {
        element.style.setProperty("background-color", themeNow_1, "important");
    });

    theThemeElements_color_1.forEach(function(element) {
        element.style.color = themeNow_1;
    });

    const theThemeElements_hover_1 = document.querySelectorAll('.dropdown-menu a, #theme-selector option');
    theThemeElements_hover_1.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            element.style.setProperty("background-color", themeNow_2, "important");
        });
        element.addEventListener('mouseleave', function() {
            element.style.setProperty("background-color", themeNow_1, "important");
        });
    });

    const theThemeElements_hover_2 = document.querySelectorAll('.closexindivz');
    theThemeElements_hover_2.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            element.style.setProperty("color", themeNow_1, "important");
        });
        element.addEventListener('mouseleave', function() {
            element.style.setProperty("color", "white", "important");
        });
    });

    myChart.data.datasets[0].borderColor = themeNow_1;
    myChart.data.datasets[0].backgroundColor = themeNow_4;
    myChart.options.plugins.tooltip.backgroundColor = themeNow_1;
    myChart.options.plugins.tooltip.borderColor = themeNow_1;
    myChart.update();
}

document.addEventListener('DOMContentLoaded', function() { 
    // Ambil tema dari localStorage
    const savedTheme = localStorage.getItem('selectedTheme');

    // Gunakan tema yang disimpan jika ada
    if (savedTheme) {
        changeTheme(savedTheme);
    } else {
        checkTheme(); // Tetap panggil checkTheme jika tidak ada tema tersimpan
    }
});
