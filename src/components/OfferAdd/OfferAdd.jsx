import Offer1 from '../../assets/add.jpg'
import Offer2 from '../../assets/add2.jpg'

const OfferAdd = () => {
    return (
        <div className="grid md:grid-cols-2 px-[5%] gap-5 my-16">
            <div className='h-[50vh] grid grid-cols-2 items-center' style={{ backgroundImage: `url(${Offer2})` }}>
                <div></div>
                <div className='space-y-2'>
                <p className='text-xl font-bold'>Super Sale</p>
                <h1 className='text-3xl  font-bold' >New Collection</h1>
                <button className='bg-[#ff475f] px-4 py-2 text-white '>Shop Now</button>
                </div>
            </div>
            <div className='h-full grid grid-cols-2 items-center' style={{ backgroundImage: `url(${Offer1})` }}>
                <div></div>
               <div className='space-y-2'>
                <h1 className='text-3xl  font-bold'>New Season</h1>
                <p className='text-xl font-bold'>Sale 40% Off</p>
                <button className='bg-[#ff475f] px-4 py-2 text-white '>Shop Now</button>
               </div>
            </div>
        </div>
    );
};

export default OfferAdd;