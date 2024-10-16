/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('.navbar__menu');
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('.page__footer');
const header = document.querySelector('.page__header');






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

// Create a function to build the nav
function buildNav() {
  for (let section of sections) {
      // Create a list item
    const navItem = document.createElement('li');
    // Create a link
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
// Append the li to the ul
    navList.appendChild(navItem);

    // Scroll to section on link click
    scrollToSection(navItem, section);
  }
  navBar.appendChild(navList);
}
    



// Add class 'active' to section when near top of viewport
function setActiveSection() { 
  // Select all sections
  for (let section of sections) {
    // Get the position of the section
    const sectionPosition = section.getBoundingClientRect();
    // Add class 'active' to the section when it is near the top of viewport
    if (sectionPosition.top <= 390 && sectionPosition.bottom >= 360) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
}



// Create a function to scrollTo anchor ID using scrollTO event
function scrollToSection(navItem, section) { 
  navItem.addEventListener('click', function () {
    event.preventDefault();
    section.scrollIntoView({behavior: 'smooth'});
  });
}

// Create a function to show/hide navigation menu
function showHideNav() { 
  let timer = null;
  window.addEventListener('scroll', function () {
    // Set the active section to active
    setActiveSection();
    // Show the navigation menu
    if (timer !== null) {
      clearTimeout(timer);
      header.style.display = 'block';
    }
    timer = setTimeout(function () {
      header.style.display = 'none';
    }, 3000)
  });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav();


// Scroll to section on link click



// Set sections as active