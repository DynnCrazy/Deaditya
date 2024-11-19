var id_contprojectweb = document.getElementById("contprojectweb");
var id_contmywebproject = document.getElementById("contmywebproject");
var id_clikHereWebP = document.getElementById("clikHereWebP");

function lihatPWebku() {
    document.body.style.overflow = 'hidden';
    id_contprojectweb.style.opacity = 1;
    id_contprojectweb.style.zIndex = 99999999;
}

function closetheprojectweb() {
    document.body.style.overflow = 'auto';
    id_contprojectweb.style.opacity = 0;
    id_contprojectweb.style.zIndex = -1;
}

function openContImywp(maubukapa) {
    if (maubukapa === 'ka') {
        lihatMyWebLebihIframe('ka');
    } else if (maubukapa === 'mmz') {
        lihatMyWebLebihIframe('mmz');
    } else if (maubukapa === 'hbdty') {
        lihatMyWebLebihIframe('hbdty');
    } else if (maubukapa === 'dcf') {
        lihatMyWebLebihIframe('dcf');
    } else if (maubukapa === 'hm') {
        lihatMyWebLebihIframe('hm');
    }
}

function lihatMyWebLebihIframe(lebihdtlcukss) {
    if (lebihdtlcukss === 'ka') {
       document.getElementById('if_ka').style.display = "block";
       id_clikHereWebP.href = "https://kerang-ajaib.netlify.app/";
    } else if (lebihdtlcukss === 'mmz') {
        document.getElementById('if_mmz').style.display = "block";
        id_clikHereWebP.href = "https://memeinz.netlify.app/";
    } else if (lebihdtlcukss === 'hbdty') {
        document.getElementById('if_hbdty').style.display = "block";
        id_clikHereWebP.href = "https://hbdtoyou.netlify.app/";
    } else if (lebihdtlcukss === 'dcf') {
        document.getElementById('if_dcf').style.display = "block";
        id_clikHereWebP.href = "https://dcfinder.netlify.app/";
    } else if (lebihdtlcukss === 'hm') {
        document.getElementById('if_hm').style.display = "block";
        id_clikHereWebP.href = "https://hitungmundur.netlify.app/";
    }

    id_contmywebproject.style.opacity = 1;
    id_contmywebproject.style.zIndex = 999999999;
    closetheprojectweb();
}

function closewebkudtl() {
    document.getElementById('if_ka').style.display = "none";
    document.getElementById('if_mmz').style.display = "none";
    document.getElementById('if_hbdty').style.display = "none";
    document.getElementById('if_dcf').style.display = "none";
    document.getElementById('if_hm').style.display = "none";
    id_clikHereWebP.href = "#";
    // document.body.style.overflow = 'auto';
    id_contmywebproject.style.opacity = 0;
    id_contmywebproject.style.zIndex = -1;
}