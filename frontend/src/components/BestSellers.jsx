import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

function BestSellers(){
    const {products} = useContext(ShopContext);
    const [bestSellersProducts , setBestSellersProducts] = useState([]);

    useEffect(()=>{
        setBestSellersProducts(products.filter((product)=>{
            return product.bestseller;
        }).slice(0,5))
    } , [products]);

    return (
        <div className="my-10">

            <div className="py-8 text-3xl text-center">  {/* Best Sellers heading container */}
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam totam incidunt explicabo quisquam ratione assumenda!</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">   {/* Best Sellers product in grid */}
                {bestSellersProducts.map(product=>(
                    <ProductItem product={product} key={product._id} /> 
                ))}
            </div>
        </div>
    )
}

export default BestSellers;