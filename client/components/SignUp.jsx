const SignUp = () => {


    const userDetails = ["First Name", "Last Name", "Email", "Password", "Mobile Number", "Address"]
    return (
        <div className="flex flex-col items-center pt-40 h-screen">
            <div className="border-4 border-[#185519] rounded-3xl p-20 w-1/2">
                <div className="items-left">
                    <h2 className="text-5xl pb-10">Sign Up</h2>

                    {userDetails.map((detail) => (
                        <>
                            <fieldset className="border p-1 rounded-md border-black bg-white mb-10">
                                <legend className="text-xl">{`${detail}*`}</legend>
                                <input className="w-96 h-12 pl-5 focus:outline-none" type="text" />
                            </fieldset>
                        </>
                    ))}
                    <button className="p-4 text-white text-xl rounded-md bg-[#0A6847] hover:bg-[#d6cf4f] mt-10">
                        Continue
                    </button>
                </div>
            </div>
        </div>


    )
}

export default SignUp;