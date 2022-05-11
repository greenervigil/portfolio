import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { CSSRulePlugin } from 'gsap-trial/CSSRulePlugin';
import styled from "@emotion/styled";

import animation from '../assets/images/animation_calculator.png';
import nglMarketing from '../assets/images/ngl_marketing.png';
import bigIdeas from '../assets/images/big_ideas_campaign.png';
import digitalAccess from '../assets/images/digital_access_services_campaign.png';
import expressAnimations from '../assets/images/express_animations.png';

gsap.registerPlugin(CSSRulePlugin);

const Container = styled.div`
    padding-top: 100px;
    width:100%;
    height: 100%;
    transform-style: preserve-3d;
    user-select:none;


    div, svg {
        position: absolute;
    }

    .container {
        perspective: 2000px;
        width: 300px;
        height: 400px;  
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        .ring, img {
            width:100%;
            height: 100%;
            transform-style: preserve-3d;
            user-select:none;
        }
    }

`;

const Projects = () => {
    let xPos = 0;
    const tl = useRef();

    function getBgPos(i){
        return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
    }

    function drag(e){
        if (e.touches) e.clientX = e.touches[0].clientX;    
      
        gsap.to('.ring', {
          rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
          onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
        });
        
        xPos = Math.round(e.clientX);
    }

    useEffect(() => {
        tl.current = gsap.timeline().set('.ring', {
            rotationY: 450,
            cursor: 'grab',
        })
        .set('.img', {
            rotateY: (i) => i*-36,
            transformOrigin: '50% 50% 500px',
            z: -500,
            backgroundPosition:(i)=>getBgPos(i),
            backfaceVisibility: 'hidden'
        })
        .from('.img', {
            duration: 1.5,
            y: 200,
            opacity: 0,
            stagger: 0.1,
            ease: 'expo'
        })
        .add(() => {
            const enter = document.querySelector('.img');

            enter.addEventListener('mouseenter', (e) => {
                let current = e.currentTarget;
                console.log('event')
                gsap.to('.img', {
                    opacity:    (i,t) => (t===current) ? 1:0.5, 
                    ease: 'power3'
                })
            })

            enter.addEventListener('mouseleave', (e) => {
                gsap.to('.img', {opacity:1, ease:'power2.inOut'})
            })
        }, '-=0.5')
    }, []);
    return (
        <Container id="projects">
            
            <div className="container">
                <div className="ring" ref={tl}>
                    <div className="img">
                        <img 
                            src={animation} 
                            alt={'Creative Studios animation Calculator tool for their wordpress site'}
                            width={400}
                            height={600}
                        />
                    </div>
                    <div className="img">
                        <img 
                            src={nglMarketing} 
                            alt={'National geographic Marketing Site for Secondary Education'}
                            width={400}
                            height={600}
                        />
                    </div>
                    <div className="img">
                        <img 
                            src={bigIdeas} 
                            alt={'National geographic Marketing Site Big Ideas Mathematics Campaign'}
                            width={400}
                            height={600}
                        />
                    </div>
                    <div className="img">
                        <img 
                            src={digitalAccess} 
                            alt={'National geographic Marketing Site Digital Access Campaign'}
                            width={400}
                            height={600}
                        />
                    </div>
                    <div className="img">
                        <img 
                            src={expressAnimations} 
                            alt={'Creative Studios Wordpress Pages for Express Animations'}
                            width={400}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Projects;