import React, { SyntheticEvent, useCallback, FC } from "react";
import { useFormState } from "react-use-form-state";
import { useMutation } from "react-apollo-hooks";

import { gql } from "apollo-boost";

import { updateApplication } from "../../graphql/mutations";

import { navigate } from "@reach/router";
import { UpdateApplicationMutation, GetApplicationQuery } from "../../API";
import { GetApplicationOutput } from "aws-sdk/clients/codedeploy";
import { Title } from "../../theme";

import Button from "@govuk-react/button";

interface Props {
    application: GetApplicationQuery;
}

interface ApplicationFormType {
    openYear: string;
    openMonth: string;
    openDay: string;
    openHour: string;
    openMinute: string;
    closeYear: string;
    closeMonth: string;
    closeDay: string;
    closeHour: string;
    closeMinute: string;
}

export const SetupApplicationForm: FC<Props> = ({ application }) => {
    let initialState = {};

    if (application.getApplication) {
        const openApplication =
            application.getApplication.openApplication || "";
        const closeApplication =
            application.getApplication.closeApplication || "";

        var openDate = new Date(openApplication);

        console.log({ openApplication, openDate });

        var closeDate = new Date(closeApplication);

        initialState = {
            openYear: openDate.getFullYear() || "",
            openMonth: openDate.getMonth() + 1 || "",
            openDay: openDate.getDate() || "",
            openHour: openDate.getHours() || "",
            openMinute: openDate.getMinutes() || "",

            closeYear: closeDate.getFullYear() || "",
            closeMonth: closeDate.getMonth() + 1 || "",
            closeDay: closeDate.getDate() || "",
            closeHour: closeDate.getHours() || "",
            closeMinute: closeDate.getMinutes() || ""
        };
    }

    const [formState, input] = useFormState<ApplicationFormType>(initialState);

    const UPDATE_APPLICATION = gql(updateApplication);

    const updateApplicationMutation = useMutation<UpdateApplicationMutation>(
        UPDATE_APPLICATION
    );

    const updateApplicationCB = useCallback(
        async (openApplicationDate: string, closeApplicationDate: string) => {
            console.log(openApplicationDate, closeApplicationDate);
            const result = await updateApplicationMutation({
                variables: {
                    input: {
                        id: application.getApplication!.id,
                        closeApplication: closeApplicationDate,
                        openApplication: openApplicationDate
                    }
                }
            });
            const { data, loading, error } = result;

            console.log(data);

            const updateApplicationResult: UpdateApplicationMutation = data;

            navigate(
                `/setup/${
                    updateApplicationResult.updateApplication!.opportunity!.id
                }`
            );
        },
        [updateApplicationMutation]
    );

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const stringedOpenDate = `${formState.values.openDay} ${
            formState.values.openMonth
        } ${formState.values.openYear} ${formState.values.openHour}:${
            formState.values.openMinute
        }`;

        const openDate = new Date(stringedOpenDate).toISOString();

        const stringedCloseDate = `${parseInt(
            formState.values.closeDay
        )} ${parseInt(formState.values.closeMonth)} ${parseInt(
            formState.values.closeYear
        )} ${parseInt(formState.values.closeHour)}:${parseInt(
            formState.values.closeMinute
        )}`;

        const closeDate = new Date(stringedCloseDate).toISOString();

        updateApplicationCB(openDate, closeDate);
    }

    function validateDay(value: string) {
        console.log("the value is: ", value);

        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 31) {
            console.log("Failed validation", intValue);
            return false;
        } else {
            console.log("PASSED!");
        }
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <b> Open </b> <br />
            <br />
            <input {...input.number("openYear")} required placeholder="YYYY" />
            <br />
            <input {...input.number("openMonth")} required placeholder="MM" />
            <br />
            <input
                {...input.number({
                    name: "openDay",
                    validate: (value: string) => validateDay(value),
                    validateOnBlur: true
                })}
                placeholder="DD"
                required
            />
            <br />
            <input {...input.number("openHour")} required placeholder="HH" />
            <br />
            <input {...input.number("openMinute")} required placeholder="MM" />
            <br />
            <b> Close </b>
            <br />
            <input {...input.number("closeYear")} required placeholder="YYYY" />
            <br />
            <input {...input.number("closeMonth")} required placeholder="MM" />
            <br />
            <input
                {...input.number({
                    name: "closeDay",
                    validate: (value: string) => validateDay(value),
                    validateOnBlur: true
                })}
                placeholder="DD"
                required
            />
            <br />
            <input {...input.number("closeHour")} required placeholder="HH" />
            <br />
            <input {...input.number("closeMinute")} required placeholder="MM" />
            <br />
            <Button type="submit"> Save </Button>
        </form>
    );
};

export default SetupApplicationForm;
