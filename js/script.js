{
      const finalResultElement = document.querySelector(".js-finalResult");

      const welcome = () => {
            console.log("Hello world");
      };
      const init = () => {
            finalResultElement.innerText = 0.00.toFixed(2);
            welcome();
      };
      const onFormSubmit = () => {
            let formElement = document.querySelector(".js-form");
            formElement.addEventListener("submit", showResult);
      };
      const GBPrate = 1;
      const EURrate = 1.12;
      const USDrate = 1.19;
      const PLNrate = 5.37;

      const returnCurrencyRate = () => {  
            const fromCurrencyElement = document.querySelector(".js-fromCurrency");
            const currency = fromCurrencyElement.value;

            switch (currency) {
                  case "GBP":
                        return GBPrate;

                  case "EUR":
                        return EURrate;

                  case "USD":
                        return USDrate;

                  case "PLN":
                        return PLNrate;
            }
      };  
      const returnCurrencyRateTo = () => {
            const toCurrencyElement = document.querySelector(".js-toCurrency");
            const toCurrency = toCurrencyElement.value;
      
            switch (toCurrency) {
                  case "GBP":
                        return GBPrate;
      
                  case "EUR":
                        return EURrate;

                  case "USD":
                        return USDrate;
      
                  case "PLN":
                        return PLNrate;
            }
      };
      const calculateResult = () => {
            const amountElement = document.querySelector(".js-amount");
            let amount = amountElement.value; 
            const rate = returnCurrencyRate();
            const rateTo = returnCurrencyRateTo();
            
            return amount / rate * rateTo;
      };
      const showResult = (event) => {
            event.preventDefault();
            const finalResult = calculateResult();

            finalResultElement.innerText = `${finalResult.toFixed(2)}`;
      };
      const resetResult = () => {
            const resetButton = document.querySelector(".js-reset");

            resetButton.addEventListener("click", () => {
                  finalResultElement.innerText = 0.00.toFixed(2);
            });
      };
      init();
      onFormSubmit();
      resetResult();
}