import {criminalList} from './criminals/CriminalList.js';
import {ConvictionSelect} from './convictions/ConvictionSelect.js';
import { OfficerList, OfficerDropList } from  "./officers/OfficerList.js";
import { NoteForm } from './notes/NoteForm.js';
import { noteList } from './notes/NoteList.js';
import { witnessRender } from './witnesses/Witness.js';





criminalList();
OfficerList();
ConvictionSelect();
OfficerDropList();
NoteForm();
noteList();
witnessRender();


