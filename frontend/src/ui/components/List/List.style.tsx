import { alpha, styled } from '@mui/material';

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const ListItem = styled('li')`
    background-color: ${ ({ theme }) => theme.palette.primary.main + '10' };

    border: 1px dashed ${({ theme }) => theme.palette.primary.main};
    border-radius: 1px;
    padding: ${({ theme }) => theme.spacing(1)};

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(2)};
        margin-bottom: ${({ theme }) => theme.spacing(8)};;
    };
`;

export const Image = styled('img')`
    width: 100%;
    margin: auto;
    max-height: 280px;
    object-fit: cover;
`;

export const Informations = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
`;

export const Name = styled('h2')`
    margin: 0;
`;

export const About = styled('p')`
    margin: 0;
    word-break: break-word;
    flex: 1;
`;