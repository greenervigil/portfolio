import Button from "./button/button";
import Card from "./card/card";

import animation from '../assets/images/animation_calculator.png';
import nglMarketing from '../assets/images/ngl_marketing.png';
import bigIdeas from '../assets/images/big_ideas_campaign.png';
import digitalAccess from '../assets/images/digital_access_services_campaign.png';
import expressAnimations from '../assets/images/express_animations.png';
import galsBestPals from '../assets/images/gals_best_pal.png'

const ImageCard = ({ detail, title, background }) => {
    return (
        <div style={{ width: '280px', height: '400px', color: '#fff', margin: '0 auto',
        textAlign: 'center',
        textShadow: '0 0 10px',
        padding: '0.3em 1em',
        overflowY: 'hidden',
        background: 'rgba( 104, 215, 217, 0.15 )',
        boxShadow: '0 8px 32px 0 #18cae6',
        backdropFilter: 'blur( 5px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )' }}>
            <img src={background} width={200} height={200}/>
            <h3>{title}</h3>
            <p>{detail}</p>
            <Button label="Read More" />
        </div>
    )
}

const Projects = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '100px'}}>
                <ImageCard title="Animation Calculator" background={animation} detail={'Creative Studios Animations Calculator - Wordpress Page tool to calculate animation requests'}/>
                <ImageCard title="National Geographic Learning K-12" background={nglMarketing} detail={' Marketing site'}/>
                <ImageCard title="NGL K-12 Big Ideas Marketing Campaign pages" background={bigIdeas} detail={'Big Ideas 9 page marketing campaign'}/>
                
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto 150px'}}>
                <ImageCard title="NGL Digital Access Campaign" detail={'Digital Access 6 Page Promotion'} background={digitalAccess} />
                <ImageCard title="Creative Studios Wordpress" detail={'Updates to the Creative Studios wordpress site'} background={expressAnimations} />
                <ImageCard title="Gals Best Pal's Company Site" detail={'Wordpress Theme for Gals Best Pal Dog Fostering Team'} background={galsBestPals} />
            </div>
        </>
    )
}

export default Projects;