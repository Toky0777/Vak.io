import { Link } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HorizontalLinearStepper from "./components/stepper";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import mlg from '../image/drapeau.png'
import two from '../image/2.png'

const Accueil = () => {
    return (
        <>
        <img className="absolute -z-10 w-full h-[100vh]" src={two} alt=""/>
        <NavBar/>
        <div className="flex w-full justify-center">
            <div className="flex flex-col gap-8 pt-48">
                <div className="inline-flex items-center py-6 px-10 cursor-default shadow-lg rounded-md bg-blue-50 gap-10 justify-center">
                    <button>
                        <AutoFixHighIcon fontSize="large" sx={{ color: "#0073cc" }}/>
                    </button>
                    <div className="flex flex-col">
                        <p>Mon premier texte</p>
                        <p className="text-xs">Let's Gooo</p>
                    </div>
                    <Link to="/Importer" className="p-2 bg-white rounded-md hover:translate-x-2 transition duration-300 cursor-pointer shadow-lg">
                        <ArrowForwardIosIcon fontSize="medium" sx={{ color: "#0073cc" }}/>
                    </Link>
                </div>
                <div className="inline-flex items-center py-6 px-10 cursor-default shadow-lg rounded-md bg-blue-50 gap-8 justify-center">
                    <button>
                        {/* <AutoFixHighIcon fontSize="large" sx={{ color: "#0073cc" }}/> */}
                        <img className="h-8" src={mlg} alt=""/>
                    </button>
                    <div className="flex flex-col">
                        <p>Traduction Malagasy</p>
                        <p className="text-xs">Let's Gooo</p>
                    </div>
                    <Link to="/Importer" className="p-2 bg-white rounded-md hover:translate-x-2 transition duration-300 cursor-pointer shadow-lg">
                        <ArrowForwardIosIcon fontSize="medium" sx={{ color: "#0073cc" }}/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Accueil;