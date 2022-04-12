function inputNumber() {
    let number = Number(prompt('write here.'));
    function evenOrOdd() {
        if (number % 2 === 0) {
            return ("even");
        }else {
            return ("odd");
        }
    }
    function checkIfNumberPrime() {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return ("composite");
            }
        }
        return ("prime");
    }    
    alert(`Entered number is ${evenOrOdd()} and ${checkIfNumberPrime()}`);
}
