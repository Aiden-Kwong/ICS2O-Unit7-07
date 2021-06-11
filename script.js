let num1 = 0
let num2 = 0
let counter = 0
let product = 0

document.getElementById('btn').addEventListener('click', multiplyInputs)

function multiplyInputs () {
  product = 0
  document.getElementById('answer').innerHTML = null
  
  num1 = document.getElementById('input1').value
  num2 = document.getElementById('input2').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)

  if ((!isNaN(num1) && !isNaN(num2)) && ((num1 >= 0) && (num2 >= 0))) {
    for (counter = 0; counter < num2; counter++) {
    product = product + num1
    }
    console.log(product)
    document.getElementById('answer').innerHTML = `The product is ${product}.`
  } else {
    document.getElementById('answer').innerHTML = 'Please enter non-negative numbers using numerial symbols.'
  }
}
