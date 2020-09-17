import {getNotes, sliceNotes} from './NoteProvider.js';
import {htmlNotes} from './Note.js';
import { criminalReturn, getCriminals } from "../criminals/CriminalProvider.js";
const notesDisplayElement = document.querySelector("#notesContainer")
const eventHub = document.querySelector(".container")



const addNotesToDom = (notes, suspects) => {
  
   notesDisplayElement.innerHTML = notes.map((noteObject) => {
       noteObject.suspectObj = suspects.find(suspect => {
           return suspect.id === parseInt(noteObject.suspectId)
       })
       return htmlNotes(noteObject)
   })
};



export const noteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notes = sliceNotes();
        const suspects = criminalReturn()
        addNotesToDom(notes, suspects)
    })
}

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = sliceNotes()
    addNotesToDom(newNotes, criminalReturn())
});
