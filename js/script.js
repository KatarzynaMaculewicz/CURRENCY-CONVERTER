{
      const welcome = () => {
            console.log("Hello world");
      };

      let finalResultElement = document.querySelector(".js-finalResult");

      const init = () => {

            finalResultElement.innerText = 0.00.toFixed(2);

            welcome();
      };

      const runCalculating = () => {

            let formElement = document.querySelector(".js-form");

            formElement.addEventListener("submit", calculateResult);
      };
      
      const calculateResult = (event) => {
            event.preventDefault(); 
      
            const amountElement = document.querySelector(".js-amount");
            const fromCurrencyElement = document.querySelector(".js-fromCurrency");
            const toCurrencyElement = document.querySelector(".js-toCurrency");

            const GBPrate = 1;
            const EURrate = 1.12;
            const USDrate = 1.19;
            const PLNrate = 5.37;

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

            let toCurrency = toCurrencyElement.value;
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

            const finalResult = amount / rate * rateTo;
            finalResultElement.innerText = finalResult.toFixed(2);
      };

      const resetResult = () => {

            const resetButton = document.querySelector(".js-reset");

            resetButton.addEventListener("click", () => {
                  finalResultElement.innerText = 0.00.toFixed(2);
            });

      };

      init();
      runCalculating();
      resetResult();
}