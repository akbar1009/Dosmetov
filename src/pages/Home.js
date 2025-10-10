import Books from "../components/Books";
import Books2 from "../components/Books2";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Platforms from "../components/Platforms";
import Podcast from "../components/Podcast";
import Projects from "../components/Projects";
import Sub from "../components/Sub";
import Videos from "../components/Videos";

export default function Home(){
    return(
        <div>
            <Hero/>
            <Info/>
            <Projects/>
            <Videos/>
            <Podcast/>
            <Platforms/>
            <Books2/>
            <Books/>
            <Sub/>
        </div>
    )
}