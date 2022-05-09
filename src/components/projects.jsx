import styled from "@emotion/styled";

const Container = styled.main`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;

    h1 {
        font-family: 'Ubuntu';
        font-size: 3rem;
        color: #000;
        text-shadow: -1px 0 #18cae6, 0 3px #18cae6, 3px 0 #18cae6, 0 -1px #18cae6;
        text-align: center;
    }
`;

const Projects = () => {
    return (
        <>
        <Container id="projects">
            <h1>Projects</h1>
               
        </Container>
        </>
    );
}

export default Projects;