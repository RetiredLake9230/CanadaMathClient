// create a cookie named "background" with the value of "real" or "solid"
function createCookie(name,value) {
    document.cookie = name + "=" + value + ";";
    }
    
    // read the cookie named "background" and return its value
    function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
    }
    
    // delete the cookie named "background"
    function eraseCookie(name) {
    createCookie(name,"",-1);
    }
    
    // change the background according to the cookie value
    function changeBackground() {
    var body = document.querySelector("body");
    var link = document.querySelector(".background-link");
    var bg = readCookie("background"); // get the cookie value
    if (bg == null || bg == "solid") {
    // change to real image
      // get all elements that match ".desc p" selector
  let elements = document.querySelectorAll(".desc p");
  // loop through each element and change its style attribute
  for (let element of elements) {
    element.setAttribute("style", "color: black");
  }
    document.getElementById("uv-address").style.color = "black";
    var logoImage = document.querySelector(".logo");
    logoImage.src = "uvlight.png";
    body.style.backgroundImage = "url('https://bapple.blob.core.windows.net/blobby/bkrg.png')";
    body.style.backgroundSize = "cover";
    link.textContent = "Change Background";
    createCookie("background","real"); // set the cookie value to real
    } else {
    // change to solid color
      // get all elements that match ".desc p" selector
  let elements = document.querySelectorAll(".desc p");
  // loop through each element and change its style attribute
  for (let element of elements) {
    element.setAttribute("style", "color: white");
  }
    document.getElementById("uv-address").style.color = "white";
    var logoImage = document.querySelector(".logo");
    logoImage.src = "uv.png";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#111";
    link.textContent = "Change Background";
    createCookie("background","solid"); // set the cookie value to solid
    }
    }
    