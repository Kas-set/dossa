import React, { useState } from 'react';

const Card = (props) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };
    return (
        <div className="self-center card p-5 m-4  bg-transparent shadow-xl">
            <img className="h-[200px] w-[200px]" src={props.imageSrc} alt={props.imageAlt} />
            <h2 className="mt-6 mb-0 text-start text-2xl   font-bold shadow-inner bg-transparent border-top-custom">{props.title}</h2>
            <p className={isTruncated ? ' text-xl text-gray-600 py-2 max-w-md overflow-hidden' : 'overflow-hidden'}>{props.description}</p>
            <button onClick={toggleTruncate} className='hover:underline hover:bg-transparent hover:text-gray-500'>
                {isTruncated ? 'Voir plus' : 'Voir moins'}
            </button>
        </div>

    );}



export default Card;
