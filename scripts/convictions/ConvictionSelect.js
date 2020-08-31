import {useConviction, getConviction} from './ConvictionProvider.js';
const convictionElement = document.querySelector('.filters-crime');

export const ConvictionSelect = () => {
    getConviction()
    .then(() => {
        const convictions = useConviction();
        convictionElement.innerHTML =
    `<select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
            convictions.map(conviction => {
                return `<option>${conviction.name}</option>`
            })
        };
    </select>`
});
};
