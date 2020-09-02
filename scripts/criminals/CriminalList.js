import {getCriminals, criminalReturn} from './CriminalProvider.js';
import {criminalHTML} from './Criminals.js';
const criminalElement = document.querySelector('.criminalsContainer');
const eventHub = document.querySelector(".container");
    
eventHub.addEventListener('crimeChosen', event => {
        
    if ("crimeThatWasChosen" in event.detail) {
        const criminalSlice = criminalReturn();
       const matchingCriminals = criminalSlice.filter(criminal => {
           return criminal.conviction === event.detail.crimeThatWasChosen
        })
        criminalRender(matchingCriminals);
    }
});

export const criminalList = () => {
    getCriminals()
    .then(() => {
        const criminals = criminalReturn();
        criminalRender(criminals);
     })};

    
const criminalRender = (generalArray) => {
    let criminalMap = generalArray.map(criminal => {
        return criminalHTML(criminal);  
    }) 
 criminalElement.innerHTML = criminalMap.join("");
};
