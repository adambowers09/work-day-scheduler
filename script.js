var timeArray = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

var displayTime = function(){
    var time = moment().format('LL');
    $("#currentDay").html(time)
}



// localStorage.getItem(key, value)




displayTime();
