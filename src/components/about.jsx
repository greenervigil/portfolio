import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "@emotion/styled";

import background from '../assets/images/yinM3E.jpg';


const StyledDiv = styled.div`
    width: 100vw;
    background-image: url(${background});
    background-size: contain;
    padding: 50px 0;
    color: #fff;
    text-shadow: 0 0 10px;
`;

const Section = styled.section`
    margin: 50px;

    .box {
        height: 75vh;
        width: 50vw;
        background-color: #000;
        border: 1px solid #18cae6;
        box-shadow: 10px 5px 5px #18cae6;
        margin: 0 auto;
        text-align: center;
        padding-top: 0.3em;
        border-radius: 10px;
        overflow-y: hidden;
    }

    .social {
        display: flex;
        justify-content: center;

        a {
            padding: 10px;
        }
    }

    .text {
        padding: 15px;
    }

    .download {
        background-color: #18cae6;
        border: 1px solid #18cae6;
        border-radius: 10px;
        text-decoration: none;
        color: #000;
    }

    .download:hover {
        background-color: #000;
        border: 1px solid #18cae6;
        border-radius: 8px;
        text-decoration: none;
        color: #18cae6;
    }

    @media only screen and (max-width: 600px) {    
        .box {
          height: 90vh;
          width: 80vw;
        }
      }
`;

const About = () => {
    return (
        <StyledDiv>
            <Section>
                <div className="box" id="about">
                    <h1>Daniel Greener-Vigil</h1>
                    <h4>Software Engineer / Web Developer</h4>
                    <h4>Mentor</h4>
                    <div className="text">
                        <p>I have a passion for learning and bring that passion to software.  I have been a Software Engineer for 6 years and bring my passion to learn to each project.  I am always willing to learn something new and never shy away from the unknown.  I welcome new challenges and help cultivate those abilities in others. </p>
                    </div>
                    <div className="social">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#18cae6"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                            <FontAwesomeIcon icon={faGithub} size="xl" color="#18cae6"/>
                        </a>
                        <a className="download" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo/">
                            <FontAwesomeIcon icon={faDownload} size={"lg"}/>&nbsp;Download CV/Resume
                        </a>
                    </div>

                    <div className="text">
                        <p>I have spent the last few years developing a mentorship program to assist self taught developers through projects designed for the developer with the Agile Methodology, version control practices and standard project management.</p>
                    </div>
                    <div className="social">
                        <a target="_blank" rel="noreferrer" href="https://github.com/GreenField-Org">
                            <FontAwesomeIcon icon={faGithub} size="xl" color="#18cae6" />
                        </a>
                    </div>
                </div>
            </Section>
        </StyledDiv>
    );
}

export default About;