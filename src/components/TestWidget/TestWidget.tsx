import React, { FC, HTMLAttributes } from "react";
import cx from "classnames";
import styles from "./TestWidget.module.scss";
import Panel from "@govuk-react/panel";
import Button from "@govuk-react/button";

interface Props extends HTMLAttributes<HTMLElement> {}

export const TestWidget: FC<Props> = ({ className, ...props }) => (
    <div className={cx(styles.wrap, className)} {...props}>
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
