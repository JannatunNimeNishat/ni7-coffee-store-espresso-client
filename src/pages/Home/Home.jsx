import React from 'react';
import homeBg from '../../assets/images/more/1.png'
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
const Home = () => {
    return (

        <div>
            <Banner></Banner>
            <div className='mt-20 mb-8 h-[100vh] bg-cover ' style={{ backgroundImage: `url("${homeBg}")` }}>
                <div className='my-container text-center bg-opacity-75'>
                    <p className=''>-- Sip & Savor --</p>
                    <h3 className='text-3xl font-semibold text-white mt-3 '>Our Popular Products</h3>
                    <Link to='/addCoffee'>
                        <button className='px-3 py-2 bg-[#E3B577] text-white font-bold rounded mt-4'>Add Coffee</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;