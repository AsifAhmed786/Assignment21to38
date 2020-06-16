// Task 1
var a = new Date();
document.write(a)
document.write("<br><br><br>")


// Task 2
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
alert("Current month: "+month[a.getMonth()]);



// Task 3
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
alert("Today is: "+day[a.getDay()].slice(0,3));



// Task 4
if(new Date().getDay()===0 ||  new Date().getDay()===6){
   alert("Its a Fun day")
}
else{

}



// Task 5
if(new Date().getDate()<16){
   document.write("First fifteen days of the month")
}
else{
   document.write("last fifteen days of the month")
}
document.write("<br><br><br>");




// Task 6
var date = new Date();
document.write("Current Date: "+date+"<br>");
document.write("Elapsed milliseconds since January 1, 1970: "+date.getTime()+"<br>")
document.write("Elapsed minutes since January 1, 1970: "+((date.getTime()/1000)/60/60)+"<br>")
document.write("<br><br><br>");




// Task 7
if(new Date().getHours()<12){
   document.write("Its AM")
}
else{
   document.write("Its PM")
}
document.write("<br><br><br>");




// Task 8
var laterDate = new Date("Dec 31, 2020");
document.write(laterDate+"<br>")