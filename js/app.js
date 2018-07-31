                  // modal and  notifications//
// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.querySelector('.bell-icon');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];


//close individual alerts from ul .alert-list//////
// target ul and li items in modal/////

// const alertList = document.querySelector('.alert-list ul');
// const closeAlerts = myList.querySelectorAll( '.close-alert span' );
//const modalBody = document.querySelector('.modal-body');



                          ///dashboard search bar//
//form=.search-bar //
//const userSearch = document.querySelector('.search-bar form');

//input=.search //
//const dashSearch = document.querySelector('.search input');



                      //settings section///
//send email notification/// 
//div=.switch-container//
//const switchContainer = document.querySelector(".switch-container");

//input= #emailNotifications//
//const emailNotification = document.getElementById("emailNotifications");

//set profile to public////
//div= .switch-container//

//input = #profileTopublic//
//const profileTpPublic = document.getElementById("profileToPublic");





//// message user form//////
//Create a “Send” button and use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.//

//button=.submit-btn//
//const messageButton = document.querySelector('.submit-btn button');

//textarea = #message  //
//const textArea = document.getElementById('#message');
// const textAreaInput = form.querySelector('textarea');
//const  messInput = form.querySelector('input'); 


///section form is in = .mess////
//const formSection = document.querySelector('.mess');

//div for form = .search-b includes input for search bar and textarea/////
// const formInput = document.querySelector('.search-b");




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

              //section =.traffic-nav // hourly-monthly charts//
///////use let for variabes that will have new data and info////

// let dailyChart = document.querySelector('.day').getContext('2d');
// let hourlyChart = document.querySelector('.hour').getContext('2d');
// let weeklyChart = document.querySelector('.week').getContext('2d');
// let monthlyChart = document.querySelector('.month).getContext('2d');

// const trafficList = document.querySelector('.traffic ul');
// const trafficItems = document.querySelectorAll('li');


//create new charts, lables and data for daily, hourly, weekly,monthy in new arrays

///create if statements for:
//if user clicks '.daily' (dailyChart)- update data to dailyData, dailyLabel



//if user clicks '.hourly' (hourlyChart)-update data to hourlyData, hourlyLabel
//if user clicks '.weekly' (weeklyChart)-update data to weeklyData, weeklyLabel
// if user clicks '.monthly' (monthlyCahrt) -update data to monthlyData, monthlyLabel


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



////////// update chart info //////////

// setTimeout(function() {
//   addData(hourlyChart, [435, 150, 1570, 2334, 817, 293, 782], 0);
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
// function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }


//////main autocomplete for message-user input////////



//   function autocomplete(inp, arr) {  
//      //the autocomplete function takes two arguments,   the text field element and an array of possible autocompleted values:*/
//   const currentFocus;
//   /*execute a function when someone writes in the text field:*/
//    inp.addEventListener("input", function(e) {
//       var a, b, i, val = this.value;
//   // close any already open lists of autocompleted values*/
//        closeAllLists();
//        if (!val) { return false;}
//       currentFocus = -1;
//   //     /*create a DIV element that will contain the items (values):*/
//        a = document.createElement("DIV");
//       a.setAttribute("id", this.id + "autocomplete-list");
//        a.setAttribute("class", "autocomplete-items");
//   //     /*append the DIV element as a child of the autocomplete container:*/
//        this.parentNode.appendChild(a);
//   //     /*for each item in the array...*/
//        for (i = 0; i < arr.length; i++) {
//   //       /*check if the item starts with the same letters as the text field value:*/
//          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//   //         /*create a DIV element for each matching element:*/
//            b = document.createElement("DIV");
//   //         /*make the matching letters bold:*/
//            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//           b.innerHTML += arr[i].substr(val.length);
//   //         /*insert a input field that will hold the current array item's value:*/
//           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//   //         /*execute a function when someone clicks on the item value (DIV element):*/
//            b.addEventListener("click", function(e) {
//   //             /*insert the value for the autocomplete text field:*/
//               inp.value = this.getElementsByTagName("input")[0].value;
//   //             /*close the list of autocompleted values,
//   //             (or any other open lists of autocompleted values:*/
//                closeAllLists();
//            });
//            a.appendChild(b);
//          }
//       }
//    });

//   // /*execute a function presses a key on the keyboard:*/
//    inp.addEventListener("keydown", function(e) {
//       var x = document.getElementById(this.id + "autocomplete-list");
//        if (x) x = x.getElementsByTagName("div");
//        if (e.keyCode == 40) {
//          /*If the arrow DOWN key is pressed,
//   //       increase the currentFocus variable:*/
//          currentFocus++;
//   //       /*and and make the current item more visible:*/
//          addActive(x);
//        } else if (e.keyCode == 38) { //up
//   //       /*If the arrow UP key is pressed,
//   //       decrease the currentFocus variable:*/
//          currentFocus--;
//   //       /*and and make the current item more visible:*/
//          addActive(x);
//        } else if (e.keyCode == 13) {
//   //       /*If the ENTER key is pressed, prevent the form from being submitted,*/
//          e.preventDefault();
//          if (currentFocus > -1) {
//   //         /*and simulate a click on the "active" item:*/
//            if (x) x[currentFocus].click();
//         }
//        }
//    });
//    function addActive(x) {
//   //   /*a function to classify an item as "active":*/
//      if (!x) return false;
//   //   /*start by removing the "active" class on all items:*/
//      removeActive(x);
//      if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//   //   /*add class "autocomplete-active":*/
//      x[currentFocus].classList.add("autocomplete-active");
//    }
//    function removeActive(x) {
//   //   /*a function to remove the "active" class from all autocomplete items:*/
//      for (var i = 0; i < x.length; i++) {
//      x[i].classList.remove("autocomplete-active");
//      }
//    }
//    function closeAllLists(elmnt) {
//   //   /*close all autocomplete lists in the document,
//   //   except the one passed as an argument:*/
//      var x = document.getElementsByClassName("autocomplete-items");
//      for (var i = 0; i < x.length; i++) {
//        if (elmnt != x[i] && elmnt != inp) {
//          x[i].parentNode.removeChild(x[i]);
//        }
//      }
//    }
//   /*execute a function when someone clicks in the document:*/
//    document.addEventListener("click", function (e) {
//        closeAllLists(e.target);
//        });
//  }

// //Array of members names///////

// const memeberList = ["Victoria Chambers" ,"Dale Byrd", "Dawn Woods","Dan Oliver"];

//  function memberNames() {
//   let listOfNames = [];

//   for (let name = 0; name < memberList.length; name++) {
//     let memberName = memberList[name].textContent;
//     listOfNames.push(memberName);
//     if (listOfNames.length === memberList.length) {
//       return listOfNames;
//     }
//   }
// }


//re-write as forEach function //
//memberNames.forEach(memberName => )

// // Call autocomplete function
// let membersListArray = memberNames();
// autocomplete(document.getElementById("searchMess"), membersListArray);
