import styled from "styled-components";

export const Article = styled.article`
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    padding: 121px 0px 80px;
`;

export const TextBlock = styled.div`
    margin: 10px 0;
    font-size: clamp(1.55em, 1.7vw, 2em);
    line-height: 1.45;
    text-align: left;
    max-width: 40vw;

    &:last-child {
        font-size: clamp(0.7em, 0.95vw, 1.25em);
        max-width: 17vw;
    }
`;
