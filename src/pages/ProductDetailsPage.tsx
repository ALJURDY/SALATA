import { useNavigate } from 'react-router-dom';
import NavButton from '../components/NavButton/NavButton';


const ProductDetailsPage = () => {
    const navigate = useNavigate();

    const navigateToBasket = () => {
        navigate('/BasketPage');
    };


    return (

        <>
            <NavButton buttonText="Continuer la commande" navigate={navigateToBasket} />
        </>

    );

}

export default ProductDetailsPage