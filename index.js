window.onload = pageLoaded;

function pageLoaded() {

    function showInterval() {

        // GET TODAY'S DATE
        var dateToday = new Date();

        //GET HOUR
        var getHr = dateToday.getHours();

        //GET MINUTE
        var getMin = dateToday.getMinutes();

        //        //GET SECONDS
        //        var getSec = dateToday.getSeconds();

        //GET IDS
        var hour = document.getElementById("clockHr");
        var min = document.getElementById("clockMin");
        //        var sec = document.getElementById("clockSec");

        //CHANGE TO 12HR FROM 24HR
        if (getHr > 12) {
            getHr = getHr - 12;
        }

        if (getMin < 9) {
            getMin = "0" + getMin;

        }
        //
        //        if (getSec < 9) {
        //            getSec = "0" + getSec;
        //        }


        //ASSIGN TIME
        hour.innerHTML = getHr;
        min.innerHTML = getMin;
        //        sec.innerHTML = getSec;

    }

    //SET INTERVAL
    var clockTick = setInterval(showInterval, 1000);

    //MEAL TEXT
    var mealBREAKF = "breakfast!";
    var mealLUNCH = "lunch!";
    var mealSNK = "happy hour!";
    var mealDNR = "dinner!";
    var mealHG = "a hangover cure!";

    //GET DATE
    var dateNew = new Date();

    //GET HOUR
    var hrNew = dateNew.getHours();

    //GET ID
    var mealIs = document.getElementById("mealTime");

    //ASSIGN TEXT
    if (hrNew > 5 && hrNew < 12) {
        mealIs.innerHTML = mealBREAKF;
    } else if (hrNew >= 12 && hrNew < 15) {
        mealIs.innerHTML = mealLUNCH;
    } else if (hrNew >= 15 && hrNew < 17) {
        mealIs.innerHTML = mealSNK;
    } else if (hrNew >= 17 && hrNew < 24) {
        mealIs.innerHTML = mealDNR;
    } else {
        mealIs = mealHG;
    }


}