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

document.addEventListener('DOMContentLoaded', function () { 

  /**
   * Define Global Variables
   * 
  */
  const navBar = document.querySelector('.navbar__menu');
  const navList = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');
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
    sections.forEach((section) => {
      // Create a list item
      const navItem = document.createElement('li');
      // Create a link
      navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
      // Append the li to the ul
      navList.appendChild(navItem);
  
      // Scroll to section on link click
      navItem.addEventListener('click', function (event) {
        event.preventDefault();
        section.scrollIntoView({behavior: 'smooth'});
      });        
    });
    
  } 
  
  
  
  // Add class 'active' to section when near top of viewport
  function setActiveSection() { 
    // Loop through the sections
    sections.forEach(section => {
      // Get the position of the section
      const sectionPosition = section.getBoundingClientRect();
      // Check if the section is in the viewport
      if (sectionPosition.top >= 0 && sectionPosition.top <= window.innerHeight / 2) {
        // Add the active class to the section
        section.classList.add('active');
      } else {
        // Remove the active class from the section
        section.classList.remove('active');
      }
    });
  } 
  
  
  // Create a function to scrollTo anchor ID using scrollTO event
  
  
  // Create a function to show/hide navigation menu
  function showHideNav() { 
    let timer = null;
    window.addEventListener('scroll', function () {
      // Set the active section to active
      setActiveSection();
      // Show the navigation menu
      header.style.display = 'block';
      // Hide the navigation menu after 3 seconds
      if (timer){
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        header.style.display = 'none';
      }, 3000)
    });
  }
  
  
  /**
   * End Main Functions
   * Begin Events
   * 
  */
  
  if (navBar && navList && sections.length > 0 && header) {
    buildNav();
    showHideNav();
  } else {
    console.error('One or more elements not found in the DOM');
  }
  
  // Build menu
  
  
  
  // Scroll to section on link click
  
  
  
  // Set sections as active
});