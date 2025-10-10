import videoImg1 from '../images/vimg.png'
import videoImg2 from '../images/vimg2.png'
import videoImg3 from '../images/vimg3.png'
import playBtn from '../images/play-btn.png'
export default function Videos(){
    return(
        <div className="videos">
            <div className="container">
                <div className="video">
                    <div className="video-left col-3">
                        <strong className="platform-strong">Platforma muallifi</strong>
                        <h3 className="platform-h3">50dan ortiq pullik va <span className="platform-span">bepul</span> video darslar</h3>
                        <button className="video-btn">Batafsil</button>
                    </div>
                    <div className="video-right col-8">
                        <div className="video-main-div">
                            <div className="video-right-div col-6">
                                <div className="video-right-div1" style={{
                                    backgroundImage: `url(${videoImg1})`,
                                    backgroundRepeat:"no-repeat",
                                    backgroundSize:"100%"
                                }}>
                                    <span className="video-div1-span">Bepul</span>
                                    <div className='video-img'>
                                        <img src={playBtn}/>
                                    </div>
                                    <div className="video-right-div1-div">
                                        <p className="video-right-div1-p">Vaqtni boy bermang!</p>
                                        <span className="video-right-div1-strong">10:04</span>
                                    </div>
                                </div>
                                <div className="video-right-divs">
                                    <div className="video-right-small" style={{
                                        backgroundImage:`url(${videoImg1})`
                                    }}>
                                        <span className="video-div2-span">Bepul</span>
                                        <div className='video-img-small'>
                                            <img src={playBtn}/>
                                        </div>
                                        <div className="video-right-small-div">
                                            <p className="video-right-div1-p">Vaqtni boy bermang!</p>
                                            <span className="video-right-div1-strong">10:04</span>
                                        </div>
                                    </div>
                                    <div className="video-right-small" style={{backgroundImage:`url(${videoImg2})`}}>
                                        <span className="video-div2-span">Bepul</span>
                                        <div className='video-img-small'>
                                            <img src={playBtn}/>
                                        </div>
                                        <div className="video-right-small-div">
                                            <p className="video-right-div1-p">Vaqtni boy bermang!</p>
                                            <span className="video-right-div1-strong">10:04</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-right-small-divs">
                                <div className="video-right-small" style={{backgroundImage:`url(${videoImg1})`}}>
                                        <span className="video-div2-span">Bepul</span>
                                        <div className='video-img-small'>
                                            <img src={playBtn}/>
                                        </div>
                                        <div className="video-right-small-div">
                                            <p className="video-right-div1-p">Vaqtni boy bermang!</p>
                                            <span className="video-right-div1-strong">10:04</span>
                                        </div>
                                </div>
                                <div className="video-right-small" style={{backgroundImage:`url(${videoImg3})`}}>
                                        <span className="video-div2-span">Bepul</span>
                                        <div className='video-img-small'>
                                            <img src={playBtn}/>
                                        </div>
                                        <div className="video-right-small-div">
                                            <p className="video-right-div1-p">Vaqtni boy bermang!</p>
                                            <span className="video-right-div1-strong">10:04</span>
                                        </div>
                                </div>
                                <div className="video-right-small" style={{backgroundImage:`url(${videoImg1})`}}>
                                        <span className="video-div2-span">Bepul</span>
                                        <div className='video-img-small'>
                                            <img src={playBtn}/>
                                        </div>
                                        <div className="video-right-small-div">
                                            <p className="video-right-div1-p">Vaqtni boy bermang!</p>
                                            <span className="video-right-div1-strong">10:04</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}