import React from 'react'
import dashboard from '../img/dashboard.jpg'
import profile from '../img/profile.jpg'

const Features = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div id='features-left' className="col-sm-12 col-md-6 d-flex flex-column py-3 transform">
            <p style={{color:'#007bff'}}> <strong>DIGITAL SERVICES</strong></p>
            <h2 style={{fontSize:'4rem'}}>Selling Digital <br /> Services</h2>
            <p className='text-muted'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
            <ol id='ul'>
              <li className='text-muted'>There live the blind texts</li>
              <li className='text-muted'>Far far away behind the word</li>
            </ol>
            <i>“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i>
            <div className="images d-flex my-3">
              <img className='me-3' style={{width:'15%', borderRadius:'100%'}} src={profile} alt="" />
              <div >
                <p className='my-1 text-muted'>Talha Saeed <br /> Owner, Product Lead</p>
              </div>
            </div>
          </div>
          <div style={{boxShadow: '0px 0px 21px #dbdbdb'}} className="col-sm-12 col-md-6 my-5">
            <img src={dashboard} class="img-thumbnail" alt="..."/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features