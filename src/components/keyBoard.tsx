import React from "react";
import "./KeyBoard.css"

//import { type keyMark } from '../types/types';
import Key from "./Key";

function KeyBoard() {
    return(
        <>
            <div>
                <Key onClick={function (): void {} } state={0} mark={'Q'}/>
                <Key onClick={function (): void {} } state={0} mark={'W'}/>
                <Key onClick={function (): void {} } state={0} mark={'E'}/>
                <Key onClick={function (): void {} } state={0} mark={'R'}/>
                <Key onClick={function (): void {} } state={0} mark={'T'}/>
                <Key onClick={function (): void {} } state={0} mark={'Y'}/>
                <Key onClick={function (): void {} } state={0} mark={'U'}/>
                <Key onClick={function (): void {} } state={0} mark={'I'}/>
                <Key onClick={function (): void {} } state={0} mark={'O'}/>
                <Key onClick={function (): void {} } state={0} mark={'P'}/>
            </div>
            <div>
                <Key onClick={function (): void {} } state={0} mark={'A'}/>
                <Key onClick={function (): void {} } state={0} mark={'S'}/>
                <Key onClick={function (): void {} } state={0} mark={'D'}/>
                <Key onClick={function (): void {} } state={0} mark={'F'}/>
                <Key onClick={function (): void {} } state={0} mark={'G'}/>
                <Key onClick={function (): void {} } state={0} mark={'H'}/>
                <Key onClick={function (): void {} } state={0} mark={'J'}/>
                <Key onClick={function (): void {} } state={0} mark={'K'}/>
                <Key onClick={function (): void {} } state={0} mark={'L'}/>
            </div>
            <div>
                <Key onClick={function (): void {} } state={0} mark={'ENTER'}/>
                <Key onClick={function (): void {} } state={0} mark={'Z'}/>
                <Key onClick={function (): void {} } state={0} mark={'X'}/>
                <Key onClick={function (): void {} } state={0} mark={'C'}/>
                <Key onClick={function (): void {} } state={0} mark={'V'}/>
                <Key onClick={function (): void {} } state={0} mark={'B'}/>
                <Key onClick={function (): void {} } state={0} mark={'N'}/>
                <Key onClick={function (): void {} } state={0} mark={'M'}/>
                <Key onClick={function (): void {} } state={0} mark={'<='}/>
            </div>
        </>
    );  

};

export default KeyBoard;