import im1 from '../assets/img nos appartements/Appart1.jpg';
import CardRealisations from '../components/CardRealisations';
// import im2 from '../assets/images_accueil/others img/Rénovation.jpg';
// import im3 from '../assets/images_accueil/others img/Architect_et_design.jpg';
// import team_img from '../assets/images_accueil/others img/team.jpg';
import Header from '../components/Header';
// import '../App.css';

const NosRealisations = () => {
    return ( 
        <div className="bg-slat pt-4 w-screen px-6 grid 2xl:grid-cols-2 gap-4 ">
            <CardRealisations
                imageSrc1={im1}
                title="La Casa de Papel"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tempore suscipit quisquam dignissimos pariatur id, autem minus consectetur officia optio voluptas voluptatum fuga, laudantium tenetur consequatur, eius inventore enim incidunt."
            />
            <CardRealisations
                imageSrc1={im1}
                title="Le Moza"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tempore suscipit quisquam dignissimos pariatur id, autem minus consectetur officia optio voluptas voluptatum fuga, laudantium tenetur consequatur, eius inventore enim incidunt."
            />
            <CardRealisations
                imageSrc1={im1}
                title="La Bijouterie GMG"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tempore suscipit quisquam dignissimos pariatur id, autem minus consectetur officia optio voluptas voluptatum fuga, laudantium tenetur consequatur, eius inventore enim incidunt."
            />
            
        </div>
     );
}
 
export default NosRealisations;