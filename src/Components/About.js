import React from 'react'
import about from '../img/about.svg'

const About = () => {
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <img src={about} className="img-thumbnail" alt="" />
                </div>
                <div className="col-md-4">
                    <div style={{padding:'61px 8px'}} className="about d-flex flex-column">
                        <h1 style={{ fontSize: '4rem' }}>About Us</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ol id='ul' >
                            <li className='text-muted my-3'>There live the blind texts</li>
                            <li className='text-muted my-3'>Far far away behind the word</li>
                            <li className="text-muted my-3">Their place and supplies</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About