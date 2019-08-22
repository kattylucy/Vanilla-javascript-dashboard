// BANNER ALERT TOP OF THE PAGE 

const alert = document.getElementById("alert-banner-close");

alert.addEventListener("click", (e) => {
    let banner = document.querySelector(".alert-banner");
    banner.style.display = 'none';
});



/// event listener for the send button in the user FORM 

let sendBttn = document.getElementById('send');
let sendBanner = document.getElementById('message-sent-alert');
let errorBanner = document.getElementById('message-error-alert')

sendBttn.addEventListener('click', () => {

    let userField = document.getElementById('userField').value.length;
    let messageField = document.getElementById('messageField').value.length;
    

    if (userField === 0){
        errorBanner.style.display = "block";
    }

    else if (messageField === 0) {
        errorBanner.style.display = "block";
        
    } 

    else{
        errorBanner.style.display = "none";
        sendBanner.style.display ="block";
    }
});

sendBanner.addEventListener('click', () =>{
    sendBanner.style.display = "none";
});




// NOTIFICATION BELL 

let bellIcon = document.querySelector('.bell-icon');
let notificationDiv = document.getElementById("notification-from-bell-icon");
let divToClose = document.querySelector('#notification-from-bell-icon div');
let toCloseEvent = document.querySelectorAll('#notification-from-bell-icon div h3');


document.addEventListener('click', (e) =>{

    if ( e.target.classList.contains('bell-icon')){
        notificationDiv.style.display = "block";
        bellIcon.className = "checked";
    }

    else if(e.target.classList.contains('checked')){
        notificationDiv.style.display = "none";
        bellIcon.className ="bell-icon";
    }

});

function closed(){
    divToClose.style.display ="none";
}


/// MAIN CHART


let callChart = document.getElementById('myChart').getContext('2d');
let chart = new Chart(callChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        
        datasets: [{
            label: 'Hourly Data',
            backgroundColor: 'rgba(154, 172, 190, 0.2)',
            borderColor: 'rgba(154, 172, 190, 1)',
            data: [500, 900, 700, 500, 600, 1200, 1100, 450, 1500, 1000, 2500]
        }],
        
        borderWidth: 1
    },

    options: {
        events: ['click', 'touchstart', 'touchmove'],

    }
});


function daily(chart) {
    chart.data.datasets[0].data = [140,100,50,80,100,500,200,100,500,10,20];
    chart.data.datasets[0].label = "Daily Data";
    chart.update();
};

function hourly(chart){
    chart.data.datasets[0].data = [500, 900, 700, 500, 600, 1200, 1100, 450, 1500, 1000, 2500];
    chart.data.datasets[0].label = "Hourly Data";
    chart.update();
}

function weekly(chart){
    chart.data.datasets[0].data = [100, 200, 500, 50, 60, 200, 100, 1450, 1200, 1200, 2300];
    chart.data.datasets[0].label = "Weekly Data";
    chart.update();
}

function monthly(chart){
    chart.data.datasets[0].data = [1020, 2020, 500, 530, 620, 2400, 10, 150, 1250, 100, 200];
    chart.data.datasets[0].label = "Monthly Data";
    chart.update();
}




// LINE CHART 


let chart2call = document.getElementById("traffic-graph");
let chart2  = new Chart(chart2call, {
    type: 'bar',

    data: {
        labels:['s', 'm', 't', 'w', 't', 'f', 's'],
        datasets: [{
            label: 'Traffic',
            backgroundColor: 'rgb(33, 89, 141)',
            borderColor: 'white',
            data: [250, 150, 80, 100, 40, 200, 10]
        }]
    },

});



// DONUT CHART


let donut = document.getElementById("donut-graph");
let chart3  = new Chart(donut, {
    type: 'doughnut',

    data: {
        labels:['phones', 'tablets', 'desktop'],
        datasets: [{
            backgroundColor: [
            'rgb(33, 89, 141)',
            'rgb(33, 89, 141, .5)',
            'rgb(33, 89, 141, .2)'
        ],
            borderColor: 'white',
            data: [450, 200, 150]
        }]
    },

});

