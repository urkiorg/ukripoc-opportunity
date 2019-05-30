import React, {
    SyntheticEvent,
    useCallback,
    FC,
    useState,
    useEffect
} from "react";
import { useFormState } from "react-use-form-state";
import { useMutation } from "react-apollo-hooks";

import { gql } from "apollo-boost";

import { updateApplication } from "../../graphql/mutations";

import { navigate } from "@reach/router";
import { UpdateApplicationMutation, GetApplicationQuery } from "../../API";

import { DateInput, InputErrorText } from "../../theme";

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

    const [validForm, setValidForm] = useState<boolean>(true);

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

    const [formState, { text }] = useFormState(initialState);

    const UPDATE_APPLICATION = gql(updateApplication);
    const updateApplicationMutation = useMutation<UpdateApplicationMutation>(
        UPDATE_APPLICATION
    );

    const checkForErrors = () => {
        let isValidSoFar = true;
        const openDate = new Date();
        openDate.setFullYear(
            formState.values.openYear,
            formState.values.openMonth - 1,
            formState.values.openDay
        );
        if (
            openDate.getFullYear() !== formState.values.openYear ||
            openDate.getMonth() !== formState.values.openMonth + 1 ||
            openDate.getDate() !== formState.values.openDay
        ) {
            isValidSoFar = false;
        }

        const closeDate = new Date();
        closeDate.setFullYear(
            formState.values.closeYear,
            formState.values.closeMonth - 1,
            formState.values.closeDay
        );
        if (
            (isValidSoFar === true &&
                closeDate.getFullYear() !== formState.values.closeYear) ||
            closeDate.getMonth() !== formState.values.closeMonth + 1 ||
            closeDate.getDate() !== formState.values.closeDay
        ) {
            isValidSoFar = false;
        }

        Object.keys(formState.errors).length && !isValidSoFar
            ? setValidForm(false)
            : setValidForm(true);
    };

    useEffect(() => {
        checkForErrors();
    }, [formState]);

    const updateApplicationCB = useCallback(
        async (openApplicationDate: string, closeApplicationDate: string) => {
            const result = await updateApplicationMutation({
                variables: {
                    input: {
                        id: application.getApplication!.id,
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
        [updateApplicationMutation]
    );

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        let year = formState.values.openYear;
        let month = formState.values.openMonth;
        let day = formState.values.openDay;
        let hour = formState.values.openHour;
        let minute = formState.values.openMinute;

        const openDate = new Date(year, month, day, hour, minute).toISOString();

        year = formState.values.closeYear;
        month = formState.values.closeMonth;
        day = formState.values.closeDay;
        hour = formState.values.closeHour;
        minute = formState.values.closeMinute;

        const closeDate = new Date(
            year,
            month,
            day,
            hour,
            minute
        ).toISOString();

        updateApplicationCB(openDate, closeDate);
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

    function validateMinute(value: string) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 59) {
            return "Incorrect";
        }
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            {!validForm && (
                <InputErrorText>
                    Please ensure dates are filled correctly
                </InputErrorText>
            )}
            <H5 mb={1}> Open application </H5>
            <Caption size="M">Date</Caption>
            <FormGroup error={!validForm}>
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
                            validateMinute(value),
                        validateOnBlur: false
                    })}
                    placeholder="MM"
                />
            </FormGroup>

            <H5 mb={1}>Close application </H5>
            <Caption size="M"> Date </Caption>
            <FormGroup error={!validForm}>
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
                            validateMinute(value)
                    })}
                    placeholder="MM"
                />
            </FormGroup>

            {!validForm ? (
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
