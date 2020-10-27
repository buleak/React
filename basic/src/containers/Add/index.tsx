import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import { BasicBtn } from '../../components';
import { useNum } from '../../customHooks';

export default () => {
    console.log('-');
    const ref = useRef<HTMLButtonElement>(null)
    const [count, setCount] = useState(0)
    const [num, action] = useNum([1, 2, 3])
    import('../../units/unit').then(({ add }) => {
        console.log('add :>> ', add(1, 2));
    })

    const addFn = () => setCount(count => ++count)
    const add = () => action('add', { count, tip: '提示' })
    const subtract = () => action('subtract', { count })

    useEffect(() => {
        console.log('=');
        ref.current?.focus()
    }, [])

    return (
        <div>
            <h1>{count}</h1>
            <h2>{num}</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <BasicBtn ref={ref} fn={addFn}>Click11</BasicBtn>
                <BasicBtn ref={ref} fn={addFn} disabled>Click12</BasicBtn>
                <BasicBtn fn={add}>Click21</BasicBtn>
                <BasicBtn fn={subtract}>Click22</BasicBtn>
            </Suspense>
        </div>
    )
}