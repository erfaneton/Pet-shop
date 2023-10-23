import './Main-bottom.css'
import PropsMainBottom from './Props-main-bottom/Props-main-bottom'


export default function MainBottom() {
    return (
        <div>
            <div className='contaner-main-bottom'>
                <div className='container-items-main-bottom'>
                    <div className='text-header-main-bottom'><h1 className='h-header-main'>Featured Products</h1></div>
                    <div className='bar-space'></div>
                    <div className='items-main-bottom'>
                        <PropsMainBottom image={'neve-pet-shop-19.webp'} title={'Benana Sweater'} price={'$32.00'} />
                        <PropsMainBottom image={'neve-pet-shop-18.avif'} title={'Dog Yellow Sweater'} price={'$44.00'} />
                        <PropsMainBottom image={'neve-pet-shop-24.webp'} title={'Cute Little Puppy Sweater'} price={'$65.00'} />
                    </div>
                    <div className='button-main-bottom'><h2 className='h2-button-main-bottom'>BROWSE ALL PRODUCTS</h2></div>
                </div>
            </div>
        </div>
    )
}
