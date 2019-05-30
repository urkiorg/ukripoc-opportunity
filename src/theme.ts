import styled from "styled-components";
import { H1 } from "@govuk-react/heading";
import { NTA_LIGHT } from "@govuk-react/constants";

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

export const LinkButton = styled.button`
    font-family: ${NTA_LIGHT};
    text-decoration: underline;
    background-color: inherit;
    border: none;
    font-size: 20px;
    color: #005ea5;
    line-height: 35px;
`;

interface DateInputProps {
    time?: string;
}

export const DateInput = styled.input`
    margin-left: ${(props: DateInputProps) => (props.time ? "40px" : "0px")}
    max-width: 7.4ex;
    width: 100%;
    height: 40px;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #0b0c0c;
    border-radius: 0;
    -webkit-appearance: none;
    margin-right: 10px;
    font-family: ${NTA_LIGHT};
    font-size: 16px;
    line-height: 1.25;

`;

export const InputErrorText = styled.span`
    font-family: ${NTA_LIGHT};
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    display: block;
    margin-bottom: 15px;
    clear: both;
    color: rgb(177, 14, 30);
`;
