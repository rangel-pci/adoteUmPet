import { useState, useEffect } from "react";
import { createTheme } from '@mui/material';
import paletteTheme from "../../../../ui/themes/theme";
import { setCookie } from 'nookies';
import { toast } from "react-toastify";
import { ApiService } from "../../../services/api";
import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

export function useCadastro(cookieTheme: 'dark'|'light'){
    const [themeMode, setThemeMode] =  useState(cookieTheme ? cookieTheme : 'dark');
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState();
    const [preview, setPreview] = useState('');
    const [registerLoading, setRegisterLoading] = useState(false);

    const changeThemeMode = () => {
        const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newThemeMode);
        setCookie(null, 'app_theme_mode', newThemeMode, { maxAge: 31536000, path: '/'});
    }
    const theme = createTheme(paletteTheme(themeMode));

    function register(){
        registerValidate(() => {
            setRegisterLoading(true);

            ApiService.post('/pet', {
                name,
                about,
                image
            })
            .then(() => {
                cleanRegisterForm();
                toast.success('Pet cadastrado com sucesso! 😻');
                setRegisterLoading(false);
            })
            .catch((err) => {
                toast.error(err.response?.data.message);
                setRegisterLoading(false);
            })
        });
    }

    const cleanRegisterForm = () => {
        setName('');
        setAbout('');
        setImage('');
        setPreview('');
        setImageFile(undefined);
    }

    yup.setLocale(pt);
    const registerSchema = yup.object().shape({
        Nome: yup.string().required().min(3).max(50),
        'História': yup.string().required(),
        'Foto': yup.string().required(),
    });

    const registerValidate = (fallback: () => void) => {
        registerSchema.validate({
            Nome: name,
            'História': about,
            'Foto': image,
        })
        .then((valid) => {
            console.log('valid: ', valid);
            fallback();
        })
        .catch((err) => {
            err.errors.map((msg: string) => {
                toast.error(msg);
            })
        });
    };

    const changeImageFile = (file: File) => {
        setPreview(URL.createObjectURL(file));
        URL.revokeObjectURL(preview);

        const reader = new FileReader()
        reader.onabort = () => console.log('Leitura de imagem abortada');
        reader.onerror = () => console.log('Falha na leitura da imagem');
        reader.onloadend = () => {
            const base64 = reader.result;
            setImage(''+base64);
        };
        reader.readAsDataURL(file);
    }

    return {
        themeMode,
        changeThemeMode,
        theme,
        name,
        about,
        image,
        setName,
        setAbout,
        setImage,
        register,
        registerLoading,
        imageFile,
        setImageFile,
        preview,
        setPreview,
        changeImageFile
    };
}