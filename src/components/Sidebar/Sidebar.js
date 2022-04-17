import styled from "@emotion/styled";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import logo from '../../GreenerVigil-logos.jpeg';

const NavBar = styled.div`
    background: #181818;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3,
    min-height: 500px;

    .logo {
        display: block;
        padding: 8px 0;

        img {
            display: block;
            margin 8px auto;
            width: 60px;
            height: auto;

            &.sub {
                width: 50px;
            }
        }
    }
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
            color: #66b2b2;

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

    a.project-link {
        &:after {
            content: 'Projects';
        }
    }

    a.contact-link {
        &:after {
            content: 'Contact';
        }
    }

    a.active {
        svg {
            color: #66b2b2;
        }
    }
`;

const Ul = styled.ul`
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: block;
    padding: 0;
    list-style: none;
    margin: 0;
    text-align: center;

    li {
        a {
            padding: 7px 0;
            display: block;
            font-size: 16px;
        }

        &:hover {
            svg {
                color: #66b2b2;
            }
        }
    }
`;

const Sidebar = () => {
    return (
        <NavBar>
            <Link className="logo" to={'/'}>
                <img src={logo} alt={'logo'}/>
            </Link>
            <Nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </Nav>
            <Ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </Ul>
        </NavBar>
    )
};

export default Sidebar;