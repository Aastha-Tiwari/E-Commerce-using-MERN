import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";

function About(){
    return (
        <div className="py-10 border-t">

            <div className="text-xl sm:text-2xl text-center">
                <Title text1={"ABOUT"} text2={"US"} />
            </div>

            <div className="flex flex-col sm:flex-row py-8 items-center gap-10">
                <img src={assets.about_img} alt="About Image" className="w-full sm:w-[40%] px-6 sm:px-0 self-start"/>
                <div className="flex flex-col gap-7 px-4 text-justify text-gray-700 w-full sm:w-[60%]">
                    <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
                    </p>
                    <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers</p>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold text-gray-800">Our Mission</p>
                        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-xl sm:text-2xl">
                    <Title text1={"WHY"} text2={"CHOOSE US"} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 text-gray-800 text-sm mt-4 mb-20">
                    <div className="border py-16 px-5 sm:px-12 md:px-5 lg:px-12">
                        <p className="font-bold mb-5">Quality Assurance:</p>
                        <p className="text-gray-700">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                    </div>
                    <div className="border py-16 px-5 sm:px-12 md:px-5 lg:px-12">
                        <p className="font-bold mb-5">Convenience:</p>
                        <p className="text-gray-700">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                    </div>
                    <div className="border py-16 px-5 sm:px-12 md:px-5 lg:px-12">
                        <p className="font-bold mb-5">Exceptional Customer Service:</p>
                        <p className="text-gray-700">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                    </div>
                </div>
            </div>

            <NewsLetter/>

        </div>
    )
}

export default About;