import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "@emotion/styled";

import background from '../assets/images/yinM3E.jpg';
import Container from "./container/container";
import Button from "./button/button";
import Box from "./box/box";

const StyledDiv = styled.div`
    width: 100vw;
    background-image: url(${background});
    background-size: cover;
    padding: 50px 0;
`;

const Section = styled.section`
    margin: 50px;

    .social {
        display: flex;
        justify-content: center;

        a {
            padding: 10px;
        }
    }
`;

const content = {
    name: 'Daniel Greener-Vigil',
    title: `Software Engineer / Web Developer <br/>Mentor`,
    aboutText: 'I have a passion for learning and bring that passion to software.  I have been a Software Engineer for 6 years and bring my passion to learn to each project.  I am always willing to learn something new and never shy away from the unknown.  I welcome new challenges and help cultivate those abilities in others.',
    greenfield: 'I have spent the last few years developing a mentorship program to assist self taught developers through projects designed for the developer with the Agile Methodology, version control practices and standard project management.'
}

const About = () => {
    return (
        <StyledDiv>
            <Section>
                <Box id="about">
                    <h1>{content.name}</h1>
                    <h4 dangerouslySetInnerHTML={{ __html: content.title }}></h4>

                    <Container text={content.aboutText}/>

                    <div className="social">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#18cae6"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                            <FontAwesomeIcon icon={faGithub} size="xl" color="#18cae6"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo/">
                            <Button icon={<FontAwesomeIcon icon={faDownload} size={"lg"}/>} 
                                label='&nbsp;Download CV/Resume'
                            />
                        </a>
                    </div>

                    <Container text={content.greenfield} />

                    <div className="social">
                        <a target="_blank" rel="noreferrer" href="https://github.com/GreenField-Org">
                            <FontAwesomeIcon icon={faGithub} size="xl" color="#18cae6" />
                        </a>
                    </div>
                </Box>
            </Section>
        </StyledDiv>
    );
}

export default About;