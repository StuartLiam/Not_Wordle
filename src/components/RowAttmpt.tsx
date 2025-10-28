import React from "react";
import "./KeyBoard.css"

//import { type keyMark } from '../types/types';
import Tile from "./Tile";

function RowAttmpt() {
    return(
        <>
            <div>
                <Tile  state={0} mark={'A'} index={0}/>
                <Tile  state={0} mark={'A'} index={1}/>
                <Tile  state={0} mark={'A'} index={2}/>
                <Tile  state={0} mark={'A'} index={3}/>
                <Tile  state={0} mark={'A'} index={4}/>
            </div>
           
        </>
    );  

};

export default RowAttmpt;