import React from "react";
import "./KeyBoard.css"

//import { type keyMark } from '../types/types';
import Key from "./Key";
import type { state } from "../types/types";

function KeyBoard({states} : {states: Map<string, state>}) {
    return(
        <div className="keyBoard">
            <div className="keyrow">
                <Key onClick={function (): void {} } state={states.get("Q")!} mark={'Q'}/>
                <Key onClick={function (): void {} } state={states.get("W")!} mark={'W'}/>
                <Key onClick={function (): void {} } state={states.get("E")!} mark={'E'}/>
                <Key onClick={function (): void {} } state={states.get("R")!} mark={'R'}/>
                <Key onClick={function (): void {} } state={states.get("T")!} mark={'T'}/>
                <Key onClick={function (): void {} } state={states.get("Y")!} mark={'Y'}/>
                <Key onClick={function (): void {} } state={states.get("U")!} mark={'U'}/>
                <Key onClick={function (): void {} } state={states.get("I")!} mark={'I'}/>
                <Key onClick={function (): void {} } state={states.get("O")!} mark={'O'}/>
                <Key onClick={function (): void {} } state={states.get("P")!} mark={'P'}/>
            </div>
            <div className="keyrow">
                <Key onClick={function (): void {} } state={states.get("A")!} mark={'A'}/>
                <Key onClick={function (): void {} } state={states.get("S")!} mark={'S'}/>
                <Key onClick={function (): void {} } state={states.get("D")!} mark={'D'}/>
                <Key onClick={function (): void {} } state={states.get("F")!} mark={'F'}/>
                <Key onClick={function (): void {} } state={states.get("G")!} mark={'G'}/>
                <Key onClick={function (): void {} } state={states.get("H")!} mark={'H'}/>
                <Key onClick={function (): void {} } state={states.get("J")!} mark={'J'}/>
                <Key onClick={function (): void {} } state={states.get("K")!} mark={'K'}/>
                <Key onClick={function (): void {} } state={states.get("L")!} mark={'L'}/>
            </div>
            <div className="keyrow">
                <Key onClick={function (): void {} } state={0} mark={'ENTER'}/>
                <Key onClick={function (): void {} } state={states.get("Z")!} mark={'Z'}/>
                <Key onClick={function (): void {} } state={states.get("X")!} mark={'X'}/>
                <Key onClick={function (): void {} } state={states.get("C")!} mark={'C'}/>
                <Key onClick={function (): void {} } state={states.get("V")!} mark={'V'}/>
                <Key onClick={function (): void {} } state={states.get("B")!} mark={'B'}/>
                <Key onClick={function (): void {} } state={states.get("N")!} mark={'N'}/>
                <Key onClick={function (): void {} } state={states.get("M")!} mark={'M'}/>
                <Key onClick={function (): void {} } state={0} mark={'<='}/>
            </div>
        </div>
    );  

};

export default KeyBoard;
