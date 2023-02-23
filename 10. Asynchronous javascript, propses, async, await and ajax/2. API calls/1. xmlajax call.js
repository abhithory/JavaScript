"use strict";

const request = new XMLHttpRequest();
request.open("GET",`api  endpoint`);
request.send();

request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
})