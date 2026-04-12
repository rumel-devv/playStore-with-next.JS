import TrendingApps from '@/components/homePage/TrendingApps';
import React from 'react';

const AppsPage = async () => {
    
    return (
        <div>
            <TrendingApps from='apps'></TrendingApps>
        </div>
    );
};

export default AppsPage;