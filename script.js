function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
 
    interesrRateValue = document.getElementById("interest-rate").value;

     MonthsTopayValue = document.getElementById("months-to-pay").value;

    interest = (loanAmountValue * (interesrRateValue * 0.01)) / MonthsTopayValue;

    monthlypayment = (loanAmountValue / MonthsTopayValue + interest).tofixed(2);

    document.getElementById(
"payment"
).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
  
    interestRateValue = document.getElementById("interest-rate").value;
  
    MonthsToPayValue = document.getElementById("months-to-pay").value;
  
    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;
  
    monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);
  
    document.getElementById(
      "payment"
    ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
  }