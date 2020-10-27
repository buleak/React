import * as React from 'react';
import { useState, useEffect } from 'react';

import {BasicBtn} from '../../components'

import { Theme } from '../../configs'
import { CtxTheme } from '../../contexts'

export interface HokProps {
    str: string,
    age: number,
    growth: () => void
}

const Hok: React.FC<HokProps> = ({ str, age, growth }) => {
    return (
        <div>
            <div>{str}</div>
            <div>{age}</div>
            <button onClick={growth}>Growth</button>
            <h1>-----------------------------------------------</h1>
            <h2>useState</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useReducer</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useEffect</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useLayoutEffect</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useContext</h2>
            <CtxTheme.Provider value={Theme.dark}>
                <BasicBtn fn={growth} disabled>展示组件</BasicBtn>
            </CtxTheme.Provider>
            <h1>-----------------------------------------------</h1>
            <h2>useRef</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useMemo</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useCallback</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useImperativeHandle</h2>
            <h1>-----------------------------------------------</h1>
            <h2>useDebugvalue</h2>
        </div>
    );
}

export default Hok;