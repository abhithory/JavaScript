const Person = function (fullName, age){
    this.fullName = fullName;
    this.age = age;
}

Person.prototype.getAge = function(){
    return this.age;
}

const Student = function (fullName, age,course){
    Person.call(this,fullName,age);
    this.course = course;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`Hello i am ${this.fullName}`);
}

const abhi = new Student("abhishek", 22,"Computer science");

abhi.introduce();

console.log(abhi.__proto__);
console.log(abhi.__proto__.__proto__);

console.log(abhi instanceof Student);
console.log(abhi instanceof Person);

Student.prototype.constructor = Student;

