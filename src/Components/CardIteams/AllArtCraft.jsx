import React from 'react';
import Hooks from '../Hooks/Hooks';
import CardAll from './CardAll';


const AllArtCraft = () => {
    const { data, loading } = Hooks();
    console.log(data);
    
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-5 justify-center md:grid-cols-2'>
                {
                data.map(datas=><CardAll key={datas.id} datas={datas}></CardAll>)
                }
            </div>
        </div>
    );
};

export default AllArtCraft;