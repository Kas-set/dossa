import { useState, useEffect } from "react";
import '../App.css'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                if (window.scrollY > 0) {
                    setNav(true);
                } else {
                    setNav(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( 
        <div style={{background:"",position:"sticky", top:"0"}} className={`md:mt-2 w-screen h-max z-20 sticky top-0 ${nav ? "scroll-background" : ""}   text-white font-bold drop-shadow-lg md:p-1`}>
            <div className="px-3 py-0 md:px-5 flex justify-between items-center w-full h-full  h-full border-2">   
                <div className=" bg-red-300 flex items-center  w-[100%] h-[max] md:p-0 border-2 " >  {/*La div de modif de la taille de la barre */}
                    <h1 className="text-3xl font-bold">DossaGroup</h1>
                    <section className="flex-col mx-3 justify-around   w-full h-full hover: ">

                        <div className="flex  justify-between w-full h-full px-1 pt-5 bg-">
                            <h3 className="hidden md:flex">Trouver tous vos plans</h3>
                            <a href="#t" className="hidden md:flex font-bold border-none bg-transparent ">Demandez un devis</a>
                        </div>
                        <ul className="hidden md:flex gap-5 border-t-4 border-zinc-300 h-full">
                            <li> <a href="#t">Accueil</a></li>
                            <li> <a href="#plans">Plans</a></li>
                            <li>Nos Réalisations</li>
                            <li>Nos Appartements</li>
                            <li>Qui Sommes-nous?</li>
                            <li>Contacts</li>
                        </ul>
                    </section>
                    <div className="md:hidden" onClick={handleClick}> {!nav ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>}
                    </div>
                </div>
            </div>
            <ul className={!nav ? "hidden" : 'absolute bg-blue-500 px-8 w-full h-[80vh] pt-10 md:hidden' }>
                <li className="border-b border-zinc-300 w-full rounded-sm  h-max hover:bg-blue-700">Accueil</li>
                <li className="border-b border-zinc-300 w-full rounded-sm  h-max hover:bg-blue-700">Plans</li>
                <li className="border-b border-zinc-300 w-full rounded-sm  h-max hover:bg-blue-700">Nos Réalisations</li>
                <li className="border-b border-zinc-300 w-full rounded-sm  h-max hover:bg-blue-700">Nos Appartements</li>
                <li className="border-b border-zinc-300 w-full rounded-sm  h-max hover:bg-blue-700">Qui sommes-nous?</li>
                <li className="border-b border-zinc-300 w-full rounded-sm  h-max hover:bg-blue-700">Contacts</li>
                <div className="flex flex-col my-4">
                    <button className="px-8 py-3 bg-zinc-100 border-2 border-blue-500 text-blue-500 font-semibold mb-4  hover:bg-blue-900"><a href="#t">Demandez un devis</a></button>
                    <h3 className="text-center font-bold text-3xl">Trouvez tous vos plans</h3>
                </div>

            </ul>
        </div>
    );
}
 
export default Navbar;
