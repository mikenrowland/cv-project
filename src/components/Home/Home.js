import React from 'react';
import './home.css';
// import ikorodu from './public/ikorodu.jpg';

const Mykie = new URL("/public/Mykie.jpg", import.meta.url);

function Home() {
  return (
    <div className="home" id='hme'>
        <img className='img-mike' src={Mykie} alt="imageOfMike"></img>
        <h1>Michael Rowland Ngwube</h1>
        <div className="intro">
            <p>
                Hi! I am a project-driven backend engineer with 1+ years experience building mock-up apps, APIs, and contributing on an open source project.
                I have also picked up along the way, some basic level skills in some frontend stacks such as HTML, CSS and Javascript.
            </p>
            <div className="icon-container">
                <ul>
                    <li><a className='anc' href="https://web.facebook.com/mykngbe" target="_blank" rel='noreferrer'><i className="fab fa-facebook" aria-hidden="true"></i>facebook</a></li>
                    <li><a className='anc' href="https://twitter.com/inc_mykie" target="_blank" rel='noreferrer'><i className="fab fa-twitter" aria-hidden="true"></i>twitter</a></li>
                    <li><a className='anc' href="https://www.linkedin.com/in/michael-rowland-ngwube/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin" aria-hidden="true"></i>linkedin</a></li>
                    <li><a className='anc' href="https://www.instagram.com/inc_myke/" target="_blank" rel='noreferrer'><i className="fab fa-instagram" aria-hidden="true"></i>instagram</a></li>
                    <li><a className='anc' href="https://github.com/mykie88" target="_blank" rel='noreferrer'><i className="fab fa-github" aria-hidden="true"></i>github</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home