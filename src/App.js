import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'animate.css';
import styled from '@emotion/styled';
import me from './assets/images/djv_ccexpress.png';

const Container = styled.div`
  display: flex;
  border-radius: 8px;
  justify-content: center;
  margin: 10% auto;
  width: 300px;
  height: 300px;
  background-color: #66b2b2;
  color: #181818;
  text-align: center;
`;

const App = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <div>
          <h1>Daniel J Vigil</h1>
          <h3>Software Engineer / Web Developer</h3>
          <img src={me} alt="daniel vigil" height={250} width={200} />
        </div>
      </Container>
    </>
  );
}

export default App;
