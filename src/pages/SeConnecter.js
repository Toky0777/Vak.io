import { ButtonPrimary } from "../button/Boutons";
import ispm from "../image/ispm.png";
import logo from '../image/logoVak.io.png';

const SeConnecter = () => {
    return (
        <> 
        <div className="h-full w-full inline-flex items-center">
            <div className="inline-flex items-center justify-center w-full ">
                <div className="flex flex-col gap-16">
                    <div className="inline-flex items-center gap-8">
                        <img className="w-24 h-24" src={ispm}/>
                        <p className="text-2xl font-medium">Institut Supérieur <br/>Polytechnique de Madagascar</p>
                    </div>
                    <div className="inline-flex items-center gap-8">
                        <img className="w-24 h-24" src={logo}/>
                        <p className="text-2xl font-medium">Vak.io <br/>Projet 3.0</p>
                    </div>
                </div>
            </div>
            <div class="inline-flex items-center justify-center w-full">
                <form class="flex flex-col gap-8 bg-white rounded-md shadow-2xl p-8 w-[57vh]">
                    <div className="flex flex-col ">
                        <h1 class="text-gray-800 font-bold text-2xl">Bonjour :) </h1>
                        <p class="text-sm font-normal text-gray-600">Connectez-vous ici</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div class="flex items-center border-2 rounded-2xl px-3 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                    <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Adresse Mail" />
                        </div>
                        <div class="flex items-center border-2 rounded-2xl px-3 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <input class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Mot de passe" />
                        </div>
                    </div>
                    <ButtonPrimary name='Se connecter'/>
                    <div class="flex justify-between mt-4">
                                <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Mot de passe oublié ?</span>
                                <a href="#" class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Créer un compte</a>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default SeConnecter;