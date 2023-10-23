import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import one from '../image/1.png'
import NavBar from "./components/NavBar";
import { ButtonPrimary, ButtonSecondary } from '../button/Boutons';
import ImageUploader from './components/ImageUploader';
import axios from 'axios';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { Height } from '@mui/icons-material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import mlg from '../image/drapeau.png'

export default function Importer() {
  const [imageUploaded, setImageUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOK, setIsOK] = useState(false);
  const [dataToSend, setDataToSend] = useState('');
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const handleImageUpload = (image) => {
    setImageUpload(image);
  }

  const reset = () => {
    setIsOK(false);
    setImageUpload(false);
    setDataToSend('');
  };

  const sendImageToServer = async () => {
    const image = imageUploaded;
    console.log('CLECKCLEKCLECKE', image);
    if (!image) return;
    const data = { image }
    // send the image to the server here
    try {
      setIsLoading(true);
      axios.post('http://localhost:9000/vakio/traitement', data ).then((response) => {
        console.log('resultatatta', response);
        setDataToSend(response.data);
        console.log(dataToSend)
        setIsOK(true);
        setIsLoading(false);
    }); 
    } catch (e) {
      // swal fire error and show error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Une erreur est survenue lors de l\'envoi de l\'image',
        timer: 2000
      });
    }
  }
  
  return (
    <>
        <img className="absolute -z-10 w-full h-[100vh]" src={one} alt=""/>
        <NavBar/>
        {!isOK && 
                  <div className="flex w-full justify-center pt-40">
                  <div className="flex flex-col items-center py-6 w-[75vh] cursor-default shadow-lg rounded-md bg-blue-50 gap-10 justify-center">
                    <p className='font-semibold'>Importer votre texte</p>  
                    <ImageUploader onImageUpload={handleImageUpload} ></ImageUploader>
                    {!isLoading && <div className='inline-flex items-center gap-10'>
                      <Link to="/Accueil">
                        <ButtonSecondary name='Annuler'/>
                      </Link>
                      { !isOK && 
                        <ButtonPrimary id='submit' disabled={!imageUploaded} onClick={sendImageToServer}  name='Traiter'/> 
                      }
                      { isOK && 
                      <Link to={{ pathname: '/Lecture', state: { data: dataToSend } }}>
                        <ButtonPrimary id='submit' disabled={!imageUploaded} name='Voir le résultat'/>
                      </Link>
                      }
                    </div>}
                    { isLoading && <div className='center'> Chargement en cours </div> }
                  </div>
              </div> 
        }

        { isOK &&
                  <div className="flex w-full justify-center pt-10">
                  <div className="flex flex-col items-center pt-6 w-[75vh] cursor-default shadow-lg rounded-md bg-blue-50 gap-4 justify-center p-5">
                      <p className='p-4 bg-slate-200 rounded'> 
                        {dataToSend}
                      </p>
                      <Box sx={{ width: '90%' }} className="pt-5">
                          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                      </Box>
                      <div className='inline-flex items-center justify-between w-full px-20'>
                          <div>
                              <VolumeDownIcon color='primary'/>
                          </div>
                          <div className='inline-flex items-center gap-4'>
                              <FastRewindIcon color='primary'/>
                              <PlayCircleIcon fontSize='large' color='primary'/>
                              <FastForwardIcon color='primary'/>
                          </div>
                          <div>
                              <img className="h-5 rounded-md" src={mlg} alt=""/>
                          </div>
                      </div>
                      <Link to="/Importer" onClick={reset} className='flex justify-end w-full text-blue-500 hover:text-blue-700'>
                        Un autre texte ?
                      </Link>
                  </div>
              </div>
        }
    </>
  )
}
