import React, { SyntheticEvent, useCallback, FC } from "react";
import { useFormState } from "react-use-form-state";
import { useMutation } from "react-apollo-hooks";

import { gql } from "apollo-boost";

import { updateApplication } from "../../graphql/mutations";

import { navigate } from "@reach/router";
import { UpdateApplicationMutation, GetApplicationQuery } from "../../API";
import { GetApplicationOutput } from "aws-sdk/clients/codedeploy";
import { Title, DateInput } from "../../theme";
import InputField from "@govuk-react/input-field";

import ErrorSummary from "@govuk-react/error-summary";
import FormGroup from "@govuk-react/form-group";
import Button from "@govuk-react/button";
import { H5 } from "@govuk-react/heading";
import Caption from "@govuk-react/caption";
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

        const openDate = new Date(openApplication);
        const closeDate = new Date(closeApplication);

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

    const [formState, { text, number }] = useFormState(initialState);

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

    const isValidForm: boolean = Object.keys(formState.errors).length
        ? false
        : true;

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

        if (openDate > closeDate) {
            return false;
        }

        updateApplicationCB(openDate, closeDate);
    }

    function checkOpenAndCloseDates(value: string, values: string[]) {
        console.log(values, value);
    }

    function validateDay(value: string) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 31) {
            return "Incorrect";
        }
    }

    function validateYear(value: string) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 2040 || intValue < 2019) {
            return "Incorrect";
        }
    }

    function validateMonth(value: string) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 12) {
            return "Incorrect";
        }
    }

    function validateHour(value: string) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 23) {
            return "Incorrect";
        }
    }

    function validateMinute(value: string, values: string[]) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 59) {
            return "Incorrect";
        }
        checkOpenAndCloseDates(value, values);
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            {!isValidForm
                ? // <ErrorSummary
                  //     heading={"There is a problem"}
                  //     description={
                  //         "The dates you have entered do not seem correct..."
                  //     }
                  // />
                  ""
                : ""}

            <H5 mb={1}> Open application </H5>
            <Caption size="M">Date</Caption>
            <FormGroup error={!isValidForm}>
                <DateInput
                    {...text({
                        name: "openDay",
                        validate: (value: string) => validateDay(value),
                        validateOnBlur: false
                    })}
                    placeholder="DD"
                />
                <DateInput
                    {...text({
                        name: "openMonth",
                        validate: validateMonth,
                        validateOnBlur: false
                    })}
                    placeholder="MM"
                />
                <DateInput
                    {...text({
                        name: "openYear",
                        validate: (value: string) => validateYear(value),
                        validateOnBlur: false
                    })}
                    placeholder="YYYY"
                />
                <DateInput
                    time="true"
                    {...text({
                        name: "openHour",
                        validate: (value: string) => validateHour(value),
                        validateOnBlur: false
                    })}
                    placeholder="HH"
                />
                <DateInput
                    {...text({
                        name: "openMinute",
                        validate: (value: string, values: string[]) =>
                            validateMinute(value, values),
                        validateOnBlur: false
                    })}
                    placeholder="MM"
                />
            </FormGroup>

            <H5 mb={1}>Close application </H5>
            <Caption size="M"> Date </Caption>
            <FormGroup error={!isValidForm}>
                <DateInput
                    {...text({
                        name: "closeDay",
                        validate: (value: string) => validateDay(value)
                    })}
                    placeholder="DD"
                />
                <DateInput
                    {...text({
                        name: "closeMonth",
                        validate: (value: string) => validateMonth(value)
                    })}
                    placeholder="MM"
                />
                <DateInput
                    {...text({
                        name: "closeYear",
                        validate: (value: string) => validateYear(value)
                    })}
                    placeholder="YYYY"
                />
                <DateInput
                    time="true"
                    {...text({
                        name: "closeHour",
                        validate: (value: string) => validateHour(value)
                    })}
                    placeholder="HH"
                />
                <DateInput
                    {...text({
                        name: "closeMinute",
                        validate: (value: string, values: string[]) =>
                            validateMinute(value, values)
                    })}
                    placeholder="MM"
                />
            </FormGroup>

            {!isValidForm ? (
                <Button type="submit" disabled>
                    Save
                </Button>
            ) : (
                <Button type="submit">Save</Button>
            )}
        </form>
    );
};

export default SetupApplicationForm;
