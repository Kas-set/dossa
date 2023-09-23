
const Card_Appart = (props) => {
    return (
        <div className="bg-zinc-50 self-center rounded-md h-max card p-5 pb-10 m-4  bg-transparent filter drop-shadow-lg ">
            <img className="h-[200px] w-[100%]" src={props.imageSrc} alt={props.mageAlt} />
            <h2 className="mt-6 mb-0 text-start text-xl text-blue-900    font-bold bg-transparent  border-top-custom">{props.title}
            </h2>    
            <h2 className="mt-2 mb-0 text-start text-xl text-blue-900  font-bold  bg-transparent">{props.description}
            </h2>

            <div className=" float-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-30 h-9 text-blue-500 stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>

        </div>

    );}



export default Card_Appart;
