const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['22 Okt 24', '25 Okt 24', '28 Okt 24', '31 Okt 24', '3 Nov 24', '6 Nov 24', '9 Nov 24', '12 Nov 24', '15 Nov 24', '18 Nov 24', '21 Nov 24'],
        datasets: [{
            label: 'Tingkat kebahagiaan',
            data: [6, 5, 7, 6, 7, 6, 0, 0, 0, 0, 0],
            borderColor: '#0088ff',
            backgroundColor: '#0088ff39',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                backgroundColor: '#0088ff',
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: '#0088ff',
                borderWidth: 1,
                titleFont: { size: 14 },
                bodyFont: { size: 12 }
            },
            legend: { display: false },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                    speed: 20,
                },
                zoom: {
                    wheel: {
                        enabled: true,
                        speed: 0.1,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'x',
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
