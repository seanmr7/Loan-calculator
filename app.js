// Declare variables from DOM
const form = document.querySelector('#load-form');
const loanAmount = document.querySelector('#amount');
const interestRate = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayments = document.querySelector('#monthly-payment');
const totalPay = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

// Assign event listeners
form.addEventListener('submit', calculate);

// Calculate function
function calculate(e){
  e.preventDefault();
  const a = parseInt(loanAmount.value); // Principle
  const y = parseInt(years.value); // Repayment duration in years
  const n = y * 12;
  const i = parseInt(interestRate.value) / 100; // interest rate
  const r = interestRate.value / 100 / 12;
  console.log(typeof interestRate.value)
  console.log(n)
  console.log(r)

  monthlyPayments.value = (a/((((1 + r)**n)-1)/(r*(1 + r)**n))).toFixed(2);
  totalPay.value = ((r*a*n)/(1-(1+r)**(-1*n))).toFixed(2);
  totalInterest.value = (totalPay.value - a).toFixed(2);

}
