import { useState } from 'react'
import step from '../images/step img.png'
import playBtn from "../images/btn play.png"
import dosmetov from '../images/bigdosmetov.png'
import ticks from '../images/ticks.svg'
import eshon1 from '../images/eshon1.svg'
import imgLeft from '../images/imgLeft.svg'
import imgRight from '../images/imgRight.svg'
import present from '../images/present.svg'
export default function BookPage(){
    const [isPLaying,setIsPlaying] = useState(false)
    return(
        <div className="container">
            <div className="bookpage">
                <div className="bookpage-top">
                    <div className="bookpage-top-left">
                        <span className="bookpage-span">Ikhtiyor Dostmetov</span>
                        <h2 className="bookpage-h2">Qadam - baqadam</h2>
                        <p className="bookpage-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                            centuries, but also the leap into electronic typesetting,
                        </p>
                        <p className='bookpage-text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text
                        </p>
                        <button className="bookpage-btn">Sotib olish</button>
                    </div>
                    <img src={step}/>
                </div>
                <div className='line'></div>
                <div className='bookpage-ticks'>
                    <ul className='bookpage-ticks-ul1'>
                        <h3 className='bookpage-ticks-h3'>Bu kitob siz uchun agar:</h3>
                        <li  className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>Lorem Ipsum has been the industry's standard</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>and would like to help keep the site on the Internet</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>the industry's standard dummy text ever since the 1500s</span>
                        </li>
                    </ul>
                    <ul className='bookpage-ticks-ul1'>
                        <h3 className='bookpage-ticks-h3'>Kitobni o’qigandan keyin siz:</h3>
                        <li  className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>using 'Content here, content here', making it look like readabl</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>publishing software like Aldus PageMake</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li className='bookpage-ticks-li'>
                            <img src={ticks}/>
                            <span className='bookpage-ticks-span'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                    </ul>
                </div>
                <div className='line'></div>
                <div className='video-div'>
                    <h3 className='video-h3'>Kitob haqida muallif fikrlari</h3>
                    <div style={{backgroundImage:`url(${dosmetov})`,backgroundRepeat:"no-repeat",backgroundSize:"100%",padding:"250px 554px"}}>
                        {!isPLaying ?(
                            <button style={{backgroundColor:'transparent',border:"none"}} onClick={() => setIsPlaying(true)}>
                                <img src={playBtn}/>
                            </button>
                        ) : (
                            <video>
                                {/* <source src={require('../video/step video.mp4')} type="video/mp4"/> */}
                            </video>
                        )}
                    </div>
                </div>    
                <div className='line'></div>
                <div className='bookpage-opinions-div'>
                    <h3 className='opinion-h3'>Kitob haqida harid qilganlar fikrlari</h3>
                    <ul className='bookpage-opinions'>
                        <li className='bookpage-opinion'>
                            <div className='bookpage-opinion-div'>
                                <img src={eshon1}/>
                                <div className='bookpage-details'>
                                    <strong className='bookpage-det-strong'>Eshonov Fakhriyor</strong>
                                    <span className='bookpage-det-span'>Uzum Market CEO</span>
                                </div>
                            </div>
                            <p className='bookpage-opinion-p'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                        </li>
                        <li className='bookpage-opinion'>
                            <div className='bookpage-opinion-div'>
                                <img src={eshon1}/>
                                <div className='bookpage-details'>
                                    <strong className='bookpage-det-strong'>Eshonov Fakhriyor</strong>
                                    <span className='bookpage-det-span'>Uzum Market CEO</span>
                                </div>
                            </div>
                            <p className='bookpage-opinion-p'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                        </li>
                    </ul>
                    <div className="bookk-book-btns">
                        <button className="bookk-book-btn1">
                            <img src={imgLeft}/>
                        </button>
                        <button className="bookk-book-btn1">
                            <img src={imgRight}/>
                        </button>
                    </div>
                </div>
                <div className='line'></div>
                <div className='bookpage-present'>
                    <div>
                        <img src={present}/>
                    </div>
                    <h3 className='present-h3'>Hoziroq kitobni sotib oling va sovg’a sifatida kitob audiosiga ega bo’ling!</h3>
                    <button className='present-button'>Sotib olish</button>
                </div>
            </div>
        </div>
    )
}