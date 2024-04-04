//function to create a contdown in javascript
function countdown() {
    var count = 30;

    var timer = setInterval(function() {
        console.log(count);
        count--;

        if (count < 0) {
            clearInterval(timer);
            console.log("Countdown complete!");
        }
    }, 1000);
}

// countdown();

// code to create a terminal clock (HH:MM:SS)
function updateclock(){
    var date=new Date();
    var hours= date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    hours=  hours<10 ? "0"+hours : hours;
    minutes= minutes<10 ? "0"+minutes : minutes;
    seconds=seconds<10 ? "0"+seconds : seconds;
    console.log(hours+":"+minutes+":"+seconds);
    


}
setInterval(updateclock,1000);
updateclock();