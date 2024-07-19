import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductRecommendations } from './ProductRecommendations';

export const Product = () => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    const getData = async (id) => {
        const rs = await fetch(`https://fakestoreapi.com/products/${id}`);
        const jsonRs = await rs.json();
        setData(jsonRs);

        const rsv = await fetch('https://fakestoreapi.com/products');
        const jsonRsv = await rsv.json();
        const recom = jsonRsv.filter((x) => x.category === jsonRs.category && x.id !== jsonRs.id);

        setProducts(recom);
    };

    useEffect(() => {
        getData(id);
    }, [id]);

    return (
        <div className='w-full h-screen grid place-content-center'>
            <div className='font-PrincipalFont w-10/12 h-[800px] m-auto p-8 flex flex-row max-h-[650px] place-content-around'>
                <div className='w-1/2 p-[10px] overflow-hidden'>
                    <figure className='w-full grid place-content-center'>
                        <img src={data.image} className='max-w-[400px] h-full object-cover' alt={data.title}></img>
                    </figure>
                </div>
                <div className='w-1/2 px-10 py-20'>
                    <h1 className='lg:text-[30px] mb-4 font-bold uppercase text-center md:text-[25px] sm:text-[20]'>{data.title}</h1>
                    <span className='md:text-[14px] text-primary-palet-700 mb-8 sm:text-[12px]'>{data.description}</span>
                    <div className='flex flex-col items-center mt-8'>
                        <h2 className='lg:text-[30px] mb-4 md:text-[25px] sm:text-[20px]'>$/. {data.price}</h2>
                        <button className='w-[100px] h-[40px] rounded-lg mb-8 mx-auto bg-primary-palet-950 text-primary-palet-50'>Add to Cart</button>
                        <span>Customers also viewed</span>
                        <ul className='flex flex-row gap-2'>
                            {products.map(product => <ProductRecommendations key={product.id} product={product} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};