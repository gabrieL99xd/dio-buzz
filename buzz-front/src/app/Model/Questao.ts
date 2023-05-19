import { Alternativa } from './Alternativa'

export type Questao = {
    id: number;
    questionDescription : string;
    alternatives : Alternativa[];
};