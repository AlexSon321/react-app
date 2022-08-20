import React from 'react'
import FirstCol from '../components/FirstCol'
import SecondCol from '../components/SecondCol'
import ThirdCol from '../components/ThirdCol'

function Collection() {
    return (
        <div>
            <img className='pecho3' src="./pecho1.png" alt="" />
            <img className='pecho2' src="./pecho2.png" alt="" />
            <div className="collection">
                <h1>My NFT's</h1>
                <div className='nfts'>
                    <SecondCol className='secondcol' />
                    <FirstCol className='firstcol' />
                    <ThirdCol className='thirdcol' />
                </div>
            </div>
        </div>
    )
}

export default Collection