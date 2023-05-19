

export type QuizzChallangePageModel = {
    id:number;
    title:string;
    description:string;
    questions:QuestaoChallange[];
};


export type QuestaoChallange = {
    id: number;
    questionDescription : string;
    clicked:boolean;
    alternatives : AlternativaChallange[];
};

export type AlternativaChallange = { 
    id : number;
    alternativeDescription : string;
    isCorrect : boolean;
    isSelected : boolean;
};