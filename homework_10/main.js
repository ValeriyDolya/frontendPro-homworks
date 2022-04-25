const collection = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
function chunk(arr, size) {
    let arrOfChunks = [];
    if (size !== 0) {      
        for (let s = 0, e = size; s < arr.length; s += size, e += size)
        arrOfChunks.push(arr.slice(s, e));
        return arrOfChunks;
    }else {
        return '! Invalid size !';
    }
}
const result = chunk(collection, 3);
console.log(result);

const result2 = chunk(collection, 0);
console.log(result2);

const result3 = chunk(collection, 1);
console.log(result3);

const result4 = chunk(collection, 4);
console.log(result4);