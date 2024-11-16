var id_btnbar = document.getElementById("btnbar");
var id_menunb = document.getElementById("menunb");
var id_contdivmenud = document.getElementById("contdivmenud");

id_btnbar.addEventListener("click", (event) => {
    event.stopPropagation();

    if (id_menunb.classList.contains("show")) {
        id_menunb.classList.remove("show");
        id_menunb.classList.add("back");
        id_contdivmenud.style.opacity = 0;
        id_contdivmenud.style.zIndex = -1;
        // document.body.style.overflow = 'auto';

    } else {
        id_menunb.classList.add("show");
        id_menunb.classList.remove("back");
        id_contdivmenud.style.opacity = 1;
        id_contdivmenud.style.zIndex = 99998;
        // document.body.style.overflow = 'hidden';
    }
});

document.addEventListener("click", (event) => {
    if (!id_menunb.contains(event.target) && event.target !== id_btnbar) {
        id_menunb.classList.remove("show");
        id_menunb.classList.add("back");
        id_contdivmenud.style.opacity = 0;
        id_contdivmenud.style.zIndex = -1;
        // document.body.style.overflow = 'auto';
    }
});
