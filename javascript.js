var myTable = document.getElementById('myTable');

//Top of page: day set
const nowDay = moment().format('MMMM Do YYYY');
let dateHeading = document.getElementById('currentDay');
dateHeading.innerText = nowDay;

//Top of page: time set
var nowTime = moment().format('LT'); 
let nowTimeEl = document.getElementById('nowTime');
nowTimeEl.innerText = nowTime

//creating time
var x = 60; 
var times = []; 
var tt = 0; 
var ap = ['AM', 'PM']; 

    //loop to increment the time and push results in array
    for (var i=0;tt<24*60; i++) {
    var hh = Math.floor(tt/60); 
    var mm = (tt%60); 
    times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; 
    tt = tt + x;
        if (times[i] == ('00:00PM')) {
            times[i] = ('12:00PM')
        }
    }

//times
var docTimes = times + '';
var timesSplit = docTimes.split(',');
var rowLength = timesSplit.length

//rows with time
    var table ='';
    var rows = 24;
    //creating rows loop
    for (var r=9; r<= 17; r++) {
        //creating cells loop
        table += '<tr>';
        //cells time for rows loop
        table +='<td class="rowContainer" style=" " id="'+times[r]+'">' + '<span>' + times[r] + '</span>' + '<input type="text" id="rowInputEl" class="rowInputEl">' +'<button class="saveBtn" onClick="addInput(evt) id="saveBtn">Save</button>' + '</td>' ;
        // console.log(this.times[r])
        table += '</tr>';
        }
    myTable = document.write('<form> <table class="table2" border=1>' + table + '</table> </form>');


