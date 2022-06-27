import styled from "@emotion/styled";

import animation from '../assets/images/animation_calculator.png';
import nglMarketing from '../assets/images/ngl_marketing.png';
import bigIdeas from '../assets/images/big_ideas_campaign.png';
import digitalAccess from '../assets/images/digital_access_services_campaign.png';
import expressAnimations from '../assets/images/express_animations.png';
import galsBestPals from '../assets/images/gals_best_pal.png'


const Container = styled.ul`
    overflow: hidden;
    width: 90%;
    margin: 0 auto; 

    .clear:after {
        content: "";
        display: block;
        clear: both;
    }

    li {
        position: relative;
        list-style-type: none;
        width: 27.85714285714286%; /* = (100-2.5) / 3.5 */
        padding-bottom: 32.16760145166612%; /* =  width /0.866 */
        float: left;
        overflow: hidden;
        visibility: hidden;
        
        -webkit-transform: rotate(-60deg) skewY(30deg);
        -ms-transform: rotate(-60deg) skewY(30deg);
        transform: rotate(-60deg) skewY(30deg);
    }

    li:nth-child(3n+2) {
        margin: 0 1%;
    }

    li:nth-child(6n+4) {
        margin-left: 0.5%;
    }

    li:nth-child(6n+4), li:nth-child(6n+5), li:nth-child(6n+6) {
        margin-top: -6.9285714285%;
        margin-bottom: -6.9285714285%;
        
        -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
        -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
        transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }

    li:nth-child(6n+4):last-child, li:nth-child(6n+5):last-child, li:nth-child(6n+6):last-child {
        margin-bottom: 0%;
    }

    li * {
        position: absolute;
        visibility: visible;
    }

    li > div {
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        overflow: hidden;
        
        -webkit-transform: skewY(-30deg) rotate(60deg);
        -ms-transform: skewY(-30deg) rotate(60deg);
        transform: skewY(-30deg) rotate(60deg);
        
        -webkit-backface-visibility: hidden;
        
    }

    li img {
        left: -100%; 
        right: -100%;
        width: auto; 
        height: 100%;
        margin: 0 auto;   
    }

    div h1, div p {
        width: 90%;
        padding: 0 5%;
        background-color:rgba( 104, 215, 217, 0.85 ); 
        font-family: 'Raleway', sans-serif;
        
        -webkit-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
        -ms-transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
        transition: top .2s ease-out, bottom .2s ease-out, .2s padding .2s ease-out;
    }

    li h1 {
        bottom: 110%;
        font-style: italic;
        font-weight: normal;
        font-size: 1.5em;
        padding-top: 100%;
        padding-bottom: 100%;
    }

    li h1:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -1px; 
        left: 40%;
        width: 20%;
        text-align: center;
        z-index: 1;
        border-bottom: 2px solid #fff;
    }

    li p {
        padding-top: 50%;
        top: 110%;
        padding-bottom: 50%;
    }

    li p a {
        text-decoration: none;
    }

    li div:hover h1 {
        bottom: 45%;
        padding-bottom: 10%;
    }

    li div:hover p {
        top: 45%;
        padding-top: 10%;
    }
`;

const Projects = () => {
    return (
        <Container className='clear' id="projects">
            <li className='pusher'></li>
            <li>
                <div>
                    <img src={animation} alt="Creative Studios animation calculator tool wordpress page" />
                    <h1>Cengage Group - Creative Studios </h1>
                    <p>Animation Calculator Tool</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://cs.cengage.com/animation-calculator' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <img src={nglMarketing} alt="National Geographic Learning Marketing site for Secondary Education" />
                    <h1>NGL Secondary Marketing</h1>
                    <p>National Geographic Learning Marketing site for Secondary education</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://ngl.cengage.com' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <img src={bigIdeas} alt="Big Ideas Mathematics Marketing campaign for National Geographic Learning" />
                    <h1>NGL Big Ideas Mathematics</h1>
                    <p>Big Ideas 7 page Marketing Campaign</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://ngl.cengage.com/assets/html/bigIdeas' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <img src={digitalAccess} alt="National Geographic Learning Digital Access Campaign for secondary education" />
                    <h1>NGL Digital Access</h1>
                    <p>Digital Access 6 Page Campaign</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://ngl.cengage.com/assets/html/digitalAccess' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li className="pusher"></li>
            <li className="pusher"></li>
            <li>
                <div>
                    <img src={expressAnimations} alt="Creative Studios Wordpress site" />
                    <h1>Cengage Group - Creative Studios</h1>
                    <p>Creative Studios wordpress site</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://cs.cengage.com' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
            <li>
                <div>
                    <img src={galsBestPals} alt="Gals Best Pal Wordpress site" />
                    <h1>Gals Best Pal - Non Profit Dog Rescue</h1>
                    <p>Gals' Best Pal Dog Foster site</p>
                    <br/>
                    <a style={{fontSize: '20px'}} href='https://galsbestpal.com' target='_blank' rel='noreferrer'>Go</a>
                </div>
            </li>
        </Container>
    );
}

export default Projects;