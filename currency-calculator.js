currencyEl_from = document.getElementById('box-from'),
  
currencyEl_to = document.getElementById('box-to'),
  
amountEl_from = document.getElementById('amount-from'),
  
amountEl_to = document.getElementById('amount-to');

function myFunction() {
  document.getElementById("myForm").reset();
}

function calculate() {
  box_from = currencyEl_from.value;
  box_to = currencyEl_to.value;
  

fetch(`https://v6.exchangerate-api.com/v6/c92578947e3c3625a524ac42/latest/${box_from}`)
   .then((res) => res.json())
   .then((data) => {
     const rate = data.conversion_rates[box_to];
     amountEl_to.value = (amountEl_from.value * rate).toFixed(2);})
;}


currencyEl_from.addEventListener('change', calculate);
amountEl_from.addEventListener('input', calculate);
currencyEl_to.addEventListener('change', calculate);
amountEl_to.addEventListener('input', calculate);
rate.addEventListener('click', () => {
calculate();}
 );  

