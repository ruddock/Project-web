/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* Zonder dit stukje code sluit het menu met filter opties direct na het klikken.
   - Met hulp van Monika */
(function() {
"use strict";
})

/* BRON: http://www.w3schools.com/howto/howto_js_dropdown.asp */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function searchFilters() {
    document.getElementById("options").classList.toggle("showFilter");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-options");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('showFilter')) {
                    openDropdown.classList.remove('showFilter');
                  }
            }
    }
}

(function() {
"use strict";
})

function mobileFilters() {
    document.getElementById("mobileOptions").classList.toggle("showMobFilter");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtnMob')) {

            var dropdowns = document.getElementsByClassName("mobile-dropdown-options");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('showMobFilter')) {
                    openDropdown.classList.remove('showMobFilter');
                  }
            }
    }
}

