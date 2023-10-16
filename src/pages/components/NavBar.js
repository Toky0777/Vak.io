import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <> 
        <header>
            <div className="py-4 px-2 lg:mx-4 xl:mx-12 ">
                <div className="">
                    <nav className="flex items-center justify-between flex-wrap  ">
                        <div className="block lg:hidden">
                            <button
                                className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                                <svg className="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div id="main-nav" className="w-full flex-grow lg:flex items-center lg:w-auto hidden  ">
                            <div className="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                                <Link to="/Accueil"
                                    className="block lg:inline-block text-md font-semibold  text-white sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    Accueil
                                </Link>
                                <Link to="/Importer"
                                    className="block lg:inline-block text-md font-semibold  text-white  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    Importer
                                </Link>
                                <Link to="/Historique"
                                    className="block lg:inline-block text-md font-semibold  text-white  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    Historique
                                </Link>
                                {/* <Link to="/Accueil"
                                    className="block lg:inline-block text-md font-semibold  text-white  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    A propos
                                </Link>
                                <Link to="/Accueil"
                                    className="block lg:inline-block text-md font-semibold  text-white  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    COMING SOON
                                </Link> */}
                            </div>
                        </div>
                        <div className="inline-flex items-center">
                            <Link to="/" className="text-md text-white font-semibold hover:text-orange-500">
                                Deconnecter
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}


export default NavBar;