import { Pet } from "./Pet";

export interface AdoptionReport{
    id: number;
    email: string;
    value: string;
    pet: Pet;
}