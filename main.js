import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

/// Setup dropdown

document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      $(event.target).siblings('.dropdown-menu').toggle();
    });
  });

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
      const selectedValue = event.target.textContent;
      document.querySelector("#dropdown").textContent = selectedValue; 
      console.log('Selected value:', selectedValue);
    });
  });
