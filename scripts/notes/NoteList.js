import {getNotes, sliceNotes} from './NoteProvider.js';
import {htmlNotes} from './Note.js';
import { criminalReturn, getCriminals } from "../criminals/CriminalProvider.js";
import { deleteNote } from "./NoteProvider.js";
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


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

       deleteNote(id).then(
           () => {
               const updatedNotes = sliceNotes()
               const criminals = criminalReturn()
               noteList(updatedNotes, criminals)
           }
       )
    }
})