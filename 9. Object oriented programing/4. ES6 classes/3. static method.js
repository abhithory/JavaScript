class PersonCl {
    constructor(name){
        this.name = name;
    }
    get getName (){
        return this.name;
    }

    // instace methods
    set setName (name){
        this.name = name;
    }

    static aboutThisClass () {
        console.log("this class is for a person");
    }
}

const abhi = new PersonCl("abhishek");

PersonCl.aboutThisClass();

// abhi.aboutThisClass() // it will not work