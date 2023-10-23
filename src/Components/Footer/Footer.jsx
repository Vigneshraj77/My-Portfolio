import React from "react";
import "./Footer.css";
import leetcode from "../../Assets/Images/leet.webp"

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="contact">
                    <a href="mailto:vigneshrajs71@gmail.com"><span className="icon icon-moonmail4"></span> Hire Me</a>
                    <ul className="socials">
                        <li>
                            <a href="./vigneshraj.pdf" target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-moonfile-pdf"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vignesh-raj-777s/" target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-moontwitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Vigneshraj77" target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-moongithub"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://leetcode.com/vigneshraj7/" target="_blank" rel="noopener noreferrer">
                            <img alt="leetcode" src={leetcode}></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;