async function getFetch<R>():Promise<R> {
    const response = await fetch("", {
        headers:{
            "Content-type":"application/json"
        }
    });
    if(!response.ok){
        return Promise.reject("cant be processed");
    }
    return await response.json();
}
export {getFetch};