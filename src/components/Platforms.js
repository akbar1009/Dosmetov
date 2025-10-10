import { Link } from 'react-router-dom'
import platformImg from '../images/platform.svg'
export default function Platforms(){
    return(
        <div className="platforms">
            <div className="container">
                <div className="platform">
                    <div className="platform-left col-3">
                        <strong className="platform-strong">Platforma muallifi</strong>
                        <h3 className="platform-h3">50dan ortiq turli <span className="platform-span">bizneslar</span> muallifi</h3>
                        <Link className="platform-btn" to={"/podcasts"}>Barchasi</Link>
                    </div>
                    <div className="platform-right col-8">
                        <h2 className="platform-title">Ikhtiyar <span className="platform-title-span">Dosmetov</span></h2>
                        <ul className="platform-ul">
                            <div className='platform-ul-div col-6'>
                                <li className="platform-li">
                                    <img src={platformImg}/>
                                    <p className='platform-text'>Media tadbirkor, Investor</p>
                                </li>
                                <li className="platform-li">
                                    <img src={platformImg}/>
                                    <p className='platform-text'>13 Yillik tajribaga ega Xalqaro toifadagi Biznes va shaxsiy rivojlanish murabbiyi</p>
                                </li>
                                <li className="platform-li">
                                    <img src={platformImg}/>
                                    <p className='platform-text'>ICBT (International certificated of business trainers) va FIA (Fowler International academy) sertifikatsiyasi sohibi</p>
                                </li>
                            </div>
                            <div className='platform-ul-div col-6'>
                                <li className="platform-li">
                                    <img src={platformImg}/>
                                    <p className='platform-text'>12 ta davlatda (12 yil ichida ) 35000 + o’quvchilar murabbiyi</p>
                                </li>
                                <li className="platform-li">
                                    <img src={platformImg}/>
                                    <p className='platform-text'>Qadam - baqadam kitobi (O’zbekistonda shaxsiy rivojlanish bestselleri) muallifi</p>
                                </li>
                                <li className="platform-li">
                                    <img src={platformImg}/>
                                    <p className='platform-text'>“ 1000 X “ klubi (O’zbekistondagi TOP biznes klublardan biri) asoschisi va rahbari</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}