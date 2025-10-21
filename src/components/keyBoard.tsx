import React from "react";
import "./keyBoard.css"

//import { type keyMark } from '../types/types';
import Key from "./Key";

function keyBoard() {
    return(
        <>
            <Key onClick={function (): void {
            throw new Error('Function not implemented.')
        } } state={0} mark={'Q'}/>
        </>
    );  

};

export default keyBoard;