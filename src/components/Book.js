import imgLeft from '../images/imgLeft.svg'
import imgRight from '../images/imgRight.svg'
import step from '../images/step img.png'
import stepShadow from '../images/stepwithshadow.png'
import bookk1 from '../images/bookk1.png'
import bookk2 from '../images/bookk2.png'
import bookk3 from '../images/bookk3.png'
import bookk4 from '../images/bookk4.png'
export default function Book(){
    const bookks = [
        {id:1,author:"Robert Kiosaki",name:"Boy ota va Kambag’al ota",img:bookk1},
        {id:2,author:"Robert Kiosaki",name:"Vavilonlik eng boy odam",img:bookk2},
        {id:3,author:"Robert Kiosaki",name:"Stiven R. Kovi: Muvaffaqiyatli insonlarning 7 ko‘nikmasi",img:bookk3},
        {id:4,author:"Robert Kiosaki",name:"O’yla va boy bo’l",img:bookk4},
        {id:5,author:"Robert Kiosaki",name:"O’yla va boy bo’l",img:bookk4},
        {id:6,author:"Robert Kiosaki",name:"Boy ota va Kambag’al ota",img:bookk1},
        {id:7,author:"Robert Kiosaki",name:"Stiven R. Kovi: Muvaffaqiyatli insonlarning 7 ko‘nikmasi",img:bookk3},
        {id:8,author:"Robert Kiosaki",name:"Vavilonlik eng boy odam",img:bookk2},
    ]
    return(
        <div className="container">
            <div className="bookk">
                <div className="bookk-top">
                    <h2 className="bookk-h2">Kitoblar</h2>
                    <input type="text" className="bookk-input"  placeholder="Kitob nomini kiriting"/>
                </div>
                <div className="bookk-book">
                    <div className="bookk-book-left">
                        <span className="bookk-span">Ikhtiyor Dostmetov</span>
                        <h4 className="bookk-h4">Qadam - baqadam</h4>
                        <p className="bookk-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <button className="bookk-btn">Batafsil</button>
                        <div className="bookk-book-btns">
                            <button className="bookk-book-btn1">
                                <img src={imgLeft}/>
                            </button>
                            <button className="bookk-book-btn1">
                                <img src={imgRight}/>
                            </button>
                        </div>
                    </div>
                    <img src={step}/>
                </div>
                <div className='bookk-books'>
                    <ul className='bookk-ul'>
                        <li className='bookk-li' style={{backgroundImage: `url(${stepShadow})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                            <span className='bookk-span-li'>Robert Kiosaki</span>
                            <strong className='bookk-strong'>Boy ota va Kambag’al ota</strong>
                        </li>
                        <li className='bookk-li' style={{backgroundImage: `url(${stepShadow})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                            <span className='bookk-span-li'>Robert Kiosaki</span>
                            <strong className='bookk-strong'>Boy ota va Kambag’al ota</strong>
                        </li>
                    </ul>
                    <h3 className='bookk-teach'>Ustoz tavsiya qilgan kitoblar</h3>
                    <ul className='bookk-ul2'>
                        {bookks.map((bookk)=>(
                            <li className='bookk-li' style={{backgroundImage: `url(${bookk.img})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                            <span className='bookk-span-li'>{bookk.author}</span>
                            <strong className='bookk-strong'>{bookk.name}</strong>
                        </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}