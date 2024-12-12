var a = false;
var themeHalloween_1 = 'green';
var themeNow_1 = themeHalloween_1

if (a === true) {
    var theThemeElements_bg_1 = document.querySelectorAll('.btnstyle1, .btnstyle2, .divsm button, .dropdown-menu, .btnrndmmsck, #mvntButton, #contact-username, #contact-message, #contact-btn-send, .contmyweb2 button, .pdf-item, .pdf-item iframe');
    var theThemeElements_color_1 = document.querySelectorAll('.ttlweb2');

    theThemeElements_bg_1.forEach(function(theThemeElements_bg_1) {
        theThemeElements_bg_1.style.backgroundColor = themeNow_1;
    });

    theThemeElements_color_1.forEach(function(theThemeElements_color_1) {
        theThemeElements_color_1.style.color = themeNow_1;
    });
}
