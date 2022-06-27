import styled from "@emotion/styled";
import { faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { FC } from "react";
import ProgressBar from "./progressBar";

const Timeline = styled.main`
    width: 100vw;

    h1 {
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
            <div className="progressbars">
                <ProgressBar title={'HTML5'} percentage={90} />
                <ProgressBar title={'CSS3'} percentage={80} />
                <ProgressBar title={'JavaScript'} percentage={90} />
                <ProgressBar title={'TypeScript'} percentage={70} />
            </div>
            <div className="progressbars">
                <ProgressBar title={'React'} percentage={90}/>
                <ProgressBar title={'NextJS'} percentage={50}/>
                <ProgressBar title={'Storybook'} percentage={70}/>
                <ProgressBar title={'Wordpress'} percentage={40}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'Java'} percentage={60}/>
                <ProgressBar title={'Ruby'} percentage={20}/>
                <ProgressBar title={'Python'} percentage={20}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'React Native'} percentage={50}/>
                <ProgressBar title={'IOS (Swift)'} percentage={20}/>
                <ProgressBar title={'Android (Java, Kotlin)'} percentage={40}/>
            </div>
        </Timeline>
    )
}

export default Exp;