import { Questao } from "./Questao";

export type Quizz = {
    Id:number;
    title:string;
    description:string;
    questions:Questao[];
};