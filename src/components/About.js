import aboutImg from '../images/aboutImg.png'
import playBtn from '../images/play-btn.png'
import platformImg from '../images/platform.svg'
export default function About(){
    return(
            <div className="container">
                <div className="about">
                    <div className="about-up">
                        <h1 className="about-title">Ikhtiyar Dosmetov</h1>
                        <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="about-img-div" style={{backgroundImage:`url(${aboutImg})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                        <div className='about-video-img'>
                            <img src={playBtn}/>
                        </div>
                    </div>
                    <div className='about-middle'>
                        <h3 className='about-h3'>Muallif haqida batafsil</h3>
                        <p className='about-p'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
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
                    <div className='about-line'></div>
                    <div className='about-bottom'>
                        <h3 className='about-h3'>Maqsad va prinsiplar</h3>
                        <ul className='about-ul'>
                            <li className='about-li'>
                                <h5 className='about-h5'>Odamlarni moliyaviy savodxonligini oshirishga ko’maklashish</h5>
                                <p className='about-li-text'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                            </li>
                            <li className='about-li'>
                                <h5 className='about-h5'>Kichik va o’rta biznes egalariga to’g’ri yo’l ko’rsatish</h5>
                                <p className='about-li-text'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                            </li>
                            <li className='about-li'>
                                <h5 className='about-h5'>Odamlarni moliyaviy savodxonligini oshirishga ko’maklashish</h5>
                                <p className='about-li-text'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                            </li>
                            <li className='about-li'>
                                <h5 className='about-h5'>Kichik va o’rta biznes egalariga to’g’ri yo’l ko’rsatish</h5>
                                <p className='about-li-text'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}