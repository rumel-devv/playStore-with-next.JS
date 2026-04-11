import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';


const AppCard = ({app}) => {
    return (
         <div  className="card bg-base-100  shadow-sm">
                    <figure className='bg-gray-200 py-6'>
                 <Image className=' rounded-2xl'
                 width={100}
                 height={100}
                src={app.image}
               alt="Shoes" />
               </figure>
            <div className="card-body">
            <h2 className="card-title ">{app.title}</h2>
             
            <div className="flex justify-between ">
               <button className='btn text-green-600'> <FaDownload></FaDownload> {app.downloads} </button>
               <button className='btn text-amber-500'> <FaStar></FaStar> {app.ratingAvg} </button>
           </div>

           <Link href={`/apps/${app.id}`}>
           <button className=' w-full bg-purple-600 btn text-white mt-1.5'>View Details</button>
           </Link>
             </div>
                      </div>
    );
};

export default AppCard;