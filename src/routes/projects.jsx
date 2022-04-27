import styled from "@emotion/styled";
import { faBootstrap, faHtml5, faJs, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.main`
    margin: 0 auto;

    h1 {
        color: #18cae6;
        text-align: center;
    }

    ol.even {
        position: relative;
        left: 5.45455rem;
        padding-left: 28%;
    }

    ol.odd {
        position: relative;
        margin-bottom: -4.5%;
        padding-left: 28%;
    }

    .hex {
        position: relative;
        margin: 1em auto;
        width: 6rem;
        height: 10.2rem;
        background: #1e2530;
        transform: rotate(-90deg);
        display: inline-block;
        list-style-type: none;
        margin-right: 4.61538rem;
        transition: all 150ms ease-in-out;
        z-index: 2;
    }

    .hex:before, .hex:after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
        content: '';
        z-index: -1;
    }

    .hex: before {
        transform: rotate(60deg);
    }

    .hex:after {
        transform: rotate(-60deg);
    }

    .hex:hover {
        background: #18cae6;
        cursor: pointer;
    }

    .hex-content {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;

        transform: translate(-50%, -50%) rotate(90deg);

        color: #4d4d4e;
    }
`;

const Projects = () => {
    return (
        <Container>
            <h1>Projects</h1>
            <ol className="odd">
                <li className="hex">
                    <div className="hex-content">
                        <FontAwesomeIcon icon={faJs} size="xl"></FontAwesomeIcon>
                        <p>JavaScript</p>
                    </div>
                </li>
                <li className="hex">
                <div className="hex-content">
                        <FontAwesomeIcon icon={faHtml5} size="xl"></FontAwesomeIcon>
                        <p>HTML</p>
                    </div>
                </li>
                <li className="hex">
                    <div className="hex-content">
                        <FontAwesomeIcon icon={faBootstrap} size="xl"></FontAwesomeIcon>
                        <p>Bootstrap</p>
                    </div>
                </li>
                <li className="hex">
                    <div className="hex-content">
                        <FontAwesomeIcon icon={faBootstrap} size="xl"></FontAwesomeIcon>
                        <p>Bootstrap</p>
                    </div>
                </li>
            </ol>
            <ol className="even">
                <li className="hex">
                    <div className="hex-content">
                        <FontAwesomeIcon icon={faReact} size="xl"></FontAwesomeIcon>
                        <p>React</p>
                    </div>
                </li>
                <li className="hex">
                    <div className="hex-content">
                        <FontAwesomeIcon icon={faMobile} size="xl"></FontAwesomeIcon>
                        <p>Mobile</p>
                    </div>
                </li>
                <li className="hex">
                    <div className="hex-content">
                        <FontAwesomeIcon icon={faWordpress} size="xl"></FontAwesomeIcon>
                        <p>Wordpress</p>
                    </div>
                </li>
            </ol>
        </Container>
    );
}

export default Projects;