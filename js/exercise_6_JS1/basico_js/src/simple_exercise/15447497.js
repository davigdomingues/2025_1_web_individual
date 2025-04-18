// simple JavaScript Calculator
        performOperation = function(num1, num2, operation) {
            let result = 0

            switch (operation) {
                case "add":
                    result = num1 + num2
                    break

                case "subtract":
                    result = num1 - num2
                    break

                case "multiply":
                    result = num1 * num2
                    break

                case "divide":
                    if (num2 != 0) {
                        result = num1 / num2
                        break
                    }

                    result = "Invalid Operation!"
                    break

                default:
                    return "Invalid Operation!"
                    break
            }

            return result
        }

        let num1 = parseFloat(prompt("First number: "))
        let num2 = parseFloat(prompt("Second number: "))

        if (isNaN(num1) || isNaN(num2)) {
            alert("Text two valid numbers!")
        }

        else {
            let operation = prompt("Choose between: add, subtract, multiply, divide")
            alert(performOperation(num1, num2, operation))
        }