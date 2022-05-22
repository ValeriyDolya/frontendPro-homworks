
const button = document.querySelector('.buttonAdd');
const inputedText = document.querySelector('.text');
let items = [];

button.addEventListener('click', () => {
    if (inputedText.value === "") {
        alert('Nothing entered!');    
    } else {
        items.push(inputedText.value);
        inputedText.value = "";
    }
});

console.log(items);

button.addEventListener('click', () => {
   
    let divClassToDoItem = document.querySelector(".toDoItems")

    let divClassItem = document.createElement('div');
    divClassItem.className = "item";
    divClassToDoItem.append(divClassItem);
  
    let inptClassCheckbox = document.createElement('input');
    inptClassCheckbox.type = 'checkbox';
    inptClassCheckbox.className = 'itemCheckBox';
    divClassItem.append(inptClassCheckbox);

    let pClassItemText = document.createElement('p');
    pClassItemText.className = "itemText"
    pClassItemText.innerHTML = items[items.length - 1];
    divClassItem.append(pClassItemText);
});

const clickedItem = document.querySelector('.toDoItems');

clickedItem.addEventListener('click', function(e) {
    let targetItem = e.target;
    if (targetItem.closest('.itemCheckBox')) {
        targetItem.closest('.itemCheckBox').classList.add('done');
        
        console.log('Ok!');
        
    }
})

