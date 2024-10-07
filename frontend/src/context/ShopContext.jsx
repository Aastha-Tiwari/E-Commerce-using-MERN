import { createContext, useEffect, useReducer, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

export const ShopContext = createContext();

const cartReducer = (currCartItems , action)=>{
    let productId = action.payload.productId;
    let size = action.payload.size;

    let newCartItems = structuredClone(currCartItems);

    if(action.type == "ADD"){
        if(newCartItems[productId]){
            if(newCartItems[productId][size]){
                newCartItems[productId][size] += 1;
            }else{
                newCartItems[productId][size] = 1;
            }
        }else{
            newCartItems[productId] = {[size] : 1}
        }
        // toast.success("Product added to Cart successfully");
    }
    else if(action.type == "REMOVE"){
        newCartItems[productId][size] = 0;
        delete newCartItems[productId][size];
    }
    else if(action.type == "UPDATE"){
        let quantity = action.payload.quantity;
        newCartItems[productId][size] = quantity;
    }

    return newCartItems;
}

function ShopContextProvider({children}){
    const currency = '$';
    const delieveryFee = 10;
    const [cartItems , dispatchCartItems] = useReducer(cartReducer , {});
    const [cartItemsNumber , setCartItemsNumber] = useState(0);
    const navigate = useNavigate();
    let totalPrice = 0;

    function getCartCount (cartItems){
        let cartItemsNumberCopy = 0;
        for(let key in cartItems){
            for(let size in cartItems[key]){
                cartItemsNumberCopy += cartItems[key][size];
            }
        }
        setCartItemsNumber(cartItemsNumberCopy);
    }
    
    function handleAddToCart(productId , size){
        if(size == ''){
          toast.error("Please , Select the size first");
        }else{
            dispatchCartItems({
                type : "ADD",
                payload : {
                    productId , size
                }
            });
        }
    }

    function handleRemoveFromCart(productId , size){
        dispatchCartItems({
            type : "REMOVE",
            payload : {
                productId , size
            }
        });
    }

    function updateQuantity(quantity , productId , size){
        dispatchCartItems({
            type : "UPDATE",
            payload : {quantity , productId , size}
        });
    }

    function getTotalCartPrice(){
        totalPrice = 0;
        for(let id in cartItems){
            const cartItemInfo = products.find(product=> product._id == id);
            for(let size in cartItems[id]){
                totalPrice += cartItemInfo.price * cartItems[id][size];
            }
        }
        return totalPrice;
    }

    function handlePlaceOrderBtn(){
        if(totalPrice>0){
            navigate('/place-order')
        }else{
            toast.error('Please, choose some item first')
        }
    }

    useEffect(()=>{
        getCartCount(cartItems);
    },[cartItems]);
    

    const value = {
        products , currency , delieveryFee , handleAddToCart , cartItems , cartItemsNumber , handleRemoveFromCart , updateQuantity , getTotalCartPrice , navigate , handlePlaceOrderBtn
    } 

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;