import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory();
    
    return (
        <div className="flex p-5 text-white bg-back_img items-center justify-items-center">
            <div className="relative z-0 w-96 ml-40 mb-40">
                <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                >
                    <div>
                        <img className="rounded-full w-32 h-96" loading="lazy" src="https://ymvirtual.s3.amazonaws.com/media/box-03_SmMKZar.jpg" alt=""/>
                    </div>

                    <div>
                        <img className="rounded-full w-32 h-96" loading="lazy" src="https://ymvirtual.s3.amazonaws.com/media/box-02_Ybl88WU.jpg" alt=""/>
                    </div>

                    <div>
                        <img className="rounded-full w-32 h-96" loading="lazy" src="https://ymvirtual.s3.amazonaws.com/media/box-04_RBWX32s.jpg" alt=""/>
                    </div>
                </Carousel>
            </div>
            <div className="ml-auto p-8 pl-24 pr-28 mb-32 bg-gray-800 bg-opacity-70 mr-12 sm:mr-16 mt-7">
                <div className="ml-6">
                    <h1 className="text-3xl font-bold text-blue-500 pb-2">#EXPO 2021</h1>
                    <h1 className="text-2xl pl-4 text-blue-400 font-semibold">Register Now</h1>
                </div>
                <div className="p-4 lg:w-80 sm:w-28">
                    <h1 className="text-lg pb-1">Name:</h1>
                    <input className="bg-gray-700 bg-opacity-40 rounded-xl w-80 outline-none p-2 m-1" type="text" placeholder="Enter Full Name"/>

                    <h1 className="text-lg pb-1">Mobile Number:</h1>
                    <input className="outline-none bg-gray-700 bg-opacity-40 rounded-xl w-80 p-2 m-1" type="text" placeholder="Enter Mobile Number"/>

                    <h1 className="text-lg pb-1">Email:</h1>
                    <input className="outline-none bg-gray-700 bg-opacity-40 rounded-xl w-80 p-2 m-1" type="text" placeholder="Enter Email"/>

                    <h1 className="text-lg pb-1">Company Name:</h1>
                    <input className="outline-none bg-gray-700 bg-opacity-40 rounded-xl w-80 p-2 m-1" type="text" placeholder="Enter Company Name"/>

                    <h1 className="text-lg pb-1">Designation:</h1>
                    <input className="outline-none bg-gray-700 bg-opacity-40 rounded-xl w-80 p-2 m-1" type="text" placeholder="Enter Designation"/>
                </div>
                <div className="inline-block">
                    <button onClick={() => history.push("/home")} className="p-3 ml-16 bg-blue-600 rounded-2xl">Register</button>
                    <h1 href="#">Have An Account? Login</h1>
                </div>
            </div>
        </div>
    )
}

export default Register
