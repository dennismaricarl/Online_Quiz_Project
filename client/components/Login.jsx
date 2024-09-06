const Login = () => {

    return (
        <div className="flex flex-col items-center pt-40 h-screen">
            <div className="border-4 border-[#185519] rounded-3xl p-20 w-1/2">
                <div className="items-left">
                    <h2 className="text-5xl pb-10">Log In</h2>

                    <fieldset className="border p-1 rounded-md border-black bg-white mb-10">
                        <legend className="text-xl">Email*</legend>
                        <input className="w-96 h-12 pl-5 focus:outline-none" type="email" />
                    </fieldset>

                    <fieldset className="border p-1 rounded-md border-black bg-white mb-5">
                        <legend className="text-xl">Password*</legend>
                        <input className="w-96 h-12 pl-5 focus:outline-none" type="password" />
                    </fieldset>



                    <h1 className="pt-10 text-xl">New to Online Quiz? <button className="bg-yellow-300 hover:bg-[#65c565] rounded-lg px-8" onClick={() => Navigate('/signUp')}>CREATE AN ACCOUNT</button></h1> 

                    <button className="p-4 text-white text-xl rounded-md bg-[#185519] hover:bg-[#d6cf4f] mt-10">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
