                  // modal and  notifications//
// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.querySelector('.bell-icon');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

//close individual alerts from ul .alert-list
// target ul and li items in modal

// const alertList = document.querySelector('.alert-list ul');
// const listItems = myList.querySelectorAll( '.close-alert span' );
//const modalBody = document.querySelector('.modal-body');




              //section =.traffic-nav // hourly-monthly charts//

// target each one to get a new chart??//
//const trafficHour = documet.querySelector('.hour');
//const trafficWeek = documet.querySelector('.week');
//const trafficDay = documet.querySelector('.day');
//const trafficMonth = documet.querySelector('.month');

// const trafficList = document.querySelector('.traffic ul');
//const trafficItems = document.querySelectorAll('li');




                      //message-user section=.mess// 
//div = .info//

//search bar form =.search-b//
//const searchB = document.querySelector('.search-b');

//input - .searchMess//
//const messageSearch = document.querySelector('.searchMess');

                          ///dashboard search bar//
//form=.search-bar //
//const userSearch = document.querySelector('.search-bar form');


//input=.search //
//const dashSearch = document.querySelector('.search input');

//div=.use-info.//
// const useInfo = document.querySelector('.use-info');


//button=.submit-btn//
//const messageButton = document.querySelector('.submit-btn button');

//textarea = #message  //
//const textArea = document.getElementById('#message');



                      //settings section///
//send email notification/// 
//div=.switch-container//
//input= #emailNotifications//

//set profile to public////
//div= .switch-container//
//input = #profileTopublic//








// Listen for open click in modal
modalBtn.addEventListener('click', openModal);

// Listen for close click in modal
closeBtn.addEventListener('click', closeModal);
// listItems.addEventListener('click', closeModal);

// Listen for outside click in modal window
window.addEventListener('click', outsideClick);
// Function to open modal//
function openModal(){
  modal.style.display = 'block';
}
// Function to close modal//
function closeModal(){
  modal.style.display = 'none';
}
// Function to close modal if outside click//
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}







let myChart1 = document.getElementById('myChart1').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let dailyTraffic = new Chart(myChart1, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets:[{
      label: 'Traffic',
      data:[
        75,
        100,
        175,
        125,
        225,
        200,
        100
      ],
      backgroundColor:'#8685ad',
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Daily Traffic',
      fontSize:25
    },
    legend:{
      display: false,
      position:'right',
      labels:{
        fontColor:'#000',
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0,
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

let myChart2 = document.getElementById('myChart2').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let mobileUser = new Chart(myChart2, {
  type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Phones', 'Tablets', 'Desktop'],
    datasets:[{
      label:'Population',
      data:[
        15,
        15,
        70, ],
      backgroundColor:[
        'lightgreen',
        'cadetblue',
        '#8685ad',
        
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Mobile Users',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

let myChart3 = document.getElementById('myChart3').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let traffic = new Chart(myChart3, {
  type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['16-22', '23-29', '30-5', '6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets:[{
      label:'Population',
      data:[
        500,
        1000,
        1500,
        2000,
        2500, 
      ],
      backgroundColor:[
        'lavender',
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Traffic',
      fontSize:22
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

////////// chart info //////////

/*let dailyChart = document.getElementById('.daily-chart').getContext('2d');
//let hourlyChart = document.getElementById('.hourly-chart').getContext('2d');
//let weeklyChart = document.getElementById('.weekly-chart').getContext('2d');
//let monthlyChart = document.getElementById('.monthly-chart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

////////// update chart info //////////

// setTimeout(function() {
//   addData(hourlyChart, [45, 50, 30, 34, 61, 53, 42], 0);
// }, 2000);

// function addData(chart, data, datasetIndex) {
//   chart.data.datasets[datasetIndex].data = data;
//   chart.update();
// }

// setTimeout(function() {
//   addData(dailyChart, [45, 50, 30, 34, 61, 53, 42], 0);
// }, 2000);

// function addData(chart, data, datasetIndex) {
//   chart.data.datasets[datasetIndex].data = data;
//   chart.update();
// }
// setTimeout(function() {
//   addData(chart, [45, 50, 30, 34, 61, 53, 42], 0);
// }, 2000);

// function addData(chart, data, datasetIndex) {
//   chart.data.datasets[datasetIndex].data = data;
//   chart.update();
// }

// setTimeout(function() {
//   addData(monthlyChart, [45, 50, 30, 34, 61, 53, 42], 0);
// }, 2000);

// function addData(chart, data, datasetIndex) {
//   chart.data.datasets[datasetIndex].data = data;
//   chart.update();
// }