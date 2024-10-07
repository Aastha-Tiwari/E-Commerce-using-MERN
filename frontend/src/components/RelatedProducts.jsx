import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

function RelatedProducts({category , subCategory}){
    const {products} = useContext(ShopContext);
    const [relatedProducts , setRelatedProducts] = useState([]);

    useEffect(()=>{
        setRelatedProducts((products.filter(product=> product.category == category).filter(product=>product.subCategory == subCategory)).slice(0,5))
    },[products , category , subCategory])

    return (
        <div className="my-20">
            <div className="text-center text-xl sm:text-3xl pb-3">
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
                {relatedProducts.map(product=>(
                    <ProductItem key={product._id} product={product} /> 
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts;