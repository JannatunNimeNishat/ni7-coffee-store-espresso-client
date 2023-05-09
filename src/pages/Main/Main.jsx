import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           {/* <Banner></Banner> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;