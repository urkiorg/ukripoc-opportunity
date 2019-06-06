import React, { FC } from "react";

import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import Details from "@govuk-react/details";

import { GetApplicationQuery } from "../../API";

import { Title } from "../../theme";

import SetupApplicationForm from "./SetupApplicationForm";
import { ApplicationQuestionsList } from "../ApplicationQuestionsList";

interface Props {
    application?: GetApplicationQuery;
    updateApplication: (openDate: string, closeDate: string) => void;
    addQuestion: (id: string) => void;
    deleteQuestion: (id: string) => void;
}

export const SetupApplication: FC<Props> = ({
    application,
    updateApplication,
    addQuestion,
    deleteQuestion
}) => {
    if (!application || !application.getApplication) {
        return <div> Loading </div>;
    }

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

    const applicationQuestions =
        application &&
        application.getApplication &&
        application.getApplication.applicationQuestions &&
        application.getApplication.applicationQuestions.items;

    const applicationId = application.getApplication.id;

    return (
        <>
            <Breadcrumbs>
                <Breadcrumbs.Link href={`/setup/${opportunityId}`}>
                    Opportunity setup
                </Breadcrumbs.Link>
                Application
            </Breadcrumbs>
            <Caption mb={1}>{opportunityName}</Caption>
            <Title>Application</Title>
            <Details summary="About this workflow component">
                The application component allows you to view and manage
                applications that are submitted for your opportunity. Using the
                settings below you can build and customise the application form
                and also define parameters for application review.
            </Details>
            <Caption mb={8}>Application settings</Caption>

            {application && (
                <SetupApplicationForm
                    application={application}
                    updateApplication={updateApplication}
                />
            )}

            {application && (
                <ApplicationQuestionsList
                    questions={applicationQuestions}
                    applicationId={applicationId}
                    addQuestion={addQuestion}
                    deleteQuestion={deleteQuestion}
                />
            )}
        </>
    );
};

export default SetupApplication;
