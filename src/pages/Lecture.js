// import React from 'react'
import one from '../image/1.png'
import NavBar from "./components/NavBar";
import mlg from '../image/drapeau.png'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';


export default function Lecture() {
  const [text, setText] = useState(''); // Le texte à lire à haute voix
  const { speak, cancel } = useSpeechSynthesis();

  // Lire le texte
  const speakText = () => {
    speak({ text });
  };
  // Annuler 
  const pauseText = () => {
    cancel();
  };

  // Extraire du <p>
  const extractTextFromParagraph = () => {
    const paragraph = document.querySelector('p'); // Sélectionnez le premier paragraphe

    if (paragraph) {
      setText(paragraph.textContent);
    } else {
      setText('Aucun paragraphe trouvé.');
    }
  };

  return (
    <>
        <img className="absolute -z-10 w-full h-[100vh]" src={one} alt="" />
        <NavBar />
        <div className="flex w-full justify-center pt-10">
            <div className="flex flex-col items-center pt-6 w-[75vh] cursor-default shadow-lg rounded-md bg-blue-50 gap-4 justify-center p-5">
                <p className='hidden p-4 bg-slate-200 rounded'>"Vak.io" est une application web innovante qui combine la puissance de la vision par ordinateur, de la traduction multilingue,
                    de la synthèse vocale naturelle et de la mesure du temps de lecture pour offrir une expérience utilisateur unique. <mark className='bg-blue-300'>Son principal objectif est de simplifier la conversion d'images
                        en texte,</mark> la traduction de ce texte vers différentes langues, et la restitution vocale fluide. <br /><br />
                    L'une des fonctionnalités distinctives de Vak.io est sa capacité à traduire du texte en malgache, élargissant ainsi son utilité pour un public plus diversifié.
                    Les utilisateurs peuvent télécharger une image contenant du texte, et Vak.io la détectera automatiquement, la convertira en texte lisible, puis proposera une gamme de langues dans lesquelles le texte peut être traduit.
                    De plus, les utilisateurs peuvent écouter le texte traduit en utilisant une voix naturelle.
                </p>
                <p className='p-4 bg-slate-200 rounded'>{text}</p>
                <div className='inline-flex items-center justify-between w-full px-20'>
                    <div>
                        <button onClick={extractTextFromParagraph} className='bg-purple-500'>Extraire le texte du paragraphe</button>
                    </div>
                    <div className='inline-flex items-center gap-4'>
                        <button onClick={speakText} className='bg-red-500 px-3'>Play</button>
                        <button onClick={pauseText} className='bg-pink-500 px-3'>Annuler</button>
                    </div>
                    <div>
                        <img className="h-5 rounded-md" src={mlg} alt="" />
                    </div>
                </div>
                <Link to="/Importer" className='flex justify-end w-full text-blue-500 hover:text-blue-700'>
                Un autre texte ?
                </Link>
            </div>
        </div>
    </>
  )
}
