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
            <main className='min-h-screen p-4'>
                <Outlet />
            </main>
            <Footer />
         </div>
    );
};

export default MainLayout;