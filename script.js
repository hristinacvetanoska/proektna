function realtimeClock(){

    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var min = rtClock.getMinutes();
    var sec = rtClock.getSeconds();
  
    var amPm = ( hours < 12 ) ? "AM" : "PM";
  
    hours=(hours > 12) ? hours - 12 : hours;
  
    hours = ("0" + hours).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);
  
    document.getElementById('clock').innerHTML = hours + " : " + min + " : " + sec + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
  }