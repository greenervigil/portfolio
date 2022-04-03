import styled from "@emotion/styled";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

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
            width: 24px;
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
            color: #ffd700;

            svg {
                opacity: 0;
            }

            &:after {
                opacity: 1;
            }
        }

        &:after {
            content: '';
            font-size: 9px;
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

    a.contact-link {
        &:after {
            content: 'Contact';
        }
    }

    a.active {
        color: #ffd700;
    }
`;

const Sidebar = () => {
    return (
        <NavBar>
            <Link className="logo" to={'/'}>
                <img src={''} alt={'logo'}/>
            </Link>
            <Nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </Nav>
        </NavBar>
    )
};

export default Sidebar;