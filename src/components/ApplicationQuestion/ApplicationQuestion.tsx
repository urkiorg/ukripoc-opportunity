import React, { FC, useState } from "react";

import Button from "@govuk-react/button";
import TextArea from "@govuk-react/text-area";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import InputField from "@govuk-react/input-field";

import { ukriGreen, Title } from "../../theme";

import {
    GetApplicationQuestionQuery,
    CreateApplicationQuestionInput
} from "../../API";

const defaultState: CreateApplicationQuestionInput = {
    heading: "",
    title: "",
    subtitle: "",
    notes: "",
    wordLimit: 500
};

interface Props {
    updateApplicationQuestion: (response: any) => void;
    question?: GetApplicationQuestionQuery;
}

export const ApplicationQuestion: FC<Props> = ({
    updateApplicationQuestion,
    question
}) => {
    const applicationQuestion =
        question && question.getApplicationQuestion
            ? question.getApplicationQuestion
            : defaultState;

    const [values, setValues] = useState({
        heading: applicationQuestion.heading,
        title: applicationQuestion.title,
        subtitle: applicationQuestion.subtitle,
        notes: applicationQuestion.notes,
        wordLimit: applicationQuestion.wordLimit
    });

    if (!question || !question.getApplicationQuestion) {
        return <Title>Loading...</Title>;
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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        updateApplicationQuestion(values);
        return false;
    };

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
                        value: values.heading
                    }}
                >
                    Question heading
                </InputField>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "title",
                        value: values.title
                    }}
                >
                    Question title
                </InputField>
                <InputField
                    mb={6}
                    input={{
                        onChange: onChange,
                        name: "subtitle",
                        value: values.subtitle
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
                        value: values.notes
                    }}
                >
                    Guidance notes for applicant
                </TextArea>

                <InputField
                    mb={8}
                    input={{
                        onChange: onChange,
                        name: "wordLimit",
                        value: values.wordLimit
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
