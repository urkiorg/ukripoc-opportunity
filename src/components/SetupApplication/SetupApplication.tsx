import React, {
    FC,
    HTMLAttributes,
    useCallback,
    useState,
    SyntheticEvent
} from "react";

import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import Checkbox from "@govuk-react/checkbox";
import Button from "@govuk-react/button";
import Details from "@govuk-react/details";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import InputField from "@govuk-react/input-field";

import DateField from "@govuk-react/date-field";

import { GetApplicationQuery } from "../../API";
import { Title, ukriGreen } from "../../theme";

import SetupApplicationForm from "./SetupApplicationForm";

interface Funder {
    name: string;
}
interface Props {
    application?: GetApplicationQuery;
}

export const SetupApplication: FC<Props> = ({ application }) => {
    if (!application) {
        return <div> No </div>;
    }

    const opportunityName =
        application.getApplication && application.getApplication.opportunity
            ? application.getApplication.opportunity.name
            : "";

    const opportunityId =
        application.getApplication && application.getApplication.opportunity
            ? application.getApplication.opportunity.id
            : "";

    const linkBack = `/setup/${opportunityId}`;

    const breadcrumbs = (
        <Breadcrumbs>
            <Breadcrumbs.Link href={linkBack}>
                Opportunity setup
            </Breadcrumbs.Link>
            Website listing
        </Breadcrumbs>
    );

    return (
        <div>
            <Caption mb={1}>{opportunityName}</Caption>
            <Title>Application</Title>
            <Details summary="About this workflow component">
                The application component allows you to view and manage
                applications that are submitted for your opportunity. Using the
                settings below you can build and customise the application form
                and also define parameters for application review.
            </Details>
            <Caption mb={8}>Application settings</Caption>

            <SetupApplicationForm application={application} />
        </div>
    );
};

export default SetupApplication;
