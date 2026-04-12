import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';
import { FaChartPie, FaCog, FaHome, FaMobileAlt } from 'react-icons/fa';

const DashboardLayout = ({children}) => {
    return (
          <div>
               <Navbar></Navbar>
               {children}
                <Footer></Footer>
            </div>
    );
};

export default DashboardLayout;