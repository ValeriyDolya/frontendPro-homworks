
function carCreator() {
    const car = {};
    car.model = prompt("Input Manufacturer of car");
    car.name = prompt("Input model name");
    car.year = prompt("Input year of production:");
    car.mileage = prompt("Input mileage");
    car.fuel = prompt("Input type of fuel Petrol/Diesel/Electro");

    return car;
    
};



const carArray = [];
carArray.push(carCreator());
console.log(carArray);
