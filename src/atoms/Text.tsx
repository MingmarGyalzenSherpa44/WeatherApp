import React from "react";
import { IText } from "../interfaces/IText";

const possibleType = ["h1","h2","h3","h4","h5","h6","p"];
export default function Text({type,value}:IText) {
 
    const Element = possibleType.includes(type)?type:"p";

    return React.createElement(Element,{},value)
}
