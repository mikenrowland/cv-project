import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contact-me' id='con'>
        <h2>Contact Me</h2>
        <div className="card">
            <form className="card-form">
                <div className="row mb-3">
                    <div className="col">
                        <div className="input-group"><span className=""><i className="fa fa-user-circle"></i></span>
                        <input className="form-input" type="text" name="name" placeholder="Name" required="required"/>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="input-group"><span className=""><i className="fa fa-file-text"></i></span>
                        <input className="form-input" type="text" name="Subject" placeholder="Subject" required="required"/>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="input-group"><span className=""><i className="fa fa-envelope"></i></span>
                        <input className="form-input" type="email" name="_replyto" placeholder="E-mail" required="required"/>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-group">
                        <textarea className="form-input" name="message" placeholder="Your Message" rows={10} cols={60} required="required"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                </div>
            </form>
            <div className="card-addr">
                {/* <div className="card-body">
                <p className="mb-0"><strong>Address </strong></p>
                <p className="pb-2">No.15 Doctor's Quarters, Jolly Nyame Estate Jalingo, Taraba State Nigeria</p>
                <p className="mb-0"><strong>Phone</strong></p>
                <p className="pb-2">+2348069242727</p>
                <p className="mb-0"><strong>Email</strong></p>
                <p>mykhelmyers@gmail.com</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Contact