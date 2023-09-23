// import React, { useState } from 'react';
import '../App.css'


const CardAchat = (props) => {
   
    return ( 

        <div className=" my-5 h-max w-full card  bg-slate-300 rounded-sm shadow-xl gap-4 grid grid-flow-row-dense md:grid-cols-2 ">
           <section className='col-span-1 w-full h-full'>
                 <div className='h-max max-w-auto gap-3   pb-0 shadow-inner mt-6 ml-6 p-3  grid grid-rows-2 grid-flow-col'>
                     <div className='bg-red-300 rounded-sm relative'>
                        <img style={{ width: '100px', height: '100px' }} src={props.imageSrc} alt="Image 1" />
                        <section className='w-[60%] h-[30px] bg-blue-900 absolute top-0 left-0  text-zinc-50 text-medium text-xl text-center'>{props.prix}</section>
                    </div>       
                    <div className='h-[100px] bg-green-300 rounded-sm'>
                        {/* <img style={{ width: '100%', height: '100%' }} src={props.imageSrc} alt="Image 2" /> */}
                    </div>       
                    <div className='row-span-2 col-span-3 rounded-sm  bg-blue-300 pb-'>
                        {/* <img style={{ width: '100%', height: '100%' }} src={props.imageSrc} alt="Image 3" /> */}
                    </div>       
                </div>
            </section>






             
        <section className=" p-2 col-span-1 md:col-span-1">
            <h2 className="text-3xl text-blue-500 mt-0 mb-0 text-start text-2xl font-bold bg-transparent">{props.title}</h2>               
             <h2 className=" mt-2 mb-0 text-start text-2xl font-bold ">{props.subtitle}</h2>
           <p className="p-2 text-xl text-gray-600 py-2 max-w-md overflow-hidden">
                {props.description}
            </p>
            <div className='grid grid-cols-3 gap-4'>
                <button className='border-2 border-blue-500 p-1 bg-blue-500 text-zinc-50 rounded-sm hover:bg-zinc-200 hover:text-blue-600'>Découvrir</button>
                <button className='border-2 border-blue-500 p-1 bg-blue-900 text-zinc-50 rounded-sm hover:bg-zinc-200 hover:text-blue-600'>Acheter</button>
                <span className='text-2xl w-max shadow-inner font-medium text-blue-900'>{props.numAchat}</span>
            </div>
         </section>

        </div>

    

     );
}
 
export default CardAchat;