import { Link, NavLink } from "react-router-dom";
import {assets} from "../assets/frontend_assets/assets"
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar(){
    const {cartItemsNumber} = useContext(ShopContext);

    const [sideBarVisibility , setSideBarVisibility] = useState(false);

    return (
        <nav className="flex justify-between items-center py-5 font-medium text-gray-700">
            <Link to="/">
                <img src={assets.logo} alt="Logo" className="w-24 sm:w-36" />
            </Link>

            <ul className="hidden sm:flex gap-5 text-sm uppercase">
                <NavLink to="/" className="flex flex-col gap-1">
                    <p>Home</p>
                    <hr className="h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col gap-1">
                    <p>collection</p>
                    <hr className="h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col gap-1">
                    <p>about</p>
                    <hr className="h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col gap-1">
                    <p>contact</p>
                    <hr className="h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
            </ul>

            <div className="flex gap-5 items-center">
                <img src={assets.search_icon} alt="Search" className="w-5 cursor-pointer" />

                <div className="relative group">
                    <Link to="/login"><img src={assets.profile_icon} alt="profile" className="w-5 cursor-pointer" /></Link>
                    <div className="absolute right-0 pt-3 hidden group-hover:block">
                        <div className="bg-slate-50 text-gray-500 text-sm w-36 px-5 py-3 rounded flex flex-col gap-2">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">My Orders</p>
                            <p className="cursor-pointer hover:text-black">Log out</p>
                        </div>
                    </div>
                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} alt="Cart" className="w-5" />
                    <p className="absolute bottom-[-5px] right-[-5px] text-white bg-black rounded-full w-4 text-center text-[8px] h-4 leading-4">{cartItemsNumber}</p>
                </Link>

                <img onClick={()=>setSideBarVisibility(true)} src={assets.menu_icon} alt="Menu" className="w-5 cursor-pointer sm:hidden" />
            </div>

            {/* SideBar which shows on mobile devices only */}
            <div className={`absolute top-0 bottom-0 right-0 ${sideBarVisibility ? 'w-9/12' : 'w-0'} overflow-hidden bg-slate-50 transition-all`}>
                <div className="text-gray-600">
                    <div className="flex items-center gap-2 p-3 cursor-pointer border-b" onClick={()=>setSideBarVisibility(false)}>
                        <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
                        <p>Back</p>
                    </div>
                    <div className="flex flex-col uppercase text-sm">
                        <NavLink onClick={()=>setSideBarVisibility(false)} to="/" className="border-b py-3 pl-4">Home</NavLink>
                        <NavLink onClick={()=>setSideBarVisibility(false)} to="/collection" className="border-b py-3 pl-4">Collection</NavLink>
                        <NavLink onClick={()=>setSideBarVisibility(false)} to="/about" className="border-b py-3 pl-4">About</NavLink>
                        <NavLink onClick={()=>setSideBarVisibility(false)} to="/contact" className="border-b py-3 pl-4">Contact</NavLink>
                    </div>  
                </div>
            </div>

        </nav>
    )
}

export default Navbar;