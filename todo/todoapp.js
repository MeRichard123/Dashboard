//Time
const time = document.querySelector(".navbar-brand");
var inputValue = document.getElementById("myInput").value;
var UserName = localStorage.getItem("username");

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

window.addEventListener("load", () => {
  Object.keys(localStorage).forEach(function(key) {
    var li = document.createElement("li");
    li.id = "list-item";
    var item = localStorage.getItem(key);
    if (item !== UserName) {
      t = document.createTextNode(item);
      li.appendChild(t);
      const TODOLIST = document.getElementById("myUl");
      TODOLIST.appendChild(li);
    }
  });

  // Create a "close" button and append it to each list item
  var myNodelist = document.querySelectorAll("#list-item");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var close = document.querySelectorAll(".close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      let key = div.textContent.slice(0, -1);
      localStorage.removeItem(key);
      console.log(localStorage);
    };
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector("#myUl");
  list.addEventListener(
    "click",
    evt => {
      if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("checked");
      }
    },
    false
  );
  const addBtn = document.querySelector(".addBtn");
  addBtn.addEventListener("click", () => {
    newElement();
  });

  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    li.id = "list-item";
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    localStorage.setItem(inputValue, inputValue);
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      const TODOLIST = document.getElementById("myUl");
      TODOLIST.appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var close = document.querySelectorAll(".close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        let key = div.textContent.slice(0, -1);
        localStorage.removeItem(key);
      };
    }
  }
});
