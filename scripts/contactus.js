window.onload = function ()
{
	var formHandle = document.forms[0];
	formHandle.onsubmit = processForm;

	function processForm(){
		var nameValue = document.getElementById("formName");
		var customerValue = document.getElementById("formEmail");
		var formSubject = document.getElementById("formSubject");
		var messageBox = document.getElementById("message1")

if (nameValue.value === "" || nameValue.value === null) {
nameValue.style.background = "red";
nameValue.style.color = "white";
nameValue.focus();
return false;

}


if (customerValue.value === "" || customerValue.value === null) {
	customerValue.style.background = "red";
	customerValue.style.color = "white";
	customerValue.focus();
	return false;

}


if (formSubject.value === "" || formSubject.value === null) {
	customerValue.style.background = "red";
	customerValue.style.color = "white";
	customerValue.focus();
	alert("Please select a subject")
	return false;

}

if (messageBox.value === "" || messageBox.value === null) {
	customerValue.style.background = "red";
	customerValue.style.color = "white";
	customerValue.focus();
	alert("Please enter a message")
	return false;

}

alert("Thank you " + formName.value + "!");

	}
}


