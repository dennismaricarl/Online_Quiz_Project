//categories
//click on category and built card quiz questions 

//submit - show the results 

import { useNavigate } from "react-router-dom";

const TakeAQuiz = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-row space-x-8">
        <button className="text-4xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300 w-72 h-20 flex items-center justify-center" onClick={() => navigate('/HTML')} > HTML</button>
        <button className="text-4xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300 w-72 h-20 flex items-center justify-center" onClick={() => navigate('/css')}>CSS</button>
        <button className="text-4xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300 w-72 h-20 flex items-center justify-center" onClick={() => navigate('/JavaScript')}>JavaScript</button>
        <button className="text-2xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300 w-72 h-20 flex items-center justify-center" onClick={() => navigate('/Advancedjs')}>Advanced JavaScript</button>
        <button className="text-2xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300 w-72 h-20 flex items-center justify-center" onClick={() => navigate('/womenincs')}>Women In Computer Science</button>
     
        </div>
    )
}

export default TakeAQuiz;