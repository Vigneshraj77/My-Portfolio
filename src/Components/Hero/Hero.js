import React,{Component} from "react";
import "./Hero.css"
import Photo from "../../Assets/Images/pp.png";
import leetcode from "../../Assets/Images/leet.webp"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: props.loaded
        }
    }

    componentDidMount() {
        let TL = gsap.timeline({scrollTrigger:{
            trigger:".hero",
            start:"top 50%",
            end:"bottom top",
            toggleActions:"restart none none reset"
        }})
        .from(".image>img", {y: 100, opacity:0, ease:"back", duration:1}, "<1")
        .from(".about>*", {x:-100, opacity:0, ease:"back", duration:1, stagger: .2}, "<1")
        TL.pause()
        if (this.state.loaded) {
            TL.play()
        }
    }

    componentWillReceiveProps({loaded}) {
        this.setState({loaded})
    }

    render() {
        return(
            <section className="hero animated fadeIn">
                <div className="row">
                    <div className="about">
                        <h4 className="compliment">
                        Hey THERE <span role="img" aria-label="Hi!">🙂</span>, I'm 
                        </h4>
                        <h1 className="intro">
                        Vigneshraj Selvaraj
                        </h1>
                        <p className="bio">
                        Experienced software engineer with more than 2 years
of practical experience in building scalable applications.
Recognized for effective problem-solving abilities, I
eagerly seek opportunities for continuous learning and
technology adaptation.
                        </p>
                        <div className="hero-cta">
                            <ul className="socials">
                                <li>
                                    <a href="https://github.com/Vigneshraj77"><span className="icon icon-moongithub"></span></a>
                                </li>
                                <li>
                                    <a href="https://leetcode.com/vigneshraj7/"><img alt="leetcode" src={leetcode}></img></a>
                                </li>
                            </ul>
                            
                            <a style={{marginRight:"10px"}}  href="#portfolio"><span>Read About Me <span className="icon icon-moonarrow-down2"></span></span></a>
                            
                            <a href="./vigneshraj.pdf" target="_blank" rel="noopener noreferrer"><span> View My Resume <span className="icon icon-moonfile-pdf"></span></span></a>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Photo} alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;