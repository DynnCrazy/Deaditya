const url = "https://datadc.netlify.app/data/person/person.json";

const idSmp = ["000021", "000030", "000047", "000036", "000044", "000034", "000043", "000013", "000019", "000024", "000045", "000014", "000040", "000016", "000042", "000035", "000027", "000031", "000046", "000032", "000026", "000011", "000037", "000041", "000015", "000017", "000038", "000039", "000033", "000020", "000025", "000012", "000018", "180708", "000022", "000029", "000023", "000028"]
const idSma = ["000114", "000109", "000120", "000107", "000118", "000097", "000103", "000116",
    "000094", "000098", "000095", "000105", "000108", "000099", "000111", "000045",
    "000121", "000093", "000106", "000123", "000096", "000117", "000119", "000101",
    "000125", "000104", "000035", "000110", "000102", "000092", "000122", "000100",
    "000124", "", "180708", "000115"]

const urlParams = new URLSearchParams(window.location.search);
const admin = urlParams.get('tingkat');
var idTemannku = 0;
    if (admin === 'tk') {
        idTemannku = idSmp;
    } else if (admin === 'sd') {
        idTemannku = idSmp;
    } else if (admin === 'smp') {
        idTemannku = idSmp;
    }  else if (admin === 'smasmk') {
        idTemannku = idSma;
    } else {
        idTemannku = idSmp;
    }

var namafromid = ["-"];
var imagefromid = ["-"];
var namaOrangTempatDuduk = 0;
var fotoOrangTempatDuduk = 0;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Looping array ID
    idTemannku.forEach((idToFind) => {
      // Cari data berdasarkan ID
      const person = data.people.find((item) => item.id === idToFind);

      if (person) {
        // Masukkan nama ke dalam array
        namafromid.push(person.name);

        // Masukkan gambar pertama (atau "-" jika tidak ada gambar)
        if (person.photo && person.photo.length > 0) {
          imagefromid.push(person.photo[0]);
        } else {
          imagefromid.push("-");
        }
      } else {
        // Jika ID tidak ditemukan
        namafromid.push("Tidak ditemukan");
        imagefromid.push("-");
      }
    });

    // Tampilkan hasil
    console.log("Nama dari ID:", namafromid);
    console.log("Gambar dari ID:", imagefromid);
    namaOrangTempatDuduk = namafromid;
    fotoOrangTempatDuduk = imagefromid;
    displayTheName();
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });


function displayTheName() {

for (let i = 0; i < namaOrangTempatDuduk.length; i++) {
    let namavar = "imgTempatDuduk";
    let imgElement = document.getElementById(`${namavar}${i}`);
    if (imgElement) {
        if (namaOrangTempatDuduk[i] === "Tidak ditemukan") {
            console.log("ok");
        } else {
            imgElement.alt = namaOrangTempatDuduk[i];
        }
    }
}

for (let i = 0; i < fotoOrangTempatDuduk.length; i++) {
    let namavar = "imgTempatDuduk";
    let imgElement = document.getElementById(`${namavar}${i}`);
    if (imgElement) {
        if (fotoOrangTempatDuduk[i] === "-") {
            if (namaOrangTempatDuduk[i] === "Tidak ditemukan") {
                console.log("ok");
            } else {
              imgElement.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwsHbN9z7IjGfRPzrmLIwRYuxMNNt6c8sCd6CnP_kgZX7Se_UKGqtsDh7FRiYYyV_48y8RhGcGIcxEh32F-G0TLTuTOnVXSNN4WiXUjx8UapbtThNzNiU1qKs9D-JnVEGHPmwfX2M9zIkj3JqTkYvOGHIK4AxVU8oqAfn0f4IuvTh31UvKlnWXhTqHoA/s1080/1000083920.jpg";
            }
        } else {
            imgElement.src = fotoOrangTempatDuduk[i];
        }
    }
}

let imgElements = document.querySelectorAll("img");
imgElements.forEach((imgElement, index) => {
    imgElement.onclick = function () {
        var nameImage = document.getElementById(imgElement.id).alt;
        alert(`Nama: ${nameImage}`);
    };
});

}