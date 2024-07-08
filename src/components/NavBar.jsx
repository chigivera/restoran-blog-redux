import React, { useEffect, useState } from 'react';
import UserOptions from './userOptions';
import LoginOptions from './loginOptions';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // const { user } = useAuth();
    const {authenticated} = useSelector(store => store.auth)
    const handleToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <>
            <nav className="sticky bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RestoranBlog</span>
                    </a>
                    {authenticated ? (
                        <button 
                            type="button" 
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                            aria-controls="drawer-example"
                            aria-expanded={isDrawerOpen}
                            onClick={handleToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    ) : (
                        <LoginOptions />
                    )}
                </div>
            </nav>

            {authenticated && (
                <div id="drawer-example" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-80 dark:bg-gray-800`} aria-labelledby="drawer-label">
                    <UserOptions />
                </div>
            )}
        </>
    );
};

export default NavBar;
