import { useLoaderData } from "react-router-dom";
import ShopCard from "./ShopCard";


const Shop = () => {

     const loaderProducts = useLoaderData()
    //  console.log(loaderProducts)
    const products = loaderProducts.slice(0,8)

    return (
        <div>
           {/* <h2>Hello Shop</h2> */}
           <div className="pb-10 mt-10 px-[5%]">
                <h2 className="font-bold text-4xl text-center py-4">Our Products</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pt-12">
                    {
                        products?.map(product => <ShopCard key={product._id} product={product} ></ShopCard>)
                    }
                </div>
              <div className="text-center mt-7">
                 <button className="btn bg-[#ff324d] text-white">Show More</button>
              </div>
            </div>
        </div>
    );
};

export default Shop;  