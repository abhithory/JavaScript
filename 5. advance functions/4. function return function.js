const greet = function (greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet("hello");

greeterHey("shekhar");
greeterHey("rahul");
greeterHey("abab");


greet("hi! ")("stoic")



const greet2 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey2 = greet2("hihi! ");

greeterHey2("shekaher");
greeterHey2("rahul");
greeterHey2("aabbccdd");

greet2("hihi!! ")("stoic");