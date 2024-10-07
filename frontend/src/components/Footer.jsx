import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

function Footer(){
    return (
        <div className="bg-slate-50 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

            {/* Footer */}
            <div className="flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr] justify-evenly gap-14 pt-28 pb-14 border-b">

                <div className="flex flex-col gap-4">
                    <img src={assets.logo} alt="Image" className="w-28 sm:w-36" />
                    <p className="text-justify text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">COMPANY</p>
                    <ul className="text-sm flex flex-col text-gray-600 gap-2">
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact</Link>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">GET IN TOUCH</p>
                    <ul className="text-sm flex flex-col text-gray-600 gap-2">
                        <Link to="tel:+91 9872654931">+91 9872654931 </Link>
                        <Link to="mailto:aasthatiwari214@gmail.com">aasthatiwari214@gmail.com</Link>
                        <Link to="/">Instagram</Link>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-gray-800 text-center text-xs py-5 font-medium">All copyrights &copy; reserved | Made with love ❤️ by Aastha Tiwari</div>
   
        </div>
    )
}

export default Footer;