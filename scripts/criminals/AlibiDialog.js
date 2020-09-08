import {criminalReturn} from './CriminalProvider.js';
const eventHub = document.querySelector("main");

eventHub.addEventListener("associatesClicked", event => {
    
    const targetCriminal = criminalReturn().find(criminal => {
        return criminal.id === parseInt(event.detail.chosenCriminal)
    }) 

    const alibiTarget = document.querySelector(`.alibiDialog--${targetCriminal.id}`);
    const strongTarget = document.querySelector("strong")
    if(alibiTarget.contains(strongTarget)){
        alibiTarget.innerHTML = ""
    }else {
        alibiTarget.innerHTML = `${
        targetCriminal.known_associates.map(associates => {
            return `
            <div class="alibiText">"${associates.alibi}" - <strong>${associates.name}</strong></div>
            `
        }).join("")
    }`
}
})

export const AlibiDialog = (id) => {
    return `
        <span class="alibiDialog--${id} alibi"></span>
    `
}