import { assets } from "../assets/frontend_assets/assets";

function ItemNotFound(){
    return (
        <div className="w-full flex justify-center items-center text-2xl font-medium border-t py-5 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-x-4 gap-y-6"> 
                <img src={assets.itemNotFound} alt="" />
                <p className="text-center">Item not found :( </p>
            </div>
        </div>
    )
}

export default ItemNotFound;