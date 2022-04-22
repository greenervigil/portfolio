import styled from "@emotion/styled";

const Container = styled.div`
    margin: 0 auto;

    ol.even {
        position: relative;
        left: 5.45455rem;
    }

    ol.odd {
        position: relative;
        margin-bottom: -4.5%;
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
        background: #ea7432;
        cursor: pointer;
    }
`;

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <Container>
                <ol className="odd">
                    <li className="hex"></li>
                    <li className="hex"></li>
                    <li className="hex"></li>
                    <li className="hex"></li>
                </ol>
                <ol className="even">
                <li className="hex"></li>
                <li className="hex"></li>
                <li className="hex"></li>
                <li className="hex"></li>
                </ol>
            </Container>
        </>
    );
}

export default Projects;