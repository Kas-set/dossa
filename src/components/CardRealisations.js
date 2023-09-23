const CardRealisations = (props) => {
    return (  
        <div className="my-5 bg-zinc-50 card w-full rounded-sm filter drop-shadow-lg gap-1 grid grid-flow-row-dense md:grid-rows-1">
           <section className='w-full h-full'>
                <div className=' gap-3 shadow-inner mt-6 mx-3 grid grid-cols-2'>
                   <section className="h-[100%] w-[100%]">
                        <div className="bg-red-800 rounded-sm w-[100%] h-[100%] ">
                            <img style={{ width: '100%', height: '100%' }} src={props.imageSrc1} alt="Image 2" />
                        </div>
                   </section> 

                   <section className=" w-[100%] h-[100%]  grid grid-flow-col grid-cols-2 grid-rows-2 gap-3" >
                            <div className='bg-red-300 rounded-sm'>
                                <img style={{ width: '100px', height: '100px' }} src={props.imageSrc1} alt="Image 1" />
                            </div>       
                            <div className='bg-green-300 rounded-sm'>
                                <img style={{ width: '100%', height: '100%' }} src={props.imageSrc2} alt="Image 2" />
                            </div>       
                            <div className='rounded-sm  bg-blue-300 pb-'>
                                <img style={{ width: '100%', height: '100%' }} src={props.imageSrc3} alt="Image 3" />
                            </div>       
                            <div className='rounded-sm  bg-blue-600 pb-'>
                                <img style={{ width: '100%', height: '100%' }} src={props.imageSrc3} alt="Image 4" />
                            </div>
                   </section>     

                    <div className=" col-span-2 pl-[70%] lg:pl-[80%] w-[max]">
                        <button className='w-[100%] border-2 border-blue-500 p-1 bg-blue-500 text-zinc-50 rounded-sm hover:bg-zinc-200 hover:text-blue-600'>Découvrir</button>
                    </div>
                </div>

            </section>






             
        <section className=" py-3 md:pb-1 px-5 col-span-1 md:col-span-1  mt-2">
            <h2 className="text-3xl text-blue-900  text-start text-2xl font-bold bg-transparent w-max ">{props.title}</h2>               
           <p className="p-1 mb-0 text-xl text-gray-500 py-2 max-w-md overflow-hidden md:max-w-full">
                {props.description}
            </p>
         </section>

        </div>

    );
}
 
export default CardRealisations;