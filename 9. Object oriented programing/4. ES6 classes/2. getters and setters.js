
// In objects

const account = {
    owner: "shekhar",
    movements:[3,55,666,3333],

    // these are properties not functions
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
}


console.log(account.latest);
account.latest = 9999;
console.log(account.latest);


//  in classes

class PersonCl {
    constructor(name){
        this.name = name;
    }
    get getName (){
        return this.name;
    }
    set setName (name){
        this.name = name;
    }
}

const abhi = new PersonCl("abhishek");

console.log(abhi.getName);
abhi.setName = "shekhar";
console.log(abhi.getName);
