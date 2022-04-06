function inputNumber() {
    let number = Number(prompt('write here.'));
    function evenOrOdd(inputNumber) {
        if (number % 2 === 0) {
            return ("even");
        }else {
            return ("odd");
        }
    }
    function checkIfNumberPrime(inputNumber) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return ("composite");               
            } else {
                return ("prime");    
            } 
        }  
    }
    evenOrOdd();
    checkIfNumberPrime();
    alert(`Entered number is ${evenOrOdd()} and ${checkIfNumberPrime()}`);
}
