import styled from "@emotion/styled";
import { FC } from "react";
import ProgressBar from "./progressBar";

const Timeline = styled.main`
    width: 100vw;

    h1, h3 {
        text-align: center;
        color: #18cae6;
    }

    .progressbars {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Exp: FC = () => {
    return (
        <Timeline id="experience">
            <h3>Front End Languages</h3>
            <div className="progressbars">
                <ProgressBar title={'HTML5'} percentage={90} />
                <ProgressBar title={'CSS3'} percentage={80} />
            </div>
            <div className="progressbars">
                <ProgressBar title={'JavaScript'} percentage={90} />
                <ProgressBar title={'TypeScript'} percentage={70} />
            </div>
            <h3>Front End Libraries and Frameworks</h3>
            <div className="progressbars">
                <ProgressBar title={'React'} percentage={90}/>
                <ProgressBar title={'NextJS'} percentage={50}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'Storybook'} percentage={70}/>
                <ProgressBar title={'Wordpress'} percentage={40}/>
            </div>
            <h3>Additional Programming languages</h3>
            <div className="progressbars">
                <ProgressBar title={'Java'} percentage={60}/>
                <ProgressBar title={'Ruby'} percentage={20}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'Python'} percentage={20}/>
            </div>
            <h3>Mobile</h3>
            <div className="progressbars">
                <ProgressBar title={'React Native'} percentage={50}/>
                <ProgressBar title={'IOS (Swift)'} percentage={20}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'Android (Java, Kotlin)'} percentage={40}/>
            </div>
        </Timeline>
    )
}

export default Exp;