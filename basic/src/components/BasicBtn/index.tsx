import React, {useContext} from 'react'
import { CtxTheme } from '../../contexts'

interface PBtn {
    fn: () => void,
    className?: string,
    readonly disabled?: boolean,
    [propname:string]: any
}
interface Handle {
    get: () => string
}
export const BasicBtn = React.forwardRef<HTMLButtonElement,PBtn>(({ fn, disabled, className, children }, ref) => {
    const ctx_theme = useContext(CtxTheme)
    return <button
        ref={ref}
        onClick={fn}
        disabled={disabled}
        className={`baseBtn ${className ? className : ''} ${disabled ? 'btn-disabled' : ''}`}
        style={ctx_theme}
    >
        {children}
    </button>
})