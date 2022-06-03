let counterValue = 0;

document.getElementById('incrementClick')
    .addEventListener('click', function () {
        updateDisplay(++counterValue);
    })

document.getElementById('decrementClick')
    .addEventListener('click', function () {
        updateDisplay(--counterValue);
    })

document.getElementById('resetClick')
.addEventListener('click', function () {
    counterValue = 0;
    updateDisplay(counterValue);
})

function updateDisplay(val) {
    document.getElementById("counterDisplay").innerHTML = val
}