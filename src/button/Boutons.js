import React from 'react'

export function ButtonPrimary(props){
    return (
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{props.name} →</a>
    )
}

export function ButtonSecondary(props){
    return (
        <a href="#" class="text-sm font-semibold text-gray-600 hover:text-white hover:bg-gray-500 leading-6 border px-3.5 py-2.5 rounded-md">{props.name}<span aria-hidden="true"></span></a>
    )
}
export function ButtonSecondaryWhite(props){
    return (
        <a href="#" class="text-sm font-semibold text-white leading-6 border px-3.5 py-2.5 rounded-md">{props.name}<span aria-hidden="true">→</span></a>
    )
}

export function Boutons() {
  return (
    <div>Boutons</div>
  )
}

export default {Boutons,ButtonPrimary,ButtonSecondary,ButtonSecondaryWhite};