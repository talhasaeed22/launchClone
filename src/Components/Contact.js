import React from 'react'

const Contact = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }} className="header my-4">
                <h1 style={{ fontSize: '4rem' }}>Get In Touch</h1>
                <p>Pricing for everyone. Choose your plan now!</p>
            </div>

            <div className="container">
                <footer className="footer">
                    <div id="footer2">
                        <form className="form" id="form1">
                            <h1>Contact Me</h1>
                            <input type="text" id="Name" placeholder="Enter Name Here" />
                            <input type="email" id="signUpEmail" placeholder="Enter Email Here" />
                            <input type="number" id="phonenumber" placeholder="Enter Phone Number" />
                            <textarea style={{padding:"24px"}} name="" id="" cols="30" rows="5"
                                placeholder="Enter Your Message Here"></textarea>
                            <button className="pricing-button my-4">SUBMIT!</button>
                        </form>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Contact