import React from "react";
import { useState, useEffect } from 'react'
import "./KeyBoard.css"

//import { type keyMark } from '../types/types';
import Tile from "./Tile";
import RowAttmpt from "./rowAttmpt";

/*

function RowAttmpt() {

    //const [currInput, setCurrInput] = useState<string[]>(["","","","",""]);

   //function handleCurrInputChange(e){
        //setCurrInput(e.target.value)
   // }

    //useEffect(() => {

   // });

    return(
        <>
            <div>
                <Tile  state={0} mark={' '} index={0}/>
                <Tile  state={0} mark={' '} index={1}/>
                <Tile  state={0} mark={' '} index={2}/>
                <Tile  state={0} mark={' '} index={3}/>
                <Tile  state={0} mark={' '} index={4}/>
            </div>
           
        </>
    );  

};
*/
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