import React from 'react';
import bannerBg from '../../assets/images/more/3.png'
import img1 from '../../assets/images/icons/1.png'
import img2 from '../../assets/images/icons/2.png'
import img3 from '../../assets/images/icons/3.png'
import img4 from '../../assets/images/icons/4.png'
const Banner = () => {
    return (

        <div>
            <div className="hero min-h-[calc(100vh-80px)]" style={{ backgroundImage: `url("${bannerBg}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn btn-primary border-0 bg-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>
            {/* category */}
            <div className='bg-[#ECEAE3] h-[200px]'>
                <div className=' my-container pt-5 flex justify-between gap-5 p-3'>
                    <div>
                        <img src={img1} alt="" />
                        <h3 className='text-xl font-semibold mt-2 mb-1'>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <h3 className='text-xl font-semibold mt-2 mb-1'>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <h3 className='text-xl font-semibold mt-2 mb-1'>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                        <h3 className='text-xl font-semibold mt-2 mb-1'>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;