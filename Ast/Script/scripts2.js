var data_project_webiste = [
    {
        "nama": "Coming Soon!",
        "deskripsi": "Projek saya akan segera ditampilkan dalam beberapa waktu yang akan datang.",
        "made": "Heart",
        "url": "?",
        "gambar": "https://fastly.picsum.photos/id/1041/536/354.jpg?hmac=KCUfKD1aR-Kcl16C8qazPFJ04xPQuOgYS6XBa6yRxQs"
    }
    
];


function goToLink(link) {
    if (link === "?") {
        return;
    } else {
        window.open(link, '_blank');
    }
}

var project_website = document.getElementById("projectWebsite");
var temp_project_website = '';
var temp_project_website_wnp = '';
var pageFunTpwNow = 0;

function funTpw(page) {
    if (page == 1) {
        for (let tpw = 0; tpw < data_project_webiste.length; tpw++) {
            if (tpw < 3) {
                temp_project_website += `
                    <div class="bg-[#001928] border-[#7ccfff1f] border w-[100%] md:w-[30%] h-auto rounded-md cursor-pointer" onclick=goToLink("${data_project_webiste[tpw].url}")>
                        <div class="w-full flex justify-center mt-[3.5%] md:mt-[0%]">
                            <div class="w-[94%] md:w-[100%]">
                                <img class="rounded-t-sm md:rounded-t-md w-[100vw] h-auto" src="${data_project_webiste[tpw].gambar}" alt="${data_project_webiste[tpw].nama}">
                            </div>
                        </div>
                        <div class="w-full flex justify-center">
                            <div class="w-[90%]">
                                <p class="text-[16px] text-[#00a2ff] font-semibold mt-2 md:mt-3 items-center">${data_project_webiste[tpw].nama}</p>
                                <p class="text-[12px] text-[#ffffffe8] mt-2 mb-4 items-center">${data_project_webiste[tpw].deskripsi}</p>
                                <p class="text-[10px] text-[#00a2ff] my-4 items-center"><span class="text-[#ffffffe8]">Made with:</span> ${data_project_webiste[tpw].made}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        pageFunTpwNow = +1;
    } else if (page >= 2) {
        var hasil = temp_project_website.replace(temp_project_website_wnp, '');
        temp_project_website = hasil;

        for (let tpw = 3 * (page - 1); tpw < data_project_webiste.length; tpw++) {
            if (tpw < (3 * page)) {
                temp_project_website += `
                    <div class="bg-[#001928] border-[#7ccfff1f] border w-[100%] md:w-[30%] h-auto rounded-md cursor-pointer" onclick=goToLink("${data_project_webiste[tpw].url}")>
                        <div class="w-full flex justify-center mt-[3.5%] md:mt-[0%]">
                            <div class="w-[94%] md:w-[100%]">
                                <img class="rounded-t-sm md:rounded-t-md w-[100vw] h-auto" src="${data_project_webiste[tpw].gambar}" alt="${data_project_webiste[tpw].nama}">
                            </div>
                        </div>
                        <div class="w-full flex justify-center">
                            <div class="w-[90%]">
                                <p class="text-[16px] text-[#00a2ff] font-semibold mt-2 md:mt-3 items-center">${data_project_webiste[tpw].nama}</p>
                                <p class="text-[12px] text-[#ffffffe8] mt-2 mb-4 items-center">${data_project_webiste[tpw].deskripsi}</p>
                                <p class="text-[10px] text-[#00a2ff] my-4 items-center"><span class="text-[#ffffffe8]">Made with:</span> ${data_project_webiste[tpw].made}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        pageFunTpwNow += 1;
    }

    const totalYangSudahTampil = page * 3;
    
    if (data_project_webiste.length > totalYangSudahTampil) {
        temp_project_website_wnp = `
            <div class="bg-[#00a2ff] w-[100%] h-auto rounded-md flex justify-center cursor-pointer" onclick="funTpw(${pageFunTpwNow + 1})">
                <p class="text-[14px] my-2 items-center">Click to see more!</p>
            </div>
        `;

        temp_project_website += temp_project_website_wnp;
    }

    project_website.innerHTML = temp_project_website;
}

funTpw(1);