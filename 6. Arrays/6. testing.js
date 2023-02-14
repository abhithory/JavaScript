const arr = [{id:1,name:"aa"},{id:2,name:"bb"},{id:3,name:"cc"},{id:4,name:"cc"}];

arr.map((item,key)=>{
    if (item.id == 3) {
        item.name = "shekhar"
    }
    return item;
})

console.log(arr);
