import { Link, Tooltip, IconButton, MenuItem, Menu, Backdrop } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NextLink  from 'next/Link';
import { useState } from "react";

export default function MobileMenuButton(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (e: any) => {
        setAnchorEl(e.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }
    
    return(
        <>
            <Tooltip title="" className='mobileMenu'>
                <IconButton
                    onClick={handleOpenMenu}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <MenuRoundedIcon sx={{ width:'40px', height:'40px' }} />
                </IconButton>
            </Tooltip>

            <Menu
                className='mobileMenu'
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5
                },
                }}
                BackdropProps={{
                    sx: {
                        overflow: 'visible',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Link component={NextLink} href={'/pet/cadastro'}><a>Cadastrar Pet</a></Link>
                </MenuItem>
                <MenuItem>
                    <Link component={NextLink} href={'/pet/relatorio'}><a>Relatório de Adoção</a></Link>
                </MenuItem>
            </Menu>
        </>
    )
}