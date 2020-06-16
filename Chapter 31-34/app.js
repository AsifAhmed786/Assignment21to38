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
document.write("<br><br><br>")