import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


function ProductItem({product}){
    const {currency} = useContext(ShopContext); 

    return (
        <Link className="text-gray-700 text-sm" to={`/product/${product._id}`}>
            <div className="overflow-hidden">
                <img src={product.image[0]} alt="Product image" className="hover:scale-110 transition ease-in-out" />
            </div>
            <p className="pt-3 pb-1 text-xs sm:text-sm md:text-base">{product.name}</p>
            <p className="font-medium">{currency}{product.price}</p>
        </Link>
    )
}

export default ProductItem;