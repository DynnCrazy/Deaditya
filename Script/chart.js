const labels = ['01 Feb 25', '29 Jan 25', '26 Jan 25', '23 Jan 25', '20 Jan 25', '17 Jan 25', '14 Jan 25', '11 Jan 25', '8 Jan 25', '5 Jan 25', '2 Jan 25', '30 Des 24', '27 Des 24', '24 Des 24', '21 Des 24', '18 Des 24', '15 Des 24', '12 Des 24', '9 Des 24', '6 Des 24', '3 Des 24', '30 Nov 24', '27 Nov 24', '24 Nov 24', '21 Nov 24', '18 Nov 24', '15 Nov 24', '12 Nov 24', '9 Nov 24', '6 Nov 24', '3 Nov 24', '31 Okt 24', '28 Okt 24', '25 Okt 24', '22 Okt 24'];
const dataPoints = [6, 9, 6, 8, 7, 6, 6, 7, 7, 8, 7, 7, 6, 6, 7, 6, 7, 6, 6, 6, 8, 7, 8, 7, 7, 7, 7, 6, 5, 6, 7, 6, 7, 5, 6,];

console.log(labels.length);
console.log(dataPoints.length);

const ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.slice().reverse(),
            datasets: [{
                label: 'Tingkat kebahagiaan',
                data: dataPoints.slice().reverse(),
                borderColor: '#00a2ff',
                backgroundColor: '#00a2ff39',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    backgroundColor: '#00a2ff',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#00a2ff',
                    borderWidth: 1,
                    titleFont: { size: 14 },
                    bodyFont: { size: 12 }
                },
                legend: { display: false },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy',
                    },
                    limits: {
                        x: { min: 0, max: 10 },
                        y: { min: 0, max: 10 } 
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'white' }
                },
                y: {
                    ticks: { color: 'white' }
                }
            }
        }
    });

document.addEventListener('keydown', function(event) {
    if (isMyStatsOpen === false) {
        var xyz = 'zyx';
    } else {
    const zoomAmount = 1.1;
    const panAmount = 20;

    switch(event.key) {
        case 'Z':
        case 'z':
            myChart.zoom(zoomAmount);
            break;
        case 'X':
        case 'x':
            myChart.zoom(1 / zoomAmount);
            break;
        case 'ArrowRight':
            myChart.pan({x: panAmount, y: 0}, 'default');
            break;
        case 'ArrowLeft':
            myChart.pan({x: -panAmount, y: 0}, 'default');
            break;
    }

    }
});
