import { Link } from 'react-router-dom';

import footerLogo from '../../assets/footer.png'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaLocationDot } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className="grid lg:grid-cols-5 bg-[#202325] px-[5%] py-24">
            <div className='space-y-6'>
               <img src={footerLogo}/>
               <p className='text-white'>If you are going to use of Lorem Ipsum need to be sure there isnt hidden of text</p>
               <div className='flex space-x-4'>
                 <p className='text-white text-xl'> <FaFacebookF/> </p>
                 <p className='text-white text-xl'> <FaTwitter/> </p>
                 <p className='text-white text-xl'> <FaGooglePlusG/> </p>
                 <p className='text-white text-xl'> <FaYoutube/> </p>
                 <p className='text-white text-xl'> <FaInstagram/> </p>
               </div>
            </div>
            <div className='text-white pl-10 space-y-4'>
                <h3 className='text-xl font-bold'>Useful Links</h3>
               <div className='space-y-2'>
                <a className='block hover:text-[#fe324d] duration-500'><Link >FAQ</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Location</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Affiliates</Link></a>
                <a className='block hover:text-[#fe324d] duration-500' ><Link >Contact</Link></a>
               </div>  
            </div>
            <div className='text-white pl-10 space-y-4'>
                <h3 className='text-xl font-bold'>Category</h3>
               <div className='space-y-2'>
                <a className='block hover:text-[#fe324d] duration-500'><Link > Men</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Woman </Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Kids</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Best Saller</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >New Arrivals</Link></a>
               </div>  
            </div>
            <div className='text-white pl-10 space-y-4'>
                <h3 className='text-xl font-bold'>My Account</h3>
               <div className='space-y-2'>
                <a className='block hover:text-[#fe324d] duration-500'><Link >My Account</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Discount</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Returns</Link></a>
                <a className='block hover:text-[#fe324d] duration-500'><Link >Orders History</Link></a>
                <a className='block hover:text-[#fe324d] duration-500' ><Link >Order Tracking</Link></a>
               </div>  
            </div>
            <div className='text-white pl-10 space-y-4'>
                <h3 className='text-xl font-bold'>Contact Info</h3>
               <div className='space-y-2'>
                  <ul className=' space-y-2'>
                     <li><span> </span>  123 Street, Old Trafford, New South London , UK</li>
                     <li className='flex items-center space-x-2'><span > <FaEnvelope/></span> <span>info@sitename.com</span></li>
                     <li className='flex items-center space-x-2'><span> <FaMobileAlt/></span><span> + 457 789 789 65</span></li>
                  </ul>
               </div>  
            </div>
        </div>
    );
};

export default Footer;