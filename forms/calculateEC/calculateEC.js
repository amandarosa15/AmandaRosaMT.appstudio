function calcAvg(n1,n2,n3){
  let avg = ((n1+n2+n3)/3)
  return avg
  }
  
function divideTwo(n1,n2){
  let remainder = (n1 % n2)
  return remainder
  }
let userAnsw=prompt('Enter division if you want to know the remainder of two numbers \nEnter average if you want to know the average of three numbers.')
if (userAnsw == 'average'){
  num1 = Number(prompt('Enter the first number')) 
  num2 =  Number(prompt('Enter the second number'))
  num3 =  Number(prompt('Enter the thirth number')) 
  Answer = calcAvg(num1,num2,num3)
  alert(`The average of the numbers ${num1}, ${num2} and ${num3} is ${Answer}`) 
  }
  
if (userAnsw == 'division'){
  let num1 = Number(prompt('Enter the first number')) 
  let num2 =  Number(prompt('Enter the second number'))
  var division=(num1/num2)
  let Answer1 = divideTwo(num1,num2)
  alert(` The result of dividing ${num1}  by ${num2}  is ${division} with a remainder of ${Answer}') 
  }