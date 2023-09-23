/* eslint-disable react/jsx-pascal-case */
import Card_Appart from "../components/Card_Appart.js";
import im1 from '../assets/images_accueil/others img/ConstructionExtension.jpg';
import im2 from '../assets/img nos appartements/Appart1.jpg';
import im3 from '../assets/img nos appartements/appart0.jpg';
import '../App.css'
const NosAppartements = () => {
    return ( 
        <div className="bg-slate-300">
            <div className=" gap-1 sm:grid grid-cols-2 md:grid-rows-2 lg: grid-cols-3">
                <Card_Appart
                    imageSrc={im3}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im1}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im3}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im1}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im1}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im1}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im1}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im2}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im2}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im2}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im2}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im3}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im3}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
                <Card_Appart
                    imageSrc={im3}
                    title="Appartements meublés"
                    description="2 chambres Sallon"                
                />
        </div>
        </div>
        
     );
}
 
export default NosAppartements;