var isMyStatsOpen = false;
var isMyStatsOpenFirstTime = false;
var isMyStatsOpenFirstTimeFinish = false;
let minTC = 5000;
let maxTC = 10000;
let randomTimeToChange = Math.floor(Math.random() * (maxTC - minTC + 1)) + minTC;

function lihatStatistik() {
    if (isMyStatsOpen === false) {
        isMyStatsOpen = true;
        document.body.style.overflow = 'hidden';
        isMyStatsOpenFirstTime = true;
        id_contstats.style.opacity = 1;
        id_contstats.style.zIndex = 9999999;
    } else {
        isMyStatsOpen = false;
        document.body.style.overflow = 'hidden';
        id_contstats.style.opacity = 1;
        id_contstats.style.zIndex = 9999999;
    }

    if (isMyStatsOpenFirstTime === true && isMyStatsOpenFirstTimeFinish === false) {
        setTimeout(function() {
            id_valuepencapaiandidapatkan.innerText = 'Not found!';
            id_valuepencapaiandidapatkan.style.color = 'red';
        }, randomTimeToChange);
        isMyStatsOpenFirstTimeFinish = true;
    }
}

function closelhtstats() {
    isMyStatsOpen = false;
    document.body.style.overflow = 'auto';
    id_contstats.style.opacity = 0;
    id_contstats.style.zIndex = -1;
    myChart.resetZoom();
}

function calculateAge(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);

    let ageInYears = now.getFullYear() - birth.getFullYear();

    const birthdayThisYear = new Date(now.getFullYear(), birth.getMonth(), birth.getDate(), 21, 10);  // 21:10 WITA
    if (now < birthdayThisYear) {
        ageInYears--;
    }

    const lastBirthday = new Date(now.getFullYear() - (now < birthdayThisYear ? 1 : 0), birth.getMonth(), birth.getDate(), 21, 10);
    const totalSeconds = Math.floor((now - lastBirthday) / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
        years: ageInYears,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function updateAgeDisplay() {
    const birthDate = "2008-07-18";
    const age = calculateAge(birthDate);

    id_statswaktuhidup.innerHTML = `Waktu hidup: ${age.years} tahun, ${age.days} hari, ${age.hours} jam, ${age.minutes} menit, dan ${age.seconds} detik.`;
}


setInterval(updateAgeDisplay, 1000);
