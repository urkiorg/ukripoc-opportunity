import styled from "styled-components";
import { H1 } from "@govuk-react/heading";

export const ukriGreen = "rgba(0, 130, 118, 1)";

export const Title = styled(H1)`
    color: ${ukriGreen};
`;

export const SettingsListItem = styled.div`
    width: 100%;
    height: 60px;
    background-color: #d7d7d7;
    line-height: 60px;
    padding: 0 15px;
    margin-bottom: 30px;
`;

export const FauxLink = styled.button`
    text-decoration: underline;
    background-color: inherit;
    border: none;
    font-size: 14px;
    color: blue;
`;
