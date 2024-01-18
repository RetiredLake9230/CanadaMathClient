// Get the cookie value by name
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    }
    
    // Change the background according to the cookie value
    function canada() {
    var background = getCookie("background");
    if (background == "real") {
            // get all elements that match ".desc p" selector
                let elements = document.querySelectorAll(".desc p");
            // loop through each element and change its style attribute
                for (let element of elements) {
                element.setAttribute("style", "color: black");
    }
    document.getElementById("uv-address").style.color = "black";
    var logoImage = document.querySelector(".logo");
    logoImage.src = "uvlight.png";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundImage = "url('https://bapple.blob.core.windows.net/blobby/bkrg.png')";
    }
    }

      function iniFrame() {
        var currentDomain = window.location.hostname;
        if (currentDomain == "canadamath.azurewebsites.net") {
          console.log("Canada Math is OK!");
          if ( window.location !== window.parent.location ) {
                  console.log("Welcome to Private Mode!")
                  //here goes my additional things 4 later
                  var h4 = document.createElement("h4");
                  // Set its style attributes
                  h4.style.textAlign = "center";
                  h4.style.color = "white";
                  // Set its text content
                  h4.textContent = "Welcome to Private Mode! Refresh this page to exit.";
                  // Insert it as the first child of the body element
                  document.body.insertBefore(h4, document.body.firstChild);

                  document.getElementById("pmtoggle").textContent = "Extras";    
                  } else {
                  console.log("Private Mode Available");
              }
        } else {
          if ( window.location !== window.parent.location ) {
                  console.log("Canada Math is being pirated! How dare you!");
                  document.getElementById("uv-address").type="button"
                  document.getElementById("uv-address").value="Open in New Tab"
        
                  var element = document.getElementById("uv-address");
                  element.onclick = function() {
                      window.open("https://canadamath.azurewebsites.net/");
                  };
                   } else {
                  // The page is not in an iFrame
                  console.log("Canada Math is OK!");
              }}}   

    // Run the function when the page loads
    window.onload = canada;
    window.onload = iniFrame;