/**
 * Define Global Variables
 * 
*/
let activeClassName = "your-active-class";
let activeTitle = null;
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build nav
let navbar = document.getElementById("nav-menu");

document.addEventListener("DOMContentLoaded", function() {
    navbar.style.cssText = "background-color: #000d3c; height: 100px;";
    navList.style.cssText = "display: flex; flex-direction: row; font-size: 25px; justify-content: space-around;";
});

// build menu
let containerSize = document.getElementsByClassName("landing__container").length;
for (let i = 1; i < containerSize + 1; i++) {
    const section = document.getElementById("section"+i);
    const title = document.getElementById("title"+i);
    const listTitle = document.createElement("li");

    // create list elements
    listTitle.classList.add("nav-element");
    listTitle.setAttribute("id", "nav_title" + i);
    listTitle.textContent = title.textContent;
    navList.appendChild(listTitle);  
};