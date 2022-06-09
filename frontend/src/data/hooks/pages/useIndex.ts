import { useState, useEffect } from "react";
import { createTheme } from '@mui/material';
import paletteTheme from "../../../ui/themes/theme";
import { setCookie } from 'nookies';
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/api";
import { toast } from "react-toastify";
import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

export function useIndex(cookieTheme: 'dark'|'light'){
    const [themeMode, setThemeMode] =  useState(cookieTheme ? cookieTheme : 'dark');
    const [petList, setPetList] = useState<Pet[]>([]);
    const [petSelected, setPetSelected] = useState<Pet | null>(null); 
    const [email, setEmail] = useState(''); 
    const [value, setValue] = useState('');
    const [adoptionLoading, setAdoptionLoading] = useState(false);

    useEffect(() => {
        ApiService.get('/pet')
        .then((res) => {
            setPetList(res.data);
        })
    }, []);

    const changeThemeMode = () => {
        const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newThemeMode);
        setCookie(null, 'app_theme_mode', newThemeMode, { maxAge: 31536000, path: '/'});
    }
    const theme = createTheme(paletteTheme(themeMode));

    const adopt = () => {
        if(petSelected !== null){
            adoptionValidate(() => {
                setAdoptionLoading(true);

                ApiService.post('/adoption', {
                    pet_id: petSelected.id,
                    email,
                    value
                })
                .then(() => {
                    setPetSelected(null);
                    cleanAdoptionForm();
                    toast.success('Pet adotado com sucesso! 😻');
                    setAdoptionLoading(false);
                })
                .catch((err) => {
                    toast.error(err.response?.data.message);
                    setAdoptionLoading(false);
                })
            });
        }
    }

    const cleanAdoptionForm = () => {
        setEmail('');
        setValue('');
    }

    yup.setLocale(pt);
    const adoptionSchema = yup.object().shape({
        Email: yup.string().required().email(),
        'Quantia mensal': yup.number().required().min(10).max(100),
    });

    // se o formuláro for válido chama a fallback()
    const adoptionValidate = (fallback: () => void) => {
        adoptionSchema.validate({
            Email: email,
            'Quantia mensal': value,
        })
        .then((valid) => {
            console.log('valid: ', valid);
            fallback();
        })
        .catch((err) => {
            err.errors = value < '0' ? ['Informe uma quantia mensal'] : err.errors;
            err.errors.map((msg: string) => {
                toast.error(msg);
            })

            
        });
    }

    return {
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
        adoptionLoading,
    };
}