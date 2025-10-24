import bag from '../images/chemodan.svg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import FirebaseApp, { auth } from '../firebase';

export default function SignUp({openSign,onCloseSign}){
        // use the exported `auth` instance from src/firebase.js
        const provider = new GoogleAuthProvider();
        const handleGoogleSignUp = async () => {
            try {
                const res = await signInWithPopup(auth, provider);
                console.log(res);
            } catch (err) {
                console.error('Google sign-in failed:', err);
            }
        };

    if (!openSign) return null;
    return(
        <div className='sign'>
        <div className="overlay">
            <div className={`sign-div ${openSign? 'openSign':''}`} >
                <div className="sign-img">
                    <img src={bag}/>
                </div>
                <button onClick={handleGoogleSignUp}>Google Sign in</button>
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
