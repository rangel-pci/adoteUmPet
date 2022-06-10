import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';
import HeaderAdmin from '../ui/components/HeaderAdmin/HeaderAdmin';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';
import { CssBaseline, ThemeProvider, Dialog, TextField, DialogActions, Button, CircularProgress, Backdrop } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';
import Head from 'next/head';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { themeProps } from '../data/@types/Theme';

const Home: NextPage<themeProps> = (props) => {

  const {
    themeMode,
    changeThemeMode,
    theme,
    petList,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    value,
    setValue,
    adopt,
    adoptionLoading
  } = useIndex(props.app_theme_mode);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Adote um Pet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CssBaseline>
        <HeaderAdmin
          onChange={changeThemeMode}
          themeMode={themeMode}
        />

        <Title
          title={''}
          subtitle={<span>Com um pequeno valor mensal,<br/>você pode <strong>adotar um pet virtualmente</strong>.</span>}
        />

        <List
          pets={petList}
          onSelect={(pet) => setPetSelected(pet)}
        />

        <Dialog 
          open={petSelected !== null} 
          onClose={() => setPetSelected(null)} 
          fullWidth 
          PaperProps={{ sx:{p:'24px'} }}
          sx={{zIndex: 2}}
        >
          <TextField 
            label={'E-mail'} 
            type={'email'} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            label={'Quantia Por Mês'} 
            type={'number'} 
            sx={{ mt: 2 }}  
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
          />

          <DialogActions  sx={{ mt: 3 }}>
            <Button 
              disabled={adoptionLoading} 
              color={'secondary'} 
              onClick={() => setPetSelected(null)}
            >
              Cancelar
            </Button>
            <Button 
              disabled={adoptionLoading} 
              variant={'contained'} 
              sx={{ boxShadow:'none' }} 
              onClick={() => adopt()} 
            >
              Confirmar Adoção
            </Button>
          </DialogActions>
        </Dialog>

        <Backdrop open={adoptionLoading} sx={{zIndex: 100}}>
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

export default Home
