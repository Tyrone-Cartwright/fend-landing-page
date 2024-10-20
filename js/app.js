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
  // Get the navigation menu
  const navBar = document.querySelector('.navbar__menu');
  // Get the navigation list
  const navList = document.getElementById('navbar__list');
  // Get all the sections
  const sections = document.querySelectorAll('section');
  // Get the header
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
  
  //  Check if a section is in the viewport
  function isInViewport(section) { 
    // Get the position of the section
    const sectionPosition = section.getBoundingClientRect();
    // Check if the section is in the viewport
    return (sectionPosition.top >= 0 && sectionPosition.top <= window.innerHeight / 2);
  }

  // Remove 'active' class from all sections and nav links
  function removeActiveClass() {
    // Loop through the sections
    sections.forEach(section => {
      // Remove the active class from the section
      section.classList.remove('active');
    });
    // Get all the nav links
    const navLinks = document.querySelectorAll('.menu__link');
    // Loop through the nav links
    navLinks.forEach(link => {
      // Remove the active class from the nav link
      link.classList.remove('active');
    });
  }
  
  // Create a function to build the nav
  function buildNav() {
    // Loop through the sections
    sections.forEach((section) => {
      // Create a list item and link      
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
     
      //  Set attributes and inner text for the link
      navLink.setAttribute('href', `#${section.id}`);
      navLink.textContent = section.dataset.nav;
      navLink.classList.add('menu__link'); // Add a class to the link

      // Append the link to the list item
      navItem.appendChild(navLink);
      // Append the list item to the navigation list
      navList.appendChild(navItem);

  
      // Scroll to section on link click
      navLink.addEventListener('click', function (event) {
        // Prevent the default action
        event.preventDefault();
        // Scroll to the section smoothly
        section.scrollIntoView({behavior: 'smooth'});
      });        
    });    
  }   
  
  
  // Add class 'active' to section when near top of viewport
  function setActiveSection() { 
    // Loop through the sections
    sections.forEach((section, index) => {
      if (isInViewport(section)) {
        removeActiveClass();
        // Add the active class to the section
        section.classList.add('active');
        // Get the nav link
        const navLinks = document.querySelectorAll('.menu__link');
        // Add the active class to the nav link
        navLinks[index].classList.add('active');
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
      if (timer) {
        // Clear the timeout
        clearTimeout(timer);
      }
      // Set the timeout
      timer = setTimeout(() => {
        // Hide the navigation menu
        header.style.display = 'none';
      }, 3000)
    });
  }

  // Make sections collapsible
  function makeCollapsible() {
    const sections = document.querySelectorAll('section');
    // Loop through the sections
    sections.forEach(section => {
      // Create a button
      const button = document.createElement('button');
      // Set the button text
      button.textContent = 'Collapse';
      // Append the button to the section
      section.prepend(button);
      // Add a click event listener to the button
      button.addEventListener('click', function () {
        // Toggle the section
        section.classList.toggle('collapsed');
        // Set the button text
        button.textContent = section.classList.contains('collapsed') ? 'Expand' : 'Collapse';
      });
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
    makeCollapsible();
  } else {
    console.error('One or more elements not found in the DOM');
  }
  
  // Build menu  
  // Scroll to section on link click  
  // Set sections as active
});