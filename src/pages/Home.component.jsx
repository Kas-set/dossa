import Card from "../components/Card";
import im1 from '../assets/images_accueil/others img/ConstructionExtension.jpg';
import im2 from '../assets/images_accueil/others img/Rénovation.jpg';
import im3 from '../assets/images_accueil/others img/Architect_et_design.jpg';
import team_img from '../assets/images_accueil/others img/team.jpg'
import other_1 from '../assets/images_accueil/others img/istockphoto-842220830-1024x1024.jpg'
import other_2 from '../assets/images_accueil/others img/Architect_et_design.jpg'
import other_3 from '../assets/images_accueil/others img/plans.jpg'
import other_4 from '../assets/images_accueil/others img/ConstructionExtension.jpg';
import other_5 from '../assets/images_accueil/others img/ConstructionExtension.jpg';
import other_6 from '../assets/images_accueil/others img/ConstructionExtension.jpg';
import ScrollingContent from '../components/ScrollingContent';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
const images = [
  { src: other_1, alt: 'Construction/Extension' },
  { src: other_2, alt: 'Rénovation' },
  { src: other_3, alt: 'Architecture/Design' },
  { src: other_4, alt: 'Architecture/Design' },
  { src: other_5, alt: 'Architecture/Design' },
  { src: other_6, alt: 'Architecture/Design' },
 
];
    return (  
        <div className="">
                <div className="bg-slate-300 text-gray-500 pb-6 w-screen ">
                    <div className=" text-center mt-[5vh] ">
                        <h1 className="font-black text-5xl md:text-3xl">DossaGroup</h1>
                        <h4 className="font-medium text-2xl md:text-xl">Vous propose les plans de votre futur maison</h4>
                    </div>


                    <div className=" cards  flex-col md:grid grid-cols-3 items-center md:flex ">
                        <Card
                            imageSrc={im1}
                            imageAlt="Construction/Extension"
                            title="Construction/Extension"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."
                        />
                        <Card
                            imageSrc={im2}
                            imageAlt="Rénovation"
                            title="Rénovation"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."
                        />
                        <Card
                            imageSrc={im3}
                            imageAlt="Architecture/Design"
                            title="Rénovation"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."
                        />
                        {/* Ajoutez d'autres */}
                    </div>

                    <div className=" border-1 border-none rounded-sm text-md text-zinc-200 bg-blue-500 p-5 m-5 mt-1 mb-0 grid grid-rows-1 md:grid-cols-2 h-full gap-6 ">
                        
                            <div className="left shadow-inner text-md">
                                        <h2 className="text-zinc-200 p-2 m-4 text-xl text-center"> Découvrez les projets déjà réalisés et <span className="text-zinc-50 font-bold text-xl">trouvez la bonne idée </span> </h2>
                                
                                <ul className="">
                                    
                                    <li>
                                        
                                        <div className="flex">
                                            <div className="w-[20px] h-[20px] border-2 bg-zinc-50 rounded-full mr-1"></div>
                                            <section className="font-bold text-zinc-50 text-2xl ">Plusieurs réalisations à notre actif</section>
                                        </div>
                                    
                                        <section className="ml-[28px]">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ad veritatis velit. Rem dicta architecto, ea sunt obcaecati recusandae non porro! Ipsum incidunt illo velit facilis eius quam rem aliquid?
                                            </p>
                                        </section>
        
                                    </li>
                                    <li>
                                        <div className="flex">
                                            <div className="w-[20px] h-[20px] border-2 bg-zinc-50 rounded-full mr-1"></div>
                                            <section className="font-bold text-zinc-50 text-2xl ">APS & APD à volonté</section>
                                        </div>
                                    
                                        <section className="ml-[28px]">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ad veritatis velit. Rem dicta architecto, ea sunt obcaecati recusandae non porro! Ipsum incidunt illo velit facilis eius quam rem aliquid?
                                            </p>
                                        </section>
        
                                    </li>
                                    <li>
                                        <div className="flex">
                                            <div className="w-[20px] h-[20px] border-2 bg-zinc-50 rounded-full mr-1"></div>
                                            <section className="font-bold text-zinc-50 text-2xl  ">Photos et réalisations</section>
                                        </div>
                                    
                                        <section className="ml-[28px]">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ad veritatis velit. Rem dicta architecto, ea sunt obcaecati recusandae non porro! Ipsum incidunt illo velit facilis eius quam rem aliquid?
                                            </p>
                                        </section>
                                        
                                    </li>
                                </ul>
                                <button className="font-bold border-1  bg-blue-900 p-3 md:ml-[35%] ml-[20%] mt-[2%] :  rounded-sm  hover:border-blue-50 hover:bg-zinc-200 hover:text-blue-900 border-2">Trouvez un Plan </button>
                            </div>
                            <div className="right">
                                <img className=" w-screen h-[400px] md:w-[100%] h-[100%] rounded-md shadow-inner " src={team_img} alt="" />
                            </div>
                        
                    </div>
                </div>

                
                <div className="bottom">

                    <div className="mt-0 py-5 bg-zinc-50 px-6"> 
                        {/* Intégration du composant ScrollingContent */}
                            <ScrollingContent images={images} />

                    </div>
                
                    <div className="sponsors p-6 mb-0 bg-zinc-50 flex border-2">
                        <span className="max-w-md text-3xl text-blue-900 font-medium">Partenaires et Sponsors</span>
                        <ul className="mx-9 grid grid-cols-5 md:flex items-center gap-2">
                            <li className="w-[50px] h-[25px] bg-lime-950 border-2 border-lime-950" ></li>
                            <li className="w-[50px] h-[25px] bg-amber-950 border-2 border-amber-950" ></li>
                            <li className="w-[50px] h-[25px] bg-gray-900 border-2 border-gray-900" ></li>
                            <li className="w-[50px] h-[25px] bg-lime-700 border-2 border-lime-700" ></li>
                            <li className="w-[50px] h-[25px] bg-orange-700 border-2 border-orange-700" ></li>
                            <li className="w-[50px] h-[25px] bg-blue-900 border-2 border-blue-900" ></li>
                            <li className="w-[50px] h-[25px] bg-amber-500 border-2 border-amber-500" ></li>
                            <li className="w-[50px] h-[25px] bg-lime-700 border-2 border-lime-700" ></li>
                            <li className="w-[50px] h-[25px] bg-orange-700 border-2 border-orange-700" ></li>
                            <li className="w-[50px] h-[25px] bg-amber-500 border-2 border-amber-500" ></li>
                        
                        </ul>
                     </div>


                </div>



         </div>

    );
}
 
export default Home;
