function Register() {
    return (
        <div className="flex text-white bg-gray-900 items-center justify-items-center">
            <div className="ml-auto p-12 sm:p-12 mb-32 bg-gray-800 mr-12 sm:mr-24 mt-10">
                <div className="ml-6">
                    <h1 className="text-3xl font-bold text-blue-500 pb-2">#EXPO 2021</h1>
                    <h1 className="text-2xl pl-4 text-blue-400 font-semibold">Register Now</h1>
                </div>
                <div className="p-4 lg:w-80 sm:w-28">
                    <h1 className="text-lg pb-1">Name:</h1>
                    <input className="bg-transparent outline-none p-2" type="text" placeholder="Enter Full Name"/>

                    <h1 className="text-lg pb-1">Mobile Number:</h1>
                    <input className="outline-none bg-transparent p-2" type="text" placeholder="Enter Mobile Number"/>

                    <h1 className="text-lg pb-1">Email:</h1>
                    <input className="outline-none bg-transparent p-2" type="text" placeholder="Enter Email"/>

                    <h1 className="text-lg pb-1">Company Name:</h1>
                    <input className="outline-none bg-transparent p-2" type="text" placeholder="Enter Company Name"/>

                    <h1 className="text-lg pb-1">Designation:</h1>
                    <input className="outline-none bg-transparent p-2" type="text" placeholder="Enter Designation"/>
                </div>
                <div className="inline-block">
                    <button className="p-3 ml-16 bg-blue-600 rounded-2xl">Register</button>
                    <h1 href="#">Have An Account? Login</h1>
                </div>
            </div>
        </div>
    )
}

export default Register
