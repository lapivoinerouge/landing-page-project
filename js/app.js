/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById("navbar__list");
const navbar = document.getElementById("nav-menu");
const activeClassName = "your-active-class";
let activeClass = document.getElementsByClassName(activeClassName).item(0);
let activeTitle = null;

/**
 * End Global Variables
 * Start Functions
 * 
*/
// highlight picked title
function underlineTitle(title) {
    if (activeTitle != null) {
        activeTitle.style.cssText = "text-decoration: none;";
    }
    title.style.cssText = "text-decoration: underline; text-decoration-color: rgb(204, 206, 122);";
    activeTitle = title;
}

// set section as active
function setActiveSection(section) {
    activeClass.classList.remove(activeClassName);
    section.classList.add(activeClassName);
    activeClass = section;
}

// build nav + button
document.addEventListener("DOMContentLoaded", function() {
    navbar.style.cssText = "background-color: #000d3c; height: 100px;";
    navList.style.cssText = "display: flex; flex-direction: row; font-size: 25px; justify-content: space-evenly;";
    
    const button = document.createElement("button");
    button.setAttribute("id", "scroll-up");
    button.textContent = "back to top";
    const header = document.querySelector("header");
    header.insertAdjacentElement("afterend", button);
});

// build menu
let containerSize = document.getElementsByClassName("landing__container").length;

for (let i = 1; i < containerSize + 1; i++) {
    const section = document.getElementById("section" + i);
    const title = document.getElementById("title" + i);
    const listTitle = document.createElement("li");

    // create list elements
    listTitle.classList.add("nav-element");
    listTitle.setAttribute("id", "nav_title" + i);
    listTitle.textContent = title.textContent;
    navList.appendChild(listTitle);

    //event listener for nav list items
    listTitle.addEventListener("click", function() {
        setActiveSection(section);
        underlineTitle(this);
        // scroll to section on link click
        section.scrollIntoView({
            behavior: "smooth"
        });
    });

    // change active section when scrolled
    window.addEventListener('scroll', function() {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        let windowTop = window.pageYOffset + navbar.offsetHeight;
        if (windowTop > sectionTop && windowTop < sectionBottom) {
            setActiveSection(section);
            underlineTitle(document.getElementById("nav_title" + i));
        };
    });
};


// show/hide button
window.addEventListener('scroll', function() {
    let windowTop = window.pageYOffset;
    const button = document.getElementById("scroll-up");
    if (windowTop > 500) {
        button.style.opacity = "100%";
    } else {
        button.style.opacity = "0";
    }
});

