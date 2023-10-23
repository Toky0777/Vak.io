import React from 'react'

export function ButtonPrimary(props){
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }
    return (
        <button disabled={props.disabled} onClick={handleClick} className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{props.name} →</button>
    )
}

export function ButtonSecondary(props){
    return (
        <button href="#" className="text-sm font-semibold text-gray-600 hover:text-white hover:bg-gray-500 leading-6 border px-3.5 py-2.5 rounded-md">{props.name}<span aria-hidden="true"></span></button>
    )
}
export function ButtonSecondaryWhite(props){
    return (
        <button href="#" className="text-sm font-semibold text-white leading-6 border px-3.5 py-2.5 rounded-md">{props.name}<span aria-hidden="true">→</span></button>
    )
}

export function Boutons() {
  return (
    <div>Boutons</div>
  )
}

const toExport = {Boutons,ButtonPrimary,ButtonSecondary,ButtonSecondaryWhite};
export default toExport;