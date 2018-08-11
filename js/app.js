                  // modal and  notifications//
// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.querySelector('.bell-icon');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
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
 


//// message user form//////
//Create a “Send” button and use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.//

// // //grab form id=form
const form = document.getElementById("form");
// // //textarea id=message  //
const textArea = document.getElementById('message');
// // //input id=seachMess
const inputMessage =document.getElementById('searchMess');

// // // //add event listener to form
form.addEventListener("submit",(e) => {
  e.preventDefault();
 
// add array of valid names and if statements to match//

if (inputMessage.value === ""){
  alert("Please enter a valid user name");
  
 } else if (textArea.value === ""){
    alert("Please enter your message here");

  } else if( textArea !=""){
  confirm("Thank you! Your message has been sent!");
  form.reset();
}
});


// //clear out the input element after submitting//
// input.value = "";


              //section =.traffic-nav // hourly-monthly charts//

const hourlyLabels= ['0-50', '55-100', '150-300', '16-120','44-55','20-26','80-99','11-33','23-39','18-24','130-165'];
const hourlyData= [475,840,1165,2010,1980,642,988,8432,4892,875,1278];
const dailyLabels= ['1952', '1962', '1972', '1982','1992','2002','2012','2022','2032','2042','2052'];
const dailyData= [11892,15698,9032,16899,21572,17354,28732,29135,31,698,43741];
const weeklyLabels= ['Sun', 'Mon', 'Tues', 'Wed','Thurs','Fri','Sat'];
const weeklyData= [1475,1840,2165,3010,1980, 1993, 2014];
const monthlyLabels=['Jan', 'Feb', 'Mar', 'Apr','May','June','July','Aug','Sept','Oct','Nov', 'Dec'];
const monthlyData= [4750,8400,11605,2018,19360,6521,3456,8796,4598,1983,2278,8732];
const dailyChart = document.querySelector('.day');
const hourlyChart = document.querySelector('.hour');
const weeklyChart = document.querySelector('.week');
const monthlyChart = document.querySelector('.month');
const trafficList = document.querySelector('.traffic');
const trafficItems = document.querySelectorAll('li');

function newLineChart(chart, label, data) {
  chart.data ={
    labels: label,
  datasets:[{
      data: data,
    }]
  },
  chart.update();
}


// // // Display selected line chart in Traffic section
trafficList.addEventListener('click', function (e) {
  let clicked = e.target.className;
  
  if (e.target && e.target.nodeName === "LI") {
    trafficItems.forEach((trafficItem) => {
    trafficItem.classList.remove('active');
    });
  } else {
    return;
  }

  // e.target.classList.add('active');
  // newLineChart.pop();
// //create newLineCart function///
e.target.classList.add('active');
    if (clicked === 'hour') {
    newLineChart(traffic, hourlyLabels, hourlyData);
  } else if (clicked === 'day') {
    newLineChart(traffic, dailyLabels, dailyData);
  } else if (clicked === 'week') {
    newLineChart(traffic, weeklyLabels, weeklyData);
  } else if (clicked === 'month') {
    newLineChart(traffic, monthlyLabels, monthlyData);
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
    labels: hourlyLabels,
  datasets:[{
      data: hourlyData,
      label: 'Traffic',
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



////main autocomplete for message-user input////////

  function autocomplete(inp, arr) {  
     //the autocomplete function takes two arguments,   the text field element and an array of possible autocompleted values:*/
  let currentFocus= "";
  /*execute a function when someone writes in the text field:*/
   inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
  // close any already open lists of autocompleted values*/
       closeAllLists();
       if (!val) { return false;}
      currentFocus = -1;
  //     /*create a DIV element that will contain the items (values):*/
       a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
       a.setAttribute("class", "autocomplete-items");
  //     /*append the DIV element as a child of the autocomplete container:*/
       this.parentNode.appendChild(a);
  //     /*for each item in the array...*/
       for (i = 0; i < arr.length; i++) {
  //       /*check if the item starts with the same letters as the text field value:*/
         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
  //         /*create a DIV element for each matching element:*/
           b = document.createElement("DIV");
  //         /*make the matching letters bold:*/
           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
  //         /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
  //         /*execute a function when someone clicks on the item value (DIV element):*/
           b.addEventListener("click", function(e) {
  //             /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
  //             /*close the list of autocompleted values,
  //             (or any other open lists of autocompleted values:*/
               closeAllLists();
           });
           a.appendChild(b);
         }
      }
   });

  // /*execute a function presses a key on the keyboard:*/
   inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
       if (x) x = x.getElementsByTagName("div");
       if (e.keyCode == 40) {
         /*If the arrow DOWN key is pressed,
  //       increase the currentFocus variable:*/
         currentFocus++;
  //       /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 38) { //up
  //       /*If the arrow UP key is pressed,
  //       decrease the currentFocus variable:*/
         currentFocus--;
  //       /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 13) {
  //       /*If the ENTER key is pressed, prevent the form from being submitted,*/
         e.preventDefault();
         if (currentFocus > -1) {
  //         /*and simulate a click on the "active" item:*/
           if (x) x[currentFocus].click();
        }
       }
   });
   function addActive(x) {
  //   /*a function to classify an item as "active":*/
     if (!x) return false;
  //   /*start by removing the "active" class on all items:*/
     removeActive(x);
     if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
  //   /*add class "autocomplete-active":*/
     x[currentFocus].classList.add("autocomplete-active");
   }
   function removeActive(x) {
  //   /*a function to remove the "active" class from all autocomplete items:*/
     for (var i = 0; i < x.length; i++) {
     x[i].classList.remove("autocomplete-active");
     }
   }
   function closeAllLists(elmnt) {
  //   /*close all autocomplete lists in the document,
  //   except the one passed as an argument:*/
     var x = document.getElementsByClassName("autocomplete-items");
     for (var i = 0; i < x.length; i++) {
       if (elmnt != x[i] && elmnt != inp) {
         x[i].parentNode.removeChild(x[i]);
       }
     }
   }
  /*execute a function when someone clicks in the document:*/
   document.addEventListener("click", function (e) {
       closeAllLists(e.target);
       });
 }

