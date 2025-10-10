import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import logo1 from '../images/facebook2.svg'
import logo2 from '../images/twitter (2).svg'
import logo3 from '../images/telegram.svg'
import logo4 from '../images/youtube (2).svg'
import logo5 from '../images/linkedIn.svg'
export default function Footer(){
    return(
        <div className='footers'>
        <div className="container">
            <div className="footer">
                <Link to={"/"}><img src={logo}/></Link>
                <div className="footer-info">
                    <ul className="footer-ul">
                        <li className="footer-li">Bizning Loyihalar</li>
                        <li className="footer-li">Kurslar</li>
                        <Link className="footer-li" to={"/podcasts"}>Podcastlar</Link>
                        <li className="footer-li">Kitoblar</li>
                    </ul>
                    <span className="footer-span">Barcha huquqlar himoyalangan 2024</span>
                </div>
                <div className="footer-logos">
                    <div className="footer-logo">
                        <img src={logo1}/>
                    </div>
                    <div className="footer-logo">
                        <img src={logo2}/>
                    </div>
                    <div className="footer-logo">
                        <img src={logo3}/>
                    </div>
                    <div className="footer-logo">
                        <img src={logo4}/>
                    </div>
                    <div className="footer-logo">
                        <img src={logo5}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}