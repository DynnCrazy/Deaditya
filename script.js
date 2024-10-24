var mytk = "TK Budi Dharma Pering";
var mysd = "SD Negeri 4 Pering";
var mysmp = "SMP Negeri 2 Blahbatuh";
var mysmasmk = "SMA Negeri 1 Blahbatuh";

if (!mytk) {
   document.getElementById("tk").style.display = "none";
   document.getElementById("grsps1").style.display = "none";
} else {
    document.getElementById("tk").innerHTML = mytk;
}

if (!mysd) {
   document.getElementById("sd").style.display = "none";
   document.getElementById("grsps2").style.display = "none";
} else {
    document.getElementById("sd").innerHTML = mysd;
}

if (!mysmp) {
   document.getElementById("smp").style.display = "none";
   document.getElementById("grsps3").style.display = "none";
} else {
    document.getElementById("smp").innerHTML = mysmp;
}

if (!mysmasmk) {
   document.getElementById("smasmk").style.display = "none";
} else {
    document.getElementById("smasmk").innerHTML = mysmasmk;
}
