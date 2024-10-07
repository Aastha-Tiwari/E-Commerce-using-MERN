import { useState } from "react";
import Title from "../components/Title";

function Login(){
    const [account , setAccount] = useState("login");

    return account == "login" ? (
        <div className="py-10 min-h-[70vh] flex justify-center items-center">
            <div className="">
                <div className="text-xl sm:text-2xl md:text-3xl text-center pb-5">
                    <Title text1={'Log'} text2={'in'} />
                </div>
                <div className="flex flex-col gap-y-3">
                    <input type="email" placeholder="email" className="w-full border py-2 px-3 border-gray-800" />
                    <input type="password" placeholder="password" className="w-full border py-2 px-3 border-gray-800"  />
                </div>
                <div className="flex justify-between py-3 gap-x-5 sm:gap-x-28">
                    <p className="text-xs sm:text-sm hover:cursor-pointer">Forgot your password?</p>
                    <p className="text-xs sm:text-sm hover:cursor-pointer" onClick={()=>setAccount("signup")}>Create account</p>
                </div>
                <div className="text-center pt-5">
                    <button className="bg-black text-white text-sm px-10 py-3">Sign in</button>
                </div>
            </div>
        </div>
    ) :
    (
        <div className="py-10 min-h-[70vh] flex justify-center items-center">
            <div className="">
                <div className="text-xl sm:text-2xl md:text-3xl text-center pb-5">
                    <Title text1={'Sign'} text2={'Up'} />
                </div>
                <div className="flex flex-col gap-y-3">
                    <input type="text" placeholder="Name" className="w-full border py-2 px-3 border-gray-800" />
                    <input type="email" placeholder="email" className="w-full border py-2 px-3 border-gray-800" />
                    <input type="password" placeholder="password" className="w-full border py-2 px-3 border-gray-800"  />
                </div>
                <div className="flex justify-between py-3 gap-x-5 sm:gap-x-28">
                    <p className="text-xs sm:text-sm">Already have an account?</p>
                    <p className="text-xs sm:text-sm hover:cursor-pointer" onClick={()=>setAccount("login")}>Login Here</p>
                </div>
                <div className="text-center pt-5">
                    <button className="bg-black text-white text-sm px-10 py-3">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Login;