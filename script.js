let num1 = 0
let num2 = 0
let counter = 0
let product = 0

// Add event listener to detect when the button is clicked, running the function.
document.getElementById('btn').addEventListener('click', multiplyInputs)

// Multiplies both values together as long as they are positive.
function multiplyInputs () {
  // Reset for reusability
  product = 0
  document.getElementById('answer').innerHTML = null

  // Get values from input fields.
  num1 = document.getElementById('input1').value
  num2 = document.getElementById('input2').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)

  // Checks if both inputs are numbers equal to 0 or positive.
  if ((!isNaN(num1) && !isNaN(num2)) && ((num1 >= 0) && (num2 >= 0))) {
    // This loop adds the first number to the product until the counter is equivalent to the second number.
    for (counter = 0; counter < num2; counter++) {
      product = product + num1
    }
    // Write the answer in both the answer paragraph and in the console.
    console.log(product)
    document.getElementById('answer').innerHTML = `The product is ${product}.`

  // If not equal to zero or above, send this error message.
  } else {
    document.getElementById('answer').innerHTML = 'Please enter non-negative numbers using numerial symbols.'
  }
}
