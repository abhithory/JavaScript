"use strict";

class Car{
    constructor(carName, speed){
        this.carName = carName;
        this.speed = speed;
    }

    accelarate(){
        this.speed += 5;
        console.log(`speed increased to ${this.speed}`);
    }
    
    brake(){
        this.speed -= 5;
        console.log(`speed decresed to ${this.speed}`);
    }

    get getSpeed(){
        return this.speed;
    }

    set setSpeed(speed){
        this.speed = speed;
    }
}


const ford = new Car("Ford", 55);

console.log(ford.getSpeed);

ford.accelarate();
console.log(ford.getSpeed);
ford.brake();
console.log(ford.getSpeed);