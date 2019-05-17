import React, { FC, HTMLAttributes } from "react";
import Panel from "@govuk-react/panel";
import Button from "@govuk-react/button";

interface Props extends HTMLAttributes<HTMLElement> {}

export const TestWidget: FC<Props> = ({ className, ...props }) => (
    <div {...props}>
        <Panel title="Application complete">
            Your reference number
            <br />
            <strong>HDJ2123F</strong>
            <p>
                <Button>Hooray!</Button>
            </p>
        </Panel>
    </div>
);

export default TestWidget;
