
// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.querySelector('.bell-icon');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const closeAlert = document.querySelectorAll('close-alert');






// Listen for open click
modalBtn.addEventListener('click', openModal);


// Listen for close click
closeBtn.addEventListener('click', closeModal);
// closeAlert.addEventListener('click', closeModal);


// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal$$$
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
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

let massPopChart = new Chart(myChart1, {
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
      //backgroundColor:'green',
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
      //backgroundColor:'green',
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
      //backgroundColor:'green',
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