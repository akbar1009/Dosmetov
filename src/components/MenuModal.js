import logo from '../images/logo.png'
import podcast from '../images/home.png'
import home from '../images/coursemenu.png'
import bookmenu from '../images/bookmenu.png'
import about from '../images/vidmenu.png'
import vidmenu from '../images/podcast.png'
import special from '../images/author.png'
import { Link } from 'react-router-dom'
export default function MenuModal({open, onClose}){
    if(!open) return;
    return(
        <div className="overlay">
            <div className={ `sidebar ${open? 'open': ''}` }>
                <div className='row'>
                    <img src={logo}/>
                    <button onClick={onClose}>x</button>
                </div>
            <ul className='modal-ul'>
                <li className='modal-li'><img src={home} />Asosiy sahifa</li>
                <Link className="modal-li" to={"/podcasts"}><img src={podcast} />Podcastlar</Link>
                <li className='modal-li'><img src={vidmenu} />Videodarslar</li>
                <li className='modal-li'><img src={special} />Maxsus kurslar</li>
                <li className='modal-li'><img src={bookmenu} />Kitoblar</li>
                <li className='modal-li'><img src={about} />Muallif haqida</li>
            </ul>

            </div>
        </div>
    )
}