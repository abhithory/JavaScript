"use strict";

// for convection just put underscope in starting of variable in calss. so that everybody will not call it and consider as it private


class Person{
    constructor(firstname,upiPin) {
        this.firstname = firstname;
        this._pin = upiPin;
    }

    _getUpiPin(){
        return this._pin;
    }
}