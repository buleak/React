import {useState} from 'react';

// 自定义钩子函数
interface Arg {
    tip?: string,
    count: number,
    [key: string]: any
}
type UseNum = (init: number | number[]) => [number, ((type: string, args: Arg) => void)]
export const useNum: UseNum = (init) => {
    console.log('---');
    let initNum: number = typeof init === 'number' ? init : init.reduce((current, next) => {
        return current + next
    })
    const [num, setNum] = useState(initNum)
    const add = ({ tip, count, hi }: Arg) => {
        if (hi === 'hi') {
            return alert('hi')
        }
        setNum(num => {
            console.log(`${tip}: ${num + count}`);
            return num + count
        })
    }
    const subtract = ({ count }: Arg) => {
        setNum(num => num > 0 ? --num : count)
    }
    const action = (type: string, args: Arg) => {
        switch (type) {
            case 'add':
                add(args)
                break;
            case 'subtract':
                subtract(args)
                break;
            default:
                alert('error: unknown action type')
                break;
        }
    }
    return [num, action]
}


// 自定义 useReducer
type ActionProp = { type: string, args?: any }
type Reduxer<T> = (state:T, action:ActionProp) => T
export const useRedux = <T>(reduxer:Reduxer<T>, init:T) => {
    const [state, setState] = useState(init);
    const dispatch = (action:ActionProp) => {
        const newState = reduxer(state, action)
        setState(newState)
    }
    return [state, dispatch]
}

export const reduce: Reduxer<string> = (state, action) => {
    switch (action.type) {
        case 'add':
            return `add ${state}, ${action?.args}`
        case 'subtract':
            return `subtract ${state}, ${action?.args}`
        default:
            return `unknown type: ${action.type}`
    }
}