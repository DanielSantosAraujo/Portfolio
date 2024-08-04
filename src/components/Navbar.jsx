// import logo from "../assets/kevinRushLogo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/daniel-santos-developer/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/DanielSantosAraujo" target="_blank"><FaGithub /></a>
                <a href="https://www.instagram.com/daniel12_san/" target="_blank"><FaInstagram /></a>

            </div>
        </nav>
    )
}