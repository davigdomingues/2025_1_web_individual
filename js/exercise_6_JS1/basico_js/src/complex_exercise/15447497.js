let lastResult = null; // para encadeamento de operações

        function performOperation(num1, num2, operation) {
            switch (operation) {
                case "add":
                    return num1 + num2;

                case "subtract":
                    return num1 - num2;

                case "multiply":
                    return num1 * num2;

                case "divide":
                    return num2 !== 0 ? num1 / num2 : "Invalid Operation!";

                default:
                    return "Invalid Operation!";
            }
        }

        function calculate() {
            let num1Input = document.getElementById("operand1");
            let num2Input = document.getElementById("operand2");
            let operation = document.getElementById("operations").value;
            let resultDiv = document.getElementById("result");

            let num1 = parseFloat(num1Input.value);
            let num2 = parseFloat(num2Input.value);

            if (isNaN(num1)) {
                if (lastResult !== null) {
                    num1 = lastResult; // usa o último resultado
            }

                else {
                    resultDiv.textContent = "Please enter the first number!";
                    return;
                }
            }

            if (isNaN(num2)) {
                resultDiv.textContent = "Please enter the second number!";
                return;
            }

            resultDiv.textContent = "Result: " + performOperation(num1, num2, operation);

            if (!isNaN(result)) {
                lastResult = result;
            }
        }

        function clearFields() {
            document.getElementById("operand1").value = "";
            document.getElementById("operand2").value = "";
            document.getElementById("result").textContent = "";
            lastResult = null;
        }

        // Press enter to activate the calculus
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                calculate();
            }
        })