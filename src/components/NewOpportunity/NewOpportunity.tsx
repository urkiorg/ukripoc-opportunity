import React, { FC, useState, useCallback } from "react";
import styles from "./NewOpportunity.module.scss";
import Button from "@govuk-react/button";
import { H2, H4 } from "@govuk-react/heading";
import HintText from "@govuk-react/hint-text";
import Details from "@govuk-react/details";
import Input from "@govuk-react/input";
import { ukriGreen } from "../../theme";

interface Props {
    addOpportunity: (name: string) => void;
}

export const NewOpportunity: FC<Props> = ({ addOpportunity }) => {
    const [opportunityName, setOpportunityName] = useState("");

    const onInputChange = useCallback(
        event => setOpportunityName(event.currentTarget.value),
        []
    );

    const onButtonClick = useCallback(() => {
        addOpportunity(opportunityName);
        setOpportunityName("");
    }, [opportunityName, addOpportunity]);

    return (
        <div className={styles.wrap}>
            <H2 textColour={ukriGreen}>New opportunity</H2>
            <H4>Opportunity name</H4>
            <HintText>
                This name will be used to identify the opportunity internally
                and publicly.
            </HintText>
            <Details summary="How should I name my opportunity?">
                Give your opportunity a name that will help potential applicants
                understand what the opportunity is about. You don't need to add
                tags (such as the year) into opportunity names. Opportunities
                will be tagged automatically based on other information you
                input.
            </Details>

            <Input value={opportunityName} onChange={onInputChange} mb={7} />

            <Button buttonColour={ukriGreen} onClick={onButtonClick}>
                Create opportunity
            </Button>
        </div>
    );
};

export default NewOpportunity;
