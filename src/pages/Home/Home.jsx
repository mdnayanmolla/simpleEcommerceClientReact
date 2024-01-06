import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import OfferAdd from "../../components/OfferAdd/OfferAdd";
import ProductCard from './ProductCard'
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import ProductCard from "./ProductCard";
import bottomAdd from '../../assets/bottomAd.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
    const [brands, setBrands] = useState([])
   
    const handleCart = (item)=>{
        console.log(item)
    }

    const loadedProduct = useLoaderData();
    const products = loadedProduct?.slice(0, 8);
    // const filteredData = loadedProduct.filter((item) => item.brand.includes('Zara'));

    const feacrudProduct = loadedProduct.slice(0, 4);
    useEffect(() => {
        fetch('./brand.json')    
            .then(res => res.json())
            .then(data => setBrands(data))

    }, [products])
    const {loading} = useContext(AuthContext)
    if(loading){
      return  <div className="flex justify-center items-center h-screen"><span className="loading loading-dots loading-lg bg-[#ff475f]"></span></div>
    }
    return (
        <div>
          

            <Banner></Banner>
            <OfferAdd></OfferAdd>
            <Brand></Brand>
            <div className="px-[5%]">
                <h2 className="font-bold text-4xl text-center py-4 ">Exclusive Brand</h2>
                <div className='grid grid-cols-6 gap-5 '>
                    {
                        brands?.map(brandData => <Brand key={brandData.id} brandData={brandData}></Brand>)
                    }
                </div>
                <div className="pb-20 mt-10">
                    <h2 className="font-bold text-4xl text-center py-4">Best Product</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pt-12">
                        {
                            products?.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
            <div className="bg-[#f4f9fc] grid md:grid-cols-2 px-[5%] items-center">
                <div className="">
                    <img src={bottomAdd} />
                </div>
                <div>
                    <p className="text-[#ff475f] text-xl">New season trends!</p>
                    <h2 className='text-5xl  font-bold mb-4'>Best Summer Collection</h2>
                    <button className='bg-[#ff475f] px-4 py-2 text-white '> Shop Now</button>
                </div>
            </div>
            <div className="pb-10 mt-10 px-[5%]">
                <h2 className="font-bold text-4xl text-center py-4">Featured Products</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pt-12">
                    {
                        feacrudProduct?.map(product => <ProductCard key={product._id} product={product} handleCart={handleCart}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;