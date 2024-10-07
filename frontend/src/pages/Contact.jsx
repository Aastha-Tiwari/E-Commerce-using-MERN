import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";

function Contact(){
    return (
        <div className="border-t py-10">
            <div className="text-xl sm:text-2xl text-center">
                <Title text1={"CONTACT"} text2={"US"} />
            </div>

            <div className="mt-10 mb-20 flex flex-col sm:flex-row justify-center items-center gap-8">
                <img src={assets.contact_img} alt="Contact" className="w-full sm:w-[40%] self-start"/>

                <div className="w-full sm:w-[30%] flex flex-col gap-8 text-gray-600">
                    <div className="flex flex-col gap-6">
                        <p className="font-bold text-xl">Our Store</p>
                        <div>
                            <p>54709 Willms Station</p>
                            <p>Suite 350, Washington, USA</p>
                        </div>
                        <div className="flex flex-col">
                            <Link to="tel:+91 9872654931" className="hover:text-gray-950">Tel: +91 9872654931</Link>
                            <Link to="mailto:aasthatiwari214@gmail.com" className="hover:text-gray-950">Email: aasthatiwari214@gmail.com</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <p className="font-bold text-xl">Careers at Forever</p>
                        <p className="">Learn more about our teams and job openings.</p>
                    </div>

                    <div>
                    <button className="text-sm border border-black text-black hover:bg-black hover:text-white py-5 px-8 transition duration-300">Explore Jobs</button>
                    </div>
                </div>
            </div>

            <NewsLetter/>
        </div>
    )
}

export default Contact;