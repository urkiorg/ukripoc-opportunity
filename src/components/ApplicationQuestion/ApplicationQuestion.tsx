import React, { FC, useCallback, SyntheticEvent, useState } from "react";

import Button from "@govuk-react/button";
import TextArea from "@govuk-react/text-area";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import InputField from "@govuk-react/input-field";

import { ukriGreen, Title } from "../../theme";

import { GetApplicationQuestionQuery } from "../../API";

interface Props {
    updateApplicationQuestion: (response: any) => void;
    question?: GetApplicationQuestionQuery;
}

export const ApplicationQuestion: FC<Props> = ({
    updateApplicationQuestion,
    question
}) => {
    const [values, setValues] = useState({
        heading: "",
        title: "",
        subtitle: "",
        notes: "",
        wordLimit: "500"
    });

    if (!question || !question.getApplicationQuestion) {
        return <Title>Not found</Title>;
    }

    const onChange = (name: any) => {
        if (name.currentTarget.name === "wordLimit") {
            setValues({
                ...values,
                [name.currentTarget.name]: parseInt(name.currentTarget.value)
            });
        } else {
            setValues({
                ...values,
                [name.currentTarget.name]: name.currentTarget.value
            });
        }
    };

    const applicationId = question.getApplicationQuestion.application!.id;
    const opportunityId = question.getApplicationQuestion.application!
        .opportunity!.id;

    const linkBack = `/component/application/${applicationId}`;
    const linkBackOpportunity = `/setup/${opportunityId}`;

    const breadcrumbs = (
        <Breadcrumbs>
            <Breadcrumbs.Link href={linkBackOpportunity}>
                Opportunity setup
            </Breadcrumbs.Link>
            <Breadcrumbs.Link href={linkBack}>Application</Breadcrumbs.Link>
            Website listing
        </Breadcrumbs>
    );

    const handleSubmit = (e: any) => {
        e.preventDefault();
        updateApplicationQuestion(values);
        return false;
    };

    return (
        <div>
            {breadcrumbs}
            <Title mb={2}>Question: {values.heading} </Title>
            <Caption mb={8}> Application question </Caption>
            <form onSubmit={handleSubmit}>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "heading"
                    }}
                >
                    Question heading
                </InputField>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "title"
                    }}
                >
                    Question title
                </InputField>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "subtitle"
                    }}
                >
                    Question subtitle
                </InputField>
                <TextArea
                    mb={6}
                    name="notes"
                    input={{
                        onChange: onChange,
                        name: "notes"
                    }}
                >
                    Guidance notes for applicant
                </TextArea>

                <InputField
                    mb={8}
                    input={{
                        onChange: onChange,
                        name: "wordLimit"
                    }}
                >
                    Word limit
                </InputField>
                <Button buttonColour={ukriGreen}>Save</Button>
            </form>
        </div>
    );
};

export default ApplicationQuestion;
