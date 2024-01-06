import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BrandProductList from "./BrandProductList";

import { MdOutlineArrowForwardIos } from "react-icons/md";
const BrandProduct = () => {
    const [products, setProduct] = useState([])
    const loadedProduct = useLoaderData()
    const { Bname } = useParams()
    // console.log(Bname,loadedProduct)
    const brandPorduct = loadedProduct.find(brandPorduct => brandPorduct.Bname == Bname)
    // console.log(brandPorduct)

    useEffect(() => {
        fetch('https://assignemtn-10-server-e2n5acsaj-mdnayanmolla.vercel.app/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const productall = products.filter(product => product.brand == brandPorduct.Bname)
    // console.log(productall)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 2000,
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="bg-[#f7f8fb] px-[5%] py-24">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-4xl">{brandPorduct.title}</h2>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <span><Link to='/'>Home</Link></span> <span><MdOutlineArrowForwardIos /></span>  <span><Link>Login</Link></span>
                    </div>
                </div>
            </div>
            <div className="pb-10 mt-10 px-[5%]">
                <h2 className="font-bold text-4xl text-center py-4">Your Exclusive Brand Product</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pt-12">
                    {
                        // productall.length == 0 ? " Product  Coming Soon" : productall?.map(product => )
                        productall?.map(product => <BrandProductList key={product._id} product={product} ></BrandProductList>)
                    }
                </div>

                <div className=" mt-16">
                    <h2 className="font-bold text-4xl text-center py-4">For You Best {brandPorduct.title} Brand</h2>
                    <Slider {...settings}>
                        <div className="mx-4">
                            <div> <img className="h-[200px] w-full" src={brandPorduct.Badd1} /> </div>

                        </div>

                        <div className="mx-4">
                            <div> <img className="h-[200px] w-full" src={brandPorduct.Badd2} /> </div>

                        </div>
                        <div className="mx-4">
                            <div> <img className="h-[200px] w-full" src={brandPorduct.Badd3} /> </div>
                        </div>

                    </Slider>


                    <div className="grid md:grid-cols-3 gap-5 mt-7">
                        <div> <img className="h-[200px] w-full" src={brandPorduct.Badd1} /> </div>
                        <div> <img className="h-[200px] w-full" src={brandPorduct.Badd2} /> </div>
                        <div> <img className="h-[200px] w-full" src={brandPorduct.Badd3} /> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProduct;