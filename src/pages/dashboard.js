import React from 'react';

import Layout from '../components/Layout'

const dashboard = () => {
    return (
        <Layout>
            <div className="container mt-4 mb-4">
                <h5>MY CONCERT CENTER</h5>
                <br/>
                <div className="row">
                    <div className="col-3">
                        Profile
                    </div>
                    <div className="col">
                        my concerts
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default dashboard;
