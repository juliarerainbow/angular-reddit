export interface Post {
    id:string;
    title:string;
    created:number;
    author:string;
    url:string;
    permalink:string;
    thumbnail:string;
    isFave?: boolean;
}
