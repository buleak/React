type Add = (a: number, b: number) => number
export const add: Add = (a, b) => {
    return a + b
}

type IsEqual = (x:any, y:any) => boolean
export const isEqual: IsEqual = (x, y) => {
    // 相等 || 0 === -0
    if (x === y) {
        // 1. x === y !== 0 ==> true
        // 2. x === y === 0 ==> 1/x === 1/y
        // ==> 1/0 =>interify, 1/-0 => -interify, interify !== -interify ==> false
        return x !== 0 || 1 / x === 1 / y
    } 
    // 不相等 || NaN !== NaN
    else {
        // 4. x !== y === NaN, 只有 NaN不等于自身 ==> true
        // 5. 其余的 x等于自身 ==> false
        return x !== x && y !== y
    }
}

export const reverseNum = (num:number):string => {
    return num.toString().split('').reverse().join('')
}