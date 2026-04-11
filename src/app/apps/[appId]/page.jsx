import React from 'react';

const AppdtlsPage = async ({params}) => {
    const {appId} = await params 
    console.log(appId);
    return (
        <div>
            <h1>This app details page</h1>
        </div>
    );
};

export default AppdtlsPage;