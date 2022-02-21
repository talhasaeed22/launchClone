import React from 'react'
import './Home.css'
import main_image from '../img/market-launch-pana.svg'


const Home = () => {

  return (
    <>
        <div className="container d-flex" id="Home-container">
            <div className="box d-flex flex-column w-100" id="left">
                <h1 style={{fontSize:'4rem', fontWeight:'bold'}}>Promote Your Products by Colorlib</h1>
                <p style={{width:'75%'}}>Another cool free html css template by <a style={{textDecoration:'none'}} href="/">Colorlib</a> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                <div className="buttons d-flex">
                    <button className="home-btn" id='left-btn'>See Features</button>
                    <button className="home-btn" id='right-btn'>Pricing</button>
                </div>
            </div>
            <div className="box w-100 " id="right">
                <img src={main_image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Home