import { FC, useRef, useEffect } from 'react';
import gsap from 'gsap-trial';
import { CSSRulePlugin } from 'gsap-trial/CSSRulePlugin';

import styled from "@emotion/styled";
import Button from './button/button';
import Input from './input/input';

gsap.registerPlugin(CSSRulePlugin);

const StyledDiv = styled.div`
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

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
        height: 165px;
        z-index: 15;
        border-radius: 2px;
      
        .body {
          position: relative;
          width: 100%;
          height: 165px;
          color: #000;
          
          .close {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            right: 0;
            font-size: 20px;
            cursor: pointer;
            margin-right: 5px;
            -webkit-user-select: none;  
            -moz-user-select: none;    
            -ms-user-select: none;      
            user-select: none;
           } 

           form {
              background: rgba( 104, 215, 217, 0.15 );
              color: #fff;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-shadow: 0 0 10px;
              padding: 10px;
              height: 90%;
              box-shadow: 0px 1px 7px -2px #18cae6;
              backdrop-filter: blur( 5px );
              -webkit-backdrop-filter: blur( 5px );
              border-radius: 10px;
              border: 1px solid rgba( 255, 255, 255, 0.18 );
           }

           textarea {
            width: 75%;
           }

          button {
            background-color: #18cae6;
            border: 1px solid #18cae6;
            border-radius: 10px;
            color: #000;
            height: 31px;
            padding: 0 10px;
            text-shadow: 0 0 10px;
          }

          button:hover {
            background-color: rgba( 104, 215, 217, 0.15 );
            border: 1px solid #18cae6;
            border-radius: 8px;
            color: #18cae6;
            text-shadow: 0 0 10px;
            box-shadow: 0 8px 32px 0 #18cae6;
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

const Contact: FC = () => {
    const tl: any = useRef();
    const t2: any = useRef();
    
    function openCard() {
        tl.current.play();
        t2.current.play();
    }
    
    function closeCard(e) {
        //e.stopPropagation();
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
        <div className="content" >
            <div className="envelope" ref={tl} onClick={openCard}></div>
            <div className="letter">
              <div className="body">
                <form action="https://formsubmit.co/daniel.julian.vigil@gmail.com" method="POST">
                  <Input type="text" name="name" id="name" label="Name" />
                  
                  <Input type="email" name="email" id="email" label="Email" />
                  
                  <label htmlFor='message'>Message</label>
                  <textarea name="message" id='message' placeholder="Send me your details"></textarea>

                  <input type="hidden" name="_subject" value="New Contact Request!"></input>
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_template" value="box"></input>
                  
                  <button type="submit">Submit</button>
                  <span className='close' onClick={closeCard}>X</span>
                </form>
              </div>
            </div>
            <div className="shadow"></div>
        </div>
      </StyledDiv> 
    )
}

export default Contact;