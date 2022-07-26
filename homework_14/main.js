let operand_a = '';
let operand_b = '';
let sign = '';
const out = document.querySelector('.disp');

function clear_all () {
    operand_a = '';
    operand_b = '';
    sign = '';
    out.textContent = 0;
};

function math_execution() {
    if (sign === '+') {
        operand_a = (+operand_a) + (+operand_b);
    } else if (sign === '-') {
        operand_a = operand_a - operand_b;
    } else if (sign === '*') {
        operand_a = operand_a * operand_b;
    } else if (sign === '/') {
            if (b === '0') {
            out.textContent = 'error';
            operand_a = '';
            operand_b = '';
            sign = '';
            return;
            };
            operand_a = operand_a / operand_b;
    } else if (sign === '%') {
        operand_a = operand_a / 100 * operand_b
    };
    operand_b = '';
    out.textContent = operand_a;
};

document.querySelector('.calckeyboard').onclick = (event) => {
    const key = event.target.textContent;
    
    if(event.target.classList.contains('clear')) {
        clear_all ();
        return;
    };

    if(event.target.classList.contains('operator')) {
        sign = key;
        out.textContent = sign;
        return;
    };

    if (event.target.classList.contains('grey')) {
        if (operand_b === '' && sign === '') {
            operand_a += key;
            out.textContent = operand_a;
            return;
        } else {
            operand_b += key;
            out.textContent = operand_b;
           return;
        }
    };

    if (key === '=') {
        
        math_execution();
    };

    if (key === '^') {
        operand_a = Math.sqrt(operand_a);
        out.textContent = operand_a; 
    };
};







