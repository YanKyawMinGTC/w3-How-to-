var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.getElementsByTagName("section");

var toggledMenu = menuToggle.addEventListener("click", function () {
  // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
  // console.log(activeElements.length);
  var header_active = document.querySelector(".header");
  var toggle_nav = document.querySelector(".toggle_nav");

  for (var x = 0; x < activeElements.length; x++) {
    activeElements[x].classList.toggle("active");
    header_active.classList.toggle("active");
    toggle_nav.classList.toggle("active");
  }
})