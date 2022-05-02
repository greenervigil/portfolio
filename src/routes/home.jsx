import { useEffect } from "react";
import styled from "@emotion/styled";

import me from '../assets/images/djv_ccexpress.png';

const Section = styled.section`
  width: 100%;
  height: 100%;
  font-size: 5rem;

  h1 {
    font-size: 0.3em;
  }

  h4 {
    font-size: 0.2em;
  }

  .sec a {
    font-size: .3em;
    padding-bottom: 60px;
    margin-bottom: 20px;
    margin-left: 50%;
  }

  .sec a span {
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #18cae6;
    border-bottom: 1px solid #18cae6;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb07 2s infinite;
    animation: sdb07 2s infinite;
    opacity: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #18cae6;
  }

  .sec a span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .sec a span:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
  }
  .sec a span:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
  }

  @-webkit-keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
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
    height: 90vh;
    font-size 5em;
  }

  .photo {
    width: 12vw;
    overflow: hidden;
    whiteSpace: nowrap;
  }
  
  .photo span {
    width: 40vh;
    height: 40vh;
    position: absolute;
    background-color: #000;
    background-image: url(${me});
    background-position: 0% 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 3px solid #18cae6;
    border-radius: 50%;
    overflow: auto;
    white-space: nowrap;
  }
  
  .scroll {
    color: #000;
    text-shadow: -1px 0 #18cae6, 0 3px #18cae6, 3px 0 #18cae6, 0 -1px #18cae6;
  }

  .box {
    height: 40vh;
    width: 40vw;
    background-color: #18cae6;
    margin: 0 auto;
    text-align: center;
    padding-top: 0.3em;
    border-radius: 4px;
    overflow-y: hidden;
  }

  @media only screen and (max-width: 600px) {
    ul {
      display: none;
    }

    .box {
      heigh: 50vh;
      width: 80vw;
      margin-top: 30%;
    }
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
                <li className="scroll" data-rate="2">Vigil</li>
            </ul>
            <div className="sec">
              <a href="#me"><span></span>Scroll</a>
            </div>
        </Section>
        <Section>
            <div className="box" id="me">
                <h1>Daniel Greener-Vigil</h1>
                <h4>Software Engineer / </h4>
                <h4>Web Developer</h4>
                <div className="photo">
                <span></span>
            </div>
            </div>
        </Section>
      </main>
    )
}

export default Home;