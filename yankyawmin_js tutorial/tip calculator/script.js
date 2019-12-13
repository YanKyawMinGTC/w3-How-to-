
var option01 = document.getElementById("select_value");

var x, y, z;

function alert_empty() {
  window.option01 = document.getElementById("select_value");
  window.opt = option01.options[option01.selectedIndex];//for select selected option value 
  window.option = opt.value;

  if (user_money_val == "" || option == 0) {
    alert("Please fill all input value!!!");
  }
}

function select_value(option01) {
  if (option == 0) {
    x = 0;
  }
  if (option == 1) {
    x = 30 / 100;
  }
  if (option == 2) {
    x = 20 / 100;
  }
  if (option == 3) {
    x = 15 / 100;
  }
  if (option == 4) {
    x = 10 / 100;
  }
  if (option == 5) {
    x = 5 / 100;
  }
}
function calculate(option01) {
  window.user_money = document.getElementById("user_money");
  window.user_money_val = user_money.value;
  window.sharing_user = document.getElementById("sharing_user");
  window.sharing_user_val = sharing_user.value;
  window.ans_value = document.getElementById("ans");
  if (sharing_user_val == "" || sharing_user_val <= 1) {
    sharing_user_val = 1;
  }

  alert_empty();//alert function call for empty input

  select_value(option01);// for check select box option-value

  y = (user_money_val * x);
  z = y / sharing_user_val;
  ans_value.innerHTML = z + " $";
  document.getElementById("none").style.display = "block";
}
