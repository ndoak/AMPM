// var dateVar = new Date();
var mon = {
	day:"IT'S MONDAY",
	text:"Today's special is a seafood linguine with fresh mussels and scallops mixed with homemade pasta. Served with warm garlic bread"
}


var tues ={
	day:"IT'S TUESDAY",
	text:"Come by tonight to enjoy Moules Frites with a glass of White Wine of your choice $25"
}

var wed = {
	day:"IT'S WEDNESDAY",
	text: "Get over the mid-week hump with our bacon burger with a side of fries or salad"

}

var thur = {
	day:"IT'S THURSDAY",
	text:"Thirsty Thursday is upon us. Come by and enjoy a beer! All draught beer $6"
}

var fri = {
	day:"IT'S FRIDAY",
	text:"Happy Friday! Steak Frites $22"
}

var sat = {
	day:"IT'S SATURDAY",
	text:"Saturday Surf: All fish half off"
}

var sunday = {
	day:"IT'S SUNDAY",
	text:"Sundays are for sweets. All desserts $5. Add a coffee for $2"
}
window.onload = pageLoaded; 

function pageLoaded() {

//alert();
var daynow = new Date();
console.log(daynow);
var specout=document.getElementById("todaysspec");
var todayh3=document.getElementById("todayh3");
var todayp = document.getElementById("todayp");
var dayint = daynow.getDay();
// specout.innerHTML = dayint;

 	

 	if(dayint==0){

todayh3.innerHTML = sunday.day;
 	todayp.innerHTML=sunday.text;

 	document.getElementById("sundayspec").style.display = "none"; 	

 }
 else if (dayint==1) {
 		todayh3.innerHTML = mon.day;
 	todayp.innerHTML=mon.text;
 	document.getElementById("mondayspec").style.display = "none"; 
 }

 else if (dayint ==2) {
 		todayh3.innerHTML = tues.day;
 	todayp.innerHTML=tues.text;
 	document.getElementById("tuesdayspec").style.display = "none";

 }
 else if (dayint==3) {
 	todayh3.innerHTML = wed.day;
 	todayp.innerHTML=wed.text;
 	document.getElementById("wednesdayspec").style.display = "none"; 
 }
 else if (dayint==4) {
 	todayh3.innerHTML = thur.day;
 	todayp.innerHTML=thur.text;
 	document.getElementById("thursdayspec").style.display = "none"; 

 }
 else if (dayint==5) {
 	todayh3.innerHTML = fri.day;
 	todayp.innerHTML=fri.text;
 	document.getElementById("fridayspec").style.display = "none"; 
 }
 else if (dayint==6) {
 	todayh3.innerHTML = sat.day;
 	todayp.innerHTML=sat.text;
 	document.getElementById("saturdayspec").style.display = "none"; 
 }
 
}

