import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "@emotion/styled";

import me from '../assets/images/djv_ccexpress.png';

const Section = styled.section`
    .box {
        height: 40vh;
        width: 40vw;
        background-color: #18cae6;
        margin: 0 auto;
        text-align: center;
        padding-top: 0.3em;
        border-radius: 4px;
        overflow-y: hidden;
    }

    .social {
        display: flex;
        justify-content: center;

        a {
            padding: 10px;
        }
    }

    .photo {
        width: 12vw;
        overflow: hidden;
        whiteSpace: nowrap;
      }
      
      .photo span {
        width: 40vh;
        height: 40vh;
        position: absolute;
        background-color: #000;
        background-image: url(${me});
        background-position: 0% 50%;
        background-size: 100%;
        background-repeat: no-repeat;
        border: 3px solid #18cae6;
        text-shadow: 0 0 10px #18cae6;
        border-radius: 50%;
        overflow: auto;
        white-space: nowrap;
      }

    @media only screen and (max-width: 600px) {
    
        .box {
          heigh: 50vh;
          width: 80vw;
          margin-top: 30%;
        }
      }
`;

const About = () => {
    return (
        <>
            <Section>
                <div className="box" id="about">
                    <h1>Daniel Greener-Vigil</h1>
                    <h4>Software Engineer / Web Developer</h4>
                    <h4>Mentor</h4>
                    <div className="social">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                            <FontAwesomeIcon icon={faLinkedin} color="#000"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                            <FontAwesomeIcon icon={faGithub} color="#000"/>
                        </a>
                    </div>
                    
                    {/*<div className="photo">
                        <span></span>
    </div>*/}
                </div>
            </Section>
        </>
    );
}

export default About;