import { useWitnesses, getWitnesses } from './WitnessDataProvider.js';
import { WitnessHTML } from './WitnessHTML.js';
import { WitnessRender,CriminalReturn } from './WitnessRender.js';

const witnessButton = document.querySelector(".witnessBtn");
const criminalH2 = document.querySelector(".criminalsH2");


export const witnessRender = witnessButton.addEventListener("click", () => {
    Witnesses();

criminalH2.addEventListener("click", () => {
    CriminalReturn();
    })
})


const Witnesses = () => {
    getWitnesses()
    .then(() => {
        let witness = useWitnesses()
        let witnessHtml = WitnessHTML(witness)
        WitnessRender(witnessHtml) 
    })
}