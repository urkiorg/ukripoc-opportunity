import React, { FC } from "react";

import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import Details from "@govuk-react/details";

import { GetApplicationQuery } from "../../API";
import { Title } from "../../theme";

import SetupApplicationForm from "./SetupApplicationForm";

interface Funder {
    name: string;
}
interface Props {
    application?: GetApplicationQuery;
}

export const SetupApplication: FC<Props> = ({ application }) => {
    const opportunityName =
        application &&
        application.getApplication &&
        application.getApplication.opportunity
            ? application.getApplication.opportunity.name
            : "";

    const opportunityId =
        application &&
        application.getApplication &&
        application.getApplication.opportunity
            ? application.getApplication.opportunity.id
            : "";

    const linkBack = `/setup/${opportunityId}`;

    const breadcrumbs = (
        <Breadcrumbs>
            <Breadcrumbs.Link href={linkBack}>
                Opportunity setup
            </Breadcrumbs.Link>
            Application
        </Breadcrumbs>
    );

    return (
        <div>
            {breadcrumbs}
            <Caption mb={1}>{opportunityName}</Caption>
            <Title>Application</Title>
            <Details summary="About this workflow component">
                The application component allows you to view and manage
                applications that are submitted for your opportunity. Using the
                settings below you can build and customise the application form
                and also define parameters for application review.
            </Details>
            <Caption mb={8}>Application settings</Caption>

            {application && <SetupApplicationForm application={application} />}
        </div>
    );
};

export default SetupApplication;
