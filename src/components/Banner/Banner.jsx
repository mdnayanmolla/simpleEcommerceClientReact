
import background from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='h-[70vh] bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
            <div className='px-[5%] flex items-center h-full'>
                <div className='space-y-2'>
                    <h5 className='text-xl font-bold'>50% off in all products</h5>
                    <h1 className='text-5xl  font-bold mb-20' >Shopwise Fashion House</h1>
                    <button className='bg-[#ff475f] px-4 py-2 text-white '> Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;