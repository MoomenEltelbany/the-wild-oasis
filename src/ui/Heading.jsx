import styled, { css } from "styled-components";

const Heading = styled.h1`
    ${(props) =>
        props.as === "h1" &&
        css`
            font-size: 50px;
            font-weight: 700;
            /* color: aqua; */
        `}

    ${(props) =>
        props.as === "h2" &&
        css`
            font-size: 30px;
            font-weight: 500;
            color: orangered;
        `}

        ${(props) =>
        props.as === "h3" &&
        css`
            font-size: 15px;
            font-weight: 200;
            color: purple;
        `}
`;

export default Heading;
