
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const AddCart = () => {
    return (
        <div>
        <div className="bg-[#f7f8fb] px-[5%] py-24">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-bold text-4xl">Added Cart</h2>
                </div>
                <div className='flex items-center space-x-2'>
                    <span><Link to='/'>Home</Link></span> <span><MdOutlineArrowForwardIos/></span>  <span><Link>Login</Link></span>
                </div>
            </div>
        </div>

        <div className="w-full py-20">
            <div className="shadow-md  w-2/4 mx-auto py-7 px-7">
                <h2 className="text-3xl font-bold">Added Cart</h2>
              <form className="py-10">
                 <div>
                    <input type="text" name="name" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Name"/>
                 </div>
                 <div className="mt-6">
                    <input type="email" name="email" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Email"/>
                 </div>
                 <div className="mt-6">
                    <input type="password" name="password" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Email"/>
                 </div>
                 <div className="mt-6">
                    <input type="text" name="photo" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Photo Url"/>
                 </div>
                 <div className="mt-6">
                    <button className="px-6 py-3 w-full rounded-md bg-[#ff324d] text-white">Register</button>
                 </div>
              </form>
             
            
            </div>
        </div>
    </div>
    );
};

export default AddCart;