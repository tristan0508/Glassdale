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
                    </ul>
            </div>
        </section>
    `
};