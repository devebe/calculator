createHTML('body','div','container');
createHTML('div.container','div','screen');
createHTML('div.container','div','controls');
createControlButtons('on','off','clear');
createHTML('div.container','div','keypad');
createHTML('div.keypad','div','characters');
createHTML('div.keypad','div','operators');
createNumPadButtons(10);
createOperatorButtons(' ÷ ',' x ',' - ',' + ');

const keyInputs = document.querySelectorAll('button.number, button.decimal, button.operator');
let displayValue = document.querySelector('div.screen');

function execute() {
    keyInputs.forEach(key => {
        key.addEventListener('click', e => {
            if (e.target.id === ' + ' || e.target.id === ' - ' || e.target.id === ' x ' || e.target.id === ' ÷ ') {
                const operatorInputs = document.querySelectorAll('button.operator');
                operatorInputs.forEach(operator => {
                    operator.disabled = true;
                });
            }
            displayValue.textContent += e.target.id;
        });
    });
    
    let evaluation = document.querySelector('button.evaluate');
    evaluation.addEventListener('click', e => {
        let result = operate(parseFloat(displayValue.textContent.split(' ')[0]), displayValue.textContent.split(' ')[1], parseFloat(displayValue.textContent.split(' ')[2]));
        console.log(result);
        displayValue.textContent = result;
    });
}

execute();


// Listen for operator click as this can only be done once
// Listen for evaluation click












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