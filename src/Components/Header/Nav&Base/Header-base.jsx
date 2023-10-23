import './Header-base.css';
import { FiArrowRight } from 'react-icons/fi'
export default function HeaderBase() {
    return (
        <div className='container-HeaderBase'>
            <div className='img-Header'>
                <img className='img-HeaderBase' src="/neve-pet-shop-04.webp" alt="" />
            </div>
            <div className='text-HeaderBase'>
                <h2>Discover the finest <br /> products for your pet</h2>
                <h3>A beautifully simple starter site with WooCommerce integration</h3>
            </div>
            <div className='header-bottom'>
                <a href="#" className='header-bottom-link'>Go to Shop</a>
                <FiArrowRight className='arrow' />
            </div>
        </div >
    )
}
