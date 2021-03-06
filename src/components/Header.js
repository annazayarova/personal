import React from 'react';

import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ onClick }) => {
    return (
        <Head>
            <Logo>
                <Link to="/">
            	    Anna Zayarova
        	    </Link>
            </Logo>

            <ToggleThemeWrapper>
                <span>Click me</span>
                <ToggleTheme onClick={ onClick }
				    height="24"
				    width="24"
				    viewBox="0 0 24 24">
				    <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z" />
			    </ToggleTheme>
            </ToggleThemeWrapper>
        </Head>
    );
}

export default Header;

const Head = styled.header`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;
    position: fixed;
    width: 100%;
    z-index: 1;

    @media (max-width: 576px) {
        padding: 30px;
    }
`;

const Logo = styled.div`
    font-family: "kotori_rosebold";
    font-size: 15px;
`;

const ToggleTheme = styled.svg`
	cursor: pointer;
    fill: ${ props => props.theme.red };
    margin-left: 5px;

	@media (max-width: 576px) {
    }
`;

const ToggleThemeWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    font-size: 10px;
    text-transform: uppercase;
    color: ${ props => props.theme.text };
`;
