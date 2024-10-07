import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder(){
    const {navigate} = useContext(ShopContext);
    const [paymentMethod , setPaymentMethod] = useState('cash_on_delivery');

    return (
        <div className="py-20 border-t flex flex-col md:flex-row justify-between gap-10">
            {/*--------------------- Delivery Information Section --------------- */}
            <div className="w-full md:w-1/2">
                <div className="text-lg sm:text-xl lg:text-2xl pb-6">
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                {/* Form */}
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <input type="text" placeholder="First name" className="border border-gray-300 rounded px-1 py-2 w-full" />
                        <input type="text" placeholder="Last name" className="border border-gray-300 rounded px-1 py-2 w-full" />
                    </div>
                    <input type="email" placeholder="Email address" className="border border-gray-300 rounded px-1 py-2" />
                    <input type="text" placeholder="Street" className="border border-gray-300 rounded px-1 py-2" />
                    <div className="flex gap-3">
                        <input type="text" placeholder="City" className="border border-gray-300 rounded px-1 py-2 w-full" />
                        <input type="text" placeholder="State" className="border border-gray-300 rounded px-1 py-2 w-full" />
                    </div>
                    <div className="flex gap-3">
                        <input type="number" placeholder="Zip Code" className="border border-gray-300 rounded px-1 py-2 w-full" />
                        <input type="text" placeholder="Country" className="border border-gray-300 rounded px-1 py-2 w-full" />
                    </div>
                    <input type="tel" placeholder="Phone" className="border border-gray-300 rounded px-1 py-2" />
                </div>
            </div>

            {/* --------------------CART Total and payment info section--------------- */}
            <div>
                {/* CART total */}
                <div>
                    <CartTotal />
                </div>

                {/* PAYMENT methods */}
                <div className="">
                    <div className="text-base sm:text-lg">
                        <Title text1={'PAYMENT'} text2={'METHODS'} />
                    </div>
                    <div className="flex flex-col gap-3 justify-between items-stretch pb-5">
                        <div className="cursor-pointer flex items-center gap-2 border py-2 px-3 w-full" onClick={()=>setPaymentMethod("stripe")}>
                            <p className={`h-3.5 w-3.5 border rounded-full ${paymentMethod=='stripe' && 'bg-green-500'}`}></p>
                            <img src={assets.stripe_logo} alt="Stripe" className="h-5" />
                        </div>
                        <div className="cursor-pointer flex items-center gap-2 border py-2 px-3 w-full" onClick={()=>setPaymentMethod("razorpay")}>
                            <p className={`h-3.5 w-3.5 border rounded-full ${paymentMethod=='razorpay' && 'bg-green-500'}`}></p>
                            <img src={assets.razorpay_logo} alt="Razorpay" className="h-5" />
                        </div>
                        <div className="cursor-pointer flex items-center gap-2 border py-2 px-3 w-full text-sm text-gray-500" onClick={()=>setPaymentMethod("cash_on_delivery")}>
                            <p className={`h-3.5 w-3.5 border rounded-full ${paymentMethod=='cash_on_delivery' && 'bg-green-500'}`}></p>
                            <p>CASH ON DELIVERY</p>
                        </div>

                        {/* <label htmlFor="stripe" className="cursor-pointer flex gap-2 border py-2 px-3 w-full" onClick={()=>setPaymentMethod("stripe")} ><input type="radio" id="stripe" name="paymentMethod"/> <img src={assets.stripe_logo} alt="Stripe" className="h-5" /></label>
                        <label htmlFor="razorpay" className="cursor-pointer flex gap-2 border py-2 px-3 w-full" onClick={()=>setPaymentMethod("razorpay")} ><input type="radio" id="razorpay" name="paymentMethod" /> <img src={assets.razorpay_logo} alt="Razorpay" className="h-5" /></label>
                        <label htmlFor="cashOnDelivery" className="cursor-pointer  text-sm text-gray-500 flex gap-2 border py-2 px-3 w-full" onClick={()=>setPaymentMethod("cash_on_delivery")} ><input type="radio" id="cashOnDelivery" name="paymentMethod" /> CASH ON DELIVERY </label> */}
                    </div>
                </div>

                {/* PLACE order Button */}
                <div className="flex justify-end">
                    <button onClick={()=>navigate("/orders")} className="bg-black text-white px-5 py-3 text-sm">PLACE ORDER</button>
                </div> 
            </div>
        </div>
    )
}

export default PlaceOrder;