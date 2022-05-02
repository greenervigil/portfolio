import { faEnvelope, faFile, faHome, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const NavBar = styled.div`
    background: #181818;
    width: 100vw;
    height: 50px;
    position: fixed;
    bottom: 0;
    z-index: 999,
    min-height: 500px;
    border-top: 1px solid #18cae6;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    height: 210px;
    width: 100%;

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
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#18cae6" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#18cae6" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                    <FontAwesomeIcon icon={faFile} color="#18cae6" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                    <FontAwesomeIcon icon={faProjectDiagram} color="#18cae6" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#18cae6" />
                </NavLink>
            </Nav>
        </NavBar>
    )
}

export default Mobilebar;