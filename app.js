// Declare variables from DOM
const card = document.querySelector('.card');
const form = document.querySelector('#loan-form');
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
  const a = parseFloat(loanAmount.value); // Principle
  const y = parseFloat(years.value); // Repayment duration in years
  const n = y * 12;
  const r = interestRate.value / 100 / 12;

  if(isFinite(calcMonthlyPayments(a, r, n))) {
  monthlyPayments.value = calcMonthlyPayments(a, r, n);
  totalPay.value = calcTotalPayments(a, r, n);
  totalInterest.value = (totalPay.value - a).toFixed(2);
  displayAndRemoveLoading();
  displayResults();
  } else {
    showError('Please check fields')
  }
}

function calcMonthlyPayments(a, r, n) {
  return (a/((((1 + r)**n)-1)/(r*(1 + r)**n))).toFixed(2);
}

function calcTotalPayments(a, r, n) {
  return ((r*a*n)/(1-(1+r)**(-1*n))).toFixed(2);
}

// Show error function
function showError(error) {
  // Create div
  errorDiv = document.createElement('div');
  errorDiv.innerText = error;

  // Add classes
  errorDiv.classList.add('alert', 'alert-danger');

  // Insert into DOM
  card.appendChild(errorDiv);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
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