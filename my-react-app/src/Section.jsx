import './Section.css';
import Card from "./Card";

function Section(){
    return(
        <>
        <section className = "section" id = "home"></section>
        <section className = "section2" id = "about"></section>
        <section className = "section3" id = "contact"><Card name="Komi San" description="A talented student council president with a kind heart." age={18} /></section>
        <section className = "section4" id = "services"></section>
        </>
    );
}

export default Section;