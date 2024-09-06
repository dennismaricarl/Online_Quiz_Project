const Login = () => {
    return (
        <div className="flex flex-col py-10 items-center pt-40 h-screen">
            <div className="border border-gray-400 bg-white rounded-3xl p-20 w-1/2">
                <div className="items-left">
                    <h2 className="text-5xl pb-5">Log In</h2>
                    <fieldset className="border p-1 rounded-md border-black mb-5">
                        <legend className="text-xl">Email*</legend>
                        <input className="w-96 h-10 pl-2 focus:outline-none" type="email" />
                    </fieldset>


                    <fieldset className="border p-1 rounded-md border-black ">
                        <legend className="text-xl">Password*</legend>
                        <input className="w-96 h-10 pl-2 focus:outline-none" type="password" />
                    </fieldset>

                    <button className="p-4 rounded-md bg-yellow-200 mt-10">CONTINUE</button>
                </div>
            </div>
        </div>

    )
}

export default Login