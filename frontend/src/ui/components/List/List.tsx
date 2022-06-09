import { Button, CircularProgress } from '@mui/material';
import {
    ListStyled,
    ListItem,
    Image,
    Informations,
    Name,
    About
} from './List.style';
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService';

interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps){
    const textMaxSize = 200;

    return(
        <>
        {props.pets.length > 0  ?
        <ListStyled>
            {props.pets.map(pet => (               
                <ListItem key={pet.id}>
                    <Image src={pet.image} alt={pet.name} />
                    <Informations>
                        <Name>{pet.name}</Name>
                        <About>
                            {TextService.textLimit(pet.about, textMaxSize)}
                        </About>
                        <Button variant={'contained'} fullWidth onClick={() => props.onSelect(pet)}>Adotar {pet.name}</Button>
                    </Informations>
                </ListItem>
            ))}
        </ListStyled>
        :
        <div style={{display:'flex', justifyContent:'center'}}>
            <CircularProgress color="secondary" />
        </div>
        }
        </>
    )
}