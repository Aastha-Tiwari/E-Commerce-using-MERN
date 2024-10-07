import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ItemNotFound from "../components/ItemNotFound";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { products, currency , handleAddToCart} = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState("");

  const [selectedSize, setSelectedSize] = useState("");

  const fetchProductData = async () => {
    // let currentProduct = await products.find((item)=> item._id == productId)
    // setProduct(currentProduct);
    // setImage((currentProduct.image)[0]);

    products.map((item) => {
      if (item._id === productId) {
        setProduct(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    setSelectedSize("")
    fetchProductData();
  }, [productId, products]);

  return product ? (
    <div className="border-t py-10 min-h-[70vh]">
      {/* -----------------Product Section-------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_4fr_5fr] gap-6">
        {/* -----Extra Images Div----- */}
        <div className="grid grid-cols-4 sm:flex sm:flex-col gap-2 overflow-hidden">
          {
          product.image.map((singleImage, index) => (
            <img
              src={singleImage}
              alt=""
              key={index}
              onClick={() => setImage(singleImage)}
              className="cursor-pointer hover:scale-105 transition ease-in-out w-full"
            />
          ))}
        </div>

        {/* ------Main Image Div------ */}
        <div className="w-full px-4 sm:px-0">
          <img
            src={image}
            alt=""
            className="w-full h-full lg:h-full object-contain object-top"
          />
        </div>

        {/* -----Product Details Div------*/}
        <div className="flex flex-col justify-around gap-4 sm:px-5">
          <div className="">
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium pb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-1">
              <img src={assets.star_icon} alt="rating" className="w-3" />
              <img src={assets.star_icon} alt="rating" className="w-3" />
              <img src={assets.star_icon} alt="rating" className="w-3" />
              <img src={assets.star_icon} alt="rating" className="w-3" />
              <img src={assets.star_dull_icon} alt="rating" className="w-3" />
              <p className="text-gray-800 pl-1">(122)</p>
            </div>
          </div>
          <p className="text-2xl lg:text-3xl font-medium">
            {currency}
            {product.price}
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            {product.description}
          </p>
          <div className="text-gray-700">
            <p className="pb-5 text-sm sm:text-base font-medium">Select Size</p>
            <div className="flex flex-row gap-2">
              {product.sizes.map((size) => (
                <div
                  className={`py-2 px-4 bg-slate-50 border-2 cursor-pointer hover:bg-slate-100 ${
                    selectedSize == size && "border-yellow-600"
                  }`}
                  onClick={() => setSelectedSize(size)}
                  key={size}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div>
            <button className="bg-black text-white px-8 py-3 text-sm hover:text-black hover:bg-white transition duration-300 border border-black" onClick={()=>handleAddToCart(product._id , selectedSize)}>
              ADD TO CART
            </button>
          </div>
          <div className="border-t pt-5 text-gray-500 text-sm leading-relaxed">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* -----------E-Commerce Info Section---------------- */}
      <div className="my-20">
        <div className="flex">
          <p className="border border-gray-200 px-4 py-3 text-sm font-semibold">Description</p>
        </div>
        <div className="border border-gray-200 px-4 py-5 text-gray-500 text-sm flex flex-col gap-3">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* -------------Related Products Section---------------- */}
      <RelatedProducts category={product.category} subCategory={product.subCategory} />

    </div>
  ) : (
    <ItemNotFound />
  );
}

export default Product;
