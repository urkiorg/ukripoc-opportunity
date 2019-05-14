import React, { FC, HTMLAttributes } from "react";
import cx from "classnames";

import Checkbox from "@govuk-react/checkbox";
import Button from "@govuk-react/button";

import { GetOpportunityQuery } from "../../API";

interface Props {
    funders: any;
    opportunity: GetOpportunityQuery;
}

function checkBoxMapping(
    funder: any,
    opportunity: GetOpportunityQuery,
    i: String
) {
    console.log(opportunity.getOpportunity!.funders!.items);

    // const isChecked = opportunity.getOpportunity!.funders!.items!.find(
    //     funder.name
    // );

    // console.log(isChecked);

    return <Checkbox key={i}>{funder.name}</Checkbox>;
}

function fundersList(funders: any, opportunity: GetOpportunityQuery) {
    return funders.map((funder: any, i: String) =>
        checkBoxMapping(funder, opportunity, i)
    );
}

function save(opportunity: GetOpportunityQuery) {
    console.log(opportunity);
    console.log("SAVE IT!");
}

export const SetupFunders: FC<Props> = ({ funders, opportunity }) => {
    return (
        <div>
            <h1> Funders </h1>
            {fundersList(funders, opportunity)}
            <Button onClick={() => save(opportunity)}> Done </Button>
        </div>
    );
};

export default SetupFunders;
