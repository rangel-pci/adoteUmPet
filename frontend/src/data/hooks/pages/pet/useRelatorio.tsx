import { useState, useEffect } from "react";
import { createTheme } from '@mui/material';
import paletteTheme from "../../../../ui/themes/theme";
import { setCookie } from 'nookies';
import { toast } from "react-toastify";
import { ApiService } from "../../../services/api";
import { AdoptionReport } from "../../../@types/AdoptionReport";

export function useRelatorio(cookieTheme: 'dark'|'light'){
    const [themeMode, setThemeMode] =  useState(cookieTheme ? cookieTheme : 'dark');
    const [reportList, setReportList] =  useState<AdoptionReport[]>([]);

    const changeThemeMode = () => {
        const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newThemeMode);
        setCookie(null, 'app_theme_mode', newThemeMode, { maxAge: 31536000, path: '/'});
    }
    const theme = createTheme(paletteTheme(themeMode));

    useEffect(() => {
        ApiService.get('/adoption')
        .then((res) => {
            setReportList(res.data);
            
            // res.data.map((k) => {
            //     console.log('report : '+k.id+', pet.name: '+k.pet.name);
            // })
        })
        .catch((err) => {
            toast.error(err.response?.data.message);
        });
    }, []);

    return {
        themeMode,
        changeThemeMode,
        theme,
        reportList
    };
}