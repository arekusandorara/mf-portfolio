'use strict';

window.onload = function() {
  setTimeout(function() {
    const show = document.getElementById('first-view-js');
    show.classList.add('loaded');
  }, 1000);
}


const textElement1 = document.getElementById('js-more1');
const textElement2 = document.getElementById('js-more2');
const textElement3 = document.getElementById('js-more3');
const textElement4 = document.getElementById('js-more4');
const textElement5 = document.getElementById('js-more5');

textElement1.addEventListener('mouseover', function() {
  textElement1.innerText = 'ありがとうございます';
  });
  textElement1.addEventListener('mouseout', function() {
  textElement1.innerText = 'ご覧ください！';
  });
  
  textElement2.addEventListener('mouseover', function() {
  textElement2.innerText = '感謝します';
  });
  textElement2.addEventListener('mouseout', function() {
  textElement2.innerText = 'どうか見て下さい';
  });
  
  textElement3.addEventListener('mouseover', function() {
  textElement3.innerText = 'Thank you !';
  });
  textElement3.addEventListener('mouseout', function() {
  textElement3.innerText = 'please take a look';
  });
  
  textElement4.addEventListener('mouseover', function() {
  textElement4.innerText = 'Click ?';
  });
  textElement4.addEventListener('mouseout', function() {
  textElement4.innerText = 'このページです！';
  });
  
  textElement5.addEventListener('mouseover', function() {
  textElement5.innerText = '\(^0^)/';
  });
  textElement5.addEventListener('mouseout', function() {
  textElement5.innerText = 'ご覧ください！';
  });
  



