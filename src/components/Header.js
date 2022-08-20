// import React from 'react'
// import { FaTelegramPlane, FaTwitter, FaBars } from 'react-icons/fa'
// import { Routes, Route, Link } from 'react-router-dom'
// import FaqPage, { faq } from '../components/FaqPage'
// import Team, { tem } from '../components/Team'
// import Collection, { nft } from '../components/Collection'
// import { useState } from 'react'


// // let men

// // if (menu) {
// //     men = <nav>
// //         <a href="/tem">Team</a>
// //         <a href="/faq">Faq</a>
// //         <a href="/nft">NFT rare</a>
// //     </nav>

// // }

// export default function header() {

//     const [menu, setMenu] = useState(false)


//     return (
//         <div className='container'>
//             <header>
//                 <img src="./logo.png" alt="" />
//                 <nav>
//                     <a href="/tem">Team</a>
//                     <a href="/faq">Faq</a>
//                     <a href="/nft">NFT rare</a>
//                 </nav>
//                 <div className='icons'>
//                     <a href="/">
//                         <FaTelegramPlane />
//                     </a>
//                     <a href="/">
//                         <FaTwitter />
//                     </a>
//                     <a className='btn' href="/">Connect Wallet</a>
//                 </div>
//                 <div className='burger-menu'>
//                     <FaBars
//                         onClick={() => setMenu(!menu)}
//                     />
//                 </div>
//             </header>
//             <Routes>
//                 <Route path='/faq' element={<FaqPage />} />
//                 <Route path='/tem' element={<Team />} />
//                 <Route path='/nft' element={<Collection />} />
//             </Routes>
//         </div>
//     )
// }

import React from 'react'
import { FaTelegramPlane, FaTwitter, FaBars } from 'react-icons/fa'
import { Routes, Route, Link } from 'react-router-dom'
import FaqPage, { faq } from '../components/FaqPage'
import Team, { tem } from '../components/Team'
import Collection, { nft } from '../components/Collection'
import { useState } from 'react'

const Header = () => {

    const [menu, setMenu] = useState(false)

    let men
    let menuMask

    if (menu) {
        men = <div className='menu-style'>
            <a href="/tem">Team</a>
            <a href="/faq">Faq</a>
            <a href="/nft">NFT rare</a>
        </div>

        menuMask =
            <div className='shadow' onClick={() => setMenu(false)}>


            </div>
    }


    return (
        <div className='container'>
            <header>
                <div>
                    <a href="/"><img src="./logo.png" alt="" /></a>
                </div>
                <nav>
                    <a href="/tem">Team</a>
                    <a href="/faq">Faq</a>
                    <a href="/nft">NFT rare</a>
                </nav>
                <div className='icons'>
                    <a href="/">
                        <FaTelegramPlane />
                    </a>
                    <a href="/">
                        <FaTwitter />
                    </a>
                    <a className='btn' href="/">Connect Wallet</a>
                </div>
                <div className='burger-menu'>
                    <FaBars
                        onClick={() => setMenu(!menu)}
                    />

                    {menuMask}

                    {men}
                </div>
            </header>
            <Routes>
                <Route path='/faq' element={<FaqPage />} />
                <Route path='/tem' element={<Team />} />
                <Route path='/nft' element={<Collection />} />
            </Routes>
        </div>
    )
}

export default Header