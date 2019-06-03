import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo-hooks";
import { updateApplicationQuestion } from "../../graphql/mutations";

import { navigate, RouterProps } from "@reach/router";
import { getApplicationQuestion } from "../../graphql/queries";
import { UpdateApplicationQuestionInput } from "../../API";

import { ApplicationQuestion } from "../ApplicationQuestion";
import { ApplicationQuestionType } from "../../types";

const UPDATE_APPLICATION_QUESTION = gql(updateApplicationQuestion);

const GET_APPLICATION_QUESTION = gql(getApplicationQuestion);

interface Props extends RouterProps {
    id?: string;
}

export const ApplicationQuestionPage: FC<Props> = (props: Props) => {
    const updateApplicationQuestion = useMutation(UPDATE_APPLICATION_QUESTION);

    const { data } = useQuery(GET_APPLICATION_QUESTION, {
        variables: {
            id: props.id
        },
        fetchPolicy: "cache-and-network"
    });

    const updateQuestion = useCallback(
        async (description: ApplicationQuestionType) => {
            const result = await updateApplicationQuestion({
                variables: {
                    input: {
                        id: props.id,
                        heading: description.heading,
                        title: description.title,
                        subtitle: description.subtitle,
                        notes: description.notes,
                        wordLimit: description.wordLimit,
                        complete: description.complete
                    }
                }
            });

            const { data } = result;

            if (data) {
                navigate(
                    `/component/application/${
                        data.updateApplicationQuestion.application.id
                    }`
                );
            }
        },
        [updateApplicationQuestion, props.id]
    );

    return (
        <ApplicationQuestion
            question={data}
            updateApplicationQuestion={updateQuestion}
        />
    );
};

export default ApplicationQuestionPage;
