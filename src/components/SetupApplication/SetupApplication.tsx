import React, { FC, HTMLAttributes } from "react";
import { GetOpportunityQuery } from "../../API";

interface Props {
    application: string;
    currentOpportunity: GetOpportunityQuery;
    applicationChanged: (funder: string[]) => void;
}

export const SetupApplication: FC<Props> = ({ ...props }) => (
    <div {...props}>{props.children}</div>
);

export default SetupApplication;
