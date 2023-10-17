import React from 'react'
import { Link } from 'react-router-dom';
import one from '../image/1.png'
import NavBar from "./components/NavBar";
import { ButtonPrimary, ButtonSecondary } from '../button/Boutons';
import ImageUploader from './components/ImageUploader';

export default function Importer() {
  return (
    <>
        <img className="absolute -z-10 w-full h-[100vh]" src={one} alt=""/>
        <NavBar/>
        <div className="flex w-full justify-center pt-40">
            <div className="flex flex-col items-center py-6 w-[75vh] cursor-default shadow-lg rounded-md bg-blue-50 gap-10 justify-center">
              <p className='font-semibold'>Importer votre image ici</p>  
              <ImageUploader></ImageUploader>
              <div className='inlie-flex items-center gap-10'>
                <Link to="/Accueil">
                  <ButtonSecondary name='Annuler'/>
                </Link>
                <Link to="/Lecture">
                  <ButtonPrimary name='Synthétiser en voix'/>
                </Link>
              </div>
            </div>
        </div>
    </>
  )
}
