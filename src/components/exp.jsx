import styled from "@emotion/styled";
import ProgressBar from "./progressBar";

const Timeline = styled.main`
    padding-top: 125px;
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

const Exp = () => {
    return (
        <Timeline id="experience">
            <div className="progressbars">
                <ProgressBar icon={'HTML'} percentage={90}/>
                <ProgressBar title={'CSS'} percentage={80}/>
                <ProgressBar title={'JS'} percentage={90}/>
                <ProgressBar title={'TS'} percentage={70}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'React'} percentage={90}/>
                <ProgressBar title={'NextJS'} percentage={50}/>
                <ProgressBar title={'SB'} percentage={70}/>
                <ProgressBar title={'WP'} percentage={40}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'Java'} percentage={60}/>
                <ProgressBar title={'Ruby'} percentage={20}/>
                <ProgressBar title={'Python'} percentage={20}/>
            </div>
            <div className="progressbars">
                <ProgressBar title={'RN'} percentage={50}/>
                <ProgressBar title={'IOS'} percentage={20}/>
                <ProgressBar title={'Android'} percentage={40}/>
            </div>
        </Timeline>
    )
}

export default Exp;