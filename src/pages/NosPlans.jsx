import im1 from '../assets/images_accueil/others img/ConstructionExtension.jpg';
// import im2 from '../assets/images_accueil/others img/Rénovation.jpg';
// import im3 from '../assets/images_accueil/others img/Architect_et_design.jpg';
// import team_img from '../assets/images_accueil/others img/team.jpg';
import Header from '../components/Header';
// import '../App.css';


import CardAchat from "../components/CardAchat";
const NosPlans = () => {
    return (  
        <div className="bg-zinc-50 px-5">
        <section className='w-auto text-center'>
            <h3 className='text-2xl text linecamp2'>Premier site de recherche de PLANS de MAISON <span>Trouver la maison de vos rêves</span> </h3>

        </section>
        <div>
            <CardAchat
                imageSrc={im1}
                imageAlt={"im1"}
                prix="100.000"
                title={"Mini Villa"}
                subtitle={"2 chambres + salon + cuisine"}
                description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."}
                numAchat={2001}
            />
        </div>
        <div>
            <CardAchat
                imageSrc={im1}
                imageAlt={"im1"}
                prix="150.000"

                title={"Mini Villa"}
                subtitle={"2 chambres + salon + cuisine"}
                description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."}
                numAchat={2001}
            />
        </div>
        <div>
            <CardAchat
                imageSrc={im1}
                imageAlt={"im1"}
                title={"Mini Villa"}
                prix="190.000"
                subtitle={"2 chambres + salon + cuisine"}
                description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."}
                numAchat={2001}
            />
        </div>
        <div>
            <CardAchat
                imageSrc={im1}
                imageAlt={"im1"}
                title={"Mini Villa"}
                prix="250.000"
                subtitle={"3 chambres + salon + cuisine"}
                description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."}
                numAchat={2001}
            />
        </div>
        <div>
            <CardAchat
                imageSrc={im1}
                imageAlt={"im1"}
                title={"Mini Villa"}
                prix="200.000"
                subtitle={"2 chambres + salon + cuisine"}
                description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem."}
                numAchat={2001}
            />
        </div>
      </div>  
    );
}
 
export default NosPlans
;