var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm(event) {
  var fname = document.registration.fname.value;
  var lname = document.registration.lname.value;
  var email = document.registration.email.value;
  var phone = document.registration.phone.value;
  var day = document.registration.day.value;
  var month = document.registration.month.value;
  var year = document.registration.year.value;
  var username = document.registration.username.value;
  var password = document.registration.password.value;
  var nameformat = /^[A-Za-z]+$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var numberformat = /^[0-9]+$/;
  if (currentTab == 0) {
    if (!fname){
      alert ("First Name is required.");
      return false;
    }
    else if (!nameformat.test(fname)){
      alert ("First Name must be only alphabet characters.");
      return false;
    }
    else if (!lname){
      alert ("Last Name is required.");
      return false;
    }
    else if (!nameformat.test(lname)){
      alert ("Last Name must be only alphabet characters.");
      return false;
    }
    else{
      return true;
    }
  }
  else if (currentTab == 1) {
    if (!email){
      alert ("The email is required.");
      return false;
    }
    else if (!mailformat.test(email)){
      alert ("The email must be formated as follows: name@domain.com.");
      return false;
    }
    else if (!phone){
      alert ("Phone Number is required.");
      return false;
    }
    else{
      return true;
    }
  }
  else if (currentTab == 2) {
    if (!day){
      alert ("Day is required.");
      return false;
    }
    else if (!numberformat.test(day)){
      alert ("Day must be numeric characters only.");
      return false;
    }
    else if (!month){
      alert ("Month is required.");
      return false;
    }
    else if (!numberformat.test(month)){
      alert ("Month must be numeric characters only.");
      return false;
    }
    else if (!year){
      alert ("Year is required.");
      return false;
    }
    else if (!numberformat.test(year)){
      alert ("Year must be numeric characters only.");
      return false;
    }
    else{
      return true;
    }
  }
  else {
    if (!username){
      alert ("Username is required.");
      return false;
    }
    else if (!password){
      alert ("Password is required.");
      return false;
    }
    else{
      displayData();
      window.location.reload();
    }
  }
}
function displayData() {
var fname = document.registration.fname.value;
var lname = document.registration.lname.value;
var email = document.registration.email.value;
var phone = document.registration.phone.value;
var day = document.registration.day.value;
var month = document.registration.month.value;
var year = document.registration.year.value;
var username = document.registration.username.value;
var password = document.registration.password.value;
alert("First Nme: "+fname+" "+"\n\nLast name: "+lname+" "+"\n\nEmail: "+email+" "+"\n\nPhone Number: "+phone+" "+"\n\nBirth of Date: "+day+"/"+month+"/"+year+" "+"\n\nUser name: "+username+" "+"\n\nPassword: "+password);
}
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}