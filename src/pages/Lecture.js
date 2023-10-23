import React from 'react'
import one from '../image/1.png'
import NavBar from "./components/NavBar";
import { ButtonPrimary, ButtonSecondary } from '../button/Boutons';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { Height } from '@mui/icons-material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import mlg from '../image/drapeau.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function Lecture(props) {
  const location = useLocation();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  console.log('LOGADYTIOPO', location)
  const dataReceived = location.state.data;

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
        <img className="absolute -z-10 w-full h-[100vh]" src={one} alt=""/>
        <NavBar/>
        <div className="flex w-full justify-center pt-10">
            <div className="flex flex-col items-center pt-6 w-[75vh] cursor-default shadow-lg rounded-md bg-blue-50 gap-4 justify-center p-5">
                <p className='p-4 bg-slate-200 rounded'> 
                  {dataReceived}
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
                <Link to="/Importer" className='flex justify-end w-full text-blue-500 hover:text-blue-700'>
                  Un autre texte ?
                </Link>
            </div>
        </div>
    </>
  )
}
