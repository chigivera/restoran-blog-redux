import React, { useState } from 'react';
import UpdatePassword from '../components/UpdatePassword';
import UpdateProfile from '../components/UpdateProfile';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user} = useSelector(store=> store.auth)
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const toggleShowPassword = () => {
        setShowPasswordModal(!showPasswordModal);
    };

    const toggleShowProfile = () => {
        setShowProfileModal(!showProfileModal);
    };
    return (
        <div className='flex justify-center text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600'>
            <div className="p-3 max-w-sm">
                <div className="flex items-center justify-between mb-2">
                    <a href="#">
                        <img className="w-20 h-20 rounded-full" src="https://thispersondoesnotexist.com/" alt="Jese Leos" />
                    </a>
                    <button onClick={toggleShowProfile}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                    {showProfileModal && <UpdateProfile toggleShowProfile={toggleShowProfile} />}

                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                    <a href="#">{user.username}</a>
                </p>
                <p className="mb-3 text-sm font-normal">
                    <a href="#" className="hover:underline">{user.bio}</a>
                </p>
                <div className="">
                    <label htmlFor="">Your Email</label>
                    <div className="flex">
                        <input type="email" value={user.email} className='h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="" id="" readOnly/>
                        <button className='ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Change</button>
                    </div>
                </div>
                <div className="">
                    <label htmlFor="">Your Username</label>
                    <div className="flex">
                        <input type="text" value={user.username} className='h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="" id="" readOnly/>
                        <button className='ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Change</button>
                    </div>
                </div>
                <div className="">
                    <label htmlFor="">Your Password</label>
                    <div className="flex">
                        <button onClick={toggleShowPassword} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                            Update Password
                        </button>
                    </div>
                </div>
                {showPasswordModal && <UpdatePassword toggleShowPassword={toggleShowPassword} />}
            </div>
        </div>
    );
};

export default Profile;
