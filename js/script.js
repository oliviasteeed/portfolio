'use strict';

var cursor = document.querySelector('.cursor');

var customCursor = function customCursor(e){
    // var x = e.clientX;
    // var y = e.clientY;
    
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
                           
  }

var addCursorExpand = function cursorExpand(){
  cursor.classList.add('cursor-expand');
}

var removeCursorExpand = function cursorExpand(){
  cursor.classList.remove('cursor-expand');
}

var links = document.querySelectorAll('a');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', addCursorExpand);
    links[i].addEventListener('mouseleave', removeCursorExpand);
  }
  
  
  document.addEventListener('mousedown', addCursorExpand);
  document.addEventListener('mouseup', removeCursorExpand);

  document.addEventListener('mousemove', customCursor);
  


  //this isn't running why??

  var getMouse = function getMouseLocation(e){
    console.log("in get mouse");
    // var x = e.clientX;
    // var y = e.clientY;
    // cursor.style.transform = "translate(x, y)";
    // console.log("xy" +x, y);
  }

  document.addEventListener('load', getMouse);



if (window.innerWidth > 768) {
        cursor.classList.add('cursor-gradient');
      }

















// var cursor = document.querySelector('.cursor');

// var customCursor = function customCursor(){

//   document.addEventListener('mousemove', function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
//   });
  
//   var links = document.querySelectorAll('a');
  
//   for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('mouseover', () => {
//       cursor.classList.add('cursor-expand');
//     });
  
//     links[i].addEventListener('mouseleave', () => {
//       cursor.classList.remove('cursor-expand');
//     });
//   }
  
//   document.addEventListener('mousedown', function () {
//     cursor.classList.add('cursor-expand');
//   });
  
//   document.addEventListener('mouseup', function () {
//     cursor.classList.remove('cursor-expand');
//   });
// }

// if (window.innerWidth > 768) {
//         cursor.classList.add('cursor-gradient');
//         customCursor();
//       }
