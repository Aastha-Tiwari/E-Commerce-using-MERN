import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

function CartTotal() {
    const {currency , delieveryFee , getTotalCartPrice} = useContext(ShopContext);
    let total = getTotalCartPrice();

    return (
        <div className="py-7">
            <div className="text-xl sm:text-2xl">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className="text-sm min-w-60 sm:min-w-96 pb-4">
                <div className="flex flex-row border-b py-3 justify-between">
                    <p>Sub Total</p>
                    <p>{currency}{total}</p>
                </div>
                <div className="flex flex-row border-b py-3 justify-between">
                    <p>Shipping Fee</p>
                    <p>{currency}{delieveryFee}</p>
                </div>
                <div className="flex flex-row py-3 justify-between font-semibold">
                    <p >Total</p>
                    <p>{currency}{total == 0 ? 0 :total + delieveryFee}</p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal;