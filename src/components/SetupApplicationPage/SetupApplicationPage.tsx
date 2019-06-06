import React, { FC, useCallback } from "react";

import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

import { getApplication } from "../../graphql/queries";

import { RouterProps } from "@reach/router";

import { GetApplicationQuery, UpdateApplicationMutation } from "../../API";

import { SetupApplication } from "../SetupApplication";

import { navigate } from "@reach/router";

import { useMutation } from "react-apollo-hooks";

import {
    updateApplication,
    createApplicationQuestion,
    deleteApplicationQuestion
} from "../../graphql/mutations";

const GET_APPLICATION = gql(getApplication);

const CREATE_APPLICATION_QUESTION = gql(createApplicationQuestion);

const DELETE_APPLICATION_QUESTION = gql(deleteApplicationQuestion);

interface Props extends RouterProps {
    id?: string;
}

export const SetupApplicationPage: FC<Props> = ({ id }) => {
    //GET THE APPLICATION ITSELF
    const { data } = useQuery<GetApplicationQuery>(GET_APPLICATION, {
        variables: {
            id
        },
        fetchPolicy: "cache-and-network"
    });

    //UPDATING APPLICATION
    const UPDATE_APPLICATION = gql(updateApplication);
    const updateApplicationMutation = useMutation<UpdateApplicationMutation>(
        UPDATE_APPLICATION
    );

    const updateApplicationCB = useCallback(
        async (openApplicationDate: string, closeApplicationDate: string) => {
            const result = await updateApplicationMutation({
                variables: {
                    input: {
                        id,
                        closeApplication: closeApplicationDate,
                        openApplication: openApplicationDate
                    }
                }
            });
            const { data } = result;

            const updateApplicationResult: UpdateApplicationMutation = data;

            navigate(
                `/setup/${
                    updateApplicationResult.updateApplication!.opportunity!.id
                }`
            );
        },
        [updateApplicationMutation, id]
    );

    //ADDING A QUESTION TO APPLICATION
    const addApplicationQuestionMutation = useMutation(
        CREATE_APPLICATION_QUESTION
    );

    const addQuestion = useCallback(
        async (id: string) => {
            const result = await addApplicationQuestionMutation({
                variables: {
                    input: {
                        heading: " ",
                        title: " ",
                        subtitle: " ",
                        notes: " ",
                        wordLimit: 500,
                        applicationQuestionApplicationId: id
                    }
                }
            });

            const { data } = result;

            if (data) {
                navigate(
                    `/component/application/${
                        data.createApplicationQuestion.application.id
                    }/question/${data.createApplicationQuestion.id}`
                );
            }
        },
        [addApplicationQuestionMutation]
    );

    //DELETE
    const deleteApplicationQuestionMutation = useMutation(
        DELETE_APPLICATION_QUESTION,
        {
            refetchQueries: [
                {
                    query: GET_APPLICATION,
                    variables: { id }
                }
            ]
        }
    );
    const deleteQuestion = useCallback(
        async (id: string) => {
            const result = await deleteApplicationQuestionMutation({
                variables: {
                    input: { id: id }
                }
            });

            const { data } = result;

            if (data) {
            }
        },
        [deleteApplicationQuestionMutation]
    );

    return (
        <SetupApplication
            application={data}
            updateApplication={updateApplicationCB}
            addQuestion={addQuestion}
            deleteQuestion={deleteQuestion}
        />
    );
};

export default SetupApplicationPage;
