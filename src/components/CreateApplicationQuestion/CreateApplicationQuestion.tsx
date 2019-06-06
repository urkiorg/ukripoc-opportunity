import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import { createApplicationQuestion } from "../../graphql/mutations";
import { navigate, RouterProps } from "@reach/router";

const CREATE_APPLICATION_QUESTION = gql(createApplicationQuestion);

interface Props extends RouterProps {
    id?: string;
}

export const CreateApplicationQuestion: FC<Props> = (props: Props) => {
    const addApplicationQuestionMutation = useMutation(
        CREATE_APPLICATION_QUESTION
    );

    const payLoad = {
        heading: "",
        title: "",
        subtitle: "",
        notes: "",
        wordLimit: 500,
        applicationQuestionApplicationId: props.id
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
