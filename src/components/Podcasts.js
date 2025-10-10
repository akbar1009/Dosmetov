import window from '../images/window.svg'
import lines from '../images/lines.svg'
import podcasts1 from '../images/podcasts-1.png'
import podcasts2 from '../images/podcasts2.png'
import podcasts3 from '../images/podcasts3.png'
import podcasts4 from '../images/podcasts4.png'
import podcasts5 from '../images/podcasts-1.png'
import podcasts6 from '../images/podcasts6.png'
import podcasts7 from '../images/podcasts7.png'
import podcasts8 from '../images/podcasts3.png'
import podcasts9 from '../images/podcasts9.png'
import podcasts10 from '../images/podcasts10.png'
import podcasts11 from '../images/podcasts-1.png'
import podcasts12 from '../images/podcasts12.png'
import naush from '../images/volume.svg'
import { useState } from 'react'
export default function Podcasts(){
    const [searchTerm,setSearchTerm] = useState('')
    const [selectedCatagory,setSelectedCatagory] = useState('Barchasi')
    const btnPodcasts = ['Barchasi','Obuna','Bepul']
    const podcasts = [ 
        {id:2, img:podcasts1 ,span:"Obuna",text:"Cheksiz imkoniyatlar sari"},
        {id:3, img:podcasts2 ,span:"Bepul",text:"Har kimning muvafaqqiyat yo'li bor"},
        {id:4, img:podcasts3 ,span:"Obuna",text:"Qo'rquv, yalqovlik va uyat."},
        {id:5, img:podcasts4 ,span:"Bepul",text:"Moliyaviy muvaffaqiyat"},
        {id:1, img:podcasts5 ,span:"Obuna",text:"Hayotni tartibga keltirish"},
        {id:6, img:podcasts6 ,span:"Bepul",text:"Bugun bilan yashang"},
        {id:7, img:podcasts7 ,span:"Obuna",text:"O'z ishida Chempion bo'lish"},
        {id:8, img:podcasts8 ,span:"Bepul",text:"Doimiy bo'lish"},
        {id:9, img:podcasts9 ,span:"Obuna",text:"Energiya"},
        {id:10,img:podcasts10 ,span:"Bepul",text:"Hayot loyihasi"},
        {id:11,img:podcasts11 ,span:"Obuna",text:"Doimiy bo’lish"},
        {id:11,img:podcasts12 ,span:"Bepul",text:"Yon-atrof"},
    ]
    const filteredPodcasts = podcasts.filter(podcast=>{
        const matchesSearch = podcast.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        const matchesCatagory = selectedCatagory === 'Barchasi' ? {podcasts}:selectedCatagory === podcast.span
        return matchesCatagory && matchesSearch
    })
    return(
        <div className="container">
            <div className="podcasts">
                <h2 className='podcasts-h2'>Podcastlar</h2>
                <div className="podcasts-right">
                    <div className="podcasts-top">
                        <div className="podcasts-btns">
                            {btnPodcasts.map((b)=>(
                                <button onClick={()=>setSelectedCatagory(b)} className={"podcasts-btn1"}>{b}</button>
                            ))}
                        </div>
                        <div className="podcasts-both">
                            <div className="podcasts-two-btn">
                                <button className="podcasts-two1"><img src={window}/></button>
                                <button className="podcasts-two2"><img src={lines}/></button>
                            </div>
                            <input className='podcasts-search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type='text' placeholder='Podkast nomi...'/>
                        </div>
                    </div>
                    <ul className='podcasts-ul'>
                        {filteredPodcasts.map((podcast)=>(
                            <li style={{backgroundImage: `url(${podcast.img})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}} className='podcasts-li'>
                            <div className='podcasts-divs'>
                                <span className='podcasts-obuna'><img src={naush}/>{podcast.span}</span>
                                <span className="podcasts-span">10:04</span>
                            </div>
                            <p className='podcasts-text'>{podcast.text}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}