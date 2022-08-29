createCalculatorHTML();
const operatorInputs = document.querySelectorAll('button.operator');
const dotInput = document.querySelector('button.decimal');
let displayValue = document.querySelector('div.screen');
executeCalculator();

function createCalculatorHTML() { // Creates the HTML for Calculator
    createHTML('body','div','container');
    createHTML('div.container','div','screen');
    createHTML('div.container','div','controls');
    createControlButtons('on','del','clear');
    createHTML('div.container','div','keypad');
    createHTML('div.keypad','div','characters');
    createHTML('div.keypad','div','operators');
    createNumPadButtons(10);
    createOperatorButtons(' ÷ ',' x ',' - ',' + ');
}

function executeCalculator() {
    setInput(); // Captures input
    deleteInput(); // Allows user to delete input
    evaluate(); // Evaluates input when clicking '='
    clearScreen(); // Allows for clearing the screen
}

function setInput() {
    const keyInputs = document.querySelectorAll('button.number, button.decimal, button.operator');
    const dotInput = document.querySelector('button.decimal');
    keyInputs.forEach(key => {
        key.addEventListener('click', e => {  
            if (e.target.id === ' + ' || e.target.id === ' - ' || e.target.id === ' x ' || e.target.id === ' ÷ ') {
                operatorInputs.forEach(operator => {
                    operator.disabled = true;
                });
                dotInput.disabled = false;
            }
            if (e.target.id === '.') {
                dotInput.disabled = true;
            }
            displayValue.textContent += e.target.id;
        });
    });
    
}

function deleteInput() {
    document.getElementById('del').addEventListener('click', e => {
        if (displayValue.textContent[displayValue.textContent.length - 1] === ' ') {
            operatorInputs.forEach(operator => {operator.disabled = false;});
        }
        displayValue.textContent = displayValue.textContent.slice(0,(displayValue.textContent.length - 1));
    })
}

function evaluate() {
    let evaluation = document.querySelector('button.evaluate');
    evaluation.addEventListener('click', e => {
        let result = operate(parseFloat(displayValue.textContent.split(' ')[0]), displayValue.textContent.split(' ')[1], parseFloat(displayValue.textContent.split(' ')[2]));
        if (result === NaN || result === Infinity) {
            alert('You cannot divide by 0, it will break the internet.');
            displayValue.textContent = '';
        }
        else {
            displayValue.textContent = +result.toFixed(4);
        }
        operatorInputs.forEach(operator => {operator.disabled = false;});
    });
}

function clearScreen() {
    let clearScreen = document.querySelector('button#clear');
    clearScreen.addEventListener('click', e => {
        displayValue.textContent = '';
        dotInput.disabled = false;
        operatorInputs.forEach(operator => {operator.disabled = false;});
    });
    
}

function createNumPadButtons(numberOf) {
    for (let i = 0; i < numberOf; i++) {
        if (numberOf - i == 1 ) {
            createHTML('div.characters','button',`=`,'evaluate',1,`=`);
            createHTML('div.characters','button',`.`,'decimal',1,`.`);
        }
        createHTML('div.characters','button',`${numberOf - i - 1}`,'number',1,`${numberOf - i - 1}`);
    }
}

function createOperatorButtons(...args) {
    for (let i = 0; i < args.length; i++) {
        createHTML('div.operators','button',`${args[i]}`,'operator',1,`${args[i]}`);
    }
}

function createControlButtons(...args) {
    for (let i = 0; i < args.length; i++) {
        createHTML('div.controls','button',`${args[i]}`,'controls',1,`${args[i].toUpperCase()}`);
    }
}

function createHTML (parentNode, childNode = 'div', idName, className = idName, numberOf = 1, textContent = '') {
    for (let i = 0; i < (parseInt(numberOf)); i++) {
        const parents = document.querySelectorAll(parentNode);
        const child = document.createElement(childNode);
        parents.forEach(parentNode => {parentNode.appendChild(child)});
        child.setAttribute("id",`${idName}`);
        child.classList.add(`${className}`);
        child.textContent = textContent;
    }
}

function operate (firstOperand,operatorType,secondOperand) {
    let result;
    switch (operatorType) {
        case "+":
            result = add(firstOperand,secondOperand);
            return result;
        case "-":
            result = subtract(firstOperand,secondOperand);
            return result;
        case "x":
            result = multiply(firstOperand,secondOperand);
            return result;
        case "÷":
            result = divide(firstOperand,secondOperand);
            return result;
    }
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