
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ProductCard = ({ product,handleCart}) => {

    const { name, price, photo } = product || {}

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-[60%]' src={photo} alt="Shoes" /></figure>
                <div className=" py-5 px-5 space-y-2">
                    <div className=''>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <p className='text-[#ff324d]'>Price: {price}</p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 text-sm" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions flex justify-between">
                        <button onClick={()=> handleCart(product)}  className="btn bg-[#ff324d] text-white"> Add To cart</button>
                        <Link to={`/details/${product._id}`}><button className="btn bg-[#ff324d] text-white"> Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


ProductCard.propTypes = {
    product: PropTypes.object,
    handleCart:PropTypes.func
}
export default ProductCard;