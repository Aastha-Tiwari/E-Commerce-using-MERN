import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/frontend_assets/assets";

function Collection(){
    const {products} = useContext(ShopContext);
    const [showFilter , setShowFilter] = useState(false);
    const [filteredProducts , setFilteredProducts] = useState([]);

    const [category , setCategory] = useState([]);
    const [subCategory , setSubCategory] = useState([]);
    const [sortType , setSortType] = useState("relavent");

    useEffect(()=>{
        handleFilter();
    } , [category , subCategory]);

    useEffect(()=>{
        handleSort();
    } , [sortType]);

    function handleSort(){
        let productsCopy = filteredProducts.slice();
        switch(sortType){
            case "low-high" : setFilteredProducts(productsCopy.sort((a,b)=> a.price - b.price));
            break;
            case "high-low" : setFilteredProducts(productsCopy.sort((a,b)=> b.price - a.price));
            break;
            default : handleFilter();
            break;
        }
    }

    function handleFilter(){
        let productsCopy = products.slice(0);
        if(category.length > 0){
            productsCopy = productsCopy.filter(product=> category.includes(product.category));
        }
        if(subCategory.length>0){
            productsCopy = productsCopy.filter(product=> subCategory.includes(product.subCategory));
        }
        setFilteredProducts(productsCopy);
    }
    
    function handleCheckBoxesOfCategory(e){
        if(category.includes(e.target.value)){
            setCategory(prevCategory => prevCategory.filter(singleCategory =>{
                return singleCategory != e.target.value;
            }))
        }else{
            setCategory(prevCategory => [...prevCategory , e.target.value]);
        }
    }

    function handleCheckBoxesOfSubCategory(e){
        if(subCategory.includes(e.target.value)){
            setSubCategory(prevSubCategory => prevSubCategory.filter(singleSubCategory => singleSubCategory!=e.target.value));
        }else{
            setSubCategory(prevSubCategory => [...prevSubCategory , e.target.value]);
        }
    }

    return (
        <div className="border-t flex flex-col sm:flex-row gap-7 py-10 ">

            {/* Filters Box */}
            <div className="flex flex-col gap-6 min-w-60"> 
                {/* Filter heading */}
                <div className="flex gap-2 items-center" onClick={()=>setShowFilter(!showFilter)}>
                    <p className="text-gray-800 text-lg sm:text-xl font-medium">FILTERS</p>
                    <img src={assets.dropdown_icon} alt="" className={`h-3 ${showFilter && 'rotate-90'} sm:hidden`}/>
                </div>

                {/* Category */}
                <div className={`border px-4 py-3 sm:block ${!showFilter && 'hidden'}`}>
                    <p className="font-medium pb-3 text-sm">CATEGORIES</p>
                    <div className="flex flex-col text-sm text-gray-600 gap-3">
                        <label htmlFor="men" onChange={handleCheckBoxesOfCategory}><input type="checkbox" name="category" id="men" value="Men"/> Men</label>
                        <label htmlFor="women" onChange={handleCheckBoxesOfCategory}><input type="checkbox" name="category" id="women" value="Women" /> Women</label>
                        <label htmlFor="kids" onChange={handleCheckBoxesOfCategory}><input type="checkbox" name="category" id="kids" value="Kids" /> Kids</label>
                    </div> 
                </div>

                {/* Sub Category */}
                <div className={`border px-4 py-3 sm:block ${!showFilter && 'hidden'}`}>
                    <p className="font-medium pb-3 text-sm">TYPE</p>
                    <div className="flex flex-col text-sm text-gray-600 gap-3">
                        <label htmlFor="topwear" onChange={handleCheckBoxesOfSubCategory}><input type="checkbox" name="type" id="topwear" value="Topwear" /> Topwear</label>
                        <label htmlFor="bottomwear" onChange={handleCheckBoxesOfSubCategory}><input type="checkbox" name="type" id="bottomwear" value="Bottomwear" /> Bottomwear</label>
                        <label htmlFor="winterwear" onChange={handleCheckBoxesOfSubCategory}><input type="checkbox" name="type" id="winterwear" value="Winterwear" /> Winterwear</label>
                    </div>
                </div>
            </div>

            {/* All products container */}
            <div>

                {/* All products heading */}
                <div className="text-sm md:text-2xl mb-6 md:mb-2 flex justify-between items-center gap-1">
                    <Title text1={"ALL"} text2={"COLLECTION"} />

                    {/* Products Sort Container */}
                    <select onChange={(e)=>setSortType(e.target.value)} name="sort" className="text-xs sm:text-sm border px-[1px] md:px-2 py-3 border-gray-300">
                        <option value="relavent">Sort by:Relavent</option>
                        <option value="low-high">Sort by:Low-High</option>
                        <option value="high-low">Sort by:High-low</option>
                    </select>
                </div>

                {/* All products in grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
                    {filteredProducts.map(product=>(
                        <ProductItem product={product} key={product._id} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Collection;