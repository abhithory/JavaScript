"use strict";


//  handle error at each promise consume
fetch("url").then(function (response) {
    return response.json()
}, function (error) {
    console.log(error);
}).then(function (data) {
    console.log(data);

    return fetch("newUrl")
}, function (error) {
    console.log(error);
}).then(response => response.json()).then(data => {
    console.log(data);
}, function (error) {
    console.log(error);
})



// handle all error once in promise chain
fetch("url").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);

    return fetch("newUrl")
}).then(response=>response.json()).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
    console.log(err.message);
})


// no mater callback is fullfilled or rejcted this method will be called always

fetch("url").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);

    return fetch("newUrl")
}).then(response=>response.json()).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
    console.log(err.message);
}).finally(()=>{
    
})