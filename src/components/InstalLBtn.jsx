'use client'
import { InstallAppsContext } from '@/context/InstallAppsContext';
import { useContext } from 'react';
import { FaDownload } from 'react-icons/fa';
import { toast } from 'react-toastify';


const InstalLBtn = ({expectedApps}) => {
    const { installApps,setInstallApps} = useContext(InstallAppsContext)  

const handleInstall = () => {
     setInstallApps([...installApps,expectedApps])
     toast.success('Apps Download succesfully')
}
  const isIntalled = installApps.find(app =>   app.id === expectedApps.id)
  
    return (
        <div>
             <button  disabled={isIntalled ? true : false} onClick={() => handleInstall()}  className={`btn ${isIntalled ? "bg-red-400 text-white" :'text-green-600 ' }`}> <FaDownload></FaDownload> {`${isIntalled ? 'Instaled': 'Download Now'}`} </button>

        </div>
    );
};

export default InstalLBtn;