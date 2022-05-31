//1. Уникализация значений в массиве. (решить через filter)

// function uniqArray(array) {
//     return array.filter((item, index) => index === array.indexOf(item));
// }

// console.log(uniqArray([1,4,6,4,9,7,,3,7]));

//-------------------------------------------------------------------------


//2. Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.

// Number.prototype.plus = function(arg) {
//     return this + arg;
//   };
  
// Number.prototype.minus = function(arg) {
// return this - arg;
// };


// console.log((2).plus(3).minus(1));

//--------------------------------------------------------------------------

//3. Анаграмма

// function isAnagram(firstWord, secondWord) {
//     if (firstWord.length !== secondWord.length) return false;
    
//     if (firstWord.split('').sort().join('') === secondWord.split('').sort().join('')) return true;
    
//     return false;
// }
    
// console.log(isAnagram('heart', 'earth'));
// console.log(isAnagram('cat', 'tac'));
// console.log(isAnagram('cat', 'toc'));

//----------------------------------------------------------------------------


//4. Напишите функцию, которая будет удалять повторяющиеся значения и возвращать получившийся массив.
//  Значения в результирующем массиве должны быть отсортированны по кол-ву слов во входном массиве.


const words = ['orange', 'banana', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana'];


function solution(words) {

    let valuesMap = new Map();

    words.forEach(elem => {
        valuesMap.set(elem, valuesMap.has(elem) ? valuesMap.get(elem) + 1 :  1);
    });

    let arr =  [...valuesMap.entries()].sort((a, b) => b[1] - a[1]);

    return arr.map(value => value[0]);
}

console.log(solution(words));