import React, { useEffect, useState, useRef } from 'react'

export default function RandomProducts() {


    const [data, setData] = useState([]);
    const carroussel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/RandomProducts.json')
            .then((response) => response.json())
            .then(setData);
    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault();
        carroussel.current.scrollLeft -= carroussel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carroussel.current.scrollLeft += carroussel.current.offsetWidth;

    }

    if (!data || !data.length) return null;


    return (
        <div className='container2'>
            <h1 id="products-random-title">Recomendados para si !</h1>
            <div className='carroussel' ref={carroussel}>
                {data.map((item) => {
                    const { id, marca, desc, price, imageUrl, discount } = item;

                    return (

                        <div className='item' key={id}>
                            <div className='prod-discount'>{discount}</div>
                            <div className='image'>
                                <img src={imageUrl} alt='product' />
                            </div>
                            <div className='info'>
                                <span className='name'>{marca}</span>
                                <span className='desc-prod'>{desc}</span>
                                <span className='price-product'>{price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='buttons'>
                <button onClick={handleLeftClick}><img src='../Media/icons/right-arrow.png' alt='Scroll Left' /></button>
                <button onClick={handleRightClick}><img src='../Media/icons/right-arrow.png' alt='Scroll Right' /></button>
            </div>
        </div >

    )
}
