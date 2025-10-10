import bag from '../images/chemodan.svg'
export default function SignUp({openSign,onCloseSign}){
    if(!openSign) return;
    return(
        <div className='sign'>
        <div className="overlay">
            <div className={`sign-div ${openSign? 'openSign':''}`} >
                <div className="sign-img">
                    <img src={bag}/>
                </div>
                <h4 className='sign-h4'>Shaxsiy ma’lumotlar</h4>
                <p className='sign-p'>Shaxsiy ma’lumotlarni kiriting</p>
                <form className='sign-form'>
                    <div className='sign-input-div'>
                        <p className='sign-input-text'>Ismingiz</p>
                        <input className='sign-input' placeholder='Ismingizni kiriting'/>
                    </div>
                    <div className='sign-input-div'>
                        <p className='sign-input-text'>Parol</p>
                        <input type='password' className='sign-input' placeholder='********'/>
                    </div>
                    <div className='sign-input-div'>
                        <p className='sign-input-text'>Parolni qaytaring</p>
                        <input type='password' className='sign-input' placeholder='********'/>
                    </div>
                </form>
                <button className='sign-btn'>Saqlash</button>
                <button onClick={onCloseSign} className='sign-close'>x</button>
            </div>
        </div>
         </div>
    )
}
