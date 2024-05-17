//categories
//click on category and built card quiz questions 

//submit - show the results 

import { useNavigate } from "react-router-dom";

const TakeAQuiz = () => {
    const navigate = useNavigate()

    return (
        <>
        <button onClick={() => navigate('/HTML')}>HTML</button>
        <button onClick={() => navigate('/css')}>CSS</button>
        <button onClick={() => navigate('/JavaScript')}>JavaScript</button>
        <button onClick={() => navigate('/Advancedjs')}>Advanced JavaScript</button>
        <button onClick={() => navigate('/women')}>Women In Computer Science</button>
     
        </>
    )
}

export default TakeAQuiz;