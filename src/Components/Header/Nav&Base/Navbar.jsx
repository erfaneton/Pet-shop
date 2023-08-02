import './Navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
export default function Navbar() {
    return (
        <div className='nav-top-item'>
            <div className='nav-top-left'><img src="public/neve-pet-shop-logo.webp" alt="" className='img-nav-top' /></div>
            <ul className='menu'>
                <li className='nav-top-right'><a href="#" className='nav-top-links-home'>HOME</a></li>
                <li className='nav-top-right'><a href="#" className='nav-top-links'>ABOUT</a></li>
                <li className='nav-top-right'><a href="#" className='nav-top-links'>SHOP</a></li>
                <li className='nav-top-right'><a href="#" className='nav-top-links'>BLOG</a></li>
                <li className='nav-top-right'><a href="#" className='nav-top-links'>CONTACT</a></li>
                <li className='nav-top-right'><a href="#" className='nav-top-links'><AiOutlineSearch className='search' /></a></li>
            </ul>
        </div>
    )
}
