import { useMemo, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { Box } from "@mui/material";

const baseStyle = {
    padding:'16px',
    display:'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as 'center',
    width:'100%',
    height:'100%',
    border:'2px dashed',  
};

const focusedStyle = {
    border: '2px dashed #2196f3'
};

const acceptStyle = {
    border: '2px dashed #00e676'
};

const rejectStyle = {
    border: '2px dashed #ff1744'
};

interface DragNDropProps{
    preview: string;
    onChangeFile: (file: File) => void;
}

export const DragNDrop = (props: DragNDropProps) => {
    
    const onDrop = useCallback((acceptedFiles: File[]) => {       
        props.onChangeFile(acceptedFiles[0]);
    }, [])

    const {getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject} = useDropzone({
        onDrop,
        maxFiles:1,
        accept:{
            'image/jpeg': ['.jpeg', '.png'],
            'image/png': ['.png']
        }
    })

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);


    return(
        <Box sx={{
            width:'100%',
            height:'300px',
            cursor: 'pointer',
            // maxWidth: '500px',
            p:2,
            mt:1,
            mx: 'auto',
            borderRadius: 1,
            background:'#f1f1f1',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...(props.preview && !isDragAccept &&{
                backgroundImage: 'url('+props.preview+')'
            })
        }}>
            <div {...getRootProps({style})}>
            <input id="DragNDrop" {...getInputProps()} />
            {
                isDragAccept ?
                (
                    <>
                        <p>Solte a imagem aqui...</p>
                        <AddPhotoAlternateRoundedIcon sx={{width:'50px', height:'auto'}} />
                    </>
                ) : props.preview?
                '':
                <span>Arraste a foto do Pet para cá, ou clique para selecionar uma imagem</span>
            }
            
            </div>
        </Box>       
    )
}