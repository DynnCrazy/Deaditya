const a = false;

// THEME 1
const themeHalloween_1 = 'red';
const themeHalloween_2 = '#da0000';
const themeHalloween_3 = '#e90000';

const themeNow_1 = themeHalloween_1; // warna utama
const themeNow_2 = themeHalloween_2; // warna utama (lebih gelap)
const themeNow_3 = themeHalloween_2; // warna utama (lebih gelap #2)

    function checkTheme() {
    if (a) {
        const theThemeElements_bg_1 = document.querySelectorAll('.chat-bubble.user, .chat-bubble user, .btnstyle1, .btnstyle2, .divsm button, .dropdown-menu, .btnrndmmsck, #mvntButton, #contact-username, #contact-message, #contact-btn-send, .contmyweb2 button, .pdf-item, .pdf-item iframe');
        const theThemeElements_bg_2 = document.querySelectorAll('.chat-input');
        const theThemeElements_color_1 = document.querySelectorAll('.ttlweb2');

        theThemeElements_bg_1.forEach(function(element) {
            element.style.setProperty("background-color", themeNow_1, "important");
        });

        theThemeElements_bg_2.forEach(function(element) {
            element.style.setProperty("background-color", themeNow_3, "important");
        });

        theThemeElements_color_1.forEach(function(element) {
            element.style.setProperty("color", themeNow_1, "important");
        });

        const elements = document.querySelectorAll('.dropdown-menu a');
        elements.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                element.style.setProperty("background-color", themeNow_2, "important");
            });
            element.addEventListener('mouseleave', function() {
                element.style.setProperty("background-color", themeNow_1, "important");
            });
        });

    }
}


document.addEventListener('DOMContentLoaded', function() { 
    checkTheme();
});
