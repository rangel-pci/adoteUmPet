import { Backdrop, Button, CircularProgress, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { ToastContainer } from "react-toastify";
import { themeProps } from "../../data/@types/Theme";
import { useRelatorio } from "../../data/hooks/pages/pet/useRelatorio";
import HeaderAdmin from "../../ui/components/HeaderAdmin/HeaderAdmin";
import Title from "../../ui/components/Title/Title";
import { styled } from '@mui/material/styles';

import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

const Relatorio: NextPage<themeProps> = (props) => {
    
    const {
        themeMode,
        changeThemeMode,
        theme,
        reportList
    } = useRelatorio(props.app_theme_mode);

    const formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'BRL',
    });


    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      }));

    return(
        <ThemeProvider theme={theme}>
            <Head>
                <title>Adote um Pet - Relatório</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CssBaseline>
                <HeaderAdmin
                onChange={changeThemeMode}
                themeMode={themeMode}
                />

                <Title
                    title={'Relatório de Adoções'}
                    subtitle={<span>Confira a lista de Pets adotados.</span>}
                />
                <Container>
                    <TableContainer component={Paper} sx={{maxWidth: '970px', mx:'auto', p:2, my: 1}}>
                        {reportList.length > 0 ?
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Pet</TableCell>
                                    <TableCell>E-mail do Adotante</TableCell>
                                    <TableCell align={'right'}>Valor Mensal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {reportList.map((report) => (
                                    <StyledTableRow key={report.id}>
                                        <TableCell>{report.pet.name}</TableCell>
                                        <TableCell>{report.email}</TableCell>
                                        <TableCell align={'right'}> {formatter.format(parseFloat(report.value))}</TableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                        :
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <CircularProgress color="secondary" />
                        </div>
                        }
                    </TableContainer>
                </Container>

                
                {/* <CircularProgress color="secondary" /> */}


                <ToastContainer
                    position='bottom-left'
                    autoClose={5000}
                    draggable={false}
                    theme={themeMode}
                    newestOnTop={true}
                />
            </CssBaseline>
        </ThemeProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parseCookies(context);
  
    return {
      props: {
        app_theme_mode: cookies.app_theme_mode === undefined ? 'dark' : cookies.app_theme_mode,
      },
    }
};

export default Relatorio