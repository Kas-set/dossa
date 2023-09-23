import Navbar from './Navbar';
import backgroundImage from '../assets/images_accueil/background_img/Bg.jpg'; // Assurez-vous que le chemin d'accès à l'image est correct

const Header = () => {
    return ( 
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw', // Largeur de l'écran
                // height:'50vh',
                maxHeight: 'auto', // Hauteur souhaitée
                margin:0,
                padding:'0',
                boxSizing:'border-box',
                position: 'relative', // Pour positionner correctement le contenu
                opacity:'95%',
            }}
            className='relative h-[95vh] max-h-max '
        >
            <Navbar />
             {/* Ajoutez un pseudo-élément ::before pour l'assombrir */}
             <div
                style={{
                    position: 'absolute',
                    content: '',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.2)', // Couleur semi-transparente pour assombrir
                }}
            ></div>
            <section className='hidden md:block absolute ml-[40%] right-0 bottom-[0%] px-[5%] border-2 h-max'>
                <h1 className='text-zinc-50 font-black text-4xl'>
                    Première plateforme d'achat de plan en Afrique
                </h1>
                <p className='text-zinc-50 text-2xl float-right p-5 max-w-5xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id cum dicta? Recusandae, reprehenderit doloremque quis cum cupiditate error suscipit commodi, perspiciatis quam magni rerum accusantium laborum, ab eaque voluptatem.
                </p>
                

            </section>
        </div>
    
     );
}

export default Header;





