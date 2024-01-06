import { useContext } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
     
const {signIn,googleSignIn} = useContext(AuthContext);
 const location = useLocation()
 const navigate = useNavigate()
    const handleSignIn = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        signIn(email,password)
        .then(result=>{
           console.log(result.user)

           navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
   
  
  const hendleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result=>{
        console.log( result.user)
       navigate(location?.state ? location.state : '/')

    })
    .catch(error=>{
      console.log(error)
    })
  }
   
    return (
        <div>
            <div className="bg-[#f7f8fb] px-[5%] py-24">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-4xl">Login</h2>
                    </div>
                    <div>
                        <span><Link to='/'>Home</Link></span>  <span><Link>Login</Link></span>
                    </div>
                </div>
            </div>

            <div className="w-full py-20">
                <div className="shadow-md w-full  md:w-2/4 mx-auto py-7 px-7">
                    <h2 className="text-3xl font-bold">Login</h2>
                  <form className="py-10" onSubmit={handleSignIn}>
                     <div>
                        <input type="email" name="email" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Email"/>
                     </div>
                     <div className="mt-6">
                        <input type="password" name="password" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Password"/>
                     </div>
                     <div className="mt-6 flex py-6">
                        <div className="flex justify-between w-full ">
                            <label>
                                <input type="checkbox" className="px-2 py-2"/>
                                <span>I agree to terms & Policy.</span>
                            </label>
                           <p className="hover:text-[#ff324d] font-semibold"><Link>Forgot password?</Link></p>
                        </div>
                        <div></div>
                     </div>
                     <div className="mt-6">
                        <button type='submit'  className="px-6 py-3 w-full rounded-md bg-[#ff324d] text-white">Login</button>
                     </div>
                  </form>
                  <p className="text-center">Or</p>
                  <div className='flex justify-center py-6 space-x-4'>
                    <button className='flex items-center bg-[#3b5998] text-white px-6 py-3 rounded-md'><span><FaFacebookF/></span> <span>Facebook</span></button>
                    <button onClick={hendleGoogleSignIn} className='flex items-center bg-[#d85040] text-white px-6 py-3 rounded-md'><span><FaGooglePlusG/></span> <span>Google</span></button>
                  </div>
                  <div className='pb-6'>
                    <p className='text-center'>Dont Have an Account? <Link className='hover:text-[#d85040] duration-500' to='/register'>Sign up now</Link> </p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;