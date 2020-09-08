let conviction;

//////////////////////////////////////////////

export const useConviction = () => {
    let sortCrime = conviction.slice();
    conviction = sortCrime.sort((a,b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        }else{
            return 0;
        }
    });
    return conviction
}


export const getConviction = async() => {
    let response = await fetch('https://criminals.glassdale.us/crimes');
    response = await response.json();
    conviction = response;
    return conviction;
};
//////////////////////////////////////////////

