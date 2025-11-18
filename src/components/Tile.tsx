import React from 'react';
import "./Tile.css"


import { type state } from '../types/types';

type Props = {
    
    state: state;
    mark: string;
    index: number;
}

const Component: React.FC<Props> = (props) => (
    <button
        className="tile"
    >
        {props.mark}
    </button>
);
export default Component;