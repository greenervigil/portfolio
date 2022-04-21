import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'animate.css';
import styled from '@emotion/styled';
import me from './assets/images/djv_ccexpress.png';

const Section = styled.section`
  height: 100%;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    align-items: middle;
    place-items: center;
    height: 100vh;
  }
  
  span {
    width: 25vh;
    height: 25vh;
    margin-left: 100px;
    position: absolute;
    background-color: #000;
    background-image: url(${me});
    background-position: 0% 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: 0;
    left: 0;
    border: 3px solid #18cae6;
    border-radius: 50%;
    z-index: 999;
  }
  
  .scroll {
    color: #000;
    text-shadow: -1px 0 #18cae6, 0 3px #18cae6, 3px 0 #18cae6, 0 -1px #18cae6;
  }

  .box {
    height: 60vh;
    width: 70vh;
    background-color: #18cae6;
    margin: 0 auto;
    text-align: center;
    padding-top: 0.3em;
    border-radius: 10px;
  }
`;

const App = () => {
  return (
    <>
      <Sidebar />
      <Section>
        <ul>
          <li class="scroll" data-rate="-2">Daniel</li>
          <li class="scroll">&nbsp;Greener-</li>
          <li class="scroll" data-rate="2">Vigil</li>
        </ul>
        <span class="scroll" data-rateY="1" data-rateX="2" data-direction="horizontal"></span>
      </Section>
      <Section>
        <div class="box">
          <h1>Daniel Greener-Vigil</h1>
          <h4>Software Engineer / </h4>
          <h4>Web Developer</h4>
        </div>
      </Section>
    </>
  );
}

export default App;
