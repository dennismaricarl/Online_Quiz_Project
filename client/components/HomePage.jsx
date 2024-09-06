import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate()

    const mainContainer = "h-screen flex items-center justify-center space-x-8"
    const categories = "text-4xl px-4 py-3 text-white font-mono rounded-md bg-[#185519] hover:bg-[#d6cf4f]"
    const categoriesContainer = "flex flex-col space-y-6"

    return (
        <div className={mainContainer}>
            <h1 className="text-6xl text-black font-mono">Welcome to the <span className="text-[#FFDC2E] font-mono">Online Quiz!</span></h1>

            <div className={categoriesContainer}>
                <button className={categories} onClick={() => navigate('/takeAquiz')}> Take a Quiz</button>
                <button className={categories} onClick={() => navigate('/makeAquiz')}>Make A Quiz</button>
            </div>

        </div>
    )
}

export default HomePage;