import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'animate.css';
import styled from '@emotion/styled';
import me from './assets/images/djv_ccexpress.png';
import { useEffect } from 'react';

const Section = styled.section`
  height: 100vh;

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
    width: 30vh;
    height: 30vh;
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
    height: 50vh;
    width: 50vw;
    background-color: #18cae6;
    margin: 0 auto;
    text-align: center;
    padding-top: 0.3em;
    border-radius: 10px;
  }
`;

const App = () => {

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const target = document.querySelectorAll(".scroll");
    
      let index = 0,
        length = target.length;
    
      for (index; index < length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;
    
        if (target[index].dataset.direction === "horizontal") {
          let posX = window.pageYOffset * target[index].dataset.ratex;
          let posY = window.pageYOffset * target[index].dataset.ratey;
    
          target[
            index
          ].style.transform = `translate3d(${posX/2}px, ${posY}px, 0px)`;
        } else {
          target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
        }
      }
    });
  },[])
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
