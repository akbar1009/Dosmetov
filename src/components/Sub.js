import bigArrow from '../images/Big Arrow.png'
export default function Sub(){
    return(
        <div className="subs">
            <div className="container">
                <div className="sub">
                    <div className="sub-left">
                        <h2 className="sub-title">Obuna bo’ling</h2>
                        <div className="sub-div">
                            <strong className="sub-strong">Va quyidagilarga <br/> ega bo’ling:</strong>
                            <ul className="sub-ul">
                                <li className="sub-li">
                                    <div className="info-div">
                                        <span className="info-span">+</span>
                                        <strong className="info-strong">60</strong>
                                    </div>
                                    <p className="info-text">Videodarslar</p>
                                </li>
                                <li className="sub-li">
                                    <div className="info-div">
                                        <span className="info-span">+</span>
                                        <strong className="info-strong">150</strong>
                                    </div>
                                    <p className="info-text">Tavsiya kitoblar</p>
                                </li>
                                <li className="sub-li">
                                    <div className="info-div">
                                        <span className="info-span">+</span>
                                        <strong className="info-strong">125</strong>
                                    </div>
                                    <p className="info-text">Foydali podkastlar</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-right">
                        <img src={bigArrow}/>
                    </div>
                </div>
            </div>
        </div>
    )
}