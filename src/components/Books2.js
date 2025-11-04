import { Link } from 'react-router-dom'
import bookOne from '../images/book2-1.png'
import book2One from '../images/rich-father.png'
import book2Two from '../images/richer.png'
import book2Three from '../images/Stiven.png'
export default function Books2(){
    return(
        <div className="books2">
            <div className="container">
                <div className="book2">
                    <div className="book2-left col-3">
                        <strong className="platform-strong">Kitoblar</strong>
                        <h3 className="platform-span">Ikhtiyor Dosmetov  <span className="platform-h3">mualliflik va o’zi shaxsan tavsiya qilgan kitoblar.</span></h3>
                    </div>
                    <div className="book2-right col-8">
                        <div className="book2-div">
                            <img src={bookOne}/>
                            <div className='book2-div-info'>
                                <span className='book2-span'>Ikhtiyor Dostmetov</span>
                                <h4 className='book2-h4'>Qadam - baqadam</h4>
                                <p className='book2-p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <Link className="book2-btn" to={"/book"}>Batafsil</Link>
                            </div>
                        </div>
                        <div className='book2-divs'>
                            <div className='book2-div1'>
                                <img src={book2One} style={{marginBottom:"21px"}}/>
                                <span className='book2-div1-span'>Robert Kiosaki</span>
                                <p className='book2-div1-p'>Boy ota va Kambag’al ota</p>
                            </div>
                            <div className='book2-div1'>
                                <img src={book2Two} style={{marginBottom:"21px"}}/>
                                <span className='book2-div1-span'>Robert Kiosaki</span>
                                <p className='book2-div1-p'>Vavilonlik eng boy odam</p>
                            </div>
                            <div className='book2-div1'>
                                <img src={book2Three}/>
                                <span className='book2-div1-span'>Stiven Kovi</span>
                                <p className='book2-div1-p'>Stiven R. Kovi: Muvaffaqiyatli insonlarning 7 ko‘nikmasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}