import React from 'react';
import navBg from '../../assets/images/more/15.jpg';

import logo from '../../assets/images/more/logo1.png'

const Navbar = () => {

    return (

        <div className={`w-full bg-cover bg-center py-2  `}
            style={{
                backgroundImage: `url("${navBg}")`,
            }}
        >
            <div className=' flex items-center justify-center gap-3'>

                <img className='h-16 w-20' src={logo} alt="" />

                <h3 className='text-3xl font-bold text-white'>Espresso Emporium</h3>


            </div>
        </div>
    );
};

export default Navbar;