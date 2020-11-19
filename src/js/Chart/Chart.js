import Chart from 'chart.js';

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        datasets: [{
            data: [300, 600, 400, 620, 700, 650, 530, 800, 900, 950, 1020],
            label: 'Revenue',
            borderColor: '#2F80ED',
            borderWidth: 2,
            lineTension: 0,
            fill: false
        },
        {
            data: [50, 260, 250, 270, 100, 150, 200, 50, 350, 500, 450],
            label: '12MMA',
            borderColor: '#63ECDB',
            borderWidth: 2,
            lineTension: 0,
            fill: false
        }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    max: 12,
                    beginAtZero: true
                },
                gridLines: {
                    lineWidth: 0,
                    zeroLineWidth: 1
                }
            }],
            yAxes: [{
                ticks: {
                    max: 1000,
                    beginAtZero: true,
                    stepSize: 250
                },
                gridLines: {
                    lineWidth: 0,
                    zeroLineWidth: 1
                }
            }]
        },
        legend: {
            position: 'bottom',
            align: 'start',
            labels: {
                fontColor: '#000000',
                fontStyle: 'normal',
                fontFamily: "'Roboto', sans-serif",
                fontSize: 12,
                boxWidth: 12
            }
        },
        
    }
});

export default myChart;