import { AlibiDialog } from "./AlibiDialog.js";

const eventHub = document.querySelector("main");

eventHub.addEventListener('click', event => {
    if(event.target.id.startsWith("associates--")){
        const [prefix, criminalId] = event.target.id.split("--")

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(alibiEvent);
    }
})

export const criminalHTML = (criminalObj) => {
    return `
        <section class = "criminal-${criminalObj.id}" id = "criminal">
            <div>
                <h2>${criminalObj.name}</h2>
                    <ul>
                        <li>Age: ${criminalObj.age}</li>
                        <li>Crime: ${criminalObj.conviction}</li>
                        <li>Term-Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</li>
                        <li>Term-End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</li>
                        <li>Arresting-Officer: ${criminalObj.arrestingOfficer}</li>
                        <button id="associates--${criminalObj.id}">Alibis</button>
                        ${AlibiDialog(criminalObj.id)}
                    </ul>
            </div>
        </section>
    `
};