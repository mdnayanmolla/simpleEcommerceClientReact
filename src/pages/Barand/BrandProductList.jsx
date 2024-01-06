
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const BrandProductList = ({product}) => {
    // const { name, price, photo } = product || {}
    return ( 
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img  className='h-[60%]' src={product.photo} alt="Shoes" /></figure>
                <div className=" py-5 px-5 space-y-2">
                    <div className=''>
                        <h2 className="card-title">{product.name}</h2>
                    </div> 
                   <div className='flex justify-between'>
                   <p  className='text-[#ff324d] font-semibold'>Price:${product.price}</p>
                   <p  className='text-[#ff324d] font-semibold'>Brand: {product.brand}</p>
                   </div>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 text-sm" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions flex justify-between">
                        <button className="btn bg-[#ff324d] text-white"> Add To cart</button>
                        <Link to={`/details/${product._id}`}><button className="btn bg-[#ff324d] text-white"> Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
BrandProductList.propTypes = {
    product:PropTypes.object,
    brandPorduct:PropTypes.object
}
export default BrandProductList;