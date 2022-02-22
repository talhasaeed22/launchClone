import React from 'react'

const Pricing = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }} className="header my-4">
                <h1 style={{ fontSize: '4rem' }}>Pricing</h1>
                <p>Pricing for everyone. Choose your plan now!</p>
            </div>
            <div className="container px-5">
                <div className="row my-5">
                    <div className="col-md-3 col-sm-12 d-flex flex-column priceBox  transform">
                        <h1 style={{ textAlign: 'center' }}>Free</h1>
                        <h3 style={{ textAlign: 'center' }}>$0</h3>
                        <ol id='ul' >
                            <li className='text-muted my-3'>There live the blind texts</li>
                            <li className='text-muted my-3'>Far far away behind the word</li>
                            <li className="text-muted my-3">Far from the countries Vokalia and Consonantia</li>
                        </ol>
                        <button className="pricing-button">Get Started</button>
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex flex-column  priceBox  transform" style={{boxShadow: '0px 0px 21px #dbdbdb', backgroundColor:'white'}}>
                        <h1 style={{ textAlign: 'center' }}>Standard</h1>
                        <h3 style={{ textAlign: 'center' }}>$19.99</h3>
                        <ol id='ul' >
                            <li className='text-muted my-3'>There live the blind texts</li>
                            <li className='text-muted my-3'>Far far away behind the word</li>
                            <li className="text-muted my-3">Far from the countries Vokalia and Consonantia</li>
                        </ol>
                        <button className="pricing-button" id='pricing-button-mid'>Get Started</button>
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex flex-column  priceBox transform">
                        <h1 style={{ textAlign: 'center' }}>Premium</h1>
                        <h3 style={{ textAlign: 'center' }}>$79.99</h3>
                        <ol id='ul' >
                            <li className='text-muted my-3'>There live the blind texts</li>
                            <li className='text-muted my-3'>Far far away behind the word</li>
                            <li className="text-muted my-3">Far from the countries Vokalia and Consonantia</li>
                        </ol>
                        <button className="pricing-button">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 style={{textAlign:'center'}}>Advantage of using our products</h1>
                <p style={{textAlign:'center'}}>Far from the countries Vokalia and Consonantia</p>
                <div className="row my-5">
                    <div className="col-sm-12 col-md-5 d-flex mx-4 transform">
                        <i style={{ color: '#007bff' }} className="icons fa fa-briefcase" aria-hidden="true"></i>
                        <div>
                            <h5>Grow Your Business</h5>
                            <p className='text-muted'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 d-flex mx-4 transform">
                        <i style={{ color: 'orange' }} className="icons fa fa-recycle" aria-hidden="true"></i>
                        <div>
                            <h5>Build Products</h5>
                            <p className='text-muted'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 col-md-5 d-flex mx-4 transform">
                        <i style={{ color: 'red' }} className="icons fa fa-address-card" aria-hidden="true"></i>
                        <div>
                            <h5>Success Every Day</h5>
                            <p className='text-muted'> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 d-flex mx-4 transform">
                        <i style={{ color: 'blue' }} className="icons fa fa-window-maximize" aria-hidden="true"></i>
                        <div>
                            <h5>Bring Ideas to Life</h5>
                            <p className='text-muted'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
