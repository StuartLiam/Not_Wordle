import React from 'react';
import "./Key.css"

import { type keyMark } from '../types/types';
import { type state } from '../types/types';

type Props = {
    onClick: () => void;
    state: state;
    mark: keyMark;
}

const Component: React.FC<Props> = (props) => {
    const [currState, setCurrState] = React.useState(props.state)
    const nextState: state = ((currState + 1) % 4) as state

    return (
        <button
            className={`test key ` + currState}
            onClick={() => setCurrState(nextState)}
        >
            {props.mark}
        </button>
    )
};
export default Component;
