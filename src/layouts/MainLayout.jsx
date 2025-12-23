import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
             <header>
                <Navbar />
            </header> 
            <main>
                <Outlet />
            </main>
            <Footer />
         </div>
    );
};

export default MainLayout;