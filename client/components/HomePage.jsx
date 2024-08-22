import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen bg-gray-500 flex items-center justify-center space-x-8'>
        <h1 className="text-6xl text-white">Welcome to the <span className="text-yellow-100 ">Online Quiz!</span></h1>

        <div className="flex flex-col space-y-6">
        <button className="text-4xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300" onClick={() => navigate('/takeAquiz')}> Take a Quiz</button>
        <button className="text-4xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300" onClick={() => navigate('/makeAquiz')}>Make A Quiz</button>
        </div>

        </div>
    )
}

export default HomePage;