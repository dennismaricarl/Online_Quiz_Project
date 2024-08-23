//categories
//click on category and built card quiz questions 

//submit - show the results 

import { useNavigate } from "react-router-dom";

const TakeAQuiz = () => {
    const navigate = useNavigate()

    let style = "text-3xl text-white border-solid border-8 border-gray-400 rounded-md bg-gray-400 hover:bg-gray-300 hover:border-gray-300 w-72 h-20 flex items-center justify-center py-4 px-20"
    return (

        <div className="h-screen flex flex-col space-y-8 items-center justify-center">
        <h1 className="text-6xl text-stone-100 py-6 decoration-8">CATEGORIES</h1>
            <button className={style} onClick={() => navigate('/HTML')} > HTML</button>
            <button className={style} onClick={() => navigate('/css')}>CSS</button>
            <button className={style} onClick={() => navigate('/JavaScript')}>JavaScript</button>
            <button className={style} onClick={() => navigate('/Advancedjs')}>Advanced JS</button>
            <button className={style} onClick={() => navigate('/womenincs')}>Women In CS</button>
        </div>
    )
}

export default TakeAQuiz;