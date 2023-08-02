import './Top-main.css'
import { BsFillCircleFill } from "react-icons/bs";
export default function TopMain({ icon, title }) {
    return (

        <div className='container'>
            <div className='icons'>
                <span className='circle'><BsFillCircleFill></BsFillCircleFill></span>
                <div className='icon'>
                    <span className='item-circle'>{icon}</span>
                </div>
            </div>
            <div className='description'>
                <h3>{title}</h3>
                <h5>We care about your pet as you do, and <br /> deliver the finest materials</h5>
            </div>
            <div className='footer'></div>
        </div>
    )
}
