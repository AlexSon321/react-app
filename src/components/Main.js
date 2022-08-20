import React from 'react'

function Main() {
    return (
        <div >
            <img className='pecho1' src="./pecho1.png" alt="" />
            <img className='pecho2' src="./pecho2.png" alt="" />
            <div className="container mine">
                <div className='inam'>
                    <div className="main">
                        <h1>Leave A <span>Memorable Transaction</span> In<br />
                            The History Of <span>Ethereum</span></h1>
                        <p>We are launching a freemint for everyone who wants to write themselves into the history of the new birth of Ethereum. The transition from PoW to PoS consensus is a historic event for the entire crypto industry. Each cryptointusion will have the opportunity to come into contact with the detainee and fix his mark in it.</p>
                        <div>
                            <a className='first-btn' href="#">Free to Mint NFT</a>
                            <a className='second-btn' href="#">0,008 ETH <span>-16$</span></a>
                        </div>
                    </div>
                    <div className="right-main">
                        <img className='borad' src="./Artboard.png" alt="" />
                    </div>
                    <div className="table">
                        <h4>Time Passed Since <span>The Merge</span></h4>
                        <h1>1d : 24h : 23m : 24s</h1>
                        <h4>Blocks Passed Since <span>The Merge</span></h4>
                        <h1>2142</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main