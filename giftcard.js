//PAGE BY NATALIE DOAK 
window.onload=pageloaded;
function pageloaded() {
	
	var formHandle = document.forms[0];

formHandle.onsubmit=function processForm() {

var giftCard= formHandle.validAmt;
var userGiftCard=formHandle.validAmt.value;

var address= formHandle.address;
var userAddress= formHandle.address.value;

var country= formHandle.country;
var userCountry = formHandle.country.value;

var province = formHandle.province;
var userProvince = formHandle.province.value;


var spostalcode= formHandle.spostalcode;
var userSpostalcode= formHandle.spostalcode.value;
var postalreg =/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/;
var postalResult = userSpostalcode.search(postalreg);

var paymentType = formHandle.paymentType;
var userPayment= formHandle.paymentType.value;

var exMonth=formHandle.exMonth;
var userMonth=formHandle.exMonth.value;

var exYear= formHandle.exYear;
var userYear=formHandle.exYear.value; 

var creditnumber = formHandle.cardNumber;
var userCard=formHandle.cardNumber.value;
var paymentreg = /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/;
var paymentResult = userCard.search(paymentreg);


if (userGiftCard ==="CA") {
    
    document.getElementById('errorMessage').innerHTML = "Please choose a gift card value";

}

  
else if
    (userAddress=="" || userAddress ==null){
    document.getElementById("errorMessage1").innerHTML="Please provide a valid Address";

}

else if (userCountry== "Select" || userProvince === "Default"){
        document.getElementById('errorMessage2').innerHTML = "Please choose a valid Country and/or Province";

}


else if( userSpostalcode === "" || userSpostalcode === null || postalResult === -1){
	 document.getElementById('errorMessage3').innerHTML = "Please choose a valid Postal Code";
}

else if (userPayment === "0" ){
document.getElementById('errorMessage4').innerHTML = "Please choose a payment type ";

}

else if (userMonth === "Month" || userYear === "Year") {
document.getElementById('errorMessage4').innerHTML = "Please choose a valid expiration date ";
}

else if ( userCard === "" || userCard === null || paymentResult === -1){

document.getElementById('errorMessage4').innerHTML = "Please choose a valid card number ";
}

else { 
	alert("Thank you for your purchase");


}
return false;
}

}
