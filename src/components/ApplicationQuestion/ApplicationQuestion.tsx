import React, { FC, useState, SyntheticEvent, useCallback } from "react";

import Button from "@govuk-react/button";
import TextArea from "@govuk-react/text-area";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import InputField from "@govuk-react/input-field";
import Checkbox from "@govuk-react/checkbox";

import { ukriGreen, Title } from "../../theme";
import { ApplicationQuestionType } from "../../types";

import { GetApplicationQuestionQuery } from "../../API";

interface Props {
    updateApplicationQuestion: (response: ApplicationQuestionType) => void;
    question?: GetApplicationQuestionQuery;
}

export const ApplicationQuestion: FC<Props> = ({
    updateApplicationQuestion,
    question
}) => {
    const defaultState = {
        heading: "",
        title: "",
        subtitle: "",
        notes: "",
        wordLimit: 500,
        complete: false
    };

    const [values, setValues] = useState(
        (question && question.getApplicationQuestion) || defaultState
    );

    const handleSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            updateApplicationQuestion(values);
            return false;
        },
        [updateApplicationQuestion, values]
    );

    if (!question || !question.getApplicationQuestion) {
        return <Title>Loading...</Title>;
    }

    const onChecked = (event: SyntheticEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.currentTarget.name]: event.currentTarget.checked
        });
    };

    const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.currentTarget.name]: event.currentTarget.value
        });
    };

    const applicationId =
        question.getApplicationQuestion.application &&
        question.getApplicationQuestion.application.id;

    const opportunityId =
        question.getApplicationQuestion &&
        question.getApplicationQuestion.application &&
        question.getApplicationQuestion.application.opportunity &&
        question.getApplicationQuestion.application.opportunity.id;

    return (
        <div>
            <Breadcrumbs>
                <Breadcrumbs.Link href={`/setup/${opportunityId}`}>
                    Opportunity setup
                </Breadcrumbs.Link>
                <Breadcrumbs.Link
                    href={`/component/application/${applicationId}`}
                >
                    Application
                </Breadcrumbs.Link>
                {values.heading}
            </Breadcrumbs>
            <Title mb={2}>Question: {values.heading} </Title>
            <Caption mb={8}> Application question </Caption>
            <form onSubmit={handleSubmit}>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "heading",
                        value: values.heading,
                        style: { width: "66%" },
                        required: true
                    }}
                >
                    Question heading
                </InputField>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "title",
                        value: values.title,
                        required: true
                    }}
                >
                    Question title
                </InputField>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "subtitle",
                        value: values.subtitle,
                        required: true
                    }}
                >
                    Question subtitle
                </InputField>
                <TextArea
                    mb={6}
                    name="notes"
                    input={{
                        onChange: onChange,
                        name: "notes",
                        value: values.notes,
                        style: { width: "100%" },
                        required: true
                    }}
                >
                    Guidance notes for applicant
                </TextArea>

                <InputField
                    mb={5}
                    input={{
                        onChange: onChange,
                        name: "wordLimit",
                        value: values.wordLimit,
                        style: { width: "33%" },
                        required: true,
                        type: "number"
                    }}
                >
                    Word limit
                </InputField>

                <Checkbox
                    name="complete"
                    defaultChecked={values.complete}
                    onChange={onChecked}
                >
                    Complete
                </Checkbox>

                <Button buttonColour={ukriGreen}>Save</Button>
            </form>
        </div>
    );
};

export default ApplicationQuestion;
