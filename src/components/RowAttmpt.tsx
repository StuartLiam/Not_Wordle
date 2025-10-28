import React from "react";
import "./KeyBoard.css"

//import { type keyMark } from '../types/types';
import Tile from "./Tile";

function RowAttmpt() {
    return(
        <>
            <div>
                <Tile  state={0} mark={'A'}/>
                <Tile  state={0} mark={'A'}/>
                <Tile  state={0} mark={'A'}/>
                <Tile  state={0} mark={'A'}/>
                <Tile  state={0} mark={'A'}/>
            </div>
           
        </>
    );  

};

export default RowAttmpt;