import React from 'react';

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-sm-12 app_developer">
                    <ul>
                        <li className="app_developer--item">- Developed by <b>Ali Tursucular</b></li>
                        <li className="app_developer--item">
                            <a href="https://www.linkedin.com/in/alitursucular/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} color="#2867b2" />
                            </a>
                        </li>
                        <li className="app_developer--item">
                            <a href="https://alitursucular.github.io">
                                <FontAwesomeIcon icon={faLink} flip="horizontal" color="#212529" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}