const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
   type: 'line',
   data: {
       labels: ['28 Okt 24', '4 Nov 24', '11 Nov 24', '18 Nov 24', '25 Nov 24'],
       datasets: [{
           label: 'Tingkat kebahagiaan',
           data: [7, 5, 0, 0, 0],
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
            titleFont: {
                size: 14,
            },
            bodyFont: {
                size: 12,
            }
        },           
           legend: {
               display: false
           }
       },
       scales: {
           x: {
               ticks: {
                   color: 'white'
               }
           },
           y: {
               ticks: {
                   color: 'white'
               }
           }
       }
   }
});
