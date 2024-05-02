import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>WELCOME TO THE ONLINE QUIZ!!! </h1>
        <button onClick={() => navigate('/takeAquiz')}> Take a Quiz</button>
        <br/>
        <button>Make a Quiz</button>
        </>
    )
}

export default HomePage;