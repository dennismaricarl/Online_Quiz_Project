import { useNavigate } from "react-router-dom";


const TakeAQuiz = () => {

    const navigate = useNavigate()

    const categories = ["HTML", "CSS", "JavaScript", "AdvancedJS", "WomenInCS", "Git"]
    const mainContainer = "flex flex-col items-center"
    const categoriesContainer = "grid grid-rows-3 grid-flow-col gap-y-10 gap-x-20 mt-20"
    const categoryBoxes = "text-4xl text-white text-center font-mono rounded-md bg-[#185519] hover:bg-[#d6cf4f] w-80 py-5 "
    const title = "text-6xl decoration-8 pt-20 font-mono"
    

    return (

        <div className={mainContainer}>
            <h1 className={title}>CATEGORIES</h1>
            <div className={categoriesContainer}>
                
            {categories.map((category) => (
             
                    <button key={category} className={categoryBoxes} onClick={() => navigate(`/quiz/${category}`)}>{category}</button>
              
            ))}
            </div>


        </div>
    )
}

export default TakeAQuiz;