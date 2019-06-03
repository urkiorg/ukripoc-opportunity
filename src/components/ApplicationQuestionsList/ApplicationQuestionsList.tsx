import React, { FC, useCallback } from "react";

import Caption from "@govuk-react/caption";
import { Link } from "@reach/router";
import Table from "@govuk-react/table";
import Button from "@govuk-react/button";

import { LinkButton } from "../../theme";
import { UpdateApplicationQuestionInput } from "../../API";

interface Props {
    applicationId: string;
    questions: (UpdateApplicationQuestionInput | null)[] | null;
    addQuestion: (id: string) => void;
    deleteQuestion: (id: string) => void;
}

export const ApplicationQuestionsList: FC<Props> = ({
    questions,
    applicationId,
    addQuestion,
    deleteQuestion
}) => {
    return (
        <>
            <Caption> Application questions </Caption>
            <Table>
                {questions &&
                    questions.map(
                        (question: UpdateApplicationQuestionInput | null) => {
                            if (question !== null) {
                                return (
                                    <Table.Row key={question.id}>
                                        <Table.Cell>
                                            <Link
                                                to={`/component/application/${applicationId}/question/${
                                                    question.id
                                                }`}
                                            >
                                                {question.heading}
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <LinkButton
                                                onClick={() =>
                                                    deleteQuestion(question.id)
                                                }
                                            >
                                                Remove
                                            </LinkButton>
                                        </Table.Cell>
                                        <Table.Cell>
                                            {question.complete
                                                ? "Complete"
                                                : "Incomplete"}
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            }
                        }
                    )}
                <Table.Row>
                    <Table.Cell>
                        <Button onClick={() => addQuestion(applicationId)}>
                            Add question
                        </Button>
                    </Table.Cell>
                </Table.Row>
            </Table>
        </>
    );
};

export default ApplicationQuestionsList;
