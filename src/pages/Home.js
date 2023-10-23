import logo from '../image/logoVak.io.png';
import fond from '../image/fond.jpg'
import fond2 from '../image/fond2 - Copie.jpg'
import { ButtonPrimary, ButtonSecondaryWhite } from '../button/Boutons';
import { Link } from 'react-router-dom';

export function Home () {
    return (
        <> 
        <div className=" w-screen h-full">
            <img className="absolute -z-10 w-full h-[100vh]" src={fond} alt=""/>
            <header className="absolute top-0 bg-transparent h-[20%] w-full">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-white">A propos</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Equipe</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Abonnement</a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/SeConnecter" className="text-sm font-semibold leading-6 text-white">Se connecter <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    <div className="fixed inset-0 z-50"></div>
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Vak.io</span>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">A propos</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Equipe</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Abonnement</a>
                                </div>
                                <div className="py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">Se connecter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className='inline-flex items-center w-full h-full'>
                <div className='w-[50%] pl-24 flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Vak.io</h1>
                        <p className="text-lg leading-8 text-white">Application de synthèse vocale Malagasy alimentée par une intelligence artificielle. <br/> Transformer facilement votre texte en une voix naturelle.</p>
                    </div>
                    <div className="flex items-center  gap-x-6">
                        <Link to="/SeConnecter">
                            <ButtonPrimary name='Commencer ici'/>
                        </Link>
                        <ButtonSecondaryWhite name="Plus d'information"/>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default Home;