let criminals = [];

export const criminalReturn = () => criminals.slice();

export const getCriminals = async() => {
    let response = await fetch('https://criminals.glassdale.us/criminals');
    response = await response.json();
    criminals = response;
    return criminals;
};