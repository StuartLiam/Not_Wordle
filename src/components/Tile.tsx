import React from 'react';
import "./Key.css"

import { type keyMark } from '../types/types';
import { type state } from '../types/types';

type Props = {
    
    state: state;
    mark: keyMark;
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