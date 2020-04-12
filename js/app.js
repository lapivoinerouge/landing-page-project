const navList = document.getElementById("navbar__list");
const navbar = document.getElementById("nav-menu");
const activeClassName = "your-active-class";
let topButton;
let activeClass = document.getElementsByClassName(activeClassName).item(0);
let activeTitle = null;
let x = window.matchMedia("(max-width: 650px)");

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

// create button
function createButton() {
    topButton = document.createElement("button");
    topButton.setAttribute("id", "scroll-up");
    topButton.textContent = "back to top";
    const header = document.querySelector("header");
    header.insertAdjacentElement("afterend", topButton);  
}

// responsiveness for mobile phone 
function mobileScreen() {
    if (x.matches) {
        const menuIcon = document.createElement("div");
        menuIcon.setAttribute("id", "menu_icon");
        for (let i = 0; i <3; i++) {
            const div = document.createElement("div");
            menuIcon.appendChild(div);
        }
        navbar.insertAdjacentElement("afterbegin", menuIcon);
        navList.style.cssText = "display: none;";
        document.getElementById("page__header").insertAdjacentElement("beforebegin", navList);
        let isOpen = false;
        menuIcon.addEventListener("click", function() {
            if (!isOpen) {
                document.documentElement.scrollTop = 0;
                navList.style.cssText = "display: flex;";
                isOpen = true;
            } else {
                document.documentElement.scrollTop = 0;
                navList.style.cssText = "display: none;";
                isOpen = false;
            }
        });
    }
}

// responsiveness for resized window
function browserScreen() {
    if (document.getElementById("main").firstElementChild === navList) {
        navbar.removeChild(document.getElementById("menu_icon"));
        navbar.appendChild(navList);
        navList.style.cssText = "display: flex;";
    }
}

// build nav
document.addEventListener("DOMContentLoaded", function() {
    navbar.style.cssText = "background-color: #000d3c; height: 100px;";
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
createButton();
window.addEventListener('scroll', function() {
    let windowTop = window.pageYOffset;
    if (windowTop > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// scroll to top with button
topButton.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
});

// media query for mobile phone
mobileScreen();
window.addEventListener("resize", function() {
    if(x.matches) {
        mobileScreen();
    } else {
        browserScreen();
    }
})