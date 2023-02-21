"use strict"

const Car = function (speed) {
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 5;
    console.log(`New Speed ${this.speed}`);
}


Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`New Speed ${this.speed}`);
}


const BMW = new Car(120);
const Mercedes = new Car(95);

BMW.accelerate();
BMW.brake();

Mercedes.accelerate();
Mercedes.brake();