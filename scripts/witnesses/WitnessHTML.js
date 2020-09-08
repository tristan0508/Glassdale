export const WitnessHTML = (witnessObj) => {
    return `
        ${
            witnessObj.map(witness => {
                return `
                <div class="witness--${witness.id} witness">
                    <h3>${witness.name}</h3>
                    <p><strong>Statement: </strong>${witness.statements}</p>
                </div>
                `
            }).join("")
        }
    `
}

