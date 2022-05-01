import { useRef, useEffect } from 'react';
import gsap from 'gsap-trial';
import { CSSRulePlugin } from 'gsap-trial/CSSRulePlugin';
import styled from "@emotion/styled";

gsap.registerPlugin(CSSRulePlugin);

const H1 = styled.h1`
    text-align: center;
    color: #18cae6;
    padding-top: 50px;
`;

const Container = styled.div`
    min-height: 75vh;
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
        const flap = CSSRulePlugin.getRule(".envelope:before"); 
        
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
        <main>
            <H1>Contact</H1>
            <Container>
            <div className="content" >
                <div className="envelope" ref={tl} onClick={openCard}></div>
                <div className="letter">
                <div className="body">
                    <form>
                        <label>Name</label>
                        <input type={'text'}/>
                        <br/>
                        <label>Email</label>
                        <input type={'email'}/>
                        <br/>
                        <label>Brief description of project</label>
                        <textarea cols={30}/>
                        <br/>
                        <span className='close' onClick={closeCard}>Submit</span>
                    </form>
                </div>
                </div>
                <div className="shadow"></div>
            </div>
            </Container> 
        </main>
    )
}

export default Contact;