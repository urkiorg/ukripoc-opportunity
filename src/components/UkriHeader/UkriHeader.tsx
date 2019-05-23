import React, { FC, useCallback } from "react";
import {
    NTA_LIGHT,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_QUERIES,
    SPACING
} from "@govuk-react/constants";
import styled from "styled-components";
import { Link } from "@reach/router";
import Auth, { CognitoUser } from "@aws-amplify/auth";

export const routes: {
    [key: string]: string;
} = {
    Home: "/",
    Opportunities: "opportunity",
    Schedule: "/",
    Reporting: "/",
    "User & Organisation": "/",
    "Award setup": "/",
    Award: "/",
    Outcomes: "/"
};

const LogoAnchor = styled("a")`
    display: inline-block;
    padding: 19px ${SPACING.SCALE_3} 19px 0;
`;

const Logo = styled.img`
    width: 122px;
    height: 32px;
`;
const TopBannerWrapper = styled("div")(({ color }) => ({
    display: "flex",
    justifyContent: "center",
    color,
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    fontSize: FONT_SIZE.SIZE_14,
    lineHeight: LINE_HEIGHT.SIZE_14,
    [MEDIA_QUERIES.LARGESCREEN]: {
        fontSize: FONT_SIZE.SIZE_16,
        lineHeight: LINE_HEIGHT.SIZE_16
    }
}));

const BrandingHeader = styled("span")`
    font-size: 38px;
    color: #999;
`;

const LogoSearchWrapper = styled("div")({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
});

const MainNavWrapper = styled("div")({
    background: `linear-gradient(to right, 
                rgba(42,80,141,1) 0%,rgba(42,80,141,1) 25%,
                rgba(131,77,149,1) 25%,rgba(131,77,149,1) 50%,
                rgba(56,128,118,1) 50%,rgba(56,128,118,1) 75%,
                rgba(181,79,35,1) 75%,rgba(181,79,35,1) 100%)`,
    paddingTop: "10px"
});

const Centerer = styled("div")`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

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
    }
`;

const UserDetails = styled.div`
    justify-self: flex-end;
    align-self: flex-start;
    margin-left: auto;
    margin-top: 5px;
    margin-right: 0;
`;

const MainNav = styled("nav")({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "middle",
    alignItems: "stretch"
});

const MainNavItem = styled(Link)`
    display: flex;
    font-family: ${NTA_LIGHT};
    flex-flow: row wrap;
    justify-content: middle;
    align-items: center;
    border-right: 1px solid #999;
    padding: 10px 15px;
    text-decoration: none;
    color: #6a6a6a;
    line-height: 1.2em;
    vertical-align: middle;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }

    &:first-child {
        border-left: 1px solid #999;
    }

    > * {
        white-space: nowrap;
    }
`;

const Logout = styled.button`
    font-size: ${FONT_SIZE.SIZE_14};
    background: none;
    border: none;
    font-family: ${NTA_LIGHT};
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        text-decoration: none;
    }
`;

interface Props {
    user?: CognitoUser;
}

export const UkriHeader: FC<Props> = ({ user }) => {
    const logout = useCallback(() => {
        try {
            Auth.signOut();
        } catch (error) {
            console.log("Error!", error);
        }
    }, []);

    return (
        <React.Fragment>
            <TopBannerWrapper>
                <Centerer>
                    <LogoSearchWrapper>
                        <LogoAnchor href={"/"}>
                            <Logo
                                src={require("./logo.svg")}
                                alt="UK Research and Innovation"
                            />
                        </LogoAnchor>
                        <BrandingHeader>Funding service</BrandingHeader>
                        {user && (
                            <UserDetails>
                                {user.getUsername()}{" "}
                                <Logout onClick={logout}>Logout</Logout>
                            </UserDetails>
                        )}
                    </LogoSearchWrapper>
                </Centerer>
            </TopBannerWrapper>
            <MainNavWrapper>
                <Centerer style={{ backgroundColor: "#e4e4e4" }}>
                    <MainNav>
                        {Object.keys(routes).map(item => (
                            <MainNavItem to={routes[item]} key={item}>
                                <span>{item}</span>
                            </MainNavItem>
                        ))}
                    </MainNav>
                </Centerer>
            </MainNavWrapper>
        </React.Fragment>
    );
};

export default UkriHeader;
