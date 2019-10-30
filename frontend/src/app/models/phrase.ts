
export class Phrase{
    public id?: string;
    public user?: {};
    public title?: string;
    public description?: string;
    public date?: string;
    public category?: string;

    public constructor(id: string, user: string, title: string, description: string, date: string, category: string){
        this.id = id;
        this.user = user;
        this.title = title;
        this.description = description;
        this.date = date;
        this.category = category;    
    }
}