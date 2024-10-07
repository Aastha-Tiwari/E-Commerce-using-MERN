import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

function Cart(){
    const {cartItems , products , currency , handlePlaceOrderBtn} = useContext(ShopContext);
    const [cartProductsData , setCartProductsData] = useState([]);

    useEffect(()=>{
       let tempData = [];
       for(let key in cartItems){
        for(let size in cartItems[key]){
            tempData.push({
                id : key,
                size : size,
                quantity : cartItems[key][size]
            });
        }
       }
       setCartProductsData(tempData);
    },[cartItems]);

    return (
        <div className="py-10 border-t min-h-[70vh]">
            <div className="text-xl sm:text-2xl pt-3 pb-5">
                <Title text1={'YOUR'} text2={'CART'} />
            </div>
            <div className="flex flex-col">
                {   
                   cartProductsData.map((item , index)=>{
                        const productData =products.find((product)=> product._id === item.id);
                        return <CartItem item={item} productData={productData} key={index} />
                    }) 
                }
            </div>
            <div>
                <div className="flex justify-center sm:justify-end">
                    <CartTotal />
                </div>
                <div className="flex justify-end">
                    <button onClick={handlePlaceOrderBtn} className="bg-black text-white px-5 py-3 text-sm">PROCEED TO CHECKOUT</button>
                </div>                
            </div>
        </div>
    )
}

export default Cart;