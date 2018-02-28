module.exports = function getZerosCount(number) {
  var inc = 0;
  while (number > 5) {
  number = Math.floor((number / 5)); inc = inc + number; 
  }
  return inc;
}
/*
  function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
    rval = rval * i;
    return rval;
}
  var number = factorial(number);
  var array = Array.from(number.toString()); 
  var inc = 0;
    for(var i=0; i<array.length;i++ )
      { 
        if(array[i] == 0)
      {
         inc ++; 
      }
} 
return inc;
*/

