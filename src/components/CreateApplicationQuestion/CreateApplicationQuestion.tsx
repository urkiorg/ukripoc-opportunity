import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import { createApplicationQuestion } from "../../graphql/mutations";
import { navigate } from "@reach/router";

const CREATE_APPLICATION_QUESTION = gql(createApplicationQuestion);

export const CreateApplicationQuestion: FC = () => {
    const addApplicationQuestionMutation = useMutation(
        CREATE_APPLICATION_QUESTION
    );

    const payLoad = {
        heading: " ",
        title: " ",
        subtitle: " ",
        notes: " ",
        wordLimit: 500,
        applicationQuestionApplicationId: "b762afaa-7625-4c22-9d14-e1ca501b8cf0"
    };
    const addQuestion = useCallback(
        async (name: string) => {
            const result = await addApplicationQuestionMutation({
                variables: {
                    input: payLoad
                }
            });

            const { data, loading, error } = result;

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

    return <button onClick={() => addQuestion("somethign")} />;
};

export default CreateApplicationQuestion;
