function factorize(n){
  var factor = [];
  for(var i = 0; i <= n; i++){
    if(n%i == 0){
      factor.push(i);
    }
  }
  return factor;
}
function findUnique(str){
  var uniqueString = "";
  for(int x = 0; x < str.length(); x++){
    if(uniqueStr.indexOf(str.charAt(i)) == -1){
      unique += str [i];
    }
  }
  return uniqueString;
}
function DoOperation(x, y, operator){
  return operator(x, y);
}
function multiply(x, y){
  return x*y;
}
function power(x,y){
  return Math.pow(x, y);
}
