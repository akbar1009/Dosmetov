import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
import project1 from '../images/club.png'
import project2 from '../images/restart.png'
import project3 from '../images/white block.png'
import projectArrow from '../images/projectArrow.svg'
export default function Projects(){
    return(
        <div className="projects">
            <div className="container">
                <div className="project">
                    <div className="project-left col-3">
                        <strong className="platform-strong">Bizning loyihalar</strong>
                        <h3 className="platform-h3">Hozirda <span className="platform-span">Ikhtiyor Dostmetov</span> asos solgan lohiyalar</h3>
                    </div>
                    <div className="project-right col-8">
                        <div className="projects-div">
                            <div className="project-1">
                                <img width={152} height={71} src={project1}/>
                                <div className='project1-div'>
                                    <span className='project-span'>1000x club</span>
                                    <div className='project-div-btn'>
                                        <img src={projectArrow}/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-1">
                                <img width={152} height={71} src={project2}/>
                                <div className='project1-div'>
                                    <span className='project-span'>1000x club</span>
                                    <div className='project-div-btn'>
                                        <img src={projectArrow}/>
                                    </div>
                                </div>
                            </div>
                            <div className="project-1">
                                <img width={152} height={71} src={project3}/>
                                <div className='project1-div'>
                                    <span className='project-span'>1000x club</span>
                                    <div className='project-div-btn'>
                                        <img src={projectArrow}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='project-big-div'>
                            <Link to={"/"}><img src={logo}/></Link>
                            <h4 className='project-h4'>Shaxsiy <span className='project-h4-span'>kouching</span></h4>
                            <p className='project-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}