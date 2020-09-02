let conviction;

export const useConviction = () => conviction.slice();

export const getConviction = async() => {
    let response = await fetch('https://criminals.glassdale.us/crimes');
    response = await response.json();
    conviction = response;
    return conviction;
};

