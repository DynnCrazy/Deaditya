let dataGlobal;
var dataMovieList;
var dataGamesList;
var dataGamesList_1;
var dataGamesList_2;
var dataGamesList_3;

function prosesData(data) {
    // console.log("Data sudah siap:", data);
    dataMovieList = dataGlobal.movie;
    dataGamesList = dataGlobal.games;

    if (data.movie && Array.isArray(data.movie)) {
        dataMovieList = data.movie.sort((a, b) => a.nama.localeCompare(b.nama));
    } else {
        dataMovieList = [];
    }

    if (data.games && Array.isArray(data.games)) {
        dataGamesList = data.games.sort((c, d) => c.nama.localeCompare(d.nama));
    } else {
        dataGamesList = [];
    }
}

fetch("/Ast/Data/mylist.json")
    .then(response => response.json())
    .then(data => {
        dataGlobal = data;
        prosesData(dataGlobal);
        updateMovieList();
        updateGamesList();
    })
    .catch(error => console.error("Terjadi kesalahan:", error));

function updateMovieList() {
    var tempMovieList = "";
    console.log("Saya pernah menonton " + dataMovieList.length + " movie!");


    for (let movieF = 0; movieF < dataMovieList.length; movieF++) {
        tempMovieList += `<div class="contimgmymovielist" onclick="alert('${dataMovieList[movieF].nama} (${dataMovieList[movieF].tahun})')">
                                <img src="${dataMovieList[movieF].poster}" class="imagemymovielist" alt="${dataMovieList[movieF].nama}">
                          </div>`;
    }

    document.getElementById("mymovielist").innerHTML = tempMovieList;
}

function updateGamesList() {
    var gamesPerPage = 0;
    var tempGamesList_pg1 = "";
    var tempGamesList_pg2 = "";
    var tempGamesList_pg3 = "";

    for (let removeKosongGms = dataGamesList.length - 1; removeKosongGms >= 0; removeKosongGms--) {
        if (dataGamesList[removeKosongGms].nama === "") {
            dataGamesList.splice(removeKosongGms, 1);
        }
    }

    gamesPerPage = Math.round(dataGamesList.length / 3);
    console.log("Saya pernah memainkan " + dataGamesList.length + " game!");

    var kondisigmspglist_1 = gamesPerPage;
    var kondisigmspglist_2 = gamesPerPage + gamesPerPage - 1;
    var kondisigmspglist_3 = gamesPerPage + gamesPerPage + gamesPerPage - 2;

    for (let gamesF = 0; gamesF < dataGamesList.length; gamesF++) {
        if (gamesF < kondisigmspglist_1) {
            tempGamesList_pg1 += `<p class="listgameslist">- ${dataGamesList[gamesF].nama}</p>`;
        } else if (gamesF >= kondisigmspglist_1 && gamesF <= kondisigmspglist_2) {
            tempGamesList_pg2 += `<p class="listgameslist">- ${dataGamesList[gamesF].nama}</p>`;
        } else {
            tempGamesList_pg3 += `<p class="listgameslist">- ${dataGamesList[gamesF].nama}</p>`;
        }
    }

    document.getElementById("mygamelist").innerHTML = `<div class="pagemygamelist">
                                ${tempGamesList_pg1}
                            </div>
                            <div class="pagemygamelist">
                                ${tempGamesList_pg2}
                            </div>
                            <div class="pagemygamelist">
                                ${tempGamesList_pg3}
                            </div>`;
}