createHTML('body','div','container');
createHTML('div.container','div','screen');
createHTML('div.container','div','controls');
createControlButtons('on','off','clear');
createHTML('div.container','div','keypad');
createHTML('div.keypad','div','characters');
createHTML('div.keypad','div','operators');
createNumPadButtons(10);
createOperatorButtons('÷','x','-','+');

const display = document.querySelector('div.screen');
display.textContent = 1250045

function createNumPadButtons(numberOf) {
    for (let i = 0; i < numberOf; i++) {
        if (numberOf - i == 1 ) {
            createHTML('div.characters','button',`=-sign`,'number',1,`=`);
            createHTML('div.characters','button',`.`,'number',1,`.`);
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

console.log(operate(10,"divide",3));