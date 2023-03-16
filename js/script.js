{
      let finalResultElement = document.querySelector(".js-finalResult");

      const welcome = () => {
            console.log("Hello world");
      };

      const init = () => {
            finalResultElement.innerText = 0.00.toFixed(2);

            welcome();
      };

      const onFormSubmit = () => {
            let formElement = document.querySelector(".js-form");

            formElement.addEventListener("submit", calculateResult);
      };
      
      const GBPrate = 1;
      const EURrate = 1.12;
      const USDrate = 1.19;
      const PLNrate = 5.37;

      const calculateRate = () => {  
            const fromCurrencyElement = document.querySelector(".js-fromCurrency");
            let currency = fromCurrencyElement.value;

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
      }  

      const calculateRateTo = () => {
            const toCurrencyElement = document.querySelector(".js-toCurrency");
            let toCurrency = toCurrencyElement.value;
      
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
      }

      const calculateResult = (event) => {
            event.preventDefault(); 

            const amountElement = document.querySelector(".js-amount");
            let amount = amountElement.value; 
            const rate = calculateRate();
            const rateTo = calculateRateTo();
            
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
      onFormSubmit();
      resetResult();
}