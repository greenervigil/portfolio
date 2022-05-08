import { useEffect } from "react";
import styled from "@emotion/styled";

const Section = styled.section`
  height: 100vh;
  font-size: 5rem;

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
  
  .scroll {
    color: #000;
    text-shadow: -1px 0 #18cae6, 0 3px #18cae6, 3px 0 #18cae6, 0 -1px #18cae6;
  }

  

  @media only screen and (max-width: 600px) {
    ul {
      display: none;
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
      <>
        <Section>
            <ul>
              <li className="scroll" data-rate="-2">Daniel</li>
              <li className="scroll" data-rate="-1">&nbsp;Greener-</li>
              <li className="scroll" data-rate="2">Vigil</li>
            </ul>
        </Section>
      </>
    )
}

export default Home;