import { useState } from 'react';
import './App.css'
import Notes from './components/Notes'
import { Note } from './types';
import { AppContext } from './AppContext';

function App() {
  const toggleStarNote=(noteId:number)=>{
    setNotes(
     notes.map((noteItem)=>{
      if(noteItem.id===noteId){
        return{
          ...noteItem,
          starred:!noteItem.starred
        }
      }
      return noteItem;
     })
    )
  }
  const deleteNote=(noteId:number)=>{
    setNotes(
      notes.filter((noteItem)=>{
        return(  
          noteItem.id!==noteId
        )
        
      })
    )
  }
  const [notes, setNotes] = useState<Note[]>([
    {
      text: "note 1",
      id: 1,
      starred: true,
    },
    {
      text: "note 2",
      id: 2,
      starred: false,
    },
    {
      text: "note 3",
      id: 3,
      starred: false,
    },
    {
      text: "note 4",
      id: 4,
      starred: false,
    },
    {
      text: "note 5",
      id: 5,
      starred: false,
    },
    {
      text: "note 6",
      id: 6,
      starred: false,
    },
  ]);
  return (
    <>
    <AppContext.Provider value={{
      notes,
      toggleStarNote,
      deleteNote,
    }}>
      <Notes />
    </AppContext.Provider>
    </>
  )
}

export default App
