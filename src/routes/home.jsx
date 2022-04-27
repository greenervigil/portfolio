import styled from '@emotion/styled';
import me from '../assets/images/djv_ccexpress.png';
import { useEffect } from 'react';

const Section = styled.section`
  height: 100%;
  font-size 5em;

  h1 {
    font-size: 0.3em;
  }

  h4 {
    font-size: 0.2em;
  }

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
    width: 35vh;
    height: 35vh;
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
    overflow: auto;
    white-space: nowrap;
  }
  
  .scroll {
    color: #000;
    text-shadow: -1px 0 #18cae6, 0 3px #18cae6, 3px 0 #18cae6, 0 -1px #18cae6;
  }

  .box {
    height: 40vh;
    width: 30vw;
    background-color: #18cae6;
    margin: 0 auto;
    text-align: center;
    padding-top: 0.3em;
    border-radius: 10px;
  }
`;

const Home = () => {

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
              ].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
            } else {
              target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
            }
          }
        });
    },[]);

    return (
        <main>
            <Section>
                <ul>
                <li className="scroll" data-rate="-2">Daniel</li>
                <li className="scroll" data-rate="-1">&nbsp;Greener-</li>
                <li className="scroll" data-rate="3">Vigil</li>
                </ul>
                <div style={{width: '50vw', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <span className="scroll" data-rateY="1" data-rateX="1" data-direction="horizontal"></span>
                </div>
            </Section>
            <Section>
                <div className="box">
                <h1>Daniel Greener-Vigil</h1>
                <h4>Software Engineer / </h4>
                <h4>Web Developer</h4>
                </div>
            </Section>
        </main>
    )
}

export default Home;