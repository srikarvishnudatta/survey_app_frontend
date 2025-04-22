export interface CustomProps{
    className?:string;
}
export interface NewEventType {
    title: string;
    location: string;
    eventDate: Date;
}
export interface EventData{
    id:number;
    title:string;
    eventDate: string;
    location:string;
    generatedLink:string;
}
export interface SurveyResponseData{
    name:string;
    rating:number;
    feedback:string;
}