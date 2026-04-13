'use client'
import AppCard from '../Ui/AppCard';
import { PacmanLoader } from 'react-spinners';
import UseApps from '../hooks/UseApps';
import Link from 'next/link';
import RippleLoader from '../nurui/ripple-loader';


const TrendingApps = ({from}) => {
console.log(from);
  const {apps,loading} = UseApps()


    return (
        <div className='w-full md:w-10/12 mx-auto my-10 text-center'>
           <h2 className='text-3xl font-bold mb-3'>{from === 'homepage' ? "Trending Apps" : "Apps"}</h2>
           <p> All  Apps on the Market developed by us,You can download From here </p>
           
         { loading ? <div className='flex justify-center items-center py-10'><RippleLoader/> </div> :  <div className='grid gap-4  md:w-10/12 mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-6 p-3'>
             {apps.slice(0, from === 'homepage' ? 9 : apps.length - 1).map((app,index) => {
                return (  
                     <AppCard key={index} app={app} ></AppCard>
                )
              })}
             </div>}              
                  {from === 'homepage' ? <Link href='/apps' >
                  <button className=' bg-linear-to-r from-purple-800 to-purple-500 btn text-white'>View all</button>
                  </Link>  : ""}                                 
        </div>
    );
};

export default TrendingApps;