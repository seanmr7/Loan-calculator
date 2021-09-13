// Declare variables from DOM
const form = document.querySelector('#load-form');
const results = document.querySelector('#results');
const loading = document.querySelector('#loading');
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
  const r = interestRate.value / 100 / 12;

  monthlyPayments.value = calcMonthlyPayments(a, r, n);
  totalPay.value = calcTotalPayments(a, r, n);
  totalInterest.value = (totalPay.value - a).toFixed(2);

  displayAndRemoveLoading();
  displayResults();
}

function calcMonthlyPayments(a, r, n) {
  return (a/((((1 + r)**n)-1)/(r*(1 + r)**n))).toFixed(2);
}

function calcTotalPayments(a, r, n) {
  return ((r*a*n)/(1-(1+r)**(-1*n))).toFixed(2);
}

// Displays the results Div
function displayResults() {
  if(results.classList.contains('d-none')) {
    setTimeout(function() {
      results.classList.remove('d-none');
    }, 4000);
  }
}

// Displays the Loading gif for 4 seconds then remove it.
function displayAndRemoveLoading() {
  if(loading.classList.contains('d-none')) {
    loading.classList.remove('d-none');
    setTimeout(function() {
      loading.style.display = 'none';
    }, 4000);
  }
}