import React from 'react';

function Home() {
    return (
        <div className="overflow-hidden h-screen overflow-y-hidden w-full">
            <img className="h-screen z-0 w-full" src="Mainhall.png" alt=""/>
            <div className="-mt-14 flex h-3 w-3">
                <span className="absolute animate-ping h-3 w-3 inline-flex opacity-75 z-10 -mt-96 ml-36 rounded-full bg-green-300"></span>
                <span className="absolute inline-flex z-10 h-3 w-3 -mt-96 ml-36 rounded-full bg-green-600"></span>
            </div>
            <div className="-mt-16 flex h-3 w-3">
                <span className="absolute animate-ping h-3 w-3 inline-flex opacity-75 z-10 -mt-72 ml-80 rounded-full bg-green-300"></span>
                <span className="absolute inline-flex z-10 h-3 w-3 -m-72 ml-80 rounded-full bg-green-600"></span>
            </div>
            <div className="-mt-16 ml-28 flex h-3 w-3">
                <span className="absolute animate-ping h-3 w-3 inline-flex opacity-75 z-10 -mt-60 ml-96 rounded-full bg-green-300"></span>
                <span className="absolute inline-flex z-10 h-3 w-3 -mt-60 ml-96 rounded-full bg-green-600"></span>
            </div>
            <div className="ml-16 flex h-3 w-3">
                <span className="absolute animate-ping h-3 w-3 inline-flex opacity-75 z-10 -mt-1 ml-96 rounded-full bg-green-300"></span>
                <span className="absolute inline-flex z-10 h-3 w-3 -mt-1 ml-96 rounded-full bg-green-600"></span>
            </div>
            <div className="ml-8">
                <div className="-mt-16 ml-96 flex h-3 w-3">
                    <span className="absolute animate-ping h-3 w-3 inline-flex opacity-75 z-10 -mt-60 ml-96 rounded-full bg-green-300"></span>
                    <span className="absolute inline-flex z-10 h-3 w-3 -mt-60 ml-96 rounded-full bg-green-600"></span>
                </div>
            </div>
            <div className="ml-72 -mt-80 absolute z-10">
                <iframe
                className="ml-3 -mt-14"
                    width="298"
                    height="140"
                    src="https://www.youtube.com/embed/z1yk07feldM"
                    frameborder="0"
                    allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default Home
