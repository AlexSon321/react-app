import React from 'react'
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

function Team() {
    return (
        <div className=''>
            <img className='pecho3' src="./pecho1.png" alt="" />
            <img className='pecho2' src="./pecho2.png" alt="" />
            <div className="container">
                <h1 className='team-title'>Team</h1>
                <div className="team">


                    <div className="teams__card">

                        <div className="team_card">
                            <img src="./team.png" alt="" />
                            <h4>Bryan Doreian</h4>
                            <h5>BUSINESS DEVELOPMENT, AMBASSADOR</h5>
                            <AiFillTwitterCircle className='twit' />
                            <AiFillGithub className='git' />
                        </div>
                        <div className="team_card">
                            <img src="./team1.png" alt="" />
                            <h4>Jay Kim</h4>
                            <h5>BUSINESS DEVELOPMENT, CONTENT TEAM</h5>
                            <AiFillTwitterCircle className='twit' />
                            <AiFillGithub className='git' />

                        </div>
                        <div className="team_card">
                            <img src="./team2.png" alt="" />
                            <h4>Ambassador</h4>
                            <h5>BUSINESS DEVELOPMENT, MARKETING TEAM</h5>
                            <AiFillTwitterCircle className='twit' />
                            <AiFillGithub className='git' />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Team