import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

/// Setup dropdown

// Get dropdown toggle buttons and dropdown menus
var dropdownToggle1 = document.querySelector('#dropdown-toggle-1');
var dropdownToggle2 = document.querySelector('#dropdown-toggle-2');
var dropdownMenu1 = document.querySelector('#dropdown-menu-1');
var dropdownMenu2 = document.querySelector('#dropdown-menu-2');

// Variables to store selected values
var selectedOption1 = '';
var selectedOption2 = '';

// Toggle visibility of dropdown menu 1
dropdownToggle1.addEventListener('click', function() {
  dropdownMenu1.classList.toggle('show');
});

// Toggle visibility of dropdown menu 2
dropdownToggle2.addEventListener('click', function() {
  dropdownMenu2.classList.toggle('show');
});

// Close dropdown menus when clicking outside of them
document.addEventListener('click', function(event) {
  var target = event.target;
  if (target !== dropdownToggle1 && !dropdownToggle1.contains(target)) {
    dropdownMenu1.classList.remove('show');
  }
  if (target !== dropdownToggle2 && !dropdownToggle2.contains(target)) {
    dropdownMenu2.classList.remove('show');
  }
});

// Handle click on dropdown menu 1 items
dropdownMenu1.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('dropdown-item')) {
    selectedOption1 = target.textContent;
    console.log('Selected option 1:', selectedOption1);
  }
});

// Handle click on dropdown menu 2 items
dropdownMenu2.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('dropdown-item')) {
    selectedOption2 = target.textContent;
    console.log('Selected option 2:', selectedOption2);
  }
});