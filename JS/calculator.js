function operate (firstOperand,operatorType,secondOperand) {
    let result;
    switch (operatorType) {
        case "add":
            result = add(firstOperand,secondOperand);
            break;
        case "subtract":
            result = subtract(firstOperand,secondOperand);
            break;
        case "multiply":
            result = multiply(firstOperand,secondOperand);
            break;
        case "divide":
            result = divide(firstOperand,secondOperand);
            break;
    }
    return result;
}


function add(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

function subtract(...args) {
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        result = result - args[i];
    }
    return result;
}

function multiply(...args) {
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}

function divide(...args) {
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        result /= args[i];
    }
    return result;
}

console.log(add(5,10,15,16,22));

console.log(subtract(100,10,15,20,25));

console.log(multiply(3,3,2,2,1));

console.log(divide(40,2,2));

console.log(operate(10,"add",3));