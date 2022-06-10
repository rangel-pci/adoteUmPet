// import { createTheme } from '@mui/material';
import { PaletteMode } from "@mui/material";

const paletteTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: '#AE0FEA',
        },
        secondary: {
            main: '#C5C5C5',
        },
        background: {
            ...(mode === 'dark' &&{
                default: '#22272E',    
            }),
        },
        text: {
            primary: '#293845',
            secondary: '#9EADBA',
            ...(mode === 'dark' &&{
                primary: '#ADBAC7',
                secondary: '#768390',
            }),
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        button: {
            textTransform: undefined,
          },
    },
    shape: {
        borderRadius: 3,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '1px',
                    fontWeight: 'normal',
                    
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        fontWeight: 'bold',
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: '1px solid #D8D8D8',
                },
            },
        },
    },
});

export default paletteTheme;