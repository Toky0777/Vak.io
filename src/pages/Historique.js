import React from 'react'
import one from '../image/1.png'
import NavBar from "./components/NavBar"
import text1 from "../image/text1.jpg";
import text2 from "../image/text2.png";
import text3 from "../image/text3.jpg";

export default function Historique() {
  return (
    <>
    <img class="absolute -z-10 w-full h-[100vh]" src={one} alt=""/>
    <NavBar/>
    <div className='flex justify-center'>
        <div className="flex w-[40%] shadow-lg bg-gray-800 bg-opacity-50 backdrop-blur rounded-md p-10 mt-10">
            <div className="flex flex-col gap-8 w-full">
                <p className='text-2xl text-white font-semibold'>Mes importations</p>
                <input type='search' placeholder='Recherche' className='p-2 rounded-md outline-none'>
                </input>
                <div className='flex flex-col gap-4'>
                    <div className="inline-flex items-center w-full px-10 py-3 cursor-default shadow-lg rounded-md bg-blue-50 gap-10">
                        <img className='h-24' src={text1} />
                        <div className="flex flex-col gap-3">
                            <p className='font-semibold text-xl'>Sans titre 01</p>
                            <p className="text-xs">Lundi 23 oct 2023</p>
                        </div>
                    </div>
                    <div className="inline-flex items-center w-full px-10 py-3 cursor-default shadow-lg rounded-md bg-blue-50 gap-10">
                        <img className='h-24' src={text2} />
                        <div className="flex flex-col gap-3">
                            <p className='font-semibold text-xl'>Sans titre 02</p>
                            <p className="text-xs">Jeudi 19 oct 2023</p>
                        </div>
                    </div>
                    <div className="inline-flex items-center w-full px-10 py-3 cursor-default shadow-lg rounded-md bg-blue-50 gap-10">
                        <img className='h-24' src={text3} />
                        <div className="flex flex-col gap-3">
                            <p className='font-semibold text-xl'>Sans titre 03</p>
                            <p className="text-xs">Vendredi 20 oct 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
