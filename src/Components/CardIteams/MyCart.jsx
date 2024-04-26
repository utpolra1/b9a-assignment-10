import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hooks from '../Hooks/Hooks';

const MyCart = () => {
    const {data, loading} =Hooks();
    return (
        <div>
            <h1>Hooks data {data.length}</h1>
        </div>
    );
};

export default MyCart;