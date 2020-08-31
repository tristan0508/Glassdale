import {getCriminals, criminalReturn} from './CriminalProvider.js';
import {criminalHTML} from './Criminals.js';
const criminalElement = document.querySelector('.criminalsContainer');

export const criminalList = () => {
    getCriminals()
    .then(() => {
        const criminals = criminalReturn();
        criminals.map(criminal => {
            let criminalDOM = criminalHTML(criminal);
            criminalElement.innerHTML += criminalDOM;
        });
    })};
