console.log("Hello world");

let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount");
let fromCurrencyElement = document.querySelector(".js-fromCurrency");
let toCurrencyElement = document.querySelector(".js-toCurrency");
let resultElement = document.querySelector(".js-result");
let finalResultElement = document.querySelector(".js-finalResult");
let resetButton = document.querySelector(".js-reset");

finalResultElement.innerText = 0.00.toFixed(2);

let GBPrate = 1;
let EURrate = 1.12;
let USDrate = 1.19;
let PLNrate = 5.37;

formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      let currency = fromCurrencyElement.value;
      let amount = amountElement.value;
      let rate;

      switch (currency) {
            case "GBP":
                  rate = GBPrate;
                  break;

            case "EUR":
                  rate = EURrate;
                  break;

            case "USD":
                  rate = USDrate;
                  break;

            case "PLN":
                  rate = PLNrate;
      }

      let toCurrency = toCurrencyElement.value
      let rateTo;

      switch (toCurrency) {
            case "GBP":
                  rateTo = GBPrate;
                  break;

            case "EUR":
                  rateTo = EURrate;
                  break;

            case "USD":
                  rateTo = USDrate;
                  break;

            case "PLN":
                  rateTo = PLNrate;
      }

      let finalResult = amount / rate * rateTo;
      finalResultElement.innerText = finalResult.toFixed(2);
});

resetButton.addEventListener("click", () => {
      finalResultElement.innerText = 0.00.toFixed(2);
});