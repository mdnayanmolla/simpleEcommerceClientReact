import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";


const Cart = () => {
    return (
        <div>
            <div className="bg-[#f7f8fb] px-[5%] py-24">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-4xl">Shopping Cart</h2>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <span><Link to='/'>Home</Link></span> <span><MdOutlineArrowForwardIos /></span>  <span><Link>Shopping Cart</Link></span>
                    </div>
                </div>
            </div>
            <div className="px-[5%] py-20">
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th> Quantity</th>
                                    <th>Total </th>
                                    <th className="text-center">Remove </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="">
                                    <td>Image</td>
                                    <td>Name</td>
                                    <td> Price</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                    <td className="text-right bg-slate-500 flex justify-center"><span className="flex justify-center items-center h-7 w-7 rounded-full hover:bg-[#ff324d] hover:text-white duration-500"><AiOutlineClose className="text-right"/></span></td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Cy Ganderton</td>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                    <td className="text-center">Blue</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>Cy Ganderton</td>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;