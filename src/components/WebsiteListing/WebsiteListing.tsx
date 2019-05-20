import React, { FC, useState, useCallback } from "react";
import styles from "./WebsiteListing.module.scss";
import Button from "@govuk-react/button";

import { H2, H4 } from "@govuk-react/heading";
import HintText from "@govuk-react/hint-text";
import Details from "@govuk-react/details";
import Input from "@govuk-react/input";
import TextArea from "@govuk-react/text-area";

import { ukriGreen } from "../../theme";
import { navigate } from "@reach/router";
import { GetOpportunityQuery } from "../../API";

interface Props {
    addWebsiteListing: (name: string) => void;
    opportunity: GetOpportunityQuery;
}

export const WebsiteListing: FC<Props> = ({
    addWebsiteListing,
    opportunity
}) => {
    //
    let opportunityName = "some text";

    console.log(opportunity);

    const onButtonClick = useCallback(() => {
        opportunityName = "just set";
        const newOpportunity = addWebsiteListing(opportunityName);
    }, [addWebsiteListing]);

    return (
        <div className={styles.wrap}>
            <H4>Opportunity name</H4>
            <H2 textColour={ukriGreen}>Website listing</H2>

            <Details summary="About this workflow component">
                The public website component allows you to define the
                opportunity details that are visible to optential applicants via
                the UKRI website. Only information defined within this component
                will be published. If you have added an application component,
                open and close dates will be published.
            </Details>

            <p>Open date: Unavailable (set in the Application component)</p>
            <p>Close date: Unavailable (set in the Application component)</p>

            <b> High level summary </b>
            <TextArea
                name="High level summary"
                value={opportunityName}
                mb={7}
                mt={4}
            />

            <Button buttonColour={ukriGreen} onClick={onButtonClick}>
                Publish
            </Button>
        </div>
    );
};

export default WebsiteListing;
