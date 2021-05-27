import React from 'react';

import Layout from '../components/Layout'
import HomeHero from '../components/Hero/HomeHero'
import Concert from '../components/Concerts/Concert';

const concerts = () => {
    return (
        <Layout>
            <HomeHero />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Concert />
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </Layout>
    );
}

export default concerts;
