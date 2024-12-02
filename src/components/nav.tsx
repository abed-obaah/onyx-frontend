import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo/logo-black.png"
// import Home from "../pages/home";

function Nav() {
    return ( 
        <>
            <header className="px-10 py-4 flex align-middle justify-between">
                <Link to="/" className=""><img src={Logo} alt="" /></Link>

                <div className="flex gap-6 self-center">
                    <NavLink to= "/" className="hover:scale-150 transition-all">Home</NavLink>
                    <NavLink to= "/services" className="hover:scale-150 transition-all">Services</NavLink>
                </div>

                <div className="flex gap-4 self-center">
                    <Link to="/login" className="self-center hover:text-lght">Log in</Link>
                    <Link to="/signup" className="bg-seco p-3 text-white hover:bg-transparent hover:text-lght transition-all rounded hover:outline hover:outline-lght">Sign Up</Link>
                </div>
            </header>
        </>
     );
}

export default Nav;