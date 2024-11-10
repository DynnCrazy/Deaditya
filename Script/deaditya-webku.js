var isMyWebkuopen = false;

function lihatWebku() {
    if (isMyWebkuopen === false) {
        isMyWebkuopen = true;
        document.getElementById("contmywebproject").style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        isMyWebkuopen = false;
        document.getElementById("contmywebproject").style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function closewebkudtl() {
    isMyWebkuopen = false;
    document.body.style.overflow = 'auto';
    document.getElementById("contmywebproject").style.display = 'none';
}