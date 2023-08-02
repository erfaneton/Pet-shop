import './Props-main-bottom.css'

export default function PropsMainBottom({ image, title, price, }) {
    return (
        <div>
            <div className='container-props-main-bottom'>
                <div className='props-image-main-bottom'><img className='image-main-bottom' src={image} alt="" /></div>
                <div className='title-props-main-bottom'><p>{title}</p></div>
                <div className='price-props-main-bottom'>{price}</div>
                <div className='botton-propsmain-bottom'> <h3 className='h3-botton-propsmain-bottom'>Add to cart</h3></div>
            </div>
        </div>
    )
}
