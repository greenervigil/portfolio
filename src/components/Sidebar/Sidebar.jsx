import styled from "@emotion/styled";
import { faEnvelope, faFile, faHome, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = styled.div`
    background: #181818;
    width: 100px;
    height: 50vh;
    margin: 20px;
    top: 25%;
    position: fixed;
    z-index: 3;
    box-shadow: 10px 5px 5px #18cae6;
    border: 1px solid #18cae6;
    border-radius: 10px;
`;

const Nav = styled.nav`
    display: block;
    text-align: center;
    position: absolute;
    height: 210px;
    top: 50%;
    margin-top: -120px;
    width: 100%;

    a {
        font-size: 22px;
        color: #4d4d4e;
        display: block;
        line-height: 51px;
        height: 51px;
        position: relative;
        text-decoration: none;

        i {
            transition: all 0.3s ease-out;
        }

        &:hover {
            color: #18cae6;

            svg {
                opacity: 0;
            }

            &:after {
                opacity: 1;
            }
        }

        &:after {
            content: '';
            font-size: 12px;
            letter-spacing: 2px;
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            text-align: center;
            opacity: 0;
            transition: all 0.3s ease-out;
        }

        &:first-of-type {
            &:after {
                content: 'HOME';
            }
        }
    }

    a.about-link {
        &:after {
            content: 'ABOUT';
        }
    }

    a.experience-link {
        &:after {
            content: 'EXPERIENCE';
        }
    }

    a.project-link {
        &:after {
            content: 'PROJECTS';
        }
    }

    a.contact-link {
        &:after {
            content: 'CONTACT';
        }
    }

    a.active {
        svg {
            color: #18cae6;
        }
    }
`;

const Sidebar = () => {
    return (
        <NavBar>
            <Nav>
                <a href="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </a>
                <a className="about-link" href="#about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </a>
                <a className="experience-link" href="#experience">
                    <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                </a>
                <a className="project-link" href="#projects">
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </a>
                <a className="contact-link" href="#contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </a>
            </Nav>
        </NavBar>

    )
};

export default Sidebar;