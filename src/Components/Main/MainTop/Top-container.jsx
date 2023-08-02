import './Top-container.css';
import TopMain from './Top-main';
import { FaShippingFast } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

export default function TopContainer() {
    return (
        <div className='bg'>
            <TopMain icon={<FaPaw></FaPaw>} title="Pet-friendly Materials" />
            <TopMain icon={<FaShippingFast></FaShippingFast>} title="Free Shipping" />
            <TopMain icon={<FaMoneyCheckAlt></FaMoneyCheckAlt>} title="Flexible Payments" />
        </div>
    )
}
