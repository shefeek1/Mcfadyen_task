import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../src/assets/logo.png'
import delivery from '../../src/assets/delivery.svg'
import right from '../../src/assets/right-arrow.svg'
import searchicon from '../../src/assets/Search.svg'
import user from '../../src/assets/user.svg'
import shoppingcart from '../../src/assets/shopping-cart-dark-grey.svg'
import {Container} from 'react-bootstrap'
// import {HiOutlineMenuAlt4} from 'react-icons/hi'


function Navbar() {

   const[click,setClick] = useState(false)
   const handleClick = () => setClick(!click)

    return (
         <div>
     
            <div className='navbar' >
                <div className='container ' >

                    <img className='logo' src={logo}></img>

                    <span className='delivery-div'><img className='delivery' src={delivery}></img>Delivery to<img className='arrow' src={right}></img> </span>
                    <div className='searchbox'>
                    <input type='text' className='search' placeholder='search by product,category or brand' />
                    <img className='searchicon' src={searchicon}></img>
                    </div>
                    <span className='userspan'><img className='user' src={user}></img><img className='arrow' src={right}></img> </span>
                    <span className='shoppingcarspan'><img className='shoppingcart' src={shoppingcart}></img><img className='arrow' src={right}></img> </span>


                </div>
            </div>
          
            <div className='navbar-sub'  >
                <div className='container'style={{alignItems:"center"}}>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='unordered'><a href='#'>Tobacco</a></li>
                        <li className='unordered' ><a href='#'>Hemp</a></li>
                        <li className='unordered'><a href='#'>Vape</a></li>
                        <li className='unordered'><a href='#'>Alternative</a></li>
                        <li className='unordered'><a href='#'>General Merchandise</a></li>
                        <li className='unordered'><a href='#'>Brand</a></li>
                        <li className='unordered'><a href='#'>Articles</a></li>

                    </ul>
                    <div className='hamburger'onClick = {handleClick}>
                        {/* <HiOutlineMenuAlt4 className='icon'/> */}
                    </div>
                </div>
            </div>
            
       </div> 

    )
}

export default Navbar