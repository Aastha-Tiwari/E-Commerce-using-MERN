import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

function LatestCollection(){
    const {products} = useContext(ShopContext);
    const [latestProducts , setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));  {/*initial 10 products will be latest */}
    },[products])

    return (
        <div className="my-10">

            <div className="py-8 text-center text-3xl">   {/* latest collection heading container */}
                <Title text1={"LATEST"} text2={"COLLECTION"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic at tempore consectetur sapiente unde quis.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">    {/* latest products in grid */}
                {latestProducts.map(product=>(
                    <ProductItem product={product} key={product._id} />
                ))}
            </div>

        </div>
    )
}

export default LatestCollection;