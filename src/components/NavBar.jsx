import React, {useState} from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
            <nav className="bg-white shadow-md w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/" className="text-2xl font-bold text-blue-500">LOGO</a>
                        </div>
    
                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-6">
                            <a href="/publier" className="text-gray-700 hover:text-blue-500 transition">Publier une annonce</a>
                            <a href="/connexion" className="text-gray-700 hover:text-blue-500 transition">Se connecter</a>
                            <a href="/en-savoir-plus" className="text-gray-700 hover:text-blue-500 transition">En savoir plus</a>
                        </div>
    
                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 hover:text-blue-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
    
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="/publier" className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition">Publier une annonce</a>
                            <a href="/connexion" className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition">Se connecter</a>
                            <a href="/en-savoir-plus" className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition">En savoir plus</a>
                        </div>
                    </div>
                )}
            </nav>
        );
    };
    

export default NavBar