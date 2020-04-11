/**
 * Define Global Variables
 * 
*/
let activeClassName = "your-active-class";
let activeTitle = null;
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Functions
 * 
*/
function underlineTitle(element) {
    if (activeTitle != null) {
        activeTitle.style.cssText = "text-decoration: none;";
    }
    element.style.cssText = "text-decoration: underline; text-decoration-color: yellow;";
    activeTitle = element;
}

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

    //event listener for nav list items
    listTitle.addEventListener("click", function() {
        // set sections as active
        // add class 'active' to section when near top of viewport
        let activeClass = document.getElementsByClassName(activeClassName).item(0);
        activeClass.classList.remove(activeClassName);
        section.classList.add(activeClassName);

        // highlight picked title
        underlineTitle(this);
        
        // scroll to section on link click
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
};