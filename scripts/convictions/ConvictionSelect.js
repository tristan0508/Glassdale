import {useConviction, getConviction} from './ConvictionProvider.js';
const convictionElement = document.querySelector('.filters-crime');
const eventHub = document.querySelector('.container')

//////////////////////////////////////////////

eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
    eventHub.dispatchEvent(customEvent)
    };
});
/////////////////////////////////////////////

const render = convictionsCollection => {
    convictionElement.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(conviction => {
                    return `<option>${conviction.name}</option>`
                })
            }
        </select>
    `
};

export const ConvictionSelect = () => {
    getConviction()
        .then(() => {
            const convictions = useConviction()
            render(convictions)
        });
};
///////////////////////////////////////////////