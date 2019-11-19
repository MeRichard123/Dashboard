//Time
const time = document.querySelector(".navbar-brand");

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var sec = d.getSeconds();
  if (mins.toString().length < 2) {
    var Nmins = `0${mins}`;
  } else {
    var Nmins = mins;
  }
  if (sec.toString().length < 2) {
    var Nsec = `0${sec}`;
  } else {
    var Nsec = d.getSeconds();
  }
  time.textContent = hours + ":" + Nmins + ":" + Nsec;
}
setInterval(printTime, 1000);
