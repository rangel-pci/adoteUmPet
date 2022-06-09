import { styled } from '@mui/material';

export const TitleStyled = styled('h1')`
    font-size: 1.3rem;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(5)};

`;

export const SubTitle = styled('h2')`
    font-size: 1rem;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    font-weight: normal;
    color: ${({ theme }) => theme.palette.text.secondary}
`;