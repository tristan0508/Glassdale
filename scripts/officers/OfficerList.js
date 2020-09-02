import { OfficerHTML} from './Officer.js';
import { useOfficers, getOfficers } from './OfficerProvider.js';
const officerElement = document.querySelector('.officersContainer');
const officerFilter = document.querySelector('.filters__officer');
const eventHub = document.querySelector(".container");

/////////////////////////////////////////////////////////////

eventHub.addEventListener('change', event => {
    if (event.target.id === "officerSelect") {
        const officerEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(officerEvent)
    };
});
///////////////////////////////////////////////////////////////
export const OfficerDropList = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers();
        OfficerDropdown(officers);
    });
};

const OfficerDropdown = (officerObj) => {
    officerFilter.innerHTML =
    `<select class="dropdown" id="officerSelect">
        <option value="0">Please select an Officer...</option>
        ${
            officerObj.map(officer => {
                return `<option>${officer.name}</option>`
            })
        }
    </select>
    `
}
///////////////////////////////////////////////////////////////
export const OfficerList = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers();
        addOfficerDom(officers);
        });

};

const addOfficerDom = (theOfficerArray) => {
    let HTMLArray = theOfficerArray.map(officer => {
        return OfficerHTML(officer);
    });
    officerElement.innerHTML = HTMLArray.join("");
};
//////////////////////////////////////////////////////////////
