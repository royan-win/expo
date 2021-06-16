import React from 'react';
import { AiFillAccountBook, AiFillCreditCard, AiFillHeart, AiFillHome, AiFillProfile, AiFillShopping, AiFillBank, AiOutlineGroup, AiOutlineExclamationCircle, AiOutlineLogout, AiTwotoneMessage } from 'react-icons/ai';
import { IoMdCamera } from 'react-icons/io';

function BottomNav() {
    return (
        <div className="w-full h-screen">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-gray-900 from-gray-200 to-gray-900 bg-gradient-to-b opacity-80 shadow">
                <div id="tabs" className="flex text-white justify-between">
                    <a href="/home" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillHome className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Lobby</span>
                    </a>
                    <a href="/auditorium" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillShopping className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Auditorium</span>
                    </a>
                    <a href="/exhibition" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillBank className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Exhibition Hall</span>
                    </a>
                    <a href="/networkinglounge" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiOutlineGroup className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Networking Lounge</span>
                    </a>
                    <a href="/photobooth" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <IoMdCamera className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Photobooth</span>
                    </a>
                    <a href="/infocenter" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiOutlineExclamationCircle className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Info Center</span>
                    </a>
                    <a href="/chat" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiTwotoneMessage className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Click Here (1358)</span>
                    </a>
                    <a href="/" className="w-full focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiOutlineLogout className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Logout</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default BottomNav
