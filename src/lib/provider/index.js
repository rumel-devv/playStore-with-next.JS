'use client'
import InstallAppsProvider from '@/context/InstallAppsProvider';
import React from 'react';

const Provider = ({children}) => {
    return (
        <InstallAppsProvider> 
             {children}
        </InstallAppsProvider>
    );
};

export default Provider;