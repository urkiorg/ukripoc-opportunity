import React, { FC } from "react";
import {
    NTA_LIGHT,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_QUERIES,
    SPACING
} from "@govuk-react/constants";

import styled from "styled-components";
import Link from "@govuk-react/link";

const DARK_GREY = "#666666";

const MainNavWrapper = styled("div")({
    background: `linear-gradient(to right, 
                rgba(42,80,141,1) 0%,rgba(42,80,141,1) 25%,
                rgba(131,77,149,1) 25%,rgba(131,77,149,1) 50%,
                rgba(56,128,118,1) 50%,rgba(56,128,118,1) 75%,
                rgba(181,79,35,1) 75%,rgba(181,79,35,1) 100%)`,
    paddingBottom: "10px"
});

const FooterMeta = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #e4e4e4;

    font-family: ${NTA_LIGHT};
    font-weight: 400;
    font-size: ${FONT_SIZE.SIZE_16};
    line-height: ${LINE_HEIGHT.SIZE_16};

    padding: ${SPACING.SCALE_5} 0;

    > * {
        flex: 1;
        width: 100%;
        max-width: 960px;
        margin-left: 15px;
        margin-right: 15px;
        ${MEDIA_QUERIES.MEDIUMSCREEN} {
            margin-left: 30px;
            margin-right: 30px;
        }
        ${MEDIA_QUERIES.LARGESCREEN} {
            margin: 0 auto;
        }
        a:link,
        a:visited {
            margin-right: ${SPACING.SCALE_3};
            color: ${DARK_GREY};
        }
    }
`;

export const UkriFooter: FC = ({ ...props }) => (
    <React.Fragment>
        <MainNavWrapper>
            <FooterMeta>
                <div>
                    <Link textColour={DARK_GREY} href="/help">
                        Help
                    </Link>
                    <Link textColour={DARK_GREY} href="/help">
                        UKRI public website
                    </Link>
                    <Link textColour={DARK_GREY} href="/terms">
                        Terms and conditions
                    </Link>
                </div>
            </FooterMeta>
        </MainNavWrapper>
    </React.Fragment>
);

export default UkriFooter;
