import styled from "@emotion/styled";
import { faBootstrap, faHtml5, faJs, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MenutItem from "./ProjectMenu/menuItem";

const Container = styled.main`
    width: 100vw;
    height: 100vh;
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
        color: #18cae6;
        text-shadow: 0 0 10px #18cae6;
        cursor: pointer;
    }

    .active {
        background: #18cae6;
        color: #1e2530;

        .hex-content {
            color: #1e2530;
        }
    }

    .active:hover {
        color: #1e2530;
        text-shadow: 0 0 10px #1e2530;
        cursor: pointer;
    }

    .hex-content {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;

        transform: translate(-50%, -50%) rotate(90deg);

        color: #18cae6;
    }
`;

const Projects = () => {
    const [filter, setFilter] = useState('');

    function handleFilter(event) {
        event.preventDefault();
        setFilter(event.target.innerHTML);
        event.target.parentNode.className += ' active'
    }

    return (
        <>
        <Container id="projects">
            <h1>Projects</h1>
            <ol className="odd">
                <li className="hex active" onClick={handleFilter}>
                    <div className="hex-content">
                        <p>All</p>
                    </div>
                </li>
                <li className="hex" onClick={handleFilter}>
                    <MenutItem icon={faJs} title="JavaScript" />
                </li>
                <li className="hex" onClick={handleFilter}>
                    <MenutItem icon={faHtml5} title="HTML" />
                </li>
                <li className="hex" onClick={handleFilter}>
                    <MenutItem icon={faBootstrap} title="Boostrap" />
                </li>
            </ol>
            <ol className="even" onClick={handleFilter}>
                <li className="hex">
                    <MenutItem icon={faReact} title="React" />
                </li>
                <li className="hex" onClick={handleFilter}>
                    <MenutItem icon={faMobile} title="Mobile" />
                </li>
                <li className="hex" onClick={handleFilter}>
                    <MenutItem icon={faWordpress} title="Wordpress" />
                </li>
            </ol>   
        </Container>

        <div>
            <p>{filter}</p>
        </div>
        </>
    );
}

export default Projects;