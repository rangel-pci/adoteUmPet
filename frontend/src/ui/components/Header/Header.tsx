import { HeaderContainer, Logo } from './Header.style';
import Switch from '@mui/material/Switch';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import FormGroup from '@mui/material/FormGroup';

interface propsType{
    onChange: () => void;
    themeMode: 'dark'|'light';
}

export default function Header(props: propsType){
    const changeTheme = () => {
        props.onChange();
    }

    return(
        <HeaderContainer>
            <Logo src="/images/logo.svg" alt="Adote um Pet" />
            
            <FormGroup sx={{ justifySelf:'flex-center'}}>
                <div onClick={changeTheme}
                style={{ display:'flex', alignItems:'center', cursor:'pointer', width:'fit-content', WebkitTapHighlightColor:'transparent' }}>
                    <Switch checked={props.themeMode === 'dark'} />
                    {props.themeMode === 'dark' ? (
                            <Brightness7RoundedIcon />
                        ):(
                            <Brightness4RoundedIcon />
                        )
                    }
                </div>
            </FormGroup>
            
        </HeaderContainer>
    )
}