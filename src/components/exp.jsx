import styled from "@emotion/styled";

const Timeline = styled.main`
    padding-top: 50px;
    width: 100vw;

    h1 {
        text-align: center;
        color: #18cae6;
    }

    /* The actual timeline (the vertical ruler) */
    .timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    }

    /* The actual timeline (the vertical ruler) */
    .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #18cae6;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    }

    /* Container around content */
    .container {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
    }

    /* The circles on the timeline */
    .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: #000;
        border: 4px solid #18cae6;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }

    /* Place the container to the left */
    .left {
        left: -8%;
    }

    /* Place the container to the right */
    .right {
        left: 50%;
    }

    /* Add arrows to the left container (pointing right) */
    .left::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid #18cae6;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent #18cae6;
    }

    /* Add arrows to the right container (pointing left) */
    .right::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid #18cae6;
        border-width: 10px 10px 10px 0;
        border-color: transparent #18cae6 transparent transparent;
    }

    /* Fix the circle for containers on the right side */
    .right::after {
        left: -16px;
    }

    /* The actual content */
    .content {
        padding: 20px 30px;
        background-color: #18cae6;
        position: relative;
        border-radius: 6px;
    }

    /* Media queries - Responsive timeline on screens less than 600px wide */
    @media screen and (max-width: 600px) {
        /* Place the timelime to the left */
        .timeline::after {
            left: 31px;
        }
    
        /* Full-width containers */
        .container {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
        }
  
        /* Make sure that all arrows are pointing leftwards */
        .container::before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
        }

        /* Make sure all circles are at the same spot */
        .left::after, .right::after {
            left: 15px;
        }
  
        /* Make all right containers behave like the left ones */
        .right {
            left: 0%;
        }
    }
`;

const Exp = () => {
    return (
        <Timeline>
            <div id="experience">
                <h1>Experience</h1>
            </div>
            <div className="timeline">
                <div className="container right">
                    <div className="content">
                    <h2>2021</h2>
                    <h4>Lead Front End Engineer</h4>
                    <p>Drive front end development in React and Typescript of Cengage's secondary platform Mind Tap Schools for K-12. Build compound component library shared by multiple application along with maintaing company component library React Magma.  Lead front end technology decisions for best practices.</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                    <h2>2021</h2>
                    <h4>Front End Developer Project</h4>
                    <p>National Greographic Learning K-12 Big Ideas Mathematics campaign.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <h2>2021</h2>
                    <h4>Front End Developer Project</h4>
                    <p>National Greographic Learning K-12 digital Access and Integration campaign.</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                    <h2>2021</h2>
                    <h4>Front End Developer Project</h4>
                    <p>National Geographic Learning Marketing site for the K-12 and secondary market.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <h2>2020</h2>
                    <h4>Front End Developer Project</h4>
                    <p>Maintenance and development of Creative Studio Wordpress Site.</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                    <h2>2017 - 2021</h2>
                    <h4>Senior Software Engineer</h4>
                    <p>Full stack web development in Java, JavaScript with Struts, Angular, and React frameworks on MyELT platform. Maintenance and enhancements of Speech Recognition Software. Automation of JSpeech Grammar Formatting creation and evaluation in React. Authoring Content Companion tool development in React.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <h2>2016 - 2017</h2>
                    <h4>Software Engineer</h4>
                    <p>Development, Maintenance and Enhancement of online learning software platform <a href="https://myelt.heinle.com/ilrn/authentication/signIn.do?inst=MYELT">myELT</a>.</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                    <h2>2015 - 2017</h2>
                    <h4>Technology Analyst</h4>
                    <p>Development and Maintenance of Float Analysis Web application tool using HTML5, CSS3, and JavaScript. Development and Maintenance on Operations Support Web Troubleshooting Guide across 30 applications.  Maintenance of HTML5, CSS3 and JavaScript across these web tools incorporating Bootstrap Framework.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <h2>2004 - 2015</h2>
                    <h4>Business Analyst</h4> 
                    <p>Developed operational solutions to support the End to End Systems integration for the Payment &amp; Deposit Operations departments. Developed End to End operational process flows and Business requirements converting paper processes to virtual proceses improving distribution of funds from 3 day average to 12 hours.</p>
                    </div>
                </div>
                </div>
        </Timeline>
    )
}

export default Exp;