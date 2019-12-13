function factorial()
{
  var i;
  var res=1;
  num = document.getElementById("number").value;
  for (i = 1; i <=num; i++) {
  	res*=i;
  }
  if(num==""){
  	document.getElementById('result').value =  "";
  }
  else{
  	document.getElementById('result').value =  "Result is : "+res;
  }
}