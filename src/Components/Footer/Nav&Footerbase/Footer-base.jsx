import './Footer-base.css'

export default function FooterBase() {
    return (
        <>
            <div className='container-footer-base'>
                <div className='items-footer-base'>
                    <div className='h1-footer-base'><h1>Join our newsletter for <br /> special deals and offers</h1></div>
                    <div className='item-footer-base'>
                        <div className='h4-footer-base'><h4>Name</h4></div>
                        <div className='container-input-footer-base'><input type="text" placeholder='Your name' className='Form-footer-base' /></div>
                        <div className='h4-footer-base'><h4>Email</h4></div>
                        <div className='container-input-footer-base'><input type="email" placeholder='Email' className='Form-footer-base' /></div>
                    </div>
                    <div className='button-footer-base'><h2 className='h2-button-footer-base'>Join Newsletter</h2></div>
                </div>
                <div className='image-footer-base'><img src="neve-pet-shop-23.avif" alt="" /></div>
            </div>
        </>

    )
}
