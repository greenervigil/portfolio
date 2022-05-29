import { useRef, useEffect } from 'react';
import gsap from 'gsap-trial';
import { CSSRulePlugin } from 'gsap-trial/CSSRulePlugin';

import styled from "@emotion/styled";
import background from '../assets/images/yinM3E.jpg'

gsap.registerPlugin(CSSRulePlugin);

const StyledDiv = styled.div`
  
`;

const Container = styled.div`
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backgroud-image: url(${background});

    .content {
        position: relative;
        perspective: 600px;
      }
      
      .shadow {
        position: absolute;
        width: 200px;
        height: 1px;
        background: transparent;
        border-radius: 30%;
        box-shadow: 50px 100px 10px 5px #18cae6;
      }
      
      .letter {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 280px;
        height: 160px;
        z-index: 15;
        border-radius: 2px;
        background: #18cae6;
        box-shadow: 0px 1px 7px -2px #18cae6;
      
        .body {
          position: relative;
          width: 240px;
          height: 120px;
          color: #000;
          
          .close {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            right: 0;
            font-size: 30px;
            cursor: pointer;
            -webkit-user-select: none;  
            -moz-user-select: none;    
            -ms-user-select: none;      
            user-select: none;
           } 

           form {
               padding: 10px;
           }

           label: {
                margin-right: 5px;
            }
        }
      }
      
      .envelope {
        position: relative;
        width: 300px; 
        height: 180px; 
        background: linear-gradient(#cccbd7 0.5px, #18cae6 0.5px) ;
        cursor: pointer;
      }
      
      .envelope::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;  
        border-top: 115px solid #18cae6;
        border-left: 150px solid transparent;
        border-right: 150px solid transparent;
        box-sizing: border-box;
        z-index: 30; 
        transform-origin: top;
      }
      
      .envelope::after {
        content: '';
        position: absolute;
        top: 0;
        width: 300px; 
        height: 180px; 
        z-index: 25;
        background: 
          //bottom-right
          linear-gradient(30deg, #009292 47%, #004141 50%, #00a3a3 50%) 150px 90px/ 150px 90px no-repeat,
          
          //top-left
          linear-gradient(31deg, #00a3a3 49%, #004141 50%, transparent 50%) 0px 0px/ 152px 90px no-repeat,
          
          //bottom-left
          linear-gradient(150deg, #00a3a3 50%, #004141 50%, #009292 53%) 0px 90px/ 151px 90px no-repeat,
          
          //top-right
          linear-gradient(148.7deg, transparent 50%, #004141 50%, #00a3a3 51%) 150px 0px/ 150px 90px no-repeat; 
      }      
`;

const Contact = () => {
    const tl = useRef();
    const t2 = useRef();
    
    function openCard() {
        tl.current.play();
        t2.current.play();
    }
    
    function closeCard(e) {
        e.stopPropagation();
        tl.current.reverse();
        t2.current.reverse();
    }

    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        const flap = CSSRulePlugin.getRule('.envelope:before'); 
        
        tl.current.to(flap, { 
            duration: 0.5, 
            css: {
              rotateX: 180
            }
          })
           .set(flap, {
            css: {
              zIndex: 10
            }
          })
          .to('.letter', {
            translateY: -200,
            duration: 0.9, 
            ease: "back.inOut(1.5)"
          })
           .set('.letter', {
            zIndex: 40
          })
           .to('.letter', {
            duration: .7,  
            ease: "back.out(.4)",
            translateY: -5,
            translateZ: 250
          });

        t2.current = gsap.timeline({ paused: true }); 
        t2.current.to('.shadow', {
            delay: 1.4,
            width: 450,
            boxShadow: "-75px 150px 10px 5px #18cae6",
            ease: "back.out(.2)",
            duration: .7
        }); 
    }, []);


    return (
        <StyledDiv id="contact">
            <Container>
            <div className="content" >
                <div className="envelope" ref={tl} onClick={openCard}></div>
                <div className="letter">
                <div className="body">
                    <form action="https://formsubmit.co/a3e41e802167824b816157ab86b16ea2" method="POST">
                      <label htmlFor='name'>Name&nbsp;</label>
                      <input type="text" name="name" id="name" required />
                      <label htmlFor='email'>Email&nbsp;</label>
                      <input type="email" name="email" id='email' required />
                      
                      <label htmlFor='message'>Message</label>
                      <textarea name="message" id='message' placeholder="Send me your details"></textarea>

                      <input type="hidden" name="_subject" value="New Contact Request!"></input>
                      <input type="text" name="_honey" style={{ display: 'none' }} />
                      <input type="hidden" name="_template" value="box"></input>
                      
                      <button type="submit">Send</button>
                      {/*<span className='close' onClick={closeCard}>Submit</span>*/}
                    </form>
                </div>
                </div>
                <div className="shadow"></div>
            </div>
            </Container> 
        </StyledDiv>
    )
}

export default Contact;