////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rowColor () {
    var nowHrs = '0'+nowTime.split(' ')[0].split(':')[0];
    let rowContainers = document.getElementsByClassName('rowContainer');
    // let nowHrs ='09';
    for (var a=9; a <= 17; a++) {
        var hrs = times[a].split(' ')[0].split(':')[0];   
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    var rowID = document.getElementsByTagName("span");

    let rowText0 = rowID[0].innerText;
    let rowText1 = rowID[1].innerText;
    let rowText2 = rowID[2].innerText;
    let rowText3 = rowID[3].innerText;
    let rowText4 = rowID[4].innerText;
    let rowText5 = rowID[5].innerText;
    let rowText6 = rowID[6].innerText;
    let rowText7 = rowID[7].innerText;
    let rowText8 = rowID[8].innerText;

    let rowText0Hrs = rowText0.split(' ')[0].split(':')[0];
    let rowText1Hrs = rowText1.split(' ')[0].split(':')[0];
    let rowText2Hrs = rowText2.split(' ')[0].split(':')[0];
    let rowText3Hrs = rowText3.split(' ')[0].split(':')[0];
    let rowText4Hrs = rowText4.split(' ')[0].split(':')[0];
    let rowText5Hrs = rowText5.split(' ')[0].split(':')[0];
    let rowText6Hrs = rowText6.split(' ')[0].split(':')[0];
    let rowText7Hrs = rowText7.split(' ')[0].split(':')[0];
    let rowText8Hrs = rowText8.split(' ')[0].split(':')[0];

    // 9:00
    if (rowText0Hrs == nowHrs) {
        const listItem0 = document.querySelectorAll('tr')[0];
        const newItem0 = document.createElement('tr');
        newItem0.innerHTML = '<td class="rowContainer" style=" background-color: red; "> <span>09:00AM</span><input type="text" id="rowInputEl0" class="rowInputEl"> <button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem0.parentNode.replaceChild(newItem0, listItem0);
    } else if (rowText0Hrs < nowHrs || nowHrs == 01, 02, 03, 04, 05) {
        const listItem0 = document.querySelectorAll('tr')[0];
        const newItem0 = document.createElement('tr');
        newItem0.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>09:00AM</span><input type="text" id="rowInputEl0" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem0.parentNode.replaceChild(newItem0, listItem0);
    }

    //10:00
    if(rowText1Hrs == nowHrs) {
        const listItem1 = document.querySelectorAll('tr')[1];
        const newItem1 = document.createElement('tr');
        newItem1.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>10:00AM</span><input type="text" id="rowInputEl1" class="rowInputEl"> <button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem1.parentNode.replaceChild(newItem1, listItem1);
    } else if (rowText1Hrs > nowHrs & nowHrs != '01' & nowHrs != '02' & nowHrs != '03' & nowHrs != '04' & nowHrs != '05' & nowHrs != '06' & nowHrs != '07' & nowHrs != '08') {
        const listItem1 = document.querySelectorAll('tr')[1];
        const newItem1 = document.createElement('tr');
        newItem1.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>10:00AM</span><input type="text" id="rowInputEl1" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem1.parentNode.replaceChild(newItem1, listItem1);
    } else if (rowText1Hrs < nowHrs || nowHrs == '01', '02', '03','04','05') {
        const listItem1 = document.querySelectorAll('tr')[1];
        const newItem1 = document.createElement('tr');
        newItem1.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>10:00AM</span><input type="text" id="rowInputEl1" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem1.parentNode.replaceChild(newItem1, listItem1);
    }
 
    // //11:00
    if(rowText2Hrs == nowHrs) {
        const listItem2 = document.querySelectorAll('tr')[2];
        const newItem2 = document.createElement('tr');
        newItem2.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>11:00AM</span><input type="text" id="rowInputEl2" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem2.parentNode.replaceChild(newItem2, listItem2);
    } else if (rowText2Hrs > nowHrs & nowHrs != '01' & nowHrs != '02' & nowHrs != '03' & nowHrs != '04' & nowHrs != '05' & nowHrs != '06' & nowHrs != '07' & nowHrs != '08') {
        const listItem2 = document.querySelectorAll('tr')[2];
        const newItem2 = document.createElement('tr');
        newItem2.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>11:00AM</span><input type="text" id="rowInputEl2" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem2.parentNode.replaceChild(newItem2, listItem2);
    } else if (rowText2Hrs < nowHrs || nowHrs == '01', '02', '03','04','05') {
        const listItem2 = document.querySelectorAll('tr')[2];
        const newItem2 = document.createElement('tr');
        newItem2.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>11:00AM</span><input type="text" id="rowInputEl2" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem2.parentNode.replaceChild(newItem2, listItem2);
    }
    // //12:00
    if(rowText3Hrs == nowHrs) {
        const listItem3 = document.querySelectorAll('tr')[3];
        const newItem3 = document.createElement('tr');
        newItem3.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>12:00PM</span><input type="text" id="rowInputEl3" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>'; 
        listItem3.parentNode.replaceChild(newItem3, listItem3);
    } else if (rowText3Hrs > nowHrs & nowHrs != '01' & nowHrs != '02' & nowHrs != '03' & nowHrs != '04' & nowHrs != '05' & nowHrs != '06' & nowHrs != '07' & nowHrs != '08') {
        const listItem3 = document.querySelectorAll('tr')[3];
        const newItem3 = document.createElement('tr');
        newItem3.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>12:00PM</span><input type="text" id="rowInputEl3" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem3.parentNode.replaceChild(newItem3, listItem3);
    } else if (rowText3Hrs < nowHrs || nowHrs == '01', '02', '03','04','05') {
        const listItem3 = document.querySelectorAll('tr')[3];
        const newItem3 = document.createElement('tr');
        newItem3.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>12:00PM</span><input type="text" id="rowInputEl3" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem3.parentNode.replaceChild(newItem3, listItem3);
    }
    // //01:00
    if(rowText4Hrs == nowHrs) {
        const listItem4 = document.querySelectorAll('tr')[4];
        const newItem4 = document.createElement('tr');
        newItem4.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>01:00PM</span><input type="text" id="rowInputEl4" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem4.parentNode.replaceChild(newItem4, listItem4);
    } else if (nowHrs == '02' | nowHrs == '03' | nowHrs == '04' | nowHrs == '05' | nowHrs == '06' | nowHrs == '07' | nowHrs == '08') {
        const listItem4 = document.querySelectorAll('tr')[4];
        const newItem4 = document.createElement('tr');
        newItem4.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>01:00PM</span><input type="text" id="rowInputEl4" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem4.parentNode.replaceChild(newItem4, listItem4);
    } else if (rowText4Hrs < nowHrs || nowHrs == '09', '10', '11','12') {
        const listItem4 = document.querySelectorAll('tr')[4];
        const newItem4 = document.createElement('tr');
        newItem4.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>01:00PM</span><input type="text" id="rowInputEl4" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem4.parentNode.replaceChild(newItem4, listItem4);
    }
    // //02:00
    if(rowText5Hrs == nowHrs) {
        const listItem5 = document.querySelectorAll('tr')[5];
        const newItem5 = document.createElement('tr');
        newItem5.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>02:00PM</span><input type="text" id="rowInputEl5" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem5.parentNode.replaceChild(newItem5, listItem5);
    } else if (nowHrs == '03' | nowHrs == '04' | nowHrs == '05' | nowHrs == '06' | nowHrs == '07' | nowHrs == '08') {
        const listItem5 = document.querySelectorAll('tr')[5];
        const newItem5 = document.createElement('tr');
        newItem5.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>02:00PM</span><input type="text" id="rowInputEl5" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem5.parentNode.replaceChild(newItem5, listItem5);
    } else if (rowText5Hrs < nowHrs || nowHrs == '09', '10', '11','12') {
        const listItem5 = document.querySelectorAll('tr')[5];
        const newItem5 = document.createElement('tr');
        newItem5.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>02:00PM</span><input type="text" id="rowInputEl5" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem5.parentNode.replaceChild(newItem5, listItem5);
    }
    // //03:00
    if(rowText6Hrs == nowHrs) {
        const listItem6 = document.querySelectorAll('tr')[6];
        const newItem6 = document.createElement('tr');
        newItem6.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>03:00PM</span><input type="text" id="rowInputEl6" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem6.parentNode.replaceChild(newItem6, listItem6);
    } else if (nowHrs == '04' | nowHrs == '05' | nowHrs == '06' | nowHrs == '07' | nowHrs == '08') {
        const listItem6 = document.querySelectorAll('tr')[6];
        const newItem6 = document.createElement('tr');
        newItem6.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>03:00PM</span><input type="text" id="rowInputEl6" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem6.parentNode.replaceChild(newItem6, listItem6);
    } else if (rowText6Hrs < nowHrs || nowHrs == '09', '10', '11','12') {
        const listItem6 = document.querySelectorAll('tr')[6];
        const newItem6 = document.createElement('tr');
        newItem6.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>03:00PM</span><input type="text" id="rowInputEl6" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem6.parentNode.replaceChild(newItem6, listItem6);
    }
    // //04:00
    if(rowText7Hrs == nowHrs) {
        const listItem7 = document.querySelectorAll('tr')[7];
        const newItem7 = document.createElement('tr');
        newItem7.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>04:00PM</span><input type="text" id="rowInputEl7" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem7.parentNode.replaceChild(newItem7, listItem7);    
    } else if (nowHrs == '05' | nowHrs == '06' | nowHrs == '07' | nowHrs == '08') {
        const listItem7 = document.querySelectorAll('tr')[7];
        const newItem7 = document.createElement('tr');
        newItem7.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>04:00PM</span><input type="text" id="rowInputEl7" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem7.parentNode.replaceChild(newItem7, listItem7); 
    } else if (rowText7Hrs < nowHrs || nowHrs == '09', '10', '11','12') {
        const listItem7 = document.querySelectorAll('tr')[7];
        const newItem7 = document.createElement('tr');
        newItem7.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>04:00PM</span><input type="text" id="rowInputEl7" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem7.parentNode.replaceChild(newItem7, listItem7); 
    }
    // //05:00
    if(rowText8Hrs == nowHrs) {
        const listItem8 = document.querySelectorAll('tr')[8];
        const newItem8 = document.createElement('tr');
        newItem8.innerHTML = '<td class="rowContainer" style=" background-color: red; ">  <span>05:00PM</span><input type="text" id="rowInputEl8" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem8.parentNode.replaceChild(newItem8, listItem8);
    } else if (nowHrs == '06' | nowHrs == '07' | nowHrs == '08') {
        const listItem8 = document.querySelectorAll('tr')[8];
        const newItem8 = document.createElement('tr');
        newItem8.innerHTML = '<td class="rowContainer" style=" background-color: gray; ">  <span>05:00PM</span><input type="text" id="rowInputEl8" class="rowInputEl"><button type="button" class="saveBtn" id="saveBtn">Save</button>';
        listItem8.parentNode.replaceChild(newItem8, listItem8); 
    } else if (rowText8Hrs < nowHrs || nowHrs == '09', '10', '11','12') {
        const listItem8 = document.querySelectorAll('tr')[8];
        const newItem8 = document.createElement('tr');
        newItem8.innerHTML = '<td class="rowContainer" style=" background-color: green; ">  <span>05:00PM</span><input type="text" id="rowInputEl8" class="rowInputEl"><button type="button" class="saveBtn" " id="saveBtn">Save</button>';
        listItem8.parentNode.replaceChild(newItem8, listItem8);
    } 
    
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
rowColor();

let rowInputs =[];

$( ".saveBtn" ).click(function (){
    var rowInputEl0 = document.getElementById('rowInputEl0').value;
        localStorage.setItem('rowInputs0', JSON.stringify(rowInputEl0));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl1 = document.getElementById('rowInputEl1').value;
        localStorage.setItem('rowInputs1', JSON.stringify(rowInputEl1));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl2 = document.getElementById('rowInputEl2').value;
        localStorage.setItem('rowInputs2', JSON.stringify(rowInputEl2));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl3 = document.getElementById('rowInputEl3').value;
        localStorage.setItem('rowInputs3', JSON.stringify(rowInputEl3));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl4 = document.getElementById('rowInputEl4').value;
        localStorage.setItem('rowInputs4', JSON.stringify(rowInputEl4));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl5 = document.getElementById('rowInputEl5').value;
        localStorage.setItem('rowInputs5', JSON.stringify(rowInputEl5));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl6 = document.getElementById('rowInputEl6').value;
        localStorage.setItem('rowInputs6', JSON.stringify(rowInputEl6));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl7 = document.getElementById('rowInputEl7').value;
        localStorage.setItem('rowInputs7', JSON.stringify(rowInputEl7));
      });

$( ".saveBtn" ).click(function (){
    var rowInputEl8 = document.getElementById('rowInputEl8').value;
        localStorage.setItem('rowInputs8', JSON.stringify(rowInputEl8));
      });

      
// save the inputs after refresh
window.onload = function load() {
    var storedValue0 = localStorage.getItem("rowInputs0");
    if(storedValue0) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl0").value = storedValue0.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue1 = localStorage.getItem("rowInputs1");
    if(storedValue1) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl1").value = storedValue1.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue2 = localStorage.getItem("rowInputs2");
    if(storedValue2) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl2").value = storedValue2.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue3 = localStorage.getItem("rowInputs3");
    if(storedValue3) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl3").value = storedValue3.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue4 = localStorage.getItem("rowInputs4");
    if(storedValue4) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl4").value = storedValue4.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue5 = localStorage.getItem("rowInputs5");
    if(storedValue5) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl5").value = storedValue5.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue6 = localStorage.getItem("rowInputs6");
    if(storedValue6) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl6").value = storedValue6.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue7 = localStorage.getItem("rowInputs7");
    if(storedValue7) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl7").value = storedValue7.replace(/"([^"]+(?="))"/g, '$1');
        }
    var storedValue8 = localStorage.getItem("rowInputs8");
    if(storedValue8) {
        //first part of this section takes the value of the element rowInputEl and places it into storevalue, then it replaces the double quotes with nothing
        document.getElementById("rowInputEl8").value = storedValue8.replace(/"([^"]+(?="))"/g, '$1');
        }
    };
