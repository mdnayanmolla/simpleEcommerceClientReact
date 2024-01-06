import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Swal from "sweetalert2";




const UpdateProduct = () => {
     // const [products, setProducts] = useState({})
     const product = useLoaderData()
     const {_id,name, price, photo, brand, description } = product
 

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const updateProduct = { name, price,brand,  photo, description }
        console.log(updateProduct);

        fetch(`https://assignemtn-10-server-e2n5acsaj-mdnayanmolla.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Update Success fully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    const [brands, setBrands] = useState([])
    console.log(brands)

    useEffect(() => {
        fetch('../brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))

    }, [])
    return (
        <div>
            <div className="bg-[#f7f8fb] px-[5%] py-24">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-4xl">Update Product</h2>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <span><Link  to='/'>Home</Link></span> <span><MdOutlineArrowForwardIos /></span>  <span><Link>Added Product</Link></span>
                    </div>
                </div>
            </div>

            <div className="w-full py-20">
                <div className="w-full shadow-md  md:w-2/4 mx-auto py-7 px-7">
                    <h2 className="text-3xl font-bold">Update Product</h2>
                    <form className="py-10" onSubmit={handleUpdateProduct}>
                        <div>
                            <input type="text" name="name" defaultValue={name} className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md"/>
                        </div>
                        <div className="mt-6">
                            <input type="text" name="price" defaultValue={price} className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Price" />
                        </div>
                        <div className="form-control w-full mt-6">
                            <select className="select select-bordered outline-none "  name="brand">
                                <option disabled selected  >{brand}</option>
                                {
                                    brands?.map(brand => <option key={brand.id}>{brand.Bname}</option>)
                                }
                            </select>
                        </div>
                        <div className="mt-6">
                            <input type="text" name="photo" defaultValue={photo}  className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Photo Url" />
                        </div>
                        <div className="mt-6">
                            <input type="text" name="description" defaultValue={description}  className="border border-[#dfe3e6] outline-none px-6 py-3 w-full rounded-md" placeholder="Your Photo Url" />
                        </div>
                        <div className="mt-6">
                            <button className="px-6 py-3 w-full rounded-md bg-[#ff324d] text-white">Update Product</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;