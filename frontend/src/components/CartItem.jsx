import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

function CartItem({item , productData}){
    const {currency , handleRemoveFromCart , updateQuantity} = useContext(ShopContext);

    return (
        <div className="grid grid-cols-[3fr_0.5fr_0.5fr] sm:grid-cols-[3fr_1fr_1fr] gap-x-4 md:gap-x-8 border-t py-6 text-gray-700 items-center justify-between">
            <div className="flex flex-row gap-x-3">
                <div className="w-20 self-center">
                    <img src={(productData.image)[0]} alt="" />
                </div>
                <div className="">
                    <p className="pb-3 text-sm sm:text-base font-medium">{productData.name}</p>
                    <div className="flex flex-row gap-x-4 items-center">
                        <p className="text-sm sm:text-base">{currency}{productData.price}</p>
                        <div className="py-1 px-2 sm:px-3 text-xs sm:text-base bg-slate-50 border-2 cursor-pointer hover:bg-slate-100">
                            {item.size}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <input type="number" onChange={(e)=>e.target.value=='' || e.target.value=='0'? null : updateQuantity(Number(e.target.value) , item.id , item.size)} min={1} defaultValue={item.quantity} className="border py-1 px-2 w-11 sm:w-20" />
            </div>

            <div className="w-4 sm:w-6 justify-self-end mr-3 cursor-pointer">
                <img src={assets.bin_icon} alt="Remove" onClick={()=>handleRemoveFromCart(item.id , item.size)} />
            </div>
        </div>
    )
}

export default CartItem;