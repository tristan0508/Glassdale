import { OfficerHTML } from './Officer.js';
import { useOfficers, getOfficers } from './OfficerProvider.js';


export const OfficerList = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers();
        addOfficerDom(officers);
        })

}
const officerElement = document.querySelector('.officersContainer');
const addOfficerDom = (theOfficerArray) => {


    let HTMLArray = theOfficerArray.map(officer => {
        return OfficerHTML(officer);
    })
    officerElement.innerHTML = HTMLArray.join("");
}