import { Link } from 'react-router-dom'
import heroImg from '../images/hero-img-logo.png'
export default function Hero(){
    return(
        <div className='heroo'>
        <div className="container">
            <div className="hero">
                <div className="hero-left">
                    <h2 className='hero-title'>Ikhtiyar <br/> Dostmetov</h2>
                    <div className="hero-btns">
                        <button className="hero-btn">Kurslari</button>
                        <Link className="hero-btn" to={"/podcasts"}>Podcastlari</Link>
                        <button className="hero-btn">Kitoblari</button>
                        <button className="hero-btn">Tavsiyalari</button>
                        <button className="hero-btn">Batafsil</button>
                    </div>
                    <p className='hero-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="hero-right">
                    <img className='hero-img' src={heroImg}/>
                </div>
            </div>
        </div>
        </div>
    )
}