var paragraph = document.querySelector(".msg");
var UserName = localStorage.getItem("username");
var time = document.querySelector(".navbar-brand");
window.addEventListener("load", () => {
  paragraph.textContent = `Hello, ${UserName}`;
});

//Time
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

//Weather

window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //const proxy = "https://cors-anywhere.herokuapp.com/";
      //const api = `${proxy}https://api.darksky.net/forecast/76b5693845f3c7f19224c2f276574d3e/${lat},${long}`;
      const api = `https://api.darksky.net/forecast/76b5693845f3c7f19224c2f276574d3e/${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { temperature, summary, icon } = data.currently;
          // Set DOM elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          //Celcius Formula
          let celcius = (temperature - 32) * (5 / 9);
          //Set icon
          setIcons(icon, document.querySelector(".icon"));

          //Change temp to C/F
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celcius);
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          });
        });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
