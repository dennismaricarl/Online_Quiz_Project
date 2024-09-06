import logo from "../images/logo.jpg"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full bg-[#FFDC2E] flex justify-between h-28">

            <img className="hover:scale-90 cursor-pointer pl-36"onClick={() => navigate('/')}src={logo} />
            <h1 className="text-2xl font-semibold font-mono pr-36 pt-10 hover:scale-110 cursor-pointer" onClick={() => navigate('/login')}>Log In</h1>

        </div>
    )
}

export default Header;