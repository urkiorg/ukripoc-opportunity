import React, { FC, HTMLAttributes, useCallback, useState } from "react";
import cx from "classnames";

import Checkbox from "@govuk-react/checkbox";
import Button from "@govuk-react/button";

import { GetOpportunityQuery, UpdateOpportunityMutation } from "../../API";

interface Props {
    funders: any;
    opportunityLoaded: any;
    updateOpportunity: any;
    // opportunityLoaded: GetOpportunityQuery;
    // updateOpportunity: (opportunity: string) => void;
}

export const SetupFunders: FC<Props> = ({
    funders,
    updateOpportunity,
    opportunityLoaded
}) => {
    const [opportunity, setOpportunity] = useState([]);

    function checkBoxMapping(funder: any, i: String) {
        const funderName = funder.name;
        return (
            <Checkbox key={i} onClick={() => setOpportunity(funderName)}>
                {funder.name}
            </Checkbox>
        );
    }

    function fundersList(funders: any) {
        return funders.map((funder: any, i: String) =>
            checkBoxMapping(funder, i)
        );
    }

    const save = useCallback(() => {
        console.log(opportunity);
        const newOpportunity = updateOpportunity(opportunity);
    }, [opportunity, updateOpportunity]);

    return (
        <div>
            <h1> Funders </h1>
            {fundersList(funders)}
            <Button onClick={() => save()}> Done </Button>
        </div>
    );
};

export default SetupFunders;
