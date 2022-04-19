import React from 'react'
import './resume.css'


function Resume() {
  return (
    <div className="resume">
        <div className="education spa">
            <h2>EDUCATION</h2>
            <div>
                <div className="altsch spa">
                    <h3>AltSchool Africa School of Engineering</h3>
                    <div className="diploma spa">
                        <p>
                            <span>Diploma in Backend Engineering  <i> in view 2022</i></span>
                            <br></br>
                            Currently enrolled in the AltSchool backend engineering diploma program. Perform tasks, quizzes and coding challenges
                        </p>
                    </div>
                </div>
                <div className="ibadan spa">
                    <h3>University of Ibadan</h3>
                    <div className="msc spa">
                        <p>
                            <span>Master of Chemical Pathology  <i> 2017 to 2019</i></span>
                            <br></br>
                            Clinical research and postings, Seminars, Scientific conferences, Inaugural lectures, Symposiums, MEPIN workshops, CITI training.
                        </p>
                    </div>      
                </div>
                <div className="unimaid spa">
                    <h3>University of Maiduguri</h3>
                    <div className="bsc spa">
                        <p>
                            <span>Bachelor of Medical Laboratory Science  <i> 2006 to 2011</i></span>
                            <br></br>
                            Football, Tutorial sessions, Laboratory postings, Health awareness campaigns, Outreaches, National Fellowship of Medical Laboratory Science Students (Academic Secretary/UNIMAID Chapter)
                        </p>
                    </div> 
                </div>       
            </div>
        </div>
        <div className="employment employ spa">
            <h2>EMPLOYMENT</h2>
            <div className="zuri spa">
                <h3>Zuri Chat (Open Source)</h3>
                <p>
                    <span>Backend Developer and Maintainer<i> August 2021 till date</i></span>
                    <br></br>
                    Member quality control, documentation and messaging teams. Write endpoints and unitests. Maintain the messaging plugin repo.
                </p>
            </div>
        </div>
        <div className="skills spa">
            <h2>TECH SKILLS</h2>
            <ul>
                <li>Python (Django, FastApi)</li>
                <li>Git</li>
                <li>Heroku</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
            </ul>
        </div>
    </div>
  )
}

export default Resume