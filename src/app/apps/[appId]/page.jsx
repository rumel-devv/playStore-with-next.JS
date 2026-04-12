import React from 'react';

const AppsPromise = async () => {
    const res =  await fetch('http://localhost:3000/data.json')
    const data = await res.json()
    return data;
}

const AppdtlsPage = async ({params}) => {
    const {appId} = await params 
     const apps = await AppsPromise()
     const aspectedApps = apps.find(app => app.id === Number(appId)) 
     console.log(aspectedApps);
    return (
        <div>
            <h1>This app details page  </h1>
        </div>
    );
};

export default AppdtlsPage;