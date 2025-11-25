import React from "react";
import { useState, useEffect } from 'react'




import Row from "./Row";


type Props = {
    
   currInput: string[];
}

const Grid: React.FC<Props> = (props) => (
     <div>
                <ul>
                    <Row currInput = {props.currInput}/>
                    <Row currInput = {props.currInput}/>
                    <Row currInput = {props.currInput}/>
                    <Row currInput = {props.currInput}/>
                    <Row currInput = {props.currInput}/>
                    <Row currInput = {props.currInput}/>
                </ul>
    </div>
);
export default Grid;