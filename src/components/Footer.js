const Footer = () => {
    return (  
        <div className="bg-slate-300 text-blue-900  pt-4">
            <div className="top flex m-5 px-2 gap-6 md:justify-between">
                <section>
                    <h2 className=" font-bold uppercase" >Configurez votre maison avec un devis gratuit </h2>
                    <h4>En quelques Clics, recevez un devis par mail</h4>
                </section>
                <section>
                    <button className="uppercase border-2 p-2 rounded bg-zinc-50 font-semibold text-blue-900 w-max hover:bg-blue-900 hover:text-zinc-50">Devis gratuit</button>
                </section>
            </div>


            <div className="bottom grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-blue-900 text-zinc-50 md:grid-rows-1 grid-cols-3">
                <section className="col-span-3 border-2 md:col-span-1">
                    <h2>fsdjfv dfdfd </h2>
                    <h1 className="font-black text-4xl h-max">
                        DossaGroup

                    </h1>

                </section>

                <section className="border-2 col-span-1 flex gap-5 px-2 my-4 md:col-span-1">

                        <ul>
                        <li>Accueil</li>
                            <li>Plans</li>
                            <li>Nos Réalisations</li>
                            <li>Nos Appartements</li>
                            <li>Qui Sommes-nous?</li>
                            <li>Contacts</li>
                        </ul>

                        <ul>
                            <li className="mt-[45%] pb-0">
                                <input className="" type="text" placeholder="..."/>
                            </li>

                            <li className="float-right mt-0 pt-0">
                                <button className="capitalize bg-blue-500 px-2 p-1 mt-2 rounded-md">Envoyer</button>
                            </li>
                            <li className="mt-8 float-right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda, quas natus quasi doloribus excepturi similique aspernatur</p>
                            </li>

                        </ul>
                            
                </section>


                <section className="col-span-3 mt-4 md:col-span-1">
                    <div className="w-[250px] h-[250px] rounded-md bg-green-500 mx-auto">

                    </div>
                </section>


            </div>
        </div>
        
    );
}
 
export default Footer;