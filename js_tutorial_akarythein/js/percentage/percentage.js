function Calculate()
{
  num1 = document.getElementById("outerwidth").value;
  num2 = document.getElementById("innerwidth").value;
  document.getElementById('result').value ="Result is : "+parseFloat((num2 * 100) / num1).toFixed(2)+"%";
}