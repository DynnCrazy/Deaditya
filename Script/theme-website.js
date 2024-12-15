var a = false;

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

var themeNow_1 = ""; // warna utama
var themeNow_2 = ""; // warna utama (lebih gelap)
var themeNow_3 = ""; // warna utama (lebih gelap #2)
var themeNow_4 = ""; // warna utama (sedikit transparan)

var whatTheme = "green";

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
} else {
    a = false;
}

    function checkTheme() {
    if (a) {
        const theThemeElements_bg_1 = document.querySelectorAll('.btnstyle1, .btnstyle2, .divsm button, .dropdown-menu, .btnrndmmsck, #mvntButton, #contact-username, #contact-message, #contact-btn-send, .contmyweb2 button, .pdf-item, .pdf-item iframe');
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

        const theThemeElements_hover_1 = document.querySelectorAll('.dropdown-menu a');
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

    }
}


document.addEventListener('DOMContentLoaded', function() { 
    checkTheme();
});
