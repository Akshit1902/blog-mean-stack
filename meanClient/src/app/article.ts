export class Article {
    public id:String;
    public title:String;
    public author:String;
    public markdown:String;
    public createdAt:Date;
    public like:number;
    public dislike:number;

    constructor(){
    this.id='';
    this.title='';
    this.author='';
    this.markdown='';
    this.like=0;
    this.dislike=0;
    }
    
     
}
