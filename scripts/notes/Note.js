export const htmlNotes = (notesObj) => {
    
       return `<div class="notes">
            ${
                notesObj.map(note => {
                return `<div class="noteList">
                        <li><strong>Text</strong>: ${note.noteText}</li>
                        <li><strong>Suspect</strong>: ${note.suspect}</li>
                        <li><strong>Date</strong>: ${new Date(note.date).toLocaleTimeString('en-US')}</li>
                    </div>`
                }).join("")
            }
        </div>`
}