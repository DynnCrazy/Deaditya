function lihatkaryaku() {
    document.body.style.overflow = 'hidden';
    document.getElementById("contmykarya").style.opacity = 1;
    document.getElementById("contmykarya").style.zIndex = 99999999;
    closeTheNavMenu();
}

function closemykarya() {
    document.body.style.overflow = 'auto';
    document.getElementById("contmykarya").style.opacity = 0;
    document.getElementById("contmykarya").style.zIndex = -1;

}

function openKaryaPdf(whatKarya) {

    if (whatKarya === 'pdf') {
        document.body.style.overflow = 'hidden';
        document.getElementById("contmykaryapdf").style.opacity = 1;
        document.getElementById("contmykaryapdf").style.zIndex = 99999999;
    } else {
        alert("Segera hadir!");
    }
}

function closemykaryapdf() {
    document.getElementById("contmykaryapdf").style.opacity = 0;
    document.getElementById("contmykaryapdf").style.zIndex = -1;

}