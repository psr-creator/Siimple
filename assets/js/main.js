/**
* Template Name: Siimple - v4.9.0
* Template URL: https://bootstrapmade.com/free-bootstrap-landing-page/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Mobile nav toggle
   */
  const toogleNav = function() {
    let navButton = select('.nav-toggle')
    navButton.classList.toggle('nav-toggle-active')
    navButton.querySelector('i').classList.toggle('bx-x')
    navButton.querySelector('i').classList.toggle('bx-menu')

    select('.nav-menu').classList.toggle('nav-menu-active')
  }
  on('click', '.nav-toggle', function(e) {
    toogleNav();
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.nav-menu .drop-down > a', function(e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('drop-down-active')
    this.parentElement.classList.toggle('active')
  }, true)

  /**
   * Scrool links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      select('.nav-menu .active').classList.remove('active')
      this.parentElement.classList.toggle('active')
      toogleNav();
    }
  }, true)

})()
const card = document.querySelector('.card');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

card.addEventListener('click', () => {
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

// Get the card element and overlay element for the second card
var card2 = document.getElementById("card2");
var overlay2 = document.getElementById("overlay2");

// Add an event listener to the card element
card2.addEventListener("click", function() {
  // Display the overlay element
  overlay2.style.display = "block";
});

// Add an event listener to the close button
overlay2.querySelector(".close-btn").addEventListener("click", function() {
  // Hide the overlay element
  overlay2.style.display = "none";
});

// Get the card element and overlay element for the second card
var card3 = document.getElementById("card3");
var overlay3 = document.getElementById("overlay3");

// Add an event listener to the card element
card3.addEventListener("click", function() {
  // Display the overlay element
  overlay3.style.display = "block";
});

// Add an event listener to the close button
overlay3.querySelector(".close-btn").addEventListener("click", function() {
  // Hide the overlay element
  overlay3.style.display = "none";
});

// Get the card element and overlay element for the second card
var card4 = document.getElementById("card4");
var overlay4 = document.getElementById("overlay4");

// Add an event listener to the card element
card4.addEventListener("click", function() {
  // Display the overlay element
  overlay4.style.display = "block";
});

// Add an event listener to the close button
overlay4.querySelector(".close-btn").addEventListener("click", function() {
  // Hide the overlay element
  overlay4.style.display = "none";
});

// Get the card element and overlay element for the second card
var card5 = document.getElementById("card5");
var overlay5 = document.getElementById("overlay5");

// Add an event listener to the card element
card5.addEventListener("click", function() {
  // Display the overlay element
  overlay5.style.display = "block";
});

// Add an event listener to the close button
overlay5.querySelector(".close-btn").addEventListener("click", function() {
  // Hide the overlay element
  overlay5.style.display = "none";
});

// Get the card element and overlay element for the second card
var card6 = document.getElementById("card6");
var overlay6 = document.getElementById("overlay6");

// Add an event listener to the card element
card6.addEventListener("click", function() {
  // Display the overlay element
  overlay6.style.display = "block";
});

// Add an event listener to the close button
overlay6.querySelector(".close-btn").addEventListener("click", function() {
  // Hide the overlay element
  overlay6.style.display = "none";
});
