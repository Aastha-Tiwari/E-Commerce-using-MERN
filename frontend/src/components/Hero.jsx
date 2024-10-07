import { assets } from "../assets/frontend_assets/assets";

function Hero(){
    return (
        <div className="border border-gray-400 flex flex-col sm:flex-row">

            {/* Hero Left */}
            <div className="w-full sm:w-1/2 flex justify-center items-center text-[#414141] py-10 sm:py-0">

                <div className="flex flex-col gap-1 sm:gap-3 px-3 sm:px-0">
                    <div className="flex items-center gap-2">  {/* bestsellers line */}
                        <p className="w-11 h-[1.6px] bg-[#414141]"></p>
                        <p className="font-medium text-sm sm:text-base">OUR BESTSELLERS</p>
                    </div>

                    <div className="text-3xl lg:text-5xl font-serif">Latest Arrivals</div> {/*Arrival line */}

                    <div className="flex items-center gap-2">  {/*Shop now line */}
                        <p className="font-medium text-sm sm:text-base">SHOP NOW</p>
                        <p className="w-11 h-[1px] bg-[#414141]"></p>
                    </div>
                </div>

            </div>

            {/* Hero Right */}
            <img src={assets.hero_img5} alt="Hero" className="w-full sm:w-1/2" />

        </div>
    )
}

export default Hero;