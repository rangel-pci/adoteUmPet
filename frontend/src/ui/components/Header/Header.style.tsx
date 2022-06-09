import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: ${({theme}) => theme.spacing(3)};
    

    ${({ theme }) => theme.breakpoints.down('md')} {
       justify-content: space-between;
    };
`;

export const Logo = styled('img')`
    justify-self: center;
    width: 175px;

    /* ${({ theme }) => theme.breakpoints.down('sm')} {
       width: 180px;
    }; */
`;