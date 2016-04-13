// how to show one dropdown menu at a time?
// how to change helper text when value is changed?
// how to restrict datepicker?
// can't show span for lunch & dinner

$(document).ready(function () {
    $("#date").datepicker();

    // CREATE FORM HANDLER
    var formHandle = document.forms[0];

    formHandle.onsubmit = processForm;

    // CREATE FUNCTION TO PROCESS FORM
    function processForm() {

        //alert("Form sent");
        var fNameVal = document.forms[0].fName.value;
        var lNameVal = document.forms[0].lName.value;
        var emailVal = document.forms[0].emailAdr.value;
        var dateVal = document.forms[0].date.value;
        var timeLi = document.getElementById("selectGroup");
        var timeVal = timeLi.options[timeLi.selectedIndex].value;

//                var breakTimeLi = document.getElementById("selectBreakfast");
//                var breakTimeVal = breakTimeLi.options[breakTimeLi.selectedIndex].value;
//                //console.log(breakTimeVal);
//                var lunchTimeLi = document.getElementById("selectLunch");
//                var lunchTimeVal = lunchTimeLi.options[lunchTimeLi.selectedIndex].value;
//                console.log(lunchTimeVal);
//                var dinnerTimeLi = document.getElementById("selectDinner");
//                var dinnerTimeVal = dinnerTimeLi.options[dinnerTimeLi.selectedIndex].value;
        
//      TRY TO GET VALUE BY NAME INSTEAD OF ID B/C ID DIDN'T WORK...
        var formHandle2 = document.forms[0];
        var breakfastList = formHandle2.breakfastTimeRes;
        var lunchList = formHandle2.lunchTimeRes;
        var dinnerList = formHandle2.dinnerTimeRes;
        var groupList = formHandle2.groupTimeRes;

        // CHECK VALUE
        if (fNameVal === "" || fNameVal === null) {
            fNameMsg = document.getElementById("fNameErr");
            fNameMsg.innerHTML = "Enter first name";
            //fNameVal.style.background = "#e32925";
            //fNameVal.focus();
            return false;
        }

        if (lNameVal === "" || lNameVal === null) {
            lNameMsg = document.getElementById("lNameErr");
            lNameMsg.innerHTML = "Enter last name";
            return false;
        }

        if (emailVal === "" || emailVal === null) {
            emailAdrMsg = document.getElementById("emailErr");
            emailAdrMsg.innerHTML = "Enter email";
            return false;
        }

        if (dateVal === "" || dateVal === null) {
            dateMsg = document.getElementById("dateErr");
            dateMsg.innerHTML = "Enter date";
            return false;
        }

        if (timeVal === "") {
            timeMsg = document.getElementById("groupErr");
            timeMsg.innerHTML = "Select meal time";
            return false;
        }

//        if (breakTimeVal === "") {
//            breakTimeMsg = document.getElementById("timeErrBreakfast");
//            breakTimeMsg.innerHTML = "Select breakfast time";
//            breakTimeMsg.style.display = "inline";
//            //console.log(breakTimeMsg)
//            return false;
//        }
//          if (lunchTimeVal === "") {
//            lunTimeMsg = document.getElementById("timeErrLunch");
//            lunTimeMsg.innerHTML = "Select lunch time";
//            lunTimeMsg.style.display = "inline";
//            //console.log(lunTimeMsg)
//            return false;
//        } 
//
//        if (dinnerTimeVal == "") {
//            dinnerTimeMsg = document.getElementById("timeErrDinner");
//            dinnerTimeMsg.innerHTML = "Select dinner time";
//            //console.log(dinnerTimeMsg)
//            dinnerTimeMsg.style.display = "inline";
//            return false;
//        }
        
        //      TRY TO GET VALUE BY NAME INSTEAD OF ID B/C ID DIDN'T WORK...
         if (breakfastList.value === "bk" && groupList.value === "BREAKFAST" ) {
            //alert("breakfast");
            var breakfastMsg = document.getElementById("timeErrBreakfast");
            breakfastMsg.innerHTML = "Select breakfast time";
            breakfastMsg.style.display = "inline";
             return false;
        }

        if (lunchList.value === "lc" && groupList.value === "LUNCH") {
            var lunchMsg = document.getElementById("timeErrLunch");
            lunchMsg.innerHTML = "Select lunch time";
            lunchMsg.style.display = "inline";
            console.log(lunchList);
            return false;
        }

        if (dinnerList.value === "dn" && groupList.value === "DINNER") {
            var dinnerMsg = document.getElementById("timeErrDinner");
            dinnerMsg.innerHTML = "Select dinner time";
//            //console.log(dinnerTimeMsg)
            dinnerMsg.style.display = "inline";
            return false;
        }
    }


    // DROPDOWN SHOW SECONDARY LIST ON_CHANGE
    var changeList = formHandle.groupTimeRes;

    changeList.onchange = displayTime;

    function displayTime() {
        //alert("Dropdown changed");
        //console.log(changeList.value);
        if (changeList.value === "BREAKFAST") {
            //alert("breakfast");
            var breakfastShow = formHandle.breakfastTimeRes;
            breakfastShow.style.display = "inline";
        }

        if (changeList.value === "LUNCH") {
            var lunchShow = formHandle.lunchTimeRes;
            lunchShow.style.display = "inline";
        }

        if (changeList.value === "DINNER") {
            var dinnerShow = formHandle.dinnerTimeRes;
            dinnerShow.style.display = "inline";
        }
    }


});