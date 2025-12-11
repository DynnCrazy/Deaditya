async function loadData() {
    const response = await fetch("/Ast/Data/Json/watching.json");
    let data = await response.json();
    data.sort((a, b) => a.title.localeCompare(b.title));

    // data = reorderHorizontal(data, 2);


    let temp = '';

    for (let i = 0; i < data.length; i++) {
        if (data[i].image === "-") continue;

        temp += `
            <div class="item mb-4 relative break-inside-avoid overflow-hidden">
                <img src="${data[i].image}" alt="${data[i].title}" loading="lazy">
                <div class="item-overlay md:text-[14px] max-md:text-[12px]">${data[i].title} (${data[i].year_release})</div>
            </div>`;
    }

    document.getElementById("masonry-grid").innerHTML = temp;
    setTimeout(startAutoScroll, 5000);
}

function reorderHorizontal(data, columns) {
    const result = [];
    const rows = Math.ceil(data.length / columns);

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
            const i = r * columns + c;
            if (i < data.length) {
                result.push(data[i]);
            }
        }
    }

    return result;
}

function startAutoScroll() {
    let speed = 1.2;

    function scrollDown() {
        window.scrollBy(0, speed);

        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            clearInterval(timer);
        }
    }

    let timer = setInterval(scrollDown, 10);
}

loadData();