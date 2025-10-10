import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import arrow from '../images/arrow.svg'
import { Link } from 'react-router-dom'
export default function Podcast(){
    return(
        <div className="Podcasts">
            <div className="container">
                <div className="podcast">
                    <div className="podcast-up">
                        <div className="podcast-left">
                            <strong className="podcast-strong">Podcastlar</strong>
                            <h3 className="podcast-h3">Ikhtiyor Dosmetov <span className="podcast-span">Podcastlari</span></h3>
                        </div>
                        <div className="podcast-right">
                            <Link className="podcast-btn" to={"/podcasts"}>Barchasi</Link>
                        </div>
                    </div>
                    <div className="podcast-down">
                        <ul className="podcast-ul">
                            <li className="podcast-li">
                                <img className='podcast-img' src={img1}/>
                                <div className='podcast-li-div'>
                                    <p className='podcast-li-p'>Muvaffaqiyat sirlari</p>
                                    <span className='podcast-li-span'>24 ko’rishlar</span>
                                </div>
                            </li>
                            <li className="podcast-li">
                                <img className='podcast-img' src={img2}/>
                                <div className='podcast-li-div'>
                                    <p className='podcast-li-p'>Muvaffaqiyat sirlari</p>
                                    <span className='podcast-li-span'>24 ko’rishlar</span>
                                </div>
                            </li>
                            <li className="podcast-li">
                                <img className='podcast-img' src={img3}/>
                                <div className='podcast-li-div'>
                                    <p className='podcast-li-p'>Muvaffaqiyat sirlari</p>
                                    <span className='podcast-li-span'>24 ko’rishlar</span>
                                </div>
                            </li>
                            <li className="podcast-li">
                                <img className='podcast-img' src={img4}/>
                                <div className='podcast-li-div'>
                                    <p className='podcast-li-p'>Muvaffaqiyat sirlari</p>
                                    <span className='podcast-li-span'>24 ko’rishlar</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className='podcast-btn-down'>
                        <strong className='podcast-btn-strong'>Yana ko’rish</strong>
                        <img src={arrow}/>
                    </button>
                </div>
            </div>
        </div>
    )
}