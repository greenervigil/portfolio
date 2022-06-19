import { faEnvelope, faFile, faHome, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

const NavBar = styled.div`
    background: #181818;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    z-index: 999;
    border-top: 1px solid #18cae6;
    box-shadow: 0 0 15px #18cae6;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    height: 210px;

    a {
        font-size: 22px;
        color: #4d4d4e;
        line-height: 51px;
        height: 51px;
        position: relative;
        text-decoration: none;

        i {
            transition: all 0.3s ease-out;
        }
`;

const Mobilebar = () => {
    return (
        <NavBar>
            <Nav>
                <a href="/">
                    <FontAwesomeIcon icon={faHome} color="#18cae6" />
                </a>
                <a className="about-link" href="#about">
                    <FontAwesomeIcon icon={faUser} color="#18cae6" />
                </a>
                <a className="experience-link" href="#experience">
                    <FontAwesomeIcon icon={faFile} color="#18cae6" />
                </a>
                <a className="project-link" href="#projects">
                    <FontAwesomeIcon icon={faProjectDiagram} color="#18cae6" />
                </a>
                <a className="contact-link" href="#contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#18cae6" />
                </a>
            </Nav>
        </NavBar>
    )
}

export default Mobilebar;