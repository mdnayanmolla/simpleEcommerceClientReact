import { useContext } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Regidter = () => {
  const {createUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
    const handleSignUp = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name,email,password,photo)


        if(password.length<6){
            toast.error('Please Passsword Set at least 6 charactre longer')
            return;
          } else if (!/^[#@$!%*?&][A-Za-z0-9]/.test(password)){
            toast.error('Please set uppercase lower case $ Spical Characters (#@$!%*?&)')
            return;
          }
  


        createUser(email,password)
        .then(result=>{
            console.log(result)

            const user = {email}

           fetch('https://assignemtn-10-server-j5q40lu1u-mdnayanmolla.vercel.app/user',{
             method: 'POST',
             headers: {
                'content-type': 'application/json'
             },
             body: JSON.stringify(user)
           })
           .then(res=> res.json())
           .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Created Success fully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  form.reset()
            }
           })

           navigate(location?.state ? location.state : '/')

        })
        .catch(error=>{
            // setErrorMessage(error.message);
            Swal.fire({
              title: error.message,
              text: "Plase Fixed This Error",
              icon: 'error',
              confirmButtonText: 'Cool'
            });
              // console.log(error.message)
              
          })
        
    }


    return (
        <div>
            <div className="bg-[#f7f8fb] px-[5%] py-24">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-4xl">Create An Account</h2>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <span><Link to='/'>Home</Link></span> <span><MdOutlineArrowForwardIos/></span>  <span><Link>Login</Link></span>
                    </div>
                </div>
            </div>

            <div className="w-full py-20">
                <div className="shadow-md w-full  md:w-2/4 mx-auto py-7 px-7">
                    <h2 className="text-3xl font-bold">Create An Account</h2>
                  <form className="py-10" onSubmit={handleSignUp}>
                     <div>
                        <input type="text" name="name" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Name"/>
                     </div>
                     <div className="mt-6">
                        <input type="email" name="email" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Email"/>
                     </div>
                     <div className="mt-6">
                        <input type="password" name="password" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Password"/>
                     </div>
                     <div className="mt-6">
                        <input type="text" name="photo" className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Photo Url"/>
                     </div>
                     <div className="mt-6 flex py-6">
                        <div className="flex justify-between w-full ">
                            <label>
                                <input type="checkbox" className="px-2 py-2"/>
                                <span> I agree to terms & Policy.</span>
                            </label>
                        </div>
                        <div></div>
                     </div>
                     <div className="mt-6">
                        <button className="px-6 py-3 w-full rounded-md bg-[#ff324d] text-white">SignIn Now</button>
                     </div>
                  </form>
                  <p className="text-center">Or</p>
                  <div className='flex justify-center py-6 space-x-4'>
                    <button className='flex items-center bg-[#3b5998] text-white px-6 py-3 rounded-md'><span><FaFacebookF/></span> <span>Facebook</span></button>
                    <button className='flex items-center bg-[#d85040] text-white px-6 py-3 rounded-md'><span><FaGooglePlusG/></span> <span>Google</span></button>
                  </div>
                  <div className='pb-6'>
                    <p className='text-center'>Already have an account?  <Link className='hover:text-[#d85040] duration-500' to='/login'>Register</Link> </p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Regidter;