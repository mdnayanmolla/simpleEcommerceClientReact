
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Brand = ({brandData}) => {
       const {Blogo,Bname} = brandData || {}
    //    console.log(brandData)
    return (
       
            <div> 
                <Link to={`/brands/${Bname}`}> <img className='w-full' src={Blogo} /></Link>
            </div>
           
       
    );
};
Brand.propTypes = {
    brandData:PropTypes.object
}
export default Brand;