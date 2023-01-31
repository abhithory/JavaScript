"use strict"

const jobs = ["student","developer"];

const userTimer = setTimeout((job1,job2) => {
    console.log(`these jobs ${job1} and ${job2}`);
}, 2000, ...jobs);

if (jobs.includes("teacher")) clearTimeout(userTimer);


const userTimer2 = setTimeout((job1,job2) => {
    console.log(`these jobs ${job1} and ${job2}`);
}, 2000, ...jobs);


if (jobs.includes("student")) clearTimeout(userTimer2);



// set interval

setInterval(function(){
    const now = new Date();
    console.log(now);
},2000);
