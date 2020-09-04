import {getNotes, sliceNotes} from './NoteProvider.js';
import {htmlNotes} from './Note.js';
const notesDisplayElement = document.querySelector("#notesContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("noteStateChanged", () => {
    noteList();
});



export const noteList = () => {
    getNotes()
    .then(() => {
        const notes = sliceNotes();
        addNotesToDom(notes);
        });

};

const addNotesToDom = (notesPassed) => {
    let HTML = htmlNotes(notesPassed);
    notesDisplayElement.innerHTML = HTML;
};