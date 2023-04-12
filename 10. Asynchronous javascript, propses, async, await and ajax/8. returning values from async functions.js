async function callApis(){
    const apiCall = await fetch("");
    const apiJson = await apiCall.json();
    return apiJson
}

callApis.then(res=>console.log(res)).catch(err=>console.log(err)).finally(()=>console.log("finally"))


//  or

(async function(){
    try {
        const data = await callApis();
    } catch (error) {
        
    }
})