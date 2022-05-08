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
`;

const Section = styled.section`
    margin-top: 50px;

    .box {
        height: 70vh;
        width: 50vw;
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

    .download {
        background-color: #000;
        border: 1px solid #000;
        border-radius: 8px;
        text-decoration: none;
        color: #18cae6;
    }

    .download:hover {
        background-color: #18cae6;
        border: 1px solid #000;
        border-radius: 8px;
        text-decoration: none;
        color: #000;
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
        <StyledDiv>
            <Section>
                <div className="box" id="about">
                    <h1>Daniel Greener-Vigil</h1>
                    <h4>Software Engineer / Web Developer</h4>
                    <h4>Mentor</h4>
                    <div className="social">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#000"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                            <FontAwesomeIcon icon={faGithub} size="xl" color="#000"/>
                        </a>
                        <a className="download" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo/">
                            <FontAwesomeIcon icon={faDownload} size={"lg"}/>&nbsp;Download CV/Resume
                        </a>
                    </div>
                </div>
            </Section>
        </StyledDiv>
    );
}

export default About;