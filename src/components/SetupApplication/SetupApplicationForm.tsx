import React, {
    SyntheticEvent,
    FC,
    useState,
    useEffect,
    useCallback
} from "react";
import { useFormState } from "react-use-form-state";

import { DateInput } from "../../theme";

import FormGroup from "@govuk-react/form-group";
import Button from "@govuk-react/button";
import { H5 } from "@govuk-react/heading";
import Caption from "@govuk-react/caption";
import { GetApplicationQuery } from "../../API";
import ErrorText from "@govuk-react/error-text";
interface Props {
    application: GetApplicationQuery;
    updateApplication: (openDate: string, closeDate: string) => void;
}

export const SetupApplicationForm: FC<Props> = ({
    application,
    updateApplication
}) => {
    let initialState = {};

    const [validForm, setValidForm] = useState<boolean>(true);
    const [dateError, setDateError] = useState<string | undefined>(undefined);

    const validateForm = useCallback(() => {
        const errors: any[] = [];
        if (dateError) {
            errors.push({ text: dateError, targetName: "date" });
        }
        return !errors.length;
    }, [dateError]);

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
            openMinute: getFormattedMinutes(
                openDate.getMinutes(),
                openDate.getFullYear()
            ),

            closeYear: closeDate.getFullYear() || "",
            closeMonth: closeDate.getMonth() + 1 || "",
            closeDay: closeDate.getDate() || "",
            closeHour: closeDate.getHours() || "",
            closeMinute: getFormattedMinutes(
                closeDate.getMinutes(),
                openDate.getFullYear()
            )
        };
    }

    const [formState, { text }] = useFormState(initialState);

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        if (!correctDate()) {
            return false;
        }

        const openDate = new Date(
            formState.values.openYear,
            formState.values.openMonth - 1,
            formState.values.openDay,
            formState.values.openHour,
            formState.values.openMinute
        );

        const closeDate = new Date(
            formState.values.closeYear,
            formState.values.closeMonth - 1,
            formState.values.closeDay,
            formState.values.closeHour,
            formState.values.closeMinute
        );

        updateApplication(openDate.toISOString(), closeDate.toISOString());
    }

    function correctDate() {
        let year = formState.values.openYear;
        let month = formState.values.openMonth - 1;
        let day = formState.values.openDay;
        let hour = formState.values.openHour;
        let minute = formState.values.openMinute;

        const openDate = new Date(year, month, day, hour, minute);

        year = formState.values.closeYear;
        month = formState.values.closeMonth - 1;
        day = formState.values.closeDay;
        hour = formState.values.closeHour;
        minute = formState.values.closeMinute;

        const closeDate = new Date(year, month, day, hour, minute);

        const today = new Date();

        if (openDate < today) {
            setDateError("Open date must be after today");
            return false;
        }

        if (openDate > closeDate) {
            setDateError("Open date must be before the closing date");
            return false;
        }

        setDateError(undefined);
        return true;
    }

    function validateDay(value: string) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue) || intValue > 31) {
            return "Incorrect";
        }
    }

    function validateYear(value: string) {
        const intValue = parseInt(value);
        if (!value || isNaN(intValue)) {
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

    function getFormattedMinutes(minute: number, year: number) {
        if (minute > 9) {
            return minute;
        } else if (minute > 0 && minute < 10) {
            return `0${minute}`;
        } else if (minute === 0 && year > 0) {
            return "00";
        } else {
            return "";
        }
    }

    useEffect(() => {
        Object.keys(formState.errors).length
            ? setValidForm(false)
            : setValidForm(true);
    }, [formState]);

    return (
        <form onSubmit={handleSubmit}>
            {dateError && <ErrorText> {dateError} </ErrorText>}
            <H5 mb={1}> Open application </H5>
            <Caption size="M">Date</Caption>
            <FormGroup error={!validForm || dateError}>
                <DateInput
                    {...text({
                        name: "openDay",
                        validate: validateDay
                    })}
                    placeholder="DD"
                />
                <DateInput
                    {...text({
                        name: "openMonth",
                        validate: validateMonth
                    })}
                    placeholder="MM"
                />
                <DateInput
                    {...text({
                        name: "openYear",
                        validate: validateYear
                    })}
                    placeholder="YYYY"
                />
                <DateInput
                    time="true"
                    {...text({
                        name: "openHour",
                        validate: validateHour
                    })}
                    placeholder="HH"
                />
                <DateInput
                    {...text({
                        name: "openMinute",
                        validate: validateMinute
                    })}
                    placeholder="MM"
                />
            </FormGroup>

            <H5 mb={1}>Close application </H5>
            <Caption size="M"> Date </Caption>
            <FormGroup error={!validForm || dateError}>
                <DateInput
                    {...text({
                        name: "closeDay",
                        validate: validateDay,
                        validateOnBlur: true
                    })}
                    placeholder="DD"
                />
                <DateInput
                    {...text({
                        name: "closeMonth",
                        validate: validateMonth
                    })}
                    placeholder="MM"
                />
                <DateInput
                    {...text({
                        name: "closeYear",
                        validate: validateYear
                    })}
                    placeholder="YYYY"
                />
                <DateInput
                    time="true"
                    {...text({
                        name: "closeHour",
                        validate: validateHour
                    })}
                    placeholder="HH"
                />
                <DateInput
                    {...text({
                        name: "closeMinute",
                        validate: validateMinute
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
