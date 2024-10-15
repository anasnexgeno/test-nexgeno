import React, { useState } from 'react';
import { FaSearch, FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };



    return (
        <>
            <header className="dm:overflow-hidden bg-[#FFFFFF]">
                <div className="bg-black">
                    <p className="text-center text-white">Black Friday. save up to 50%</p>
                </div>
                <div className="mx-20 dm:mb-24 -my-5">
                    <div className="flex-rows">
                        <div className="Macro-logo mt-10">
                            <img src="https://i.ibb.co/2qVrG9S/Macro-1-1.png" alt="" className="dm:w-40 dm:-ml-16" />
                        </div>
                        <div className="ml-[25rem] dm:mt-7 dm:-ml-8 dm:-mx-40 -mt-11">
                            <input className="search w-[50%] dm:w-[60%] bg-[#e6e3e3] p-2 rounded-l-3xl" type="text"
                                placeholder="What Are You Looking For?" />
                            <FaSearch size={25} className='bg-black text-white p-[8px] dm:ml-[17rem] -mt-10 ml-[390px] w-10 h-10 rounded-r-3xl' />
                        </div>
                    </div>
                    <div className="-mt-10 mr- dm:-mt-24 dm:-mr-16 text-right col">
                        <FaRegUser className='ml-[1055px] dm:ml-[196px]' />
                        <p className="relative -mt-5">Login | Registration</p>
                    </div>
                </div>

                <nav id="header" className="bg-gray-800 mt-14 px-4 py-0">
                    <div className="flex justify-between mx-20 dm:mx-0 items-center flex-wrap">
                        <div className="relative">
                            <button
                                className="bg-gray-700 text-white px-4 py-2 rounded inline-flex items-center w-full md:w-auto"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                Categories (See All)
                                <svg
                                    className="w-4 h-4 ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown menu */}
                            <ul
                                className={`dropdown-menu absolute bg-white text-gray-700 shadow-lg rounded mt-1 left-0 w-full md:w-auto md:right-0 ${dropdownOpen ? 'block' : 'hidden'
                                    }`}
                            >
                                <li><a className="block px-4 py-2 hover:bg-gray-100" href="#">Bridal Collection</a></li>
                                <li><a className="block px-4 py-2 hover:bg-gray-100" href="#">New Arrivals</a></li>
                                <li><a className="block px-4 py-2 hover:bg-gray-100" href="#">Casual Collection</a></li>
                                <li><a className="block px-4 py-2 hover:bg-gray-100" href="#">Diwali Collection</a></li>
                                <li><a className="block px-4 py-2 hover:bg-gray-100" href="#">Best Selling</a></li>
                                <li><a className="block px-4 py-2 hover:bg-gray-100" href="#">Featured Collection</a></li>
                            </ul>
                        </div>


                        <ul className="hidden md:flex space-x-6 justify-center -mt-4 md:mt-0">
                            <li className="nav-item">
                                <a className="text-white hover:text-gray-400" href="Home.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white hover:text-gray-400" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white hover:text-gray-400" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white hover:text-gray-400" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white hover:text-gray-400" href="#">Contacts</a>
                            </li>
                        </ul>

                        <div className="md:hidden block">
                            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center dm:hidden -mt-4 md:mt-0">
                            <i className="fa-solid fa-cart-shopping text-white text-xl mr-2"></i>
                            <p className="text-white">$0.00 (0 Items)</p>
                        </div>
                    </div>

                    <div id="mobile-menu" className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
                        <ul className="flex flex-col space-y-2">
                            <li><a className="text-white hover:text-gray-400" href="Home.html">Home</a></li>
                            <li><a className="text-white hover:text-gray-400" href="#">About Us</a></li>
                            <li><a className="text-white hover:text-gray-400" href="#">Shop</a></li>
                            <li><a className="text-white hover:text-gray-400" href="#">Products</a></li>
                            <li><a className="text-white hover:text-gray-400" href="#">Contacts</a></li>
                            <li>
                                <div className="flex items-center bg-gray-700 p-2 w-full px-20 md:mt-0">
                                    <i className="fa-solid fa-cart-shopping text-white text-xl mr-2"></i>
                                    <p className="text-white">$0.00 (0 Items)</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
