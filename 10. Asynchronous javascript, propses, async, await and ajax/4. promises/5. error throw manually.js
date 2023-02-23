"use strict";

// adding error manually
fetch("url").then(function (response) {
    if (!response.ok) throw new Error("Not found");
    return response.json()
}).then(function (data) {
    console.log(data);
    return fetch("newUrl")
}).then(response => {
    if (!response.ok) throw new Error("Not found");
    return response.json()
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
    console.log(err.message);
}).finally(() => {

})


// adding function for same code

const getJson = function(url,error = "Something went wrong"){
    fetch(url).then(function (response) {
        if (!response.ok) throw new Error(error);
        return response.json()
    });
}


getJson("urll","error message").then(function (data) {
    console.log(data);
    return getJson("new url","error message")
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
    console.log(err.message);
}).finally(() => {

})



