import React from 'react';
import Hooks from '../Hooks/Hooks';
import Cards from './Cards';
import Banner from './Banner/Banner';

const Home = () => {
    const {data, loading}=Hooks();
    return (
        <div>
            <Banner></Banner>
            <div className='mb-20'>
            <div className='grid lg:grid-cols-3 gap-5 justify-center md:grid-cols-2'>
                {
                data.map(datas=><Cards key={datas.id} datas={datas}></Cards>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;