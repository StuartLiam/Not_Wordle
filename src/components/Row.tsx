import React from "react";
import { useState, useEffect } from 'react'


import Tile from "./Tile";
import "./Row.css"

type Props = {
    
   currInput: string[];
}

const Row: React.FC<Props> = (props) => (
     <div className = "rowAtt">
                <Tile  state={0} mark={props.currInput[0]} index={0}/>
                <Tile  state={0} mark={props.currInput[1]} index={1}/>
                <Tile  state={0} mark={props.currInput[2]} index={2}/>
                <Tile  state={0} mark={props.currInput[3]} index={3}/>
                <Tile  state={0} mark={props.currInput[4]} index={4}/>
      </div>
);
export default Row;