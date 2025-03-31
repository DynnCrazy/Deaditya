let dataGlobal;
var dataMovieList;

function prosesData(data) {
    console.log("Data sudah siap:", data);
    dataMovieList = dataGlobal.movie;
}

fetch("/Ast/Data/mylist.json")
    .then(response => response.json())
    .then(data => {
        dataGlobal = data;
        prosesData(dataGlobal);
        updateMovieList();
    })
    .catch(error => console.error("Terjadi kesalahan:", error));

function updateMovieList() {
    var tempMovieList = "";

    for (let movieF = 0; movieF < dataMovieList.length; movieF++) {
        tempMovieList += `<div class="contimgmymovielist" onclick="alert('${dataMovieList[movieF].nama}');">
                                <img src="${dataMovieList[movieF].poster}" class="imagemymovielist" alt="${dataMovieList[movieF].nama}">
                          </div>`;
    }

    document.getElementById("mymovielist").innerHTML = tempMovieList;
}