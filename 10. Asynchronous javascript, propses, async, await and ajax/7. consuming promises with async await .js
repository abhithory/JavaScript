// create async function

async function callApis(){
    const apiCall = await fetch("");
    const apiJson = await apiCall.json();
}


// error handling in async await 


async function callApis(){
    try {
        const apiCall = await fetch("");
        const apiJson = await apiCall.json();
        
    } catch (error) {
        
    }
}

async function callApis(){
    try {
        const apiCall = await fetch("");

        if (!apiCall.ok) throw Error("problem getting location data")
        const apiJson = await apiCall.json();
        
    } catch (error) {
        
    }
}