// //Array of members names///////

const membersList = ["Victoria Chambers", "Dale Byrd", "Dawn Woods","Dan Oliver"];

 function memberNames() {
  let listOfNames = [];

  for (let name = 0; name < membersList.length; name++) {
    let memberName = membersList[name].textContent;
    listOfNames.push(memberName);
    if (listOfNames.length === membersList.length) {
      return listOfNames;
    }
  }
}


// // // Call autocomplete function
let membersListArray = memberNames();
autocomplete(document.getElementById("searchMess"), membersListArray);



////////local storage example/////
                     //settings section///

const switchContainer = document.querySelector(".switch-container");
//input= #emailNotifications//
const emailNotification = document.getElementById("emailNotifications");
//input = #profileTopublic//
const profileToPublic = document.getElementById("profileToPublic");
//time Zone= #timeZone
const timeZone = document.getElementById("timeZone");


// Save settings local storage
// saveSettings.addEventListener('click', function (e) {

// // Prevent form from submitting
//   e.preventDefault();

//   localStorage.setItem('emailNotifications', emailNotifications.checked);
//   localStorage.setItem('profileToPublic', profileToPublic.checked);
//   localStorage.setItem('timeZone', timeZone.selectedIndex);


// // Listen for form submit///adding event listener to the form
// document.getElementById('').addEventListener('submit', saveSetting);

// // Save Setting

// function saveSetting(e){
//   // Get form values
//   var siteName =document.getElementById('siteName').value;
//  
//   if(!validateForm(siteName)){
//     return false;
//   }

//   var bookmark = {
//     name: siteName,
//     url: siteUrl
//   }
// Test if bookmarks is null

// if(localStorage.getItem('bookmarks') === null){
//   // Init array
//   var bookmarks = [];
//   // Add to array
//   bookmarks.push(bookmark);
//   // Set to localStorage
//   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
// } else {
//   // Get bookmarks from localStorage
//   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//   // Add bookmark to array
//   bookmarks.push(bookmark);
//   // Re-set back to localStorage
//   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
// }

// // Clear form
// document.getElementById('myForm').reset();

// // Re-fetch bookmarks
// fetchBookmarks();

// e.preventDefault();
// }

// // Delete bookmark
// function deleteBookmark(url){
// // Get bookmarks from localStorage
// var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
// // Loop through the bookmarks
// for(var i =0;i < bookmarks.length;i++){
//   if(bookmarks[i].url == url){
//     // Remove from array
//     bookmarks.splice(i, 1);
//   }
// }
// // Re-set back to localStorage
// localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

// // Re-fetch bookmarks
// fetchBookmarks();
// }

// // Fetch bookmarks
// function fetchBookmarks(){
// // Get bookmarks from localStorage
// var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
// // Get output id
// var bookmarksResults = document.getElementById('bookmarksResults');
// Validate Form
// function validateForm(siteName, siteUrl){
//   if(!siteName || !siteUrl){
//     alert('Please fill in the form');
//     return false;
//   }

//   var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
//   var regex = new RegExp(expression);

//   if(!siteUrl.match(regex)){
//     alert('Please use a valid URL');
//     return false;
//   }

//   return true;
// }

// function addhttp(url) {
//   if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
//       url = "http://" + url;
//   }
//   return url;
// }