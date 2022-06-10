import { HeaderContainer, Logo, LinksContainer } from "../HeaderAdmin/HeaderAdmin.style"
import MobileMenuButton from "./MobileMenuButton"
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import { FormGroup, Switch, Link } from '@mui/material';
import NextLink  from 'next/Link';
import { useRouter } from 'next/router';

interface propsType{
    onChange: () => void;
    themeMode: 'dark'|'light';
}

export default function HeaderAdmin(props: propsType){
    const changeTheme = () => {
        props.onChange();
    }

    const router = useRouter();


    return (
            <HeaderContainer>
                <div>
                    <NextLink href="/"><Logo src={'/images/logo.svg'} /></NextLink>
                    <LinksContainer>
                        <Link component={NextLink} href={'/pet/cadastro'}><a>Cadastrar Pet</a></Link>
                        <Link component={NextLink} href={'/pet/relatorio'}><a>Relatório de Adoção</a></Link>
                    </LinksContainer>

                    <MobileMenuButton />
                    

                    <FormGroup className="themeSwitch" sx={{ display:'flex'}} title="Alterar Tema">
                        <div onClick={changeTheme}
                        style={{ display:'flex', alignItems:'center', cursor:'pointer', width:'fit-content', WebkitTapHighlightColor:'transparent' }}>
                            <Switch checked={props.themeMode === 'dark'} />
                            {props.themeMode === 'dark' ? (
                                    // <Brightness7RoundedIcon />
                                    <span>🌞</span>
                                ):(
                                    // <Brightness4RoundedIcon />
                                    <span>🌚</span>
                                )
                            }
                        </div>
                    </FormGroup>
                </div>
            </HeaderContainer>
    )
}