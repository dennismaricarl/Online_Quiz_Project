//categories
//click on category and built card quiz questions 

//submit - show the results 

import { useNavigate } from "react-router-dom";

const TakeAQuiz = () => {
    const navigate = useNavigate()

    return (
        <>
        <button>CATEGORY 1</button>
        <button>CATEGORY 2</button>
        <button>CATEGORY 3</button>
        </>
    )
}

export default TakeAQuiz;