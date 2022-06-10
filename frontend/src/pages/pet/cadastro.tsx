import { Backdrop, Box, Button, CircularProgress, CssBaseline, Paper, TextField, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { ToastContainer } from "react-toastify";
import { themeProps } from "../../data/@types/Theme";
import { useCadastro } from "../../data/hooks/pages/pet/useCadastro";
import HeaderAdmin from "../../ui/components/HeaderAdmin/HeaderAdmin";
import Title from "../../ui/components/Title/Title";
import 'react-toastify/dist/ReactToastify.css';

import { DragNDrop } from '../../ui/components/RegisterDragNDrop/RegisterDragNDrop';
import Head from "next/head";

const Register: NextPage<themeProps> = (props) => {
    
    const {
        themeMode,
        changeThemeMode,
        theme,
        name,
        about,
        setName,
        setAbout,
        register,
        registerLoading,
        imageFile,
        setImageFile,
        changeImageFile,
        preview,
        setPreview
    } = useCadastro(props.app_theme_mode);


    return(
        <ThemeProvider theme={theme}>
            <Head>
                <title>Adote um Pet - Cadastro</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CssBaseline>
                <HeaderAdmin
                onChange={changeThemeMode}
                themeMode={themeMode}
                />

                <Title
                    title={'Cadastro de Pets para Adoção'}
                    subtitle={<span>Preencha os dados do novo Pet.</span>}
                />
                <Container>
                    <Paper sx={{maxWidth: '970px', mx:'auto', p:2, my: 1}}>

                        <TextField 
                            label={'Nome'} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                        />
                        <TextField 
                            label={'História do Pet'}
                            placeholder={'Fale um pouco sobre o Pet. De onde ele vem? Qual a idade dele?...'}
                            value={about} 
                            onChange={(e) => setAbout(e.target.value)}
                            fullWidth
                            multiline
                            rows={4}
                            sx={{ mt: 2 }}
                        />
                        <Box sx={{mt: 2}}>
                            <label htmlFor="DragNDrop" style={{cursor:'pointer'}}>Foto do Pet</label>
                            <DragNDrop onChangeFile={changeImageFile} preview={preview} />
                        </Box>

                        <Container sx={{mt:4, display:'flex', justifyContent:'center'}}>
                            <Button 
                                disabled={registerLoading} 
                                variant={'contained'} 
                                onClick={() => register()} 
                                fullWidth
                                sx={{boxShadow:'none', maxWidth: {md: '200px'}}}
                            >
                                Cadastrar Pet
                            </Button>
                        </Container>
                    </Paper>
                </Container>

                <Backdrop open={registerLoading} sx={{zIndex: 100}}>
                    <CircularProgress color="secondary" />
                </Backdrop>

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

export default Register