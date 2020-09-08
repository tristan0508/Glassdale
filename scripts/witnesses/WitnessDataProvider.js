let witnesses = [];

export const useWitnesses = () => {
    return witnesses.slice();
};

export const getWitnesses = async() => {
    let response = await fetch("https://criminals.glassdale.us/witnesses");
    witnesses = await response.json();
    return witnesses;
};