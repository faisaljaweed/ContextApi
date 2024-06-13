import { createContext } from "react";
import { Note } from "./types";
export interface IAppContext{
    notes:Note[];
    deleteNote:(noteId:number)=>void;
    toggleStarNote:(noteId:number)=>void;
}
export const AppContext=createContext<IAppContext>({
    notes:[],
    deleteNote:()=>{},
    toggleStarNote:()=>{}
});