import logo from '../image/logoVak.io.png';
import fond from '../image/fond.jpg'
import fond2 from '../image/fond2 - Copie.jpg'
import { ButtonPrimary, ButtonSecondaryWhite } from '../button/Boutons';

export function Home () {
    return (
        <> 
        <div class=" w-screen h-full">
            <img class="absolute -z-10 w-full h-[100vh]" src={fond} alt=""/>
            <header class="absolute top-0 bg-transparent h-[20%] w-full">
                <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div class="flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto" src={logo} alt="" />
                        </a>
                    </div>
                    <div class="flex lg:hidden">
                        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div class="hidden lg:flex lg:gap-x-12">
                        <a href="#" class="text-sm font-semibold leading-6 text-white">A propos</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-white">Equipe</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-white">Abonnement</a>
                    </div>
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" class="text-sm font-semibold leading-6 text-white">Se connecter <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </nav>
                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                <div class="lg:hidden" role="dialog" aria-modal="true">
                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    <div class="fixed inset-0 z-50"></div>
                    <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-center justify-between">
                            <a href="#" class="-m-1.5 p-1.5">
                                <span class="sr-only">Vak.io</span>
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6 flow-root">
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-2 py-6">
                                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">A propos</a>
                                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Equipe</a>
                                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Abonnement</a>
                                </div>
                                <div class="py-6">
                                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">Se connecter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className='inline-flex items-center w-full h-full'>
                <div className='w-[50%] pl-24 flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Vak.io</h1>
                        <p class="text-lg leading-8 text-white">Application de synthèse vocale Malagasy alimentée par une intelligence artificielle. <br/> Transformer facilement votre texte en une voix naturelle.</p>
                    </div>
                    <div class="flex items-center  gap-x-6">
                        <ButtonPrimary name='Commencer ici'/>
                        <ButtonSecondaryWhite name="Plus d'information"/>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default Home;