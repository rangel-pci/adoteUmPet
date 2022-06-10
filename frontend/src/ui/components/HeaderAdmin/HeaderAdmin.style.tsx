import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
    height: 110px;
    background-color: #b1b1b11f;
    padding: ${({theme}) => theme.spacing(3)};

    ${({ theme }) => theme.breakpoints.down('md')} {
       justify-content: space-between;
    };

    div{
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 970px;
        gap: 2px;
        position: relative;

        .themeSwitch{
            width: fit-content;
            position: absolute;
            bottom: calc(-38px + ${({theme}) => theme.spacing(-3)});
            right: 0;
        }
    }

    .mobileMenu{
        ${({ theme }) => theme.breakpoints.up('sm')} {
            display: none;
        };
    }

    a{
        font-size: 1rem;
    }
`;

export const Logo = styled('img')`
    width: 175px;
    cursor: pointer;
`;

export const LinksContainer = styled('nav')`
    display: flex;
    gap: ${({theme}) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: flex-end;
    row-gap: 2px;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        display: none;
    };
`;