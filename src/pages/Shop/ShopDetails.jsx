import { Link, useLoaderData } from "react-router-dom";



const ShopDetails = () => {
    // const [products, setProducts] = useState({})
    const product = useLoaderData()
    const { _id,name, price, brand, photo, description } = product


    return (
        <div>
            <div className="bg-[#f7f8fb] px-[5%] py-24">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-4xl">{name} Details</h2>
                    </div>
                    <div>
                        <span><Link to='/'>Home</Link></span>  <span><Link>Login</Link></span>
                    </div>
                </div>
            </div>
            <div className="px-[5%] my-14">
                <div className="grid md:grid-cols-2">
                    <div className="border">
                        <img src={photo} className="w-full" />
                    </div>
                    <div className="px-8 space-y-3">
                        <h2 className="text-4xl font-bold">{name}</h2>
                        <div>
                            <h3 className="text-[#ff324d] text-3xl font-bold">${price}</h3>
                        </div>
                        <div>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li>1 Year AL Jazeera Brand Warranty</li>
                                <li> 30 Day Return Policy</li>
                                <li> Cash on Delivery available</li>
                            </ul>
                        </div>
                        <div className="flex items-center mt-6">
                            <div className="mr-3">
                                <p className="text-xl ">Size:</p>
                            </div>
                            <div>
                                <ul className="flex space-x-3">
                                    <li className="border px-2 py-1">XS</li>
                                    <li className="border px-2 py-1">S</li>
                                    <li className="border px-2 py-1">M</li>
                                    <li className="border px-2 py-1">L</li>
                                    <li className="border px-2 py-1">XL</li>
                                    <li className="border px-2 py-1">XXL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-y mt-6 py-4">
                            <div className="card-actions flex justify-around">
                                <button className="btn bg-[#ff324d] text-white"> Add To cart</button>
                                <Link to={`/update/${_id}`}><button className="btn bg-[#ff324d] text-white"> Update</button></Link>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li className="font-semibold"><span className="text-[#85a4c3]">SKU:</span> <Link className="hover:text-[#ff324d] duration-500"><span>BE45VGRT</span></Link></li>
                                <li className="font-semibold"><span className="text-[#85a4c3]">Brand:</span> <Link className="hover:text-[#ff324d] duration-500"><span>{brand}</span></Link></li>
                                <li className="font-semibold"><span className="text-[#85a4c3]">Tags:</span> <Link><span className="hover:text-[#ff324d] duration-500">Cloth, printed</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;