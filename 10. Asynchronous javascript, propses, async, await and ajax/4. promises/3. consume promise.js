"use strict";


fetch("url").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
})


// chaining in promise


fetch("url").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);

    return fetch("newUrl")
}).then(response=>response.json()).then(data=>{
    console.log(data);
})