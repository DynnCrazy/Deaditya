const chatBox = document.getElementById("chat-box");
const msgInput = document.getElementById("msg-input");
const sendBtn = document.getElementById("send-btn");
const katakunci1 = ["asal", "rumah", "alamat", "tinggal", "house", "umah"];
const katakunci2 = ["lahir", "lekad"];
const katakunci3 = ["umur", "tahun"];
const katakunci4 = ["pacar", "ayang", "kekasih", "istri", "sayang"];
const katakunci5 = ["web", "website", "browser"];
const katakunci6 = ["hobi", "kesukaan", "kegemaran", "hobby", "hoby"];
const katagantiorang2 = ["kamu", "mu", "kau", "c", "ci"];
const katabantuan = ["tolong", "bantu", "help", "please", "plis"];
const katapujian = ["keren", "mantap", "bagus", "gg"];
const katalucu = ["wkwk", "awok", "haha"];
const katasapaan = ["hai", "hallo", "p", "halo", "hy", "hello", "hay", "swastiastu"];

function lihatcmdchat() {
    document.body.style.overflow = 'hidden';
    document.getElementById("contcmdchat").style.opacity = 1;
    document.getElementById("contcmdchat").style.zIndex = 99999999;
}

function closedivcmdchat() {
    document.body.style.overflow = 'auto';
    document.getElementById("contcmdchat").style.opacity = 0;
    document.getElementById("contcmdchat").style.zIndex = -1;

}

sendBtn.addEventListener("click", () => {
    var msgcmd_id = msgInput.value.trim();
    if (!msgcmd_id) return;

    addMessage(msgcmd_id, "user");

    var themsguser = msgcmd_id.toLowerCase();
    var msgUserwithoutcngae = msgcmd_id;
    var isMsgUsersingleword = isSingleWord(themsguser);

    if ( (katakunci1.some(kata => themsguser.includes(kata)) && katagantiorang2.some(kata => themsguser.includes(kata))) || themsguser.includes("!asal") ) {
        msgcmd_id = "1";
    } else if ( (katakunci2.some(kata => themsguser.includes(kata)) && katagantiorang2.some(kata => themsguser.includes(kata))) || themsguser.includes("!lahir") ) {
        msgcmd_id = "2";
    } else if ( (katakunci3.some(kata => themsguser.includes(kata)) && katagantiorang2.some(kata => themsguser.includes(kata))) || themsguser.includes("!umur") ) {
        msgcmd_id = "3";
    } else if ( (katakunci4.some(kata => themsguser.includes(kata)) && katagantiorang2.some(kata => themsguser.includes(kata))) || themsguser.includes("!pacar") ) {
        msgcmd_id = "4";
    } else if ( (katakunci5.some(kata => themsguser.includes(kata)) && katagantiorang2.some(kata => themsguser.includes(kata))) || themsguser.includes("!web") ) {
        msgcmd_id = "5";
    } else if ( (katakunci6.some(kata => themsguser.includes(kata)) && katagantiorang2.some(kata => themsguser.includes(kata))) || themsguser.includes("!hobi") ) {
        msgcmd_id = "6";
    } else if ( isMsgUsersingleword === true && katapujian.some(kata => themsguser.includes(kata)) ) {
        msgcmd_id = "7";
    } else if ( isMsgUsersingleword === true && katalucu.some(kata => themsguser.includes(kata)) ) {
        msgcmd_id = "8";
    } else if ( isMsgUsersingleword === true && katasapaan.some(kata => themsguser.includes(kata)) ) {
        msgcmd_id = "9";
    } else {
        msgcmd_id = "0";
    }

    let resp_msg;

    if (msgcmd_id === "1") {
        resp_msg = "Saya berasal dari Br. Tojan Tegal, Pering, Kec. Blahbatuh, Kab. Gianyar, Bali, Indonesia, Asia Tenggara, Asia, Bumi, Bimasakti, Local Group, Superklaster Virgo, Laniakea, Observable Universe";
    } else if (msgcmd_id === "2") {
        resp_msg = "Saya lahir di rumah sakit Ari Canti yang berlokasi di Mas, Ubud pada tanggal 18 Juli 2008 pukul 21:10";
    } else if (msgcmd_id === "3") {
        const umurNow = new Date().getFullYear() - 2008;
        resp_msg = "Umur saya sekarang adalah " + umurNow + " tahun";
    } else if (msgcmd_id === "4") {
        resp_msg = "Pake nanya 😂, ya belum lah koCAk";
    } else if (msgcmd_id === "5") {
        resp_msg = "Saya buat web ini pakai html, css, dan javascript. Selain itu, saya juga menggunakan library/framework seperti bootstrap, email.js, aos.js, dll. Untuk hosting, saya menggunakan netlify yang sudah saya tautkan dengan repo github saya";
    } else if (msgcmd_id === "6") {
        resp_msg = "Saya memiliki banyak hobby tergantung mood saya. Contoh hobby saya antara lain: Jelas belajar 🥸, lalu ada programing, main game, nonton film, berjualan, olahraga, dll";
    } else if (msgcmd_id === "7") {
        resp_msg = "Terimaksih";
    } else if (msgcmd_id === "8") {
        resp_msg = msgUserwithoutcngae;
    } else if (msgcmd_id === "9") {
        resp_msg = msgUserwithoutcngae;
    } else {
        resp_msg = "Hmm";
    }

    setTimeout(() => addMessage(resp_msg, "bot"), 500);

    msgInput.value = "";
});


function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);

    const bubbleDiv = document.createElement("div");
    bubbleDiv.classList.add("chat-bubble", sender);
    bubbleDiv.textContent = message;

    messageDiv.appendChild(bubbleDiv);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function isSingleWord(sentence) {
    return sentence.trim().split(" ").length === 1;
}