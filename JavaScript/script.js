const alert = document.getElementById("alert-banner-close");

alert.addEventListener("click", (e) => {
    let banner = document.querySelector(".alert-banner");
    banner.style.display = 'none';
});


let callChart = document.getElementById('myChart').getContext('2d');
let chart = new Chart(callChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Traffic Data',
            backgroundColor: 'rgb(33, 89, 141)',
            borderColor: 'white',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
        }]
    },

    // Configuration options go here
    options: {
        events: ['click', 'touchstart', 'touchmove'],
    }
});

let chart2call = document.getElementById("traffic-graph");
let chart2  = new Chart(chart2call, {
    type: 'bar',

    data: {
        labels:['s', 'm', 't', 'w', 't', 'f', 's'],
        datasets: [{
            label: 'Traffic',
            backgroundColor: 'rgb(33, 89, 141)',
            borderColor: 'white',
            data: [250, 200, 150, 100, 50, 30, 10]
        }]
    },

});


let donut = document.getElementById("donut-graph");
let chart3  = new Chart(donut, {
    type: 'doughnut',

    data: {
        labels:['phones', 'tablets', 'desktop'],
        datasets: [{
            backgroundColor: [
            'rgb(33, 89, 141)',
            'rgb(33, 89, 141, .3)',
            'rgb(33, 89, 141), .5'
        ],
            borderColor: 'white',
            data: [250, 200, 150]
        }]
    },

});