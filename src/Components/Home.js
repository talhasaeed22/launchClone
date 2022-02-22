import React from 'react'
import './Home.css'
import main_image from '../img/market-launch-pana.svg'


const Home = () => {

    return (
        <>
            <div className="container d-flex" id="Home-container">
                <div className="box d-flex flex-column w-100" id="left">
                    <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Promote Your Products by Colorlib</h1>
                    <p style={{ width: '75%' }}>Another cool free html css template by <a style={{ textDecoration: 'none' }} href="/">Colorlib</a> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                    <div className="buttons d-flex">
                        <button className="home-btn" id='left-btn'>See Features</button>
                        <button className="home-btn" id='right-btn'>Pricing</button>
                    </div>
                </div>
                <div className="box w-100 " id="right">
                    <img src={main_image} alt="" />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div style={{ borderLeft: '1px solid #e3e3e3' }} className="col-sm-12 col-md-3 home-box p-5 mb-4">
                        <i style={{ color: '#007bff' }} className="icons fa fa-briefcase" aria-hidden="true"></i>
                        <h5>Grow Your Business</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="col-sm-12 col-md-3 home-box p-5 mb-4">
                        <i style={{ color: 'orange' }} className="icons fa fa-recycle" aria-hidden="true"></i>
                        <h5>Build Products</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="col-sm-12 col-md-3 home-box p-5 mb-4">
                        <i style={{ color: 'red' }} className="icons fa fa-address-card" aria-hidden="true"></i>
                        <h5>Success Every Day</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="col-sm-12 col-md-3 home-box p-5 mb-4">
                        <i style={{ color: 'blue' }} className="icons fa fa-window-maximize" aria-hidden="true"></i>

                        <h5>Bring Ideas to Life</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home