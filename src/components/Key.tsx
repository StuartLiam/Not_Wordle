import React from 'react';
import "./Key.css"

import { type keyMark } from '../types/types';
import { type state } from '../types/types';

type Props = {
    onClick: () => void;
    state: state;
    mark: keyMark;
}

const Component: React.FC<Props> = (props) => (
    <button
        className="key"
        onClick={props.onClick}
    >
        {props.mark}
    </button>
);
export default Component;