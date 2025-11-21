import React from "react";
import { useState, useEffect } from 'react'




import RowAttmpt from "./rowAttmpt";


type Props = {
    
   currInput: string[];
}

const Grid: React.FC<Props> = (props) => (
     <div>
                <ul>
                    <RowAttmpt currInput = {props.currInput}/>
                    <RowAttmpt currInput = {props.currInput}/>
                    <RowAttmpt currInput = {props.currInput}/>
                    <RowAttmpt currInput = {props.currInput}/>
                    <RowAttmpt currInput = {props.currInput}/>
                    <RowAttmpt currInput = {props.currInput}/>
                </ul>
    </div>
);
export default Grid;