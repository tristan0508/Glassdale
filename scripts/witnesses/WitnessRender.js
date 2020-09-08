const criminalElement = document.querySelector('.criminalsContainer');
import {criminalList} from '../criminals/CriminalList.js';

export const WitnessRender = (html) => {
    return criminalElement.innerHTML = html
} 

export const CriminalReturn = () => {
    let criminals = criminalList()
    criminalElement.innerHTML = criminals;
}