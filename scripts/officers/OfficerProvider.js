let officers = []

export const useOfficers = () => {
    let sortOfficers = officers.slice();
    officers = sortOfficers.sort((a,b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        }else{
            return 0;
        }
    })
    return officers;
}


export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                
                officers = parsedOfficers
            }
        )
}

