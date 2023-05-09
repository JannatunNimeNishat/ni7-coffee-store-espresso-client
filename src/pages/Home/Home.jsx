import React, { useState } from 'react';
import homeBg from '../../assets/images/more/1.png'
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleCoffee from '../SingleCoffee/SingleCoffee';
const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    // console.log(coffees);
    return (

        <div>
            <Banner></Banner>
            {/* <div className='mt-20 mb-8 h-[100vh] bg-cover ' style={{ backgroundImage: `url("${homeBg}")` }}> */}
            <div className='mt-20 mb-8 bg-cover h-[calc(100vh-100px)] w-full ' style={{ backgroundImage: `url("${homeBg}")` }}>
                <div className='my-container text-center bg-opacity-75'>
                    <p className=''>-- Sip & Savor --</p>
                    <h3 className='text-3xl font-semibold  mt-3 '>Our Popular Products</h3>
                    <Link to='/addCoffee'>
                        <button className='px-3 py-2 bg-[#E3B577] text-white font-bold rounded mt-4'>Add Coffee</button>
                    </Link>
                </div>
                {/* coffees */}
                <div className='mt-5 my-container md:grid grid-cols-2 gap-5'>
                    {
                        coffees &&
                        coffees.map(coffee => <SingleCoffee
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></SingleCoffee>)
                    }
                </div>
            </div>



        </div>
    );
};

export default Home;