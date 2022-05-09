import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import styled from "@emotion/styled";

import animation from '../assets/images/animation_calculator.png';
import nglMarketing from '../assets/images/ngl_marketing.png';
import bigIdeas from '../assets/images/big_ideas_campaign.png';
import digitalAccess from '../assets/images/digital_access_services_campaign.png';
import expressAnimations from '../assets/images/express_animations.png';

const H1 = styled.h1`
    font-family: 'Ubuntu';
    font-size: 3rem;
    color: #000;
    text-shadow: -1px 0 #18cae6, 0 3px #18cae6, 3px 0 #18cae6, 0 -1px #18cae6;
    text-align: center;
`;

const Container = styled.div`
    width:100%;
    height: 100%;
    transform-style: preserve-3d;
    user-select:none;
    margin: 300px 0 700px 0;

    div {
        position: absolute;
    }

    .container {
        perspective: 2000px;
        width: 300px;
        height: 400px;  
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);

        .ring {
            width:100%;
            height: 100%;
            transform-style: preserve-3d;
            user-select:none;
        }
    }

`;

const Projects = () => {
    let xPos = 0;
    //const tl = useRef();

    function getBgPos(i){
        return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
      }

    useEffect(() => {
        /*tl.current = gsap.timeline().set('.ring', {
            rotationY: 180,
            cursor: 'grab',
        })
        .set('.img', {
            rotateY: (i) => i *-36,
            transformOrigin: '50% 505 500px',
            z: -500,
            backgroundPosition: (i) => getBgPos(i),
            backfaceVisibility: 'hidden'
        })
        .from('.img', {
            duration: 1.5,
            y: 200,
            opacity: 0,
            stagger: 0.1,
            ease: 'expo'
        })*/
    }, []);
    return (
        <>
            <H1>Projects</H1>
        
            <Container id="projects">
                
                <div className="container">
                    <div className="ring" >
                        <div className="img">
                            <img 
                                src={animation} 
                                alt={'Creative Studios animation Calculator tool for their wordpress site'}
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="img">
                            <img 
                                src={nglMarketing} 
                                alt={'National geographic Marketing Site for Secondary Education'}
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="img">
                            <img 
                                src={bigIdeas} 
                                alt={'National geographic Marketing Site Big Ideas Mathematics Campaign'}
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="img">
                            <img 
                                src={digitalAccess} 
                                alt={'National geographic Marketing Site Digital Access Campaign'}
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="img">
                            <img 
                                src={expressAnimations} 
                                alt={'Creative Studios Wordpress Pages for Express Animations'}
                                width={500}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Projects;