import styled from "@emotion/styled"
import { FC } from "react";

const Progress = styled.div`
    position: relative;
    width: 170px;
    height: 170px;
    margin: 1em;
    text-shadow: 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .circularProgressbar-text {
        box-shadow: 0 0 10px;
        transition: 3s ease;
        padding: 5px 0;
        color: #d6d6d6;
    }
`;

interface progressProps {
    strokeWidth?: number;
    title: string;
    percentage: number;
}

const ProgressBar: FC<progressProps> = ({strokeWidth = 5, title, percentage }) => {
    const radius = (50 - strokeWidth / 2);
    const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;
    const diameter = Math.PI * 2 * radius;
    const progressStyle: {} = {
        stroke: '#18cae6',
        strokeLinecap: 'round',
        strokeDasharray: `${diameter}px ${diameter}px`,
        strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
    };

    return (
        <Progress>
            <svg
                className={'CircularProgressbar'}
                viewBox="0 0 100 100"
				width={110}
				height={110}
            >
                <path
                    className="CircularProgressbar-trail"
                    d={pathDescription}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
					style={{
						stroke: '#4d4d4e',
					}}
                />

                <path
                    className="CircularProgressbar-path"
                    d={pathDescription}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
                    style={progressStyle}
                />
                
            </svg>    
            <text
                className="CircularProgressbar-text"
                x={50}
                y={50}
                style={{
                    color: '#d6d6d6',
                    fontSize: '20px',
                    dominantBaseline: 'central',
                    textAnchor: 'middle',
                }}
            >{title}</text> 
        </Progress>
    )
}

export default ProgressBar;