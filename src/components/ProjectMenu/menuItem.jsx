import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HexContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;

    transform: translate(-50%, -50%) rotate(90deg);

    color: #18cae6;
`;

export default function MenutItem ({icon, size = "xl", title}) {
    return (
        <HexContent className="hex-content">
            <FontAwesomeIcon icon={icon} size={size} />
            <p>{title}</p>
        </HexContent>
    )
}