export class ArticleESDto {
    id: number;
    name: string;
    author: string;
    keyWords: string;
    articleAbstract: string;
    magazineName: string;  
    scientificField: string;
    file: string;
    fileName: string;
    highlight: string;
    openAccess: boolean;

    constructor() { }
}
