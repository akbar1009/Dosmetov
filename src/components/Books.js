import plus from '../images/plus2.svg'
export default function Books(){
    return(
        <div className="books">
            <div className="container">
                <div className='book'>
                <div className="books-left">
                    <strong className="platform-strong">Kitoblar</strong>
                    <h3 className="platform-span">Ikhtiyor Dosmetov  <span className="platform-h3">mualliflik va o’zi shaxsan tavsiya qilgan kitoblar.</span></h3>
                </div>
                <div className="books-right">
                    <ul className="books-ul">
                        <li className="books-li">
                            <img src={plus}/>
                            <p className='books-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li className="books-li">
                            <img src={plus}/>
                            <p className='books-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li className="books-li">
                            <img src={plus}/>
                            <p className='books-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li className="books-li">
                            <img src={plus}/>
                            <p className='books-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li className="books-li">
                            <img src={plus}/>
                            <p className='books-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li className="books-li">
                            <img src={plus}/>
                            <p className='books-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}