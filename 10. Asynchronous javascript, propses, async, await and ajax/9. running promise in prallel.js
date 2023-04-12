async function callApis(){
    // const apiCall = await fetch("1");
    // const apiCall2 = await fetch("2");
    // const apiCall3 = await fetch("3");

    
    // instead of this

    // if any promise get rejected then this entire call will be rejected
    const dataArray = await Promise.all([
        fetch("1"),
        fetch("2"),
        fetch("3")
    ])
}

