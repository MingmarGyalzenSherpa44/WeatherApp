import { ChangeEvent } from "react";

export interface ITextInput {
    type:string,
    placeholder:string,
    required?:boolean,
    value:string,
    handleChange:(e:string)=>void,
}   