import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import menu from '../images/Frame 76.svg'
import telefon from '../images/telefon.svg'
import search from '../images/seaarch.svg'
import globus from '../images/globus.svg'
import person from '../images/person img.svg'
import './Style.css';
import { useState } from 'react';
import MenuModal from './MenuModal';
import SignUp from './SignUp';

export default function Navbar(){
 const [openState, setOpenstate] = useState(false)
 const [openSignState,setOpenSignState] = useState(false)
    return(
        <div className="container">
            <MenuModal open={openState} onClose={()=>setOpenstate(false)} />
            <SignUp openSign={openSignState} onCloseSign={()=>setOpenSignState(false)}/>
            <div className='navbar'>
                <button className='navbar-btn' onClick={()=>setOpenstate(true)}>
                <img src={menu}/>Menyu</button>
                <Link to={"/"}><img src={logo}/></Link>
                <div className='div-nav'>
                    <button className='tel-nav'>
                        <img src={telefon}/>
                        +998 97 628 28 82
                    </button>
                    <img src={search}/>
                    <button className='tel-nav'>
                        <img src={globus}/>
                        UZ
                    </button>
                    <button className='person-nav' onClick={()=>setOpenSignState(true)}>
                        <img src={person}/>
                    </button>
                </div>
            </div>
        </div>
    )
}