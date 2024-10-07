import { assets } from "../assets/frontend_assets/assets";

function Policy(){
    return (
        <div className="my-20 flex flex-col sm:flex-row justify-around items-center text-xs sm:text-sm md:text-base gap-12 sm:gap-3 text-center">
            <div className="flex flex-col items-center">
                <img src={assets.exchange_icon} alt="Exchange Policy" className="w-12 pb-5" />
                <p className="text-gray-700 font-bold">Easy Exchange Policy</p>
                <p className="text-gray-400 font-medium">We offer hassle free exhange policy</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={assets.quality_icon} alt="Return Policy" className="w-12 pb-5" />
                <p className="text-gray-700 font-bold">7 days Return Policy</p>
                <p className="text-gray-400 font-medium">We provide 7 days free return policy</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={assets.support_img} alt="Customer Support" className="w-12 pb-5" />
                <p className="text-gray-700 font-bold">Best Customer Support</p>
                <p className="text-gray-400 font-medium">we provide 24/7 customer support</p>
            </div>
        </div>
    )
}

export default Policy;